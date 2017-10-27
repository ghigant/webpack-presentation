import React from 'react';
import Section from '../components/Section.jsx';
import sponsors from './images/sponsors.png';

export default function Slide() {
  const styles = {
    margin: 0,
    // boxShadow: 'none',
    // border: '0 none'
    height: 650
  }
  return (
    <Section background={'#fff'}>
      <img style={styles} src={sponsors}/>
    </Section>
  );
}