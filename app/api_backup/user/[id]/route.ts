import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { roleSchema } from "@/lib/validator";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const userId = parseInt(params.id, 10);
    if (isNaN(userId)) {
      return NextResponse.json({ success: false, message: "Invalid user ID" }, { status: 400 });
    }
    const user = await prisma.user.findUnique({
      where: { id: userId, isSoftDelete: false },
    });

    if (!user) {
      return NextResponse.json({ 
        success: false,
        message: `User not found` }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "User retrieved successfully",
      data: {
        id: user.id,
        username: user.username,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
        isSoftDelete: user.isSoftDelete
      },
  }, {status: 200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({ 
      success: false,
      message: error }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const userId = parseInt(params.id);

    const body = await request.json();
    const result = roleSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: result.error.format() },
        { status: 400 });
    }
    const { role } = result.data;

    const user = await prisma.user.update({
      where: { id: userId, isSoftDelete: false },
      data: {
        role,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Successfully updated ${user.username}'s role to ${role}.`
    }, {status: 200})
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: error }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // Validate ID
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return NextResponse.json({
        success: false,
        message: "Invalid user ID",
      }, { status: 400 });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      }, { status: 404 });
    }

    // Check if user is already soft-deleted
    if (user.isSoftDelete) {
      return NextResponse.json({
        success: false,
        message: "User already deleted",
      }, { status: 404 });
    }

    // Perform soft delete
    await prisma.user.update({
      where: { id: userId },
      data: { isSoftDelete: true },
    });

    return NextResponse.json({
      success: true,
      message: `User ${user.username} soft-deleted successfully`,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 });
  }
}