import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
 );

 export default store