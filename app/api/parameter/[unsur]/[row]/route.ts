import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { paramsSchema } from "@/lib/validator";

interface Params {
  unsur: string;
  row: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const resolvedParams = await params; // Await the params Promise
    const result = paramsSchema.safeParse(resolvedParams)
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: result.error }, { status: 400 });
    }
    const { unsur, row } = result.data

    // Fetch the latest N rows for the specified column
    const data = await prisma.dailyDataSipuber.findMany({
      select: {
        [unsur]: true,
        created_at: true,
        location: true,
        device_id: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: row,
    });

    if (!data || data.length === 0) {
      return NextResponse.json({
        success: false,
         message: "No data found"}, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: data.map((item) => ({
        [unsur]: item[unsur as keyof typeof item],
        created_at: item.created_at,
        location: item.location,
        device_id: item.device_id,
      })),
    }, {status: 200});
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ 
        success: false,
        message: `Internal server error: ${error}` }, { status: 500 });
  } 
}