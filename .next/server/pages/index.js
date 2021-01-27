module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: apiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCall", function() { return apiCall; });
const apiCall = link => fetch(link).then(response => response.json());

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\rvrus\\GoogleDrive\\Source\\ZTM\\Junior\\ssr-robofriends\\components\\Card.js";


const Card = ({
  name,
  email,
  id
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      width: '320px',
      height: '400px'
    },
    className: "tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      alt: "robots",
      src: `https://robohash.org/${id}?size=200x200`,
      height: "200px",
      width: "200px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/CardList.js":
/*!********************************!*\
  !*** ./components/CardList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");

var _jsxFileName = "C:\\Users\\rvrus\\GoogleDrive\\Source\\ZTM\\Junior\\ssr-robofriends\\components\\CardList.js";



const CardList = ({
  robots
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: robots.map((user, i) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: robots[i].id,
        name: robots[i].name,
        email: robots[i].email
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CardList);

/***/ }),

/***/ "./components/ErrorBoundry.js":
/*!************************************!*\
  !*** ./components/ErrorBoundry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\rvrus\\GoogleDrive\\Source\\ZTM\\Junior\\ssr-robofriends\\components\\ErrorBoundry.js";


class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Something went wrong."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 14
      }, this);
    }

    return this.props.children;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./components/Scroll.js":
/*!******************************!*\
  !*** ./components/Scroll.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\rvrus\\GoogleDrive\\Source\\ZTM\\Junior\\ssr-robofriends\\components\\Scroll.js";


const Scroll = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      overflow: 'scroll',
      border: '5px solid black',
      height: '800px'
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Scroll);

/***/ }),

/***/ "./components/SearchBox.js":
/*!*********************************!*\
  !*** ./components/SearchBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\rvrus\\GoogleDrive\\Source\\ZTM\\Junior\\ssr-robofriends\\components\\SearchBox.js";


const SearchBox = ({
  searchfield,
  searchChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pa2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      "aria-label": "Search Box",
      id: "searchBox",
      className: "pa3 ba b--green bg-lightest-blue",
      type: "search",
      placeholder: "search robots",
      onChange: searchChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./containers/Home.js":
/*!****************************!*\
  !*** ./containers/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardList */ "./components/CardList.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchBox */ "./components/SearchBox.js");
/* harmony import */ var _components_Scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Scroll */ "./components/Scroll.js");
/* harmony import */ var _components_ErrorBoundry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ErrorBoundry */ "./components/ErrorBoundry.js");

var _jsxFileName = "C:\\Users\\rvrus\\GoogleDrive\\Source\\ZTM\\Junior\\ssr-robofriends\\containers\\Home.js";






 // parameter state comes from index.js provider store state(rootReducers)

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
}; // dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.


const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["setSearchField"])(event.target.value)),
    onRequestRobots: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["requestRobots"])())
  };
};

class HomePage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {
      robots,
      searchField,
      onSearchChange,
      isPending
    } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tc",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "f1",
        children: "RoboFriends"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        searchChange: onSearchChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Scroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: isPending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ErrorBoundry__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardList__WEBPACK_IMPORTED_MODULE_4__["default"], {
            robots: filteredRobots
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this);
  }

} // action done from mapDispatchToProps will channge state from mapStateToProps


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(HomePage));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Home */ "./containers/Home.js");
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers */ "./redux/reducers.js");

var _jsxFileName = "C:\\Users\\rvrus\\GoogleDrive\\Source\\ZTM\\Junior\\ssr-robofriends\\pages\\index.js";
// import reportWebVitals from './reportWebVitals';




 // import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const logger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_4__["createLogger"])();
const rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  requestRobots: _redux_reducers__WEBPACK_IMPORTED_MODULE_6__["requestRobots"],
  searchRobots: _redux_reducers__WEBPACK_IMPORTED_MODULE_6__["searchRobots"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducers, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, logger));

const Index = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Index); // serviceWorkerRegistration.register();
// reportWebVitals();

/***/ }),

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: setSearchField, requestRobots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchField", function() { return setSearchField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestRobots", function() { return requestRobots; });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./redux/constants.js");


const setSearchField = text => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["CHANGE_SEARCHFIELD"],
  payload: text
});
const requestRobots = () => dispatch => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_ROBOTS_PENDING"]
  });
  Object(_api_api__WEBPACK_IMPORTED_MODULE_0__["apiCall"])('https://jsonplaceholder.typicode.com/users').then(data => dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_ROBOTS_SUCCESS"],
    payload: data
  })).catch(error => dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_ROBOTS_FAILED"],
    payload: error
  }));
};

/***/ }),

/***/ "./redux/constants.js":
/*!****************************!*\
  !*** ./redux/constants.js ***!
  \****************************/
