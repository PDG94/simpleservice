import {GET_SERVICES,CLEANER_NAME,GET_BY_NAME} from "./actionTypes"

const initialState = {
    services: [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SERVICES:
            return {
            ...state,
            services: action.payload,
            };
            case CLEANER_NAME:
                return{
                    ...state,
                    services:[],
                };
                case GET_BY_NAME:
                    return{
                        ...state,
                        services:action.payload,
                    }
        default: 
        return { ...state};
    }
    
}

export default rootReducer;
