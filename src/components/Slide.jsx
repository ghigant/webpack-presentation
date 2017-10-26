import React, {Component} from 'react';
import {
  width, 
  height
} from '../config.js'
export default class Slide extends Component {
  render() {
    const styles = {display: 'flex', flexDirection: 'column'}; 
    return (
      <article style={styles}>
        {
          this.props.title && (
            <header style={{textAlign: 'left', flex: '0 1'}}>
              <p>{this.props.title}</p>
            </header>
          )
        }
        <main style={{flex: '1 1'}}>
          {this.props.children}
        </main>
      </article>
    );
  }
}