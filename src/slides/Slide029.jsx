import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
const context = require.context('./slides', true, /\.(jsx)$/);

/* render */
<div className="slides">
{
  context.keys().map((slide) => {
    const Slide = context(slide);
    return <Slide key={slide} />
  })
}
</div>
/* ... */
  `;
  return (
    <Section title={'api - module'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>require.context - example</h5>
          <Code type={'javascript'}>
            {code.trim()}
          </Code>
        </div>
      </div>
    </Section>
  );
}