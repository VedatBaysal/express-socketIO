const express = require('express');
const socket = require('socket.io');

const app = express();
app.use(express.static('client'))
const server = app.listen("4000",() => console.log("Server is ready"))

const io = socket(server);
io.on('connection', (socket) => {
    console.log("Socket connected");

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

    socket.on('writing', (data) => {
        socket.broadcast.emit('writing', data);
    });
});