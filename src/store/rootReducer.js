import {combineReducers} from 'redux';
import authReducer from '../features/auth/authReducer';
import eventReducer from '../features/events/eventReducer';
import modalReducer from '../features/modals/modalReducer';
import testReducer from '../sandbox/testReducer';

const rootReducer = combineReducers({
    test:testReducer,
    event:eventReducer,
    modals:modalReducer,
    auth:authReducer
})

export default rootReducer;