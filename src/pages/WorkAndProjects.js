import React, { useState } from 'react';
import Work from './Work';
import Projects from './Projects';

export default function WorkAndProjects() {
  const [isWork, setIsWork] = useState(true)
  return (
    <div>
      <div className='flex-header'>
        <h1>View My:
        <button
            className={`primary-button ${isWork ? 'selected-button' : ''}`}
            onClick={() => { setIsWork(true) }}>
            Work
      </button>
          <button
            className={`primary-button ${!isWork ? 'selected-button' : ''}`}
            onClick={() => setIsWork(false)}>
            Fun Projects
      </button>
        </h1>
      </div>
      {!isWork && <Projects />}
      {isWork && <Work />}
    </div>
  )
}
