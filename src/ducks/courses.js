import axios from 'axios';
// import config from '../config/config.json';

// Set up initial state
const initialState = {
    courses:[],
    focusedItem: {}
};

// action types
const GET_COURSE = 'GET_COURSE';
const GET_COURSES = 'GET_COURSES';
const ADD_COURSE = 'ADD_COURSE';
const EDIT_COURSE = 'EDIT_COURSE';
const DELETE_COURSE = 'DELETE_COURSE';

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
export function getCourses() {
    const courses = axios.get('/api/allcourses')
        .then(res => {
        return res.data
        })
        .catch(err=>{throw new Error("coursesdux " + err.message)})
    return {
        type: GET_COURSES,
        payload: courses
    }
}

export function getCourse(id) {
    const course = axios.get('/api/course/' + id).then(res => {
        return res.data[0];
    })
    return {
        type: GET_COURSE,
        payload: course
    }
}

export function addCourse(obj) {
    axios.post('/api/course', obj)
        .then(res => {
            alert('course added')
        })
        .catch( err => {
            alert('unable to add course', obj, err)
        } );
    return {
        type: ADD_COURSE,
        payload: obj
    }
}

export function editCourse(obj) {
    axios.put('/api/course/', obj)
        .then(_ => {
            console.log('course edited');
        })
        .catch(() => {
            alert(`We're sorry but ${obj.name} was NOT able to be edited...`)
        })
    return {
        type: EDIT_COURSE,
        payload: obj
    }
}

export function deleteCourse(id) {
    axios.delete('/api/course/' + id)
        .then(() => {
            console.log('item deleted from database')

        })
        .catch(() => {
            alert(`error deleting last item to database`);
            console.log(`item id...${id} not deleted from database`)

        })
        return {
            type: DELETE_COURSE,
            payload: id
        }
}


// reducer function
export default function courseReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case GET_COURSES + '_FULFILLED':
        //payload = array of objects
            newState.courses = action.payload;
            break;

        case GET_COURSE + '_FULFILLED':
        //payload = 1 obj
            newState.focusedItem = action.payload;
            break;

        case ADD_COURSE + '_FULFILLED':
            //action.payload = edited object
            newState.courses.unshift(action.payload)
            break;

        case EDIT_COURSE + '_FULFILLED':
        //action.payload = edited object
            let index = newState.courses.findIndex(el => {
                return el.id === action.payload.id;
            })
            newState.courses = Object.assign([], [...newState.courses.slice(0, index), action.payload, ...newState.courses.slice(index + 1)]);
            break;

        case DELETE_COURSE + '_FULFILLED':
            //payload = id
            index = newState.courses.findIndex(el => {
                return el.id === action.payload;
            });
            newState.courses = newState.courses.splice(index, 1);
            break;

        default:
            return state;
    }

    return newState;
}