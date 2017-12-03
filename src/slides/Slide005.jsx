import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const config = `
// minimal configuration
module.exports = {
  entry: './app.js',
  output: {
    filename: 'app.bundle.js'
  }
};`;

  const install = `
# installation
> npm i webpack -S
  `;
  return (
    <Section title={'quick start'}>
       <Code type="bash">
        {install.trim()}
      </Code>
      <Code type="javascript">
        {config.trim()}
      </Code>
      <Code type="bash">
        {(`
# run
>> webpack [--config webpack.config.js]
>> ./node_modules/.bin/webpack app.js app.bundle.js 
        `).trim()}
      </Code>
    </Section>
  );
}