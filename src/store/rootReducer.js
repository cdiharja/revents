import {combineReducers} from 'redux';
import authReducer from '../features/auth/authReducer';
import eventReducer from '../features/events/eventReducer';
import modalReducer from '../features/modals/modalReducer';
import testReducer from '../sandbox/testReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
    test:testReducer,
    event:eventReducer,
    modals:modalReducer,
    auth:authReducer,
    async:asyncReducer
})

export default rootReducer;