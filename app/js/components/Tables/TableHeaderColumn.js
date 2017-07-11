import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableHeaderColumn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      width,
      children
    } = this.props;

    const classes = [
      `${className || ''}`
    ];

    return (
      <th className={classes.join(' ')}>{children}</th>
    )
  }

}
