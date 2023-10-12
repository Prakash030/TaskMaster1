import React from 'react'
import './Signup.css'
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {authActions} from '../../store'

const Signin = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const {name,value} = e.target;
    setInputs({...inputs, [name]: value});
  }
  const submit = async (e) => {
    e.preventDefault();
    await axios.post('https://task-master1.vercel.app/api/v1/signin', inputs).then((response) => {
      sessionStorage.setItem('id',response.data.others._id);
      dispatch(authActions.login())

      navigate('/todo')
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
        <span className='already'>Don't have an account?  <span>register</span></span>

        <label for="username">Email</label>
        <input type="text" placeholder="Email or Phone" id="email" name="email"  onChange={change} value={inputs.email}/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name='password'  onChange={change} value={inputs.password}/>

        <button className='button1' onClick={submit} >LogIn</button>
        {/* <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div> */}
    </form>
    </div>
  )
}

export default Signin
