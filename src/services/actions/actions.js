import { loadIngredientCards } from 'utils/api';

export const LOAD_INGREDIENTS_REQUEST = 'LOAD_INGREDIENTS_REQUEST';
export const LOAD_INGREDIENTS_SUCCESS = 'LOAD_INGREDIENTS_SUCCESS';
export const LOAD_INGREDIENTS_ERROR = 'LOAD_INGREDIENTS_ERROR';

export const SHOW_BURGER_INGREDIENTS = 'SHOW_BURGER_INGREDIENTS';
export const SHOW_INGREDIENT = 'SHOW_INGREDIENT';
export const HIDE_INGREDIENT = 'HIDE_INGREDIENT';

export const SUBMIT_ORDER = 'SUBMIT_ORDER';
export const SHOW_ORDER_NUMBER = 'SHOW_ORDER_NUMBER';
export const HIDE_ORDER_NUMBER = 'HIDE_ORDER_NUMBER';

export function loadIngredients() {
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
            dispatch({
                type: LOAD_INGREDIENTS_ERROR
            })
        }); 
    }
}