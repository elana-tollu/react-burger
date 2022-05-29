import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function ProtectedRoute({ children, ...rest }) {
    const isAuthenticated = true;
    return (
      <Route
        {...rest}
        render={() =>
            isAuthenticated ? (
              children
            ) : (<Redirect  to='/login' />)
          }
      />
    );
  } 

