import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { paramsSchema } from "@/lib/validator";

// Interface for the raw query result
interface QueryResult {
  created_at: Date;
  [key: string]: number | string | Date | null;
}

interface Params {
  location: string;
  unsur: string;
  time: "one-day" | "one-week" | "one-month";
}

export async function GET(
  _request: never, // Remove unused request parameter
  { params }: { params: Promise<Params> }
) {
  try {
    const resolvedParams = await params;
    const result = paramsSchema.safeParse(resolvedParams);
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: result.error.flatten(),
      }, { status: 400 });
    }

    const { location, unsur, time } = result.data;

    // Log inputs for debugging
    console.log("Input parameters:", { location, unsur, time });

    // Determine data source, time range, and row count based on time period
    const tableToUse = time === "one-day" ? "PpmDataSipuber" : "DailyDataSipuber";
    
    // Determine number of rows based on time period (maximum limit)
    const rowCount = time === "one-day" ? 24 : time === "one-week" ? 168 : 720;
    console.log("Row count:", rowCount, "Using table:", tableToUse);

    // Determine time range for the query
    let timeRange;
    if (time === "one-day") {
      timeRange = "1 day";
    } else if (time === "one-week") {
      timeRange = "7 days";
    } else {
      timeRange = "30 days";
    }

    // Check if location exists in the database
    const locationExistsQuery = `SELECT COUNT(*) as count FROM "${tableToUse}" WHERE location = $1`;
    const locationResult = await prisma.$queryRawUnsafe<{ count: number }[]>(locationExistsQuery, location);
    const locationExists = locationResult[0].count > 0;

    if (!locationExists) {
      console.log("Location not found in", tableToUse, ":", location);
      return NextResponse.json({
        success: false,
        message: `No data found for location: ${location}`,
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

    const data = await prisma.$queryRawUnsafe<QueryResult[]>(query, location, rowCount);
    console.log(`Retrieved ${data.length} rows from ${tableToUse}`);

    // Return data even if fewer rows than rowCount are found
    if (data.length === 0) {
      return NextResponse.json({
        success: false,
        message: `No data found for the specified location and time period in ${tableToUse}`,
      }, { status: 404 });
    }

    // Format the response to match the original structure
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