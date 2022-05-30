const initialState = {
    allCategories: [],
    filteredServices: [],
    category: [],
    workers:[],
    workerDetail:{}
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
        case "FILTER_BY_CATEGORY": 
            const category = state.allCategories;
            const service = state.allCategories;

            const filteredByCategory = category;

            const filteredByService = service;
            
            if (filteredByCategory.length > 0) {
                return {
                    ...state
                }
            } else if (filteredByService.length > 0) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state
                }
            }
        
        case "GET_WORKERS":
            return{
                ...state,
                workers: action.payload
            }

        case "GET_WORKER_DETAIL":
            return{
                ...state,
                workerDetail: action.payload
            }

        default: return state;
    };
};

export default rootReducer;