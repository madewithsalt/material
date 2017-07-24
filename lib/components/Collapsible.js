'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsibleGroup = exports.Collapsible = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapsibleGroup = function (_Component) {
  _inherits(CollapsibleGroup, _Component);

  function CollapsibleGroup() {
    _classCallCheck(this, CollapsibleGroup);

    return _possibleConstructorReturn(this, (CollapsibleGroup.__proto__ || Object.getPrototypeOf(CollapsibleGroup)).apply(this, arguments));
  }

  _createClass(CollapsibleGroup, [{
    key: 'handleOnClick',
    value: function handleOnClick(index) {
      var targetComponent = this.refs['collapse-' + index];

      if (targetComponent) {
        (0, _lodash.each)(this.refs, function (ref, name) {
          if (name !== 'collapse-' + index) {
            ref.toggleActive({ active: false });
          }
        });

        targetComponent.toggleActive({ active: true, toggle: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          maxHeight = _props.maxHeight,
          popout = _props.popout,
          active = _props.active,
          expandable = _props.expandable;


      var children = (0, _lodash.flatten)([this.props.children]);

      var classes = ['collapsible', '' + (className || ''), '' + (popout ? 'popout' : '')];
      return _react2.default.createElement(
        'div',
        { className: classes.join(' ') },
        children.map(function (child, idx) {
          var isActive = idx === active;

          if (!child.props.title) {
            console.error('CollapsibleGroup: child elements must have a "title" prop. Skipping child element.');
            return null;
          }

          return _react2.default.createElement(
            Collapsible,
            { maxHeight: maxHeight || '300px',
              key: (0, _lodash.uniqueId)('collapse-'), active: isActive, ref: 'collapse-' + idx,
              handleOnClick: _this2.handleOnClick.bind(_this2, idx) },
            child
          );
        })
      );
    }
  }]);

  return CollapsibleGroup;
}(_react.Component);

CollapsibleGroup.propTypes = {};

var Collapsible = function (_Component2) {
  _inherits(Collapsible, _Component2);

  function Collapsible(props) {
    _classCallCheck(this, Collapsible);

    var _this3 = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));

    _this3.state = {
      active: props.active ? props.active : false
    };
    return _this3;
  }

  _createClass(Collapsible, [{
    key: 'toggleActive',
    value: function toggleActive(_ref) {
      var active = _ref.active,
          toggle = _ref.toggle;

      if (toggle === true) {
        this.setState({ active: !this.state.active });
      } else {
        this.setState({ active: active });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var active = this.state.active;


      var child = this.props.children;

      return _react2.default.createElement(
        'div',
        { className: 'collapsible-item ' + (active ? 'active' : ''), ref: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'collapsible-header ' + (active ? 'active' : ''), ref: 'header',
            onClick: this.props.handleOnClick },
          child.props.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'collapsible-body', ref: 'body' },
          _react2.default.createElement(
            'div',
            { className: 'collapsible-content' },
            child
          )
        )
      );
    }
  }]);

  return Collapsible;
}(_react.Component);

Collapsible.propTypes = {};

exports.Collapsible = Collapsible;
exports.CollapsibleGroup = CollapsibleGroup;