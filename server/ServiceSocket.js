const express = require('express');
const socketio = require('socket.io');


module.exports = class ServiceSocket {
    constructor(host, port, services = None) {
        this.app = express(host);
        this.server = this.app.listen(port, console.log("Socket.io Hello World server started!"));
        this.io = socketio(this.server);
        this.services = services;
        this.io.on('connect', socket => this.registerService(socket, services));
    }
    registerService(socket, services) {
        console.log('Client connected!')
        this.socket = socket;
        this.socket.on('disconnect', disconnect);
        for (let rpcName in services) {
            console.log(rpcName)
            this.socket.on(rpcName, request => services[rpcName](this.socket, request))
        }
    }
}

function disconnect(_socket) {
    console.log('Client disconnected!')
}
