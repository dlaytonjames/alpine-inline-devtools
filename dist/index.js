/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.alpineDevToolsHandler = function (position) {
  return {
    alpines: [],
    open: false,
    observer: null,
    windowRef: null,
    start: function start() {
      var _this = this;

      this.alpines = null;
      this.alpines = document.querySelectorAll('[x-data]:not(#alpine-devtools)');
      this.observer = new MutationObserver(function (mutations) {
        _this.updateAlpines();
      });
      this.registerEventsFromComponentsOnWindow();
      this.alpines && this.wrapAlpines(); // If the window is already open, refresh it

      if (sessionStorage.getItem('alpine-devtools')) {
        this.openWindow();
        this.updateAlpines();
      }
    },
    registerEventsFromComponentsOnWindow: function registerEventsFromComponentsOnWindow() {
      var _this2 = this;

      var events = [];
      this.alpines.forEach(function (alpine) {
        events.push(_toConsumableArray(alpine.outerHTML.matchAll(/(x-on:|@)(.*?)(=|\.)/g)).map(function (matches) {
          return matches[2];
        }));
      });
      events.flat().forEach(function (eventName) {
        window.addEventListener(eventName, function () {
          _this2.alpines = document.querySelectorAll('[x-data]:not(#alpine-devtools)');
        });
      });
    },
    wrapAlpines: function wrapAlpines() {
      var _this3 = this;

      this.alpines.forEach(function (alpine) {
        _this3.observer.observe(alpine, {
          attributes: true,
          childList: true,
          subtree: true
        });
      });
    },
    updateAlpines: function updateAlpines() {
      this.alpines = document.querySelectorAll('[x-data]:not(#alpine-devtools)');

      if (this.windowRef) {
        this.windowRef.alpines = this.alpines;
        var viewer = this.windowRef.document.querySelector('#alpine-devtools-viewer');
        if (!viewer) return;
        typeof viewer.__x !== 'undefined' && viewer.__x.updateElements(viewer);
      }
    },
    openWindow: function openWindow() {
      this.windowRef = window.open('', 'alpine-devtools', 'width=400, height=650, left=100, top=100');
      if (!this.windowRef) return sessionStorage.removeItem('alpine-devtools');
      this.windowRef.document.body.style.backgroundColor = '#1a202c';
      this.windowRef.document.body.innerHTML = '';
      this.windowRef.document.title = 'Alpine DevTools';
      this.windowRef.alpines = this.alpines;

      if (!this.windowRef.document.getElementById('alpine-devtools-script')) {
        var alpineScript = this.windowRef.document.createElement('script');
        alpineScript.id = 'alpine-devtools-script';
        var version = window.Alpine.version || '2.x.x';
        alpineScript.src = "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v".concat(version, "/dist/alpine.min.js");
        this.windowRef.document.head.appendChild(alpineScript);
      }

      if (!this.windowRef.document.getElementById('tailwindcss-devtools-style')) {
        var tailwindCSS = this.windowRef.document.createElement('link');
        tailwindCSS.id = 'tailwindcss-devtools-style';
        tailwindCSS.href = 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css';
        tailwindCSS.rel = 'stylesheet';
        this.windowRef.document.head.appendChild(tailwindCSS);
      }

      if (!this.windowRef.document.getElementById('devtools-script')) {
        var devtoolsScript = this.windowRef.document.createElement('script');
        devtoolsScript.id = 'devtools-script';
        devtoolsScript.setAttribute('type', 'text/javascript');
        devtoolsScript.src = document.getElementById('alpine-devtools-script').src;
        this.windowRef.document.head.appendChild(devtoolsScript);
      }

      this.setUpPopupData();
    },
    setUpPopupData: function setUpPopupData() {
      var _this4 = this;

      var viewer = this.windowRef.document.createElement('div');
      viewer.id = 'alpine-devtools-viewer';
      viewer.setAttribute('x-data', 'window.alpineDevToolsViewer(window.alpines)');
      viewer.innerHTML = this.viewerHTML(); // Add the reference to the session so we don't need to reopen the popup everytime

      sessionStorage.setItem('alpine-devtools', this.windowRef.name);
      this.open = true;
      setTimeout(function () {
        _this4.windowRef.document.body.appendChild(viewer);
      }, 500);
      this.windowRef.addEventListener('beforeunload', function () {
        sessionStorage.removeItem('alpine-devtools');
        _this4.windowRef = null;
        _this4.open = false;
      });
    },
    viewerHTML: function viewerHTML() {
      return "\n            <div\n                class=\"flex flex-col justify-between fixed inset-0 bg-gray-900 text-gray-400 py-3 max-w-screen overflow-hidden\"\n                x-cloak\n                x-show=\"open\"\n\t\t\t\tx-transition:enter=\"transition ease-in duration-200\"\n\t\t\t\tx-transition:enter-start=\"transform opacity-100 translate-y-2\"\n\t\t\t\tx-transition:enter-end=\"transform opacity-100\"\n\t\t\t\tx-transition:leave=\"transition ease-out duration-300\"\n\t\t\t\tx-transition:leave-start=\"transform translate-y-0 opacity-100\"\n\t\t\t\tx-transition:leave-end=\"transform translate-y-2 opacity-0\">\n\t\t\t\t<div\n\t\t\t\t\tclass=\"divide-y-2 divide-gray-700 space-y-5 -mt-5 pb-5 px-3 overflow-scroll\">\n\t\t\t\t\t<template x-for=\"alpine of alpines\">\n\t\t\t\t\t\t<div class=\"pt-5\">\n\t\t\t\t\t\t\t<div x-text=\"computeTitle(alpine)\" class=\"mb-1 font-extrabold\" style=\"color:#d8dee9\"></div>\n\t\t\t\t\t\t\t<template x-if=\"!getAlpineData(alpine).length\"><p class=\"text-sm\">No data found</p></template>\n\t\t\t\t\t\t\t<template x-for=\"[key, value] of getAlpineData(alpine)\">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tclass=\"leading-normal\"\n\t\t\t\t\t\t\t\t\tx-html=\"getItem(key, value)\"\n\t\t\t\t\t\t\t\t\tx-show=\"getType(value) !== 'function'\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</template>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"border-t border-gray-700 text-gray-500 pt-2 leading-none mx-3\" style=\"font-size:11px\">\n\t\t\t\t\t<a class=\"hover:text-blue-500 mr-px\" target=\"_blank\" href=\"https://twitter.com/kevinbatdorf\">@kevinbatdorf</a>\n\t\t\t\t\t\xB7\n\t\t\t\t\t<a class=\"hover:text-blue-500 mx-px\" target=\"_blank\" href=\"https://github.com/kevinbatdorf/alpine-inline-devtools\">github</a>\n\t\t\t\t\t\xB7\n\t\t\t\t\t<a class=\"hover:text-blue-500 mx-px\" target=\"_blank\" href=\"https://github.com/sponsors/KevinBatdorf\">sponsor</a>\n\t\t\t\t\t\xB7\n\t\t\t\t\t<a class=\"hover:text-blue-500 mx-px\" target=\"_blank\" href=\"https://codepen.io/collection/nRxrPk\">demos</a>\n\t\t\t\t</div>\n\t\t\t</div>";
    }
  };
};

