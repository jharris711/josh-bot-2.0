import types from '../../actions/types'


const initialState = {
    get_people_i_follow_loading: false,
    people_i_follow: [],
    get_people_i_follow_error: '',
}


const peopleIFollowReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_PEOPLE_I_FOLLOW_REQUEST:
            return {
                ...state,
                get_people_i_follow_loading: true,
            }
        case types.GET_PEOPLE_I_FOLLOW_SUCCESS:
            return {
                ...state,
                get_people_i_follow_loading: false,
                people_i_follow: action.payload,
            }
        case types.GET_PEOPLE_I_FOLLOW_FAILURE:
            return {
                ...state,
                get_people_i_follow_loading: false,
                get_people_i_follow_error: action.payload
            }
        default: return state
    }
}


export default peopleIFollowReducer