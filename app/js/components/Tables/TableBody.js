import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children
    } = this.props;

    return(
      <tbody>{children}</tbody>
    )
  }

}
