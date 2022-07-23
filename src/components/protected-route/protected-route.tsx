import React, { FunctionComponent, PropsWithChildren } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import {isAuthenticated} from 'utils/auth';

export const ProtectedRoute: FunctionComponent<RouteProps> = ({ children, ...rest }) => {
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

