import React from 'react'
import './Todo.css'
import { AiFillDelete } from 'react-icons/ai'
import { MdSecurityUpdateGood } from 'react-icons/md'

const TodoCards = ({ title, body, id, delId, display,updateId,toBeUpdate })  => {
    return (
        <div className='card'>
            <h5>{title}</h5>
            <p>{body.split("", 77)}...</p>
            <div className="c-container">
                <button className='btnUpdate' style={{marginRight:'6.5rem'}} 
                onClick={() => {display("block"); toBeUpdate(updateId)}} 
                ><MdSecurityUpdateGood size={20}/>Update</button>
                <button className='btnDelete' onClick={()=>delId(id)}><AiFillDelete  size={15}/>Delete</button>
            </div>
        </div>
    )
}

export default TodoCards