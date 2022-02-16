/* eslint-disable */
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// import { location } from "../utility/Location";

const ProtectedRoute = ({ component: PureComponent, ...rest }) => {
  const il = true

  return (
    <Route
      {...rest}
      render={(props) =>
        il ? (
          <PureComponent {...props} {...rest} />
        ) : (
          <Navigate
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
