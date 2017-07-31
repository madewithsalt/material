import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
// See documentation for datatables here:
// https://datatables.net/manual
import dt from 'datatables.net';
dt();

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.datatable) {
      $(this.table).DataTable(this.props.options || {});
    }
  }

  render() {
    const {
      className,
      bordered,
      striped,
      highlight,
      centered,
      responsive,
      children,
      style
    } = this.props;

    const classes = [
      `${className || ''}`,
      `${striped ? 'striped' : ''}`,
      `${bordered ? 'bordered' : ''}`,
      `${highlight ? 'highlight' : ''}`,
      `${centered ? 'centered' : ''}`,
      `${responsive ? 'responsive-table' : ''}`
    ];


    return (
      <table style={style || {}}
        className={classes.join(' ')} ref={(t) => { this.table = t }}>
        {children}
      </table>
    )
  }
}
