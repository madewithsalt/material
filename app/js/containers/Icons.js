import React from 'react';
import {Icon} from '../components/Icons';
import CodeElement from '../docs/CodeElement'


const Icons = (props) => (
  <div className="primary-container flex-wrapper">
    <h1>Icons</h1>
    <p>All icons in Material Icons v3.0.1 are available to use.</p>
    <div className="row">
      <div className="col s3">
        <h5>Standalone Icon</h5>
        <Icon>star</Icon>
        <CodeElement react>{"<Icon>star</Icon>"}</CodeElement>
      </div>
      <div className="col s3">
        <h5>Icon in a Button</h5>
      </div>
    </div>
  </div>
)

export default Icons;
