import {
    ADD_TODOS,
    DEL_TODOS,
    GET_TODOS,
    INITIAL_STATE
} from './actionTypes';
import Axios from 'axios';
let nextTodoId = 0;

export const getTodos = data => ({
    type: GET_TODOS,
    data: data
})
export const addTodos = text => ({
    type: ADD_TODOS,
    text,
    id: nextTodoId++
})
export const delTodos = id => ({
    type: DEL_TODOS,
    id: id
})
export const initialState = data => ({
    type: INITIAL_STATE,
    data: data
})

export const getInitialState = dispatch => {
    Axios.get('/user', {
        params: {
          ID: 12345
        }
      }).then(function(response){
        dispatch(initialState(response));
      }).catch(function(err){
        console.log(err);
      })
}