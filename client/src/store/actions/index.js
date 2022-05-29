import axios from 'axios'

export const getAllCategories = () => dispatch => {
    axios.get("https://wixer-server.herokuapp.com/categories")
    .then(res => dispatch({type: "GET_CATEGORIES", payload: res.data}))
}

export const getCAtegory = (id) => dispatch => {
    axios.get(`https://wixer-server.herokuapp.com/categories/${id}`)
    .then(res => dispatch({type: "GET_CATEGORY", payload: res.data}))
}


export const postUser = (payload) => async() => {
    const response = await axios.post(`https://wixer-server.herokuapp.com/user`, payload);
    return response;
};

export const postWorkerData = (payload) => async() => {
    const response = await axios.post(`https://wixer-server.herokuapp.com/workers`, payload);
    return response;
}

export const getServices = (payload) => {
    return {type: "GET_SERVICES", payload: payload}
}

export const getAllUsers = () => dispatch => {
    axios.get(`https://wixer-server.herokuapp.com/user`)
    .then(res => dispatch({type: "GET_ALL_USERS", payload: res.data}))
}