/* eslint-disable import/prefer-default-export */
export const successfulLogin = (payload) => (dispatch) => {
  dispatch({ type: "Login", payload });
};
export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT", payload: null });
};
