import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    },{
      test: /\.js$/,
      enforce: 'pre', 
      loader: 'eslint-loader' 
    }, {
      test: /\.js$/,
      enforce: 'post',
      loader: 'istanbul-instrumenter-loader'
    }]
  }
};  
`;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Loaders: Enforcing Order</h5>
            <Code type={'javascript'}>
              {code.trim()}
            </Code>
        </div>
      </div>
    </Section>
  );
}