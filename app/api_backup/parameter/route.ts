import { NextResponse } from "next/server";
import prisma from "./../../../lib/prisma";
import { paramsSchema } from "@/lib/validator";

interface QueryResult {
  created_at: Date;
  [key: string]: number | string | Date | null;
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    console.log("Raw request body:", rawBody);

    let body;
    try {
      body = JSON.parse(rawBody);
    } catch (error) {
      console.error("JSON parsing error:", error);
      return NextResponse.json({
        success: false,
        message: `Invalid JSON in request body: ${error}`,
      }, { status: 400 });
    }

    const result = paramsSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: result.error.flatten(),
      }, { status: 400 });
    }

    const { location, unsur, time } = result.data;
    console.log("Input parameters:", { location, unsur, time });

    // Determine table, row count, and time range
    const tableToUse = time === "one-day" ? "PpmDataSipuber" : "DailyDataSipuber";
    const rowCount = time === "one-day" ? 24 : time === "one-week" ? 168 : 720;
    const timeRange = time === "one-day" ? "1 day" : time === "one-week" ? "7 days" : "30 days";
    console.log("Query details:", { tableToUse, rowCount, timeRange });

    // Check if location exists
    const locationExistsQuery = `SELECT COUNT(*) as count FROM "${tableToUse}" WHERE location = $1`;
    const locationResult = await prisma.$queryRawUnsafe<{ count: number }[]>(locationExistsQuery, location);
    const locationExists = locationResult[0].count > 0;
    console.log("Location exists:", locationExists, "in table:", tableToUse);

    if (!locationExists) {
      console.log("Location not found in", tableToUse, ":", location);
      return NextResponse.json({
        success: false,
        message: `No data found for location: ${location} in ${tableToUse}`,
      }, { status: 404 });
    }

    const query = `
      SELECT 
        "${unsur}",
        location,
        device_id,
        created_at
      FROM "${tableToUse}"
      WHERE 
        location = $1
        AND created_at >= NOW() - INTERVAL '${timeRange}'
        AND "${unsur}" IS NOT NULL
      ORDER BY created_at DESC
      LIMIT $2
    `;
    console.log("Executing query:", query, "with params:", [location, rowCount]);

    const data = await prisma.$queryRawUnsafe<QueryResult[]>(query, location, rowCount);
    console.log(`Retrieved ${data.length} rows from ${tableToUse}`);

    if (data.length === 0) {
      // Log available data for debugging
      const debugQuery = `
        SELECT created_at, location, "${unsur}"
        FROM "${tableToUse}"
        WHERE location = $1
        AND "${unsur}" IS NOT NULL
        ORDER BY created_at DESC
        LIMIT $2
      `;
      const debugData = await prisma.$queryRawUnsafe<QueryResult[]>(debugQuery, location);
      console.log("Debug: Recent data for location:", debugData);

      return NextResponse.json({
        success: false,
        message: `No data found for: ${time}`,
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: data.map((item) => ({
        [unsur]: item[unsur],
        location: item.location,
        device_id: item.device_id,
        created_at: item.created_at,
      })),
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      success: false,
      message: `Internal server error: ${error}`,
    }, { status: 500 });
  }
}