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
          <h5 style={{textTransform: 'initial', textAlign: 'left'}}>Bundle size</h5>
          <Code type={'javascript'}>
            {(`
import moment from 'moment';
// inside moment
import('./locale/' + name + '.json') => context 

new webpack.ContextReplacementPlugin(
  /moment[\\\/\\\\]locale$/, 
  /de|fr|en/
);

new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);

            `)}
          </Code>
         </div> 
      </div>
    </Section>
  );
} 