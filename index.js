// /부분
var express = require('express')
var app = express();
var path = require('path')
var server=require('http').createServer(app);
var io=require('socket.io')(server);
var port = 3000;

server.listen(port,()=>{
    console.log('Server listening at port %d',port);
});