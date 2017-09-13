'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _head = require('./head');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Column = function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'column' },
        _react2.default.createElement(_head2.default, { text: this.props.data.clients[this.props.clientKey].name, img: this.props.data.clients[this.props.clientKey].logo }),
        _react2.default.createElement(_item2.default, {
          text: 'Modes op\xE9ratoires',
          def: this.props.data.config.def.mo,
          icon: this.props.data.config.icons.mo,
          path: this.props.data.clients[this.props.clientKey].buttons.mo,
          'private': false,
          appState: this.props.appState
        }),
        _react2.default.createElement(_item2.default, {
          text: 'Inventaire',
          def: this.props.data.config.def.i,
          icon: this.props.data.config.icons.i,
          path: this.props.data.clients[this.props.clientKey].buttons.i,
          'private': false,
          appState: this.props.appState
        }),
        _react2.default.createElement(_item2.default, {
          text: '\xE9ducateur',
          def: this.props.data.config.def.e,
          icon: this.props.data.config.icons.e,
          path: this.props.data.clients[this.props.clientKey].buttons.e,
          'private': this.props.private,
          appState: this.props.appState
        })
      );
    }
  }]);

  return Column;
}(_react2.default.Component);

exports.default = Column;