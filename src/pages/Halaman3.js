import React from 'react'
import { Link } from 'react-router-dom'

const Halaman3 = () => {
  return (
    <div>
    <div className='mb-10'>
    <div>Halaman3</div>
    <Link to={'/halaman4'} className="p-2 border-2 border-black ml-96"> Halaman 4</Link>
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
    <div>
      <section className='mb-10 font-serif max-h-28 '>

<div className="w-[400px] bb h-[140px]"></div>

        
        \<h2 className='mb-4 text-4xl font-bold'>Typography</h2>
        <div className='mb-4 text-lg text-gray-500'>Rayhan,25 Agustus 2023</div>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat
        rem dignissimos. Impedit corrupti autem obcaecati architecto deleniti fuga eaque repellendus enim ullam voluptatem. Facilis perspiciatis id eos nam vel, fugit explicabo cupiditate repudiandae culpa maxime, accusantium sed debitis nihil nesciunt eaque eveniet nobis quasi possimus ipsum ducimus saepe.</p>
        <p className='mb-3 text-xl italic font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam amet tenetur quis officiis optio error deserunt explicabo laudantium eaque earum.</p>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquid, ipsam possimus blanditiis eveniet incidunt omnis ratione magni modi, nisi eum deleniti voluptatem alias quo! Eveniet aut error a corporis?</p>
      </section>
    </div>
    <div className="max-w-xl mx-auto mt-[42px] h-96 bg-slate-400 bg-[url('https://images.unsplash.com/photo-1533050487297-09b450131914?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YW5pbWV8fHx8fHwxNjkyOTU2MTY4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400')]">
      <div className="mb-96"></div>
    </div>
    </div>
    
    
  )
}

export default Halaman3