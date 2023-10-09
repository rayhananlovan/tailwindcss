import React from 'react'
import { Link } from 'react-router-dom'
const Halaman5 = () => {
  return (
    <div>
    <div className='w-40 h-40 mx-auto mt-20 transition rounded-lg shadow-lg hover:rotate-45 mt hover:scale-125 bg-sky-500 hover:bg-pink-700'>
      
    </div>
    <div className='w-40 h-40 mx-auto mt-20 bg-pink-500 group'>
      <div className='w-full h-full transition transition-transform duration-700 origin-top-left shadow-lg roundied-lg bg-sky-500 hover:rotate-45 group-hover:rotate-180'></div>
    </div>
    <div className='w-40 h-40 mx-auto mt-20 mb-20 transition rounded-lg shadow-lg bg-sky-500 animate-spin'>
      
    </div>
    <div className='w-40 h-40 mx-auto mt-20 mb-20 transition rounded-full shadow-lg bg-sky-500 animate-bounce'>
      
    </div>
   
    </div>
  )
}

export default Halaman5