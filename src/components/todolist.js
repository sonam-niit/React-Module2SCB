import React, { useState } from 'react';

function TodoList() {

    const [todos,setTodos]= useState([]);//initial valu is empty Array
    const [task,setTask]= useState(''); //initial value is empty String
    
//    const onChangeHandler=(e)=>{
//         setTask(e.target.value);
//    }
   const addTask=()=>{
    setTodos([...todos,task]); //updating array
    setTask('');
   }
    return (<div>
        <h2>Todo List App</h2>
        <ul>
            {todos.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
        <input type='text' placeholder='Enter Todo' value={task} 
        onChange={(e)=> setTask(e.target.value)} />
        
        <button onClick={addTask}>Add Task</button>
    </div>  );
}

export default TodoList;