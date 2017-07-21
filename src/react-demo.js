import React from 'react';
import ReactDOM from 'react-dom';

import CounterApp from './counter-app';
import CounterAppComplicated from './counter-app-complicated';
import CounterAppRedux from './counter-app-redux';
import CounterAppReduxComplicated from './counter-app-redux-complicated';


ReactDOM.render(
  <CounterApp />,
  document.getElementById('app')
);

// ReactDOM.render(
//   <CounterAppComplicated />,
//   document.getElementById('app')
// );

// ReactDOM.render(
//   <CounterAppRedux />,
//   document.getElementById('app')
// );

// ReactDOM.render(
//   <CounterAppReduxComplicated />,
//   document.getElementById('app')
// );
