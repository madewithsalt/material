import React, { Component } from 'react';
import Table from './Table';


class DataTable extends Component {
  render() {
    return (
      <Table ref="table" {...this.props} datatable>
        {this.props.children}
      </Table>
    )
  }
}


export default DataTable;
