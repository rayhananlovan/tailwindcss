import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
const Halaman4 = () => {
  
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // const handleThemeSwitch = () => {
  //  setTheme(theme === "dark" ? "light" : "dark");
  // };
  console.log(theme);
  return (
    <div className={`${theme}`}>
      <Navbar/>
      <div className='h-screen bg-[#ffffff] bb dark:bg-black flex justify-center items-center'>
        <button className='p-4 bg-green-200 rounded-3xl' onClick={()=>setTheme(theme==='dark'? 'light': 'dark')}>
          Dark Mode
        </button>
      </div>
    <div className='max-w-lg p-5 mx-auto my-10 font-serif transition border-4 shadow-md dark:bg-black border-slate-200 rounded-xl font-inter hover:bg-sky-500 group hover:scale-125'>
      <h5 className='mb-3 text-lg font-bold text-slate-900 group-hover:text-white selection:bg-red-400'>My Card</h5>
      <p className='text-slate-600 group-hover:text-white selection:bg-red-400 first-letter:text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus repellendus doloribus voluptatibus odit accusantium voluptate sed amet corporis tempora ducimus, laborum fuga doloremque velit quas harum quod quae exercitationem. Quae.</p>
    </div>
    <div>
    <button className='block px-5 py-2 mx-auto my-10 font-semibold text-white rounded-full bg-sky-800 hover:bg-slate-500'>Save</button>
    </div>

    <div className='max-w-lg p-4 mx-auto mb-6 border-4 rounded shadow-md border-slate-200 font-inter'>
      <form action="" className=''>
        <label htmlFor="email" className="block mb-1 font-semibold text-slate-700 after:text-pink-500">
        Email *
        </label>
        <input type='email' id='email' placeholder='masukkan email...' className='block w-full px-3 py-2 text-sm border rounded shadow placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-blue-400 invalid:text-pink-500 peer'/>
        <p className='invisible m-2 text-pink-700 peer-invalid:visible'>Email tidak valid</p>
      </form>

    </div>
   
    </div>
    
  ) 
}
export default Halaman4