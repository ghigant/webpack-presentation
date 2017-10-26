import React from 'react';
import Slide from '../components/Slide.jsx';
import Code from '../components/Code.jsx';

export default function () {
  return (
    <Slide title={'Configuration'}>
      <Code type="javascript">
        {`module.exports = ${JSON.stringify({
            entry: './app.js',
            output: {
              filename: 'app.bundle.js'
            }
          }
        , null, 2)
        };`}
      </Code>
    </Slide>
  );
}