import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
module.exports = {
  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "styles.css", 
      allChunks: true
    })
  ]
} 
  `;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Plugins: ExtractTextPlugin </h5>
          <Code type={'javascript'}>
            {code.trim()}
          </Code>
        </div>
      </div>
    </Section>
  );
}