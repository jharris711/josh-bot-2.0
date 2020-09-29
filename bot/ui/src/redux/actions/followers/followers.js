import types from '../types'

import axios from 'axios'


export const getMyFollowersRequest = () => {
    return {
        type: types.GET_MY_FOLLOWERS_REQUEST
    }
}


const getMyFollowersSuccess = followers => {
    return {
        type: types.GET_MY_FOLLOWERS_SUCCESS,
        payload: followers,
    }
}


const getMyFollowersFailure = error => {
    return {
        type: types.GET_MY_FOLLOWERS_FAILURE,
        payload: error,
    }
}


export const getMyFollowers = () => {
    return dispatch => {
        dispatch(getMyFollowersRequest())
        axios.get('http://localhost:5000/my-followers')
            .then(response => {
                const followers = Object.entries(response.data)
                dispatch(getMyFollowersSuccess(followers))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(getMyFollowersFailure(errorMsg))
            })
    }
}