/*! exports provided: CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SEARCHFIELD", function() { return CHANGE_SEARCHFIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_ROBOTS_PENDING", function() { return REQUEST_ROBOTS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_ROBOTS_SUCCESS", function() { return REQUEST_ROBOTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_ROBOTS_FAILED", function() { return REQUEST_ROBOTS_FAILED; });
const CHANGE_SEARCHFIELD = 'CHANGE_SEARCHFIELD';
const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';

/***/ }),

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: searchRobots, requestRobots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRobots", function() { return searchRobots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestRobots", function() { return requestRobots; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./redux/constants.js");

const initialStateSearch = {
  searchField: ''
};
const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SEARCHFIELD"]:
      return Object.assign({}, state, {
        searchField: action.payload
      });

    default:
      return state;
  }
};
const initialStateRobots = {
  robots: [],
  isPending: true
};
const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["REQUEST_ROBOTS_PENDING"]:
      return Object.assign({}, state, {
        isPending: true
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["REQUEST_ROBOTS_SUCCESS"]:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["REQUEST_ROBOTS_FAILED"]:
      return Object.assign({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Vycm9yQm91bmRyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJhcGlDYWxsIiwibGluayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIkNhcmQiLCJuYW1lIiwiZW1haWwiLCJpZCIsIndpZHRoIiwiaGVpZ2h0IiwiQ2FyZExpc3QiLCJyb2JvdHMiLCJtYXAiLCJ1c2VyIiwiaSIsIkVycm9yQm91bmRhcnkiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJpbmZvIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIlNjcm9sbCIsIm92ZXJmbG93IiwiYm9yZGVyIiwiU2VhcmNoQm94Iiwic2VhcmNoZmllbGQiLCJzZWFyY2hDaGFuZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzZWFyY2hGaWVsZCIsInNlYXJjaFJvYm90cyIsInJlcXVlc3RSb2JvdHMiLCJpc1BlbmRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uU2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJzZXRTZWFyY2hGaWVsZCIsInRhcmdldCIsInZhbHVlIiwib25SZXF1ZXN0Um9ib3RzIiwiSG9tZVBhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImZpbHRlcmVkUm9ib3RzIiwiZmlsdGVyIiwicm9ib3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY29ubmVjdCIsImxvZ2dlciIsImNyZWF0ZUxvZ2dlciIsInJvb3RSZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJJbmRleCIsInRleHQiLCJ0eXBlIiwiQ0hBTkdFX1NFQVJDSEZJRUxEIiwicGF5bG9hZCIsIlJFUVVFU1RfUk9CT1RTX1BFTkRJTkciLCJkYXRhIiwiUkVRVUVTVF9ST0JPVFNfU1VDQ0VTUyIsImNhdGNoIiwiUkVRVUVTVF9ST0JPVFNfRkFJTEVEIiwiaW5pdGlhbFN0YXRlU2VhcmNoIiwiYWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdGlhbFN0YXRlUm9ib3RzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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QUNrQixpQkFBUyxFQUFFO0FBQVosT0FBekIsQ0FBUDs7QUFDRixTQUFLZ0MsaUVBQUw7QUFDRSxhQUFPSyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCeEQsS0FBbEIsRUFBeUI7QUFBQ1IsY0FBTSxFQUFFOEQsTUFBTSxDQUFDUCxPQUFoQjtBQUF5QjdCLGlCQUFTLEVBQUU7QUFBcEMsT0FBekIsQ0FBUDs7QUFDRixTQUFLa0MsZ0VBQUw7QUFDRSxhQUFPRyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCeEQsS0FBbEIsRUFBeUI7QUFBQ0csYUFBSyxFQUFFbUQsTUFBTSxDQUFDUDtBQUFmLE9BQXpCLENBQVA7O0FBQ0Y7QUFDRSxhQUFPL0MsS0FBUDtBQVJKO0FBVUQsQ0FYTSxDOzs7Ozs7Ozs7OztBQ3pCUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgYXBpQ2FsbCA9IChsaW5rKSA9PlxyXG4gIGZldGNoKGxpbmspLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgbmFtZSwgZW1haWwsIGlkIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogJzMyMHB4JywgaGVpZ2h0OiAnNDAwcHgnIH19XHJcbiAgICAgIGNsYXNzTmFtZT0ndGMgZ3JvdyBiZy1saWdodC1ncmVlbiBicjMgcGEzIG1hMiBkaWIgYncyIHNoYWRvdy01Jz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGFsdD0ncm9ib3RzJ1xyXG4gICAgICAgIHNyYz17YGh0dHBzOi8vcm9ib2hhc2gub3JnLyR7aWR9P3NpemU9MjAweDIwMGB9XHJcbiAgICAgICAgaGVpZ2h0PScyMDBweCdcclxuICAgICAgICB3aWR0aD0nMjAwcHgnXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgPHA+e2VtYWlsfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcclxuXHJcbmNvbnN0IENhcmRMaXN0ID0gKHsgcm9ib3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge1xyXG4gICAgICAgIHJvYm90cy5tYXAoKHVzZXIsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGlkPXtyb2JvdHNbaV0uaWR9XHJcbiAgICAgICAgICAgICAgbmFtZT17cm9ib3RzW2ldLm5hbWV9XHJcbiAgICAgICAgICAgICAgZW1haWw9e3JvYm90c1tpXS5lbWFpbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkTGlzdDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZENhdGNoIChlcnJvciwgaW5mbykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxoMT5Tb21ldGhpbmcgd2VudCB3cm9uZy48L2gxPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2Nyb2xsID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdzY3JvbGwnLCBib3JkZXI6ICc1cHggc29saWQgYmxhY2snLCBoZWlnaHQ6ICc4MDBweCd9fT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2VhcmNoQm94ID0gKHsgc2VhcmNoZmllbGQsIHNlYXJjaENoYW5nZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYTInPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBhcmlhLWxhYmVsPSdTZWFyY2ggQm94J1xyXG4gICAgICAgIGlkPSdzZWFyY2hCb3gnXHJcbiAgICAgICAgY2xhc3NOYW1lPSdwYTMgYmEgYi0tZ3JlZW4gYmctbGlnaHRlc3QtYmx1ZSdcclxuICAgICAgICB0eXBlPSdzZWFyY2gnXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J3NlYXJjaCByb2JvdHMnXHJcbiAgICAgICAgb25DaGFuZ2U9e3NlYXJjaENoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRTZWFyY2hGaWVsZCwgcmVxdWVzdFJvYm90cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IENhcmRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZExpc3QnO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQm94JztcclxuaW1wb3J0IFNjcm9sbCBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbCc7XHJcbmltcG9ydCBFcnJvckJvdW5kcnkgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvckJvdW5kcnknO1xyXG5cclxuLy8gcGFyYW1ldGVyIHN0YXRlIGNvbWVzIGZyb20gaW5kZXguanMgcHJvdmlkZXIgc3RvcmUgc3RhdGUocm9vdFJlZHVjZXJzKVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2VhcmNoRmllbGQ6IHN0YXRlLnNlYXJjaFJvYm90cy5zZWFyY2hGaWVsZCxcclxuICAgIHJvYm90czogc3RhdGUucmVxdWVzdFJvYm90cy5yb2JvdHMsXHJcbiAgICBpc1BlbmRpbmc6IHN0YXRlLnJlcXVlc3RSb2JvdHMuaXNQZW5kaW5nLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBkaXNwYXRjaCB0aGUgRE9NIGNoYW5nZXMgdG8gY2FsbCBhbiBhY3Rpb24uIG5vdGUgbWFwU3RhdGVUb1Byb3BzIHJldHVybnMgb2JqZWN0LCBtYXBEaXNwYXRjaFRvUHJvcHMgcmV0dXJucyBmdW5jdGlvblxyXG4vLyB0aGUgZnVuY3Rpb24gcmV0dXJucyBhbiBvYmplY3QgdGhlbiB1c2VzIGNvbm5lY3QgdG8gY2hhbmdlIHRoZSBkYXRhIGZyb20gcmVkZWNlcnMuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBvblNlYXJjaENoYW5nZTogKGV2ZW50KSA9PiBkaXNwYXRjaChzZXRTZWFyY2hGaWVsZChldmVudC50YXJnZXQudmFsdWUpKSxcclxuICAgIG9uUmVxdWVzdFJvYm90czogKCkgPT4gZGlzcGF0Y2gocmVxdWVzdFJvYm90cygpKSxcclxuICB9O1xyXG59O1xyXG5cclxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5vblJlcXVlc3RSb2JvdHMoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcm9ib3RzLCBzZWFyY2hGaWVsZCwgb25TZWFyY2hDaGFuZ2UsIGlzUGVuZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGZpbHRlcmVkUm9ib3RzID0gcm9ib3RzLmZpbHRlcigocm9ib3QpID0+IHtcclxuICAgICAgcmV0dXJuIHJvYm90Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hGaWVsZC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RjJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdmMSc+Um9ib0ZyaWVuZHM8L2gxPlxyXG4gICAgICAgIDxTZWFyY2hCb3ggc2VhcmNoQ2hhbmdlPXtvblNlYXJjaENoYW5nZX0gLz5cclxuICAgICAgICA8U2Nyb2xsPlxyXG4gICAgICAgICAge2lzUGVuZGluZyA/IChcclxuICAgICAgICAgICAgPGgxPkxvYWRpbmc8L2gxPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEVycm9yQm91bmRyeT5cclxuICAgICAgICAgICAgICA8Q2FyZExpc3Qgcm9ib3RzPXtmaWx0ZXJlZFJvYm90c30gLz5cclxuICAgICAgICAgICAgPC9FcnJvckJvdW5kcnk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU2Nyb2xsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBhY3Rpb24gZG9uZSBmcm9tIG1hcERpc3BhdGNoVG9Qcm9wcyB3aWxsIGNoYW5uZ2Ugc3RhdGUgZnJvbSBtYXBTdGF0ZVRvUHJvcHNcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpO1xyXG4iLCIvLyBpbXBvcnQgcmVwb3J0V2ViVml0YWxzIGZyb20gJy4vcmVwb3J0V2ViVml0YWxzJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb250YWluZXJzL0hvbWUnO1xyXG4vLyBpbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIGZyb20gJy4vc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbic7XHJcbmltcG9ydCB7IHJlcXVlc3RSb2JvdHMsIHNlYXJjaFJvYm90cyB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHsgcmVxdWVzdFJvYm90cywgc2VhcmNoUm9ib3RzIH0pO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcnMsXHJcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSwgbG9nZ2VyKVxyXG4pO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8SG9tZSAvPlxyXG4gIDwvUHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcbi8vIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucmVnaXN0ZXIoKTtcclxuXHJcbi8vIHJlcG9ydFdlYlZpdGFscygpO1xyXG4iLCJpbXBvcnQgeyBhcGlDYWxsIH0gZnJvbSAnLi4vYXBpL2FwaSc7XHJcbmltcG9ydCB7XHJcbiAgQ0hBTkdFX1NFQVJDSEZJRUxELFxyXG4gIFJFUVVFU1RfUk9CT1RTX1BFTkRJTkcsXHJcbiAgUkVRVUVTVF9ST0JPVFNfU1VDQ0VTUyxcclxuICBSRVFVRVNUX1JPQk9UU19GQUlMRUQsXHJcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFNlYXJjaEZpZWxkID0gKHRleHQpID0+ICh7XHJcbiAgdHlwZTogQ0hBTkdFX1NFQVJDSEZJRUxELFxyXG4gIHBheWxvYWQ6IHRleHQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RSb2JvdHMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IFJFUVVFU1RfUk9CT1RTX1BFTkRJTkcgfSk7XHJcbiAgYXBpQ2FsbCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICAgIC50aGVuKChkYXRhKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFUVVFU1RfUk9CT1RTX1NVQ0NFU1MsIHBheWxvYWQ6IGRhdGEgfSkpXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PlxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFUVVFU1RfUk9CT1RTX0ZBSUxFRCwgcGF5bG9hZDogZXJyb3IgfSlcclxuICAgICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBDSEFOR0VfU0VBUkNIRklFTEQgPSAnQ0hBTkdFX1NFQVJDSEZJRUxEJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1JPQk9UU19QRU5ESU5HID0gJ1JFUVVFU1RfUk9CT1RTX1BFTkRJTkcnO1xyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9ST0JPVFNfU1VDQ0VTUyA9ICdSRVFVRVNUX1JPQk9UU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUk9CT1RTX0ZBSUxFRCA9ICdSRVFVRVNUX1JPQk9UU19GQUlMRUQnOyIsImltcG9ydCB7XHJcbiAgQ0hBTkdFX1NFQVJDSEZJRUxELFxyXG4gIFJFUVVFU1RfUk9CT1RTX1BFTkRJTkcsXHJcbiAgUkVRVUVTVF9ST0JPVFNfU1VDQ0VTUyxcclxuICBSRVFVRVNUX1JPQk9UU19GQUlMRURcclxuIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlU2VhcmNoID0ge1xyXG4gIHNlYXJjaEZpZWxkOiAnJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUm9ib3RzID0gKHN0YXRlPWluaXRpYWxTdGF0ZVNlYXJjaCwgYWN0aW9uPXt9KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDSEFOR0VfU0VBUkNIRklFTEQ6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3NlYXJjaEZpZWxkOiBhY3Rpb24ucGF5bG9hZH0pXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZVJvYm90cyA9IHtcclxuICByb2JvdHM6IFtdLFxyXG4gIGlzUGVuZGluZzogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFJvYm90cyA9IChzdGF0ZT1pbml0aWFsU3RhdGVSb2JvdHMsIGFjdGlvbj17fSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgUkVRVUVTVF9ST0JPVFNfUEVORElORzpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNQZW5kaW5nOiB0cnVlfSlcclxuICAgIGNhc2UgUkVRVUVTVF9ST0JPVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7cm9ib3RzOiBhY3Rpb24ucGF5bG9hZCwgaXNQZW5kaW5nOiBmYWxzZX0pXHJcbiAgICBjYXNlIFJFUVVFU1RfUk9CT1RTX0ZBSUxFRDpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7ZXJyb3I6IGFjdGlvbi5wYXlsb2FkfSlcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=