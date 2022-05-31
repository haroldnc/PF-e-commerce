import axios from "axios"

export const register = (payload) => async(dispatch) => {
    dispatch({type: "USER_REGISTER_REQ", payload: {payload}})

    try{
        const {data} = await axios.post(`https://wixer-server.herokuapp.com/user`, payload);
        dispatch({type: "USER_REGISTER_SUCCESS", payload: data})
        dispatch({type: "USER_SIGNIN_SUCCESS", payload: data})
    }catch(err){
        dispatch({type: "USER_REGISTER_FAIL", payload: err})
    }
}

export const signout = (payload) => async(dispatch) => {
    
}