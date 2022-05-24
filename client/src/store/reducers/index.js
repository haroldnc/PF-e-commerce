const initialState = {
    hola: []
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRUEBA":
            return {
                ...state,
                hola: action.payload,
            };                          

        default: return state;
    };
};

export default rootReducer;