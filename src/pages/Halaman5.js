import React from 'react'
import { Link } from 'react-router-dom'
const Halaman5 = () => {
  return (
    <div>
    <div>Halaman5</div>
    <div className="flex flex-wrap">
<Link to={'/halaman6'} className="p-2 border-2 border-black"> Halaman 6</Link>
   </div>
    </div>
  )
}

export default Halaman5