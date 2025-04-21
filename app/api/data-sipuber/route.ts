// app/api/iot/route.ts
import { NextRequest, NextResponse  } from "next/server";
import { siPuberSchema } from "@/lib/validator";
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  try {
    if (!socket) {
      console.error("Socket.IO not initialized");
      return new Response("Socket.IO not ready", { status: 500 });
    }
    // calculate ispu

    const result = siPuberSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: result.error.format() }, { status: 400 });
    }
    console.log(`data: ${result}`)
    const {
      device_id, 
      location, 
      co, 
      so, 
      no2, 
      o3, 
      nh3, 
      pm1, 
      pm25, 
      pm10, 
      v_bat} = result.data

    socket.emit("iot-update", {
      device_id, 
      location, 
      co, 
      so, 
      no2, 
      o3, 
      nh3, 
      pm1, 
      pm25, 
      pm10, 
      v_bat
    });

    return new Response("Data emitted via Socket.IO", { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `Socket.IO not initialized: ${err}` }, { status: 500 });
  }
}
