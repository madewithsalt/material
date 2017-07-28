import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const {
      name,
      floating,
      flat,
      large,
      className,
      disabled,
      style,
      onClick
    } = this.props;

    const classes = [
      'btn',
      `${disabled ? 'disabled':''}`,
      `${large ? 'btn-large':''}`,
      `${className || ''}`,
      `${flat ? 'btn-flat':''}`,
      `${floating ? 'btn-floating':''}`
    ];

    return (
      <button className={classes.join(' ')} disabled={disabled}
          style={style || {}}
          onClick={onClick}>{this.props.children}</button>
    );
  }
}

Button.defaultProps = {
  onClick: PropTypes.func.isRequired
}
