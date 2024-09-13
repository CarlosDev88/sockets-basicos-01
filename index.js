const express =  require('express');
const app = express();


const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'))

//esto significa que un dispositivo se conectó, NO UN USUARIO
//porque un usuario puede tener muchos dispositivos
io.on('connection', (socket) => { 

    //emitir un mensaje
    // socket.emit('mensaje-bienvenida', {
    //     msg:'Bienvenido al server',
    //     date : new Date()
    // }) 
    
    //escuchar un mensaje
    socket.on('mensaje-to-server', (data) => {
        console.log(data);
        socket.emit('mensaje-from-server',data);
    })
 });

server.listen(3000,()=>{
    console.log('servidor corriendo....');    
})