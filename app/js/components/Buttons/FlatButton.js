import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlatButton extends Component {
  render() {
    const {
      name,
      className,
      onChange
    } = this.props;

    return (
      <button className={`btn btn-flat ${className || ''}`}>{name}</button>
    );
  }
}

FlatButton.defaultProps = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default FlatButton;
