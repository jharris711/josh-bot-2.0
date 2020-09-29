import types from '../types'

import axios from 'axios'


export const getPeopleIFollowRequest = () => {
    return {
        type: types.GET_PEOPLE_I_FOLLOW_REQUEST
    }
}


const getPeopleIFollowSuccess = people_i_follow => {
    return {
        type: types.GET_PEOPLE_I_FOLLOW_SUCCESS,
        payload: people_i_follow,
    }
}


const getPeopleIFollowFailure = error => {
    return {
        type: types.GET_PEOPLE_I_FOLLOW_FAILURE,
        payload: error,
    }
}


export const getPeopleIFollow = () => {
    return dispatch => {
        dispatch(getPeopleIFollowRequest())
        axios.get('http://localhost:5000/people-i-follow')
            .then(response => {
                const people_i_follow = Object.defineProperties(response.data)
                console.log(people_i_follow)
                dispatch(getPeopleIFollowSuccess(people_i_follow))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(getPeopleIFollowFailure(errorMsg))
            })
    }
}