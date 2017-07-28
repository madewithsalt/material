import React from 'react';
import {
  Modal,
  Button,
  Icon,
  Input,
  TextArea
} from '../app/js/all';

describe('Sanity Check on Exports', () => {
  test('Modal', () => {
    expect(Modal).toBeDefined();
  });

  test('Input', () => {
    expect(Input).toBeDefined();
  });

  test('Button', () => {
    expect(Button).toBeDefined();
  });

  test('Icon', () => {
    expect(Icon).toBeDefined();
  });

  test('TextArea', () => {
    expect(TextArea).toBeDefined();
  });

});
