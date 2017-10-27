import React from 'react';
import Section from '../components/Section.jsx';

export default function Slide() {
  return (
    <Section>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
        <div style={{flex: '1 1'}}>
          <h2 style={{
            textTransform: 'initial', 
            transform: 'translateY(-50%)',
            color: '#39c0ba'
          }}>
            {'Configuration'}
          </h2>
        </div>
      </div>
    </Section>
  );
}
