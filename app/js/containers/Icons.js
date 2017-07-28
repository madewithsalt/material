import React from 'react';
import {Icon} from '../components/Icons';
import {Button} from '../components/Button';
import CodeElement from '../docs/CodeElement'


const Icons = (props) => (
  <div className="primary-container flex-wrapper">
    <h1>Icons</h1>
    <p>All icons in Material Icons v3.0.1 are available to use.</p>
    <p>Documentation:  <a href="https://material.io/icons/" target="_blank">https://material.io/icons/</a></p>
    <div className="row">
      <div className="col s6">
        <h5>Standalone Icon</h5>
        <Icon>star</Icon>
        <CodeElement react>{"<Icon>star</Icon>"}</CodeElement>
      </div>
      <div className="col s6">
        <h5>Icon in a Button</h5>
        <Button><Icon>star</Icon> Favorite</Button>
        <CodeElement react>
          {`
<Button><Icon>star</Icon> Favorite</Button>
            `}
        </CodeElement>
      </div>
    </div>
  </div>
)

export default Icons;
