import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';

import reducer from './reducer';

let composeEnhancers = compose;

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(Logger);
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
};

const savedTodos = localStorage.getItem('todos');
const persistedStore = savedTodos ? { todos: JSON.parse(savedTodos)} : { todos: [] };

const store = createStore(reducer, persistedStore, composeEnhancers(applyMiddleware(...middleware)));

store.subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(store.getState().todos));
});

export default store;
