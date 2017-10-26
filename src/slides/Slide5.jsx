import React from 'react';
import Slide from '../components/Slide.jsx';

export default function () {
  return (
    <Slide title={'webpack'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
        <div style={{flex: '1 auto'}}>
          <h1>Configuration</h1>
        </div>
      </div>
    </Slide>
  );
}