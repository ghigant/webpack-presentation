import React from 'react';
import Section from '../components/Section.jsx';

export default function Slide() {
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h4 style={{textTransform: 'initial'}}>Core concepts</h4>
          <ul>
            <li><b style={{color: '#39c0ba'}}>Entries</b> - Where to start bundling?</li>
            <li><b style={{color: '#39c0ba'}}>Output</b> - Where to output?</li>
            <li><b style={{color: '#39c0ba'}}>Loaders</b> - How to transform?</li>
            <li><b style={{color: '#39c0ba'}}>Plugins</b> - How to bundle?</li>
            {/* <li><b style={{color: '#39c0ba'}}>Resolve</b> - Where to find dependencies?</li> */}
          </ul>
        </div>
      </div>
    </Section>
  );
}