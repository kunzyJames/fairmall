/* eslint-disable import/prefer-default-export */
export const saveFormValues = (values) => (dispatch) => {
  // console.log("logging values inside form action", values);
  dispatch({ type: "Save_Form_Values", payload: values });
};
