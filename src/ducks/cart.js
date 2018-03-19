import axios from 'axios'



const initialState = {
   cart: [],
   total:0
}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'



export default function reducer(state = initialState, action) {
    switch( action.type) {
        case ADD_TO_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload.cart, total: action.payload.total});

        case REMOVE_FROM_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload.cart, total: action.payload.total});

        default:
            return state;
    }
}

export function addToCart( id ) {
    return {
        type: ADD_TO_CART,
        payload: axios.post(`/cart/${id}`).then( res => res.data)
    };
}

export function removeFromCart( id ) {
    return {
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/cart/${id}`).then( res => res.data)
    }
}

