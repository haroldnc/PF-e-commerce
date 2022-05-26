const initialState = {
    allCategories: [],
    category: [],
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                allCategories: action.payload
            };                          
        case "GET_CATEGORY":
            return{
                ...state,
                category: action.payload
            }
        default: return state;
    };
};

export default rootReducer;