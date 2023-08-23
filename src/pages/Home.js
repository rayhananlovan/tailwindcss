import { Link } from "react-router-dom"
import Halaman1 from "./Halaman1"

const Home = () => {
return (
   <div className="flex flex-wrap gap-3">
<Link to={'/halaman3'} className="p-2 border-2 border-black"> Utility</Link>
<Link to={'/halaman4'} className="p-2 border-2 border-black">Pseudo Class</Link>
<Link to={'/halaman5'} className="p-2 border-2 border-black">Animation</Link>
<Link to={'/halaman6'} className="p-2 border-2 border-black">Layouting</Link>
<Link to={'/halaman7'} className="p-2 border-2 border-black">Responsive Design</Link>
<Link to={'/halaman8'} className="p-2 border-2 border-black">Flexbox</Link>
<Link to={'/halaman9'} className="p-2 border-2 border-black">Grid</Link>
<Link to={'/halaman10'} className="p-2 border-2 border-black">Function</Link>
<Link to={'/halaman11'} className="p-2 border-2 border-black">Halaman11</Link>
<Link to={'/halaman12'} className="p-2 border-2 border-black">Halaman12</Link>
   </div>
   
)
}

export default Home