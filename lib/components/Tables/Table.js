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

var _datatables = require('datatables.net');

var _datatables2 = _interopRequireDefault(_datatables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// See documentation for datatables here:
// https://datatables.net/manual


(0, _datatables2.default)();

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));
  }

  _createClass(Table, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.datatable) {
        (0, _jquery2.default)(this.refs.table).DataTable(this.props.options || {});
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          bordered = _props.bordered,
          striped = _props.striped,
          highlight = _props.highlight,
          centered = _props.centered,
          responsive = _props.responsive,
          children = _props.children,
          style = _props.style;


      var classes = ['' + (className || ''), '' + (striped ? 'striped' : ''), '' + (bordered ? 'bordered' : ''), '' + (highlight ? 'highlight' : ''), '' + (centered ? 'centered' : ''), '' + (responsive ? 'responsive-table' : '')];

      return _react2.default.createElement(
        'table',
        { style: style || {},
          className: classes.join(' '), ref: 'table' },
        children
      );
    }
  }]);

  return Table;
}(_react.Component);

exports.default = Table;