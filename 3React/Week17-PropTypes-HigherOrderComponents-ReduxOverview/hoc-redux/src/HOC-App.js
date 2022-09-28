import React from 'react'
import Hello from './hoc-components/Hello';

function HOCApp() {
    // create new variable with components passed into HOC
    // const HelloWithRedBorder = withRedBorder(Hello);

  return (
      <Hello />
  );
}

export default HOCApp;