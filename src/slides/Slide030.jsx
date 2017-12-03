import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
>> webpack -h | --help
>> webpack -w | --watch
>> webpack -d
    --debug 
    --devtool cheap-module-eval-source-map 
    --output-pathinfo
>> webpack -p 
    --optimize-minimize 
    --define process.env.NODE_ENV="production"
  
  `;
  return (
    <Section title={'api - cli'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>shortcuts</h5>
          <Code type={'bash'}>
            {code.trim()}
          </Code>
        </div>
      </div>
    </Section>
  );
}