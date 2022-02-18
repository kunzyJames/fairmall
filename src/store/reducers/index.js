import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import formReducer from "./formReducer";
import auth from "./authReducer";
import signup from "./signupReducers";
import property from "./propertyReducer";

export default combineReducers({ formReducer, router: routerReducer, auth, signup, property });
