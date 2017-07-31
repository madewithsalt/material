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
import { CollapsibleGroup } from '../components/Collapsible';

import CodeElement from '../docs/CodeElement';
import faker from 'faker';
import { times, capitalize } from 'lodash';

let sampleData = [];
times(5, (i) => {
  sampleData.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    title: faker.name.title()
  });
});


class DataTables extends Component {

  render() {
    const dataKeys = Object.keys(sampleData[0]);

    return (
      <div className="primary-container flex-wrapper tables-container">
        <h2>Data Tables</h2>
        <p>
          Currently this Component is an intelligent wrapper around the very
        robust and feature-rich <a href="https://datatables.net/">jQuery DataTables.</a>
        </p>
        <p>Data tables accept all the styling options a regular table does.</p>
        <p>For detailed info about what you can do, see datatables manual on their website.</p>
        <hr/>
        <h5>Default Implementation</h5>
        <p>This is what you get if you pass in no options at all: Search, Sort, and Filtering with basic styles.</p>
        <Table datatable striped>
          <TableHeader>
            <TableRow>
              {dataKeys.map((val) => {
                return (
                  <TableHeaderColumn key={val}>
                    {capitalize(val)}
                  </TableHeaderColumn>
                )
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((data, idx) => {
              return (
                <TableRow key={`row-datatable-${idx}`}>
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
        <CodeElement react>
              {
                `
  <DataTable striped>
    // ... table content here.
  </DataTable>
                `
              }
        </CodeElement>
        <h4>Data Table Customization</h4>
        <p>
          Pass any configuration directly to the <code>DataTable</code>
        instance by adding an <code>options</code> prop.
        </p>
        <p>There's a rediculous number of options available, which can be referenced
        here: <a href="https://datatables.net/reference/option/">DataTables Option Reference </a></p>
        <hr/>
        <h6>Table with no paging, ordering, or info:</h6>
        <Table datatable options={{
            paging:   false,
            ordering: false,
            info:     false
        }}>
          <TableHeader>
            <TableRow>
              {dataKeys.map((val) => {
                return (
                  <TableHeaderColumn key={val}>
                    {capitalize(val)}
                  </TableHeaderColumn>
                )
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((data, idx) => {
              return (
                <TableRow key={`row-datatable-${idx}`}>
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
        <CodeElement react>
          {`
<DataTable options={{
      paging:   false,
      ordering: false,
      info:     false
  }}>
    // Table contents here ...
</DataTable>
            `}
        </CodeElement>
      </div>
    );
  }
}

export default DataTables;
