import store from '../store/store';
import Peer from 'simple-peer'
import { setLocalStream, setRemoteStream } from '../store/actions/roomAction';
import * as socketConnection from './socketConnection';

const getConfiguration = () => {
    const turnIceServers = null;

    if (turnIceServers) {
        // TODO use TURN server credentials
    } else {
        console.warn("Using only STUN server");
        return {
            iceServers: [
                {
                    urls: "stun:stun.l.google.com:19302",
                },
            ],
        };
    }
}

const onlyAudioConstrain = {
    audio: true,
    video: false,
};

const defaultConstrain = {
    audio: true,
    video: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbacfn) => {
    const constraints = onlyAudio ? onlyAudioConstrain : defaultConstrain;

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        store.dispatch(setLocalStream(stream));
        callbacfn();
    }).catch(err => {
        console.log(err);
        console.log("Cannot get access to local stream");
    });
};

let peer = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
    const localStream = store.getState().room.localStream;

    if (isInitiator) {
        console.log("Preparing new peer connection as initiator");
    } else {
        console.log("Preparing new peer connection as not initiator");
    }

    peer[connUserSocketId] = new Peer({
        initiator: isInitiator,
        config: getConfiguration(),
        stream: localStream,
    });

    peer[connUserSocketId].on('signal', (data) => {
        const signalData = {
            signal: data,
            connUserSocketId: connUserSocketId,
        };

        socketConnection.signalPeerData(signalData);
    });

    peer[connUserSocketId].on('stream', (remoteStream) => {
        console.log('remote stream came from other user');
        remoteStream.connUserSocketId = connUserSocketId;
        addNewRemoteStream(remoteStream);
    })
};

export const handleSignalingData = (data) => {
    const { connUserSocketId, signal } = data;

    if (peer[connUserSocketId]) {
        peer[connUserSocketId].signal(signal);
    };
};

const addNewRemoteStream = (remoteStream) => {
    const remoteStreams = store.getState().room.remoteStreams;
    const newRemoteStreams = [...remoteStreams, remoteStream];

    store.dispatch(setRemoteStream(newRemoteStreams));
};

export const closeAllConnection = () => {
    Object.entries(peer).forEach((mappedObject) => {
        const connUserSocketId = mappedObject[0];
        if (peer[connUserSocketId]) {
            peer[connUserSocketId].destroy();
            delete peer[connUserSocketId];
        }
    });
};

export const handleParticipantLeftRoom = (data) => {
    const { connUserSocketId } = data;

    if (peer[connUserSocketId]) {
        peer[connUserSocketId].destroy();
        delete peer[connUserSocketId];
    }

    const remoteStreams = store.getState().room.remoteStreams;

    const newRemoteStreams = remoteStreams.filter(
        (remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
    );

    store.dispatch(setRemoteStream(newRemoteStreams));
};

export const switchOutgoingTracks = (stream) => {
    for (let socket_id in peer) {
      for (let index in peer[socket_id].streams[0].getTracks()) {
        for (let index2 in stream.getTracks()) {
          if (
            peer[socket_id].streams[0].getTracks()[index].kind ===
            stream.getTracks()[index2].kind
          ) {
            peer[socket_id].replaceTrack(
              peer[socket_id].streams[0].getTracks()[index],
              stream.getTracks()[index2],
              peer[socket_id].streams[0]
            );
            break;
          }
        }
      }
    }
  };