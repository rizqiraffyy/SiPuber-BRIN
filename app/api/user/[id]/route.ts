import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { roleSchema } from "@/lib/validator";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ 
        success: false,
        message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        id: user.id,
        username: user.username,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
        isSoftDelete: user.isSoftDelete
      },
  });
  } catch (error) {
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
        { status: 400 }
      );
    }
    const { role } = result.data;

    await prisma.user.update({
      where: { id: userId },
      data: {
        role,
      },
    });

    return NextResponse.json({
      success: true,
      message: `role: ${role} updated successfully`
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: error }, { status: 500 });
  }
}