import { SIGNUP, SIGNIN } from "../actions/auth.action";

const initialState = {
    token: null,
    userId: null,
}

const AuthReducer  = (state = initialState, action) => {
    switch(action.type) {
        case SIGNIN:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        case SIGNUP:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        default:
            return state;
    }
}


export default AuthReducer;