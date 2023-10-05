import React from 'react'
import { styled } from '@mui/system'
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendList from './FriendList/FriendList';
import PendingInvitationList from './PendingInvitationList/PendingInvitationList';

const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2F3136',
});

const FriendSideBar = () => {
  return (
    <MainContainer> 
      <AddFriendButton/>
      <FriendsTitle title={'Private Messages'}/>
      <FriendList/>
      <FriendsTitle title={'Invitations'}/>
      <PendingInvitationList/>
    </MainContainer>
  )
}

export default FriendSideBar
