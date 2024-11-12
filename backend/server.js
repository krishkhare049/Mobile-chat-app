const http = require('http'); // Importing http module
const app = require('./app'); // Importing the app
const { setupSocket } = require('./socket'); // Importing setupSocket function

// Uncomment the following lines if you want to use the cluster module
// const cluster = require('cluster');
// const os = require('os');
// let numcpu = os.cpus().length;

const { API_PORT } = process.env;

const PORT = process.env.PORT || API_PORT;
const server = http.createServer(app);

// Setting up Socket.IO
setupSocket(server);

// We can use cluster module but for socketIO it may not behave correctly so we will optimize it later-

// if (cluster.isMaster) {
//     for (let i = 0; i < numcpu; i++) {
//         cluster.fork();
//     }

//     // If any worker killed-
//     cluster.on("exit", (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died`);
//         cluster.fork();
//     });
// } else {
server.listen(PORT, () => {
    // console.log(`Server ${process.pid} started on port http://localhost:${PORT}`);
    console.log(`Server running on http://localhost:${PORT}`);
});
// };