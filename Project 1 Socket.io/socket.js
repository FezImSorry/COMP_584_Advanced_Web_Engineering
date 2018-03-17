let app = require('http').createServer(); // create HTTP server
let io = require('socket.io')(app, {path: '/socket.io'}); // bind Socket to HTTP server

app.listen(3000); // listen on port 3000

console.log('Listening for connections on port 3000');

io.on('connection', function(socket) {
   console.log('Client connected');

   socket.emit('fromServer0', {id: 'Hello'}); // send message fromServer to client

   socket.on('fromClient0', function(data) { // listen for fromClient message 
      console.log('Client: ' + data.id);
      socket.emit('fromServer1', {id: 'How are you?'});   
   });

   socket.on('fromClient1', function(data) { // listen for fromClient message 
      console.log('Client: ' + data.id); 
   });

   socket.on('disconnect', function(){
    console.log('Client disconnected');
  });
});