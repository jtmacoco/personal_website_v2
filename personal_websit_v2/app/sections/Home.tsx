"use client"
import { useEffect, useState } from 'react';
import { about } from '../constants/info';
import { motion, useAnimation } from "framer-motion"
import MyButton from '../components/myButton';
import '../globals.css'
export default function Home() {
  const controls = useAnimation();
  useEffect(() => {
      controls.start({ opacity: 1 })
  }, [controls])
  const [text, setText] = useState('');
  const delta =  70 
  const hello = "\"Hello, I'm Jonathan Macoco a software developer.\"";
  const code_hello = `> console.log(${hello})`;
  const tick = () => {
    let updateText = code_hello.substring(0, text.length + 1);
    setText(updateText)
  }
  useEffect(() => {
    let ticker = setInterval(() => { tick() }, delta)
    return () => { clearInterval(ticker) }
  },[text])
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: 1 }}
        className="home w-full h-full">
        <div className='absolute top-40'>
          {/*add personal photo here potentialy*/}
        </div>
        <div className="relative container">
          <div className="flex items-center justify-center mx-auto gap-4 pb-4 sm:pb-10  sm:pt-0">
            <MyButton title="Resume" link="/resume"/>
            <MyButton title="Contact" link="/contact"/>
          </div>
          <p className="text-white font-code text-lg sm:text-2xl text-center  pb-10 sm:pb-20 ">{text}</p>
          <p className='text-white text-md text-center sm:text-xl pb-10 sm:pb-20'>{about}</p>
        </div>
      </motion.main>
    </>
  );
}