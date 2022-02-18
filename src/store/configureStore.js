/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
// eslint-disable-next-line max-len
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'; //To be used for loggin in production
import rootReducer from "./reducers/index";

const persistConfig = {
  key: "root",
  blacklist: ["notifications", "formReducer", "property"],
  whilelist: ["user", "token"],
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
