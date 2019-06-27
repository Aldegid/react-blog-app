const reducer = (state, action) => {
  if (state === undefined) {
    return {
      posts: [],
      post: null,
      isLoaded: false,
      error: false,
      isLoggedOn: false,
      loginButtonValue: 'Login'
    };
  }

  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state
      };

    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
        error: false
      };
    case 'FETCH_POSTS_ERROR':
      return {
        ...state,
        posts: [],
        isLoaded: false,
        error: true
      };

    case 'FETCH_POST_DETAILS_REQUEST':
      return {
        ...state
      };

    case 'FETCH_POST_DETAILS_SUCCESS':
      return {
        ...state,
        isLoaded: true,
        post: action.payload
      };

    case 'FETCH_POST_DETAILS_FAILURE':
      return {
        ...state,
        post: null,
        error: true
      };

    case 'PERFORM_LOGIN':
      return {
        ...state,
        isLoggedOn: (state.isLoggedOn = !state.isLoggedOn),
        loginButtonValue:
          state.loginButtonValue === 'Login' ? 'Logout' : 'Login'
      };

    default:
      return state;
  }
};

export default reducer;
