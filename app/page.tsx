// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { socket } from "../socket";

interface IoTData {
  device_name: number;
  location: string;
  co: number;
  so2: number;
  no2: number;
  o3: number;
  nh3: number;
  pm1: number;
  pm25: number;
  pm10: number;
  ispu_realtime: number;
  v_bat: number;
  timestamp?: string; 
}


export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [iotData, setIotData] = useState<IoTData | null>(null);

  useEffect(() => {
    // Debug: log socket object status
    console.log("Socket initialized:", socket);

    function onConnect() {
      console.log("✅ Connected to socket");
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
    }

    function onDisconnect() {
      console.log("❌ Disconnected from socket");
      setIsConnected(false);
      setTransport("N/A");
    }

    function onIoTUpdate(data: IoTData) {
      console.log("📦 Received IoT update:", data);
      setIotData(data);
    }

    // Optional: log all incoming events for debugging
    socket.onAny((event, ...args) => {
      console.log("🔔 Received event:", event, args);
    });

    // Set up listeners
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("iot-update", onIoTUpdate);

    // If already connected (hot reload, etc.)
    if (socket.connected) {
      onConnect();
    }

    // Cleanup on unmount
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("iot-update", onIoTUpdate);
      socket.offAny(); // cleanup all listeners
    };
  }, []);

  useEffect(() => {
    // Watch iotData changes
    if (iotData) {
      console.log("📊 iotData updated:", iotData);
    }
  }, [iotData]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>IoT Dashboard</h1>
      <p>Status: <strong>{isConnected ? "Connected ✅" : "Disconnected ❌"}</strong></p>
      <p>Transport: <strong>{transport}</strong></p>

        {iotData ? (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>Latest IoT Data</h3>
      <p><strong>Device Name:</strong> {iotData.device_name}</p>
      <p><strong>Location:</strong> {iotData.location}</p>
      <p><strong>PM1:</strong> {iotData.pm1}</p>
      <p><strong>PM10:</strong> {iotData.pm10}</p>
      <p><strong>PM25:</strong> {iotData.pm25}</p>
      <p><strong>CO:</strong> {iotData.co}</p>
      <p><strong>SO2:</strong> {iotData.so2}</p>
      <p><strong>NO₂:</strong> {iotData.no2}</p>
      <p><strong>O₃:</strong> {iotData.o3}</p>
      <p><strong>NH₃:</strong> {iotData.nh3}</p>
      <p><strong>ISPU (Realtime):</strong> {iotData.ispu_realtime}</p>
      <p><strong>Battery Voltage:</strong> {iotData.v_bat} V</p>
      {iotData.timestamp && (
        <p><strong>Timestamp:</strong> {iotData.timestamp}</p>
      )}
    </div>
) : (
  <p style={{ marginTop: "1rem" }}>No IoT data received yet.</p>
)}

    </div>
  );
}
