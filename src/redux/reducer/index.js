import { ADD_TODOS, DEL_TODOS, INITIAL_STATE } from '../action/actionTypes';


 const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODOS: return [ ...state, { id: action.id, text: action.text}];
        case INITIAL_STATE: return action.data;
        case DEL_TODOS:  state = delTodos(state, action.id); return state;
        default: return state;
    }
}

const delTodos = (state, id) => {
    let indexs;
    // 不能修改原来的state,reducer只能是纯函数
    let newState = JSON.parse(JSON.stringify(state))
    newState.map((item, index) => {
        if(item.id === id){
           indexs = index; 
        }
    })
    newState.splice(indexs, 1);
    return newState;
}
export default todos;