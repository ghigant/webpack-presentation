import React from 'react';
import Slide from '../components/Slide.jsx';
import family from './images/family.jpg'

export default function () {
  return (
    <Slide title={'whoami'}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img style={{ margin: 0, border: 'none', height: 420}}src={family} />
      </div>
    </Slide>
  );
}
