// server.ts
import { createServer } from 'node:http';
import next from 'next';
import { Server as SocketIOServer } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Initialize Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Create a plain HTTP server, passing every request to Next.js
  const httpServer = createServer((req, res) => {
    // You could inspect req.url here if you want to bypass Next.js for certain routes
    return handle(req, res);
  });

  // Attach Socket.IO to the same server
  const io = new SocketIOServer(httpServer, {
    path: '/socket.io',            // optional: custom path
    cors: { origin: '*' },         // adjust CORS to your needs
    serveClient: false,            // optional: disable serving the client script
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('iot-update', (data) => {
      console.log('Data through server ::', data);
      // Broadcast to all clients (including sender)
      io.emit('iot-update', data);
    });

    socket.on('disconnect', (reason) => {
      console.log(`Socket ${socket.id} disconnected:`, reason);
    });
  });

  // Start listening
  httpServer.listen(port, () => {
    console.log(`> Server ready on http://${hostname}:${port}`);
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});
