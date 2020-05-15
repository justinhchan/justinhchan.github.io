"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _core = require("@material-ui/core");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LinkFragments = [{
  icon: _freeBrandsSvgIcons.faGithub,
  link: 'https://github.com/justinhchan/'
}, {
  icon: _freeBrandsSvgIcons.faInstagram,
  link: 'https://www.instagram.com/jchan.jpg/'
}, {
  icon: _freeBrandsSvgIcons.faLinkedinIn,
  link: 'https://www.linkedin.com/in/justinhkchan/'
}];

var BottomNav = function BottomNav() {
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    justifyContent: "space-around"
  }, LinkFragments.map(function (_ref) {
    var icon = _ref.icon,
        link = _ref.link;
    return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      mx: 4,
      key: link
    }, /*#__PURE__*/_react["default"].createElement(_core.Link, {
      href: link,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: icon,
      size: "lg"
    })));
  }));
};

var _default = BottomNav;
exports["default"] = _default;