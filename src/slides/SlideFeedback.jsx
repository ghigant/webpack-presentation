import React from 'react';
import Section from '../components/Section.jsx';
import feedback from './images/feedback.png';

export default function Slide() {
  const styles = {
    margin: 0
  }
  return (
    <Section background={'#fff'}>
      <img style={styles} src={feedback}/>
    </Section>
  );
}