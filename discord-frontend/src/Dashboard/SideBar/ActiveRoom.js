import React from "react";
import Avatar from "../../shared/components/Avatar";
import { Button, Tooltip } from "@mui/material";
import styled from "@emotion/styled";
import * as roomHandler from '../../realTimeCommunication/roomHandler'

const MainContainer = styled('div')({
    position: 'absolute',
    right: 0
})

const ActiveRoom = ({
  roomId,
  creatorUsername,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      // Join Room
      roomHandler.joinRoom(roomId);
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;
  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "37px",
            margin: 0,
            padding: 0,
            minWidth: 0,
            marginTop: "10px",
            color: "white",
            backgroundColor: "#5865F2",
          }}
        >
            <MainContainer>
            <Avatar username={creatorUsername}/>
            </MainContainer>
        </Button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoom;
