import React, {FunctionComponent, useEffect} from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadIngredientsAction } from 'services/actions/actions';

import HomePage from 'pages/home';
import Login from 'pages/login';
import ProfilePage from 'pages/profile';
import RegistrationPage from 'pages/register';
import ForgotPasswordPage from 'pages/forgot-password';
import ResetPasswordPage from 'pages/reset-password';
import Orders from 'pages/orders';
import FeedPage from 'pages/feed';
import NotFoundPage from 'pages/not-found';
import AppHeader from '../app-header/app-header';
import IngredientPage from 'pages/ingredients';
import Logout from 'pages/logout';
import Order from 'pages/order';
import { useAppDispatch } from 'services/hooks';
import { ProtectedRoute } from 'components/protected-route/protected-route';

export const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();

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

            <ProtectedRoute path="/profile/orders/:orderNumber">
              <Order />
            </ProtectedRoute>

            <Route path="/feed" exact>
              <FeedPage />
            </Route>

            <Route path="/feed/:orderNumber">
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
