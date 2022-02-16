/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { post } from "../../api-services/fetch";

export const saveBusinessDetails = async (payload) => (dispatch) => {
  dispatch({ type: "Save_Business_Details", payload });
};
