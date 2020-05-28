import React, { useState } from 'react';
import './ThemeToggler.css';

export default function ThemeToggler({ themeToggler, theme }) {
  return (
    <div className='nav-item toggler' onClick={themeToggler}>
      {theme === 'light' && <>🌙</>}
      {theme === 'dark' && <>🌞</>}
    </div>
  )
}


