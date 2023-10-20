const connectedUser = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) => {
    io = ioInstance;
}

const getSocketServerInstance = () => {
    return io;
}

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUser.set(socketId, {userId});
    console.log("New user added");
    console.log(connectedUser);
};

const removeConnectedUser = (sockedId) => {
     if (connectedUser.has(sockedId)) {
        connectedUser.delete(sockedId);
        console.log("User Added");
        console.log(connectedUser);
     }
}

const getActiveConnection = (userId) => {
    const activeConnections = [];
  
    connectedUser.forEach(function (value, key) {
      if (value.userId === userId) {
        activeConnections.push(key);
      }
    });
  
    return activeConnections;
  };

const getOnlineUsers = () => {
  const onlineUsers = [];

  connectedUser.forEach((value, key)=>{
    onlineUsers.push({ socketId: key, userId: value.userId});
  });

  return onlineUsers;
}

module.exports = { addNewConnectedUser, removeConnectedUser, getActiveConnection, getSocketServerInstance, setSocketServerInstance, getOnlineUsers };