var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});



io.on('connection', function(socket){
  console.log('a user connected');

    //Chat Message
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });

    //Disconnect
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    

});



http.listen(80, function(){
  console.log('listening on *:80');
});