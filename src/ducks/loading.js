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
  console.log('...loading state...', state)
  console.log('...loading action...', action)
  if (action.type.indexOf('redux') < 0) {
    console.log('found one...', action.type.indexOf('redux'));
    return true;
  } else {
    console.log('NOT LOADING...', action.type)
    return null;
  }
}
