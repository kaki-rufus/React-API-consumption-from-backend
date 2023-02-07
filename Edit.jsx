import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css'

const Edit = () => {

  const[edititle, setEdititle] = useState("")
  const[editdesc, setEditDescr] = useState("")

  const { id }  = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api//${id}/`).then((res) => {
      console.log(res)
      setEdititle(res.data.title)
      setEditDescr(res.data.description)
    })
  }, [])

  const handleEdit = () => {
    axios.put(`http://127.0.0.1:8000/api//${id}/`, {
      title : edititle,
      description : editdesc
    }).then((resp) => {
      console.log(resp.data)
    })
    navigate('/', { replace:true })
  }

  return (
    <div className='edit'>
        <h1>EDIT TASK</h1>
        <hr />
        <label htmlFor="title">Add title:</label>
        <input type="text" id='title' value={edititle} onChange={(e) => setEdititle(e.target.value)}/>

        <label htmlFor="desc">Add description:</label>
        <input type="text" id='desc' value={editdesc} onChange={(e) => setEditDescr(e.target.value)}/>
        <button onClick={handleEdit} type="submit" className='btn btn-info btn-sub'><Link to ='/' className='link'>Edit Task</Link></button>
    </div>
  )
}

export default Edit