import React, { Component } from 'react';
import { render } from 'react-dom';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';
import Reveal from 'reveal.js';
import config from './config';

const context = require.context('./slides', false, /\.(jsx|js)$/);
class App extends Component {
  componentDidMount() {
    Reveal.initialize(config);
  }

  render() {
    return (
      <div className="slides">
        { 
          context.keys().map((slide) => {
            return (
              <section key={slide}>{context(slide)()}</section>
            )
          })
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('viewport'));
