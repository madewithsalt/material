import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import Modal, { defaultProps } from '../../app/js/components/Modal';

describe('Modal: ', () => {

  test('Initialize with default state', () => {
    sinon.spy(Modal.prototype, 'componentDidMount');

    const wrapper = mount(
      <Modal open={false} />
    );

    expect(Modal.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(wrapper.state('open')).toBe(false);
  });

  test('Calls onBeforeClose before closing', () => {
    const callback = sinon.spy();
    const wrapper = mount(
      <Modal open={true} onBeforeClose={callback}/>
    );

    wrapper.setProps({ open: false });
    expect(callback.called).toBe(true);
  });

  test('onBeforeClose default returns true and calls onClose', () => {
    const callback = sinon.spy();
    const wrapper = mount(
      <Modal open={true} onClose={callback}/>
    );

    wrapper.setProps({ open: false });

    // allow time for the animate function to complete.
    setTimeout(() => {
      expect(callback.called).toBe(true);
    }, 2000);
  });

  test('onBeforeClose returns false, and onClose is not called', () => {
    const callback = sinon.spy();
    const onBefore = () => false;
    
    const wrapper = mount(
      <Modal open={true} onBeforeClose={onBefore} onClose={callback}/>
    );

    wrapper.setProps({ open: false });

    // allow time for the animate function to complete.
    expect(callback.called).toBe(false);
  });

});
