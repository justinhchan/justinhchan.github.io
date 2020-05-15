"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Stepper = _interopRequireDefault(require("@material-ui/core/Stepper"));

var _Step = _interopRequireDefault(require("@material-ui/core/Step"));

var _StepLabel = _interopRequireDefault(require("@material-ui/core/StepLabel"));

var _StepContent = _interopRequireDefault(require("@material-ui/core/StepContent"));

var _core = require("@material-ui/core");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var createExperienceShape = function createExperienceShape(role, start, end) {
  return {
    role: role,
    start: start,
    end: end
  };
};

var jobs = {
  Wayfair: {
    link: 'https://www.wayfair.com/',
    experience: createExperienceShape('Software Engineer II', 'September 2018', 'Present')
  },
  'SAP Concur': {
    link: 'https://www.concur.com/',
    experience: createExperienceShape('Software Engineer Intern', 'June 2017', 'May 2018')
  }
};

var StepIcon = function StepIcon() {
  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faBriefcase
  });
};

var ContentGroup = function ContentGroup(_ref) {
  var role = _ref.role,
      start = _ref.start,
      end = _ref.end;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "overline"
  }, role), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "textSecondary"
  }, start, ' - ', end));
};

var WorkHistory = function WorkHistory() {
  var companies = Object.keys(jobs);
  return /*#__PURE__*/_react["default"].createElement(_Stepper["default"], {
    orientation: "vertical"
  }, companies.map(function (company) {
    var _jobs$company = jobs[company],
        link = _jobs$company.link,
        experience = _jobs$company.experience;
    return /*#__PURE__*/_react["default"].createElement(_Step["default"], {
      active: true,
      expanded: true,
      key: company
    }, /*#__PURE__*/_react["default"].createElement(_StepLabel["default"], {
      StepIconComponent: StepIcon
    }, /*#__PURE__*/_react["default"].createElement(_core.Link, {
      href: link,
      target: "_blank",
      rel: "noreferrer"
    }, company)), /*#__PURE__*/_react["default"].createElement(_StepContent["default"], null, /*#__PURE__*/_react["default"].createElement(ContentGroup, experience)));
  }));
};

var _default = WorkHistory;
exports["default"] = _default;