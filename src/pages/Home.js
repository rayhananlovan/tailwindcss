import { Link, NavLink } from "react-router-dom"
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap"
import Halaman1 from "./Halaman1"

const Home = () => {
return (
   <div>
   <Navbar className="border-2 border-solid ">
      
      <Container>
         <NavbarBrand className="">Tailwind CSS</NavbarBrand>
         <Nav>

<NavLink to={'/halaman3'} className="p-1 no-underline hover:text-black hover:underline"> Utility</NavLink>
<NavLink to={'/halaman4'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Pseudo Class</NavLink>
<NavLink to={'/halaman5'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Animation</NavLink>
<NavLink to={'/halaman6'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Layouting</NavLink>
<NavLink to={'/halaman7'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Responsive Design</NavLink>
<NavLink to={'/halaman8'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Flexbox</NavLink>
<NavLink to={'/halaman9'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Grid</NavLink>
<NavLink to={'/halaman10'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Function</NavLink>
<NavLink to={'/halaman11'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Halaman11</NavLink>
<NavLink to={'/halaman12'} className="p-1 text-blue-600 no-underline hover:text-black hover:underline">Halaman12</NavLink>
         </Nav>
      </Container>
   </Navbar>
   </div>
)
}

export default Home