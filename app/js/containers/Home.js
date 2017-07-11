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
          <h1>Material </h1>


      </div>
    )
  }
}
