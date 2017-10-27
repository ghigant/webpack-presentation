import React from 'react';
import Slide from '../components/Slide.jsx';

export default function () {
  // <br/>
  //         <p>@Valentin Boțoc</p>
  return (
    <Slide>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%'}}>
        <div style={{flex: '1 auto'}}>
          <h2 style={{textTransform: 'initial'}}>Deep diving into</h2>
          <h2>Webpack</h2>
        </div>
      </div>
    </Slide>
  );
}
