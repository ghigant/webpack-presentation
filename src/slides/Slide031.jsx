import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
>> webpack --profile [--display-modules --display-reasons]
>> ⋮
>> [0] ./src/index.js 90 bytes {0} [built]
>>  factory:22ms building:16ms = 38ms  
  `;
  return (
    <Section title={'api - cli'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>helpful  options</h5>
          <Code type={'bash'}>
            {code.trim()}
          </Code>
          <ul style={{fontSize: '.7em'}}>
            <li><span style={{color: '#39c0ba'}}>factory</span>: time to collect module metadata (e.g. resolving the filename)</li>
            <li><span style={{color: '#39c0ba'}}>building</span>: time to build the module (e.g. loaders and parsing)</li>
            <li><span style={{color: '#39c0ba'}}>dependencies</span>: time to identify and connect the module’s dependencies</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}