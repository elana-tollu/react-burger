import { loadIngredientCards, submitOrder } from 'utils/api';

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
            alert ("Ингредиенты для бургеров похитили космические пираты!");
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
            alert ("Упс! Заказ потерялся в космическом пространстве!");
            dispatch({
                type: SUBMIT_ORDER_ERROR
            })
        });
    }
}