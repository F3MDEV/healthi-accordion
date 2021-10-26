

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@material-ui/core');
var Accordion = require('@material-ui/core/Accordion');
var AccordionSummary = require('@material-ui/core/AccordionSummary');
var AccordionDetails = require('@material-ui/core/AccordionDetails');
var Typography = require('@material-ui/core/Typography');
var ExpandMoreIcon = require('@material-ui/icons/ExpandMore');
var CancelIcon = require('@material-ui/icons/Cancel');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion);
var AccordionSummary__default = /*#__PURE__*/_interopDefaultLegacy(AccordionSummary);
var AccordionDetails__default = /*#__PURE__*/_interopDefaultLegacy(AccordionDetails);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);
var CancelIcon__default = /*#__PURE__*/_interopDefaultLegacy(CancelIcon);

var HealthiAccordion = function (_a) {
    var _b = _a.medTitle, medTitle = _b === void 0 ? "Med1" : _b, _c = _a.medAmount, medAmount = _c === void 0 ? "x5" : _c, _d = _a.dailyRoutine, dailyRoutine = _d === void 0 ? "3 por dia" : _d, _e = _a.accordionDetails, accordionDetails = _e === void 0 ? "Detalhes" : _e, dropdownButton = _a.dropdownButton, _f = _a.sideIcons, sideIcons = _f === void 0 ? React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(CancelIcon__default["default"], { color: "secondary", className: "my-auto mx-3" })) : _f;
    var useStyles = core.makeStyles(function (theme) { return ({
        root: {
            "&.MuiAccordion-root": {
                "&.MuiPaper-elevation1": {
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                }
            },
            "&.MuiAccordionSummary-root": {
                backgroundColor: "#ccecee",
                border: "1px solid",
                borderColor: theme.palette.accordion.colorBorder,
                borderRadius: 5,
                paddingRight: '1rem',
                paddingLeft: 0,
                height: 60
            },
            "&.MuiAccordionDetails-root": {
                backgroundColor: "#f8f8f8",
                border: "1px solid",
                borderColor: "#8ccdd3",
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                marginTop: "-4px"
            },
        },
        body1: {
            fontFamily: 'Open Sans',
            fontSize: 14,
            color: "#026066",
            textDecoration: 'none solid rgb(2, 96, 102)'
        },
        title: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            boxOrient: 'vertical',
            display: '-webkit-box',
            lineClamp: 2,
            padding: 0,
            marginTop: 'auto',
            width: '100%',
            fontWeight: 'bold'
        },
        dailyRoutineMeds: {
            padding: 0,
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '100%'
        }
    }); });
    var classes = useStyles();
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(Accordion__default["default"], { className: classes.root },
            React__namespace.createElement(AccordionSummary__default["default"], { className: classes.root, expandIcon: React__namespace.createElement(ExpandMoreIcon__default["default"], { color: "secondary" }), "aria-controls": "panel1a-content", id: "panel1a-header" },
                dropdownButton,
                React__namespace.createElement(Typography__default["default"], { className: classes.body1 + " " + classes.title }, medTitle),
                medAmount,
                React__namespace.createElement(Typography__default["default"], { className: classes.body1 + " " + classes.dailyRoutineMeds }, dailyRoutine),
                sideIcons),
            React__namespace.createElement(AccordionDetails__default["default"], { className: classes.root }, accordionDetails))));
};

exports["default"] = HealthiAccordion;
//# sourceMappingURL=index.js.map
