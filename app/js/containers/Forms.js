import React, { Component } from 'react';
import {
  Input,
  TextArea
} from '../components/Forms';

function onInputChange(val, evt) {
  console.log('input change trigger: ', val);
}


class Forms extends Component {
  render() {
    return (
      <div className="primary-container flex-wrapper forms-container">
        <h1 name="forms">Form Fields</h1>
        <div className="row" ref={(d) => this.example1 = d }>
          <div className="col s6">
            <Input label="Example Text Field" onChange={onInputChange}
              name="sample_1" />
          </div>
          <div className="col s6">
            <Input label="Disabled Text Field" onChange={onInputChange}
              name="sample_2" disabled={true} value="I am not editable" />
          </div>
          <div className="col s6">
            <Input label="Password" onChange={onInputChange}
              type="password"
              name="sample_3" />
          </div>
          <div className="col s6">
            <Input label="Email" onChange={onInputChange}
              type="email"
              name="sample_4" />
          </div>
          <div className="col s6">
            <div>
              This is an Inline Input Field:
              <Input label="Email" onChange={onInputChange}
                type="email" className="inline"
                name="sample_5" />
            </div>
          </div>
          <div className="col s6">
              <Input label="Input with Icon Prefix" onChange={onInputChange}
                type="email" className="" icon="stars"
                name="sample_6" />
          </div>
          <h3>Text Area</h3>
          <TextArea label="I'm a textarea. "  onChange={onInputChange}
            name="sample_7" />
        </div>
      </div>
    );
  }
}

export default Forms;
