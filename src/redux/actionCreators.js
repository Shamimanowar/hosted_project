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
        .then(response => dispatch(commentAdd(comment)))
        .catch(err => alert('Something went wrong! Your comment is not added for' + err.message + 'Try again please..'))
        ;
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
        .catch(err => alert('Loading comments is failed for ' + err.message))
}

const loadDescriptionArr = desArr => {
    return {
        type: actionTypes.LOAD_DESCRIPTION,
        payload: desArr,
    }
}

export const loadDescription = () => dispatch => {
    axios.get('http://localhost:3001/DESCRIPTION')
        .then(response => {
            dispatch(loadDescriptionArr(response.data))
        })
        .catch((err) => {
            alert(`This page is not loaded for + ${err.message}`)
        })
        .finally(() => {
            // this is for to close the loader
            dispatch({
                type: actionTypes.IS_LOADING,
                payload: false
            })
        })
}