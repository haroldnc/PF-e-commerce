import axios from "axios";
import { GiAxeInLog } from "react-icons/gi";

export const getAllCategories = () => (dispatch) => {
  axios
    .get("https://wixxer.up.railway.app/categories")
    .then((res) => dispatch({ type: "GET_CATEGORIES", payload: res.data }));
};

export const getAllServices = () => dispatch => {
  axios.get("https://wixxer.up.railway.app/services")
  .then( res => dispatch({type: "GET_ALL_SERVICES", payload: res.data}))
}

export const postService = (body) => async () => {
  await axios.post("https://wixxer.up.railway.app/services", body)
}

export const putServices = (body, id) => async() => {
  await axios.put(`https://wixxer.up.railway.app/services/${id}`, body)
}

export const deleteService = (id) => async() => {
  await axios.delete(`https://wixxer.up.railway.app/services/${id}`)
}

export const getCategorybyId = (id) => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/categories/${id}`)
    .then((res) => dispatch({ type: "GET_CATEGORY", payload: res.data }));
};

export const getWorkers = () => (dispatch) => {
  axios
    .get("https://wixxer.up.railway.app/workers")
    .then((res) => dispatch({ type: "GET_WORKERS", payload: res.data }));
};

export function getWorkerDetail(id) {
  return (dispatch) => {
    return axios
      .get(`https://wixxer.up.railway.app/workers/${id}`)
      .then((res) =>
        dispatch({ type: "GET_WORKER_DETAIL", payload: res.data })
      );
  };
}

export const postCategories = (body) => async () => {
  const response = await axios.post(
    `https://wixxer.up.railway.app/categories`,
    body
  );
  return response;
};

export const putCategories = (body, id) => async () => {
  await axios.put( `https://wixxer.up.railway.app/categories/${id}`,body)
}

export const deleteCategories = (id) => async () => {
  await axios.delete( `https://wixxer.up.railway.app/categories/${id}`)
}

export const postUser = (payload) => async () => {
  const response = await axios.post(
    `https://wixxer.up.railway.app/user`,
    payload
  );
  return response;
};

export const signIn = (payload) => async () => {};

export const postWorkerData = (payload) => async () => {
  const response = await axios.post(
    `https://wixxer.up.railway.app/workers`,
    payload
  );
  return response;
};

export const getServices = (payload) => {
  return { type: "GET_SERVICES", payload: payload };
};

export const getAllUsers = () => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/user`)
    .then((res) => dispatch({ type: "GET_ALL_USERS", payload: res.data }));
};

export const getAllUsersAllPAginate = () => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/user?page=1&limit=100`)
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
    .get(`https://wixxer.up.railway.app/posts`)
    .then((res) => dispatch({ type: "GET_POSTS", payload: res.data }));
};

export const getPostsByServiceId = (id) => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/posts/service/${id}`)
    .then((res) =>
      dispatch({ type: "GET_POST_SERVICE_BY_ID", payload: res.data })
    );
};

export const getServiceById = (id) => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/services/${id}`)
    .then((res) => dispatch({ type: "GET_SERVICE_BYID", payload: res.data }));
};

export const postPublish = (post) => async (dispatch) => {
  axios
    .post(`https://wixxer.up.railway.app/posts`, post)
    .then((res) =>
      dispatch({ type: "POST_PUBLISH_OF_SERVICE", payload: res.payload })
    );
};

export function getUserById(id) {
  console.log(id)
  return (dispatch) => {
    return axios
      .get(`https://wixxer.up.railway.app/user/${id}`)
      .then((res) => dispatch({ type: "GET_USER_BY_ID", payload: res.data }));
  };
}

export const clearUserById = () => {
  return {type :"CLEAR_USER_BY_ID"}
}

export function getAllPosts() {
  return (dispatch) => {
    return axios
      .get(`https://wixxer.up.railway.app/posts`)
      .then((res) => dispatch({ type: "GET_ALL_POSTS", payload: res.data.Publications }));
  };
}

export const getPostById = (id) => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/posts/${id}`)
    .then((res) => dispatch({ type: "GET_POST_ID", payload: res.data }));
};

export const getConfirmUser = (id) => (dispatch) => {
  axios
    .post(`https://wixxer.up.railway.app/user/confirm/${id}`)
    .then((res) => dispatch({ type: "GET_CONFIRM_USER ", payload: res.data }));
};

// export const addToWishlist = (idUser, idPublication) => async (dispatch) => {
//   axios
//     .post(`https://wixxer.up.railway.app/favorites`, {idUser, idPublication})
//     .then((res) => dispatch({ type: "ADD_TO_WISHLIST", payload: res.data }));
// };

// export const getWishlist = () => (dispatch) => {
//   axios
//     .get(`https://wixxer.up.railway.app/favorites`)
//     .then((res) => dispatch({ type: "GET_WISHLIST", payload: res.data }));
// };

// export const getWishlistById = (id) => (dispatch) => {
//   axios
//     .get(`https://wixxer.up.railway.app/favorites/${id}`)
//     .then((res) => dispatch({ type: "GET_WISHLIST_BY_ID", payload: res.data }));
// };

// export const removeWishlist = (payload) => {
//   return {
//     type: "REMOVE_WISHLIST",
//     payload,
//   };
// };

