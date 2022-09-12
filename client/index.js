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
    helloRequest({ name: 'Arne', num: 1 });
    helloRequest({ name: 'Bertil', num: 2 });
    helloRequest({ name: 'Ceasar', num: 3 });
    helloRequest({ name: 'David', num: 4 });
    helloRequest({ name: 'Erik', num: 5 });
    helloRequest({ name: 'Felix', num: 6 });
    helloRequest({ name: 'George', num: 7 });
}

severalHello();