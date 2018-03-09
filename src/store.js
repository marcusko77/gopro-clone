import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import usersReducer from './ducks/users';
import productsReducer from './ducks/products';
import cartReducer from './ducks/cart';

const middleware = applyMiddleware(promiseMiddleware());

const reducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer
})


export default createStore(reducer, middleware);