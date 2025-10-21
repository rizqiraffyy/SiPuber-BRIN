// server.mjs or server.ts (if using TypeScript)

import { createServer } from "node:http";
import next from 'next';
// import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new SocketIOServer(httpServer); // renamed for clarity

  io.on('connection', (socket) => {
    console.log('Client server connected '+socket.id);

    socket.on('iot-update', (data) => {
      console.log('Data thru server ::', data);
      io.emit('iot-update', data);
    });
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
