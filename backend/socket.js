// socket.js

const { Server } = require('socket.io'); // Importing the Server class from socket.io

function setupSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: "*", // Adjust this according to your needs
            methods: ["GET", "POST"]
        }
    });

    io.on('connection', (socket) => {
        console.log('A user connected');
        console.log(socket.id);

        io.to(socket.id).emit('hi', 'krish');
        socket.emit('hi', 'kk');

        // Handle events
        socket.on('disconnect', () => {
            console.log('User  disconnected');
        });

        // You can also listen for custom events here
        socket.on('userId', (data) => {
            console.log('Custom event received:', data);

            // Emit a response back to the client if needed
            socket.emit('responseEvent', { message: 'Response from server' });
        });
    });
}

module.exports = {setupSocket}; // Exporting the setupSocket function