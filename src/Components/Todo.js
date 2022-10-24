import React from 'react'

export default function Todo(props) {
  const {title, desc} = props.todo
  const {id} = props;
    const handleRemove = (id) =>{
        props.removeTodo(id)
    }
  return (
    <div>
        <ul className="list-group">
            <li className="list-group-item mb-2">
                <h5>{title}</h5>
                <p>{desc}</p>
                <button onClick={()=>handleRemove(id)} className='btn btn-sm btn-danger'>Delete</button>
            </li>
        </ul>
    </div>
  )
}
