// app/api/iot/route.ts
import { NextRequest, NextResponse  } from "next/server";
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  try {
    if (!socket) {
      console.error("Socket.IO not initialized");
      return new Response("Socket.IO not ready", { status: 500 });
    }
    // console.log(socket)
    console.log(body)

    socket.emit("iot-update", body);

    return new Response("Data emitted via Socket.IO", { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `Socket.IO not initialized: ${err}` }, { status: 500 });
  }
}
