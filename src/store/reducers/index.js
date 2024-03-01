import { combineReducers } from 'redux';
import conversationsReducer from './conversationsReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
 conversations: conversationsReducer,
 messages: messagesReducer,
});

export default rootReducer;
