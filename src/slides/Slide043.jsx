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
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>Long Term Caching</h5>
          <p>Separate manifest</p>
          <Code type={'javascript'}>
            {(`
module.exports = {
  /* ... */
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      // minChunks: Infinity
    }),
    new CommonsChunkPlugin({
      name: 'manifest',
      minChunks: 3
    })
  ]
}
            `).trim()}
          </Code>
         </div> 
      </div>
    </Section>
  );
} 