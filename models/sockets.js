


class Sockets {
    constructor(io) {
        this.io = io;
        this.socketsEvents();
    }

    socketsEvents() {

        this.io.on('connection', (socket) => {

            socket.on('mensaje-to-server', (data) => {
                console.log(data);
                socket.emit('mensaje-from-server', data);
            })
        });
    }
}

module.exports = Sockets;