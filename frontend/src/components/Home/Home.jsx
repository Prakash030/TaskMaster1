import React from 'react'
import './Home.css'
import  { useState, useEffect } from "react"
import { motion } from 'framer-motion'


const Home = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "TASK MASTER"  );
    const [index, setIndex] = useState(0);
    useEffect(() => {
      if (index < fullText.length) {
        setTimeout(() => {
          setText(text + fullText[index])
          setIndex(index + 1)
        }, 100)
      }
    }, [index])
  return (
    <div>
      <div className="home-container">
        <div className="left">
          <h3>WELCOME TO THE </h3>
          <h1>{text}</h1>
          <h2>The tech that helps <br /> <motion.span style={{ color: "orange" }}
          initial={{y: "2rem", opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{
              duration:5,
              type: "spring"
          }}
          >you</motion.span> to <motion.span style={{ color: "orange" }} 
          initial={{y: "2rem", opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{
                            duration:5,
                            type: "spring"
                        }}
          >Organize</motion.span> your day.</h2>

          <p>It includes modern day features <br /> which helps you to stay upadted and <br /> organize yourself to make your day more efficient.</p>

          <motion.button className='button'
          initial={{y: "2rem", opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{
              duration:2,
              type: "spring"
          }}
          >Add your Tasks</motion.button>
        </div>
        <motion.div className="right"
        initial={{x: "2rem", opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{
            duration:4,
            type: "spring"
        }}>
          <img src="./home/pic4.webp" alt="" />
        </motion.div>
      </div>

    </div>
  )
}

export default Home