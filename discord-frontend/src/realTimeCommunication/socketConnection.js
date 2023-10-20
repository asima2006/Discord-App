import  io from 'socket.io-client'
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from '../store/actions/friendsAction';
import store from "../store/store";

export const connectionWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  const socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("succesfully connected with socket.io server");
    console.log(socket.id);
  });


  socket.on('friend-invitations', (data) => {
    const { pendingInvitations } = data;
    
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on('friends-list', (data)=>{
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on('onlineUsers', (data)=>{
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers))
  })

}