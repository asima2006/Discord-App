import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer'
import alertReducer from './reducers/alertReducer'
import frindesReducer from './reducers/friendsReducer'
import chatReducers from './reducers/chatReducer'
import roomReducer from './reducers/roomReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    friends: frindesReducer,
    chat: chatReducers,
    room: roomReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;