import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/index";
import reducers from "./reducers"



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default Store;