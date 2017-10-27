import React, {Component} from 'react';
import 'highlightjs/styles/atom-one-light.css'
export default function ({type, children}) {
  return (
    <pre style={{width: '100%'}}>
      <code className={type} style={{maxHeight: 'none'}} data-trim data-noescape>
        {children}
      </code>
    </pre>
  );
}