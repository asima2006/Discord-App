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
    const activeConnection = [];

    connectedUser.forEach(function (value, key) {
        if (value.userId = userId) {
            activeConnection.push(key);
        }

        return activeConnection;
    })
}

module.exports = { addNewConnectedUser, removeConnectedUser, getActiveConnection, getSocketServerInstance, setSocketServerInstance };