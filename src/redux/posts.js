const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const initialState = {
  postsList: [],
  isLoaded: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        postsList: [],
        isLoaded: false,
        error: false
      };

    case FETCH_POSTS_SUCCESS:
      return {
        postsList: action.payload,
        isLoaded: true,
        error: false
      };

    case FETCH_POSTS_ERROR:
      return {
        postsList: [],
        isLoaded: false,
        error: true
      };
    default:
      return state;
  }
};

const postsRequested = () => {
  return {
    type: 'FETCH_POSTS_REQUEST'
  };
};

const postsLoaded = postsList => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: postsList
  };
};

const postsError = error => {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error
  };
};

export const fetchPosts = blogService => () => dispatch => {
  dispatch(postsRequested());
  blogService
    .getAllPosts()
    .then(data => dispatch(postsLoaded(data)))
    .catch(err => dispatch(postsError(err)));
};
