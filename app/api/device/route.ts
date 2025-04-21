import { NextResponse } from 'next/server';
import prisma from "../../../lib/prisma";


export async function GET() {
  try {
    const devices = await prisma.device.findMany();

    if (!devices || devices.length === 0) {
      return NextResponse.json({
          success: false,
          message: 'No devices found',
        }, { status: 404 }
      );
    }

    return NextResponse.json({
        success: true,
        message: 'Devices retrieved successfully',
        data: devices,}, { status: 200 });
  } catch (error) {
    console.error('Error fetching devices:', error);
    return NextResponse.json({
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred while retrieving devices'}, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.device_name || !body.no_modem || !body.tanggal_paket || !body.user_id) {
      return NextResponse.json({
          success: false,
          message: 'Missing required fields',
        },{ status: 400 });
    }

    const device = await prisma.device.create({
      data: {
        device_name: body.device_name,
        no_modem: body.no_modem,
        tanggal_paket: body.tanggal_paket,
        user_id: body.user_id,
      },
    });

    return NextResponse.json({
        success: true,
        message: 'Device created successfully',
        data: device,
      },{ status: 201 });
  } catch (error) {
    console.error('Error creating device:', error);
    return NextResponse.json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to create device',
      },{ status: 500 });
  }
}
