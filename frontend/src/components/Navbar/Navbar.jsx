import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsPersonCircle} from 'react-icons/bs'
import './Navbar.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {authActions} from '../../store'


const Navbar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=> state.isLoggedIn)
    console.log(isLoggedIn)
    const navigate = useNavigate();

    const logout = () =>{
        sessionStorage.clear("id")
        dispatch(authActions.logout())
    }
  return (
    <div>
        <div className="navbar">
            <div className="navbar-left">
                <img src="./logo/logo.jpg" alt="" />
            </div>
            <div className="navbar-right">
                <span onClick={()=>navigate('/')} style={{cursor:'pointer'}}>Home</span>
                <span onClick={()=>navigate('/todo')} style={{cursor:'pointer'}}>Todo</span>
                {!isLoggedIn && <>
                    <button className='button' onClick={()=>navigate('/signin')}>SignIn</button>
                <button className='button' onClick={()=>navigate('/signup')}>SignUp</button>
                </>}
                {isLoggedIn && <>
                    <button className='button' onClick={logout}>LogOut</button>
                <span style={{marginRight:'50px'}} className='admin'><BsPersonCircle size={30} /></span>
                </>}
               
            </div>
        </div>
    </div>
  )
}

export default Navbar