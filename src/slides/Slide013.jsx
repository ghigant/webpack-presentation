import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
import 'style-loader!css-loader!./styles.css';
import logo from 'file-loader!./logo.png';
import Logo from 'coffee-loader!./Logo.coffe';
`;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Loaders: Inline Usage</h5>
         <Code type={'javascript'}>
           {code.trim()}
         </Code>
        </div>
      </div>
    </Section>
  );
}