import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';
import chart from './images/chart.png'

export default function Slide() {
  return (
    <Section title={'api - analysis tools'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>Might be helpful</h5>
          <ul>
            <li><span style={{}}>webpack-chart</span></li>
            <li><span style={{}}>Webpack Bundle Analyzer</span></li>
            <li><span style={{}}>webpack-bundle-size-analyzer</span></li>
          </ul>
         </div>
      </div>
    </Section>
  );
} 