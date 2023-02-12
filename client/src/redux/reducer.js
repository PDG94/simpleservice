const initialState = {
    services: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case algo:
            return {

            }
        default: 
        return { ...state};
    }
}

export default rootReducer;