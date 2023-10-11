import React from 'react'
import { Link } from 'react-router-dom'
import background from '../images/1.jpg'
import Navbar from '../components/Navbar'

const Halaman3 = () => {
  return (
    <div>
      <Navbar/>
    <div className='mb-10'>
    <div>Halaman3</div>  
    <div>
      <h1 className="my-10 text-6xl font-bold text-center" >Belajar Tailwind CSS</h1>
    </div>
    <div>
      <section className='mb-10 bg-gradient-to-r from-indigo-500'>
        <h2 className='text-3xl text-center'>Spacing</h2>
        <div className="m-4">Margin</div>
        <div className='p-8'>Padding</div>
      </section>
    </div>
    <div className="flex flex-wrap px-8 py-8">

   </div>
   
    </div>
    <div className='flex'>
      <section className='mb-10 bg-stone-400'>
      <h2 className='-mt-20 text-3xl text-end'>Sizing</h2>
      <div className="w-32 h-32 border-4 border-black">Kotak 1</div>
      </section>
    </div>
    <div className='bb'>
      <section className='mb-10 font-serif max-h-28 '>

<div className="w-[400px] bb "></div>
   
        
        \<h2 className='mb-4 text-4xl font-bold'>Typography</h2>
        <div className='mb-4 text-lg text-gray-500'>Rayhan,25 Agustus 2023</div>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat
        rem dignissimos. Impedit corrupti autem obcaecati architecto deleniti fuga eaque repellendus enim ullam voluptatem. Facilis perspiciatis id eos nam vel, fugit explicabo cupiditate repudiandae culpa maxime, accusantium sed debitis nihil nesciunt eaque eveniet nobis quasi possimus ipsuim ducimus saepe.</p>
        <p className='mb-3 text-xl italic font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam amet tenetur quis officiis optio error deserunt explicabo laudantium eaque earum.</p>
        
      </section>
    </div>
    <div>
    <div className='max-w-xl mx-auto mt-32 bg-contain border-8 h-96 bg-slate-400 rounded-2xl border-slate-800 opacity-80 blur-sm hover:blur-none' style={{backgroundImage: `url(${background})`}}>
      <div className='w-full h-full bg-blue-500 mix-blend-multiply'></div>
    </div>
    </div>
    </div>
    
    
  )
}

export default Halaman3