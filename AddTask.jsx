import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddTask = () => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = () => {
    axios.post('http://127.0.0.1:8000/api//', {
      title: title,
      description: desc
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })

  }

  return (
    <div className='add'>
        <h1>ADD TASK</h1>
        <hr />
        <label htmlFor="title">Add title:</label>
        <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>

        <label htmlFor="desc">Add description:</label>
        <input type="text" id='desc' value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <button onClick={handleSubmit} type="submit" className='btn btn-info btn-sub'><Link to ='/' className='link'>Submit Task</Link></button>
    </div>
  )
}

export default AddTask