const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socketHandler/newConnectionHandler");
const disconnectHandler = require("./socketHandler/disconnecthandler");
const directMessageHandler = require("./socketHandler/directMessageHandler");
const directChatHistoryHandler = require("./socketHandler/directChatHistoryHandler");
const roomCreateHandler = require("./socketHandler/roomCreateHandler");
const roomJoinHandler = require("./socketHandler/roomJoinHandler");
const roomleaveHandler = require("./socketHandler/roomleaveHandler");
const roomInitializeConnectionHandler = require('./socketHandler/roomInitializeConnectionHandler')
const roomSignalDataHandler = require('./socketHandler/roomSignalDataHandler');

const serverStore = require("./serverStore");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  serverStore.setSocketServerInstance(io);

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  const emitOnlineUsers = () => {
    const onlineUsers = serverStore.getOnlineUsers();
    io.emit("onlineUsers", { onlineUsers });
  };

  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);

    newConnectionHandler(socket, io);
    emitOnlineUsers();

    socket.on("direct-message", (data) => {
      directMessageHandler(socket, data);
    });

    socket.on("direct-chat-history", (data) => {
      directChatHistoryHandler(socket, data);
    });

    socket.on("room-create", () => {
      roomCreateHandler(socket);
    });

    socket.on("join-room", (data) => {
      roomJoinHandler(socket, data);
    });

    socket.on("leave-room", (data) => {
      roomleaveHandler(socket, data);
    });

    socket.on('conn-init', (data)=>{
      roomInitializeConnectionHandler(socket, data);
    });

    socket.on('conn-signal', (data)=>{
      roomSignalDataHandler(socket, data);
    })

    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });

  setInterval(() => {
    emitOnlineUsers();
  }, [1000 * 8]);
};

module.exports = { registerSocketServer };
