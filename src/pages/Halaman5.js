import React from 'react'
import { Link } from 'react-router-dom'
import background from '../images/1.jpg'
import Navbar from '../components/Navbar'

const Halaman5 = () => {
  return (
    <div>
      <Navbar/>
    <div className='w-40 h-40 mx-auto mt-20 transition rounded-lg shadow-lg hover:rotate-45 mt hover:scale-125 bg-sky-500 hover:bg-pink-700'>
      
    </div>
    <div className='w-40 h-40 mx-auto mt-20 bg-pink-500 group'>
      <div className='w-full h-full transition-transform duration-700 origin-top-left rounded-lg shad ow-lg bg-sky-500 hover:rotate-45 group-hover:rotate-180'></div>
    </div>
    <div className='w-40 h-40 mx-auto mt-20 mb-20 transition rounded-lg shadow-lg bg-sky-500 animate-spin'>
      
    </div>
    <div className='w-40 h-40 mx-auto mt-20 mb-20 transition rounded-full shadow-lg bg-sky-500 animate-bounce'>
      
    </div>
    
    </div>
  )
}

export default Halaman5