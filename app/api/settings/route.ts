import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST: Create a new CmsSetting
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { thumbnail, section, content } = body;

    // Validate input
    if (!section || !content) {
      return NextResponse.json({ 
        success: false,
        message: 'Missing required fields' }, { status: 400 });
    }

    const newCmsSetting = await prisma.cmsSetting.create({
      data: {
        thumbnail: thumbnail || '',
        section,
        content,
      },
    });

    return NextResponse.json({
      success: true,
      data: newCmsSetting}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: error }, { status: 500 });
  }
}