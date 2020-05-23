// 서버
var express=require('express')
var http=require('http')
var app=express()
var router=express.Router();
var server=http.createServer(app)
var io = require('socket.io')(server);
var path=require('path');

//var birds=require('./routes/birds');
var chat=require('./routes/chat');

// Routing
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/birds',birds);
//app.use('/chat',chat);
chat.socketConnect(io);

server.listen(8000,function(){
    console.log('port number :'+server.address().port)
})