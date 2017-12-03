import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
 
require(\`./locales/\${lang}.js\`)

import(\`./locales/\${lang}.js\`)


  `;
  return (
    <Section title={'api - module'}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>import/require expresions</h5>
          <Code type={'javascript'}>
            {code.trim()}
          </Code>
          <ul>
            <li>Directory: <span style={{color: '#39c0ba'}}>./locales</span></li>
            <li>Expresion: <span style={{color: '#39c0ba'}}>/^.*\.js$/</span></li>
          </ul>
          <Code type={'javascript'}>
            {`
require.context('./locales', false, /^.*\.js$/)
`}
          </Code>

        </div>
      </div>
    </Section>
  );
}