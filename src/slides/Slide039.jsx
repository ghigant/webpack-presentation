import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';
import chart from './images/chart.png'

export default function Slide() {
  return (
    <Section title={'optimisations'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>module.noParse</h5>
          <Code type={'javascript'}>
            {(`
module.exports = {
  /* ... */
  module: {
    noParse: /angular\\/angular\.js$/
  }
  /* ... */
};
            `).trim()}
          </Code>
          <p style={{textTransform: 'initial', textAlign: 'left'}}>Don't do that</p>
          <ul>
            <li>noParse: <span style={{color: '#39c0ba'}}>/angular/</span></li>
            <li>noParse: <span style={{color: '#39c0ba'}}>/node_modules/</span></li>
          </ul>
         </div>
      </div>
    </Section>
  );
} 