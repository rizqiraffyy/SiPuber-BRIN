import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { roleSchema } from "@/lib/validator";

export async function GET(request: Request, { params }: { params: { id: string } }) {
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
      where: { id: userId },
      data: {
        role,
      },
    });

    return NextResponse.json({
      success: true,
      message: `User "${user.username}" role updated to "${role}" successfully.`
    }, {status: 200})
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: error }, { status: 500 });
  }
}