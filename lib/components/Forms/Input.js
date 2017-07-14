'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      active: props.value ? true : false,
      value: props.value
    };

    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleChangeEvent = _this.handleChangeEvent.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'handleFocus',
    value: function handleFocus() {
      this.setState({ active: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({
        active: this.state.value ? true : false
      });
    }
  }, {
    key: 'handleChangeEvent',
    value: function handleChangeEvent(evt) {
      var value = evt.target.value;
      this.setState({ value: value });

      this.props.onChange({
        name: this.props.name,
        value: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          label = _props.label,
          type = _props.type,
          disabled = _props.disabled,
          className = _props.className,
          icon = _props.icon;
      var _state = this.state,
          active = _state.active,
          value = _state.value;


      return _react2.default.createElement(
        'div',
        { className: 'input-field ' + (className || '') },
        icon ? _react2.default.createElement(
          'i',
          { className: 'material-icons prefix ' + (active ? 'active' : '') },
          icon
        ) : null,
        _react2.default.createElement('input', { id: name, type: type || 'text',
          name: name,
          ref: function ref(i) {
            return _this2.input = i;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onChange: this.handleChangeEvent,
          disabled: disabled || false,
          className: 'validate', defaultValue: value }),
        _react2.default.createElement(
          'label',
          { className: active ? 'active' : '', htmlFor: name },
          label
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;


Input.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired
};