import alertMessage from "../actions/alertAction";

const initialState = {
    showAlertMessage: null,
    alertMessageContent: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case alertMessage.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content,
            }
        case alertMessage.CLOSE_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: false,
                alertMessageContent: null,
            }
            default:
                return state
    };
};

export default reducer;