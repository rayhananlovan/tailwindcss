import React from "react";
import { Link } from "react-router-dom";
import background from "../images/1.jpg";
import Navbar from "../components/Navbar";

const Halaman8 = () => {
  return (
    <div>
      <Navbar />
      <div className="container flex-row max-w-md gap-3 mx-auto sm:max-w-xl lg:flex lg:max-w-full">
        <div className="lg:p-12 lg:flex-1 ">
          <h2 className="mt-2 font-mono text-2xl font-extrabold">Rayhan</h2>
          <div
            className="w-auto mt-2 shadow-xl h-72 rounded-xl lg:hidden"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <h2 className="p-2 mt-6 text-2xl font-semibold text-slate-600 sm:text-4xl">
            Responsive Design
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            aspernatur quas ea dolorem ipsum nam beatae sunt labore fugit ex.
            Veniam, est. Deleniti quis optio officiis assumenda dolorem
            exercitationem! Reprehenderit voluptatum quos earum pariatur
            molestiae quas ducimus voluptas facilis aspernatur!
          </p>
        </div>


        <div
          className="hidden shadow-xl w-[500px] mt-10 h-96 rounded-tl-full bg-red-500 lg:flex"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
      </div>
        <div className="mt-4 ">
          <button className="inline-block px-5 py-3 ml-48 -mt-10 text-lg font-bold text-white uppercase bg-red-700 rounded-xl">
            Subscribe
          </button>
        </div>
        <h2 className="mt-24 mb-10 text-3xl font-bold text-center text-slate-600">Galeri</h2>
        <div className="container px-6 m-auto mb-10 sm:flex">
          <div className="border-4 rounded shadow-lg">
            <div className="flex justify-center w-full m-auto overflow-hidden align-middle bg-red-500 bg-center rounded shadow-xl h-72"
          style={{ backgroundImage: `url(${background})` }}></div>
          <div className="px-6 py-4">
            <div className="mb-2 font-serif text-xl text-center font-blod text-slate-900">Title</div>
            <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, provident?</p>
          </div>
          </div>
        </div>
        <div className="container px-6 m-auto mb-10 sm:flex">
          <div className="border-4 rounded shadow-lg">
            <div className="flex justify-center w-full m-auto overflow-hidden align-middle bg-red-500 bg-center rounded shadow-xl h-72"
          style={{ backgroundImage: `url(${background})` }}></div>
          <div className="px-6 py-4">
            <div className="mb-2 font-serif text-xl text-center font-blod text-slate-900">Title</div>
            <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, provident?</p>
          </div>
          </div>
        </div>
        <div className="container px-6 m-auto mb-10 sm:flex">
          <div className="border-4 rounded shadow-lg">
            <div className="flex justify-center w-full m-auto overflow-hidden align-middle bg-red-500 bg-center rounded shadow-xl h-72"
          style={{ backgroundImage: `url(${background})` }}></div>
          <div className="px-6 py-4">
            <div className="mb-2 font-serif text-xl text-center font-blod text-slate-900">Title</div>
            <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, provident?</p>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Halaman8;
