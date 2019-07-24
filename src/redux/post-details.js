const FETCH_POST_DETAILS_REQUEST = 'FETCH_POST_DETAILS_REQUEST';
const FETCH_POST_DETAILS_SUCCESS = 'FETCH_POST_DETAILS_SUCCESS';
const FETCH_POST_DETAILS_FAILURE = 'FETCH_POST_DETAILS_FAILURE';

const initialState = {
  post: null,
  isLoaded: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_DETAILS_REQUEST:
      return {
        post: null,
        isLoaded: false,
        error: false
      };

    case FETCH_POST_DETAILS_SUCCESS:
      return {
        post: action.payload,
        isLoaded: true,
        error: false
      };

    case FETCH_POST_DETAILS_FAILURE:
      return {
        post: null,
        isLoaded: false,
        error: true
      };

    default:
      return state;
  }
};

const postDetailsRequested = () => {
  return {
    type: FETCH_POST_DETAILS_REQUEST
  };
};

const postDetailsLoaded = post => {
  return {
    type: FETCH_POST_DETAILS_SUCCESS,
    payload: post
  };
};

const postDetailsError = error => {
  return {
    type: FETCH_POST_DETAILS_FAILURE,
    payload: error
  };
};

export const fetchPostDetails = blogService => id => dispatch => {
  dispatch(postDetailsRequested());
  blogService
    .getPost(id)
    .then(data => dispatch(postDetailsLoaded(data)))
    .catch(err => dispatch(postDetailsError(err)));
};
