import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class CounterApp extends Component {
  state = {counterCount: 0};

  handleCounterIncrement = () => {
    this.setState({
      counterCount: this.state.counterCount + 1,
    });
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.counterCount} />
        <hr />
        <Counter
          count={this.state.counterCount}
          handleIncrement={this.handleCounterIncrement}/>
      </div>
    )
  }
}

class CounterDisplay extends Component {
  render() {
    return (
      <h3>Important Count: {this.props.count}!</h3>
    );
  }
}

class Counter extends Component {
  render() {
    return (
      <div>
        <div>
          Count: {this.props.count}
        </div>
        <div>
          <button onClick={this.props.handleIncrement}>Embiggen</button>
        </div>
      </div>
    );
  }
}