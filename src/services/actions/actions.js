import { loadIngredientCards, submitOrder, login, register, forgotPassword, resetPassword, logout, getProfile } from 'utils/api';
import { getTokens } from 'utils/auth';

export const LOAD_INGREDIENTS_REQUEST = 'LOAD_INGREDIENTS_REQUEST';
export const LOAD_INGREDIENTS_SUCCESS = 'LOAD_INGREDIENTS_SUCCESS';
export const LOAD_INGREDIENTS_ERROR = 'LOAD_INGREDIENTS_ERROR';

export const SHOW_BURGER_INGREDIENTS = 'SHOW_BURGER_INGREDIENTS';
export const SHOW_INGREDIENT = 'SHOW_INGREDIENT';
export const HIDE_INGREDIENT = 'HIDE_INGREDIENT';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_ORDER_ITEM = 'MOVE_ORDER_ITEM';

export const SUBMIT_ORDER_REQUEST = 'SUBMIT_ORDER_REQUEST';
export const SUBMIT_ORDER_SUCCESS = 'SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR = 'SUBMIT_ORDER_ERROR';
export const HIDE_ORDER_NUMBER = 'HIDE_ORDER_NUMBER';

export const AUTOLOGIN_REQUEST = 'AUTOLOGIN_REQUEST';
export const AUTOLOGIN_SUCCESS = 'AUTOLOGIN_SUCCESS';
export const AUTOLOGIN_ERROR = 'AUTOLOGIN_ERROR';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const UPDATE_ORDER_FEED = 'UPDATE_ORDER_FEED';


export function loadIngredientsAction() {
    return function(dispatch) {
        dispatch({
            type: LOAD_INGREDIENTS_REQUEST
        });
        loadIngredientCards()
        .then(ingredients => {
            dispatch({
                type: LOAD_INGREDIENTS_SUCCESS,
                ingredients
            })
        })
        .catch (err => {
            alert ("?????????????????????? ?????? ???????????????? ???????????????? ?????????????????????? ????????????!");
            dispatch({
                type: LOAD_INGREDIENTS_ERROR
            })
        }); 
    }
}

export function submitOrderAction(ingredientIDs) {
    return function(dispatch) {
        dispatch({
            type: SUBMIT_ORDER_REQUEST
        });
        submitOrder(ingredientIDs)
        .then(orderNumber => {
            dispatch({
                type: SUBMIT_ORDER_SUCCESS,
                orderNumber
            })
        })
        .catch (err => {
            alert ("??????! ?????????? ?????????????????? ?? ?????????????????????? ????????????????????????!");
            dispatch({
                type: SUBMIT_ORDER_ERROR
            })
        });
    }
}

export function autoLoginAction () {
    return function(dispatch) {
        dispatch({
            type: AUTOLOGIN_REQUEST
        });
        if (!getTokens()) {
            dispatch({
                type: AUTOLOGIN_ERROR
            });
            return;
        }
        getProfile()
        .then(response => {
            dispatch({
                type: AUTOLOGIN_SUCCESS
            })
        })
        .catch (err => {
            dispatch({
                type: AUTOLOGIN_ERROR
            })
        });
    }
}

export function loginAction (email, password) {
    return function(dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });
        login(email, password)
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                user: response.user
            })
        })
        .catch (err => {
            alert ("??????! ?????????????????????????????? ?? ???????????? ???????? ????????????, ????????!");
            dispatch({
                type: LOGIN_ERROR
            })
        });
    }
}

export function logoutAction () {
    return function(dispatch) {
        dispatch({
            type: LOGOUT_REQUEST
        });
        logout()
        .then(response => {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        })
        .catch (err => {
            alert ("??????! ???? ?????? ?????? ??????????????!");
            dispatch({
                type: LOGOUT_ERROR
            })
        });
    }
}

export function registerAction (userName, email, password) {
    return function(dispatch) {
        dispatch({
            type: REGISTER_REQUEST
        });
        register(userName, email, password)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
                user: response.user
            })
        })
        .catch (err => {
            alert ("??????! ???????????? ???????????? ?? ???????????? ???????? - ???????????????? ?????? ??????, ????????!");
            dispatch({
                type: REGISTER_ERROR
            })
        });
    }
}

export function forgotPasswordAction (email) {
    return function(dispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        });
        forgotPassword(email)
        .then(() => {
            dispatch({
                type: FORGOT_PASSWORD_SUCCESS
            })
        })
        .catch (err => {
            alert ("??????! ???????????? ???????????? ?? ???????????? ???????? - ???????????????? ?????? ??????, ????????!");
            dispatch({
                type: FORGOT_PASSWORD_ERROR
            })
        });
    }
}

export function resetPasswordAction (password, token) {
    return function(dispatch) {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        });
        resetPassword(password, token)
        .then(() => {
            dispatch({
                type: RESET_PASSWORD_SUCCESS
            })
        })
        .catch (err => {
            alert ("??????! ???????????? ???????????? ?? ???????????? ???????? - ???????????????? ?????? ??????, ????????!");
            dispatch({
                type: RESET_PASSWORD_ERROR
            })
        });
    }
}