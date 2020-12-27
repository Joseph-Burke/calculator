import React, { Component } from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = buttonName => {
    const { data } = this.state;
    try {
      this.setState({ data: calculate(data, buttonName) });
    } catch (error) {
      this.setState({
        data: {
          next: error.message,
        },
      });
    }
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Display result={data.next ? data.next : data.total} />
        <ButtonPanel data={data} inputHandler={this.handleInput} />
      </>
    );
  }
}
