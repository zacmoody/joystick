//Changed by zacmoody
// Change made from Windows
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/tilt', function(req, res){
  res.sendFile(__dirname + '/tilt.html');
});

app.get('/webgl', function(req, res){
  res.sendFile(__dirname + '/webgl.html');
});

app.get('/send', function(req, res){
  res.sendFile(__dirname + '/send.html');
});

app.get('/get', function(req, res){
  res.sendFile(__dirname + '/get.html');
});
io.on('connection', function(socket){
  socket.on('orientation', function(msg){
//	   console.log('message: ' + msg);
    io.emit('orientation', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
