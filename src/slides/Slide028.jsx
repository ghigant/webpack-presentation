import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
require.context(
  directory, 
  useSubdirectories = false, 
  regExp = /^\.\//
)
  `;
  return (
    <Section title={'api - module'}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>require.context</h5>
          <Code type={'javascript'}>
            {code.trim()}
          </Code>
          <ul>
            <li>Directory to match within</li>
            <li>Boolean flag to include or exclude subdirectories</li>
            <li>Regular expression to match files against.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}