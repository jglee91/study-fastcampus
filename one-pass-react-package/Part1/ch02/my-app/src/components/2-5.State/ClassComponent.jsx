import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // render가 되자마자 실행되는 함수
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // component가 사라지기 전에 실행되는 함수
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
