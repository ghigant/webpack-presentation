import React from 'react';
import Section from '../components/Section.jsx';

export default function Slide() {
  // <br/>
  //         <p>@Valentin Boțoc</p>
  return (
    <Section>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%'}}>
        <div style={{flex: '1 auto', transform: 'translateY(-30%)'}} >
          <h2 style={{textTransform: 'initial', color: '#39c0ba'}}>Deep diving into</h2>
          <h2 style={{color: '#39c0ba'}}>Webpack</h2>
        </div>
      </div>
    </Section>
  );
}
