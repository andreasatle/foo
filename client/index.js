const { io } = require('socket.io-client');

// Establish a connection
socket = io('http://localhost:3000');

function helloRequest(request) {
    socket.emit('helloRequest', request);
}

function helloResponse(response) {
    console.log(response);
}

// Define an event
socket.on('helloResponse', helloResponse);

function severalHello() {
    helloRequest({ name: 'Arne' });
    helloRequest({ name: 'Bertil' });
    helloRequest({ name: 'Ceasar' });
    helloRequest({ name: 'David' });
    helloRequest({ name: 'Erik' });
    helloRequest({ name: 'Felix' });
    helloRequest({ name: 'George' });
}

severalHello();