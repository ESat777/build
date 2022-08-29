import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';

function NavBar() {
  return (
    <nav>
        <NavLink className='link' to="/"><img className='logo' src={logo} height={60} width={60} alt='Logo'/></NavLink>
        <ul className='nav-link'>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/home">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/todo">Todo</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about">About</NavLink>
        </ul>
    </nav>
  )
}

export default NavBar