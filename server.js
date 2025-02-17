const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = 3000;

app.use(express.static('public'));

const rooms = new Map();

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joinRoom', ({ username, room }) => {
        socket.join(room);
        if (!rooms.has(room)) {
            rooms.set(room, new Set());
        }
        rooms.get(room).add(username);
        
        socket.room = room;
        socket.username = username;
        
        io.to(room).emit('updateUsers', Array.from(rooms.get(room)));
        socket.emit('message', { user: 'System', text: `Welcome to room ${room}!` });
        socket.broadcast.to(room).emit('message', { user: 'System', text: `${username} has joined!` });
    });

    socket.on('sendMessage', (message) => {
        io.to(socket.room).emit('message', { 
            user: socket.username, 
            text: message,
            time: new Date().toLocaleTimeString() 
        });
    });

    socket.on('disconnect', () => {
        if (socket.room && socket.username) {
            const roomUsers = rooms.get(socket.room);
            roomUsers.delete(socket.username);
            io.to(socket.room).emit('updateUsers', Array.from(roomUsers));
            io.to(socket.room).emit('message', { 
                user: 'System', 
                text: `${socket.username} has left` 
            });
        }
    });
});

http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});