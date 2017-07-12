import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

document.body.style.fontSize = '50px';

const INCREMENT = 'INCREMENT';

const increment = () => ({type: INCREMENT});

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

const RawApp = ({count, onClick}) => (
  <div>
    <div>
      Click count: {count}
    </div>
    <button onClick={onClick} style={{fontSize: 50}}>Add One</button>
  </div>
);

const App = connect(
  state => ({count: state}),
  {onClick: increment}
)(RawApp);

const store = createStore(counter);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
