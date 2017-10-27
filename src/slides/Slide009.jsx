import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
/**
 * entry: {[entryChunkName: string]: string|Array<string>}
 */

module.exports = {
  entry: {
    home: './src/pages/home.js',
    contact: './scr/pages/admin.js',
    vendor: ['angular', 'ui-router']
  }
};
`;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Multiple Entries</h5>
         <Code type={'javascript'}>
           {code.trim()}
         </Code>
        </div>
      </div>
    </Section>
  );
}