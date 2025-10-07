import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full bg-amber-300 h-11 text-3xl flex justify-around items-center'>
        <h1 >LOGO</h1>
        <ul className='flex justify-around items-center w-[50%]'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/info">INFO</Link></li>
        </ul>
      
      
        
    </div>
  )
}

export default Navbar
