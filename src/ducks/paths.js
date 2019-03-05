import axios from 'axios';
import pathConfig from '../config/paths_test.json';

// Set up initial state
const initialState = {
    paths: pathConfig
};

// action types
const GET_PATH = 'GET_PATH';
const GET_PATHS = 'GET_PATHS';
const ADD_PATH = 'ADD_PATH';
const EDIT_PATH = 'EDIT_PATH';
const DELETE_PATH = 'DELETE_PATH';

// action creators
export function getPaths() {
    const paths = axios.get('/api/allPaths')
        .then(res => {
        return res.data
        })
        .catch(err=>{throw new Error("Paths reducer... " + err.message)})
    return {
        type: GET_PATHS,
        payload: paths
    }
}

export function getPath(id) {
    const path = axios.get('/api/path/' + id).then(res => {
        return res.data[0];
    })
    return {
        type: GET_PATH,
        payload: path
    }
}

export function addPath(obj) {
    axios.post('/api/path', obj)
        .then(res => {
            alert('Path added')
        })
        .catch( err => {
            alert('unable to add Path', obj, err)
        } );
    return {
        type: ADD_PATH,
        payload: obj
    }
}

export function editPath(obj) {
    axios.put('/api/path/', obj)
        .then(_ => {
            console.log('Path edited');
        })
        .catch(() => {
            alert(`We're sorry but ${obj.name} was NOT able to be edited...`)
        })
    return {
        type: EDIT_PATH,
        payload: obj
    }
}

export function deletePath(id) {
    axios.delete('/api/path/' + id)
        .then(() => {
            console.log('path deleted from database')

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
export default function pathReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case GET_PATHS + '_FULFILLED':
        //payload = array of objects
            newState.paths = action.payload;
            break;

        // case GET_PATH + '_FULFILLED':
        // //payload = 1 obj
        //     newState.focusedItem = action.payload;
        //     break;

        case ADD_PATH + '_FULFILLED':
            //action.payload = edited object
            newState.paths.unshift(action.payload)
            break;

        case EDIT_PATH + '_FULFILLED':
        //action.payload = edited object
            let index = newState.paths.findIndex(el => {
                return el.id === action.payload.id;
            })
            newState.paths = Object.assign([], [...newState.paths.slice(0, index), action.payload, ...newState.paths.slice(index + 1)]);
            break;

        case DELETE_PATH + '_FULFILLED':
            //payload = id
            index = newState.paths.findIndex(el => {
                return el.id === action.payload;
            });
            newState.paths = newState.paths.splice(index, 1);
            break;

        default:
            return state;
    }

    return newState;
}