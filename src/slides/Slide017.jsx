import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
const HtmlWebpackPlugin = require('html-webpack-plugin'); // npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  /* ... */
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      ...params
    }),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  /* ... */
}; 
  `;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Plugins</h5>
          <Code type={'javascript'}>
            {code.trim()}
          </Code>
        </div>
      </div>
    </Section>
  );
}