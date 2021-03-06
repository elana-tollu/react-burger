import {
    HIDE_INGREDIENT, 

    LOAD_INGREDIENTS_REQUEST, 
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_ERROR,

    SHOW_BURGER_INGREDIENTS, 
    SHOW_INGREDIENT, 
    ADD_INGREDIENT,
    DELETE_INGREDIENT,

    MOVE_ORDER_ITEM,

    SUBMIT_ORDER_REQUEST, 
    SUBMIT_ORDER_SUCCESS,
    SUBMIT_ORDER_ERROR,

    HIDE_ORDER_NUMBER,

    AUTOLOGIN_REQUEST,
    AUTOLOGIN_SUCCESS,
    AUTOLOGIN_ERROR,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,

    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    
} from "services/actions/actions";

import {
    WS_MESSAGE
} from  "services/actions/wsActions";

export const rootReducer = (state, action) => {
    switch (action.type) {
        case LOAD_INGREDIENTS_REQUEST:
            return state;
        case LOAD_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: action.ingredients
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
        case ADD_INGREDIENT:
            return {
                ...state,
                burger: addIngredient(state.burger, action.ingredient),
            }
        case DELETE_INGREDIENT:
            return {
                ...state,
                burger: deleteIngredient(state.burger, action.index),
            }
        case MOVE_ORDER_ITEM:
            return {
                ...state,
                burger: moveOrderItem(state.burger, action.fromIndex, action.toIndex),
            }
        case SUBMIT_ORDER_REQUEST:
            return {
                ...state,
                isSubmittingOrder: true,
            };
        case SUBMIT_ORDER_SUCCESS:
            return {
                ...state, 
                orderNumber: action.orderNumber,
                isSubmittingOrder: false,
                burger: {
                    bun: null,
                    filling: []
                  },
            };
        case SUBMIT_ORDER_ERROR:
            return {
                ...state,
                isSubmittingOrder: false,
            };
        case HIDE_ORDER_NUMBER:
            return {
                ...state, 
                orderNumber: null,
            };

        case AUTOLOGIN_REQUEST:
            return state;
        case AUTOLOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            };
        case AUTOLOGIN_ERROR:
            return state;

        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                isLoggingIn: false,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoggingIn: false,
            };

        case LOGOUT_REQUEST:
            return state;
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGOUT_ERROR:
            return state;
        
        case REGISTER_REQUEST:
            return state;
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
            };
        case REGISTER_ERROR:
            return state;

        case FORGOT_PASSWORD_REQUEST:
            return state;
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isResettingPassword: true,
            };
        case FORGOT_PASSWORD_ERROR:
            return state;

        case RESET_PASSWORD_REQUEST:
            return state;
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isResettingPassword: false,
                isLoggedIn: true,
            };
        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                isResettingPassword: false,
            };

        case WS_MESSAGE:
            return {
                ...state,
                total: action.data.total || 0,
                totalToday: action.data.totalToday || 0,
                orders: action.data.orders.sort((a, b)=> {
                    if (a.createdAt < b.createdAt) {
                        return 1;
                    }
                    return -1;
                }),
            };

        default:
            return state;
    }
}

function addIngredient(burger, ingredient) {
    if (ingredient.type === 'bun') {
        return { 
            ...burger,
            bun: ingredient
        };
    } else {
        return { 
            ...burger,
            filling: [...burger.filling, ingredient]
        };
    }
}

function deleteIngredient(burger, index) {
    return { 
        ...burger,
        filling: burger.filling.filter((v, i) => i !== index)
    };
}

function moveOrderItem(burger, fromIndex, toIndex) {
    let newFilling = [...burger.filling];
    let fromIngredient = newFilling[fromIndex];
    newFilling[fromIndex] = newFilling[toIndex];
    newFilling[toIndex] = fromIngredient;
    return { 
        ...burger,
        filling: newFilling
    };
}