export const getPostByQuery = (query) => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/posts?title=${query}`)
    .then((res) => dispatch({ type: "GET_POST_BY_QUERY", payload: res.data }));
};
export const PostPayment = (body) => (dispatch) => {
  axios
    .post(`https://wixxer.up.railway.app/checkout`, body)
    .then((res) => dispatch({ type: "PAYMENT", payload: res.data }));
};


export const PostTransaction = (body) => async () => {
  await axios.post(`https://wixxer.up.railway.app/transactions`, body)
}

export const GetAllTransaction = () => dispatch => {
  axios.get(`https://wixxer.up.railway.app/transactions`)
  .then(res => dispatch({type: "GET_ALL_TRANSACTIONS", payload: res.data}))
}

export const GetTransactionById = (id) => dispatch => {
  axios.get(`https://wixxer.up.railway.app/transactions/${id}`)
  .then(res => dispatch({type: "GET_TRANSACTIONS_BYID", payload: res.data}))

}


export const PutInfoWorker = (body, id) => async () => {
  await axios.put(`https://wixxer.up.railway.app/workers/${id}`, body);
};

export const PutInfoUser = (body,id) => async () => {  
  await axios.put(`https://wixxer.up.railway.app/user/${id}`, body)
}

export const postComments = (comment) => async (dispatch) => {
  axios
    .post(`https://wixxer.up.railway.app/scores`, comment)
    .then((res) =>
      dispatch({ type: "POST_COMMENT", payload: res.payload })
    );
};

export const workerSubscibed = (body,id) => async() => {
  await axios.put(`https://wixxer.up.railway.app/subscriptions/${id}`, body)
}
  
export const cancelSubscription = (body,id) => async () => {
  await axios.put(`https://wixxer.up.railway.app/subscriptions/cancel/${id}`, body)
}

export const changeSubscription = (body,id) => async() => {
  // await axios.post(`https://wixxer.up.railway.app/subscriptions/change/${id}`, body, )
  await axios.put(`https://wixxer.up.railway.app/subscriptions/change/${id}`, body)
}

export const getPostByUser = (id) => dispatch => {
   axios.get(`https://wixxer.up.railway.app/posts/user/${id}`)
  .then(res => dispatch({type: "GET_POST_BY_USER", payload: res.data}))
}


export const hireButton = (body) => async () => {
  await axios.post(`https://wixxer.up.railway.app/hirings`, body)
}

export function getHiringsByUserId(id) {
  return (dispatch) => {
    return axios
      .get(`https://wixxer.up.railway.app/hirings/user/${id}`)
      .then((res) => dispatch({ type: "GET_HIRINGS_BY_USER_ID", payload: res.data.hirings }));
  };  
}

export const deletPost = (id) => async () => {
  const response = await axios.delete(`https://wixxer.up.railway.app/posts/${id}`)
  return response
} 


export const clearPostPrevius = () => {
  return{
    type:"CLEAR_POSTS"
  }
}

export const editPosts = (body,id) => async () => {
  await axios.put(`https://wixxer.up.railway.app/posts/${id}`, body)
}

export const changeStatusPosts = (body,id) => async () =>{
  await axios.put(`https://wixxer.up.railway.app/posts/status/${id}`, body)
}

export const getHiringsByWorker = (id) => dispatch => {
  axios.get(`https://wixxer.up.railway.app/hirings/worker/${id}`)
  .then( res => dispatch({type: "GET_HIRINGS_BY_WORKER", payload: res.data}))
}

export const DeleteUser = (id) => async() => {
  await  axios.delete(`https://wixxer.up.railway.app/user/${id}`)
}

export const addToWishlist = (idUser, idPublication) => async (dispatch) => {
  axios
    .post(`https://wixxer.up.railway.app/favorites`, {
      idUser,
      idPublication,
    })
    .then((res) => dispatch({ type: "ADD_TO_WISHLIST", payload: res.data }));
};

export const getWishlist = () => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/favorites`)
    .then((res) => dispatch({ type: "GET_WISHLIST", payload: res.data }));
};

export const getWishlistById = (id) => (dispatch) => {
  axios
    .get(`https://wixxer.up.railway.app/favorites/${id}`)
    .then((res) => dispatch({ type: "GET_WISHLIST_BY_ID", payload: res.data }));
};

export const removeFromWishlist = (_id) => (dispatch) => {
  axios
    .delete(`https://wixxer.up.railway.app/favorites/${_id}`)
    .then((res) =>
      dispatch({ type: "REMOVE_WISHLIST", payload: res.data.favorite._id })
    );
};
export const clearProfile = () => {
  return{
    type: "CLEAR_PROFILE"
  }
}


export const getLastTransactionById = (id)=> dispatch=> {
  axios.get(`https://wixxer.up.railway.app/transactions/last/${id}`)
  .then( res => dispatch({type: "GET_LAST_TRANSACT_BY_ID", payload: res.data }))
}

export const putHiring = (body) => async() => {
  await axios.put(`https://wixxer.up.railway.app/hirings/`, body)
}

export const getAllHirings = () => dispatch =>  {
  axios.get(`https://wixxer.up.railway.app/hirings`)
  .then( res => dispatch({ type: "GET_ALL_HIRINGS", payload: res.data.hirings}))
}


export const getCommentsByWorkerId = (id)=> dispatch=> {
  axios.get(`https://wixer-server.herokuapp.com/scores/worker/${id}`)
  .then( res => dispatch({type: "GET_COMMENT_BY_WORKER_ID", payload: res.data.scores }))
}