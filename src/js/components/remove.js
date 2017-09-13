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

var Remove = function (_React$Component) {
  _inherits(Remove, _React$Component);

  function Remove() {
    _classCallCheck(this, Remove);

    var _this = _possibleConstructorReturn(this, (Remove.__proto__ || Object.getPrototypeOf(Remove)).call(this));

    _this.state = {
      confirm: false
    };
    return _this;
  }

  _createClass(Remove, [{
    key: 'remove',
    value: function remove(id) {
      if (this.state.confirm === true) {
        fs.unlink(__dirname + '\\img\\clients\\' + this.state.data.clients[id].logo);
        delete db.clients[id];

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
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ data: db });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var list = Object.keys(this.state.data.clients).map(function (i) {
        return _react2.default.createElement(
          'li',
          { key: i },
          _this2.state.data.clients[i].name,
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.remove(i);
              }, className: 'removeBtn' },
            _this2.state.confirm === false ? _react2.default.createElement('img', { src: './img/rubbish-bin.svg' }) : 'Confirmer'
          )
        );
      });

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
          'Supprimer un client'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'removeList' },
          list
        )
      );
    }
  }]);

  return Remove;
}(_react2.default.Component);

exports.default = Remove;