window.alpineDevToolsViewer = function (alpines) {
  Alpine.addMagicProperty('devtoolsRefresh', function ($el) {
    var _this5 = this;

    return function () {
      _this5.updateElements();
    };
  });
  return {
    computeTitle: function computeTitle(alpine) {
      return alpine.getAttribute('x-title') || alpine.getAttribute('aria-label') || alpine.id || this.convertFunctionName(alpine.getAttribute('x-data')) || "<".concat(alpine.tagName.toLowerCase(), ">");
    },
    getAlpineData: function getAlpineData(alpine) {
      if (!alpine.__x) return [];
      return Object.entries(alpine.__x.getUnobservedData());
    },
    getType: function getType(value) {
      if (Array.isArray(value)) {
        return 'array';
      }

      if (typeof value === 'function') {
        return 'function';
      }

      return _typeof(value);
    },
    getItem: function getItem(key, value) {
      return "<span>\n\t\t\t\t<span style=\"color:#4aea8b\" class=\"text-serif\">\n\t\t\t\t\t<span class=\"inline-block\" style=\"min-width:1rem\">".concat(key, "</span>\n\t\t\t\t\t<span class=\"text-white\">:</span>\n\t\t\t\t\t<span style=\"color:#8ac0cf\" class=\"bg-gray-800 px-1 text-xs\">").concat(this.getType(value), "</span>\n\t\t\t\t</span>\n\t\t\t\t<span style=\"color:#d8dee9\">").concat(this.getType(value) === 'string' ? this.escapeHTML(this.getValue(value)) : this.getValue(value), "</span>\n\t\t\t</span>");
    },
    getValue: function getValue(value) {
      var _this6 = this;

      if (this.getType(value) == 'boolean') {
        return value;
      }

      if (this.getType(value) == 'number') {
        return value;
      }

      if (this.getType(value) == 'string') {
        return "\"".concat(value, "\"");
      }

      if (this.getType(value) == 'array') {
        if (!value) return value;
        return Object.entries(value).map(function (_ref) {
          var _ref2 = _toArray(_ref),
              item = _ref2.slice(0);

          return "<ul class=\"ml-4\">".concat(_this6.getItem(item[0], item[1]), "</ul>");
        }).join('');
      }

      if (this.getType(value) == 'object') {
        if (!value) return value;
        return Object.entries(value).map(function (_ref3) {
          var _ref4 = _toArray(_ref3),
              item = _ref4.slice(0);

          return "<ul class=\"ml-4\">".concat(_this6.getItem(item[0], item[1]), "</ul>");
        }).join('');
      }

      return value;
    },
    convertFunctionName: function convertFunctionName(functionName) {
      if (functionName.indexOf('{') === 0) return;
      var name = functionName.replace(/\(([^\)]+)\)/, '').replace('()', '').replace(/([A-Z])/g, " $1");
      return name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
    },
    escapeHTML: function escapeHTML(html) {
      var div = document.createElement('div');
      div.innerText = html;
      return div.innerHTML;
    }
  };
};

function alpineDevTools() {
  var alpineDevToolsComponent = document.createElement('button');
  alpineDevToolsComponent.id = 'alpine-devtools';
  alpineDevToolsComponent.setAttribute('x-data', 'alpineDevToolsHandler()');
  alpineDevToolsComponent.setAttribute('x-show.transition.opacity.duration.1000', 'alpines.length && !open');
  alpineDevToolsComponent.setAttribute('x-on:click', 'openWindow');
  alpineDevToolsComponent.setAttribute('x-init', '$nextTick(() => { start() })');
  alpineDevToolsComponent.textContent = 'Alpine Devtools';
  alpineDevToolsComponent.style.cssText = "position:fixed!important;bottom:0!important;right:0!important;margin:4px!important;padding:5px 8px!important;border-radius:10px!important;background-color:#1a202c!important;color:#d8dee9!important;font-size:14px!important;outline:0!important";
  document.body.appendChild(alpineDevToolsComponent);
}

var alpine = window.deferLoadingAlpine || function (alpine) {
  return alpine();
};

window.deferLoadingAlpine = function (callback) {
  alpine(callback);
  alpineDevTools();
};

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevin/code/alpinejs/alpine-inline-devtools/index.js */"./index.js");


/***/ })

/******/ });