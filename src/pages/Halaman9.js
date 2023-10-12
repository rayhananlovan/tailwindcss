import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import background2 from "../images/2.jpg";
import background3 from "../images/3.jpg";
import background4 from "../images/4.jpg";
import background5 from "../images/5.jpg";
import background6 from "../images/6.jpg";
import background7 from "../images/7.jpg";
import background8 from "../images/8.jpg";
import background9 from "../images/9.jpg";
import background10 from "../images/10.jpg";
import background11 from "../images/11.jpg";

const Halaman9 = () => {
  return (
    <div>
      <Navbar/>
    <div className='grid grid-cols-2 gap-2 p-2 mt-10 font-serif md:grid-cols-4 md:p-4'>
      <h2 className='text-xl font-semibold h-15 text-slate-700 md:col-start-4 md:row-start-2 md:flex'><span className='self-center'>Welcome</span></h2>
      <div className='text-lg font-bold text-red-500 h-15 md:col-start-2 md:row-start-2 md:flex'><span className='self-end'>@rayhaln</span></div>
      
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] overflow-hidden group relative hover:scale-95 transition-all duration-500'>
        <div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background2})` }}></div>
      </div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500'><div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background3})` }}></div></div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] overflow-hidden group relative hover:scale-95 transition-all duration-500'>
        <div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background4})` }}></div>
      </div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] overflow-hidden group relative hover:scale-95 transition-all duration-500'>
        <div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background5})` }}></div>
      </div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] overflow-hidden group relative hover:scale-95 transition-all duration-500'>
        <div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background6})` }}></div>
      </div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] md:col-start-2 overflow-hidden group relative hover:scale-95 transition-all duration-500'><div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background7})` }}></div></div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] md:col-start-4 overflow-hidden group relative hover:scale-95 transition-all duration-500'><div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background8})` }}></div></div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] overflow-hidden group relative hover:scale-95 transition-all duration-500'><div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background9})` }}></div></div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500'><div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background10})` }}></div></div>
      <div className='bg-blue-500 h-15 rounded-xl aspect-[4/3] md:aspect-[3/4] xl:aspect-[4-3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500'><div className='absolute w-full h-full transition-all duration-500 bg-center bg-cover group-hover:scale-125 group-hover:rotate-12' style={{ backgroundImage: `url(${background11})` }}></div></div>
    </div>  
    </div>
  )
}

export default Halaman9