import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `

const path = require('path');

module.exports = {
  /* ... */ 
  output: {
    path: path.resolve(__dirname, './assets'),
    publicPath: '//path.to.your.cdn.com/assets/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',

    libraryTarget: 'umd',
    library: 'Demo' // global
  }
  /* ... */
};

`;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Loaders</h5>
         <Code type={'javascript'}>
           {code.trim()}
         </Code>
        </div>
      </div>
    </Section>
  );
}