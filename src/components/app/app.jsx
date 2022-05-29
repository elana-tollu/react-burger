import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'pages/home.jsx';
import Login from 'pages/login.jsx';
import ProfilePage from 'pages/profile.jsx';
import RegistrationPage from 'pages/register.jsx';
import ForgotPasswordPage from 'pages/forgot-password.jsx';
import ResetPasswordPage from 'pages/reset-password.jsx';

import styles from './app.module.css';

function App() {
  return (
        <Router>
          <Switch>
            
            <Route path="/reset-password">
              <ResetPasswordPage />
            </Route>

            <Route path="/forgot-password">
              <ForgotPasswordPage />
            </Route>

            <Route path="/register">
              <RegistrationPage />
            </Route>

            <Route path="/profile">
              <ProfilePage />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            
            <Route path="/">
              <HomePage />  
            </Route>

          </Switch>
        </Router>
      );     
}

export default App;



