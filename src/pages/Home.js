import { Link, NavLink } from "react-router-dom";
import Halaman1 from "./Halaman1";

const Home = () => {
  return (
    <div>
      <div>
        <div className="max-w-full p-4 ">
          
          <NavLink 
            to={"/halaman3"}
            className="p-6 text-blue-600 no-underline hover:text-black hover:underline "
          >
            {" "}
            Utility
          </NavLink>
          <NavLink
            to={"/halaman4"}
            className="p-6 text-blue-600 no-underline hover:text-black hover:underline"
          >
            Pseudo Class
          </NavLink>
          <NavLink
            to={"/halaman5"}
            className="p-6 text-blue-600 no-underline hover:text-black hover:underline"
          >
            Animation
          </NavLink>
          <NavLink
            to={"/halaman6"}
            className="p-6 text-blue-600 no-underline hover:text-black hover:underline"
          >
            Layouting
          </NavLink>
          <NavLink
            to={"/halaman7"}
            className="p-6 text-blue-600 no-underline hover:text-black hover:underline"
          >
            Responsive Design
          </NavLink>
          <NavLink
            to={"/halaman8"}
            className="p-6 text-blue-600 no-underline hover:text-black hover:underline"
          >
            Flexbox
          </NavLink>
          <NavLink
            to={"/halaman9"}
            className="p-6 text-blue-600 no-underline hover:text-black hover:underline"
          >
            Grid
          </NavLink>
          <NavLink
            to={"/halaman10"}
            className="p-6 text-blue-600 no-underline hover:text-black hover:underline"
          >
            Function
          </NavLink>
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
