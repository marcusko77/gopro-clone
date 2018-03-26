import axios from 'axios'



const initialState = {
   cart: [],
}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const GET_CART = 'GET_CART'
const CLEAR_CART = 'CLEAR_CART' 



export default function reducer(state = initialState, action) {
    switch( action.type) {
        case ADD_TO_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload});

        case REMOVE_FROM_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload});

        case GET_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload});

        case CLEAR_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload});

        default:
            return state;
    }
}

export function addToCart( id ) {
    
    let cartData = axios.post(`/cart/${id}`, {id}).then( res => res.data)
    console.log(cartData)
    return {
        type: ADD_TO_CART,
        payload: cartData
    };
}

export function removeFromCart( id ) {
    return {
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/delete/${id}`,{id}).then( res => res.data)
    }
}

export function clearCart(  ) {
    return {
        type: CLEAR_CART,
        payload: axios.delete('/clearcart').then( res => res.data)
    }
}


export function getCart(){
let cartData = axios.get('/cart').then( res => {
    return res.data;
})

return {
    type: GET_CART,
    payload: cartData   
}
}

