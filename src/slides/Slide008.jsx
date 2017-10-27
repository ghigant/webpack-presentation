import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
/**
 * entry: string | Array<string>
 */

module.exports = {
  // creates an "main entry"
  entry: './src/app.js' 
};

module.exports = {
  // creates an "multi-main entry"
  entry: [ './src/app.js', './lib/dependency.js']
};
  `;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Single Entry</h5>
          {/* <p>{'entry: string | Array<string>'}</p> */}
         <Code type={'javascript'}>
           {code.trim()}
         </Code>
        </div>
      </div>
    </Section>
  );
}