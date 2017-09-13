'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _column = require('./src/js/components/column');

var _column2 = _interopRequireDefault(_column);

var _add = require('./src/js/components/add');

var _add2 = _interopRequireDefault(_add);

var _remove = require('./src/js/components/remove');

var _remove2 = _interopRequireDefault(_remove);

var _password = require('./src/js/components/password');

var _password2 = _interopRequireDefault(_password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('electron'),
    shell = _require.shell;

var dialog = require('electron').remote.dialog;

var path = require('path');
var Mousetrap = require('mousetrap');
var db = require('./database.json');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      modal: 'hidden',
      private: true,
      data: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ data: db });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      Mousetrap.bind('ctrl++', function () {
        return _this2.setState({ modal: 'add' });
      });
      Mousetrap.bind('ctrl+-', function () {
        return _this2.setState({ modal: 'remove' });
      });
      Mousetrap.bind('esc', function () {
        return _this2.setState({ modal: 'hidden' });
      });
    }
  }, {
    key: 'appState',
    value: function appState(content) {
      this.setState(content);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var modal;

      if (this.state.modal === 'hidden') {
        modal = false;
      } else if (this.state.modal === 'password') {
        modal = _react2.default.createElement(
          'div',
          { className: 'modalContainer' },
          _react2.default.createElement(_password2.default, { appState: this.appState.bind(this), data: this.state.data })
        );
      } else if (this.state.modal === 'add') {
        modal = _react2.default.createElement(
          'div',
          { className: 'modalContainer' },
          _react2.default.createElement(_add2.default, { appState: this.appState.bind(this) })
        );
      } else if (this.state.modal === 'remove') {
        modal = _react2.default.createElement(
          'div',
          { className: 'modalContainer' },
          _react2.default.createElement(_remove2.default, { appState: this.appState.bind(this) })
        );
      }

      if (Object.keys(this.state.data.clients).length != 0) {
        var columns = Object.keys(this.state.data.clients).map(function (i) {
          return _react2.default.createElement(_column2.default, { key: i, appState: _this3.appState.bind(_this3), 'private': _this3.state.private, data: _this3.state.data, clientKey: i });
        });
      } else {
        var columns = _react2.default.createElement(
          'h1',
          { className: 'empty' },
          'Aucun client n\'est dans la base de donn\xE9e, voulez-vous en ajouter ?',
          _react2.default.createElement(
            'span',
            null,
            'ctrl +'
          ),
          'Si plus tard vous voulez en supprimer :',
          _react2.default.createElement(
            'span',
            null,
            'ctrl -'
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'main' },
        modal,
        columns
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));