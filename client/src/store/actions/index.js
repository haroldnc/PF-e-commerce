import axios from 'axios'

export const getCategories = () => dispatch => {
    axios.get("https://wixer-server.herokuapp.com/categories")
    .then(res => dispatch({type: "GET_CATEGORIES", payload: res.data}))
}