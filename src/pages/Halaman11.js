import React from 'react'
import { Link } from 'react-router-dom'
const Halaman11 = () => {
  return (
    <div>
    <div>Halaman11</div>
    <div className="flex flex-wrap">
<Link to={'/halaman12'} className="p-2 border-2 border-black"> Halaman 12</Link>
   </div>
    </div>
  )
}

export default Halaman11