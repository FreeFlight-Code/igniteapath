// Set up initial state
const initialState = null

// action types
// const IS_LOADING = 'IS_LOADING';

// // action creators
// export function getUserInfo() {

//   const userInfo = { first: 'david', last: 'fischer', priv: 'admin' }
//   return {
//     type: GET_USER_INFO,
//     payload: userInfo
//   }
// }

// reducer function
export default function loadingReducer(state = initialState, action) {

  if (action.type.indexOf('_PENDING') > 0) {
    console.log('loading...', action.type.indexOf('_PENDING'));
    return 'loading';
  } else {
    console.log('NOT LOADING...', action.type)
    return null;
  }
}
