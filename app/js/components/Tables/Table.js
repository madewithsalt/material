import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      bordered,
      striped,
      highlight,
      centered,
      responsive,
      children
    } = this.props;

    const classes = [
      `${className || ''}`,
      `${striped ? 'striped' : ''}`,
      `${highlight ? 'highlight' : ''}`,
      `${centered ? 'centered' : ''}`,
      `${responsive ? 'responsive-table' : ''}`
    ];


    return (
      <table className={classes.join(' ')}>{children}</table>
    )
  }
}
