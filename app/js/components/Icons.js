import React from 'react';

export const Icon = (props) => (
  <i className={`${props.className ? props.className : ''} material-icons`}>{props.children}</i>
)
