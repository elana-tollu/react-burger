import {
    HIDE_INGREDIENT, 
    LOAD_INGREDIENTS, 
    SHOW_BURGER_INGREDIENTS, 
    SHOW_INGREDIENT, 
    SUBMIT_ORDER 
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
        default:
            return state;
    }
}