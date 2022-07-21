import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "services/reducers/reducers";
import thunk from "redux-thunk";
import { wsMiddleware } from "services/wsMiddleware";
import { IFeedOrder, wsActions } from "./actions/wsActions";
import { IUser, TIngredient } from "utils/api";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools(applyMiddleware(thunk, wsMiddleware(wsActions)));

export interface IStore {
  ingredients: TIngredient[],
  burger: {
    bun: TIngredient | null,
    filling: TIngredient[]
  },
    currentIngredient: TIngredient | null,
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
export type AppDispatch = typeof store.dispatch;
