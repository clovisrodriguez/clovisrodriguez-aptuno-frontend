/**
 * Dependencies
 */
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router/immutable";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
/**
 * Reducers
 */
import rootReducer from "./rootReducer";
/**
 * Sagas
 */
import rootSagas from "./rootSagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [routerMiddleware(history), sagaMiddleware];

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSagas);

export default store;
