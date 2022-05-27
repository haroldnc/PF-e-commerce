import axios from 'axios'

export const getAllCategories = () => dispatch => {
    axios.get("https://wixer-server.herokuapp.com/categories")
    .then(res => dispatch({type: "GET_CATEGORIES", payload: res.data}))
}

export const getCAtegory = (id) => dispatch => {
    axios.get(`https://wixer-server.herokuapp.com/categories/${id}`)
    .then(res => dispatch({type: "GET_CATEGORY", payload: res.data}))
}