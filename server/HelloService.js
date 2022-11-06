const ServiceSocket = require('./ServiceSocket');

module.exports = class HelloService extends ServiceSocket {
    constructor(host, port) {
        super(host, port, {
            'Hello': helloRequest,
        })
    }

}

const random = ub => Math.floor(ub * Math.random());
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function helloRequest(socket, request) {
    console.log(request)
    await sleep(random(500))
    response = { message: 'Hello ' + request.name }
    socket.emit('helloResponse', response);
}
