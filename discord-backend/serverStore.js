const connectedUser = new Map();

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

module.exports = { addNewConnectedUser, removeConnectedUser };