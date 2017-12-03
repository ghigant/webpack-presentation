import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Loaders: Evaluation</h5>
          <ul>
            <li>Evaluation Order</li>
              <ul>
                <li><span style={{color: '#39c0ba'}}>bottom to top</span></li>
                <li><span style={{color: '#39c0ba'}}>right to left</span></li>
              </ul>
            <li>Two phases during evaluation</li>
              <ul>
                  <li><span style={{color: '#39c0ba'}}>pitching</span></li>
                  <li><span style={{color: '#39c0ba'}}>running</span></li>
              </ul>
          </ul>  
        </div>
      </div>
    </Section>
  );
}