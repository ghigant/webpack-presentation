import React from 'react';
import Section from '../components/Section.jsx';

export default function Slide() {
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h4 style={{textTransform: 'initial'}}>Plugins: Key Ideas</h4>
          <ul>
            <li>Evaluation <span style={{color: '#39c0ba'}}>top to bottom</span></li>
            <li>Order is significant</li>
            <li>Lifecycle hooks</li>
            <li>Complements loaders</li>
            <li>Implement tasks</li>
            <li>Combined with loaders <b style={{color: '#39c0ba'}}>ExtractTextPlugin</b></li>
          </ul>
        </div>
      </div>
    </Section>
  );
}