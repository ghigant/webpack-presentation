import React from 'react';
import Slide from '../components/Slide.jsx';

export default function () {
  // <br/> 
  //         <p>@Valentin Boțoc</p>
  const items = [

  ];
  return (
    <Slide title={'whoami'}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <div style={{flex: '1 0', marginTop: '0', textAlign: 'left'}}>
          <ul>
            <li>Currently Senior Front End Engineer @ SoftVision</li>
            <li>Past Full Stack Engineer @ Telesoft</li>
          </ul>
          <br/><br/>
          <ul >
            <li>Love JavaScript</li>
            <li>Passionated about front end technologies</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}