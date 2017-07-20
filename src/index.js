import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

const INCREMENT = 'INCREMENT';

function increment() {
  return {type: INCREMENT};
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

class RawApp extends Component {
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

const mapStateToProps = function(state) {
  return {
    count: state,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onClick: function() {
      dispatch(increment());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RawApp);

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
)
