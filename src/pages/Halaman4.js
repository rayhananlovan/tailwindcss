import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
      <div className='h-screen bg-[#ffffff] bb dark:bg-black flex justify-center items-center'>
        <button className='bg-green-200 p-4 rounded-3xl' onClick={()=>setTheme(theme==='dark'? 'light': 'dark')}>
          Dark Mode
        </button>
      </div>
    <div className='max-w-lg my-10 dark:bg-black  border-slate-200 rounded-xl  mx-auto p-5 shadow-md font-inter hover:bg-sky-500 group border-4 font-serif'>
      <h5 className='font-bold text-slate-900 text-lg mb-3 group-hover:text-white selection:bg-red-400'>My Card</h5>
      <p className='text-slate-600 group-hover:text-white selection:bg-red-400 first-letter:text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus repellendus doloribus voluptatibus odit accusantium voluptate sed amet corporis tempora ducimus, laborum fuga doloremque velit quas harum quod quae exercitationem. Quae.</p>
    </div>
    <div>
    <button className='my-10 bg-sky-800 px-5 py-2 rounded-full text-white font-semibold block mx-auto hover:bg-slate-500'>Save</button>
    </div>

    <div className='mb-6 max-w-lg  border-slate-200 rounded mx-auto shadow-md font-inter p-4 border-4'>
      <form action="" className=''>
        <label htmlFor="email" className="block font-semibold mb-1 text-slate-700 after:text-pink-500">
        Email *
        </label>
        <input type='email' id='email' placeholder='masukkan email...' className='px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-blue-400 invalid:text-pink-500 peer'/>
        <p className='m-2 text-pink-700 invisible peer-invalid:visible'>Email tidak valid</p>
      </form>

    </div>
   
    </div>
    
  ) 
}
export default Halaman4