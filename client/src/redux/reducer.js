import {GET_SERVICES} from "./actionTypes"

const initialState = {
    services: [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SERVICES:
            return {
            ...state,
            services: action.payload,
            }
        default: 
        return { ...state};
    }
}

export default rootReducer;