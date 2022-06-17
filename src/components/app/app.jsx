import React, {useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadIngredientsAction } from 'services/actions/actions';

import HomePage from 'pages/home.jsx';
import Login from 'pages/login.jsx';
import ProfilePage from 'pages/profile.jsx';
import RegistrationPage from 'pages/register.jsx';
import ForgotPasswordPage from 'pages/forgot-password.jsx';
import ResetPasswordPage from 'pages/reset-password.jsx';
import Orders from 'pages/orders.jsx';
import FeedPage from 'pages/feed.jsx';
import NotFoundPage from 'pages/not-found.jsx';
import ProtectedRoute from 'components/protected-route/protected-route.jsx';
import AppHeader from '../app-header/app-header.jsx';
import IngredientPage from 'pages/ingredients.jsx';
import Logout from 'pages/logout';
import Order from 'pages/order.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredientsAction())
  }, []);

  return (
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

            <ProtectedRoute path="/profile" exact>
              <ProfilePage />
            </ProtectedRoute>

            <ProtectedRoute path="/profile/orders" exact>
              <Orders />
            </ProtectedRoute>

            <ProtectedRoute path="/profile/orders/:id">
              <Order />
            </ProtectedRoute>

            <Route path="/feed" exact>
              <FeedPage />
            </Route>

            <Route path="/feed/:id">
              <Order />
            </Route>

            <Route path="/ingredients/:id">
              <IngredientPage />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/logout">
              <Logout />
            </Route>
            
            <Route path="/" exact={true}>
              <HomePage /> 
            </Route>

            <Route>
              <NotFoundPage /> 
            </Route>
          </Switch>
        </Router>
    );     
}

export default App;
