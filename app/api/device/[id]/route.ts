import { NextResponse } from 'next/server';
import prisma from "../../../../lib/prisma";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    const data = await prisma.device.delete({ where: { id: Number(id) } });
    if (!data) {
    return NextResponse.json({
      success: false,
      message: `Device id ${id} not found` }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      message: `Device ${data.device_name} deleted`}, {status: 200});
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Error deleting device: ${error}` }, { status: 500 });
    }
  }
  
