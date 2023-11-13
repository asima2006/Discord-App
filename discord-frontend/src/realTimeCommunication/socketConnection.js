import io from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsAction";
import store from "../store/store";
import { updateDirectChatHistoryIfActive } from '../shared/utils/chat'
import * as roomHandler from './roomHandler'
import * as webRTCHandler from './webRTCHandler'

let socket = null;

export const connectionWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("succesfully connected with socket.io server");
    console.log(socket.id);
  });

  socket.on("friend-invitations", (data) => {
    const { pendingInvitations } = data;

    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on("onlineUsers", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on('room-create', (data)=> {
    roomHandler.newRoomCreate(data);
  });

  socket.on('active-rooms',(data) => {
    roomHandler.updateActiveRooms(data);
    console.log(data);
  });

  socket.on('conn-prepare', (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    socket.emit('conn-init', {connUserSocketId: connUserSocketId});
  });

  socket.on('conn-init', (data)=>{
    const {connUserSocketId} = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });

  socket.on('conn-signal',(data)=>{
    webRTCHandler.handleSignalingData(data);
  });

  socket.on('room-participants-list', (data) => {
    console.log(" user left room");
    console.log(data);
    // webRTCHandler.handleParticipantLeftRoom(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit('room-create');
};

export const joinRoom = (data) => {
  socket.emit('join-room', data);
};

export const leaveRoom = (data) => {
  socket.emit('leave-room', data);
};

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
}
