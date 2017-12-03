import React from 'react';
import Section from '../components/Section.jsx';

export default function Slide() {
  return (
    <Section title={'why webpack?'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', marginTop: '0', textAlign: 'left'}}>
          <ul>
            <li>Quick start</li>
            <li>Bundles everything</li>
            <li>Flexible</li>
            <li>Good documentation <span style={{color: '#39c0ba'}}>v2+</span></li>
            <li>Hot Module Replacement</li>
            <li>Tree Shaking</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}