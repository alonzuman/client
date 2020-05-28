import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';

export default function Navbar({ themeToggler, theme }) {

  return (
    <ul className='navbar'>
      <li className='nav-group'>
        <Link to='/'>
          <h2>Alon Zuman</h2>
        </Link>
      </li>
      <li className='nav-group'>
        <ThemeToggler theme={theme} themeToggler={themeToggler} />
        <Link id='/work-and-projects' className='nav-item' to='/work-and-projects'>Work & Projects</Link>
        <Link id='/about' className='nav-item' to='/about'>About</Link>
      </li>
    </ul>
  )
}
