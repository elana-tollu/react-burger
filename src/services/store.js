import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "services/reducers/reducers";
import thunk from "redux-thunk";
import { wsMiddleware } from "services/wsMiddleware";
import { wsActions } from "./actions/wsActions";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, wsMiddleware(wsActions)));

export const store = createStore(
  rootReducer,
  {
    ingredients: [],
    burger: {
      bun: null,
      filling: []
    },
    currentIngredient: null,
    orderNumber: null,
    isLoggedIn: false,
    user: {
      email: '',
      name: ''
    },
    isLoggingIn: false,
    isResettingPassword: false,
    isSubmittingOrder: false,
    total: 0,
    totalToday: 0,
    orders: [],
  },
  enhancer
);
