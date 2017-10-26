import React from 'react';
import Slide from '../components/Slide.jsx';

export default function () {
  return (
    <Slide title={'webpack'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', marginTop: '0', textAlign: 'left'}}>
          <ul>
            <li><b>Bundler</b>, not a task runner</li>
            <li>Bundles everything</li>
            <li>Flexible</li>
            <li>CommonJS, AMD</li>
            <li><b>npm</b> is commonly used for managing tasks</li>
            <li>Configuration driven</li>
            <li>Powerful <b>CLI</b></li>
            <li>Vast ecosystem w/ strange API</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}