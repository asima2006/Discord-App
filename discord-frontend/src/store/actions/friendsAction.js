import * as api from '../../api'
import { openAlertMessage } from './alertAction'

export const friendsAction = {
    SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATION: 'FRIENDS.SET_PENDING_FRIENDS_INVITATION',
    SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
}

export const getAction = (dispatch) => {
    return {
        sendFriendInvitation: (data, closeDialogHandler) => {
            dispatch(sendFriendInvitation(data, closeDialogHandler));
        }
    };
};

export const setPendingFriendsInvitations = (pendingFriendInvitations) => {
  return {
    type: friendsAction.SET_PENDING_FRIENDS_INVITATION,
    pendingFriendInvitations,
  }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
    return async (dispatch) => {
      const response = await api.sendFriendInvitation(data);
  
      if (response.error) {
        dispatch(openAlertMessage(response.exception?.response?.data));
      } else {
        dispatch(openAlertMessage("Invitation has been sent!"));
        // closeDialogHandler();
      }
    };
  };