const initialState = {
    allCategories: [],
    services: [],
    filteredServices: [],
    category: [],
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                allCategories: action.payload,
            };                          
        case "GET_CATEGORY":
            return{
                ...state,
                category: action.payload
            }
        case "GET_SERVICES":
            const categories = state.allCategories;
            const services = categories.map((s) => s.services);

            return {
                ...state,
                services: services
            }
        case "FILTER_BY_CATEGORY": 
            //const category = state.allCategories;
            //const service = state.allCategories;

            //const filteredByCategory = category;

            //const filteredByService = service.map((s) => s.services);
            /*
            if (filteredByCategory.length > 0) {
                return {
                    ...state
                }
            } else if (filteredByService.length > 0) {
                    return {
                        ...state,
                    } */  
            //} else {
                return {
                    ...state
                }
            //}
            
        default: return state;
    };
};

export default rootReducer;