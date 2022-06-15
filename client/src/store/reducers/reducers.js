import { combineReducers } from "redux";
import rootReducer from './index';
import userReducer from '.userReducer';
import favReducer from '.favReducer'

export default combineReducers({
    rootReducer,
    userReducer,
    favReducer,
})

