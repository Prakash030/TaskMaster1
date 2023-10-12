import React from 'react'
import './Signup.css'
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const change = (e) => {
    const {name,value} = e.target;
    setInputs({...inputs, [name]: value});
  }
  const submit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:2000/api/v1/register', inputs).then((response) => {
      if(response.data.message === "User already exists!"){
        alert(response.data.message);    
      }
      // console.log(response);
      else{
      alert(response.data.message);
      setInputs({
        username: "",
        email: "",
        password: "",
      })
      navigate('/signin')
    }
    })
    
  }
  return (
    <div className='f-container'>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Register Here</h3>
        <span className='already'>Already have an account?  <span>login</span></span>

        <label for="username">Email</label>
        <input type="text" placeholder="Email or Phone" id="email" name="email"  onChange={change} value={inputs.email}/>

        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username" name='username' onChange={change} value={inputs.username}/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name='password'  onChange={change} value={inputs.password}/>

        <button className='button1' onClick={submit} >Register</button>
        {/* <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div> */}
    </form>
    </div>
  )
}

export default Signup