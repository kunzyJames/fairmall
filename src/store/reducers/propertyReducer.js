const defaultState = {
  // currentProperty: []
  currentProperty: {}
};

const property = (state = defaultState, action) => {
  switch (action.type) {
    case "Add_Property":
      return {
        ...state,
        // currentProperty: [...state?.currentProperty, { ...action?.payload }]
        currentProperty: { ...action?.payload }
      };
    default:
      return state;
  }
};

export default property;
