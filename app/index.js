import 'react';
import 'purecss';
import './main.css';
import component from './component';
import { bake } from './shake'; bake();

let demoComponent = component();

document.body.appendChild(demoComponent);

// HMR interface
if(module.hot) {
  // Capture hot update
  module.hot.accept('./component', () => {
    console.log('hello!');
    // We have to go through CommonJS here and capture the
    // default export explicitly!
    const nextComponent = require('./component').default();

    // Replace old content with the hot loaded one
    document.body.replaceChild(nextComponent, demoComponent);

    demoComponent = nextComponent;
  });
}
