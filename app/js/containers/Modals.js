import React, { Component } from 'react';
import faker from 'faker';

import CodeElement from '../docs/CodeElement';
import {Modal} from '../components/Modal';
import {Button} from '../components/Button';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleModalOpen(refId) {
    const modalState = this.state[refId];
    let state = {};

    state[refId] = !modalState || true;
    this.setState(state);
  }

  render() {
    return (
      <div className="primary-container flex-wrapper">
        <h2>Modals</h2>
        <Button onClick={this.handleModalOpen.bind(this, 'modal_1')}>Click me</Button>
        <Modal ref="modal_1" open={this.state['modal_1'] || false}>
          <div>Modal Content</div>
        </Modal>
        <CodeElement react>
          {`
<Button onClick={this.handleModalOpen.bind(this, 'modal_1')}>Click me</Button>
<Modal ref="modal_1" open={this.state['modal_1']}>
  <div>Modal Content</div>
</Modal>
            `}
        </CodeElement>
        <h3>Modal Configuration Options</h3>
        <h4>Properties</h4>
        <p className="code-prop"><code>open (Boolean)</code></p>
        <p>Defaults to <code>false</code>.</p>

        <p className="code-prop"><code>buttonName (String)</code></p>
        <p>Defaults to <code>"Close"</code>.</p>

        <p className="code-prop"><code>className</code></p>
        <p>Optionally add classes to the modal element.</p>

        <p className="code-prop"><code>dismissible (Boolean)</code></p>
        <p>Modal can be dismissed by clicking outside of the modal. Defaults to <code>true</code>.</p>

        <p className="code-prop"><code>opacity (number)</code></p>
        <p>Opacity of the modal background. Defaults to <code>.5</code>.</p>

        <p className="code-prop"><code>inDuration (milliseconds)</code></p>
        <p>Transition "in" duration. Defaults to <code>300</code>.</p>

        <p className="code-prop"><code>outDuration (milliseconds)</code></p>
        <p>Transition "out" duration. Defaults to <code>200</code>.</p>

        <p className="code-prop"><code>startingTop (String, percent)</code></p>
        <p>Starting top style attribute. Defaults to <code>'4%'</code>.</p>

        <p className="code-prop"><code>endingTop (String, percent)</code></p>
        <p>Ending top style attribute. Defaults to <code>'10%'</code>.</p>

        <p className="code-prop"><code>cancelButton (boolean)</code></p>
        <p>Whether to include a cancel button. Defaults to <code>false</code>.</p>

        <p className="code-prop"><code>onBeforeClose (Function)</code></p>
        <p>Must return a <code>boolean</code>. If it returns <b>false</b>, the modal will cancel the closing action.</p>

        <p className="code-prop"><code>onClose (Function)</code></p>
        <p>A Function called after the close action has occurred. Use this to handle any post-modal closing cleanup actions.</p>
      </div>
    )
  }
}

export default Modals;
