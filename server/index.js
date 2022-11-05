//const express = require('express');
//const app = express();
//const socketio = require('socket.io');
//
//
//const server = app.listen(3000, console.log("Socket.io Hello World server started!"));
//const io = socketio(server);
//
//// Make socket a module variable, so that I can decouple the callbacks.
//let socket;
//
//io.on('connection', onConnection);
//
//async function onConnection(_socket) {
//    console.log("Client connected!");
//    socket = _socket;
//    socket.on('helloRequest', helloRequest)
//}
//
//const random = ub => Math.floor(ub * Math.random());
//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//
//async function helloRequest(request) {
//    console.log(request)
//    await sleep(random(500))
//    response = { message: 'Hello ' + request.name }
//    socket.emit('helloResponse', response);
//}

const HelloService = require('./HelloService');
new HelloService('localhost', 3000);