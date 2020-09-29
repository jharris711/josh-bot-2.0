import types from '../../actions/types'


const initialState = {
    single_follower_loading: false,
    single_follower: [],
    single_follower_error: ''
}


const singleFollowerReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_SINGLE_FOLLOWER_REQUEST:
            return {
                ...state,
                single_follower_loading: true
            }
        case types.GET_SINGLE_FOLLOWER_SUCCESS:
            return {
                ...state,
                single_follower_loading: false,
                single_follower: action.payload
            }
        case types.GET_SINGLE_FOLLOWER_FAILURE:
            return {
                ...state,
                single_follower_loading: false,
                single_follower_error: action.payload
            }
        default: return state
    }
}

export default singleFollowerReducer