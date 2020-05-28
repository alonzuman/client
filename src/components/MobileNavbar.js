import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';
import './MobileNavbar.css';

export default function MobileNavbar({ theme, themeToggler }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <div>
      {!isOpen &&
        <ul className='mobile-navbar'>
          <li className='nav-group'>
            <Link to='/'>
              <h2>
                Alon Zuman
              </h2>
            </Link>
          </li>
          <li className='nav-group'>
            <div onClick={openMenu} >
              <i className="fas fa-bars"></i>
            </div>
          </li>
        </ul>
      }
      {isOpen && <MobileMenu theme={theme} themeToggler={themeToggler} closeMenu={closeMenu} />}
    </div>
  )
}

const MobileMenu = ({ theme, themeToggler, closeMenu }) => {
  return (
    <div className='mobile-menu'>
      <button className='close-button' onClick={closeMenu}>Close</button>
      <ul>
        <li className='nav-item-mobile'>
          <Link onClick={closeMenu} to='/work-and-projects'>Work & Projects</Link>
        </li>
        <li className='nav-item-mobile'>
          <Link onClick={closeMenu} to='about'>About</Link>
        </li>
        <ThemeToggler theme={theme} themeToggler={themeToggler} />
      </ul>
    </div>
  )
}