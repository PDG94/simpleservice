const initialState = {
    services: []
}

function roortReducer(state = initialState, action) {
    switch (action.type) {
        case algo:
            return {

            }
        default: 
        return { ...state};
    }
}

export default roortReducer;