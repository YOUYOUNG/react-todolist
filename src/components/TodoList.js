import React from 'react';

import { List } from 'antd';
import 'antd/dist/antd.css'

const TodoList = ({todos, delTodo}) => {
    console.log(todos)
    // 为啥监听不到state的变化
        return (
                <List
                    style={{width: '400px', marginTop: '10px'}}
                    bordered
                    dataSource={todos}
                    renderItem={item => (<List.Item onClick={() =>{ delTodo(item.id)} }>{item.text}</List.Item>)}
                />
                // <ul style={{width: '400px', marginTop: '10px'}}>
                //     {
                //         todos.map(item => {
                //             return (<li key={item.id} onClick={() => delTodo(item.id)} >{item.text}</li>)
                //         })
                //     }
                    
                // </ul>

        )

}

export default TodoList;