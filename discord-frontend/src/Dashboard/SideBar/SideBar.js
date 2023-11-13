import React from 'react'
import { styled } from '@mui/system'
import { connect } from 'react-redux';
import MainBarButton from './MainBarButton';
import CreateRoomButton from './CreateRoomButton';
import ActiveRoom from './ActiveRoom'

const MainContainer = styled('div')({
    width: '60px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#202225',
});

const SideBar = ({ activeRooms, isUserInRoom }) => {
  return (
    <MainContainer>
      <MainBarButton/>
      <CreateRoomButton isUserInRoom={isUserInRoom}/>
      {activeRooms.map((room) => (
        <ActiveRoom
          roomId={room.roomId}
          creatorUsername={room.creatorUserName}
          amountOfParticipants={room.participants.length}
          key={room.roomId}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(SideBar);
