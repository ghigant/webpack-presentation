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
    import('highlightjs').then((highlight) => {
      highlight.initHighlightingOnLoad()
    });
  }

  render() {
    return (
      <div className="slides">
        {
          context.keys().map((slide, index) => {
            // if(index === 0) {
            //   return <section data-background-color="#fff" key={slide}>{context(slide)()}</section>
            // }
            const Slide = context(slide);
            return <Slide key={slide}/>
            // return (
            //   <section 
            //     style={{height: '100%'}} 
            //     data-background-color="#2B3A42" 
            //     key={slide}>{context(slide)({
            //       key: slide
            //     })}
            //   </section>
            // )
          })
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('viewport'));
