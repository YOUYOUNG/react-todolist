import React, { Component } from 'react';

import { getTodos, addTodos, delTodos } from './redux/action/actionCreators';
import store from './redux/store';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {value: 'er'};
       
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    handleChange(){
        let myInput = this.refs.myInput;
        this.setState({
            value:myInput.input.value
        })
    }
    addTodo(){
        let value = (this.refs.myInput).input.value;
       
        store.dispatch(addTodos(value));
        this.setState({
            value: ''
        })
    }
    delTodo(){
        let value = this.refs.myInput.value;
        store.dispatch(delTodos(value));
    }
    render(){
        return (
            <div style={{margin: '20px'}}>
                <Input type="text" value={this.state.value} ref='myInput' style={{width: '320px'}} onChange={this.handleChange}/>
                <Button type="primary" onClick={this.addTodo} style={{marginLeft: '20px'}}>Add</Button>
                <List
                    style={{marginTop: '20px', width: '400px'}}
                    bordered
                    dataSource={store.getState()}
                    renderItem={item => (<List.Item onClick={this.delTodo.bind(this)}>{item.text}</List.Item>)}
                />

            </div>
        )
    }

}

export default TodoList;