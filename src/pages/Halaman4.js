import React from 'react'
import { Link } from 'react-router-dom'
const Halaman4 = () => {
  return (
    <div>
    <div>Halaman4</div>
    <div className="flex flex-wrap">
<Link to={'/halaman5'} className="p-2 border-2 border-black"> Halaman 5</Link>
   </div>
    </div>
  )
}

export default Halaman4