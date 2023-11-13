import React from "react";
import Video from "./Video";
import styled from "@emotion/styled";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideoContainer = ({ localStream, remoteStreams, screenSharingStream }) => {
  return (
    <MainContainer>
      <Video stream={screenSharingStream ? screenSharingStream : localStream} isLocalStream />
      {remoteStreams.map((stream) => (
        <Video stream={stream} key={stream.id}/>
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(VideoContainer);
