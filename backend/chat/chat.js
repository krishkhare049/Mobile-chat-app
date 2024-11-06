// const { readFileSync } = require("fs");
// const { createServer } = require("https");
// const { Server } = require("socket.io");
const http = require('http')

// const httpsServer = createServer({

//     // For https:
// //   key: readFileSync("/path/to/my/key.pem"),
// //   cert: readFileSync("/path/to/my/cert.pem")
// });

// const io = new Server(httpsServer, { /* options */ });

// io.on("connection", (socket) => {
//   // ...

  

// });

// httpsServer.listen(3000);

const socketIO = require('socket.io')(http
//   , {
//   cors: {
//       origin: "<http://localhost:3000>"
//   }
// }
);

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('disconnect', () => {
    socket.disconnect()
    console.log('🔥: A user disconnected');
  });
});