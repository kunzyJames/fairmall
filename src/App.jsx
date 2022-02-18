/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { createRef } from "react";
import "./App.css";
import "./assests/css/general.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Button from "@material-ui/core/Button";
import { Roller } from "react-awesome-spinners";

const Login = React.lazy(() => import("./component/pages/Login"));
const ForgotPassword = React.lazy(() => import("./component/pages/ForgotPassword"));


function App() {
  const notistackRef = createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <React.Suspense
      fallback={
        <div className="h-screen flex justify-center content-center items-center">
          <Roller />
        </div>
      }>
      <SnackbarProvider
        maxSnack={3}
        ref={notistackRef}
        action={(key) => (
          <Button onClick={onClickDismiss(key)} style={{ color: "white", fontSize: "13px" }}>
            <p className="text-xs text-white">undo</p>
          </Button>
        )}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Redirect {...props} to={{ pathname: "/login" }} />}
            />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route
              exact
              path="/email/verification"
              render={(props) => <EmailVerification {...props} />}
            />

            <Route exact path="/verification">
              <OTP />
            </Route>
            <Route exact path="/signup">
              <SignupDetails />
            </Route>
            <Route exact path="/signup/details">
              <Signup />
            </Route>
            <Route exact path="/signup/details/:form" render={(props) => <Signup {...props} />} />
            <Route exact path="/confirm-details">
              <BusinessDetailConf />
            </Route>
            <Route exact path="/login-redirect">
              <LoginRedirect />
            </Route>
            <Route path="/forget-password" exact component={ForgotPassword} />
            <Route path="/Term-and-service" exact component={TermsAndServices} />
            <Route path="/add-documentation" exact component={AddDocumentation} />
            <Route path="/documentation" exact component={AppDocumentation} />
            <ProtectedRoute path="/admin" component={AdminPage} />
            <Route render={() => <h1>Error 404. Page not found.</h1>} />
          </Switch>
        </Router>
     
      </SnackbarProvider>
    </React.Suspense>
  );
}

export default App;
