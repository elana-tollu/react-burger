import {
    HIDE_INGREDIENT, 
    LOAD_INGREDIENTS, 
    SHOW_BURGER_INGREDIENTS, 
    SHOW_INGREDIENT, 
    SUBMIT_ORDER, 
    SHOW_ORDER_NUMBER,
    HIDE_ORDER_NUMBER
} from "../actions/actions";

export const rootReducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case LOAD_INGREDIENTS:
            return state;
        case SHOW_BURGER_INGREDIENTS:
            return state;
        case SHOW_INGREDIENT:
            return {
                ...state, 
                currentIngredient: action.ingredient,
            };
        case HIDE_INGREDIENT:
            return {
                ...state, 
                currentIngredient: null,
            };
        case SUBMIT_ORDER:
            return state;
        case SHOW_ORDER_NUMBER:
            return {
                ...state, 
                orderNumber: action.orderNumber,
            };
        case HIDE_ORDER_NUMBER:
            return {
                ...state, 
                orderNumber: null,
            };
        default:
            return state;
    }
}