import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import {
  Input,
  TextArea
} from '../../app/js/components/Forms';


describe('Forms: <Input />', () => {

  test('calls componentDidMount', () => {
      sinon.spy(Input.prototype, 'render');

      const wrapper = shallow(
        <Input onChange={function() {}} name="test" label="Test Input" />
      );

      expect(Input.prototype.render.calledOnce).toEqual(true);
  });

  test('Changes to active state when input is focused', () => {
      const wrapper = shallow(
        <Input label="Test Input" name="test" onChange={() => {}} />
      );

      expect(wrapper.state('active')).toEqual(false);

      wrapper.find('input').simulate('focus');

      expect(wrapper.state('active')).toEqual(true);
  });

  test('Does not change to active state if input has a value on blur', () => {
    const wrapper = shallow(
      <Input label="Test Input" name="test" onChange={() => {}} value="foo bar"/>
    );

    expect(wrapper.state('active')).toEqual(true);

    wrapper.find('input').simulate('blur');

    expect(wrapper.state('active')).toEqual(true);

  });

  test('Triggers the onChange event when input has changed', () => {
    const onChange = sinon.spy();
    const event = {target: { value: "foo" }};

    const wrapper = shallow(
      <Input label="Test Input" name="test" onChange={onChange} />
    );

    wrapper.find('input').simulate('change', event);

    expect(onChange.calledOnce).toEqual(true);

  });

});

describe('Forms: <TextArea />', () => {
  test('Triggers the onChange event when input has changed', () => {
    const onChange = sinon.spy();
    const event = {target: { value: "foo" }};

    const wrapper = shallow(
      <TextArea label="Test Input" name="test" onChange={onChange} />
    );

    wrapper.find('textarea').simulate('change', event);

    expect(onChange.calledOnce).toEqual(true);

  });

  test('Changes to active state when input is focused', () => {
      const wrapper = mount(
        <TextArea label="Test Input" name="test" onChange={() => {}} />
      );

      expect(wrapper.state('active')).toEqual(false);

      wrapper.find('textarea').simulate('focus');

      expect(wrapper.state('active')).toEqual(true);
  });
});
