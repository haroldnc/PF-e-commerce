const initialState = {
    allCategories: []
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                allCategories: action.payload,
            };                          

        default: return state;
    };
};

export default rootReducer;