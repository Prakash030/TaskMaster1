import React from 'react'
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai'
import './Footer.css'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <span>© 2023 Prakash. All rights reserved.</span>
      </div>
      <motion.div className="links"
      initial={{y: "2rem", opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{
          duration:2,
          type: "spring"
      }}
      >
        <a href=""><AiOutlineLinkedin /></a>
        <a href=""><AiOutlineGithub /></a>
        <a href=""><AiOutlineInstagram /></a>
      </motion.div>
    </div>
  )
}

export default Footer