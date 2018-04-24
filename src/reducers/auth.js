const reducerDefaultState = {
  isLoggedIn: false,
};

export default (state = reducerDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
