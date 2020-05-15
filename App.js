"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactHotLoader = require("react-hot-loader");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _WorkHistory = _interopRequireDefault(require("./WorkHistory.js"));

var _BottomNav = _interopRequireDefault(require("./BottomNav.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DESKTOP_CONTAINER_WIDTH = 350;
var MOBILE_CONTAINER_WIDTH = 325;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var LAYOUT_BREAKPOINT = theme.breakpoints.up(DESKTOP_CONTAINER_WIDTH + theme.spacing(2) * 2);
  return {
    paper: _defineProperty({
      width: MOBILE_CONTAINER_WIDTH,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: theme.spacing(1)
    }, LAYOUT_BREAKPOINT, {
      width: DESKTOP_CONTAINER_WIDTH
    }),
    image: _defineProperty({
      maxWidth: MOBILE_CONTAINER_WIDTH
    }, LAYOUT_BREAKPOINT, {
      maxWidth: DESKTOP_CONTAINER_WIDTH
    })
  };
});

var App = function App() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    className: classes.paper,
    elevation: 4
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    flexDirection: "column",
    p: 1,
    m: 1,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: '/images/justin.jpg',
    className: classes.image
  }), ' ', /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: 2
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5"
  }, " ", 'Justin Chan', " "), ' ', /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle2"
  }, " ", 'University of Maryland 2018', " "), ' ', /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption"
  }, " ", "Bachelor's Degree - Computer Science", " "), ' '), ' ', /*#__PURE__*/_react["default"].createElement(_WorkHistory["default"], null), /*#__PURE__*/_react["default"].createElement(_BottomNav["default"], null)), ' ');
};

var _default = (0, _reactHotLoader.hot)(module)(App);

exports["default"] = _default;