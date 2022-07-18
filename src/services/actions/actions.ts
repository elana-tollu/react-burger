import { loadIngredientCards, submitOrder, register, forgotPassword, resetPassword, TIngredient } from 'utils/api';

export const LOAD_INGREDIENTS_REQUEST: 'LOAD_INGREDIENTS_REQUEST' = 'LOAD_INGREDIENTS_REQUEST';
export const LOAD_INGREDIENTS_SUCCESS: 'LOAD_INGREDIENTS_SUCCESS' = 'LOAD_INGREDIENTS_SUCCESS';
export const LOAD_INGREDIENTS_ERROR: 'LOAD_INGREDIENTS_ERROR' = 'LOAD_INGREDIENTS_ERROR';

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const MOVE_ORDER_ITEM: 'MOVE_ORDER_ITEM' = 'MOVE_ORDER_ITEM';

export const SUBMIT_ORDER_REQUEST: 'SUBMIT_ORDER_REQUEST' = 'SUBMIT_ORDER_REQUEST';
export const SUBMIT_ORDER_SUCCESS: 'SUBMIT_ORDER_SUCCESS' = 'SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR: 'SUBMIT_ORDER_ERROR' = 'SUBMIT_ORDER_ERROR';
export const HIDE_ORDER_NUMBER: 'HIDE_ORDER_NUMBER' = 'HIDE_ORDER_NUMBER';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';

export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_ERROR: 'REGISTER_ERROR' = 'REGISTER_ERROR';

export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR: 'FORGOT_PASSWORD_ERROR' = 'FORGOT_PASSWORD_ERROR';

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';

export const UPDATE_ORDER_FEED: 'UPDATE_ORDER_FEED' = 'UPDATE_ORDER_FEED';

export interface ILoadIngredientsRequestAction {
    readonly type: typeof LOAD_INGREDIENTS_REQUEST;
}

export function loadIngredientsRequest(): ILoadIngredientsRequestAction {
    return {
        type: LOAD_INGREDIENTS_REQUEST
    }
}

export interface ILoadIngredientsSuccessAction {
    readonly type: typeof LOAD_INGREDIENTS_SUCCESS;
    readonly ingredients: TIngredient[];
}

export function loadIngredientsSuccess(ingredients: TIngredient[]): ILoadIngredientsSuccessAction {
    return {
        type: LOAD_INGREDIENTS_SUCCESS,
        ingredients
    }
}

export interface ILoadIngredientsErrorAction {
    readonly type: typeof LOAD_INGREDIENTS_ERROR;
}

export function loadIngredientsError(): ILoadIngredientsErrorAction {
    return {
        type: LOAD_INGREDIENTS_ERROR
    }
}

export function loadIngredientsAction() {
    return function(dispatch) {
        dispatch(loadIngredientsRequest());
        loadIngredientCards()
        .then(ingredients => {
            dispatch( loadIngredientsSuccess(ingredients))
        })
        .catch (err => {
            alert ("Ингредиенты для бургеров похитили космические пираты!");
            dispatch(loadIngredientsError())
        }); 
    }
}


export interface IMoveOrderItemAction {
    readonly type: typeof MOVE_ORDER_ITEM;
    readonly fromIndex: number;
    readonly toIndex: number;
} 

export function moveOrderItem(fromIndex: number, toIndex: number): IMoveOrderItemAction {
    return {
        type: MOVE_ORDER_ITEM,
        fromIndex,
        toIndex,
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
            alert ("Упс! Заказ потерялся в космическом пространстве!");
            dispatch({
                type: SUBMIT_ORDER_ERROR
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
        .then(user => {
            dispatch({
                type: REGISTER_SUCCESS,
                user: user
            })
        })
        .catch (err => {
            alert ("Упс! Данные попали в чёрную дыру - попробуй еще раз, друг!");
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
            alert ("Упс! Данные попали в чёрную дыру - попробуй еще раз, друг!");
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
            alert ("Упс! Данные попали в чёрную дыру - попробуй еще раз, друг!");
            dispatch({
                type: RESET_PASSWORD_ERROR
            })
        });
    }
}

export type TAction = 
    | ILoadIngredientsRequestAction
    | ILoadIngredientsSuccessAction
    | ILoadIngredientsErrorAction
    | IMoveOrderItemAction;