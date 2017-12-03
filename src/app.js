import React, { Component } from 'react';
import { render } from 'react-dom';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

import Reveal from 'reveal.js';
import config from './config';

const context = require.context('./slides', true, /\.(jsx)$/);

class App extends Component {
  componentDidMount() {
    Reveal.initialize(config);
    import('highlightjs').then((highlight) => {
      highlight.initHighlightingOnLoad()
    });
  }

  render() {
    return (
      <div className="slides">
        {
          context.keys().map((slide, index) => {
            const Slide = context(slide);
            return <Slide key={slide} />
            
          })
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('viewport'));
