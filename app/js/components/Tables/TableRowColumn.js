import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableRowColumn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children
    } = this.props;

    return(
      <td>{children}</td>
    )
  }

}
