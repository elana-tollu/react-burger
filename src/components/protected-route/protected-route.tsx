import React, { FunctionComponent, PropsWithChildren } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isAuthenticated} from 'utils/auth';

export const ProtectedRoute: FunctionComponent<PropsWithChildren<any>> = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({location}) =>
          isAuthenticated() ? (
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

