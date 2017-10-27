import React, {Component} from 'react';
import {
  width,
  height
} from '../config.js';

export default function Section (props) {
  const styles = {display: 'flex', flexDirection: 'column', height: '100%'};
  return (
    <section data-background-color={props.background || '#2B3A42'} style={{height: '100%'}}>
      <article style={styles}>
        {
          props.title && (
            <header style={{textAlign: 'left', flex: '0 1 0', borderBottom: '1px solid #fafafa', marginBottom: '20px'}}>
              <p style={{marginBottom: 0, color: '#39c0ba'}}>{props.title}</p>
            </header>
          )
        }
        <main style={{flex: '1 1'}}>
          {props.children}
        </main>
      </article>
    </section>
  );
}

