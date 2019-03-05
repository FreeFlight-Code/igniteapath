// import axios from 'axios';

// Set up initial state
const initialState = {
    name:'toto'
};

// action types
const GET_USER_INFO = 'GET_USER_INFO';

// action creators
export function getUserInfo() {
    // const userInfo = axios.get('/auth/me').then( res => {
    //     return res.data
    // })
    const userInfo = {first:'david', last:'fischer', priv:'admin'}
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}

// reducer function
export default function userReducer(state = initialState, action) {
  console.log('...user action...', action)
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, ...state, action.payload );
        default:
            return state;
    }

}
