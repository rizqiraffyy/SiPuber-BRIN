import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET: Fetch a single CmsSetting by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    const cmsSetting = await prisma.cmsSetting.findUnique({
      where: { id },
    });

    if (!cmsSetting) {
      return NextResponse.json({ 
        success: false,
        message: 'CMS setting not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'CMS setting fetched successfully',
      data: cmsSetting}, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false, 
      message: error }, { status: 500 });
  }
}

// PATCH: Update a CmsSetting by ID
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: any }> }) {
  try {
    let { id } = await params;
    id = parseInt(id, 10);
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid ID: ID must be a valid integer' },
        { status: 400 }
      );
    }
    const body = await req.json();
    const { thumbnail, section, content } = body;

    // Build the data object with only provided fields
    const data: { thumbnail?: string; section?: string; content?: string } = {};
    if (thumbnail !== undefined) data.thumbnail = thumbnail;
    if (section !== undefined) data.section = section;
    if (content !== undefined) data.content = content;

    // Check if any fields are provided
    if (Object.keys(data).length === 0) {
      return NextResponse.json({ message: 'No fields provided for update' }, { status: 400 });
    }

    // Use the data object directly in the update
    const updatedCmsSetting = await prisma.cmsSetting.update({
      where: { id },
      data, // Pass the constructed data object
    });

    return NextResponse.json({
      success: true,
      message: `CMS id: ${id} setting updated successfully`,
      data: updatedCmsSetting,
    }, { status: 200 });
  } catch (error) {
    console.error('Error updating CMS setting:', error); 
    return NextResponse.json({ 
      success: false,
      message: error }, { status: 500 });
  }
}

// DELETE: Delete a CmsSetting by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    await prisma.cmsSetting.delete({
      where: { id },
    });

    return NextResponse.json({ 
      success: true,
      message: `CMS id:${id} setting deleted` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: error }, { status: 500 });
  }
}