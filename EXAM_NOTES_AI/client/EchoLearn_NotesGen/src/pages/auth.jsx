import React from 'react'
import { motion } from "motion/react"
import { FaGoogle } from "react-icons/fa";

function Auth() {
  return (
    <div className='min-h-screen overflow-hidden bg-white text-black px-8'>
        <motion.header 
        initial = {{opacity: 0, y: -15}}
        animate = {{opacity: 1, y: 0}}
        transition = {{duration:1.5}} 
        className="max-w-7xl mx-auto mt-8
          rounded-2xl
          bg-black/80 backdrop-blur-xl
          border border-white/10
          px-8 py-6
          shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
            <h1 className='text-4xl font-bold
            bg-linear-to-r from-white via-gray-300 to-white
            bg-clip-text text-transparent '>Welcome to EchoLearn NotesGen</h1>
            <p className='text-sm text-gray-300 mt-1'>AI POWERED NOTES GENERATOR FOR REVISION</p>
        </motion.header>
        <main className='max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20
        items-center'>
        
        <motion.div
          initial = {{opacity: 0, x: -60}}
          animate = {{opacity: 1, y: 0}}
          transition = {{duration:1.5}}
          >
            <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight
          from-black/90 via-black/60 to-black/90 bg-gradient-to-br
            bg-clip-text text-transparent'>
            Unlock Smart <br /> AI Notes</h1>
            <motion.button 
            whileHover={{
              y:-10,
              rotateX:8,
              rotateY:-8,
              scale:1.07
            }}
            className='mt-10 px-10 py-3 rounded-xl
            flex items-center gap-3
            bg-gradient-to-br from-black/90 to-black/60 to-black/90
            border border-white/10
            text-white font-semibold text-lg 
            shadow-[0_10px_30px_rgba(0,0,0,0.7)]'>
              <FaGoogle size={22}/>
              Sign in with Google

            </motion.button>
            <p className='mt-6 max-w-xl text-lg
            bg-gradient-to-br from-gray-700 to-gray-500/80 to-gray-700
            bg-clip-text text-transparent'>
              You get <span className="font-semibold">  50 credits free</span> to create exam notes
              , project notes and more and download clean PDF's instantly using AI.
            </p>
            <p className = 'mt-4 text-sm text-gray-500'> </p>
        </motion.div>

        </main>
    </div>
  )
}

export default Auth

