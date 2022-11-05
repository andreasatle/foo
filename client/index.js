const { io } = require('socket.io-client');

// Establish a connection
socket = io('http://localhost:3000');

function helloRequest(request) {
    socket.emit('Hello', request);
}

function helloResponse(response) {
    console.log(response);
}

// Define an event
socket.on('helloResponse', helloResponse);

async function severalHello() {
    helloRequest({ name: 'Arne' });
    helloRequest({ name: 'Bertil' });
    helloRequest({ name: 'Ceasar' });
    helloRequest({ name: 'David' });
    helloRequest({ name: 'Erik' });
    helloRequest({ name: 'Felix' });
    helloRequest({ name: 'George' });
}

async function severalHello2() {
    severalHello()
    severalHello()
}
(async () => await severalHello2())();