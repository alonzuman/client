import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='about-grid'>
      <div className='about-content'>
        <h1>About Me</h1>
        <p>Aliquip velit occaecat sit ex in mollit proident ex aliquip esse excepteur sint eiusmod officia. Nisi cillum voluptate eu voluptate proident proident ullamco irure incididunt id ad nisi. Velit id eu in sunt tempor velit adipisicing enim. Proident ea tempor aliquip veniam qui. Dolor elit ut nulla esse enim adipisicing ut occaecat eu adipisicing ea.</p>
      </div>
      <img src='https://images.unsplash.com/photo-1590398096289-c3ac21f82322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='about-photo' />
    </div>
  )
}
