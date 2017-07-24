import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table as TableBase } from './Table';
import $ from 'jquery';
// See documentation for datatables here:
// https://datatables.net/manual
import dt from 'datatables.net';

class DataTable extends Component {
  render() {
    return (
      <TableBase>{this.props.children}</TableBase>
    )
  }
}


export default DataTable;
