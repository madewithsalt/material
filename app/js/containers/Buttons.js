import React, { Component } from 'react';
import CodeElement from '../docs/CodeElement';

import {Button} from '../components/Button';
import {Icon} from '../components/Icons';

function onClickEvent(evt) {
  console.log('button click event!: ', evt);
}

export default class Buttons extends Component {
  render() {
    return(
      <div className="primary-container flex-wrapper">
        <h1>Buttons</h1>
        <hr/>
        <h4>Standard Button</h4>
        <Button onClick={onClickEvent}>Hello There.</Button>
        <CodeElement react>
          {`
<Button onClick={onClickEvent}>Hello There.</Button>
            `}
        </CodeElement>
        <hr/>
        <h4>Flat Button</h4>
        <Button flat onClick={onClickEvent}>I'm So Flat.</Button>
        <CodeElement react>
          {`
<Button flat onClick={onClickEvent}>I'm So Flat.</Button>
            `}
        </CodeElement>
        <hr/>
        <h4>Floating Button</h4>
        <p>Circular button, with space for a single letter or an icon.</p>
        <Button floating onClick={onClickEvent}><Icon>add</Icon></Button>
        <CodeElement react>
          {`
<Button floating onClick={onClickEvent}><Icon>add</Icon></Button>
            `}
        </CodeElement>
        <hr/>
        <h4>Large</h4>
        <Button large onClick={onClickEvent}>Large Button</Button>
        <CodeElement react>
          {`
<Button large onClick={onClickEvent}>Large Button</Button>
            `}
        </CodeElement>
        <hr/>
          <h4>Disabled</h4>
          <Button disabled onClick={onClickEvent}>No Clicky</Button>
          <CodeElement react>
            {`
<Button disabled onClick={onClickEvent}>No Clicky</Button>
              `}
          </CodeElement>
          <hr/>
          <h4>Other Properties</h4>
          <p className="code-prop"><code>className (String)</code></p>
          <p>Appends any additional classes to the button.</p>

          <p className="code-prop"><code>style (Object)</code></p>
          <p>Applies any styles provided to the button.</p>

          <p className="code-prop"><code>onChange (function)</code></p>
          <p>Required. Triggered on click.</p>

      </div>
    )
  }
}
