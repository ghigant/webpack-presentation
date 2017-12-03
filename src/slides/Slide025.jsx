import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
// commonJS module
require(dependency: String);

// AMD module
require(dependencies: String[], [callback: function(...) {}]);

// AMD module
require.ensure(
  dependencies: String[], callback: function(require), 
  errorCallback: function(error), chunkName: String
);   
  `;
  return (
    <Section title={'api - module'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>require</h5>
          <Code type={'javascript'}>
            {code.trim()}
          </Code>
        </div>
      </div>
    </Section>
  );
}