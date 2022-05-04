import {
    HIDE_INGREDIENT, 
    LOAD_INGREDIENTS_REQUEST, 
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_ERROR,
    SHOW_BURGER_INGREDIENTS, 
    SHOW_INGREDIENT, 
    SUBMIT_ORDER_REQUEST, 
    SUBMIT_ORDER_SUCCESS,
    SUBMIT_ORDER_ERROR,
    HIDE_ORDER_NUMBER,
} from "../actions/actions";

export const rootReducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case LOAD_INGREDIENTS_REQUEST:
            return state;
        case LOAD_INGREDIENTS_SUCCESS:
            const bun = action.ingredients.find(ingredient => ingredient.type === 'bun');
            const filling = action.ingredients.filter(ingredient => ingredient.type !== 'bun');
            return {
                ...state,
                ingredients: action.ingredients,
                burger: {bun, filling}
            };
        case LOAD_INGREDIENTS_ERROR:
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
        case SUBMIT_ORDER_REQUEST:
            return state;
        case SUBMIT_ORDER_SUCCESS:
            return {
                ...state, 
                orderNumber: action.orderNumber,
            };
        case SUBMIT_ORDER_ERROR:
            return state;
        case HIDE_ORDER_NUMBER:
            return {
                ...state, 
                orderNumber: null,
            };
        default:
            return state;
    }
}