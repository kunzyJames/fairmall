const defaultState = {
  user: {},
  token: null
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        user: action?.payload,
        token: action?.payload?.token
      };
    case "LOGOUT": {
      return {
        ...state,
        ...defaultState
      };
    }
    default:
      return state;
  }
};

export default auth;
