import React from 'react'
import { Link } from 'react-router-dom'
const Halaman9 = () => {
  return (
    <div>
    <div>Halaman9</div>
    <div className="flex flex-wrap">
<Link to={'/halaman10'} className="p-2 border-2 border-black"> Halaman 10</Link>
   </div>
    </div>
  )
}

export default Halaman9