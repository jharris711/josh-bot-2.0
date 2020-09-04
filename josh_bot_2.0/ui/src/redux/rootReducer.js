import { combineReducers } from 'redux'
import followersReducer from './reducers/followers/followersReducer'
import peopleIFollowReducer from './reducers/followers/peopleIFollowReducer'


const rootReducer = combineReducers({
    followers: followersReducer,
    peopleIFollow: peopleIFollowReducer,
})


export default rootReducer