import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'services/auth';


export default function ProtectedRoute({ children, ...rest }) {
    let {user} = useAuth();
    console.log("user: ",  user);

    return (
      <Route
        {...rest}
        render={() =>
            user ? (
              children
            ) : (<Redirect  to='/login' />)
          }
      />
    );
  } 

