import { io } from 'socket.io-client';

// export const socket = io('http://192.168.179.88:5000');

export const socket = io('http://192.168.179.88:5000', {
    withCredentials: true
});

