import React, { Component } from 'react';
import {
  Input,
  TextArea
} from '../components/Forms';
import CodeElement from '../docs/CodeElement'


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
            <CodeElement react>
              { `<Input label="Example Text Field" \n onChange={onInputChange} name="sample_1" />`}
            </CodeElement>
          </div>
          <div className="col s6">
            <Input label="Disabled Text Field" onChange={onInputChange}
              name="sample_2" disabled={true} value="I am not editable" />
            <CodeElement react>
              {`<Input label="Disabled Text Field" onChange={onInputChange} \n name="sample_2" disabled={true} value="I am not editable" />`}
            </CodeElement>
          </div>
          <div className="col s6">
            <Input label="Password" onChange={onInputChange}
              type="password" name="sample_3" />
            <CodeElement react>
              {`<Input label="Password" onChange={onInputChange} \n type="password" name="sample_3" />`}
            </CodeElement>
          </div>
          <div className="col s6">
            <Input label="Email" onChange={onInputChange}
              type="email" name="sample_4" />
            <CodeElement react>{`<Input label="Email" onChange={onInputChange} \n type="email" name="sample_4" />`}</CodeElement>
          </div>
          <div className="col s6">
            <div>
              This is an Inline Input Field:
              <Input label="Email" onChange={onInputChange}
                type="email" className="inline"
                name="sample_5" />
              <CodeElement react>
                {`<Input label="Email" onChange={onInputChange} \n type="email" className="inline" \n name="sample_5" />`}
              </CodeElement>
            </div>
          </div>
          <div className="col s6">
              <Input label="Input with Icon Prefix" onChange={onInputChange}
                type="email" className="" icon="stars"
                name="sample_6" />
              <CodeElement react>
                {`<Input label="Input with Icon Prefix" onChange={onInputChange} \n type="email" icon="stars" \n name="sample_6" />`}
              </CodeElement>
          </div>
          <div className="col s6">
            <h3>Text Area</h3>
            <TextArea label="I'm a textarea. "  onChange={onInputChange}
              name="sample_7" />
            <CodeElement react>
              {
                `<TextArea label="I'm a textarea. "  onChange={onInputChange} \n name="sample_7" />`
              }
            </CodeElement>
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;
