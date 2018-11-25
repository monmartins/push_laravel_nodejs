'use strict'

const redis = new require('ioredis')({
  port: 6379,          // Redis port
  host: '172.28.0.3'})
const io = require('./socket')
redis.subscribe('notification', function(err, count) {
  // console.log('subscribed notification')
})

redis.subscribe('notification-event', function(err, count) {
  // console.log('subscribed notification event')
})

redis.on('message', function(channel, message) {
  console.log('Message Recieved: ')
  console.log(message)
  console.log(channel)
  io.emit('update', message)
})
