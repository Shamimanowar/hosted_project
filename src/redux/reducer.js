import * as actionTypes from './actionTypes';
// import DESCRIPTION from "../data/Description";

const initState = {
    description: [],
    comments: [],
}

export const Reducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let id = state.comments.length;
            console.log(state.comments)
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
                description: state.description.concat(...action.payload)
            }

        default:
            return state;
    }
}