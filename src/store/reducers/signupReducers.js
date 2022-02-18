const defaultState = {
  business_details: {}
};

const signup = (state = defaultState, action) => {
  switch (action.type) {
    case "Save_Business_Details":
      return {
        ...state,
        business_details: action.payload
      };
    default:
      return state;
  }
};

export default signup;
