import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/index";
import reducers from "./reducers";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  allCategories: [],
  allUsers: [],
  filteredUsers: [],
  services: [],
  service: {},
  category: [],
  workers: [],
  workerDetail: {},
  users: [],
  posts: [],
  servicePosts: [],
  postDetail: [],
  userDetail:{},
  post: {},
  allPost:[] 
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default Store;
