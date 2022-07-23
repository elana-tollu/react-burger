
import { v4 as uuidv4 } from 'uuid';
import { loadIngredientCards, submitOrder, register, forgotPassword, resetPassword, IIngredient, IUser } from 'utils/api';
import { IWsClose, IWsMessage, IWsStart } from './wsActions';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppDispatch, RootState } from 'services/store';

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

export type AppThunkAction = ThunkAction<void, Action, RootState, TAction>
export type AppThunk = ActionCreator<AppThunkAction>

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
    readonly ingredients: IIngredient[];
}

export function loadIngredientsSuccess(ingredients: IIngredient[]): ILoadIngredientsSuccessAction {
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

export const loadIngredientsAction: AppThunk = () => {
    return function(dispatch: AppDispatch) {
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

export interface TConstructorIngredient extends IIngredient {
    readonly uuid: string
}

export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: TConstructorIngredient;
}

export function addIngredient(ingredient: IIngredient): IAddIngredientAction {
    return {
        type: ADD_INGREDIENT,
        ingredient: {...ingredient, uuid: uuidv4()}
    }
}

export interface IDeleteIngredientAction {
    readonly type: typeof DELETE_INGREDIENT;
    readonly index: number;
}

export function deleteIngredient(index: number): IDeleteIngredientAction {
    return {
        type: DELETE_INGREDIENT,
        index
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

export interface ISubmitOrderRequestAction {
    readonly type: typeof SUBMIT_ORDER_REQUEST
}

export function submitOrderRequest(): ISubmitOrderRequestAction {
    return {
        type: SUBMIT_ORDER_REQUEST
    }
}

export interface ISubmitOrderSuccessAction {
    readonly type: typeof SUBMIT_ORDER_SUCCESS;
    readonly orderNumber: number;
}

export function submitOrderSuccess(orderNumber: number): ISubmitOrderSuccessAction {
    return {
        type: SUBMIT_ORDER_SUCCESS,
        orderNumber
    }
}

export interface ISubmitOrderErrorAction {
    readonly type: typeof SUBMIT_ORDER_ERROR
}

export function submitOrderError(): ISubmitOrderErrorAction {
    return {
        type: SUBMIT_ORDER_ERROR
    }
}

export interface IHideOrderNumber {
    readonly type: typeof HIDE_ORDER_NUMBER
}

export function hideOrderNumber(): IHideOrderNumber {
    return {
        type:  HIDE_ORDER_NUMBER
    }
}

export const submitOrderAction: AppThunk = (ingredientIDs) => {
    return function(dispatch: AppDispatch) {
        dispatch(submitOrderRequest());
        submitOrder(ingredientIDs)
        .then(orderNumber => {
            dispatch(submitOrderSuccess(orderNumber))
        })
        .catch (err => {
            alert ("Упс! Заказ потерялся в космическом пространстве!");
            dispatch(submitOrderError())
        });
    }
}

export interface IRegisterRequest {
    readonly type: typeof REGISTER_REQUEST
}

export function registerRequest(): IRegisterRequest {
    return {
        type: REGISTER_REQUEST
    }
}

export interface IRegisterSuccess {
    readonly type: typeof REGISTER_SUCCESS;
    readonly user: IUser;
}

export function registerSuccess(user: IUser): IRegisterSuccess {
    return {
        type: REGISTER_SUCCESS,
        user
    }
}

export interface IRegisterError {
    readonly type: typeof REGISTER_ERROR;
}

export function registerError(): IRegisterError {
    return {
        type: REGISTER_ERROR
    }
} 

export const registerAction: AppThunk = (userName, email, password) => {
    return function(dispatch: AppDispatch) {
        dispatch(registerRequest());
        register(userName, email, password)
        .then(user => {
            dispatch(registerSuccess(user))
        })
        .catch (err => {
            alert ("Упс! Данные попали в чёрную дыру - попробуй еще раз, друг!");
            dispatch(registerError())
        });
    }
}

export interface IForgotPasswordRequest {
    readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export function forgotPasswordRequest(): IForgotPasswordRequest {
    return {
        type: FORGOT_PASSWORD_REQUEST
    }
}

export interface IForgotPasswordSuccess {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export function forgotPasswordSuccess(): IForgotPasswordSuccess {
    return {
        type: FORGOT_PASSWORD_SUCCESS
    }
}

export interface IForgotPasswordError {
    readonly type: typeof FORGOT_PASSWORD_ERROR;
}

export function forgotPasswordError(): IForgotPasswordError {
    return {
        type: FORGOT_PASSWORD_ERROR
    }
}

export const forgotPasswordAction: AppThunk = (email) => {
    return function(dispatch: AppDispatch) {
        dispatch(forgotPasswordRequest());
        forgotPassword(email)
        .then(() => {
            dispatch(forgotPasswordSuccess())
        })
        .catch (err => {
            alert ("Упс! Данные попали в чёрную дыру - попробуй еще раз, друг!");
            dispatch(forgotPasswordError())
        });
    }
}

export interface IResetPasswordRequest {
    readonly type: typeof RESET_PASSWORD_REQUEST;
}

export function resetPasswordRequest(): IResetPasswordRequest {
    return {
        type: RESET_PASSWORD_REQUEST
    }
}

export interface IResetPasswordSuccess {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export function resetPasswordSuccess(): IResetPasswordSuccess {
    return {
        type: RESET_PASSWORD_SUCCESS
    }
}

export interface IResetPasswordError {
    readonly type: typeof RESET_PASSWORD_ERROR;
}

export function resetPasswordError (): IResetPasswordError {
    return {
        type: RESET_PASSWORD_ERROR
    }
}

export const resetPasswordAction: AppThunk = (password, token) => {
    return function(dispatch: AppDispatch) {
        dispatch(resetPasswordRequest());
        resetPassword(password, token)
        .then(() => {
            dispatch(resetPasswordSuccess())
        })
        .catch (err => {
            alert ("Упс! Данные попали в чёрную дыру - попробуй еще раз, друг!");
            dispatch(resetPasswordError())
        });
    }
}

export type TAction = 
    | ILoadIngredientsRequestAction
    | ILoadIngredientsSuccessAction
    | ILoadIngredientsErrorAction
    | IAddIngredientAction
    | IDeleteIngredientAction
    | IMoveOrderItemAction
    | ISubmitOrderRequestAction
    | ISubmitOrderSuccessAction
    | ISubmitOrderErrorAction
    | IHideOrderNumber
    | IRegisterRequest
    | IRegisterSuccess
    | IRegisterError
    | IForgotPasswordRequest
    | IForgotPasswordSuccess
    | IForgotPasswordError
    | IResetPasswordRequest
    | IResetPasswordSuccess
    | IResetPasswordError
    | IWsStart
    | IWsMessage
    | IWsClose;