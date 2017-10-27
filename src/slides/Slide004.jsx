import React from 'react';
import Section from '../components/Section.jsx';

export default function Slide() {
  return (
    <Section title={'webpack'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', marginTop: '0', textAlign: 'left'}}>
          <ul>
            <li><b style={{color: '#39c0ba'}}>Bundler</b>, not a task runner</li>
            <li>Bundles everything</li>
            <li>Flexible</li>
            <li>CommonJS, AMD, ES6</li>
            <li><b style={{color: '#39c0ba'}}>npm</b> is commonly used for managing tasks</li>
            <li>Configuration driven</li>
            <li>Powerful <b style={{color: '#39c0ba'}}>CLI</b></li>
            <li>Vast ecosystem w/ strange API</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}