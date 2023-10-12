import React, { useState, useEffect } from 'react';
import './Todo.css';
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {authActions} from '../../store'
import axios from 'axios';
let toUpdateArray = []
let id = sessionStorage.getItem("id")
const Todo = () => {
    const [inputs, setInputs] = useState({ title: "", body: "" });
    const [array, setArray] = useState([]);
    

    const show = () => {
        document.getElementById('textarea').style.display = 'block';
    }
    

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const submit = async() => {
        // console.log(inputs);
        if ((inputs.title || inputs.body) === "") {
            toast.error("Please enter a title and body");
        }
        else {
            if(id){
                await axios.post('https://task-master1.vercel.app/api/v2/addTask', {title: inputs.title, body: inputs.body,id: id}).then((response)=> console.log(response))
                setArray([...array, inputs]);
            setInputs({ title: "", body: "" });
            console.log(array);
            toast.success("New Task added")
            }
            else{
            setArray([...array, inputs]);
            setInputs({ title: "", body: "" });
            console.log(array);
            toast.error("New Task added but not saved! Please Log in again")
            }
        }

    }
    // console.log(array);
   

    const dis = (value) => {
        console.log(value);
        document.getElementById("todo-update").style.display = value;
    }

    const update = (value) => {
        toUpdateArray = array[value]
    }

    const del = async(cardId) => {
        // array.splice(id, "1  ");
        // setArray([...array])
        if(id){
            await axios.delete(`https://task-master1.vercel.app/api/v2/deleteTask/${cardId}`, {data:{id:id}}).then((response)=>{
            toast.success("Task Delete Successfully")
        })
        }
        else{
            toast.error("Task Delete Failed! Please Log in")
        }
        
    }
    useEffect(() => {
        if(id){
        const fetch = async()=>{
          await axios.get(`https://task-master1.vercel.app/api/v2/getTask/${id}`).then((response)=>{
              setArray(response.data.list)
          })
        }
        fetch()
    }
    else{
        toast.error("Task Delete Failed! Please Log in")
    }
      }, [submit])



    return (
        <>
        <div className='todo'>
            <ToastContainer />
            <div className="todo-main">
                <div className="todo-head">
                    <input type="text" name="title" placeholder='Title' onClick={show} value={inputs.title} onChange={change} />
                    <textarea placeholder='Body' id='textarea' name='body' value={inputs.body} onChange={change} />
                </div>
                <button className='button' onClick={submit}>Add</button>
            </div>
            <div className="todo-body">
                <div className="container">
                    <div className='row'>

                        {array && array.map((item, index) => (
                            <div className="column" key={index}>
                                <TodoCards title={item.title} body={item.body} id={item._id} delId={del} display={dis} updateId={index} toBeUpdate={update}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="todo-update" id="todo-update" >
            <div className="u-container">
                <Update display={dis} update={toUpdateArray}/>
            </div>
        </div>
        </>
    )
}

export default Todo;
