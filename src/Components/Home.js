import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from 'uuid';


export default function Home() {
    const [onTodoList, setOnTodoList] = useState([])
    const onTodo = (todo) => {
        setOnTodoList(onTodoList => [...onTodoList,{id: uuidv4(), todo}])
    }
    const removeTodo = (id) =>{
       const filterTodo =  onTodoList.filter((todo) => todo.id !== id)
       setOnTodoList(filterTodo)
    }
  return (
    <div className='row'>
        <div className='col-4'>
            <NewTodo onTodo = {onTodo} />
        </div>
        <div className='col-6'>
            <Todos todoList={onTodoList} removeTodo = {removeTodo}/>
        </div>
    </div>
  )
}
