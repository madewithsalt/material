import React, { Component } from 'react';
import Input from '../components/Forms/Input';

function onInputChange(val, evt) {
  console.log('input change trigger: ', val);
}

export default class Home extends Component {
  renderCode(id) {
    debugger;
  }

  render() {
    return (
      <div className="primary-container home-container flex-wrapper row with-sidenav">
        <div className="flex-column nav-column">
          <div className="side-nav fixed">
            <ul>
            </ul>
          </div>
        </div>
        <div className="flex-column main-content-container">
          <h1>Form Fields</h1>
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
          </div>
        </div>

      </div>
    )
  }
}
