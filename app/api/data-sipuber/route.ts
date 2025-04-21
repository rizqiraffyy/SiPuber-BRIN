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
      device_name, 
      latitude, 
      longitude,
      pm1, 
      pm10, 
      pm25, 
      co, 
      so2, 
      no2, 
      o3, 
      nh3, 
      v_bat } = result.data
      const location = `SRID=4326;POINT(${longitude} ${latitude})` 

    socket.emit("iot-update", {
      device_name, 
      location,
      pm1, 
      pm10, 
      pm25, 
      co, 
      so2, 
      no2, 
      o3, 
      nh3, 
      v_bat
    });

    return new Response("Data emitted via Socket.IO", { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `Socket.IO not initialized: ${err}` }, { status: 500 });
  }
}
