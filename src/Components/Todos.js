import React from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
export default function Todos(props) {
    const todoList = props.todoList
  return (
    <div>
        <h5 className='mb-2'>Todo List</h5>
        {todoList.map((todo)=> <Todo removeTodo={props.removeTodo} key={uuidv4()} todo={todo.todo} id={todo.id} />)}
    </div>
  )
}
