import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    console.log('tick');
    this.setState({ date: new Date() });
  }

  // handleClick() {
  //   alert(this.state.date);
  // }

  // arrow function으로 생성하면, global scope로 잡히기 때문에 method bind를 할 필요 없음
  handleClick = () => {
    alert(this.state.date);
  };

  render() {
    console.log('render');

    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
