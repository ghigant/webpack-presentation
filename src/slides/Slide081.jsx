import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  return (
    <Section title={'configuration'}>
      <Code type="javascript">
        {`module.exports = ${JSON.stringify({
            entry: './app.js',
            output: {
              filename: 'app.bundle.js'
            }
          }
        , null, 2)
        };`}
      </Code>
    </Section>
  );
}