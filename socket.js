const { Server } = require("socket.io");

function socketSetup(server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId) => {
      socket.join(roomId);
      socket.to(roomId).emit("user-connected", userId);

      socket.on("disconnect", () => {
        socket.to(roomId).emit("user-disconnected", userId);
      });
    });
  });
}

module.exports = {
  socketSetup,
};
