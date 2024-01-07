/* eslint-disable no-console */
exports.socketController = async (socket) => {
  console.log('Socket client has connected');

  socket.on('join', async (room) => {
    socket.join(room.toString());
    console.log(socket.rooms);
  });

  socket.on('sendMessage', async (room, data) => {
    socket.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Socket client has disconnected');
  });
};
