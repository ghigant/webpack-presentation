import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
{
  "scripts": {
    "dev": "webpack-dev-server --config config/webpack.dev.js",
    "build": "webpack --config config/webpack.prod.js",
    "test": "webpack --config config/webpack.test.js"
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