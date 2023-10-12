
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Signup'
import  Signin  from './components/Signup/Signin'
import Todo from './components/Todo/Todo'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {authActions} from './store'

function App() {
  const dispatch  = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem('id')
    if(id)
      dispatch(authActions.login())
  }, [])
  


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
