import { GiConsoleController } from "react-icons/gi";
import { InputsDivs } from "../../components/PublishForm/styledPublishForm";

const initialState = {
    allCategories: [],
    allUsers: [],
    allUsersPaginate: {},
    filteredUsers: [],
    services: [],
    service: {},
    category: [],
    workers:[],
    workerDetail:{},
    users: [],
    userDetail:{},
    post: {},
    allPost:[],
    queryPosts: [],
    allTransactions: [],
    transactionById: [],
    queryPosts: []
};
//habia un objeto en initialstate

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                allCategories: action.payload,
            };
        case "GET_ALL_USERS":
            return {
                ...state,
                allUsers: action.payload,
            };
        case "GET_ALL_USERS_PAGESALL":
            return {
                ...state,
                allUsersPaginate: action.payload,
            }                  
        case "GET_CATEGORY":
            return{
                ...state,
                category: action.payload
            }
        case "CLEAR_STATE": 
            return {
                ...state,
                category: []
            }
        case "GET_SERVICES":
            const users = state.allUsers;
            console.log(users)
            const services = state.allCategories.map((s) => s.services);

            return {
                ...state,
                services: services
            }
        case "FILTER_BY_CATEGORY": 
            const category = state.allCategories;
            const service = state.allCategories;

            const filteredByCategory = category;

            const filteredByService = service.map((s) => s.services);
            
            if (filteredByCategory.length > 0) {
                return {
                    ...state
                }
            } else if (filteredByService.length > 0) {
                    return {
                        ...state,
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
        case "GET_SERVICE_BYID":
            return{
                ...state,
                service: action.payload
            }
        case "GET_POSTS": 
            return{
                ...state,
                posts: action.payload
            }
        case "GET_POST_SERVICE_BY_ID":
            return{
                ...state,
                servicePosts: action.payload
            }
        case "POST_ID":
            return{
                ...state,
                postDetail: action.payload,
            }
        case "POST_PUBLISH_OF_SERVICE":
            return{
                ...state
            }
        case "POST_COMMENT":
            return{
                ...state
            }
        case "GET_USER_BY_ID":
            return{
                ...state,
                userDetail: action.payload
            }
        case "GET_POST_ID":
            return{
                ...state,
                post: action.payload
            }
        case "GET_ALL_POSTS":
            return{
                ...state,
                allPost:action.payload
            }

        case "GET_WISHLIST":
            return{
                ...state,
                wishlist: action.payload
            }

            case "GET_WISHLIST_BY_ID":
                return{
                    ...state,
                    userWishlist: action.payload
                }   

        case "ADD_TO_WISHLIST":

            return{
                ...state,
            }

        case "GET_POST_BY_QUERY":
            return{
                ...state,
                queryPosts: action.payload.Publications
            }
        case  "PAYMENT":
            window.location.href = action.payload.url
        case "GET_ALL_TRANSACTIONS":
            return {
                ...state,
                allTransactions: action.payload
            }
        case "GET_TRANSACTIONS_BYID":
            console.log('payload',action.payload)
            return {
                ...state,
                transactionById: action.payload
            }


        case  "PAYMENT":
            console.log(action.payload)
            window.location.href = action.payload.url
            
        default: return state;
    };
};

export default rootReducer;