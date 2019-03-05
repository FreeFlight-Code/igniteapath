import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './ducks/user';
import pathReducer from './ducks/paths';
import promiseMiddleware from 'redux-promise-middleware';

const reducers = combineReducers({
    user: userReducer,
    paths: pathReducer
})

export default createStore(reducers, {}, applyMiddleware(promiseMiddleware()));