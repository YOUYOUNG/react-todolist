import React from 'react';

import { Input, Button } from 'antd';
import 'antd/dist/antd.css'

const AddTodo = ({todos, addTodo}) => {
    let myInput = {};
    myInput.value = '';
    return (
        <div>
            <input type="text"  ref={node => myInput = node} style={{width: '320px'}} />
                {/* 怎么获取input的值
                 */}
            <Button type="primary" onClick={() => {addTodo(myInput.value); myInput.value = '';} } style={{marginLeft: '20px'}}>Add</Button>
        </div>
    )
}
export default AddTodo;