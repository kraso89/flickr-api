import { combineReducers } from 'redux'
import { GET_POSTS , GET_PHOTO_INFO, RESET_POSTS } from '../actions'

function receivePosts (state={}, action) {
  switch (action.type) {
    case GET_POSTS:
      return [...state, ...action.posts]
     case RESET_POSTS:
     return []
    default:
      return state
  }
}

function info (state= {}, action) {
  switch (action.type) {
    case GET_PHOTO_INFO:
      return { ...state, [action.info.photo.id]: action.info.photo }
    case RESET_POSTS:
      return {}
    default:
      return state
  }
}

export default combineReducers({
  receivePosts,
  info
})
