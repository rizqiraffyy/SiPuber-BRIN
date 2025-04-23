import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/validator";
import { hashPassword } from "@/lib/auth";
import prisma from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = registerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: result.error.format() }, { status: 400 });
    }
    const { username, full_name, email, password: { password }, role } = result.data;

    const hashedPassword = await hashPassword(password);
    await prisma.user.create({
      data: {
        username,
        full_name,
        email,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json({
      success: true,
      message: `${username} account created successfully`}, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ 
      success: false,
      message: error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      where: { isSoftDelete: false },
      select: {
        id: true,
        username: true,
        full_name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: users,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 });
  }
}