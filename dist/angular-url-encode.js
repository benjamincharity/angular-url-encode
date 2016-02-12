(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-url-encode", [], factory);
	else if(typeof exports === 'object')
		exports["angular-url-encode"] = factory();
	else
		root["angular-url-encode"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _encode = __webpack_require__(1);
	
	var _decode = __webpack_require__(2);
	
	angular.module('bc.AngularUrlEncode', []).filter('bcEncode', _encode.EncodeFilter).filter('bcDecode', _decode.DecodeFilter);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	EncodeFilter.$inject = ["$window"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EncodeFilter = EncodeFilter;
	function EncodeFilter($window) {
	    'ngInject';
	
	    return encode;
	
	    /**
	     * URL-encode a string
	     *
	     * @param {String} input
	     * @return {String} output
	     */
	    function encode(input) {
	        return $window.encodeURIComponent(input);
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	DecodeFilter.$inject = ["$window"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DecodeFilter = DecodeFilter;
	function DecodeFilter($window) {
	    'ngInject';
	
	    return decode;
	
	    /**
	     * Decode an encoded URL string
	     *
	     * @param {String} input
	     * @return {String} output
	     */
	    function decode(input) {
	        return $window.decodeURI(input);
	    }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-url-encode.js.map