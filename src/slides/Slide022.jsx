import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
{
  "scripts": {
    "dev": "webpack-dev-server --env dev",
    "build": "webpack --env build",
    "test": "webpack --env test"
  }
}
  `;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>npm: Task Runner</h5>
          <Code type={'json'}>
            {code.trim()}
          </Code>
        </div>
      </div>
    </Section>
  );
}