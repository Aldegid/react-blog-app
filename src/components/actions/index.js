const postsRequested = () => {
  return {
    type: 'FETCH_POSTS_REQUEST'
  };
};

const postsLoaded = posts => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts
  };
};

const postsError = error => {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error
  };
};

const postDetailsRequested = () => {
  return {
    type: 'FETCH_POST_DETAILS_REQUEST'
  };
};

const postDetailsLoaded = post => {
  return {
    type: 'FETCH_POST_DETAILS_SUCCESS',
    payload: post
  };
};

const postDetailsError = error => {
  return {
    type: 'FETCH_POST_DETAILS_FAILURE',
    payload: error
  };
};

export const postClicked = postId => {
  return {
    type: 'FETCH_POST_SUCCESS',
    payload: postId
  };
};

export const performLogin = () => {
  return {
    type: 'PERFORM_LOGIN'
  };
};

export const fetchPosts = blogService => () => dispatch => {
  dispatch(postsRequested());
  blogService
    .getAllPosts()
    .then(data => dispatch(postsLoaded(data)))
    .catch(err => dispatch(postsError(err)));
};

export const fetchPostDetails = blogService => id => dispatch => {
  dispatch(postDetailsRequested());
  blogService
    .getPost(id)
    .then(data => dispatch(postDetailsLoaded(data)))
    .catch(err => dispatch(postDetailsError(err)));
};
