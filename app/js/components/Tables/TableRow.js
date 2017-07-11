import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children
    } = this.props;

    return(
      <tr>{children}</tr>
    )
  }

}
