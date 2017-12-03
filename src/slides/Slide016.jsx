import React from 'react';
import Section from '../components/Section.jsx';
import Code from '../components/Code.jsx';

export default function Slide() {
  const code = `
const {stringifyRequest} = require('loader-utils');

module.exports = function(content, sourceMap) {
  return someSyncOperation(content, this.data.value);
};

module.exports.pitch = function(remainingReq, precedingReq, data) {
  if(someCondition()) {
    // -! prevent preloader execution
    // !! prevent postloader execution
    return \`
      require(\${stringifyRequest(this, '-!' + remainingReq)}); 
    \`;
  }
  data.value = 'CodeCamp';
};
  `;
  return (
    <Section title={'configuration'}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', height: '100%' }}>
        <div style={{flex: '1 0', textAlign: 'left'}}>
          <h5 style={{textTransform: 'initial'}}>Loaders: How to write one</h5>
          <Code type={'javascript'}>
            {code.trim()}
          </Code>
        </div>
      </div>
    </Section>
  );
}