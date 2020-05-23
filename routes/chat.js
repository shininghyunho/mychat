//var express = require('express');
//var router = express.Router();

const redis = require('redis');
const sub = redis.createClient();
const pub = redis.createClient();

pub.on('error', (err) => console.log(err));
sub.on('error', (err) => console.log(err));

sub.subscribe("chat");

function socketConnect(io){
    io.sockets.on('connection',function(socket){
        sub.on('message',function(channel,message){
            console.log("channel : "+channel+" get message~ "+message);
            socket.emit('message',message);
        })

        // socket.json.send로부터 호출
        socket.on('message',function(msg){
            console.log(" msg : "+msg);
            pub.publish('chat',msg);
        })
    })
}

function sendMessage(channel,text){
    pub.publish(channel,text);
}

module.exports.socketConnect=socketConnect;
module.exports.sendMessage=sendMessage;
//module.exports = router;