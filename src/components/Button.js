import React, { Component } from 'react';

import PropTypes from "prop-types";
import Big from "big.js";

export default class Button extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <button>
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};