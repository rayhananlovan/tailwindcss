import React from 'react'
import { Link } from 'react-router-dom'
const Halaman6 = () => {
  return (
    <div>
    <div>Halaman6</div>
    <div className="flex flex-wrap">
<Link to={'/halaman7'} className="p-2 border-2 border-black"> Halaman 7</Link>
   </div>
    </div>
  )
}

export default Halaman6