import axios from 'axios';

// Set up initial state
const initialState = {
    name:'toto'
};

// action types
const GET_USER_INFO = 'GET_USER_INFO';
const TEST = 'TEST';

// action creators
export function getUserInfo() {
    const userInfo = axios.get('/auth/me').then( res => {
        return res.data
    })
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}
export function test() {
    return {
        type: TEST
    }
}

// reducer function
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
          return Object.assign({}, ...state, action.payload );
        case TEST:
          return {first: 'david', last: 'fischer', priv: 'user', isLoggedIn: true};
        default:
            return state;
    }

}
