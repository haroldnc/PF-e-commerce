import axios from 'axios'

export const getAllCategories = () => dispatch => {
    axios.get("https://wixer-server.herokuapp.com/categories")
    .then(res => dispatch({type: "GET_CATEGORIES", payload: res.data}))
}

export const getCategorybyId = (id) => dispatch => {
    axios.get(`https://wixer-server.herokuapp.com/categories/${id}`)
    .then(res => dispatch({type: "GET_CATEGORY", payload: res.data}))
}

export function getWorkers(){
    return dispatch=>{
        return axios.get("https://wixer-server.herokuapp.com/workers")
        .then(res=>dispatch({type: "GET_WORKERS", payload: res.data}))
    }
}

export function getWorkerDetail(id){
    return dispatch=>{
        return axios.get(`https://wixer-server.herokuapp.com/workers/${id}`)
        .then(res=>dispatch({type: "GET_WORKER_DETAIL", payload: res.data}))
    }
}

export const postUser = (payload) => async() => {
    const response = await axios.post(`https://wixer-server.herokuapp.com/user`, payload);
    return response;
};

export const signIn = (payload) => async() => {
    
}

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

export const clearState = () => {
    return {type: "CLEAR_STATE"}
}

export const getServiceById = (id) => dispatch => {
    axios.get(`https://wixer-server.herokuapp.com/services/${id}`)
    .then(res => dispatch({type: "GET_SERVICE_BYID", payload: res.data}))
}