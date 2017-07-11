import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children
    } = this.props;

    return(
      <tfoot>{children}</tfoot>
    )
  }

}
