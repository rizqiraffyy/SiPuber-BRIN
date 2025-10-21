// app/api/iot/route.ts
import { NextRequest, NextResponse  } from "next/server";
import { siPuberSchema } from "@/lib/validator";
import { calculateISPU } from "@/lib/ispuGenerator";
import prisma from "@/lib/prisma";
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  try {
    if (!socket) {
      console.error("Socket.IO not initialized");
      return new Response("Socket.IO not ready", { status: 500 });
    }

    const result = siPuberSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: result.error.format() }, { status: 400 });
    }
    
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

      const { ispu_realtime, high_params } = calculateISPU(pm1, pm25, co, so2, no2, o3)
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
        high_params,
        ispu_realtime,
        v_bat
      });
      const device = await prisma.device.findUnique({
        where: { device_name },
        select: { id: true },
      });
      
      if (!device) {
        throw new Error(`Device with name ${device_name} not found`);
      }

      const ppmData = await prisma.ppmDataSipuber.create({
        data: {
          device_id: device.id,
          location, // Store as WKT (e.g., 'POINT(-74.0060 40.7128)')
          pm1,
          pm10,
          pm25,
          co,
          so2,
          no2,
          o3,
          nh3,
          high_params,
          ispu_realtime,
          v_bat,
        },
      });
      console.log(ppmData)

    return NextResponse.json({"success": true, "data": {
          device_id: device.id,
          location, 
          pm1,
          pm10,
          pm25,
          co,
          so2,
          no2,
          o3,
          nh3,
          high_params,
          ispu_realtime,
          v_bat,
    }}, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `Socket.IO not initialized: ${err}` }, { status: 500 });
  }
}
