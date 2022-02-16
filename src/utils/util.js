/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
/* eslint-disable import/prefer-default-export */
export const objectToQueryString = (params) => {
  const queryParams = [];

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const element = params[key];
      if (element) {
        queryParams.push(`${key}=${encodeURI(element)}`);
      }
    }
  }

  return queryParams.join("&");
};
