import React, { Component } from 'react';
import PropTypes from "prop-types";
import Big from "big.js";
import calculate from '../logic/calculate';

export default class Button extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    const data = this.props.data;
    const name = this.props.name;
    const processInput = this.props.processInput;
    return (
      <button
        onClick={() => processInput(name)}
        >
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};