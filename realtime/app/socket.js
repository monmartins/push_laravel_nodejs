'use strict'

const server = require('./server')()

server.listen(process.env.PORT, () => {
  // console.log('Listening on Port ' + process.env.PORT)
})

const io = require('socket.io')(server)

const sockets = () => function(socket) {
// console.log('oi sockets')
}

// io.sockets.on('connection', sockets)

module.exports = io