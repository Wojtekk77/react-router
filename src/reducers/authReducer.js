const initialState = {
  isLoggedIn: false,
  isAdmin: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
        isAdmin: action.isAdmin,
        token: action.token,
      };
    default:
      return state;
  }
};
