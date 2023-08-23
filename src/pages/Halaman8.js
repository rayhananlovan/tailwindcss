import React from 'react'
import { Link } from 'react-router-dom'
const Halaman8 = () => {
  return (
    <div>
    <div>Halaman8</div>
    <div className="flex flex-wrap">
<Link to={'/halaman9'} className="p-2 border-2 border-black"> Halaman 9</Link>
   </div>
    </div>
  )
}

export default Halaman8