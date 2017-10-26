import React from 'react';
import Slide from '../components/Slide.jsx';
import family from './images/family.jpg'

export default function () {
  return (
    <Slide title={'whoami'}>
      {/* <div style={{display: 'flex', flexDirection: 'rew', alignItems: 'center', height: '100%' }}> */}
        <img src={family} />
      {/* </div> */}
    </Slide>
  );
}