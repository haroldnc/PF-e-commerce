
export const favouritesReducer = (state={}, action) => {
    switch(action.type){
        case "ADD_FAV":
            return{
                items: state.favs.concat(action.payload)
            }
        default:
            return state
    }
}