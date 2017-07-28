import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeElement from '../docs/CodeElement';

class Button extends Component {
  render() {
    const {
      name,
      floating,
      flat,
      size,
      className,
      onClick
    } = this.props;

    const classes = [
      'btn',
      `${className || ''}`,
      `${flat ? 'btn-flat': ''}`,
      `${floating ? 'btn-floating': ''}`,
      `${size || ''}`
    ];

    return (
      <button className={classes.join(' ')}
          onClick={onClick}>{this.props.children}</button>
    );
  }
}

Button.defaultProps = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
