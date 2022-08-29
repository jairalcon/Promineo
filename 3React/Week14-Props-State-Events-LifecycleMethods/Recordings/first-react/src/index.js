import React from 'react';
import ReactDOM from 'react-dom';

// using REACT to create element with tag, props object, and content(children) of element rendered 
let element = React.createElement('h1', {}, 'This is React!');
ReactDOM.render(element, document.getElementById('app'));