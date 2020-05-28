import React from 'react';
import './ProjectCard.css'

export default function ProjectCard({ selectedWork, closeCard }) {

  return (
    <div className='project-card-background'>
      <div className='project-card'>
        <a id='card-close-button' className='close-button' onClick={closeCard}>Close</a>
        <img className='work-photo' src={selectedWork.image} alt="hi" />
        <div className='work-content'>
          <h1>{selectedWork.title}</h1>
          <p>{selectedWork.description}</p>
        </div>
      </div>
    </div>
  )
}
