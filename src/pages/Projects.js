import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Work.css';
import { projects } from '../data';

export default function Work() {
  const [cardOpen, setCardOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState()

  const openCard = (work) => {
    setSelectedWork(work);
    setCardOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const closeCard = () => {
    setCardOpen(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <div>
      {cardOpen && <ProjectCard closeCard={closeCard} selectedWork={selectedWork} />}
      <ul className='work-grid'>
        {projects.map(project => <li className='work-thumb' key={project.id} onClick={() => openCard(project)}>{project.title}</li>)}
      </ul>
    </div>
  )
}