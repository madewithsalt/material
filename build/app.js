(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("js/components/Forms/Input.js", function(exports, require, module) {
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
    value: function handleChangeEvent() {
      var value = this.input.value;
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

});

require.register("js/components/Forms/Textarea.js", function(exports, require, module) {
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

var TextArea = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this.state = {
      active: props.value ? true : false,
      value: props.value
    };

    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleChangeEvent = _this.handleChangeEvent.bind(_this);
    return _this;
  }

  _createClass(TextArea, [{
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
    value: function handleChangeEvent() {
      var value = this.input.value;
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
        _react2.default.createElement('textarea', { id: name, name: name,
          className: 'materialize-textarea',
          ref: function ref(i) {
            return _this2.input = i;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onChange: this.handleChangeEvent,
          disabled: disabled || false,
          defaultValue: value }),
        _react2.default.createElement(
          'label',
          { className: active ? 'active' : '', htmlFor: name },
          label
        )
      );
    }
  }]);

  return TextArea;
}(_react.Component);

exports.default = TextArea;


TextArea.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired
};

});

require.register("js/components/Forms/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.Input = undefined;

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Input = _Input2.default;
exports.TextArea = _Textarea2.default;

});

require.register("js/containers/Components.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../components/Forms/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('whatwg-fetch');

var Components = function (_Component) {
  _inherits(Components, _Component);

  function Components() {
    _classCallCheck(this, Components);

    return _possibleConstructorReturn(this, (Components.__proto__ || Object.getPrototypeOf(Components)).apply(this, arguments));
  }

  _createClass(Components, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var contentDiv = this.content;

      /*
      * ATTENTION:
      * All content actually lives in /assets/components.html.
      */
      fetch('/components.html').then(function (response) {
        return response.text();
      }).then(function (body) {
        contentDiv.innerHTML = body;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'primary-container components-container flex-wrapper row with-sidenav' },
        _react2.default.createElement(
          'div',
          { className: 'flex-column nav-column' },
          _react2.default.createElement(
            'div',
            { className: 'side-nav fixed' },
            _react2.default.createElement('ul', null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-column main-content-container' },
          _react2.default.createElement('div', { id: 'component-content', ref: function ref(div) {
              _this2.content = div;
            } })
        )
      );
    }
  }]);

  return Components;
}(_react.Component);

exports.default = Components;

});

require.register("js/containers/Home.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Forms = require('../components/Forms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function onInputChange(val, evt) {
  console.log('input change trigger: ', val);
}

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'renderCode',
    value: function renderCode(id) {
      debugger;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'primary-container home-container flex-wrapper row with-sidenav' },
        _react2.default.createElement(
          'div',
          { className: 'flex-column nav-column' },
          _react2.default.createElement(
            'div',
            { className: 'side-nav fixed' },
            _react2.default.createElement('ul', null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-column main-content-container' },
          _react2.default.createElement(
            'h1',
            null,
            'Form Fields'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row', ref: function ref(d) {
                return _this2.example1 = d;
              } },
            _react2.default.createElement(
              'div',
              { className: 'col s6' },
              _react2.default.createElement(_Forms.Input, { label: 'Example Text Field', onChange: onInputChange,
                name: 'sample_1' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col s6' },
              _react2.default.createElement(_Forms.Input, { label: 'Disabled Text Field', onChange: onInputChange,
                name: 'sample_2', disabled: true, value: 'I am not editable' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col s6' },
              _react2.default.createElement(_Forms.Input, { label: 'Password', onChange: onInputChange,
                type: 'password',
                name: 'sample_3' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col s6' },
              _react2.default.createElement(_Forms.Input, { label: 'Email', onChange: onInputChange,
                type: 'email',
                name: 'sample_4' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col s6' },
              _react2.default.createElement(
                'div',
                null,
                'This is an Inline Input Field:',
                _react2.default.createElement(_Forms.Input, { label: 'Email', onChange: onInputChange,
                  type: 'email', className: 'inline',
                  name: 'sample_5' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col s6' },
              _react2.default.createElement(_Forms.Input, { label: 'Input with Icon Prefix', onChange: onInputChange,
                type: 'email', className: '', icon: 'stars',
                name: 'sample_6' })
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Text Area'
            ),
            _react2.default.createElement(_Forms.TextArea, { label: 'I\'m a textarea. ', onChange: onInputChange,
              name: 'sample_7' })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

});

require.register("js/containers/Typography.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typography = function Typography(props) {
  return _react2.default.createElement(
    "div",
    { className: "primary-container typography-container flex-wrapper row with-sidenav" },
    _react2.default.createElement(
      "div",
      { className: "flex-column nav-column" },
      _react2.default.createElement(
        "div",
        { className: "side-nav fixed" },
        _react2.default.createElement("ul", null)
      )
    ),
    _react2.default.createElement("div", { className: "flex-column main-content-container" })
  );
};

exports.default = Typography;

});

require.register("js/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Home = require('./containers/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Components = require('./containers/Components');

var _Components2 = _interopRequireDefault(_Components);

var _Typography = require('./containers/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'flex-wrapper' },
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/components', component: _Components2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/typography', component: _Typography2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map