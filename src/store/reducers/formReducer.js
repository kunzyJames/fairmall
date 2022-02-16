const defalutFormValues = {};

const formReducer = (state = defalutFormValues, action) => {
  switch (action.type) {
    case "Save_Form_Values":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default formReducer;
