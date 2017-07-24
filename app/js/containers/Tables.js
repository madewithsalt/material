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

function renderTableExample(props={}) {
  const dataKeys = Object.keys(sampleData[0]);

  return (
    <Table {...props} style={{marginBottom: '20px'}}>
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
            <TableRow key={`row-${idx}`}>
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
  )
}


class Tables extends Component {

  render() {
    return (
      <div className="primary-container flex-wrapper tables-container">
        <h1>Tables</h1>
        <h4>Standard Table</h4>
        { renderTableExample() }
        <CollapsibleGroup maxHeight='300px'>
          <div title="Standard Table Code Sample">
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
        </CollapsibleGroup>
        <h3>Available Styles</h3>
        <h5>Striped Table</h5>
        { renderTableExample({ striped: true })}
        <CodeElement react>
          {
            `
<Table striped>
  // ...
</Table>
            `
          }
        </CodeElement>
        <hr/>
        <h5>Highlight on Hover</h5>
        { renderTableExample({ highlight: true })}
        <CodeElement react>
          {
            `
<Table highlight>
  // ...
</Table>
            `
          }
        </CodeElement>
        <hr/>
        <h5>Centered</h5>
          { renderTableExample({ centered: true })}
          <CodeElement react>
            {
              `
  <Table centered>
    // ...
  </Table>
              `
            }
          </CodeElement>
          <hr/>
          <h5>Bordered</h5>
            { renderTableExample({ bordered: true })}
            <CodeElement react>
              {
                `
    <Table bordered>
      // ...
    </Table>
                `
              }
            </CodeElement>
            <hr/>
            <h5>Responsive</h5>
              { renderTableExample({ responsive: true })}
              <CodeElement react>
                {
                  `
      <Table responsive>
        // ...
      </Table>
                  `
                }
              </CodeElement>
              <hr/>
              <h5>The Works!</h5>
                { renderTableExample({
                  centered: true,
                  responsive: true,
                  bordered: true,
                  striped: true,
                  highlight: true
                })}
                <CodeElement react>
                  {
                    `
        <Table highlight bordered centered striped responsive>
          // ...
        </Table>
                    `
                  }
                </CodeElement>
      </div>
    );
  }
}

export default Tables;
