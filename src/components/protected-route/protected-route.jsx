import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ children, ...rest }) {
  const isLoggedIn = useSelector(store => store.isLoggedIn);
    
  return (
      <Route
        {...rest}
        render={({location}) =>
        isLoggedIn ? (
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

