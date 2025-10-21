import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust path to your Prisma client

// Define the response type
interface SipuberResponse {
  latitude: number;
  longitude: number;
  ispu_realtime: number;
  created_at: Date;
}

export async function GET() {
  try {
    // Perform spatial query to get one point per 500-meter radius, selecting the most recent
    const sipuberData: SipuberResponse[] = await prisma.$queryRaw`
      SELECT DISTINCT ON (ST_SnapToGrid(s1.location, 500.0 / 111111.0))
        ST_Y(s1.location) AS latitude,
        ST_X(s1.location) AS longitude,
        s1.ispu_realtime,
        s1.created_at
      FROM "PpmDataSipuber" s1
      WHERE NOT EXISTS (
        SELECT 1
        FROM "PpmDataSipuber" s2
        WHERE ST_DWithin(s2.location::geography, s1.location::geography, 500.0)
        AND s2.created_at > s1.created_at
      )
      ORDER BY ST_SnapToGrid(s1.location, 500.0 / 111111.0), s1.created_at DESC;
    `;

    // Log the number of points returned for debugging
    console.log(`Returned ${sipuberData.length} points from ${new Set(sipuberData.map(d => d.latitude + ',' + d.longitude)).size} unique locations`);

    // If no data is found
    if (!sipuberData || sipuberData.length === 0) {
      return NextResponse.json(
        { msg: 'No data found or no points form distinct 500-meter clusters.' },
        { status: 404 }
      );
    }

    // Return the filtered data
    return NextResponse.json(sipuberData, { status: 200 });
  } catch (error) {
    console.error('Error Fetching PpmDataSipuber Data:', error);
    return NextResponse.json(
      { msg: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}