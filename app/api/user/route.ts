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
        message: result.error.format() },
        { status: 400 }
      );
    }
    const {username, full_name, email, password, role } = result.data;

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
    return NextResponse.json({ 
      status: false,
      message: error }, { status: 500 });
  }
}