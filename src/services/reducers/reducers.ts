import { Reducer } from "redux";
import {
    LOAD_INGREDIENTS_REQUEST, 
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_ERROR,

    ADD_INGREDIENT,
    DELETE_INGREDIENT,

    MOVE_ORDER_ITEM,

    SUBMIT_ORDER_REQUEST, 
    SUBMIT_ORDER_SUCCESS,
    SUBMIT_ORDER_ERROR,

    HIDE_ORDER_NUMBER,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,

    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    TAction,
    
} from "services/actions/actions";

import {
    WS_MESSAGE
} from  "services/actions/wsActions";
import { initialState, IStore } from "services/store";

export const rootReducer: Reducer<IStore, TAction> = (state, action) => {
    if (state === undefined) {
        return initialState
    }
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
        
        case REGISTER_REQUEST:
            return state;
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
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