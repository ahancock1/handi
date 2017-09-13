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

var fs = require('fs');
var path = require('path');
var dbPath = '..\\..\\..\\database.json';

var db = require(dbPath);

var Add = function (_React$Component) {
  _inherits(Add, _React$Component);

  function Add() {
    _classCallCheck(this, Add);

    var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this));

    _this.state = {
      confirm: false
    };
    return _this;
  }

  _createClass(Add, [{
    key: 'submit',
    value: function submit() {
      if (this.state.confirm === true) {
        var name = document.getElementById('add-name').value,
            img = document.getElementById('add-img').files[0].path,
            mo = document.getElementById('add-mo').files[0].path,
            i = document.getElementById('add-i').files[0].path,
            e = document.getElementById('add-e').files[0].path,
            imgBase = path.parse(img).base;

        fs.createReadStream(img).pipe(fs.createWriteStream(__dirname + '\\img\\clients\\' + imgBase));

        db.clients[name] = {
          logo: imgBase,
          name: name,
          buttons: {
            mo: mo,
            i: i,
            e: e
          }
        };

        fs.writeFileSync(__dirname + '\\' + dbPath, JSON.stringify(db, null, '\t'));
        this.close();
      } else {
        this.setState({ confirm: true });
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
          'Ajouter un client'
        ),
        _react2.default.createElement('input', { type: 'text', placeholder: 'Nom du client', id: 'add-name' }),
        _react2.default.createElement(
          'label',
          null,
          'Logo du client',
          _react2.default.createElement('input', { type: 'file', id: 'add-img', accept: 'image/*' })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Mode Op\xE9ratoire',
          _react2.default.createElement('input', { type: 'file', id: 'add-mo' })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Inventaire',
          _react2.default.createElement('input', { type: 'file', id: 'add-i' })
        ),
        _react2.default.createElement(
          'label',
          null,
          '\xC9ducateur',
          _react2.default.createElement('input', { type: 'file', id: 'add-e' })
        ),
        _react2.default.createElement('input', { type: 'button', onClick: function onClick() {
            return _this2.submit();
          }, value: this.state.confirm === false ? 'Ajouter' : 'Confirmer', className: 'submitBtn' })
      );
    }
  }]);

  return Add;
}(_react2.default.Component);

exports.default = Add;