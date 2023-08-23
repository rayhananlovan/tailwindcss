import React from 'react'
import { Link } from 'react-router-dom'
const Halaman10 = () => {
  return (
    <div>
    <div>Halaman10</div>
    <div className="flex flex-wrap">
<Link to={'/halaman11'} className="p-2 border-2 border-black"> Halaman 11</Link>
   </div>
    </div>
  )
}

export default Halaman10