/**
* Configure Redux store to use reducers defined in ToDo/reducers
*/
import { reducer, initialState } from './reducers'; // Combined reducers
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';


/**
* Middleware configuration goes here
*/
const Middlewares = applyMiddleware(
  thunkMiddleware
);

/**
* Create store with middlewares and initial state
*/
const store = compose(Middlewares)(createStore)(reducer, initialState);

export default store;
