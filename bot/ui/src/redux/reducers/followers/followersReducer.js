import types from '../../actions/types'


const initialState = {
    get_followers_loading: false,
    my_followers: [],
    get_followers_error: '',
}


const followersReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_MY_FOLLOWERS_REQUEST:
            return {
                ...state,
                get_followers_loading: true
            }
        case types.GET_MY_FOLLOWERS_SUCCESS:
            return {
                ...state,
                get_followers_loading: false,
                my_followers: action.payload,
            }
        case types.GET_MY_FOLLOWERS_FAILURE:
            return {
                ...state,
                get_followers_loading: false,
                get_followers_error: action.payload
            }
        default: return state
    }
}


export default followersReducer