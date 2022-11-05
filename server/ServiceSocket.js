const express = require('express');
const socketio = require('socket.io');


module.exports = class ServiceSocket {
    constructor(host, port) {
        this.app = express(host);
        this.server = this.app.listen(port, console.log("Socket.io Hello World server started!"));
        //this.io = socketio(this.server);
        this.run()
    }

    run() {
        this.io = socketio(this.server);
    }
}


