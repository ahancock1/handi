'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['C:UsersNathanDesktop\tab_bord.psd'], ['C:\\Users\\Nathan\\Desktop\\tab_bord.psd']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.state = {
      access: 'default',
      private: false
    };
    return _this;
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ private: this.props.private });
    }
  }, {
    key: 'default',
    value: function _default() {
      this.setState({ access: 'default' });
    }
  }, {
    key: 'hear',
    value: function hear() {
      var synth = window.speechSynthesis;
      var speech = new SpeechSynthesisUtterance(this.props.def);
      speech.lang = 'fr-FR';

      synth.speak(speech);
    }
  }, {
    key: 'see',
    value: function see() {
      this.state.access === 'default' ? this.setState({ access: 'see' }) : this.setState({ access: 'default' });
    }
  }, {
    key: 'open',
    value: function open() {

      var filePath = String.raw(_templateObject);
      // filePath = filePath.replace(/\\/g, "\\\\")

      if (this.props.private === true) {
        this.props.appState({
          modal: 'password'
        });
      } else {
        shell.openItem(this.props.path);
        this.props.appState({
          private: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: this.state.private ? "item educ" : 'item', onMouseLeave: function onMouseLeave() {
            return _this2.default();
          } },
        _react2.default.createElement('img', { src: "img/" + this.props.icon }),
        _react2.default.createElement(
          'h1',
          null,
          this.props.text
        ),
        _react2.default.createElement(
          'div',
          { className: "infos " + this.state.access },
          _react2.default.createElement(
            'p',
            null,
            this.props.def
          ),
          _react2.default.createElement(
            'div',
            { className: 'btnContainer' },
            _react2.default.createElement(
              'button',
              { className: 'btnSecondary', onClick: function onClick() {
                  return _this2.hear();
                } },
              _react2.default.createElement('img', { src: 'img/ear.svg' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'btnSecondary', onClick: function onClick() {
                  return _this2.see();
                } },
              _react2.default.createElement('img', { src: 'img/eye.svg' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'btnPrimary', onClick: function onClick() {
                  return _this2.open();
                } },
              'consulter'
            )
          )
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

exports.default = Item;