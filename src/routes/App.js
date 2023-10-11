import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../styles/App.css'
import Home from "../pages/Home";
import About from "../pages/About";
import Halaman3 from '../pages/Halaman3';
import Halaman4 from '../pages/Halaman4';
import Halaman5 from '../pages/Halaman5'; 
import Halaman6 from '../pages/Halaman6';
import Halaman7 from '../pages/Halaman7';
import Halaman8 from '../pages/Halaman8';
import Halaman9 from '../pages/Halaman9';
import Halaman10 from '../pages/Halaman10';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/halaman3' element={<Halaman3/>}/>
        <Route path='/halaman4' element={<Halaman4/>}/>
        <Route path='/halaman5' element={<Halaman5/>}/>
        <Route path='/halaman6' element={<Halaman6/>}/>
        <Route path='/halaman7' element={<Halaman7/>}/>
        <Route path='/halaman8' element={<Halaman8/>}/>
        <Route path='/halaman9' element={<Halaman9/>}/>
        <Route path='/halaman10' element={<Halaman10/>}/>
        
      </Routes>
    </Router>
  );
}


export default App;
