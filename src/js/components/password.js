'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Password = function (_React$Component) {
  _inherits(Password, _React$Component);

  function Password() {
    _classCallCheck(this, Password);

    var _this = _possibleConstructorReturn(this, (Password.__proto__ || Object.getPrototypeOf(Password)).call(this));

    _this.state = {
      pass: ''
    };
    return _this;
  }

  _createClass(Password, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        pass: this.props.data.config.password
      });
    }
  }, {
    key: 'submit',
    value: function submit() {
      var prompt = document.getElementById('passPrompt').value;

      if (prompt === this.state.pass) {
        this.props.appState({
          modal: 'hidden',
          private: false
        });
      }
    }
  }, {
    key: 'close',
    value: function close() {
      this.props.appState({ modal: "hidden" });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'modal' },
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.close();
            }, className: 'close' },
          _react2.default.createElement('img', { src: 'img/cross-out.svg' })
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Mot de passe'
        ),
        _react2.default.createElement('input', { type: 'text', id: 'passPrompt' }),
        _react2.default.createElement('input', { type: 'button', onClick: function onClick() {
            return _this2.submit();
          }, value: 'OK', className: 'submitBtn' })
      );
    }
  }]);

  return Password;
}(_react2.default.Component);

exports.default = Password;