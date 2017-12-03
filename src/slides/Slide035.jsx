import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';
import chart from './images/chart.png'

export default function Slide() {
  return (
    <Section title={'api - analysis tools'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0'}}>
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>webpack visualizer</h5>
          <img src={chart} style={{height: 460}} />
         </div>
      </div>
    </Section>
  );
} 