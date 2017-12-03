import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';
import chart from './images/chart.png'

export default function Slide() {
  return (
    <Section title={'optimisations'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>Loaders</h5>
          <ul>
            <li><span style={{}}>rule.exclude</span></li>
            <li><span style={{color: '#39c0ba'}}>rule.inlcude</span></li>
          </ul>
          <Code type={'bash'}>
            {`
>> [BABEL] Note: The code generator has deoptimised the styling of 
"/project/paht/node_modules/lodash/lodash.js" as it exceeds the max of "500KB".
            `}
          </Code>
         </div>
      </div>
    </Section>
  );
} 