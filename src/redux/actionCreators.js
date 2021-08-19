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
            alert(`This page is not loaded for ${err.message}`)
        })
        .finally(() => {
            // this is for to close the loader
            dispatch({
                type: actionTypes.IS_LOADING,
                payload: false
            })
        })
}


// auth action creators

export const authLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
const authLoading = isAuthLoading => {
    return {
        type: actionTypes.AUTH_LOADING,
        payload: isAuthLoading,
    }
}

const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: { token: token, userId: userId }
    }
}

const authFailed = errMsg => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg
    }
}


export const tryToAuthanticate = (email, password, mode, navigate) => dispatch => {
    dispatch(authLoading(true)) // this call is for to show loader after clicking login
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    const API_KEY = 'AIzaSyDMKpybseAHHmrdEyhLQpmF5_7njowwjgs';
    let postUrl = null;
    if (mode === 'Sign Up') {
        postUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    } else {
        postUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    }

    axios.post(postUrl, authData)
        .then(response => {
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            let expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            navigate.push('/home');

        })
        .catch(err => {
            alert(err.response.data.error.message);
            dispatch(authFailed(err.response.data.error.message))
        })
        .finally(() => { dispatch(authLoading(false)) })
}

export const authCheck = () => dispatch => {
    let token = localStorage.getItem('token');
    if (!token) {
        dispatch(authLogOut());
        // dispatch logout
    } else {
        let expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            // console.log('Expiration Time is over')
            dispatch(authLogOut())
            // dispatch logout cause expiration over
        } else {
            let userId = localStorage.getItem('userId')
            dispatch(authSuccess(token, userId))
        }
    }
}

