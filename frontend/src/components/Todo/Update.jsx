import React, {useState, useEffect} from 'react'
import './Todo.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Update = ({ display, update }) => {
  useEffect(() =>{
    setInputs({
      title: update.title,
      body: update.body
    })
  },[update])
  
  const [inputs, setInputs] = useState({title:"", body:""});
  // console.log(inputs.title, inputs.body)
  const change = (e) =>{
    const {name,value} = e.target;
    setInputs({...inputs, [name]:value})
  }

  const submit = async () =>{
    // console.log(update._id)
    await axios.put(`https://task-master1.vercel.app/api/v2/updateTask/${update._id}`,inputs).then((response) =>(
      toast.success("Task Updated Successfully")
    ))
    display("none")
  }
  return (
    <div className='up-container'>
      <h3>Update Your task</h3>
      <input type="text" value={inputs.title} name="title" onChange={change} />
      <textarea name="body" value={inputs.body}  rows="7" style={{ width: '180vh' }}  onChange={change}></textarea>
      <div className="c-container">
                <button className='btnUpdate' onClick={submit}>Update</button>
                <button className='btnDelete' onClick={() => display("none") }>Close</button>
            </div>
    </div>
  )
}

export default Update
