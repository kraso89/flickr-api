import * as PostAPIUtil from '../utils/post_api_util'
export const GET_POSTS = 'GET_POSTS'
export const GET_PHOTO_INFO = 'GET_PHOTO_INFO'
export const RESET_POSTS = 'RESET_POSTS'

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
})

export const getInfo = info => ({
  type: GET_PHOTO_INFO,
  info
})

export const resetPosts = () => ({
 type: RESET_POSTS
})

export const fetchPosts = (params) => ( dispatch ) => {
  return PostAPIUtil.fetchPosts(params)
  .then(posts => {
   dispatch(getPosts(posts))
   posts.forEach((photo)=> dispatch(fetchInfo(photo.id)) )
  })
}

export const fetchInfo = (photoID) => ( dispatch ) => {
  return PostAPIUtil.fetchInfo(photoID)
  .then(info =>  dispatch(getInfo(info)))
}

