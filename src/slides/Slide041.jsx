import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';
import chart from './images/chart.png'

export default function Slide() {
  // style={{color: '#39c0ba'}} 
  return (
    <Section title={'optimisations'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>Vendor Dependencies</h5>
          <p>DllPlugin</p>
          <Code type={'javascript'}>
            {(`
// webpack.vendor.config.js
new webpack.DllPlugin({
  context: __dirname,
  name: "[name]_[hash]",
  path: path.join(__dirname, "manifest.json"),
})`).trim()}
          </Code>
         </div>
      </div>
    </Section>
  );
} 