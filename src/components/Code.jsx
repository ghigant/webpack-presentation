import React, {Component} from 'react';
import 'highlightjs/styles/atom-one-light.css'
export default function ({type, children}) {
  return (
    <pre>
      <code className={type} data-trim data-noescape>
        {children}
      </code>
    </pre>
  );
}