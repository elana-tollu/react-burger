import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "services/reducers/reducers";
import thunk from "redux-thunk";
import { wsMiddleware } from "services/wsMiddleware";
import { IFeedOrder, wsActions } from "./actions/wsActions";
import { IUser, IIngredient } from "utils/api";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppThunkAction, TAction, TConstructorIngredient } from "./actions/actions";
import { Dispatch } from "react";

const enhancer = composeWithDevTools(applyMiddleware(thunk, wsMiddleware(wsActions)));

export interface IStore {
  ingredients: IIngredient[],
  burger: {
    bun: IIngredient | null,
    filling: TConstructorIngredient[]
  },
    currentIngredient: IIngredient | null,
    orderNumber: number | null,
    isAuthenticated: boolean,
    user: IUser,
    isResettingPassword: boolean,
    isSubmittingOrder:boolean,
    total: number,
    totalToday: number,
    orders: IFeedOrder[],
}

export const initialState: IStore = {
  ingredients: [],
    burger: {
      bun: null,
      filling: []
    },
    currentIngredient: null,
    orderNumber: null,
    isAuthenticated: false,
    user:  {
      email: '',
      name: ''
    },
    isResettingPassword: false,
    isSubmittingOrder: false,
    total: 0,
    totalToday: 0,
    orders: [],
}


export const store = createStore(
  rootReducer,
  initialState,
  enhancer
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<TAction | AppThunkAction>;
