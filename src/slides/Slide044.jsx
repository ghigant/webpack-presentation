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
          <p>Include hash in filename</p>
          <ul>
            <li><span style={{}}>output.filename = '[name].[chunkhash].js'</span></li>
            <li><span></span>webpack-md5-hash</li>
          </ul>
         </div> 
      </div>
    </Section>
  );
} 