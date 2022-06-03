import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "services/reducers/reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

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
    isAuthenticated: false,
    user: {
      email: 'feleslunara@gmail.com',
      name: 'Teo'
    },
    isResettingPassword: false,
  },
  enhancer
);
