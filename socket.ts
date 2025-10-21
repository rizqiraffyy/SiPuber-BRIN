// socket.ts
"use client";
import { io } from "socket.io-client";

// Initialize the socket connection
const socket = io("http://localhost:3000");  // Replace with your server URL
// socket.on("iot-update", (data) => {
//   console.log("Received iot-update:", data);
// });


// Export the socket instance
export { socket };

