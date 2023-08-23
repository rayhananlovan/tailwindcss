import React from 'react'
import { Link } from 'react-router-dom'

const Halaman3 = () => {
  return (
    <div>
    <div>Halaman3</div>
    <div className="flex flex-wrap">
<Link to={'/halaman4'} className="p-2 border-2 border-black"> Halaman 4</Link>
   </div>
    </div>
  )
}

export default Halaman3