import { Link } from "react-router-dom"
import Halaman1 from "./Halaman1"

const Home = () => {
return (
   <div>
   <div>
      <p className="font-mono text-3xl font-bold">Tailwind CSS</p>
   </div>
   <div className="flex flex-wrap gap-3 ml-56 ">
<Link to={'/halaman3'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline"> Utility</Link>
<Link to={'/halaman4'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Pseudo Class</Link>
<Link to={'/halaman5'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Animation</Link>
<Link to={'/halaman6'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Layouting</Link>
<Link to={'/halaman7'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Responsive Design</Link>
<Link to={'/halaman8'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Flexbox</Link>
<Link to={'/halaman9'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Grid</Link>
<Link to={'/halaman10'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Function</Link>
<Link to={'/halaman11'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Halaman11</Link>
<Link to={'/halaman12'} className="p-1 -mt-8 text-blue-600 hover:text-black hover:underline">Halaman12</Link>
   </div>
   </div>
)
}

export default Home