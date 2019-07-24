const PERFORM_LOGIN = 'PERFORM_LOGIN';

const initialState = {
  isLoggedOn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PERFORM_LOGIN:
      return {
        isLoggedOn: !state.isLoggedOn
      };
    default:
      return state;
  }
};

export const performLogin = () => {
  return {
    type: PERFORM_LOGIN
  };
};
