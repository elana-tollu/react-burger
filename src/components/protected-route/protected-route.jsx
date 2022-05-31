import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ children, ...rest }) {
    const isAuthenticated = useSelector(store => store.isAuthenticated);
    
    return (
      <Route
        {...rest}
        render={({location}) =>
          isAuthenticated ? (
              children
            ) : (<Redirect  to={
              {
                pathname: '/login',
                state: {
                  from: location
                }
              }
          } />)
          }
      />
    );
  } 

