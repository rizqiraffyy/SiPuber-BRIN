import { NextResponse } from 'next/server';
import prisma from "../../../../lib/prisma";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const deviceId = parseInt(id, 10);

    // Validate ID
    if (isNaN(deviceId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid device ID",
      }, { status: 400 });
    }

    // Check if device exists
    const device = await prisma.device.findUnique({
      where: { id: deviceId },
    });

    if (!device) {
      return NextResponse.json({
        success: false,
        message: `Device id ${deviceId} not found`,
      }, { status: 404 });
    }

    // Check if device is already soft-deleted
    if (device.isSoftDelete) {
      return NextResponse.json({
        success: false,
        message: "Device already deleted",
      }, { status: 404 });
    }

    // Perform soft delete
    await prisma.device.update({
      where: { id: deviceId },
      data: { isSoftDelete: true },
    });

    return NextResponse.json({
      success: true,
      message: `Device ${device.device_name} soft-deleted successfully`,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Error soft-deleting device: ${error instanceof Error ? error.message : 'Unknown error'}`,
    }, { status: 500 });
  }
}