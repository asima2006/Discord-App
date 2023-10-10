// @ts-ignore
import io from 'socket.io-client'
import { setPendingFriendsInvitations } from '../store/actions/friendsAction';
import store from "../store/store";

let socket = null;

export const connectionWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;

    socket = io.connect("http://localhost:5002", {
      query:  {jwtToken}
    });

    socket.on('connect', ()=>{
        console.log("Successfully connected to socket.io server");
        console.log(socket.id);
    });

    socket.on('friend-invitations', (data) => {
        const { pendingInvitations } = data;

        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    })
}