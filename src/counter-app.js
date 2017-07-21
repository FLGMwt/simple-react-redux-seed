import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class CounterApp extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
}

class Counter extends Component {
  state = {count: 0}

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <div>
          Count: {this.state.count}
        </div>
        <div>
          <button onClick={this.handleClick}>Embiggen</button>
        </div>
      </div>
    );
  }
}