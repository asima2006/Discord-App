import React, { useState } from 'react'
import styled from '@emotion/styled'
import RoomResizeHandler from './RoomResizeHandler'
import VideoContainer from './VideoContainer';
import RoomButton from './RoomButtons/RoomButton';

const MainContainer = styled("div")({
    position: "absolute",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202225",
  });

const fullScreenRoomStyle = {
    width: '100%',
    height: "100vh",
};

const minimizedRoomStyle = {
    bottom: 0,
    right: 0,
    width: '30%',
    height: '40vh',
};

const Room = () => {
    const [isRoomMinimized, setIsRoomMinimized] = useState(true);

    const roomSizedHandler = () => {
        setIsRoomMinimized(!isRoomMinimized);
    }

  return (
    <MainContainer style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}> 
    <VideoContainer/>
    <RoomButton/>
    <RoomResizeHandler
        isRoomMinimized={isRoomMinimized}
        handleRoomSize={roomSizedHandler}
    />
    </MainContainer>
  )
}

export default Room
