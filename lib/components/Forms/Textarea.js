'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this.state = {
      active: props.value ? true : false,
      value: props.value,
      height: props.defaultHeight
    };

    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleChangeEvent = _this.handleChangeEvent.bind(_this);
    return _this;
  }

  _createClass(TextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleResize();
    }
  }, {
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
      this.handleResize();
    }
  }, {
    key: 'handleChangeEvent',
    value: function handleChangeEvent(evt) {
      var value = evt.target.value;
      if (this.props.resizable) {
        this.handleResize();
      }

      if (value !== this.state.value) {
        this.setState({ value: value });
        this.props.onChange({
          name: this.props.name,
          value: value
        });
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var height = (0, _jquery2.default)(this.shadow).height() + 45;
      if (height > this.props.defaultHeight) {
        this.setState({ height: height });
      } else if (height < this.props.defaultHeight) {
        this.setState({ height: this.props.defaultHeight });
      }
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
          value = _state.value,
          height = _state.height;


      var shadowStyles = {
        visibility: 'hidden',
        position: 'absolute',
        top: 0,
        height: 'auto',
        display: 'block',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word'
      };

      return _react2.default.createElement(
        'div',
        { className: 'input-field ' + (className || ''), style: { position: 'relative' } },
        icon ? _react2.default.createElement(
          'i',
          { className: 'material-icons prefix ' + (active ? 'active' : '') },
          icon
        ) : null,
        _react2.default.createElement('textarea', { id: name, name: name,
          className: 'textarea',
          style: { height: height + 'px' },
          ref: function ref(i) {
            return _this2.input = i;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onChange: this.handleChangeEvent,
          onKeyUp: this.handleChangeEvent,
          disabled: disabled || false,
          defaultValue: value }),
        _react2.default.createElement(
          'label',
          { className: active ? 'active' : '', htmlFor: name },
          label
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'textarea',
            style: shadowStyles,
            ref: function ref(s) {
              _this2.shadow = s;
            },
            tabIndex: '-1',
            readOnly: true,
            'aria-hidden': 'true'
          },
          value
        )
      );
    }
  }]);

  return TextArea;
}(_react.Component);

exports.default = TextArea;


TextArea.defaultProps = {
  resizable: true,
  defaultHeight: 65
};

TextArea.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired
};