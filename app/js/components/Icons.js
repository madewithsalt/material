import React, { Component } from 'react';

export const Icon = (props) => (
  <i className={`${props.className ? props.className : ''} material-icons`}>{props.children}</i>
)


export class SvgIcon extends Component {
  render() {
    const {
      children,
      ...other
    } = this.props;

    return (
      <svg
        {...other}
      >
        {children}
      </svg>
    )
  }
}
