import React, { Component } from 'react';
import {
  Input,
  TextArea
} from '../components/Forms';

function onInputChange(val, evt) {
  console.log('input change trigger: ', val);
}

export default class Home extends Component {
  renderCode(id) {
    debugger;
  }

  render() {
    return (
      <div className="primary-container home-container flex-wrapper">
          <h1>Material</h1>
          <p>
            An adaptation of React components and SASS styles inspired by Material-UI and Materialize.
          </p>
          <h3>Additional Reference</h3>
          <p>
            Styles adapted from: <a href="http://materializecss.com" target="_blank">http://materializecss.com</a>.
          </p>
          <h3>THIS IS A WORK IN PROGRESS</h3>
          <p>While the styles are very complete thanks to the hard work of the materialize folks,
            the React Components are still being built.</p>
      </div>
    )
  }
}
