import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Button extends Component {
  constructor(props) {
    super(props)
  };

  render() {
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
  name: PropTypes.string.isRequired,
  processInput: PropTypes.func.isRequired
};
