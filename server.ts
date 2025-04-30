import express from 'express';
import next from 'next';
// import axios from 'axios';
import http from 'http';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();
    const httpServer = http.createServer(server);
    const io = new Server(httpServer);

    io.on('connection', (socket) => {
        console.log('Client connected');

        socket.on('iot-update', (data) => {
            console.log('Recieved from API ::', data);
            io.emit('iot-update', data);
        });
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    httpServer.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});