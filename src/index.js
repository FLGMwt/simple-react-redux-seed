import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

function counter(state = 0, action) {
  return state + 1;
}

const store = createStore(counter);

console.log(store.getState());

const App = () => <h1>Yo</h1>;

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
