'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = exports.Icon = function Icon(props) {
  return _react2.default.createElement(
    'i',
    { className: (props.className ? props.className : '') + ' material-icons' },
    props.children
  );
};