import React from 'react'
import styled from '@emotion/styled'
import FriendListItem from './FriendListItem'
import { connect } from 'react-redux'

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%'
})

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });

  return friends;
};

const FriendList = ({friends, onlineUsers}) => {
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((f) => (
        <FriendListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({friends}) => {
  return{
    ...friends,
  };
};

export default connect(mapStateToProps)(FriendList) 
