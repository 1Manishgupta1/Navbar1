import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full bg-amber-300 h-11 text-3xl flex justify-around items-center'>
        <h1 >LOGO</h1>
        <ul className='flex justify-around items-center w-[50%]'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : ''}>HOME</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600' : ''}>ABOUT</NavLink></li>
            <li><NavLink to="/info" className={({ isActive }) => isActive ? 'text-blue-600' : ''}>INFO</NavLink></li>
        </ul>
      
      
        
    </div>
  )
}

export default Navbar
