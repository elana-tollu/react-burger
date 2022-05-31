import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'pages/home.jsx';
import Login from 'pages/login.jsx';
import ProfilePage from 'pages/profile.jsx';
import RegistrationPage from 'pages/register.jsx';
import ForgotPasswordPage from 'pages/forgot-password.jsx';
import ResetPasswordPage from 'pages/reset-password.jsx';
import Orders from 'pages/orders.jsx';
import FeedPage from 'pages/feed.jsx';
import ProtectedRoute from 'components/protected-route/protected-route.jsx';
import AppHeader from '../app-header/app-header.jsx';

import styles from './app.module.css';
import { ProvideAuth } from 'services/auth';

function App() {
  return (
    <ProvideAuth>
        <Router>
          <AppHeader />
          
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

            <ProtectedRoute path="/profile">
              <ProfilePage />
            </ProtectedRoute>

            <Route path="/profile/orders">
              <Orders />
            </Route>

            <Route path="/feed">
              <FeedPage />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            
            <Route path="/">
              <HomePage /> 
            </Route>

          </Switch>
        </Router>
      </ProvideAuth>
    );     
}

export default App;
