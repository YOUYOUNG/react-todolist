import React, { Component } from 'react';
import TodoList from '../containers/todolist';
import AddTodo from '../containers/addTodo';
import { getInitialState } from '../redux/action/actionCreators';
import thunk from 'redux-thunk'
class App extends Component {
  componentDidMount(){
    // store.dispatch(getInitialState)
  }
  render() {
    return (
      <div style={{margin: '20px'}}>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
