import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from 'pages/home.jsx';
import Login from 'pages/login.jsx';


import PageLogin from '../page-login/page-login.jsx';
import PageRegistration from '../page-registration/page-registration';
import PageForgotPassword from '../page-forgot-password/page-forgot-password';
import PageResetPassword from '../page-reset-password/page-reset-password.jsx';

import styles from './app.module.css';

function App() {
  return (
        <Router>
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/">
            <HomePage />  
          </Route>

            <PageLogin />
            <PageRegistration />
            <PageForgotPassword />
            <PageResetPassword />
        </Router>
      );     
}

export default App;



