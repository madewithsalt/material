import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children
    } = this.props;
    return (
      <thead>{children}</thead>
    )
  }

}
