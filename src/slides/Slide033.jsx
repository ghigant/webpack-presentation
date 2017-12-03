import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';
import analyse from './images/analyse.png'

export default function Slide() {
  return (
    <Section title={'api - analysis tools'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0'}}>
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>webpack analyse</h5>
          <img src={analyse} style={{height: 460}} />
         </div>
      </div>
    </Section>
  );
} 