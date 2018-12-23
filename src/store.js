import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './ducks/user';
import courseReducer from './ducks/courses';
import promiseMiddleware from 'redux-promise-middleware';

const reducers = combineReducers({
    user: userReducer,
    courses: courseReducer
})

export default createStore(reducers, {}, applyMiddleware(promiseMiddleware()));