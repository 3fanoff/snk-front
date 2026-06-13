/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 513
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


;// ./src/js/css-carousel.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CSSCarousel = /*#__PURE__*/function () {
  function CSSCarousel(containerNode) {
    _classCallCheck(this, CSSCarousel);
    _defineProperty(this, "containerNode", null);
    _defineProperty(this, "buttonNodes", []);
    _defineProperty(this, "indicatorNode", null);
    _defineProperty(this, "itemNodes", []);
    _defineProperty(this, "firstItemNode", null);
    _defineProperty(this, "activeItemNode", null);
    _defineProperty(this, "visibleLength", 0);
    _defineProperty(this, "indicators", {
      activeNode: null,
      activeIndex: 0,
      nodes: []
    });
    this.containerNode = containerNode;
  }
  return _createClass(CSSCarousel, [{
    key: "init",
    value: function init() {
      this.buttonNodes = Array.from(this.containerNode.querySelectorAll('[data-carousel-btn]'));
      this.indicatorNode = this.containerNode.querySelector('[data-carousel-nav]');
      this.carouselNode = this.containerNode.querySelector('[data-carousel]');
      this.firstItemNode = this.carouselNode.querySelector('[data-carousel-item]');
      this.buttonEvents();
      if (this.indicatorNode) {
        this.createIndicators();
        this.indicatorEvents();
      }
      this.scrollEvents();
    }
  }, {
    key: "buttonEvents",
    value: function buttonEvents() {
      var _this = this;
      this.buttonNodes.forEach(function (carouselBtnNode) {
        carouselBtnNode.addEventListener('click', function () {
          var direction = carouselBtnNode.dataset.type === 'next' ? 1 : -1;
          _this.carouselNode.scrollBy({
            left: _this.firstItemNode.clientWidth * direction,
            top: 0,
            behavior: 'smooth'
          });
        });
      });
    }
  }, {
    key: "createIndicator",
    value: function createIndicator(i) {
      var li = document.createElement('li');
      li.innerText = i.toString();
      if (i === 1) {
        li.classList.add('active');
      }
      this.indicatorNode.appendChild(li);
      return li;
    }
  }, {
    key: "createIndicators",
    value: function createIndicators() {
      this.itemNodes = Array.from(this.carouselNode.querySelectorAll('[data-carousel-item]'));
      this.visibleLength = Math.floor(this.carouselNode.clientWidth / this.firstItemNode.clientWidth);
      var numOfIndicators = Math.ceil(this.itemNodes.length / this.visibleLength);
      this.indicatorNode.innerHTML = '';
      if (numOfIndicators <= 1) {
        this.indicatorNode.style.display = 'none';
        return;
      }
      var i = 1;
      while (i <= numOfIndicators) {
        var indicator = this.createIndicator(i);
        if (i === 1) {
          this.indicators.activeNode = indicator;
          this.indicators.activeIndex = i;
        }
        this.indicators.nodes.push(indicator);
        i++;
      }
    }
  }, {
    key: "indicatorEvents",
    value: function indicatorEvents() {
      var _this2 = this;
      this.indicators.nodes.forEach(function (indicator, i) {
        indicator.addEventListener('click', function () {
          if (indicator === _this2.indicators.activeNode) return;
          _this2.indicators.activeNode.classList.remove('active');
          indicator.classList.add('active');
          var move = _this2.firstItemNode.clientWidth * _this2.visibleLength * (i + 1 - _this2.indicators.activeIndex);
          _this2.carouselNode.scrollBy({
            left: move,
            top: 0,
            behavior: 'smooth'
          });
          _this2.indicators.activeNode = indicator;
          _this2.indicators.activeIndex = i + 1;
        });
      });
    }
  }, {
    key: "scrollEvents",
    value: function scrollEvents() {
      var _this3 = this;
      this.carouselNode.addEventListener('scrollsnapchange', function (e) {
        if (_this3.activeItemNode) {
          _this3.activeItemNode.classList.remove('active');
        }
        if (e.snapTargetInline) {
          e.snapTargetInline.classList.add('active');
          _this3.activeItemNode = e.snapTargetInline;
        }
      });
    }
  }]);
}();

// EXTERNAL MODULE: ./node_modules/bootstrap/js/src/collapse.js
var collapse = __webpack_require__(694);
// EXTERNAL MODULE: ./node_modules/bootstrap/js/src/tab.js
var src_tab = __webpack_require__(898);
// EXTERNAL MODULE: ./node_modules/bootstrap/js/src/modal.js + 4 modules
var modal = __webpack_require__(795);
;// ./src/main.js





document.addEventListener('DOMContentLoaded', function () {
  Array.from(document.querySelectorAll('.js-carousel-container')).forEach(function (carousel) {
    new CSSCarousel(carousel).init();
  });
  Array.from(document.querySelectorAll('.js-accordion')).forEach(function (accordion) {
    new collapse/* default */.A(accordion);
  });
  Array.from(document.querySelectorAll('.js-tabs [data-bs-toggle="tab"]')).forEach(function (tab) {
    new src_tab/* default */.A(tab);
  });

  /*Array.from(document.querySelectorAll('.js-modal')).forEach(modal => {
      new Modal(modal);
  })*/

  new modal/* default */.A('.js-modal');
});

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0,
/******/ 			1: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpvpsnk"] = self["webpackChunkpvpsnk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1,2], function() { return __webpack_require__(513); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;