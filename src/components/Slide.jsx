import React, {Component} from 'react';
import {
  width, 
  height
} from '../config.js'
export default class Slide extends Component {
  render() {
    const styles = {width, height}; 
    return (
      <article style={{}}>
        {
          this.props.title && (
            <header style={{textAlign: 'left'}}><h4>{this.props.title}</h4></header>
          )
        }
        <main>
          {this.props.children}
        </main>
      </article>
    );
  }
}