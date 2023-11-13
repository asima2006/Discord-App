import React from 'react';
import styled from '@emotion/styled';
import ScreenShareButton from './ScreenShareButton';
import CameraButton from './CameraButton';
import CloseRoomButton from './CloseRoomButton';
import MicButton from './MicButton';
import {connect} from 'react-redux';
import { getAction } from '../../../store/actions/roomAction';

const MainContainer = styled('div')({
    height: '15%',
    width: '100%',
    backgroundColor: '#5865f2',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const RoomButton = (props) => {
  const { localStream, isUserJoinedWithOnlyAudio } = props;
  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props}/>}
      <MicButton localStream={localStream}/>
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream}/>}
      <CloseRoomButton/>
    </MainContainer>
  )
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomButton);
