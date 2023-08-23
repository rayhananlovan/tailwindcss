import React from 'react'
import { Link } from 'react-router-dom'
const Halaman7 = () => {
  return (
    <div>
    <div>Halaman7</div>
    <div className="flex flex-wrap">
<Link to={'/halaman8'} className="p-2 border-2 border-black"> Halaman 8</Link>
   </div>
    </div>
  )
}

export default Halaman7