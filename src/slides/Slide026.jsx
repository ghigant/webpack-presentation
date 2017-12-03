import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
// ES6 module import
import React from 'react';

// async import
import(dependency: String) => Promise;

// async import with parameters
import(
  /* webpackChunkName: "chunk-name" */
  /* webpackMode: "lazy"(default) | "eager" | ... */
  'module'
);
  `;
  return (
    <Section title={'api - module'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>import</h5>
          <Code type={'javascript'}>
            {code.trim()}
          </Code>
        </div>
      </div>
    </Section>
  );
}