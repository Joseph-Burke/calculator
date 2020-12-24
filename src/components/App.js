import React, { Component } from 'react';
import PropTypes from "prop-types";
import Big from 'big.js';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        total: null,
        next: null,
        operation: null
      }
    };

    this.handleInput = this.handleInput.bind(this);
  };

  render() {
    const data = this.state.data;
    return (
      <>
        <Display result={data.total} />
        <ButtonPanel data={data} inputHandler={this.handleInput} />
      </>
    )
  }

  handleInput = buttonName => {
    this.setState({
      data: calculate(this.state.data, buttonName)
    });
  }
};
