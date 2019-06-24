const reducer = (state, action) => {
  if (state === undefined) {
    return {
      posts: [],
      post: null,
      isLoaded: false,
      error: false
    };
  }
  console.log(action.type);
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        posts: [],
        post: null,
        isLoaded: false,
        error: false
      };

    case 'FETCH_POSTS_SUCCESS':
      return {
        posts: action.payload,
        post: null,
        isLoaded: true,
        error: null
      };
    case 'FETCH_POSTS_ERROR':
      return {
        posts: [],
        post: null,
        isLoaded: false,
        error: true
      };

    case 'FETCH_POST_DETAILS_REQUEST':
      return {
        posts: state.posts,
        post: null,
        isLoaded: state.isLoaded,
        error: state.error
      };
    case 'FETCH_POST_DETAILS_SUCCESS':
      return {
        posts: state.posts,
        post: action.payload,
        isLoaded: state.isLoaded,
        error: state.error
      };
    default:
      return state;
  }
};

export default reducer;
