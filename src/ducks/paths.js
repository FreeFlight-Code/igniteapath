import axios from 'axios';
// import config from '../config/config.json';

// Set up initial state
const initialState = {
    PATHs:[],
    focusedItem: {}
};

// action types
const GET_PATH = 'GET_PATH';
const GET_PATHS = 'GET_PATHS';
const ADD_PATH = 'ADD_PATH';
const EDIT_PATH = 'EDIT_PATH';
const DELETE_PATH = 'DELETE_PATH';

// const testingBool = config.testing_env;

// const getData = ()=>{
//     console.log(testingBool)
//     return new Promise((resolve, reject)=>{
//         try {
//             if(testingBool){

//             } else {

//             }
//         } catch (error){

//         }
//     })
// }

// action creators
export function getpaths() {
    const paths = axios.get('/api/allpaths')
        .then(res => {
        return res.data
        })
        .catch(err=>{throw new Error("Paths reducer... " + err.message)})
    return {
        type: GET_PATHS,
        payload: paths
    }
}

export function getPATH(id) {
    const PATH = axios.get('/api/PATH/' + id).then(res => {
        return res.data[0];
    })
    return {
        type: GET_PATH,
        payload: PATH
    }
}

export function addPATH(obj) {
    axios.post('/api/PATH', obj)
        .then(res => {
            alert('PATH added')
        })
        .catch( err => {
            alert('unable to add PATH', obj, err)
        } );
    return {
        type: ADD_PATH,
        payload: obj
    }
}

export function editPATH(obj) {
    axios.put('/api/PATH/', obj)
        .then(_ => {
            console.log('PATH edited');
        })
        .catch(() => {
            alert(`We're sorry but ${obj.name} was NOT able to be edited...`)
        })
    return {
        type: EDIT_PATH,
        payload: obj
    }
}

export function deletePATH(id) {
    axios.delete('/api/PATH/' + id)
        .then(() => {
            console.log('item deleted from database')

        })
        .catch(() => {
            alert(`error deleting last item to database`);
            console.log(`item id...${id} not deleted from database`)

        })
        return {
            type: DELETE_PATH,
            payload: id
        }
}


// reducer function
export default function PATHReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case GET_PATHS + '_FULFILLED':
        //payload = array of objects
            newState.PATHs = action.payload;
            break;

        case GET_PATH + '_FULFILLED':
        //payload = 1 obj
            newState.focusedItem = action.payload;
            break;

        case ADD_PATH + '_FULFILLED':
            //action.payload = edited object
            newState.PATHs.unshift(action.payload)
            break;

        case EDIT_PATH + '_FULFILLED':
        //action.payload = edited object
            let index = newState.PATHs.findIndex(el => {
                return el.id === action.payload.id;
            })
            newState.PATHs = Object.assign([], [...newState.PATHs.slice(0, index), action.payload, ...newState.PATHs.slice(index + 1)]);
            break;

        case DELETE_PATH + '_FULFILLED':
            //payload = id
            index = newState.PATHs.findIndex(el => {
                return el.id === action.payload;
            });
            newState.PATHs = newState.PATHs.splice(index, 1);
            break;

        default:
            return state;
    }

    return newState;
}