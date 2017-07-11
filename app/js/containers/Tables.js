import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from '../components/Tables';

class Tables extends Component {

  render() {
    return (
      <div className="primary-container flex-wrapper tables-container">
        <h1>Tables</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>
                One
              </TableHeaderColumn>
              <TableHeaderColumn>
                Two
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>
                A
              </TableRowColumn>
              <TableRowColumn>
                B
              </TableRowColumn>
              <TableRowColumn>
                C
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Tables;
