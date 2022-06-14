import axios from "axios";
import { GiAxeInLog } from "react-icons/gi";

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

export const getAllUsersAllPAginate = () => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/user?page=1&limit=100`)
    .then((res) =>
      dispatch({ type: "GET_ALL_USERS_PAGESALL", payload: res.data })
    );
};

export const clearState = () => {
  return { type: "CLEAR_STATE" };
};


export const clearServiceDetail = () => {
  return { type: "CLEAR_SERVICE_DETAIL" };
};

export const getPosts = () => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/posts`)
    .then((res) => dispatch({ type: "GET_POSTS", payload: res.data }));
};

export const getPostsByServiceId = (id) => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/posts/service/${id}`)
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
    .post(`https://wixer-server.herokuapp.com/posts`, post)
    .then((res) =>
      dispatch({ type: "POST_PUBLISH_OF_SERVICE", payload: res.payload })
    );
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
      .then((res) => dispatch({ type: "GET_ALL_POSTS", payload: res.data.Publications }));
  };
}

export const getPostById = (id) => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/posts/${id}`)
    .then((res) => dispatch({ type: "GET_POST_ID", payload: res.data }));
};

export const getConfirmUser = (id) => (dispatch) => {
  axios
    .post(`https://wixer-server.herokuapp.com/user/confirm/${id}`)
    .then((res) => dispatch({ type: "GET_CONFIRM_USER ", payload: res.data }));
};

export const addToWishlist = (idUser, idPublication) => async (dispatch) => {
  axios
    .post(`https://wixer-server.herokuapp.com/favorites`, {idUser, idPublication})
    .then((res) => dispatch({ type: "ADD_TO_WISHLIST", payload: res.data }));
};

export const getWishlist = () => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/favorites`)
    .then((res) => dispatch({ type: "GET_WISHLIST", payload: res.data }));
};

export const getWishlistById = (id) => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/favorites/${id}`)
    .then((res) => dispatch({ type: "GET_WISHLIST_BY_ID", payload: res.data }));
};

export const removeWishlist = (payload) => {
  return {
    type: "REMOVE_WISHLIST",
    payload,
  };
};

export const getPostByQuery = (query) => (dispatch) => {
  axios
    .get(`https://wixer-server.herokuapp.com/posts?title=${query}`)
    .then((res) => dispatch({ type: "GET_POST_BY_QUERY", payload: res.data }));
};
export const PostPayment = (body) => (dispatch) => {
  axios
    .post(`https://wixer-server.herokuapp.com/checkout`, body)
    .then((res) => dispatch({ type: "PAYMENT", payload: res.data }));
};


export const PostTransaction = (body) => async () => {
  await axios.post(`https://wixer-server.herokuapp.com/transactions`, body)
}

export const GetAllTransaction = () => dispatch => {
  axios.get(`https://wixer-server.herokuapp.com/transactions`)
  .then(res => dispatch({type: "GET_ALL_TRANSACTIONS", payload: res.data}))
}

export const GetTransactionById = (id) => dispatch => {
  console.log('Funciono transacit')
  axios.get(`https://wixer-server.herokuapp.com/transactions/${id}`)
  .then(res => dispatch({type: "GET_TRANSACTIONS_BYID", payload: res.data}))
}


export const PutInfoWorker = (body, id) => async () => {
  await axios.put(`https://wixer-server.herokuapp.com/workers/${id}`, body);
};

export const PutInfoUser = (body,id) => async () => {  
  await axios.put(`https://wixer-server.herokuapp.com/user/${id}`, body)
}

export const postComments = (comment) => async (dispatch) => {
  axios
    .post(`https://wixer-server.herokuapp.com/:publicationId`, comment)
    .then((res) =>
      dispatch({ type: "POST_COMMENT", payload: res.payload })
    );
};

export const workerSubscibed = (body,id) => async() => {
  await axios.put(`https://wixer-server.herokuapp.com/subscriptions/${id}`, body)
}
  
export const cancelSubscription = (body,id) => async () => {
  await axios.put(`https://wixer-server.herokuapp.com/subscriptions/cancel/${id}`, body)
}

export const changeSubscription = (body,id) => async() => {
  // await axios.post(`https://wixer-server.herokuapp.com/subscriptions/change/${id}`, body, )
  await axios({ method: 'put', url:`https://wixer-server.herokuapp.com/subscriptions/change/${id}`, data: body})
}

export const getPostByUser = (id) => dispatch => {
   axios.get(`https://wixer-server.herokuapp.com/posts/user/${id}`)
  .then(res => dispatch({type: "GET_POST_BY_USER", payload: res.data}))
}


export const deletPost = (id) => async () => {
  const response = await axios.delete(`https://wixer-server.herokuapp.com/posts/${id}`)
  return response
} 


export const editPosts = (body,id) => async () => {
  await axios.put(`https://wixer-server.herokuapp.com/posts/${id}`, body)
}


