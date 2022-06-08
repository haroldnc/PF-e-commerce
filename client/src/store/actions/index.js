import axios from "axios";

export const getAllCategories = () => (dispatch) => {
  axios
    .get("https://wixer-server.herokuapp.com/categories")
    .then((res) => dispatch({ type: "GET_CATEGORIES", payload: res.data }));
};

export const getCategorybyId = (id) => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/categories/${id}`)
    .then((res) => dispatch({ type: "GET_CATEGORY", payload: res.data }));
};

export const getWorkers = () => (dispatch) => {
  axios
    .get("https://wixer-server.herokuapp.com/workers")
    .then((res) => dispatch({ type: "GET_WORKERS", payload: res.data }));
};

export function getWorkerDetail(id) {
  return (dispatch) => {
    return axios
      .get(`https://wixer-server.herokuapp.com/workers/${id}`)
      .then((res) =>
        dispatch({ type: "GET_WORKER_DETAIL", payload: res.data })
      );
  };
}

export const postCategories = (body) => async () => {
  const response = await axios.post(
    `https://wixer-server.herokuapp.com/categories`,
    body
  );
  return response;
};

export const postUser = (payload) => async () => {
  const response = await axios.post(
    `https://wixer-server.herokuapp.com/user`,
    payload
  );
  return response;
};

export const signIn = (payload) => async () => {};

export const postWorkerData = (payload) => async () => {
  const response = await axios.post(
    `https://wixer-server.herokuapp.com/workers`,
    payload
  );
  return response;
};

export const getServices = (payload) => {
  return { type: "GET_SERVICES", payload: payload };
};

export const getAllUsers = () => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/user`)
    .then((res) => dispatch({ type: "GET_ALL_USERS", payload: res.data }));
};

export const getAllUsersAllPAginate = () => dispatch => {
  axios.get(`https://wixer-server.herokuapp.com/user?page=1&limit=100`)
  .then((res) => dispatch({ type: "GET_ALL_USERS_PAGESALL", payload: res.data }))
}

export const clearState = () => {
  return { type: "CLEAR_STATE" };
};

export const getPosts = () => (dispatch) => {
  axios
    .get(`http://wixer-server.herokuapp.com/posts`)
    .then((res) => dispatch({ type: "GET_POSTS", payload: res.data }));
};

export const getPostsByServiceId = (id) => (dispatch) => {
  axios
    .get(`http://wixer-server.herokuapp.com/posts/service/${id}`)
    .then((res) =>
      dispatch({ type: "GET_POST_SERVICE_BY_ID", payload: res.data })
    );
};

export const getServiceById = (id) => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/services/${id}`)
    .then((res) => dispatch({ type: "GET_SERVICE_BYID", payload: res.data }));
};

export const postPublish = (post) => async (dispatch) => {
  axios
    .post(`http://wixer-server.herokuapp.com/posts`, post)
    .then((res) => dispatch({ type: "POST_PUBLISH_OF_SERVICE", payload: res.payload }));
};

export function getUserById(id) {
  return (dispatch) => {
    return axios
      .get(`https://wixer-server.herokuapp.com/user/${id}`)
      .then((res) => dispatch({ type: "GET_USER_BY_ID", payload: res.data }));
  };
}

export function getAllPosts() {
  return (dispatch) => {
    return axios
      .get(`https://wixer-server.herokuapp.com/posts`)
      .then((res) => dispatch({ type: "GET_ALL_POSTS", payload: res.data }));
  };
}

export const getPostById = (id) => (dispatch) => {
  axios
    .get(`http://wixer-server.herokuapp.com/posts/${id}`)
    .then((res) => dispatch({ type: "GET_POST_ID", payload: res.data }));
};
