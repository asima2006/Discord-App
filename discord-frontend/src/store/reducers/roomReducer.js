import { roomActions } from "../actions/roomAction";

const initalState = {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStream: null,
    remoteStreams: [],
    audioOnly: null,
    screenSharingStream: null,
    isScreenSharingActive: false,
    isUserJoinedWithOnlyAudio: false,
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case roomActions.OPEN_ROOM:
            return {
                ...state,
                isUserInRoom: action.isUserInRoom,
                isUserRoomCreator: action.isUserRoomCreator,
            }
        case roomActions.SET_ROOM_DETAILS:
            return {
                ...state,
                roomDetails: action.roomDetails,
            }
        case roomActions.SET_ACTIVE_ROOMS:
            return {
                ...state,
                activeRooms: action.activeRooms,
            };
        case roomActions.SET_LOCAL_STREAM: 
            return {
                ...state,
                localStream: action.localStream,
            };
        case roomActions.SET_AUDIO_ONLY:
            return {
                ...state,
                audioOnly: action.audioOnly,
            };
        case roomActions.SET_REMOTE_STREAM:
            return {
                ...state,
                remoteStreams: action.remoteStreams,
            };
        case roomActions.SET_SCREEN_SHARE_STREAM:
            return {
                ...state,
                screenSharingStream: action.screenSharingStream,
                isScreenSharingStream: action.isScreenSharingStream,
            };
        case roomActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO:
            return {
                ...state,
                isUserJoinedWithOnlyAudio: action.isUserJoinedWithOnlyAudio,
            };
        default:
            return state;
    }
}

export default reducer;