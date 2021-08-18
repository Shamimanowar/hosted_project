import * as actionTypes from './actionTypes';
import axios from 'axios';


const commentAdd = comment => {
    return ({
        type: actionTypes.ADD_COMMENT,
        payload: comment
    })
}

export const addComment = comment => dispatch => {
    axios.post('http://localhost:3001/comments', comment)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    dispatch(commentAdd(comment));
}

const loadCommentsArr = commentsArr => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: commentsArr
    }
}
export const loadComments = () => dispatch => {
    axios.get('http://localhost:3001/comments')
        .then(response => {
            // console.log(response.data)
            dispatch(loadCommentsArr(response.data))
        })
        .catch(err => console.log(err))
}

const loadDescriptionArr = desArr => {
    return {
        type: actionTypes.LOAD_DESCRIPTION,
        payload: desArr,
    }
}

export const loadDescription = desArr => dispatch => {
    axios.get('http://localhost:3001/DESCRIPTION')
        .then(response => {
            dispatch(loadDescriptionArr(response.data))
        })
}