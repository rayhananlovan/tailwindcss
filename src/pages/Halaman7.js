import React from 'react'
import { Link } from 'react-router-dom'
import background from '../images/1.jpg'

const Halaman7 = () => {
  return (
    <div>
    <div className='container max-w-md px-6 mx-auto sm:max-w-xl'>
      <h2 className='mt-2'>Rayhan</h2>
      <div className='w-auto mt-2 shadow-xl h-72 rounded-xl' style={{backgroundImage: `url(${background})`}}></div>
      <h2 className='mt-6 text-2xl font-semibold text-slate-600 sm:text-4xl'>Responsive Design</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur quas ea dolorem ipsum nam beatae sunt labore fugit ex. Veniam, est. Deleniti quis optio officiis assumenda dolorem exercitationem! Reprehenderit voluptatum quos earum pariatur molestiae quas ducimus voluptas facilis aspernatur!</p>
    </div>
    <div className='mt-4'>
      <button className='inline-block px-5 py-3 ml-32 text-lg font-bold text-white uppercase scale-90 bg-red-700 rounded-xl sm:ml-4'>Subscribe</button>
    </div>
    </div>
  )
}

export default Halaman7