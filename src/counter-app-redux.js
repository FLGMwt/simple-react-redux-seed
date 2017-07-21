import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

class PureCounter extends Component {
  render() {
    return  (
      <div>
        <div>
          Click count: {this.props.count}
        </div>
        <button onClick={this.props.onClick}>Add One</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state,
  };
};
const mapDispatchToProps = dispatch =>  {
  return {
    onClick: () => {
      dispatch({type: 'INCREMENT'});
    }
  }
};
const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PureCounter);

const store = createStore(
  counter
  // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class CounterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}
