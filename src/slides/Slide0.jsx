import React from 'react';
import Slide from '../components/Slide.jsx';
import sponsors from './images/sponsors.png';
export default function () {
  const styles = {
    margin: 0,
    boxShadow: 'none',
    border: '0 none'
  }
  return (
    <Slide>
      <img style={styles} src={sponsors}/>
    </Slide>
  );
}