import axios from 'axios'

const initialState = {
    user:{}
}

const GET_USER = 'GET_USER'
const GET_USER_INFO = 'GET_USER_INFO'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

export function getUser() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: userData
    }
}


export function getUserInfo() {
    let userData = axios.get('/getuserinfo').then(res => {
        // console.log(res.data)
        return res.data;
    } )
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function updateAddress( address ) {
    // console.log(address, 'address from users reducer')
    let userAddress = axios.put('/updateaddress', {address}).then(res => {
        return res.data
    })
    return {
        type: UPDATE_ADDRESS,
            payload: userAddress
        }
}

export default function reducer(state = initialState, action) {
    switch( action.type) {
        case GET_USER + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload});

        case GET_USER_INFO + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload});

        case UPDATE_ADDRESS + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload});
        

        default:
            return state;
    }
}