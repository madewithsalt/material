'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.Modal = undefined;

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

var Modal = exports.Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.onModalClose = _this.onModalClose.bind(_this);

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open === true) {
        this.setState({ open: true });
        this.handleModalOpen(this.props);
      }
    }
  }, {
    key: 'handleModalOpen',
    value: function handleModalOpen(props) {
      (0, _jquery2.default)(this.modal).animate({
        top: props.endingTop,
        opacity: 1
      }, props.inDuration);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({ open: nextProps.open });

        if (nextProps.open === true) {
          this.handleModalOpen(nextProps);
        } else {
          this.onModalClose(nextProps);
        }
      }
    }
  }, {
    key: 'onModalClose',
    value: function onModalClose(props) {
      var isValid = props.onBeforeClose();

      if (isValid) {
        this.handleModalClose(props);
      }
    }
  }, {
    key: 'handleModalClose',
    value: function handleModalClose(props) {
      var _this2 = this;

      this.animateClose(props).then(function () {
        _this2.setState({ open: false });
        props.onClose();
      });
    }
  }, {
    key: 'animateClose',
    value: function animateClose(props) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        (0, _jquery2.default)(_this3.modal).animate({
          top: props.startingTop,
          opacity: 0
        }, props.outDuration, function () {
          resolve();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          className = _props.className,
          buttonName = _props.buttonName,
          cancelButton = _props.cancelButton,
          opacity = _props.opacity,
          dismissible = _props.dismissible,
          startingTop = _props.startingTop;
      var open = this.state.open;


      var closeEvent = this.onModalClose.bind(this, this.props);

      var openStyles = {
        display: 'block',
        zIndex: 1000,
        top: startingTop
      };

      var overlayStyles = {
        display: 'block',
        zIndex: 900,
        opacity: opacity
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'modal-overlay',
          ref: function ref(d) {
            _this4.overlay = d;
          },
          onClick: dismissible ? closeEvent : null,
          style: open ? overlayStyles : {} }),
        _react2.default.createElement(
          'div',
          { className: 'modal ' + (className || ''), style: open ? openStyles : {},
            ref: function ref(m) {
              _this4.modal = m;
            } },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-footer right-align' },
            _react2.default.createElement(
              'a',
              { onClick: closeEvent, className: 'btn' },
              buttonName
            ),
            cancelButton ? _react2.default.createElement(
              'a',
              { onClick: closeEvent, className: 'btn btn-flat' },
              'Cancel'
            ) : null
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

var defaultProps = exports.defaultProps = {
  onClose: function onClose() {},
  onBeforeClose: function onBeforeClose() {
    return true;
  },
  buttonName: 'Close',
  cancelButton: false,
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '4%', // Starting top style attribute
  endingTop: '10%'
};

Modal.defaultProps = defaultProps;

Modal.propTypes = {
  open: _propTypes2.default.bool.isRequired,
  onClose: _propTypes2.default.func,
  onBeforeClose: _propTypes2.default.func,
  buttonName: _propTypes2.default.string,
  cancelButton: _propTypes2.default.bool,
  dismissible: _propTypes2.default.bool,
  opacity: _propTypes2.default.number,
  inDuration: _propTypes2.default.number,
  outDuration: _propTypes2.default.number,
  startingTop: _propTypes2.default.string,
  endingTop: _propTypes2.default.string
};

exports.default = Modal;