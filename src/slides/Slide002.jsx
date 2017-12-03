import React from 'react';
import Section from '../components/Section.jsx';
import family from './images/family.jpg'

export default function Slide() {
  return (
    <Section title={'Valentin Boțoc'}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img style={{ margin: 0, border: 'none', height: 540}}src={family} />
      </div>
    </Section>
  );
}
