import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './ducks/user';
import pathsReducer from './ducks/paths';
import loadingReducer from './ducks/loading';
import promiseMiddleware from 'redux-promise-middleware';

const reducers = combineReducers({
    user: userReducer,
    paths: pathsReducer,
    loading: loadingReducer
})

export default createStore(reducers, {}, applyMiddleware(promiseMiddleware()));