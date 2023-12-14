/* eslint-disable no-console */
exports.socketController = (socket) => {
  console.log('Socket client has connected');

  socket.on('join', (room) => {
    socket.join(room);
    console.log(`User has joined room ${room}`);
  });

  socket.on('sendMessage', (room, data) => {
    socket.to(room).emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Socket client has disconnected');
  });
};
