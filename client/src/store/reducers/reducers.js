import { combineReducers } from "redux";
import rootReducer from './index';
import userReducer from '.userReducer';

export default combineReducers({
    rootReducer,
    userReducer
})