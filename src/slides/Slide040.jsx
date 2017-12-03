import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';
import chart from './images/chart.png'

export default function Slide() {
  // style={{color: '#39c0ba'}} 
  return (
    <Section title={'optimisations'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>Sourcemaps</h5>
          <p>Development</p>
          <ul>
            <li><span style={{}}>eval</span></li>
            <li><span></span>cheap-module-eval-source-map</li>
          </ul>
          <p>Prodution</p>
          <ul>
            <li><span></span>source-map</li>
          </ul>
          <p style={{color: '#39c0ba'}}>SourceMapDevToolPlugin</p>
         </div>
      </div>
    </Section>
  );
} 