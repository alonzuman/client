import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { works } from '../data';
import './Work.css';

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
        {works.map(work => <li className='work-thumb' key={work.id} onClick={() => openCard(work)}>{work.title}</li>)}
      </ul>
    </div>
  )
}
