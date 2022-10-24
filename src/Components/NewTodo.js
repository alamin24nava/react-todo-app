import React, { useState } from 'react'

export default function AddTodo(props) {
  const [todo, setTodo] = useState({title:'', desc:''})

  const {title, desc} = todo;
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.onTodo(todo)
    setTodo({title:'', desc:''})
  }
  const handleChange = (e) =>{
    let value = e.target.value
    let feildName = e.target.name
    setTodo({...todo, [feildName]:value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" onChange={handleChange} className="form-control" value={title} id="title" name='title' placeholder="Title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <textarea onChange={handleChange} className="form-control" id="desc" value={desc} name='desc' rows="3" placeholder='Description'></textarea>
        </div>
        <button className='btn btn-sm btn-primary'>Add Todo</button>
      </form>
    </div>
  )
}
