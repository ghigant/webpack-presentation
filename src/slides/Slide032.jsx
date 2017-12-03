import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
>> webpack --profile --json > webpack-stats.json
  `;
  return (
    <Section title={'api - cli'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>--profile to json</h5>
          <Code type={'bash'}>
            {code.trim()}
          </Code>
          <h5 style={{textTransform: 'initial'}}>Plugin</h5>
          <Code type={'javascript'}>
            {`const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  plugins: [
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    })
  ]
};`}
          </Code>
        </div>
      </div>
    </Section>
  );
}