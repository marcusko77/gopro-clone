import axios from 'axios'

const initialState = {
    products:[],
 
}

const GET_PRODUCTS = 'GET_PRODUCTS'
// const GET_PRODUCT = 'GET_PRODUCT'

export function getProducts() {
    let cameraData = axios.get('/cameras').then( res => {
        return res.data;
    })

    return {
        type: GET_PRODUCTS,
        payload: cameraData
    }
}

// export function getProductById(id) {
//     let productData = axios.get(`/cameras/${id}`).then(res => {
//         return res.data;
//     })

//     return {
//         type: GET_PRODUCT,
//         payload: productData
//     }
// }

export default function reducer(state = initialState, action) {
    switch( action.type) {
        case GET_PRODUCTS + '_FULFILLED':
        return Object.assign({}, state, {products: action.payload});
        default:
            return state;
    }
}

