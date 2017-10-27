import React from 'react';
import Slide from '../components/Slide.jsx';

export default function () {
  return (
    <Slide>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
        <div style={{flex: '1 0'}}>
          <h3 style={{textTransform: 'initial'}}>Configuration</h3>
        </div>
      </div>
    </Slide>
  );
}
