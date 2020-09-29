import types from '../types'
import axios from 'axios'


export const getSingleFollowerRequest = () => {
    return {
        type: types.GET_SINGLE_FOLLOWER_REQUEST
    }
}

const getSingleFollowerSuccess = follower => {
    return {
        type: types.GET_SINGLE_FOLLOWER_SUCCESS,
        payload: follower,
    }
}

const getSingleFollowerFailure = error => {
    return {
        type: types.GET_SINGLE_FOLLOWER_FAILURE,
        payload: error,
    }
}

export const getSingleFollower = userid => {
    return dispatch => {
        dispatch(getSingleFollowerRequest())
        console.log(userid)
        axios.get(`http://localhost:5000/my-followers/${userid}`)
            .then(res => {
                console.log(res.data)
                dispatch(getSingleFollowerSuccess(res.data))
            })
            .catch(e => {
                const errMsg = e.message
                dispatch(getSingleFollowerFailure(errMsg))
            })
    }
}