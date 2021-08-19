import * as actionTypes from './actionTypes';
// import DESCRIPTION from "../data/Description";

const initState = {
    description: [],
    comments: [],
    isLoading: true,
    token: null,
    userId: null,
    isAuthLoading: true,
    errMsg: null,
}

export const Reducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let id = state.comments.length;
            return {
                ...state,
                comments: state.comments.concat({ ...action.payload, id: id })
            }
        case actionTypes.LOAD_COMMENTS:
            return {
                ...state,
                comments: state.comments.concat(...action.payload)
            }
        case actionTypes.LOAD_DESCRIPTION:
            return {
                ...state,
                description: state.description.concat(...action.payload),
            }
        case actionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                isAuthLoading: false
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                isAuthLoading: action.payload,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                errMsg: action.payload
            }

        default:
            return state;
    }
}