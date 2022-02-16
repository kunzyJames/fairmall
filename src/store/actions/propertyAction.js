/* eslint-disable import/prefer-default-export */
export const addProperty = (payload) => (dispatch) => {
  dispatch({ type: "Add_Property", payload });
};
