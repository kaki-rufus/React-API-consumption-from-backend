import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

const  Task = () => {

  const [tasks, setTasks] = useState([])

  // const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api//').then((res) => {
      setTasks(res.data)
    })
  }, [])

  const handleDelete = async(id) => {
    await axios.delete(`http://127.0.0.1:8000/api//${id}/`).then((res) => {
    console.log(res)
    setTasks(tasks.filter(task => task.id !== id))
    })
   }


  return (
    <div>
      
      {tasks.map((task, index) => (
        <div className='tasks'>
        <div className='task' key={index}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <div className='btn-man'>
            <button type="submit" className='btn btn-success btn-man1'>
            <Link to ={`/edit/${task.id}`} className='link'>Edit</Link>
              </button>
            <button type="submit" className='btn btn-danger btn-man2' onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        </div>
        </div>
      ))}
      <button type="submit" className='btn-add btn btn-primary'><Link to ='/add' className='link'>Add task</Link></button>
    </div>
  )
}

export default Task