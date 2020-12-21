import React, { Component } from 'react';
import PropTypes from "prop-types";
import Big from "big.js";

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.result}</div>;
  }
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
