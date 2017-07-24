import React, { Component } from 'react';

import {
  DataTable,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from '../components/Tables';
import CodeElement from '../docs/CodeElement';
import faker from 'faker';
import { times } from 'lodash';

let sampleData = [];
times(50, (i) => {
  sampleData.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    title: faker.name.title()
  });
});


class Tables extends Component {

  render() {
    const dataKeys = Object.keys(sampleData[0]);

    return (
      <div className="primary-container flex-wrapper tables-container">
        <h1>Tables</h1>
        <Table>
          <TableHeader>
            <TableRow>
              {dataKeys.map((val) => {
                return (
                  <TableHeaderColumn key={val}>{val}</TableHeaderColumn>
                )
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((data) => {
              return (
                <TableRow>
                    { dataKeys.map((key) => {
                      return (
                        <TableRowColumn key={data[key]}>
                          {data[key]}
                        </TableRowColumn>
                      )
                    })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <div className="col m6">
          <h5>Code Example</h5>
          <CodeElement react>
            {
              `
<Table>
  <TableHeader>
    <TableRow>
      <TableHeaderColumn>
        // ...
      </TableHeaderColumn>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableRowColumn>
        // ...
      </TableRowColumn>
    </TableRow>
  </TableBody>
</Table>
              `
            }
          </CodeElement>
        </div>
      </div>
    );
  }
}

export default Tables;
