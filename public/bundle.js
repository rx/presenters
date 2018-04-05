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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(10);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
 * @final
 */
var MDCTextFieldHelperTextFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);

  _createClass(MDCTextFieldHelperTextFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /**
     * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldHelperTextAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldHelperTextAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          setContent: function setContent() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldHelperTextAdapter} adapter
     */

  }]);

  function MDCTextFieldHelperTextFoundation(adapter) {
    _classCallCheck(this, MDCTextFieldHelperTextFoundation);

    return _possibleConstructorReturn(this, (MDCTextFieldHelperTextFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperTextFoundation)).call(this, Object.assign(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
  }

  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */


  _createClass(MDCTextFieldHelperTextFoundation, [{
    key: 'setContent',
    value: function setContent(content) {
      this.adapter_.setContent(content);
    }

    /** @param {boolean} isPersistent Sets the persistency of the helper text. */

  }, {
    key: 'setPersistent',
    value: function setPersistent(isPersistent) {
      if (isPersistent) {
        this.adapter_.addClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      }
    }

    /**
     * @param {boolean} isValidation True to make the helper text act as an
     *   error validation message.
     */

  }, {
    key: 'setValidation',
    value: function setValidation(isValidation) {
      if (isValidation) {
        this.adapter_.addClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      }
    }

    /** Makes the helper text visible to the screen reader. */

  }, {
    key: 'showToScreenReader',
    value: function showToScreenReader() {
      this.adapter_.removeAttr(_constants.strings.ARIA_HIDDEN);
    }

    /**
     * Sets the validity of the helper text based on the input validity.
     * @param {boolean} inputIsValid
     */

  }, {
    key: 'setValidity',
    value: function setValidity(inputIsValid) {
      var helperTextIsPersistent = this.adapter_.hasClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      var helperTextIsValidationMsg = this.adapter_.hasClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setAttr(_constants.strings.ROLE, 'alert');
      } else {
        this.adapter_.removeAttr(_constants.strings.ROLE);
      }

      if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
        this.hide_();
      }
    }

    /**
     * Hides the help text from screen readers.
     * @private
     */

  }, {
    key: 'hide_',
    value: function hide_() {
      this.adapter_.setAttr(_constants.strings.ARIA_HIDDEN, 'true');
    }
  }]);

  return MDCTextFieldHelperTextFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldHelperTextFoundation;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(11);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
 * @final
 */
var MDCTextFieldIconFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldIconFoundation, _MDCFoundation);

  _createClass(MDCTextFieldIconFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /**
     * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldIconAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldIconAdapter} */{
          setAttr: function setAttr() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          notifyIconAction: function notifyIconAction() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldIconAdapter} adapter
     */

  }]);

  function MDCTextFieldIconFoundation(adapter) {
    _classCallCheck(this, MDCTextFieldIconFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, (MDCTextFieldIconFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldIconFoundation)).call(this, Object.assign(MDCTextFieldIconFoundation.defaultAdapter, adapter)));

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };
    return _this;
  }

  _createClass(MDCTextFieldIconFoundation, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      ['click', 'keydown'].forEach(function (evtType) {
        _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      ['click', 'keydown'].forEach(function (evtType) {
        _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
      });
    }

    /**
     * Sets the content of the helper text field.
     * @param {boolean} disabled
     */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      if (disabled) {
        this.adapter_.setAttr('tabindex', '-1');
      } else {
        this.adapter_.setAttr('tabindex', '0');
      }
    }

    /**
     * Handles an interaction event
     * @param {!Event} evt
     */

  }, {
    key: 'handleInteraction',
    value: function handleInteraction(evt) {
      if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
        this.adapter_.notifyIconAction();
      }
    }
  }]);

  return MDCTextFieldIconFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldIconFoundation;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  BOTTOM_LINE_SELECTOR: '.mdc-line-ripple'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-text-field',
  UPGRADED: 'mdc-text-field--upgraded',
  DISABLED: 'mdc-text-field--disabled',
  DENSE: 'mdc-text-field--dense',
  FOCUSED: 'mdc-text-field--focused',
  INVALID: 'mdc-text-field--invalid',
  BOX: 'mdc-text-field--box',
  OUTLINED: 'mdc-text-field--outlined'
};

/** @enum {number} */
var numbers = {
  LABEL_SCALE: 0.75,
  DENSE_LABEL_SCALE: 0.923
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoundationMapType = exports.NativeInputType = exports.MDCTextFieldAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

var _foundation3 = __webpack_require__(4);

var _foundation4 = _interopRequireDefault(_foundation3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * @typedef {{
 *   value: string,
 *   disabled: boolean,
 *   badInput: boolean,
 *   validity: {
 *     badInput: boolean,
 *     valid: boolean,
 *   },
 * }}
 */
var NativeInputType = void 0;

/**
 * @typedef {{
 *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
 *   icon: (!MDCTextFieldIconFoundation|undefined),
 * }}
 */
var FoundationMapType = void 0;

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTextFieldAdapter = function () {
  function MDCTextFieldAdapter() {
    _classCallCheck(this, MDCTextFieldAdapter);
  }

  _createClass(MDCTextFieldAdapter, [{
    key: 'addClass',

    /**
     * Adds a class to the root Element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the root Element.
     * @param {string} className
     */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {}

    /**
     * Returns true if the root element contains the given class name.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: 'hasClass',
    value: function hasClass(className) {}

    /**
     * Registers an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'registerTextFieldInteractionHandler',
    value: function registerTextFieldInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'deregisterTextFieldInteractionHandler',
    value: function deregisterTextFieldInteractionHandler(type, handler) {}

    /**
     * Registers an event listener on the native input element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'registerInputInteractionHandler',
    value: function registerInputInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the native input element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'deregisterInputInteractionHandler',
    value: function deregisterInputInteractionHandler(evtType, handler) {}

    /**
     * Registers a validation attribute change listener on the input element.
     * @param {function(!Array): undefined} handler
     * @return {!MutationObserver}
     */

  }, {
    key: 'registerValidationAttributeChangeHandler',
    value: function registerValidationAttributeChangeHandler(handler) {}

    /**
     * Disconnects a validation attribute observer on the input element.
     * @param {!MutationObserver} observer
     */

  }, {
    key: 'deregisterValidationAttributeChangeHandler',
    value: function deregisterValidationAttributeChangeHandler(observer) {}

    /**
     * Returns an object representing the native text input element, with a
     * similar API shape. The object returned should include the value, disabled
     * and badInput properties, as well as the checkValidity() function. We never
     * alter the value within our code, however we do update the disabled
     * property, so if you choose to duck-type the return value for this method
     * in your implementation it's important to keep this in mind. Also note that
     * this method can return null, which the foundation will handle gracefully.
     * @return {?Element|?NativeInputType}
     */

  }, {
    key: 'getNativeInput',
    value: function getNativeInput() {}

    /**
     * Returns true if the textfield is focused.
     * We achieve this via `document.activeElement === this.root_`.
     * @return {boolean}
     */

  }, {
    key: 'isFocused',
    value: function isFocused() {}

    /**
     * Returns true if the direction of the root element is set to RTL.
     * @return {boolean}
     */

  }, {
    key: 'isRtl',
    value: function isRtl() {}

    /**
     * Activates the line ripple.
     */

  }, {
    key: 'activateLineRipple',
    value: function activateLineRipple() {}

    /**
     * Deactivates the line ripple.
     */

  }, {
    key: 'deactivateLineRipple',
    value: function deactivateLineRipple() {}

    /**
     * Sets the transform origin of the line ripple.
     * @param {number} normalizedX
     */

  }, {
    key: 'setLineRippleTransformOrigin',
    value: function setLineRippleTransformOrigin(normalizedX) {}

    /**
     * Only implement if label exists.
     * Shakes label if shouldShake is true.
     * @param {boolean} shouldShake
     */

  }, {
    key: 'shakeLabel',
    value: function shakeLabel(shouldShake) {}

    /**
     * Only implement if label exists.
     * Floats the label above the input element if shouldFloat is true.
     * @param {boolean} shouldFloat
     */

  }, {
    key: 'floatLabel',
    value: function floatLabel(shouldFloat) {}

    /**
     * Returns true if label element exists, false if it doesn't.
     * @return {boolean}
     */

  }, {
    key: 'hasLabel',
    value: function hasLabel() {}

    /**
     * Only implement if label exists.
     * Returns width of label in pixels.
     * @return {number}
     */

  }, {
    key: 'getLabelWidth',
    value: function getLabelWidth() {}

    /**
     * Returns true if outline element exists, false if it doesn't.
     * @return {boolean}
     */

  }, {
    key: 'hasOutline',
    value: function hasOutline() {}

    /**
     * Only implement if outline element exists.
     * Updates SVG Path on outline element based on the
     * label element width and RTL context.
     * @param {number} labelWidth
     * @param {boolean} isRtl
     */

  }, {
    key: 'updateOutlinePath',
    value: function updateOutlinePath(labelWidth, isRtl) {}
  }]);

  return MDCTextFieldAdapter;
}();

exports.MDCTextFieldAdapter = MDCTextFieldAdapter;
exports.NativeInputType = NativeInputType;
exports.FoundationMapType = FoundationMapType;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldHelperTextAdapter = function () {
  function MDCTextFieldHelperTextAdapter() {
    _classCallCheck(this, MDCTextFieldHelperTextAdapter);
  }

  _createClass(MDCTextFieldHelperTextAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the helper text element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the helper text element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns whether or not the helper text element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets an attribute with a given value on the helper text element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}

    /**
     * Removes an attribute from the helper text element.
     * @param {string} attr
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(attr) {}

    /**
     * Sets the text content for the helper text element.
     * @param {string} content
     */

  }, {
    key: "setContent",
    value: function setContent(content) {}
  }]);

  return MDCTextFieldHelperTextAdapter;
}();

exports.default = MDCTextFieldHelperTextAdapter;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Icon.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the text field icon into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldIconAdapter = function () {
  function MDCTextFieldIconAdapter() {
    _classCallCheck(this, MDCTextFieldIconAdapter);
  }

  _createClass(MDCTextFieldIconAdapter, [{
    key: "setAttr",

    /**
     * Sets an attribute on the icon element.
     * @param {string} attr
     * @param {string} value
     */
    value: function setAttr(attr, value) {}

    /**
     * Registers an event listener on the icon element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the icon element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
     */

  }, {
    key: "notifyIconAction",
    value: function notifyIconAction() {}
  }]);

  return MDCTextFieldIconAdapter;
}();

exports.default = MDCTextFieldIconAdapter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(13);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCLineRippleAdapter>}
 * @final
 */
var MDCLineRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCLineRippleFoundation, _MDCFoundation);

  _createClass(MDCLineRippleFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCLineRippleAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCLineRippleAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCLineRippleAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          registerEventHandler: function registerEventHandler() {},
          deregisterEventHandler: function deregisterEventHandler() {}
        }
      );
    }

    /**
     * @param {!MDCLineRippleAdapter=} adapter
     */

  }]);

  function MDCLineRippleFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /** @type {!MDCLineRippleAdapter} */{};

    _classCallCheck(this, MDCLineRippleFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, (MDCLineRippleFoundation.__proto__ || Object.getPrototypeOf(MDCLineRippleFoundation)).call(this, Object.assign(MDCLineRippleFoundation.defaultAdapter, adapter)));

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };
    return _this;
  }

  _createClass(MDCLineRippleFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    }

    /**
     * Activates the line ripple
     */

  }, {
    key: 'activate',
    value: function activate() {
      this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
      this.adapter_.addClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
    }

    /**
     * Sets the center of the ripple animation to the given X coordinate.
     * @param {!number} xCoordinate
     */

  }, {
    key: 'setRippleCenter',
    value: function setRippleCenter(xCoordinate) {
      var attributeString = 'transform-origin: ' + xCoordinate + 'px center';

      this.adapter_.setAttr('style', attributeString);
    }

    /**
     * Deactivates the line ripple
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.adapter_.addClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
    }

    /**
     * Handles a transition end event
     * @param {!Event} evt
     */

  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      // Wait for the line ripple to be either transparent or opaque
      // before emitting the animation end event
      var isDeactivating = this.adapter_.hasClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);

      if (evt.propertyName === 'opacity') {
        if (isDeactivating) {
          this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
          this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
        }
      }
    }
  }]);

  return MDCLineRippleFoundation;
}(_foundation2.default);

exports.default = MDCLineRippleFoundation;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC TextField Line Ripple.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the line ripple into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCLineRippleAdapter = function () {
  function MDCLineRippleAdapter() {
    _classCallCheck(this, MDCLineRippleAdapter);
  }

  _createClass(MDCLineRippleAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the line ripple element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the line ripple element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets an attribute with a given value on the line ripple element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}

    /**
     * Registers an event listener on the line ripple element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerEventHandler",
    value: function registerEventHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the line ripple element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterEventHandler",
    value: function deregisterEventHandler(evtType, handler) {}
  }]);

  return MDCLineRippleAdapter;
}();

exports.default = MDCLineRippleAdapter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(15);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
 * @final
 */
var MDCFloatingLabelFoundation = function (_MDCFoundation) {
  _inherits(MDCFloatingLabelFoundation, _MDCFoundation);

  _createClass(MDCFloatingLabelFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCFloatingLabelAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCFloatingLabelAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          getWidth: function getWidth() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {}
        }
      );
    }

    /**
     * @param {!MDCFloatingLabelAdapter} adapter
     */

  }]);

  function MDCFloatingLabelFoundation(adapter) {
    _classCallCheck(this, MDCFloatingLabelFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, (MDCFloatingLabelFoundation.__proto__ || Object.getPrototypeOf(MDCFloatingLabelFoundation)).call(this, Object.assign(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };
    return _this;
  }

  _createClass(MDCFloatingLabelFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    }

    /**
     * Returns the width of the label element.
     * @return {number}
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.adapter_.getWidth();
    }

    /**
     * Styles the label to produce the label shake for errors.
     * @param {boolean} shouldShake adds shake class if true,
     * otherwise removes shake class.
     */

  }, {
    key: 'shake',
    value: function shake(shouldShake) {
      var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

      if (shouldShake) {
        this.adapter_.addClass(LABEL_SHAKE);
      } else {
        this.adapter_.removeClass(LABEL_SHAKE);
      }
    }

    /**
     * Styles the label to float or dock.
     * @param {boolean} shouldFloat adds float class if true, otherwise remove
     * float and shake class to dock label.
     */

  }, {
    key: 'float',
    value: function float(shouldFloat) {
      var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
          LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
          LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

      if (shouldFloat) {
        this.adapter_.addClass(LABEL_FLOAT_ABOVE);
      } else {
        this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
        this.adapter_.removeClass(LABEL_SHAKE);
      }
    }

    /**
     * Handles an interaction event on the root element.
     */

  }, {
    key: 'handleShakeAnimationEnd_',
    value: function handleShakeAnimationEnd_() {
      var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

      this.adapter_.removeClass(LABEL_SHAKE);
    }
  }]);

  return MDCFloatingLabelFoundation;
}(_foundation2.default);

exports.default = MDCFloatingLabelFoundation;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Floating Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the floating label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCFloatingLabelAdapter = function () {
  function MDCFloatingLabelAdapter() {
    _classCallCheck(this, MDCFloatingLabelAdapter);
  }

  _createClass(MDCFloatingLabelAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the label element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the label element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns the width of the label element.
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {}

    /**
     * Registers an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}
  }]);

  return MDCFloatingLabelAdapter;
}();

exports.default = MDCFloatingLabelAdapter;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(17);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
 * @final
 */
var MDCNotchedOutlineFoundation = function (_MDCFoundation) {
  _inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

  _createClass(MDCNotchedOutlineFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /**
     * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCNotchedOutlineAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCNotchedOutlineAdapter} */{
          getWidth: function getWidth() {},
          getHeight: function getHeight() {},
          setOutlinePathAttr: function setOutlinePathAttr() {},
          getIdleOutlineStyleValue: function getIdleOutlineStyleValue() {}
        }
      );
    }

    /**
     * @param {!MDCNotchedOutlineAdapter} adapter
     */

  }]);

  function MDCNotchedOutlineFoundation(adapter) {
    _classCallCheck(this, MDCNotchedOutlineFoundation);

    return _possibleConstructorReturn(this, (MDCNotchedOutlineFoundation.__proto__ || Object.getPrototypeOf(MDCNotchedOutlineFoundation)).call(this, Object.assign(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
  }

  /**
   * Updates the SVG path of the focus outline element based on the notchWidth
   * and the RTL context.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   */


  _createClass(MDCNotchedOutlineFoundation, [{
    key: 'updateSvgPath',
    value: function updateSvgPath(notchWidth) {
      var isRtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
      var radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') || this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
      var radius = parseFloat(radiusStyleValue);
      var width = this.adapter_.getWidth();
      var height = this.adapter_.getHeight();
      var cornerWidth = radius + 1.2;
      var leadingStrokeLength = Math.abs(11 - cornerWidth);
      var paddedNotchWidth = notchWidth + 8;

      // The right, bottom, and left sides of the outline follow the same SVG path.
      var pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (-width + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius + 'v' + (-height + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

      var path = void 0;
      if (!isRtl) {
        path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1 + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength) + pathMiddle + 'h' + leadingStrokeLength;
      } else {
        path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1 + 'h' + leadingStrokeLength + pathMiddle + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength);
      }

      this.adapter_.setOutlinePathAttr(path);
    }
  }]);

  return MDCNotchedOutlineFoundation;
}(_foundation2.default);

exports.default = MDCNotchedOutlineFoundation;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Notched Outline.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Notched Outline into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCNotchedOutlineAdapter = function () {
  function MDCNotchedOutlineAdapter() {
    _classCallCheck(this, MDCNotchedOutlineAdapter);
  }

  _createClass(MDCNotchedOutlineAdapter, [{
    key: "getWidth",

    /**
     * Returns the width of the root element.
     * @return {number}
     */
    value: function getWidth() {}

    /**
     * Returns the height of the root element.
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {}

    /**
     * Sets the "d" attribute of the outline element's SVG path.
     * @param {string} value
     */

  }, {
    key: "setOutlinePathAttr",
    value: function setOutlinePathAttr(value) {}

    /**
     * Returns the idle outline element's computed style value of the given css property `propertyName`.
     * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
     * @param {string} propertyName
     * @return {string}
     */

  }, {
    key: "getIdleOutlineStyleValue",
    value: function getIdleOutlineStyleValue(propertyName) {}
  }]);

  return MDCNotchedOutlineAdapter;
}();

exports.default = MDCNotchedOutlineAdapter;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  PATH_SELECTOR: '.mdc-notched-outline__path',
  IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle'
};

exports.strings = strings;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This class displays a page level message
var VSnackbar = exports.VSnackbar = function () {
    function VSnackbar(message, action_text, action_fn) {
        _classCallCheck(this, VSnackbar);

        this.message = message;
        this.action_text = action_text;
        this.action_fn = action_fn;
    }

    _createClass(VSnackbar, [{
        key: 'display',
        value: function display() {
            var snackbarContainer = document.querySelector('#snackbar');
            var data = {
                message: this.message,
                timeout: 2000,
                actionHandler: this.action_fn,
                actionText: this.action_text
            };
            componentHandler.upgradeElement(snackbarContainer);
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        }
    }]);

    return VSnackbar;
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errors = __webpack_require__(21);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VBase = exports.VBase = function () {
    function VBase() {
        _classCallCheck(this, VBase);
    }

    _createClass(VBase, [{
        key: 'clearErrors',
        value: function clearErrors() {
            new _errors.VErrors().clearErrors();
        }
    }]);

    return VBase;
}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VErrors = exports.VErrors = function () {
    function VErrors() {
        _classCallCheck(this, VErrors);
    }

    _createClass(VErrors, [{
        key: 'clearErrors',
        value: function clearErrors() {
            var errorMessages = document.querySelectorAll('.v-error-message');

            for (var i = 0; i < errorMessages.length; i++) {
                errorMessages[i].remove();
            }
        }

        // Rails errors
        // {
        //   "name": [
        //     "Requires name"
        //   ]
        // }

        // Validation errors
        // { :email => ["must be filled"] }

        // Custom errors
        // { :email => "must be filled" }

        // Exceptions
        // {exception: 'Something bad happened' }

    }, {
        key: 'stringsToArrays',
        value: function stringsToArrays(value) {
            if (Array.isArray(value) || value.constructor === Object) {
                return value;
            }
            return new Array(value);
        }
    }, {
        key: 'normalizeErrors',
        value: function normalizeErrors(errors) {
            var _this = this;

            if (errors && errors.constructor === Object) {
                return Object.keys(errors).reduce(function (previous, key) {
                    previous[key] = _this.stringsToArrays(errors[key]);
                    return previous;
                }, {});
            }
            return [];
        }

        // [http_status, content_type, resultText]

    }, {
        key: 'displayErrors',
        value: function displayErrors(results) {
            var httpStatus = results[0];
            var contentType = results[1];
            var resultText = results[2];

            if (contentType && contentType.indexOf("application/json") !== -1) {
                var response = JSON.parse(resultText);
                var pageErrors = Object.values(this.normalizeErrors(response)).reduce(function (previous, value) {
                    if (Array.isArray(value)) {
                        previous.push(value.join('<br/>'));
                    }
                    return previous;
                }, []);
                var fieldErrors = this.normalizeErrors(response.errors);

                for (var field in fieldErrors) {
                    if (!this.displayInputError(field, fieldErrors[field])) {
                        if (!this.prependError(field, fieldErrors[field])) {
                            // Collect errors that can't be displayed at the field level
                            pageErrors.push(fieldErrors[field].join('<br/>'));
                        }
                    }
                }
                this.prependError('errors', pageErrors);
            } else if (httpStatus === 0) {
                this.prependError('errors', ["Unable to contact server. Please check that you are online and retry."]);
            } else if (results !== true) {
                this.prependError('errors', ["The server returned an unexpected response! Status:" + httpStatus]);
            }
        }

        // Sets the helper text on the field
        // Returns true if it was able to set the error on the control

    }, {
        key: 'displayInputError',
        value: function displayInputError(divId, messages) {
            var currentEl = document.getElementById(divId);
            if (currentEl && currentEl.mdcComponent) {
                currentEl.mdcComponent.helperTextContent = messages.join(', ');
                var helperText = document.getElementById(divId + '-input-helper-text');
                helperText.classList.add('mdc-text-field--invalid', 'mdc-text-field-helper-text--validation-msg', 'mdc-text-field-helper-text--persistent');
                currentEl.mdcComponent.valid = false;
                return true;
            }
            return false;
        }

        // Creates a div before the element with the same id as the error
        // Used to display an error message without their being an input field to attach the error to

    }, {
        key: 'prependError',
        value: function prependError(div_id, messages) {
            // create a new div element
            var newDiv = document.createElement("div");
            newDiv.className = 'v-error-message';
            // and give it some content
            var newContent = document.createTextNode(messages.join('<br/>'));
            // add the text node to the newly created div
            newDiv.appendChild(newContent);

            // add the newly created element and its content into the DOM
            var currentDiv = document.getElementById(div_id);
            if (currentDiv) {
                currentDiv.parentElement.insertBefore(newDiv, currentDiv);
                return true;
            }
            return false;
        }
    }]);

    return VErrors;
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _initialize = __webpack_require__(52);

window.dialogPolyfill = __webpack_require__(48);
window.componentHandler = __webpack_require__(51);

document.addEventListener("DOMContentLoaded", function (event) {
    (0, _initialize.initialize)(document);
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initButtons = initButtons;

var _ripple = __webpack_require__(25);

function initButtons(root) {
    console.log('\tButtons');

    var rippleButtons = root.querySelectorAll('.v-js-ripple-button');
    for (var i = 0; i < rippleButtons.length; i++) {
        var button = rippleButtons[i];
        button.mdcComponent = new _ripple.MDCRipple(button);
    }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(5);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(26);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(6);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /** @return {!MDCRippleFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(5);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(27);

var _util = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {!{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {!{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {!{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {!{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {!{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',
    value: function isSupported_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.registerRootHandlers_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    /** @private */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_() {
      var _this4 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this9.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this9.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }

        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];
      });
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = null;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(evtObject, state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(e, state);
          _this13.resetActivationState_();
        });
      }
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.deactivate_(event);
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initDialogs = initDialogs;
function initDialogs(root) {
    console.log('\tDialogs');

    var docDialogs = root.querySelectorAll('.v-js-dialog');
    for (var i = 0; i < docDialogs.length; i++) {
        var dialog = docDialogs[i];

        var dialogButtons = dialog.querySelectorAll('button:not([disabled])');
        for (var i = 0; i != dialogButtons.length; i++) {
            var buttonEvents = dialogButtons[i].dataset.events;
            dialogButtons[i].dialog = dialog;
            // If the dialog button does not have any events tied to it,
            // then close the dialog on click, otherwise let the events handlers
            // take care of the close.
            if (!buttonEvents) {
                dialogButtons[i].addEventListener('click', function () {
                    dialog.close();
                });
            }
        }
    }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initTextFields = initTextFields;

var _textfield = __webpack_require__(30);

function initTextFields(root) {
    console.log('\tTextFields');

    var textFields = root.querySelectorAll('.mdc-text-field');
    for (var i = 0; i < textFields.length; i++) {
        var textField = textFields[i];
        textField.mdcComponent = new _textfield.MDCTextField(textField);
    }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldIconFoundation = exports.MDCTextFieldIcon = exports.MDCTextFieldHelperTextFoundation = exports.MDCTextFieldHelperText = exports.MDCTextFieldFoundation = exports.MDCTextField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(31);

var _util = __webpack_require__(2);

var _constants = __webpack_require__(8);

var _adapter = __webpack_require__(9);

var _foundation = __webpack_require__(36);

var _foundation2 = _interopRequireDefault(_foundation);

var _index2 = __webpack_require__(39);

var _index3 = __webpack_require__(40);

var _index4 = __webpack_require__(41);

var _index5 = __webpack_require__(42);

var _index6 = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */
var MDCTextField = function (_MDCComponent) {
  _inherits(MDCTextField, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTextField() {
    var _ref;

    _classCallCheck(this, MDCTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTextField.__proto__ || Object.getPrototypeOf(MDCTextField)).call.apply(_ref, [this].concat(args)));

    _this.input_;
    /** @type {?MDCRipple} */
    _this.ripple;
    /** @private {?MDCLineRipple} */
    _this.lineRipple_;
    /** @private {?MDCTextFieldHelperText} */
    _this.helperText_;
    /** @private {?MDCTextFieldIcon} */
    _this.icon_;
    /** @private {?MDCFloatingLabel} */
    _this.label_;
    /** @private {?MDCNotchedOutline} */
    _this.outline_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */


  _createClass(MDCTextField, [{
    key: 'initialize',


    /**
     * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
     * creates a new MDCRipple.
     * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
     * creates a new MDCLineRipple.
     * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
     * creates a new MDCTextFieldHelperText.
     * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
     * creates a new MDCTextFieldIcon.
     * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
     * creates a new MDCFloatingLabel.
     * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
     * creates a new MDCNotchedOutline.
     */
    value: function initialize() {
      var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
        return new _index.MDCRipple(el, foundation);
      };
      var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new _index2.MDCLineRipple(el);
      };
      var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
        return new _index3.MDCTextFieldHelperText(el);
      };
      var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
        return new _index4.MDCTextFieldIcon(el);
      };

      var _this2 = this;

      var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
        return new _index5.MDCFloatingLabel(el);
      };
      var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
        return new _index6.MDCNotchedOutline(el);
      };

      this.input_ = this.root_.querySelector(_constants.strings.INPUT_SELECTOR);
      var labelElement = this.root_.querySelector(_constants.strings.LABEL_SELECTOR);
      if (labelElement) {
        this.label_ = labelFactory(labelElement);
      }
      var lineRippleElement = this.root_.querySelector(_constants.strings.BOTTOM_LINE_SELECTOR);
      if (lineRippleElement) {
        this.lineRipple_ = lineRippleFactory(lineRippleElement);
      }
      var outlineElement = this.root_.querySelector(_constants.strings.OUTLINE_SELECTOR);
      if (outlineElement) {
        this.outline_ = outlineFactory(outlineElement);
      }
      if (this.input_.hasAttribute(_constants.strings.ARIA_CONTROLS)) {
        var helperTextElement = document.getElementById(this.input_.getAttribute(_constants.strings.ARIA_CONTROLS));
        if (helperTextElement) {
          this.helperText_ = helperTextFactory(helperTextElement);
        }
      }
      var iconElement = this.root_.querySelector(_constants.strings.ICON_SELECTOR);
      if (iconElement) {
        this.icon_ = iconFactory(iconElement);
      }

      this.ripple = null;
      if (this.root_.classList.contains(_constants.cssClasses.BOX) || this.root_.classList.contains(_constants.cssClasses.OUTLINED)) {
        // For outlined text fields, the ripple is instantiated on the outline element instead of the root element
        // to clip the ripple at the outline while still allowing the label to be visible beyond the outline.
        var rippleCapableSurface = outlineElement ? this.outline_ : this;
        var rippleRoot = outlineElement ? outlineElement : this.root_;
        var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);
        var adapter = Object.assign(_index.MDCRipple.createAdapter( /** @type {!RippleCapableSurface} */rippleCapableSurface), {
          isSurfaceActive: function isSurfaceActive() {
            return _this2.input_[MATCHES](':active');
          },
          registerInteractionHandler: function registerInteractionHandler(type, handler) {
            return _this2.input_.addEventListener(type, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
            return _this2.input_.removeEventListener(type, handler);
          }
        });
        var foundation = new _index.MDCRippleFoundation(adapter);
        this.ripple = rippleFactory(rippleRoot, foundation);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.ripple) {
        this.ripple.destroy();
      }
      if (this.lineRipple_) {
        this.lineRipple_.destroy();
      }
      if (this.helperText_) {
        this.helperText_.destroy();
      }
      if (this.icon_) {
        this.icon_.destroy();
      }
      if (this.label_) {
        this.label_.destroy();
      }
      if (this.outline_) {
        this.outline_.destroy();
      }
      _get(MDCTextField.prototype.__proto__ || Object.getPrototypeOf(MDCTextField.prototype), 'destroy', this).call(this);
    }

    /**
     * Initiliazes the Text Field's internal state based on the environment's
     * state.
     */

  }, {
    key: 'initialSyncWithDom',
    value: function initialSyncWithDom() {
      this.disabled = this.input_.disabled;
    }

    /**
     * @return {string} The value of the input.
     */

  }, {
    key: 'layout',


    /**
     * Recomputes the outline SVG path for the outline element, and recomputes
     * all dimensions and positions for the ripple element.
     */
    value: function layout() {
      this.foundation_.updateOutline();
      if (this.ripple) {
        this.ripple.layout();
      }
    }

    /**
     * @return {!MDCTextFieldFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default(
      /** @type {!MDCTextFieldAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this3.root_.classList.contains(className);
        },
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
          return _this3.root_.addEventListener(evtType, handler);
        },
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
          return _this3.root_.removeEventListener(evtType, handler);
        },
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
          var observer = new MutationObserver(handler);
          var targetNode = _this3.root_.querySelector(_constants.strings.INPUT_SELECTOR);
          var config = { attributes: true };
          observer.observe(targetNode, config);
          return observer;
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
          return observer.disconnect();
        },
        isFocused: function isFocused() {
          return document.activeElement === _this3.root_.querySelector(_constants.strings.INPUT_SELECTOR);
        },
        isRtl: function isRtl() {
          return window.getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
        }
      }, this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()), this.getFoundationMap_());
    }

    /**
     * @return {!{
     *   shakeLabel: function(boolean): undefined,
     *   floatLabel: function(boolean): undefined,
     *   hasLabel: function(): boolean,
     *   getLabelWidth: function(): number,
     * }}
     */

  }, {
    key: 'getLabelAdapterMethods_',
    value: function getLabelAdapterMethods_() {
      var _this4 = this;

      return {
        shakeLabel: function shakeLabel(shouldShake) {
          return _this4.label_.shake(shouldShake);
        },
        floatLabel: function floatLabel(shouldFloat) {
          return _this4.label_.float(shouldFloat);
        },
        hasLabel: function hasLabel() {
          return !!_this4.label_;
        },
        getLabelWidth: function getLabelWidth() {
          return _this4.label_.getWidth();
        }
      };
    }

    /**
     * @return {!{
     *   activateLineRipple: function(): undefined,
     *   deactivateLineRipple: function(): undefined,
     *   setLineRippleTransformOrigin: function(!number): undefined,
     * }}
     */

  }, {
    key: 'getLineRippleAdapterMethods_',
    value: function getLineRippleAdapterMethods_() {
      var _this5 = this;

      return {
        activateLineRipple: function activateLineRipple() {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.activate();
          }
        },
        deactivateLineRipple: function deactivateLineRipple() {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.deactivate();
          }
        },
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.setRippleCenter(normalizedX);
          }
        }
      };
    }

    /**
     * @return {!{
     *   hasOutline: function(): boolean,
     *   updateOutlinePath: function(number, boolean): undefined,
     * }}
     */

  }, {
    key: 'getOutlineAdapterMethods_',
    value: function getOutlineAdapterMethods_() {
      var _this6 = this;

      return {
        hasOutline: function hasOutline() {
          return !!_this6.outline_;
        },
        updateOutlinePath: function updateOutlinePath(labelWidth, isRtl) {
          return _this6.outline_.updateSvgPath(labelWidth, isRtl);
        }
      };
    }

    /**
     * @return {!{
     *   registerInputInteractionHandler: function(string, function()): undefined,
     *   deregisterInputInteractionHandler: function(string, function()): undefined,
     *   getNativeInput: function(): ?Element,
     * }}
     */

  }, {
    key: 'getInputAdapterMethods_',
    value: function getInputAdapterMethods_() {
      var _this7 = this;

      return {
        registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
          return _this7.input_.addEventListener(evtType, handler);
        },
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
          return _this7.input_.removeEventListener(evtType, handler);
        },
        getNativeInput: function getNativeInput() {
          return _this7.input_;
        }
      };
    }

    /**
     * Returns a map of all subcomponents to subfoundations.
     * @return {!FoundationMapType}
     */

  }, {
    key: 'getFoundationMap_',
    value: function getFoundationMap_() {
      return {
        helperText: this.helperText_ ? this.helperText_.foundation : undefined,
        icon: this.icon_ ? this.icon_.foundation : undefined
      };
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /**
     * @param {string} value The value to set on the input.
     */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /**
     * @return {boolean} True if the Text Field is disabled.
     */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /**
     * @param {boolean} disabled Sets the Text Field disabled or enabled.
     */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /**
     * @return {boolean} valid True if the Text Field is valid.
     */

  }, {
    key: 'valid',
    get: function get() {
      return this.foundation_.isValid();
    }

    /**
     * @param {boolean} valid Sets the Text Field valid or invalid.
     */
    ,
    set: function set(valid) {
      this.foundation_.setValid(valid);
    }

    /**
     * @return {boolean} True if the Text Field is required.
     */

  }, {
    key: 'required',
    get: function get() {
      return this.input_.required;
    }

    /**
     * @param {boolean} required Sets the Text Field to required.
     */
    ,
    set: function set(required) {
      this.input_.required = required;
    }

    /**
     * @return {string} The input element's validation pattern.
     */

  }, {
    key: 'pattern',
    get: function get() {
      return this.input_.pattern;
    }

    /**
     * @param {string} pattern Sets the input element's validation pattern.
     */
    ,
    set: function set(pattern) {
      this.input_.pattern = pattern;
    }

    /**
     * @return {number} The input element's minLength.
     */

  }, {
    key: 'minLength',
    get: function get() {
      return this.input_.minLength;
    }

    /**
     * @param {number} minLength Sets the input element's minLength.
     */
    ,
    set: function set(minLength) {
      this.input_.minLength = minLength;
    }

    /**
     * @return {number} The input element's maxLength.
     */

  }, {
    key: 'maxLength',
    get: function get() {
      return this.input_.maxLength;
    }

    /**
     * @param {number} maxLength Sets the input element's maxLength.
     */
    ,
    set: function set(maxLength) {
      // Chrome throws exception if maxLength is set < 0
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    }

    /**
     * @return {string} The input element's min.
     */

  }, {
    key: 'min',
    get: function get() {
      return this.input_.min;
    }

    /**
     * @param {string} min Sets the input element's min.
     */
    ,
    set: function set(min) {
      this.input_.min = min;
    }

    /**
     * @return {string} The input element's max.
     */

  }, {
    key: 'max',
    get: function get() {
      return this.input_.max;
    }

    /**
     * @param {string} max Sets the input element's max.
     */
    ,
    set: function set(max) {
      this.input_.max = max;
    }

    /**
     * @return {string} The input element's step.
     */

  }, {
    key: 'step',
    get: function get() {
      return this.input_.step;
    }

    /**
     * @param {string} step Sets the input element's step.
     */
    ,
    set: function set(step) {
      this.input_.step = step;
    }

    /**
     * Sets the helper text element content.
     * @param {string} content
     */

  }, {
    key: 'helperTextContent',
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTextField(root);
    }
  }]);

  return MDCTextField;
}(_component2.default);

exports.MDCTextField = MDCTextField;
exports.MDCTextFieldFoundation = _foundation2.default;
exports.MDCTextFieldHelperText = _index3.MDCTextFieldHelperText;
exports.MDCTextFieldHelperTextFoundation = _index3.MDCTextFieldHelperTextFoundation;
exports.MDCTextFieldIcon = _index4.MDCTextFieldIcon;
exports.MDCTextFieldIconFoundation = _index4.MDCTextFieldIconFoundation;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(7);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(32);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /** @return {!MDCRippleFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(7);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(33);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {!{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {!{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {!{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {!{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {!{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',
    value: function isSupported_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.registerRootHandlers_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    /** @private */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_() {
      var _this4 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this9.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this9.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }

        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];
      });
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = null;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(evtObject, state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(e, state);
          _this13.resetActivationState_();
        });
      }
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.deactivate_(event);
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};

/** @enum {string} */
var cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ICON_EVENT: 'MDCTextField:icon'
};

exports.strings = strings;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(9);

var _foundation3 = __webpack_require__(12);

var _foundation4 = _interopRequireDefault(_foundation3);

var _foundation5 = __webpack_require__(3);

var _foundation6 = _interopRequireDefault(_foundation5);

var _foundation7 = __webpack_require__(4);

var _foundation8 = _interopRequireDefault(_foundation7);

var _foundation9 = __webpack_require__(14);

var _foundation10 = _interopRequireDefault(_foundation9);

var _foundation11 = __webpack_require__(16);

var _foundation12 = _interopRequireDefault(_foundation11);

var _constants = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


// whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
// under section: `Validation-related attributes`
var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */

var MDCTextFieldFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldFoundation, _MDCFoundation);

  _createClass(MDCTextFieldFoundation, [{
    key: 'shouldShake',


    /** @return {boolean} */
    get: function get() {
      return !this.isValid() && !this.isFocused_;
    }

    /** @return {boolean} */

  }, {
    key: 'shouldFloat',
    get: function get() {
      return !this.isBadInput_() && (!!this.getValue() || this.isFocused_);
    }

    /**
     * {@see MDCTextFieldAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldAdapter}
     */

  }], [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
          deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
          registerInputInteractionHandler: function registerInputInteractionHandler() {},
          deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
          registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
          deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
          getNativeInput: function getNativeInput() {},
          isFocused: function isFocused() {},
          isRtl: function isRtl() {},
          activateLineRipple: function activateLineRipple() {},
          deactivateLineRipple: function deactivateLineRipple() {},
          setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
          shakeLabel: function shakeLabel() {},
          floatLabel: function floatLabel() {},
          hasLabel: function hasLabel() {},
          getLabelWidth: function getLabelWidth() {},
          hasOutline: function hasOutline() {},
          updateOutlinePath: function updateOutlinePath() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldAdapter} adapter
     * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
     */

  }]);

  function MDCTextFieldFoundation(adapter) {
    var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};

    _classCallCheck(this, MDCTextFieldFoundation);

    /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
    var _this = _possibleConstructorReturn(this, (MDCTextFieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldFoundation)).call(this, Object.assign(MDCTextFieldFoundation.defaultAdapter, adapter)));

    _this.helperText_ = foundationMap.helperText;
    /** @type {!MDCTextFieldIconFoundation|undefined} */
    _this.icon_ = foundationMap.icon;

    /** @private {boolean} */
    _this.isFocused_ = false;
    /** @private {boolean} */
    _this.receivedUserInput_ = false;
    /** @private {boolean} */
    _this.useCustomValidityChecking_ = false;
    /** @private {boolean} */
    _this.isValid_ = true;
    /** @private {function(): undefined} */
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus();
    };
    /** @private {function(!Event): undefined} */
    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };
    /** @private {function(!Event): undefined} */
    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };
    /** @private {function(!Array): undefined} */
    _this.validationAttributeChangeHandler_ = function (mutations) {
      return _this.handleValidationAttributeMutation_(mutations);
    };
    /** @private {!MutationObserver} */
    _this.validationObserver_;
    return _this;
  }

  _createClass(MDCTextFieldFoundation, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
      // Ensure label does not collide with any pre-filled value.
      if (this.adapter_.hasLabel() && this.getValue()) {
        this.adapter_.floatLabel(this.shouldFloat);
      }

      if (this.adapter_.isFocused()) {
        this.inputFocusHandler_();
      }

      this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
      this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
      this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
      ['mousedown', 'touchstart'].forEach(function (evtType) {
        _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
      });
      ['click', 'keydown'].forEach(function (evtType) {
        _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
      });
      this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
      this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
      this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
      this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
      ['mousedown', 'touchstart'].forEach(function (evtType) {
        _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
      });
      ['click', 'keydown'].forEach(function (evtType) {
        _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
      });
      this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    }

    /**
     * Handles user interactions with the Text Field.
     */

  }, {
    key: 'handleTextFieldInteraction',
    value: function handleTextFieldInteraction() {
      if (this.adapter_.getNativeInput().disabled) {
        return;
      }
      this.receivedUserInput_ = true;
    }

    /**
     * Handles validation attribute changes
     * @param {Array<MutationRecord>} mutationsList
     * @private
     */

  }, {
    key: 'handleValidationAttributeMutation_',
    value: function handleValidationAttributeMutation_(mutationsList) {
      var _this4 = this;

      mutationsList.some(function (mutation) {
        if (VALIDATION_ATTR_WHITELIST.indexOf(mutation.attributeName) > -1) {
          _this4.styleValidity_(true);
          return true;
        }
      });
    }

    /**
     * Updates the focus outline for outlined text fields.
     */

  }, {
    key: 'updateOutline',
    value: function updateOutline() {
      if (!this.adapter_.hasOutline() || !this.adapter_.hasLabel()) {
        return;
      }

      var isDense = this.adapter_.hasClass(_constants.cssClasses.DENSE);
      var labelScale = isDense ? _constants.numbers.DENSE_LABEL_SCALE : _constants.numbers.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      var isRtl = this.adapter_.isRtl();
      this.adapter_.updateOutlinePath(labelWidth, isRtl);
    }

    /**
     * Activates the text field focus state.
     */

  }, {
    key: 'activateFocus',
    value: function activateFocus() {
      this.isFocused_ = true;
      this.styleFocused_(this.isFocused_);
      this.adapter_.activateLineRipple();
      this.updateOutline();
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
      }
      if (this.helperText_) {
        this.helperText_.showToScreenReader();
      }
    }

    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     * @param {!Event} evt
     */

  }, {
    key: 'setTransformOrigin',
    value: function setTransformOrigin(evt) {
      var targetClientRect = evt.target.getBoundingClientRect();
      var evtCoords = { x: evt.clientX, y: evt.clientY };
      var normalizedX = evtCoords.x - targetClientRect.left;
      this.adapter_.setLineRippleTransformOrigin(normalizedX);
    }

    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programatically).
     */

  }, {
    key: 'autoCompleteFocus',
    value: function autoCompleteFocus() {
      if (!this.receivedUserInput_) {
        this.activateFocus();
      }
    }

    /**
     * Deactivates the Text Field's focus state.
     */

  }, {
    key: 'deactivateFocus',
    value: function deactivateFocus() {
      this.isFocused_ = false;
      this.adapter_.deactivateLineRipple();
      var input = this.getNativeInput_();
      var shouldRemoveLabelFloat = !input.value && !this.isBadInput_();
      var isValid = this.isValid();
      this.styleValidity_(isValid);
      this.styleFocused_(this.isFocused_);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
      }
      if (shouldRemoveLabelFloat) {
        this.receivedUserInput_ = false;
      }
    }

    /**
     * @return {string} The value of the input Element.
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeInput_().value;
    }

    /**
     * @param {string} value The value to set on the input Element.
     */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeInput_().value = value;
      var isValid = this.isValid();
      this.styleValidity_(isValid);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
      }
    }

    /**
     * @return {boolean} If a custom validity is set, returns that value.
     *     Otherwise, returns the result of native validity checks.
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      return this.useCustomValidityChecking_ ? this.isValid_ : this.isNativeInputValid_();
    }

    /**
     * @param {boolean} isValid Sets the validity state of the Text Field.
     */

  }, {
    key: 'setValid',
    value: function setValid(isValid) {
      this.useCustomValidityChecking_ = true;
      this.isValid_ = isValid;
      // Retrieve from the getter to ensure correct logic is applied.
      isValid = this.isValid();
      this.styleValidity_(isValid);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
      }
    }

    /**
     * @return {boolean} True if the Text Field is disabled.
     */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeInput_().disabled;
    }

    /**
     * @param {boolean} disabled Sets the text-field disabled or enabled.
     */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeInput_().disabled = disabled;
      this.styleDisabled_(disabled);
    }

    /**
     * @param {string} content Sets the content of the helper text.
     */

  }, {
    key: 'setHelperTextContent',
    value: function setHelperTextContent(content) {
      if (this.helperText_) {
        this.helperText_.setContent(content);
      }
    }

    /**
     * @return {boolean} True if the Text Field input fails in converting the
     *     user-supplied value.
     * @private
     */

  }, {
    key: 'isBadInput_',
    value: function isBadInput_() {
      return this.getNativeInput_().validity.badInput;
    }

    /**
     * @return {boolean} The result of native validity checking
     *     (ValidityState.valid).
     */

  }, {
    key: 'isNativeInputValid_',
    value: function isNativeInputValid_() {
      return this.getNativeInput_().validity.valid;
    }

    /**
     * Styles the component based on the validity state.
     * @param {boolean} isValid
     * @private
     */

  }, {
    key: 'styleValidity_',
    value: function styleValidity_(isValid) {
      var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

      if (isValid) {
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.addClass(INVALID);
      }
      if (this.helperText_) {
        this.helperText_.setValidity(isValid);
      }
    }

    /**
     * Styles the component based on the focused state.
     * @param {boolean} isFocused
     * @private
     */

  }, {
    key: 'styleFocused_',
    value: function styleFocused_(isFocused) {
      var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

      if (isFocused) {
        this.adapter_.addClass(FOCUSED);
      } else {
        this.adapter_.removeClass(FOCUSED);
      }
    }

    /**
     * Styles the component based on the disabled state.
     * @param {boolean} isDisabled
     * @private
     */

  }, {
    key: 'styleDisabled_',
    value: function styleDisabled_(isDisabled) {
      var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
          DISABLED = _MDCTextFieldFoundati.DISABLED,
          INVALID = _MDCTextFieldFoundati.INVALID;

      if (isDisabled) {
        this.adapter_.addClass(DISABLED);
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
      if (this.icon_) {
        this.icon_.setDisabled(isDisabled);
      }
    }

    /**
     * @return {!Element|!NativeInputType} The native text input from the
     * host environment, or a dummy if none exists.
     * @private
     */

  }, {
    key: 'getNativeInput_',
    value: function getNativeInput_() {
      return this.adapter_.getNativeInput() ||
      /** @type {!NativeInputType} */{
        value: '',
        disabled: false,
        validity: {
          badInput: false,
          valid: true
        }
      };
    }
  }]);

  return MDCTextFieldFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldFoundation;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};

exports.cssClasses = cssClasses;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake'
};

exports.cssClasses = cssClasses;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCLineRippleFoundation = exports.MDCLineRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(13);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(12);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCLineRippleFoundation>}
 * @final
 */
var MDCLineRipple = function (_MDCComponent) {
  _inherits(MDCLineRipple, _MDCComponent);

  function MDCLineRipple() {
    _classCallCheck(this, MDCLineRipple);

    return _possibleConstructorReturn(this, (MDCLineRipple.__proto__ || Object.getPrototypeOf(MDCLineRipple)).apply(this, arguments));
  }

  _createClass(MDCLineRipple, [{
    key: 'activate',


    /**
     * Activates the line ripple
     */
    value: function activate() {
      this.foundation_.activate();
    }

    /**
     * Deactivates the line ripple
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }

    /**
     * Sets the transform origin given a user's click location. The `rippleCenter` is the
     * x-coordinate of the middle of the ripple.
     * @param {!number} xCoordinate
     */

  }, {
    key: 'setRippleCenter',
    value: function setRippleCenter(xCoordinate) {
      this.foundation_.setRippleCenter(xCoordinate);
    }

    /**
     * @return {!MDCLineRippleFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCLineRippleAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        registerEventHandler: function registerEventHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        }
      }));
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCLineRipple}
     */
    value: function attachTo(root) {
      return new MDCLineRipple(root);
    }
  }]);

  return MDCLineRipple;
}(_component2.default);

exports.MDCLineRipple = MDCLineRipple;
exports.MDCLineRippleFoundation = _foundation2.default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldHelperTextFoundation = exports.MDCTextFieldHelperText = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(10);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
 * @final
 */
var MDCTextFieldHelperText = function (_MDCComponent) {
  _inherits(MDCTextFieldHelperText, _MDCComponent);

  function MDCTextFieldHelperText() {
    _classCallCheck(this, MDCTextFieldHelperText);

    return _possibleConstructorReturn(this, (MDCTextFieldHelperText.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperText)).apply(this, arguments));
  }

  _createClass(MDCTextFieldHelperText, [{
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTextFieldHelperTextFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCTextFieldHelperTextAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        removeAttr: function removeAttr(attr) {
          return _this2.root_.removeAttribute(attr);
        },
        setContent: function setContent(content) {
          _this2.root_.textContent = content;
        }
      }));
    }
  }, {
    key: 'foundation',


    /**
     * @return {!MDCTextFieldHelperTextFoundation}
     */
    get: function get() {
      return this.foundation_;
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTextFieldHelperText}
     */
    value: function attachTo(root) {
      return new MDCTextFieldHelperText(root);
    }
  }]);

  return MDCTextFieldHelperText;
}(_component2.default);

exports.MDCTextFieldHelperText = MDCTextFieldHelperText;
exports.MDCTextFieldHelperTextFoundation = _foundation2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldIconFoundation = exports.MDCTextFieldIcon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(11);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(4);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
 * @final
 */
var MDCTextFieldIcon = function (_MDCComponent) {
  _inherits(MDCTextFieldIcon, _MDCComponent);

  function MDCTextFieldIcon() {
    _classCallCheck(this, MDCTextFieldIcon);

    return _possibleConstructorReturn(this, (MDCTextFieldIcon.__proto__ || Object.getPrototypeOf(MDCTextFieldIcon)).apply(this, arguments));
  }

  _createClass(MDCTextFieldIcon, [{
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTextFieldIconFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCTextFieldIconAdapter} */Object.assign({
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        },
        notifyIconAction: function notifyIconAction() {
          return _this2.emit(_foundation2.default.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
        }
      }));
    }
  }, {
    key: 'foundation',


    /**
     * @return {!MDCTextFieldIconFoundation}
     */
    get: function get() {
      return this.foundation_;
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTextFieldIcon}
     */
    value: function attachTo(root) {
      return new MDCTextFieldIcon(root);
    }
  }]);

  return MDCTextFieldIcon;
}(_component2.default);

exports.MDCTextFieldIcon = MDCTextFieldIcon;
exports.MDCTextFieldIconFoundation = _foundation2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCFloatingLabelFoundation = exports.MDCFloatingLabel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(15);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(14);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
 * @final
 */
var MDCFloatingLabel = function (_MDCComponent) {
  _inherits(MDCFloatingLabel, _MDCComponent);

  function MDCFloatingLabel() {
    _classCallCheck(this, MDCFloatingLabel);

    return _possibleConstructorReturn(this, (MDCFloatingLabel.__proto__ || Object.getPrototypeOf(MDCFloatingLabel)).apply(this, arguments));
  }

  _createClass(MDCFloatingLabel, [{
    key: 'shake',


    /**
     * Styles the label to produce the label shake for errors.
     * @param {boolean} shouldShake styles the label to shake by adding shake class
     * if true, otherwise will stop shaking by removing shake class.
     */
    value: function shake(shouldShake) {
      this.foundation_.shake(shouldShake);
    }

    /**
     * Styles label to float/dock.
     * @param {boolean} shouldFloat styles the label to float by adding float class
     * if true, otherwise docks the label by removing the float class.
     */

  }, {
    key: 'float',
    value: function float(shouldFloat) {
      this.foundation_.float(shouldFloat);
    }

    /**
     * @return {number}
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.foundation_.getWidth();
    }

    /**
     * @return {!MDCFloatingLabelFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        getWidth: function getWidth() {
          return _this2.root_.offsetWidth;
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        }
      });
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCFloatingLabel}
     */
    value: function attachTo(root) {
      return new MDCFloatingLabel(root);
    }
  }]);

  return MDCFloatingLabel;
}(_component2.default);

exports.MDCFloatingLabel = MDCFloatingLabel;
exports.MDCFloatingLabelFoundation = _foundation2.default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCNotchedOutlineFoundation = exports.MDCNotchedOutline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(17);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(16);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */
var MDCNotchedOutline = function (_MDCComponent) {
  _inherits(MDCNotchedOutline, _MDCComponent);

  function MDCNotchedOutline() {
    _classCallCheck(this, MDCNotchedOutline);

    return _possibleConstructorReturn(this, (MDCNotchedOutline.__proto__ || Object.getPrototypeOf(MDCNotchedOutline)).apply(this, arguments));
  }

  _createClass(MDCNotchedOutline, [{
    key: 'updateSvgPath',


    /**
      * Updates the SVG path of the outline element based on the
      * notch element width and the RTL context.
      * @param {number} notchWidth The notch width in the outline.
      * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
      * will be right justified in outline path, otherwise left justified.
      */
    value: function updateSvgPath(notchWidth, isRtl) {
      this.foundation_.updateSvgPath(notchWidth, isRtl);
    }

    /**
     * @return {!MDCNotchedOutlineFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        getWidth: function getWidth() {
          return _this2.root_.offsetWidth;
        },
        getHeight: function getHeight() {
          return _this2.root_.offsetHeight;
        },
        setOutlinePathAttr: function setOutlinePathAttr(value) {
          var path = _this2.root_.querySelector(_constants.strings.PATH_SELECTOR);
          path.setAttribute('d', value);
        },
        getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
          var idleOutlineElement = _this2.root_.parentNode.querySelector(_constants.strings.IDLE_OUTLINE_SELECTOR);
          return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
        }
      });
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCNotchedOutline}
     */
    value: function attachTo(root) {
      return new MDCNotchedOutline(root);
    }
  }]);

  return MDCNotchedOutline;
}(_component2.default);

exports.MDCNotchedOutline = MDCNotchedOutline;
exports.MDCNotchedOutlineFoundation = _foundation2.default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VEvents = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.initEvents = initEvents;

var _loads = __webpack_require__(45);

var _post = __webpack_require__(46);

var _replace = __webpack_require__(47);

var _dialog = __webpack_require__(53);

var _errors = __webpack_require__(21);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VEvents = exports.VEvents = function () {
    //[[type, url, target, params]]
    function VEvents(actions, event) {
        var _this = this;

        _classCallCheck(this, VEvents);

        this.event = event;
        this.actions = actions.map(function (action) {
            return _this.constructor.action_class(action, event);
        });
    }

    _createClass(VEvents, [{
        key: 'call',
        value: function call() {
            // Adapted from http://www.datchley.name/promise-patterns-anti-patterns/#executingpromisesinseries
            var fnlist = this.actions.map(function (action) {
                return function () {
                    return Promise.resolve(action.call());
                };
            });

            // Execute a list of Promise return functions in series
            function pseries(list) {
                var p = Promise.resolve();
                return list.reduce(function (pacc, fn) {
                    return pacc = pacc.then(fn);
                }, p);
            }

            var event = this.event;

            pseries(fnlist).then(function (results) {
                var contentType = results[1];
                var responseText = results[2];
                var responseURL = results[3];

                if (event.target.dialog) {
                    event.target.dialog.close();
                }
                if (contentType && contentType.indexOf("text/html") !== -1 && typeof responseURL !== 'undefined') {
                    window.location = responseURL;
                }
            }).catch(function (results) {
                new _errors.VErrors().displayErrors(results);
            });
        }
    }], [{
        key: 'action_class',
        value: function action_class(action, event) {
            var action_type = action[0];
            var url = action[1];
            var target = action[2];
            var params = action[3];

            switch (action_type) {
                case 'loads':
                    return new _loads.VLoadsPage(url);
                case 'replaces':
                    return new _replace.VReplaceElement(target, url, params, event);
                case 'post':
                    return new _post.VPost(url, params, 'POST', event);
                case 'update':
                    return new _post.VPost(url, params, 'PUT', event);
                case 'delete':
                    return new _post.VPost(url, params, 'DELETE', event);
                case 'dialog':
                    return new _dialog.VDialog(target, params, event);
                default:
                    throw action_type + ' is not supported.';
            }
        }
    }]);

    return VEvents;
}();

// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example


function createEventHandler(actionsData) {
    return function (event) {
        new VEvents(actionsData, event).call();
    };
}

function initEvents(root) {
    console.log('\tEvents');

    var events = root.querySelectorAll('[data-events]');
    for (var i = 0; i < events.length; i++) {
        var eventElem = events[i];
        var eventsData = JSON.parse(eventElem.dataset.events);
        for (var j = 0; j < eventsData.length; j++) {
            var eventData = eventsData[j];
            var eventName = eventData[0];
            var actionsData = eventData[1];
            eventElem.addEventListener(eventName, createEventHandler(actionsData));
        }
    }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VLoadsPage = exports.VLoadsPage = function () {
    function VLoadsPage(url) {
        _classCallCheck(this, VLoadsPage);

        this.url = url;
    }

    _createClass(VLoadsPage, [{
        key: "call",
        value: function call() {
            var url = this.url;
            var promiseObj = new Promise(function (resolve) {
                console.log("Loading page: " + url);
                window.location = url;
                resolve([200, null, null]);
            });
            return promiseObj;
        }
    }]);

    return VLoadsPage;
}();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VPost = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snackbar = __webpack_require__(19);

var _base = __webpack_require__(20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
var VPost = exports.VPost = function (_VBase) {
    _inherits(VPost, _VBase);

    function VPost(url, params, method, event) {
        _classCallCheck(this, VPost);

        var _this = _possibleConstructorReturn(this, (VPost.__proto__ || Object.getPrototypeOf(VPost)).call(this));

        _this.url = url;
        _this.params = params;
        _this.method = method;
        _this.event = event;
        return _this;
    }

    _createClass(VPost, [{
        key: 'call',
        value: function call() {
            this.clearErrors();

            var parent_element = document.getElementById(this.params.__parent_id__);
            var FD = null;
            if (this.isForm(parent_element)) {
                FD = new FormData(parent_element);
            } else {
                FD = new FormData();
                // Automatically pull values out of input controls
                if (this.params.__parent_id__) {
                    var parent_element = document.getElementById(this.params.__parent_id__);
                    if (parent_element) {
                        var value = parent_element.value;
                        if (value) {
                            FD.append(this.params.__parent_id__, value);
                        }
                    }
                }
            }

            // Push our params into our FormData object
            for (var name in this.params) {
                if (name != '__parent_id__') {
                    FD.append(name, this.params[name]);
                }
            }

            var httpRequest = new XMLHttpRequest();
            var method = this.method;
            var url = this.url;
            var event = this.event;
            if (!httpRequest) {
                throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
                // new VSnackbar('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.').display();
            }
            var promiseObj = new Promise(function (resolve, reject) {
                httpRequest.onreadystatechange = function (event) {
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                        if (httpRequest.status >= 200 && httpRequest.status < 300) {
                            resolve([httpRequest.status, this.getResponseHeader('content-type'), httpRequest.responseText, httpRequest.responseURL]);
                            // new VSnackbar('Yeah! That worked!').display();
                        } else {
                            // new VSnackbar('There was a problem with the request.').display();
                            reject([httpRequest.status, this.getResponseHeader('content-type'), httpRequest.responseText]);
                            // _this_.displayError(this.getResponseHeader('content-type'), event.target.responseText);
                        }
                    }
                };

                // Set up our request
                httpRequest.open(method, url);

                console.log(method + ':' + url);
                // Send our FormData object; HTTP headers are set automatically
                httpRequest.send(FD);
            });
            return promiseObj;
        }
    }, {
        key: 'isForm',
        value: function isForm(parent_element) {
            return parent_element && parent_element.elements;
        }
    }]);

    return VPost;
}(_base.VBase);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VReplaceElement = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snackbar = __webpack_require__(19);

var _base = __webpack_require__(20);

var _initialize = __webpack_require__(52);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
var VReplaceElement = exports.VReplaceElement = function (_VBase) {
    _inherits(VReplaceElement, _VBase);

    function VReplaceElement(element_id, url, params, event) {
        _classCallCheck(this, VReplaceElement);

        var _this = _possibleConstructorReturn(this, (VReplaceElement.__proto__ || Object.getPrototypeOf(VReplaceElement)).call(this));

        _this.element_id = element_id;
        _this.url = url;
        _this.params = params;
        _this.event = event;
        return _this;
    }

    _createClass(VReplaceElement, [{
        key: 'call',
        value: function call() {
            this.clearErrors();
            var httpRequest = new XMLHttpRequest();
            if (!httpRequest) {
                throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
                // new VSnackbar('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.').display();
            }
            var elementId = this.element_id;
            var url = this.url + this.seperator() + this.serialize(this.params);
            var event = this.event;

            var promiseObj = new Promise(function (resolve, reject) {
                httpRequest.onreadystatechange = function () {
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                        if (httpRequest.status === 200) {
                            var nodeToReplace = document.getElementById(elementId);
                            nodeToReplace.outerHTML = httpRequest.responseText;
                            var newNode = document.getElementById(elementId);
                            (0, _initialize.initialize)(newNode);
                            resolve([httpRequest.status, this.getResponseHeader('content-type'), httpRequest.responseText]);
                        } else {
                            reject([httpRequest.status, this.getResponseHeader('content-type'), httpRequest.responseText]);
                        }
                    }
                };
                console.log('GET:' + url);
                httpRequest.open('GET', url, true);
                httpRequest.setRequestHeader('X-NO-LAYOUT', true);
                httpRequest.send();
            });
            return promiseObj;
        }
    }, {
        key: 'seperator',
        value: function seperator() {
            return this.url.includes("?") ? '&' : '?';
        }
    }, {
        key: 'serialize',
        value: function serialize(obj, prefix) {
            var str = [],
                p;
            for (p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var k = prefix ? prefix + "[" + p + "]" : p,
                        v = obj[p];
                    str.push(v !== null && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === "object" ? this.serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return str.join("&");
        }
    }]);

    return VReplaceElement;
}(_base.VBase);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;
  if (!supportCustomEvent || (typeof supportCustomEvent === 'undefined' ? 'undefined' : _typeof(supportCustomEvent)) === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };
    supportCustomEvent.prototype = window.Event.prototype;
  }

  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */
  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);
      var invalid = function invalid(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      };
      if (s.opacity < 1 || invalid('zIndex', 'auto') || invalid('transform', 'none') || invalid('mixBlendMode', 'normal') || invalid('filter', 'none') || invalid('perspective', 'none') || s['isolation'] === 'isolate' || s.position === 'fixed' || s.webkitOverflowScrolling === 'touch') {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */
  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return (/** @type {HTMLDialogElement} */el
        );
      }
      el = el.parentElement;
    }
    return null;
  }

  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */
  function safeBlur(el) {
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }

  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */
  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }
    return false;
  }

  /**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */
  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }
    return el.getAttribute('method').toLowerCase() === 'dialog';
  }

  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */
  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false;

    // Set a11y role. Browsers that support dialog implicitly know this already.
    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }

    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);

    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, { attributes: true, attributeFilter: ['open'] });
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful if removed/immediately added).
      var removed = false;
      var cb = function () {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);
      var timeout;
      var delayModel = function delayModel(ev) {
        if (ev.target !== dialog) {
          return;
        } // not for a child element
        var cand = 'DOMNodeRemoved';
        removed |= ev.type.substr(0, cand.length) === cand;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };
      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function (name) {
        dialog.addEventListener(name, delayModel);
      });
    }
    // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.

    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });

    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('click', this.backdropClick_.bind(this));
  }

  dialogPolyfillInfo.prototype = {

    get dialog() {
      return this.dialog_;
    },

    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function maybeHideModal() {
      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) {
        return;
      }
      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function downgradeModal() {
      if (!this.openAsModal_) {
        return;
      }
      this.openAsModal_ = false;
      this.dialog_.style.zIndex = '';

      // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.
      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      }

      // Clear the backdrop and remove from the manager.
      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },

    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function setOpen(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal(); // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles clicks on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropClick_: function backdropClick_(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }

      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },

    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function focus_() {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }
      if (!target) {
        // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
        // alternative involves stepping through and trying to focus everything.
        var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
        var query = opts.map(function (el) {
          return el + ':not([disabled])';
        });
        // TODO(samthor): tabindex values that are not numeric are not focusable.
        query.push('[tabindex]:not([disabled]):not([tabindex=""])'); // tabindex != "", not disabled
        target = this.dialog_.querySelector(query.join(', '));
      }
      safeBlur(document.activeElement);
      target && target.focus();
    },

    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function updateZIndex(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }
      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function show() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function showModal() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }
      if (!document.body.contains(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }
      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }

      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' + 'This may cause it to be unusable. For more information, see this link: ' + 'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }

      this.setOpen(true);
      this.openAsModal_ = true;

      // Optionally center vertically, relative to the current viewport.
      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      }

      // Insert backdrop.
      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

      // Focus on whatever inside the dialog.
      this.focus_();
    },

    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function close(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }
      this.setOpen(false);

      // Leave returnValue untouched in case it was set directly on the element
      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      }

      // Triggering "close" event for any attached listeners on the <dialog>.
      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      this.dialog_.dispatchEvent(closeEvent);
    }

  };

  var dialogPolyfill = {};

  dialogPolyfill.reposition = function (element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };

  dialogPolyfill.isInlinePositionSetByStylesheet = function (element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null;
      // Some browsers throw on cssRules.
      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}
      if (!cssRules) {
        continue;
      }
      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null;
        // Ignore errors on invalid selector texts.
        try {
          selectedNodes = document.querySelectorAll(rule.selectorText);
        } catch (e) {}
        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }
        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');
        if (cssTop && cssTop !== 'auto' || cssBottom && cssBottom !== 'auto') {
          return true;
        }
      }
    }
    return false;
  };

  dialogPolyfill.needsCentering = function (dialog) {
    var computedStyle = window.getComputedStyle(dialog);
    if (computedStyle.position !== 'absolute') {
      return false;
    }

    // We must determine whether the top/bottom specified value is non-auto.  In
    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
    // Firefox returns the used value. So we do this crazy thing instead: check
    // the inline style and then go through CSS rules.
    if (dialog.style.top !== 'auto' && dialog.style.top !== '' || dialog.style.bottom !== 'auto' && dialog.style.bottom !== '') {
      return false;
    }
    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };

  /**
   * @param {!Element} element to force upgrade
   */
  dialogPolyfill.forceRegisterDialog = function (element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' + 'may not work correctly', element);
    }
    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }
    new dialogPolyfillInfo( /** @type {!HTMLDialogElement} */element);
  };

  /**
   * @param {!Element} element to upgrade, if necessary
   */
  dialogPolyfill.registerDialog = function (element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };

  /**
   * @constructor
   */
  dialogPolyfill.DialogManager = function () {
    /** @type {!Array<!dialogPolyfillInfo>} */
    this.pendingDialogStack = [];

    var checkDOM = this.checkDOM_.bind(this);

    // The overlay is used to simulate how a modal dialog blocks the document.
    // The blocking dialog is positioned on top of the overlay, and the rest of
    // the dialogs on the pending dialog stack are positioned below it. In the
    // actual implementation, the modal dialog stacking is controlled by the
    // top layer, where z-index has no effect.
    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function (e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]); // sanity-check DOM
    }.bind(this));

    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);

    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;

    this.forwardTab_ = undefined;

    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function (records) {
        var removed = [];
        records.forEach(function (rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }
            removed = removed.concat(c.querySelectorAll('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };

  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */
  dialogPolyfill.DialogManager.prototype.blockDocument = function () {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, { childList: true, subtree: true });
  };

  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */
  dialogPolyfill.DialogManager.prototype.unblockDocument = function () {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };

  /**
   * Updates the stacking of all known dialogs.
   */
  dialogPolyfill.DialogManager.prototype.updateStacking = function () {
    var zIndex = this.zIndexHigh_;

    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);
      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    }

    // Make the overlay a sibling of the dialog itself.
    var last = this.pendingDialogStack[0];
    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };

  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */
  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function (candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0; // only valid if top-most
        }
      }
      candidate = candidate.parentElement;
    }
    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleFocus_ = function (event) {
    if (this.containedByTopDialog_(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    safeBlur( /** @type {Element} */event.target);

    if (this.forwardTab_ === undefined) {
      return;
    } // move focus only from a tab key

    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(event.target);
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {
        // forward
        dpi.focus_();
      } else {
        // backwards
        document.documentElement.focus();
      }
    } else {
      // TODO: Focus after the dialog, is ignored.
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleKey_ = function (event) {
    this.forwardTab_ = undefined;
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];
      if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };

  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */
  dialogPolyfill.DialogManager.prototype.checkDOM_ = function (removed) {
    // This operates on a clone because it may cause it to change. Each change also calls
    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
    // at a time?!
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function (dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */
  dialogPolyfill.DialogManager.prototype.pushDialog = function (dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }
    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }
    this.updateStacking();
    return true;
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   */
  dialogPolyfill.DialogManager.prototype.removeDialog = function (dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);
    if (index === -1) {
      return;
    }

    this.pendingDialogStack.splice(index, 1);
    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }
    this.updateStacking();
  };

  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.useValue = null;

  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */
  if (window.HTMLDialogElement === undefined) {

    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');
    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
        var realGet = methodDescriptor.get;
        methodDescriptor.get = function () {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }
          return realGet.call(this);
        };
        var realSet = methodDescriptor.set;
        methodDescriptor.set = function (v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }
          return realSet.call(this, v);
        };
        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }

    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */
    document.addEventListener('click', function (ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.useValue = null;
      if (ev.defaultPrevented) {
        return;
      } // e.g. a submit which prevents default submission

      var target = /** @type {Element} */ev.target;
      if (!target || !isFormMethodDialog(target.form)) {
        return;
      }

      var valid = target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1;
      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) {
          return;
        }
        // this is a <input type="image">, which can submit forms
        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
      }

      var dialog = findNearestDialog(target);
      if (!dialog) {
        return;
      }

      dialogPolyfill.formSubmitter = target;
    }, false);

    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */
    var nativeFormSubmit = HTMLFormElement.prototype.submit;
    var replacementFormSubmit = function replacementFormSubmit() {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }
      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };
    HTMLFormElement.prototype.submit = replacementFormSubmit;

    /**
     * Global form 'dialog' method handler. Closes a dialog correctly on submit
     * and possibly sets its return value.
     */
    document.addEventListener('submit', function (ev) {
      var form = /** @type {HTMLFormElement} */ev.target;
      if (!isFormMethodDialog(form)) {
        return;
      }
      ev.preventDefault();

      var dialog = findNearestDialog(form);
      if (!dialog) {
        return;
      }

      // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that
      // the submitter is correct before using its value as .returnValue.
      var s = dialogPolyfill.formSubmitter;
      if (s && s.form === form) {
        dialog.close(dialogPolyfill.useValue || s.value);
      } else {
        dialog.close();
      }
      dialogPolyfill.formSubmitter = null;
    }, true);
  }

  dialogPolyfill['forceRegisterDialog'] = dialogPolyfill.forceRegisterDialog;
  dialogPolyfill['registerDialog'] = dialogPolyfill.registerDialog;

  if ("function" === 'function' && 'amd' in __webpack_require__(50)) {
    // AMD support
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dialogPolyfill;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (( false ? 'undefined' : _typeof(module)) === 'object' && _typeof(module['exports']) === 'object') {
    // CommonJS support
    module['exports'] = dialogPolyfill;
  } else {
    // all others
    window['dialogPolyfill'] = dialogPolyfill;
  }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
    "use strict";

    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A component handler interface using the revealing module design pattern.
     * More details on this design pattern here:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @author Jason Mayes.
     */
    /* exported componentHandler */

    // Pre-defining the componentHandler interface, for closure documentation and
    // static verification.

    var componentHandler = {
        /**
         * Searches existing DOM for elements of our component type and upgrades them
         * if they have not already been upgraded.
         *
         * @param {string=} optJsClass the programatic name of the element class we
         * need to create a new instance of.
         * @param {string=} optCssClass the name of the CSS class elements of this
         * type will have.
         */
        upgradeDom: function upgradeDom(optJsClass, optCssClass) {},
        /**
         * Upgrades a specific element rather than all in the DOM.
         *
         * @param {!Element} element The element we wish to upgrade.
         * @param {string=} optJsClass Optional name of the class we want to upgrade
         * the element to.
         */
        upgradeElement: function upgradeElement(element, optJsClass) {},
        /**
         * Upgrades a specific list of elements rather than all in the DOM.
         *
         * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
         * The elements we wish to upgrade.
         */
        upgradeElements: function upgradeElements(elements) {},
        /**
         * Upgrades all registered components found in the current DOM. This is
         * automatically called on window load.
         */
        upgradeAllRegistered: function upgradeAllRegistered() {},
        /**
         * Allows user to be alerted to any upgrades that are performed for a given
         * component type
         *
         * @param {string} jsClass The class name of the MDL component we wish
         * to hook into for any upgrades performed.
         * @param {function(!HTMLElement)} callback The function to call upon an
         * upgrade. This function should expect 1 parameter - the HTMLElement which
         * got upgraded.
         */
        registerUpgradedCallback: function registerUpgradedCallback(jsClass, callback) {},
        /**
         * Registers a class for future use and attempts to upgrade existing DOM.
         *
         * @param {componentHandler.ComponentConfigPublic} config the registration configuration
         */
        register: function register(config) {},
        /**
         * Downgrade either a given node, an array of nodes, or a NodeList.
         *
         * @param {!Node|!Array<!Node>|!NodeList} nodes
         */
        downgradeElements: function downgradeElements(nodes) {}
    };

    componentHandler = function () {
        'use strict';

        /** @type {!Array<componentHandler.ComponentConfig>} */

        var registeredComponents_ = [];

        /** @type {!Array<componentHandler.Component>} */
        var createdComponents_ = [];

        var componentConfigProperty_ = 'mdlComponentConfigInternal_';

        /**
         * Searches registered components for a class we are interested in using.
         * Optionally replaces a match with passed object if specified.
         *
         * @param {string} name The name of a class we want to use.
         * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.
         * @return {!Object|boolean}
         * @private
         */
        function findRegisteredClass_(name, optReplace) {
            for (var i = 0; i < registeredComponents_.length; i++) {
                if (registeredComponents_[i].className === name) {
                    if (typeof optReplace !== 'undefined') {
                        registeredComponents_[i] = optReplace;
                    }
                    return registeredComponents_[i];
                }
            }
            return false;
        }

        /**
         * Returns an array of the classNames of the upgraded classes on the element.
         *
         * @param {!Element} element The element to fetch data from.
         * @return {!Array<string>}
         * @private
         */
        function getUpgradedListOfElement_(element) {
            var dataUpgraded = element.getAttribute('data-upgraded');
            // Use `['']` as default value to conform the `,name,name...` style.
            return dataUpgraded === null ? [''] : dataUpgraded.split(',');
        }

        /**
         * Returns true if the given element has already been upgraded for the given
         * class.
         *
         * @param {!Element} element The element we want to check.
         * @param {string} jsClass The class to check for.
         * @returns {boolean}
         * @private
         */
        function isElementUpgraded_(element, jsClass) {
            var upgradedList = getUpgradedListOfElement_(element);
            return upgradedList.indexOf(jsClass) !== -1;
        }

        /**
         * Create an event object.
         *
         * @param {string} eventType The type name of the event.
         * @param {boolean} bubbles Whether the event should bubble up the DOM.
         * @param {boolean} cancelable Whether the event can be canceled.
         * @returns {!Event}
         */
        function createEvent_(eventType, bubbles, cancelable) {
            if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
                return new CustomEvent(eventType, {
                    bubbles: bubbles,
                    cancelable: cancelable
                });
            } else {
                var ev = document.createEvent('Events');
                ev.initEvent(eventType, bubbles, cancelable);
                return ev;
            }
        }

        /**
         * Searches existing DOM for elements of our component type and upgrades them
         * if they have not already been upgraded.
         *
         * @param {string=} optJsClass the programatic name of the element class we
         * need to create a new instance of.
         * @param {string=} optCssClass the name of the CSS class elements of this
         * type will have.
         */
        function upgradeDomInternal(optJsClass, optCssClass) {
            if (typeof optJsClass === 'undefined' && typeof optCssClass === 'undefined') {
                for (var i = 0; i < registeredComponents_.length; i++) {
                    upgradeDomInternal(registeredComponents_[i].className, registeredComponents_[i].cssClass);
                }
            } else {
                var jsClass = /** @type {string} */optJsClass;
                if (typeof optCssClass === 'undefined') {
                    var registeredClass = findRegisteredClass_(jsClass);
                    if (registeredClass) {
                        optCssClass = registeredClass.cssClass;
                    }
                }

                var elements = document.querySelectorAll('.' + optCssClass);
                for (var n = 0; n < elements.length; n++) {
                    upgradeElementInternal(elements[n], jsClass);
                }
            }
        }

        /**
         * Upgrades a specific element rather than all in the DOM.
         *
         * @param {!Element} element The element we wish to upgrade.
         * @param {string=} optJsClass Optional name of the class we want to upgrade
         * the element to.
         */
        function upgradeElementInternal(element, optJsClass) {
            // Verify argument type.
            if (!((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element instanceof Element)) {
                throw new Error('Invalid argument provided to upgrade MDL element.');
            }
            // Allow upgrade to be canceled by canceling emitted event.
            var upgradingEv = createEvent_('mdl-componentupgrading', true, true);
            element.dispatchEvent(upgradingEv);
            if (upgradingEv.defaultPrevented) {
                return;
            }

            var upgradedList = getUpgradedListOfElement_(element);
            var classesToUpgrade = [];
            // If jsClass is not provided scan the registered components to find the
            // ones matching the element's CSS classList.
            if (!optJsClass) {
                var classList = element.classList;
                registeredComponents_.forEach(function (component) {
                    // Match CSS & Not to be upgraded & Not upgraded.
                    if (classList.contains(component.cssClass) && classesToUpgrade.indexOf(component) === -1 && !isElementUpgraded_(element, component.className)) {
                        classesToUpgrade.push(component);
                    }
                });
            } else if (!isElementUpgraded_(element, optJsClass)) {
                classesToUpgrade.push(findRegisteredClass_(optJsClass));
            }

            // Upgrade the element for each classes.
            for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
                registeredClass = classesToUpgrade[i];
                if (registeredClass) {
                    // Mark element as upgraded.
                    upgradedList.push(registeredClass.className);
                    element.setAttribute('data-upgraded', upgradedList.join(','));
                    var instance = new registeredClass.classConstructor(element);
                    instance[componentConfigProperty_] = registeredClass;
                    createdComponents_.push(instance);
                    // Call any callbacks the user has registered with this component type.
                    for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
                        registeredClass.callbacks[j](element);
                    }

                    if (registeredClass.widget) {
                        // Assign per element instance for control over API
                        element[registeredClass.className] = instance;
                    }
                } else {
                    throw new Error('Unable to find a registered component for the given class.');
                }

                var upgradedEv = createEvent_('mdl-componentupgraded', true, false);
                element.dispatchEvent(upgradedEv);
            }
        }

        /**
         * Upgrades a specific list of elements rather than all in the DOM.
         *
         * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
         * The elements we wish to upgrade.
         */
        function upgradeElementsInternal(elements) {
            if (!Array.isArray(elements)) {
                if (elements instanceof Element) {
                    elements = [elements];
                } else {
                    elements = Array.prototype.slice.call(elements);
                }
            }
            for (var i = 0, n = elements.length, element; i < n; i++) {
                element = elements[i];
                if (element instanceof HTMLElement) {
                    upgradeElementInternal(element);
                    if (element.children.length > 0) {
                        upgradeElementsInternal(element.children);
                    }
                }
            }
        }

        /**
         * Registers a class for future use and attempts to upgrade existing DOM.
         *
         * @param {componentHandler.ComponentConfigPublic} config
         */
        function registerInternal(config) {
            // In order to support both Closure-compiled and uncompiled code accessing
            // this method, we need to allow for both the dot and array syntax for
            // property access. You'll therefore see the `foo.bar || foo['bar']`
            // pattern repeated across this method.
            var widgetMissing = typeof config.widget === 'undefined' && typeof config['widget'] === 'undefined';
            var widget = true;

            if (!widgetMissing) {
                widget = config.widget || config['widget'];
            }

            var newConfig = /** @type {componentHandler.ComponentConfig} */{
                classConstructor: config.constructor || config['constructor'],
                className: config.classAsString || config['classAsString'],
                cssClass: config.cssClass || config['cssClass'],
                widget: widget,
                callbacks: []
            };

            registeredComponents_.forEach(function (item) {
                if (item.cssClass === newConfig.cssClass) {
                    throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
                }
                if (item.className === newConfig.className) {
                    throw new Error('The provided className has already been registered');
                }
            });

            if (config.constructor.prototype.hasOwnProperty(componentConfigProperty_)) {
                throw new Error('MDL component classes must not have ' + componentConfigProperty_ + ' defined as a property.');
            }

            var found = findRegisteredClass_(config.classAsString, newConfig);

            if (!found) {
                registeredComponents_.push(newConfig);
            }
        }

        /**
         * Allows user to be alerted to any upgrades that are performed for a given
         * component type
         *
         * @param {string} jsClass The class name of the MDL component we wish
         * to hook into for any upgrades performed.
         * @param {function(!HTMLElement)} callback The function to call upon an
         * upgrade. This function should expect 1 parameter - the HTMLElement which
         * got upgraded.
         */
        function registerUpgradedCallbackInternal(jsClass, callback) {
            var regClass = findRegisteredClass_(jsClass);
            if (regClass) {
                regClass.callbacks.push(callback);
            }
        }

        /**
         * Upgrades all registered components found in the current DOM. This is
         * automatically called on window load.
         */
        function upgradeAllRegisteredInternal() {
            for (var n = 0; n < registeredComponents_.length; n++) {
                upgradeDomInternal(registeredComponents_[n].className);
            }
        }

        /**
         * Check the component for the downgrade method.
         * Execute if found.
         * Remove component from createdComponents list.
         *
         * @param {?componentHandler.Component} component
         */
        function deconstructComponentInternal(component) {
            if (component) {
                var componentIndex = createdComponents_.indexOf(component);
                createdComponents_.splice(componentIndex, 1);

                var upgrades = component.element_.getAttribute('data-upgraded').split(',');
                var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);
                upgrades.splice(componentPlace, 1);
                component.element_.setAttribute('data-upgraded', upgrades.join(','));

                var ev = createEvent_('mdl-componentdowngraded', true, false);
                component.element_.dispatchEvent(ev);
            }
        }

        /**
         * Downgrade either a given node, an array of nodes, or a NodeList.
         *
         * @param {!Node|!Array<!Node>|!NodeList} nodes
         */
        function downgradeNodesInternal(nodes) {
            /**
             * Auxiliary function to downgrade a single node.
             * @param  {!Node} node the node to be downgraded
             */
            var downgradeNode = function downgradeNode(node) {
                createdComponents_.filter(function (item) {
                    return item.element_ === node;
                }).forEach(deconstructComponentInternal);
            };
            if (nodes instanceof Array || nodes instanceof NodeList) {
                for (var n = 0; n < nodes.length; n++) {
                    downgradeNode(nodes[n]);
                }
            } else if (nodes instanceof Node) {
                downgradeNode(nodes);
            } else {
                throw new Error('Invalid argument provided to downgrade MDL nodes.');
            }
        }

        // Now return the functions that should be made public with their publicly
        // facing names...
        return {
            upgradeDom: upgradeDomInternal,
            upgradeElement: upgradeElementInternal,
            upgradeElements: upgradeElementsInternal,
            upgradeAllRegistered: upgradeAllRegisteredInternal,
            registerUpgradedCallback: registerUpgradedCallbackInternal,
            register: registerInternal,
            downgradeElements: downgradeNodesInternal
        };
    }();

    /**
     * Describes the type of a registered component type managed by
     * componentHandler. Provided for benefit of the Closure compiler.
     *
     * @typedef {{
     *   constructor: Function,
     *   classAsString: string,
     *   cssClass: string,
     *   widget: (string|boolean|undefined)
     * }}
     */
    componentHandler.ComponentConfigPublic; // jshint ignore:line

    /**
     * Describes the type of a registered component type managed by
     * componentHandler. Provided for benefit of the Closure compiler.
     *
     * @typedef {{
     *   constructor: !Function,
     *   className: string,
     *   cssClass: string,
     *   widget: (string|boolean),
     *   callbacks: !Array<function(!HTMLElement)>
     * }}
     */
    componentHandler.ComponentConfig; // jshint ignore:line

    /**
     * Created component (i.e., upgraded element) type as managed by
     * componentHandler. Provided for benefit of the Closure compiler.
     *
     * @typedef {{
     *   element_: !HTMLElement,
     *   className: string,
     *   classAsString: string,
     *   cssClass: string,
     *   widget: string
     * }}
     */
    componentHandler.Component; // jshint ignore:line

    // Export all symbols, for the benefit of Closure compiler.
    // No effect on uncompiled code.
    componentHandler['upgradeDom'] = componentHandler.upgradeDom;
    componentHandler['upgradeElement'] = componentHandler.upgradeElement;
    componentHandler['upgradeElements'] = componentHandler.upgradeElements;
    componentHandler['upgradeAllRegistered'] = componentHandler.upgradeAllRegistered;
    componentHandler['registerUpgradedCallback'] = componentHandler.registerUpgradedCallback;
    componentHandler['register'] = componentHandler.register;
    componentHandler['downgradeElements'] = componentHandler.downgradeElements;
    window.componentHandler = componentHandler;
    window['componentHandler'] = componentHandler;

    window.addEventListener('load', function () {
        'use strict';

        /**
         * Performs a "Cutting the mustard" test. If the browser supports the features
         * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
         * components requiring JavaScript.
         */

        if ('classList' in document.createElement('div') && 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
            document.documentElement.classList.add('mdl-js');
            componentHandler.upgradeAllRegistered();
        } else {
            /**
             * Dummy function to avoid JS errors.
             */
            componentHandler.upgradeElement = function () {};
            /**
             * Dummy function to avoid JS errors.
             */
            componentHandler.register = function () {};
        }
    });

    // Source: https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
    // Adapted from https://gist.github.com/paulirish/1579671 which derived from
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // requestAnimationFrame polyfill by Erik Möller.
    // Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon
    // MIT license
    if (!Date.now) {
        /**
         * Date.now polyfill.
         * @return {number} the current Date
         */
        Date.now = function () {
            return new Date().getTime();
        };
        Date['now'] = Date.now;
    }
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
        window['requestAnimationFrame'] = window.requestAnimationFrame;
        window['cancelAnimationFrame'] = window.cancelAnimationFrame;
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        /**
         * requestAnimationFrame polyfill.
         * @param  {!Function} callback the callback function.
         */
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () {
                callback(lastTime = nextTime);
            }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
        window['requestAnimationFrame'] = window.requestAnimationFrame;
        window['cancelAnimationFrame'] = window.cancelAnimationFrame;
    }
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Button MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialButton = function MaterialButton(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialButton'] = MaterialButton;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialButton.prototype.Constant_ = {};
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialButton.prototype.CssClasses_ = {
        RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        RIPPLE_CONTAINER: 'mdl-button__ripple-container',
        RIPPLE: 'mdl-ripple'
    };
    /**
       * Handle blur of element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialButton.prototype.blurHandler_ = function (event) {
        if (event) {
            this.element_.blur();
        }
    };
    // Public methods.
    /**
       * Disable button.
       *
       * @public
       */
    MaterialButton.prototype.disable = function () {
        this.element_.disabled = true;
    };
    MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;
    /**
       * Enable button.
       *
       * @public
       */
    MaterialButton.prototype.enable = function () {
        this.element_.disabled = false;
    };
    MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;
    /**
       * Initialize element.
       */
    MaterialButton.prototype.init = function () {
        if (this.element_) {
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                var rippleContainer = document.createElement('span');
                rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
                this.rippleElement_ = document.createElement('span');
                this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
                rippleContainer.appendChild(this.rippleElement_);
                this.boundRippleBlurHandler = this.blurHandler_.bind(this);
                this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
                this.element_.appendChild(rippleContainer);
            }
            this.boundButtonBlurHandler = this.blurHandler_.bind(this);
            this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);
            this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialButton,
        classAsString: 'MaterialButton',
        cssClass: 'mdl-js-button',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Checkbox MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialCheckbox = function MaterialCheckbox(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialCheckbox'] = MaterialCheckbox;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialCheckbox.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialCheckbox.prototype.CssClasses_ = {
        INPUT: 'mdl-checkbox__input',
        BOX_OUTLINE: 'mdl-checkbox__box-outline',
        FOCUS_HELPER: 'mdl-checkbox__focus-helper',
        TICK_OUTLINE: 'mdl-checkbox__tick-outline',
        RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
        RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
        RIPPLE_CENTER: 'mdl-ripple--center',
        RIPPLE: 'mdl-ripple',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_CHECKED: 'is-checked',
        IS_UPGRADED: 'is-upgraded'
    };
    /**
       * Handle change of state.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialCheckbox.prototype.onChange_ = function (event) {
        this.updateClasses_();
    };
    /**
       * Handle focus of element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialCheckbox.prototype.onFocus_ = function (event) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle lost focus of element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialCheckbox.prototype.onBlur_ = function (event) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle mouseup.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialCheckbox.prototype.onMouseUp_ = function (event) {
        this.blur_();
    };
    /**
       * Handle class updates.
       *
       * @private
       */
    MaterialCheckbox.prototype.updateClasses_ = function () {
        this.checkDisabled();
        this.checkToggleState();
    };
    /**
       * Add blur.
       *
       * @private
       */
    MaterialCheckbox.prototype.blur_ = function () {
        // TODO: figure out why there's a focus event being fired after our blur,
        // so that we can avoid this hack.
        window.setTimeout(function () {
            this.inputElement_.blur();
        }.bind(this), this.Constant_.TINY_TIMEOUT);
    };
    // Public methods.
    /**
       * Check the inputs toggle state and update display.
       *
       * @public
       */
    MaterialCheckbox.prototype.checkToggleState = function () {
        if (this.inputElement_.checked) {
            this.element_.classList.add(this.CssClasses_.IS_CHECKED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
        }
    };
    MaterialCheckbox.prototype['checkToggleState'] = MaterialCheckbox.prototype.checkToggleState;
    /**
       * Check the inputs disabled state and update display.
       *
       * @public
       */
    MaterialCheckbox.prototype.checkDisabled = function () {
        if (this.inputElement_.disabled) {
            this.element_.classList.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
        }
    };
    MaterialCheckbox.prototype['checkDisabled'] = MaterialCheckbox.prototype.checkDisabled;
    /**
       * Disable checkbox.
       *
       * @public
       */
    MaterialCheckbox.prototype.disable = function () {
        this.inputElement_.disabled = true;
        this.updateClasses_();
    };
    MaterialCheckbox.prototype['disable'] = MaterialCheckbox.prototype.disable;
    /**
       * Enable checkbox.
       *
       * @public
       */
    MaterialCheckbox.prototype.enable = function () {
        this.inputElement_.disabled = false;
        this.updateClasses_();
    };
    MaterialCheckbox.prototype['enable'] = MaterialCheckbox.prototype.enable;
    /**
       * Check checkbox.
       *
       * @public
       */
    MaterialCheckbox.prototype.check = function () {
        this.inputElement_.checked = true;
        this.updateClasses_();
    };
    MaterialCheckbox.prototype['check'] = MaterialCheckbox.prototype.check;
    /**
       * Uncheck checkbox.
       *
       * @public
       */
    MaterialCheckbox.prototype.uncheck = function () {
        this.inputElement_.checked = false;
        this.updateClasses_();
    };
    MaterialCheckbox.prototype['uncheck'] = MaterialCheckbox.prototype.uncheck;
    /**
       * Initialize element.
       */
    MaterialCheckbox.prototype.init = function () {
        if (this.element_) {
            this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
            var boxOutline = document.createElement('span');
            boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);
            var tickContainer = document.createElement('span');
            tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);
            var tickOutline = document.createElement('span');
            tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);
            boxOutline.appendChild(tickOutline);
            this.element_.appendChild(tickContainer);
            this.element_.appendChild(boxOutline);
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                this.rippleContainerElement_ = document.createElement('span');
                this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
                this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
                this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
                this.boundRippleMouseUp = this.onMouseUp_.bind(this);
                this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
                var ripple = document.createElement('span');
                ripple.classList.add(this.CssClasses_.RIPPLE);
                this.rippleContainerElement_.appendChild(ripple);
                this.element_.appendChild(this.rippleContainerElement_);
            }
            this.boundInputOnChange = this.onChange_.bind(this);
            this.boundInputOnFocus = this.onFocus_.bind(this);
            this.boundInputOnBlur = this.onBlur_.bind(this);
            this.boundElementMouseUp = this.onMouseUp_.bind(this);
            this.inputElement_.addEventListener('change', this.boundInputOnChange);
            this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
            this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
            this.element_.addEventListener('mouseup', this.boundElementMouseUp);
            this.updateClasses_();
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialCheckbox,
        classAsString: 'MaterialCheckbox',
        cssClass: 'mdl-js-checkbox',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for icon toggle MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialIconToggle = function MaterialIconToggle(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialIconToggle'] = MaterialIconToggle;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialIconToggle.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialIconToggle.prototype.CssClasses_ = {
        INPUT: 'mdl-icon-toggle__input',
        JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
        RIPPLE_CONTAINER: 'mdl-icon-toggle__ripple-container',
        RIPPLE_CENTER: 'mdl-ripple--center',
        RIPPLE: 'mdl-ripple',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_CHECKED: 'is-checked'
    };
    /**
       * Handle change of state.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialIconToggle.prototype.onChange_ = function (event) {
        this.updateClasses_();
    };
    /**
       * Handle focus of element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialIconToggle.prototype.onFocus_ = function (event) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle lost focus of element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialIconToggle.prototype.onBlur_ = function (event) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle mouseup.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialIconToggle.prototype.onMouseUp_ = function (event) {
        this.blur_();
    };
    /**
       * Handle class updates.
       *
       * @private
       */
    MaterialIconToggle.prototype.updateClasses_ = function () {
        this.checkDisabled();
        this.checkToggleState();
    };
    /**
       * Add blur.
       *
       * @private
       */
    MaterialIconToggle.prototype.blur_ = function () {
        // TODO: figure out why there's a focus event being fired after our blur,
        // so that we can avoid this hack.
        window.setTimeout(function () {
            this.inputElement_.blur();
        }.bind(this), this.Constant_.TINY_TIMEOUT);
    };
    // Public methods.
    /**
       * Check the inputs toggle state and update display.
       *
       * @public
       */
    MaterialIconToggle.prototype.checkToggleState = function () {
        if (this.inputElement_.checked) {
            this.element_.classList.add(this.CssClasses_.IS_CHECKED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
        }
    };
    MaterialIconToggle.prototype['checkToggleState'] = MaterialIconToggle.prototype.checkToggleState;
    /**
       * Check the inputs disabled state and update display.
       *
       * @public
       */
    MaterialIconToggle.prototype.checkDisabled = function () {
        if (this.inputElement_.disabled) {
            this.element_.classList.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
        }
    };
    MaterialIconToggle.prototype['checkDisabled'] = MaterialIconToggle.prototype.checkDisabled;
    /**
       * Disable icon toggle.
       *
       * @public
       */
    MaterialIconToggle.prototype.disable = function () {
        this.inputElement_.disabled = true;
        this.updateClasses_();
    };
    MaterialIconToggle.prototype['disable'] = MaterialIconToggle.prototype.disable;
    /**
       * Enable icon toggle.
       *
       * @public
       */
    MaterialIconToggle.prototype.enable = function () {
        this.inputElement_.disabled = false;
        this.updateClasses_();
    };
    MaterialIconToggle.prototype['enable'] = MaterialIconToggle.prototype.enable;
    /**
       * Check icon toggle.
       *
       * @public
       */
    MaterialIconToggle.prototype.check = function () {
        this.inputElement_.checked = true;
        this.updateClasses_();
    };
    MaterialIconToggle.prototype['check'] = MaterialIconToggle.prototype.check;
    /**
       * Uncheck icon toggle.
       *
       * @public
       */
    MaterialIconToggle.prototype.uncheck = function () {
        this.inputElement_.checked = false;
        this.updateClasses_();
    };
    MaterialIconToggle.prototype['uncheck'] = MaterialIconToggle.prototype.uncheck;
    /**
       * Initialize element.
       */
    MaterialIconToggle.prototype.init = function () {
        if (this.element_) {
            this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
            if (this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                this.rippleContainerElement_ = document.createElement('span');
                this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
                this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT);
                this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
                this.boundRippleMouseUp = this.onMouseUp_.bind(this);
                this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
                var ripple = document.createElement('span');
                ripple.classList.add(this.CssClasses_.RIPPLE);
                this.rippleContainerElement_.appendChild(ripple);
                this.element_.appendChild(this.rippleContainerElement_);
            }
            this.boundInputOnChange = this.onChange_.bind(this);
            this.boundInputOnFocus = this.onFocus_.bind(this);
            this.boundInputOnBlur = this.onBlur_.bind(this);
            this.boundElementOnMouseUp = this.onMouseUp_.bind(this);
            this.inputElement_.addEventListener('change', this.boundInputOnChange);
            this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
            this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
            this.element_.addEventListener('mouseup', this.boundElementOnMouseUp);
            this.updateClasses_();
            this.element_.classList.add('is-upgraded');
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialIconToggle,
        classAsString: 'MaterialIconToggle',
        cssClass: 'mdl-js-icon-toggle',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for dropdown MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialMenu = function MaterialMenu(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialMenu'] = MaterialMenu;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialMenu.prototype.Constant_ = {
        // Total duration of the menu animation.
        TRANSITION_DURATION_SECONDS: 0.3,
        // The fraction of the total duration we want to use for menu item animations.
        TRANSITION_DURATION_FRACTION: 0.8,
        // How long the menu stays open after choosing an option (so the user can see
        // the ripple).
        CLOSE_TIMEOUT: 150
    };
    /**
       * Keycodes, for code readability.
       *
       * @enum {number}
       * @private
       */
    MaterialMenu.prototype.Keycodes_ = {
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        UP_ARROW: 38,
        DOWN_ARROW: 40
    };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialMenu.prototype.CssClasses_ = {
        CONTAINER: 'mdl-menu__container',
        OUTLINE: 'mdl-menu__outline',
        ITEM: 'mdl-menu__item',
        ITEM_RIPPLE_CONTAINER: 'mdl-menu__item-ripple-container',
        RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
        RIPPLE: 'mdl-ripple',
        // Statuses
        IS_UPGRADED: 'is-upgraded',
        IS_VISIBLE: 'is-visible',
        IS_ANIMATING: 'is-animating',
        // Alignment options
        BOTTOM_LEFT: 'mdl-menu--bottom-left',
        // This is the default.
        BOTTOM_RIGHT: 'mdl-menu--bottom-right',
        TOP_LEFT: 'mdl-menu--top-left',
        TOP_RIGHT: 'mdl-menu--top-right',
        UNALIGNED: 'mdl-menu--unaligned'
    };
    /**
       * Initialize element.
       */
    MaterialMenu.prototype.init = function () {
        if (this.element_) {
            // Create container for the menu.
            var container = document.createElement('div');
            container.classList.add(this.CssClasses_.CONTAINER);
            this.element_.parentElement.insertBefore(container, this.element_);
            this.element_.parentElement.removeChild(this.element_);
            container.appendChild(this.element_);
            this.container_ = container;
            // Create outline for the menu (shadow and background).
            var outline = document.createElement('div');
            outline.classList.add(this.CssClasses_.OUTLINE);
            this.outline_ = outline;
            container.insertBefore(outline, this.element_);
            // Find the "for" element and bind events to it.
            var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');
            var forEl = null;
            if (forElId) {
                forEl = document.getElementById(forElId);
                if (forEl) {
                    this.forElement_ = forEl;
                    forEl.addEventListener('click', this.handleForClick_.bind(this));
                    forEl.addEventListener('keydown', this.handleForKeyboardEvent_.bind(this));
                }
            }
            var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
            this.boundItemKeydown_ = this.handleItemKeyboardEvent_.bind(this);
            this.boundItemClick_ = this.handleItemClick_.bind(this);
            for (var i = 0; i < items.length; i++) {
                // Add a listener to each menu item.
                items[i].addEventListener('click', this.boundItemClick_);
                // Add a tab index to each menu item.
                items[i].tabIndex = '-1';
                // Add a keyboard listener to each menu item.
                items[i].addEventListener('keydown', this.boundItemKeydown_);
            }
            // Add ripple classes to each item, if the user has enabled ripples.
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                for (i = 0; i < items.length; i++) {
                    var item = items[i];
                    var rippleContainer = document.createElement('span');
                    rippleContainer.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
                    var ripple = document.createElement('span');
                    ripple.classList.add(this.CssClasses_.RIPPLE);
                    rippleContainer.appendChild(ripple);
                    item.appendChild(rippleContainer);
                    item.classList.add(this.CssClasses_.RIPPLE_EFFECT);
                }
            }
            // Copy alignment classes to the container, so the outline can use them.
            if (this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)) {
                this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);
            }
            if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
                this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);
            }
            if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
                this.outline_.classList.add(this.CssClasses_.TOP_LEFT);
            }
            if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
                this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);
            }
            if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
                this.outline_.classList.add(this.CssClasses_.UNALIGNED);
            }
            container.classList.add(this.CssClasses_.IS_UPGRADED);
        }
    };
    /**
       * Handles a click on the "for" element, by positioning the menu and then
       * toggling it.
       *
       * @param {Event} evt The event that fired.
       * @private
       */
    MaterialMenu.prototype.handleForClick_ = function (evt) {
        if (this.element_ && this.forElement_) {
            var rect = this.forElement_.getBoundingClientRect();
            var forRect = this.forElement_.parentElement.getBoundingClientRect();
            if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {} else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
                // Position below the "for" element, aligned to its right.
                this.container_.style.right = forRect.right - rect.right + 'px';
                this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
            } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
                // Position above the "for" element, aligned to its left.
                this.container_.style.left = this.forElement_.offsetLeft + 'px';
                this.container_.style.bottom = forRect.bottom - rect.top + 'px';
            } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
                // Position above the "for" element, aligned to its right.
                this.container_.style.right = forRect.right - rect.right + 'px';
                this.container_.style.bottom = forRect.bottom - rect.top + 'px';
            } else {
                // Default: position below the "for" element, aligned to its left.
                this.container_.style.left = this.forElement_.offsetLeft + 'px';
                this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
            }
        }
        this.toggle(evt);
    };
    /**
       * Handles a keyboard event on the "for" element.
       *
       * @param {Event} evt The event that fired.
       * @private
       */
    MaterialMenu.prototype.handleForKeyboardEvent_ = function (evt) {
        if (this.element_ && this.container_ && this.forElement_) {
            var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
            if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
                if (evt.keyCode === this.Keycodes_.UP_ARROW) {
                    evt.preventDefault();
                    items[items.length - 1].focus();
                } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
                    evt.preventDefault();
                    items[0].focus();
                }
            }
        }
    };
    /**
       * Handles a keyboard event on an item.
       *
       * @param {Event} evt The event that fired.
       * @private
       */
    MaterialMenu.prototype.handleItemKeyboardEvent_ = function (evt) {
        if (this.element_ && this.container_) {
            var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
            if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
                var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);
                if (evt.keyCode === this.Keycodes_.UP_ARROW) {
                    evt.preventDefault();
                    if (currentIndex > 0) {
                        items[currentIndex - 1].focus();
                    } else {
                        items[items.length - 1].focus();
                    }
                } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
                    evt.preventDefault();
                    if (items.length > currentIndex + 1) {
                        items[currentIndex + 1].focus();
                    } else {
                        items[0].focus();
                    }
                } else if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
                    evt.preventDefault();
                    // Send mousedown and mouseup to trigger ripple.
                    var e = new MouseEvent('mousedown');
                    evt.target.dispatchEvent(e);
                    e = new MouseEvent('mouseup');
                    evt.target.dispatchEvent(e);
                    // Send click.
                    evt.target.click();
                } else if (evt.keyCode === this.Keycodes_.ESCAPE) {
                    evt.preventDefault();
                    this.hide();
                }
            }
        }
    };
    /**
       * Handles a click event on an item.
       *
       * @param {Event} evt The event that fired.
       * @private
       */
    MaterialMenu.prototype.handleItemClick_ = function (evt) {
        if (evt.target.hasAttribute('disabled')) {
            evt.stopPropagation();
        } else {
            // Wait some time before closing menu, so the user can see the ripple.
            this.closing_ = true;
            window.setTimeout(function (evt) {
                this.hide();
                this.closing_ = false;
            }.bind(this), this.Constant_.CLOSE_TIMEOUT);
        }
    };
    /**
       * Calculates the initial clip (for opening the menu) or final clip (for closing
       * it), and applies it. This allows us to animate from or to the correct point,
       * that is, the point it's aligned to in the "for" element.
       *
       * @param {number} height Height of the clip rectangle
       * @param {number} width Width of the clip rectangle
       * @private
       */
    MaterialMenu.prototype.applyClip_ = function (height, width) {
        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
            // Do not clip.
            this.element_.style.clip = '';
        } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
            // Clip to the top right corner of the menu.
            this.element_.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
        } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
            // Clip to the bottom left corner of the menu.
            this.element_.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
        } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
            // Clip to the bottom right corner of the menu.
            this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
        } else {
            // Default: do not clip (same as clipping to the top left corner).
            this.element_.style.clip = '';
        }
    };
    /**
       * Cleanup function to remove animation listeners.
       *
       * @param {Event} evt
       * @private
       */
    MaterialMenu.prototype.removeAnimationEndListener_ = function (evt) {
        evt.target.classList.remove(MaterialMenu.prototype.CssClasses_.IS_ANIMATING);
    };
    /**
       * Adds an event listener to clean up after the animation ends.
       *
       * @private
       */
    MaterialMenu.prototype.addAnimationEndListener_ = function () {
        this.element_.addEventListener('transitionend', this.removeAnimationEndListener_);
        this.element_.addEventListener('webkitTransitionEnd', this.removeAnimationEndListener_);
    };
    /**
       * Displays the menu.
       *
       * @public
       */
    MaterialMenu.prototype.show = function (evt) {
        if (this.element_ && this.container_ && this.outline_) {
            // Measure the inner element.
            var height = this.element_.getBoundingClientRect().height;
            var width = this.element_.getBoundingClientRect().width;
            // Apply the inner element's size to the container and outline.
            this.container_.style.width = width + 'px';
            this.container_.style.height = height + 'px';
            this.outline_.style.width = width + 'px';
            this.outline_.style.height = height + 'px';
            var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION;
            // Calculate transition delays for individual menu items, so that they fade
            // in one at a time.
            var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
            for (var i = 0; i < items.length; i++) {
                var itemDelay = null;
                if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
                    itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
                } else {
                    itemDelay = items[i].offsetTop / height * transitionDuration + 's';
                }
                items[i].style.transitionDelay = itemDelay;
            }
            // Apply the initial clip to the text before we start animating.
            this.applyClip_(height, width);
            // Wait for the next frame, turn on animation, and apply the final clip.
            // Also make it visible. This triggers the transitions.
            window.requestAnimationFrame(function () {
                this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
                this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
                this.container_.classList.add(this.CssClasses_.IS_VISIBLE);
            }.bind(this));
            // Clean up after the animation is complete.
            this.addAnimationEndListener_();
            // Add a click listener to the document, to close the menu.
            var callback = function (e) {
                // Check to see if the document is processing the same event that
                // displayed the menu in the first place. If so, do nothing.
                // Also check to see if the menu is in the process of closing itself, and
                // do nothing in that case.
                // Also check if the clicked element is a menu item
                // if so, do nothing.
                if (e !== evt && !this.closing_ && e.target.parentNode !== this.element_) {
                    document.removeEventListener('click', callback);
                    this.hide();
                }
            }.bind(this);
            document.addEventListener('click', callback);
        }
    };
    MaterialMenu.prototype['show'] = MaterialMenu.prototype.show;
    /**
       * Hides the menu.
       *
       * @public
       */
    MaterialMenu.prototype.hide = function () {
        if (this.element_ && this.container_ && this.outline_) {
            var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
            // Remove all transition delays; menu items fade out concurrently.
            for (var i = 0; i < items.length; i++) {
                items[i].style.removeProperty('transition-delay');
            }
            // Measure the inner element.
            var rect = this.element_.getBoundingClientRect();
            var height = rect.height;
            var width = rect.width;
            // Turn on animation, and apply the final clip. Also make invisible.
            // This triggers the transitions.
            this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
            this.applyClip_(height, width);
            this.container_.classList.remove(this.CssClasses_.IS_VISIBLE);
            // Clean up after the animation is complete.
            this.addAnimationEndListener_();
        }
    };
    MaterialMenu.prototype['hide'] = MaterialMenu.prototype.hide;
    /**
       * Displays or hides the menu, depending on current state.
       *
       * @public
       */
    MaterialMenu.prototype.toggle = function (evt) {
        if (this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
            this.hide();
        } else {
            this.show(evt);
        }
    };
    MaterialMenu.prototype['toggle'] = MaterialMenu.prototype.toggle;
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialMenu,
        classAsString: 'MaterialMenu',
        cssClass: 'mdl-js-menu',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Progress MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialProgress = function MaterialProgress(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialProgress'] = MaterialProgress;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialProgress.prototype.Constant_ = {};
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialProgress.prototype.CssClasses_ = { INDETERMINATE_CLASS: 'mdl-progress__indeterminate' };
    /**
       * Set the current progress of the progressbar.
       *
       * @param {number} p Percentage of the progress (0-100)
       * @public
       */
    MaterialProgress.prototype.setProgress = function (p) {
        if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {
            return;
        }
        this.progressbar_.style.width = p + '%';
    };
    MaterialProgress.prototype['setProgress'] = MaterialProgress.prototype.setProgress;
    /**
       * Set the current progress of the buffer.
       *
       * @param {number} p Percentage of the buffer (0-100)
       * @public
       */
    MaterialProgress.prototype.setBuffer = function (p) {
        this.bufferbar_.style.width = p + '%';
        this.auxbar_.style.width = 100 - p + '%';
    };
    MaterialProgress.prototype['setBuffer'] = MaterialProgress.prototype.setBuffer;
    /**
       * Initialize element.
       */
    MaterialProgress.prototype.init = function () {
        if (this.element_) {
            var el = document.createElement('div');
            el.className = 'progressbar bar bar1';
            this.element_.appendChild(el);
            this.progressbar_ = el;
            el = document.createElement('div');
            el.className = 'bufferbar bar bar2';
            this.element_.appendChild(el);
            this.bufferbar_ = el;
            el = document.createElement('div');
            el.className = 'auxbar bar bar3';
            this.element_.appendChild(el);
            this.auxbar_ = el;
            this.progressbar_.style.width = '0%';
            this.bufferbar_.style.width = '100%';
            this.auxbar_.style.width = '0%';
            this.element_.classList.add('is-upgraded');
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialProgress,
        classAsString: 'MaterialProgress',
        cssClass: 'mdl-js-progress',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Radio MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialRadio = function MaterialRadio(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialRadio'] = MaterialRadio;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialRadio.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialRadio.prototype.CssClasses_ = {
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_CHECKED: 'is-checked',
        IS_UPGRADED: 'is-upgraded',
        JS_RADIO: 'mdl-js-radio',
        RADIO_BTN: 'mdl-radio__button',
        RADIO_OUTER_CIRCLE: 'mdl-radio__outer-circle',
        RADIO_INNER_CIRCLE: 'mdl-radio__inner-circle',
        RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
        RIPPLE_CONTAINER: 'mdl-radio__ripple-container',
        RIPPLE_CENTER: 'mdl-ripple--center',
        RIPPLE: 'mdl-ripple'
    };
    /**
       * Handle change of state.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialRadio.prototype.onChange_ = function (event) {
        // Since other radio buttons don't get change events, we need to look for
        // them to update their classes.
        var radios = document.getElementsByClassName(this.CssClasses_.JS_RADIO);
        for (var i = 0; i < radios.length; i++) {
            var button = radios[i].querySelector('.' + this.CssClasses_.RADIO_BTN);
            // Different name == different group, so no point updating those.
            if (button.getAttribute('name') === this.btnElement_.getAttribute('name')) {
                if (typeof radios[i]['MaterialRadio'] !== 'undefined') {
                    radios[i]['MaterialRadio'].updateClasses_();
                }
            }
        }
    };
    /**
       * Handle focus.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialRadio.prototype.onFocus_ = function (event) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle lost focus.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialRadio.prototype.onBlur_ = function (event) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle mouseup.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialRadio.prototype.onMouseup_ = function (event) {
        this.blur_();
    };
    /**
       * Update classes.
       *
       * @private
       */
    MaterialRadio.prototype.updateClasses_ = function () {
        this.checkDisabled();
        this.checkToggleState();
    };
    /**
       * Add blur.
       *
       * @private
       */
    MaterialRadio.prototype.blur_ = function () {
        // TODO: figure out why there's a focus event being fired after our blur,
        // so that we can avoid this hack.
        window.setTimeout(function () {
            this.btnElement_.blur();
        }.bind(this), this.Constant_.TINY_TIMEOUT);
    };
    // Public methods.
    /**
       * Check the components disabled state.
       *
       * @public
       */
    MaterialRadio.prototype.checkDisabled = function () {
        if (this.btnElement_.disabled) {
            this.element_.classList.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
        }
    };
    MaterialRadio.prototype['checkDisabled'] = MaterialRadio.prototype.checkDisabled;
    /**
       * Check the components toggled state.
       *
       * @public
       */
    MaterialRadio.prototype.checkToggleState = function () {
        if (this.btnElement_.checked) {
            this.element_.classList.add(this.CssClasses_.IS_CHECKED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
        }
    };
    MaterialRadio.prototype['checkToggleState'] = MaterialRadio.prototype.checkToggleState;
    /**
       * Disable radio.
       *
       * @public
       */
    MaterialRadio.prototype.disable = function () {
        this.btnElement_.disabled = true;
        this.updateClasses_();
    };
    MaterialRadio.prototype['disable'] = MaterialRadio.prototype.disable;
    /**
       * Enable radio.
       *
       * @public
       */
    MaterialRadio.prototype.enable = function () {
        this.btnElement_.disabled = false;
        this.updateClasses_();
    };
    MaterialRadio.prototype['enable'] = MaterialRadio.prototype.enable;
    /**
       * Check radio.
       *
       * @public
       */
    MaterialRadio.prototype.check = function () {
        this.btnElement_.checked = true;
        this.onChange_(null);
    };
    MaterialRadio.prototype['check'] = MaterialRadio.prototype.check;
    /**
       * Uncheck radio.
       *
       * @public
       */
    MaterialRadio.prototype.uncheck = function () {
        this.btnElement_.checked = false;
        this.onChange_(null);
    };
    MaterialRadio.prototype['uncheck'] = MaterialRadio.prototype.uncheck;
    /**
       * Initialize element.
       */
    MaterialRadio.prototype.init = function () {
        if (this.element_) {
            this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);
            this.boundChangeHandler_ = this.onChange_.bind(this);
            this.boundFocusHandler_ = this.onChange_.bind(this);
            this.boundBlurHandler_ = this.onBlur_.bind(this);
            this.boundMouseUpHandler_ = this.onMouseup_.bind(this);
            var outerCircle = document.createElement('span');
            outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
            var innerCircle = document.createElement('span');
            innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);
            this.element_.appendChild(outerCircle);
            this.element_.appendChild(innerCircle);
            var rippleContainer;
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                rippleContainer = document.createElement('span');
                rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
                rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);
                rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);
                rippleContainer.addEventListener('mouseup', this.boundMouseUpHandler_);
                var ripple = document.createElement('span');
                ripple.classList.add(this.CssClasses_.RIPPLE);
                rippleContainer.appendChild(ripple);
                this.element_.appendChild(rippleContainer);
            }
            this.btnElement_.addEventListener('change', this.boundChangeHandler_);
            this.btnElement_.addEventListener('focus', this.boundFocusHandler_);
            this.btnElement_.addEventListener('blur', this.boundBlurHandler_);
            this.element_.addEventListener('mouseup', this.boundMouseUpHandler_);
            this.updateClasses_();
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialRadio,
        classAsString: 'MaterialRadio',
        cssClass: 'mdl-js-radio',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Slider MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialSlider = function MaterialSlider(element) {
        this.element_ = element;
        // Browser feature detection.
        this.isIE_ = window.navigator.msPointerEnabled;
        // Initialize instance.
        this.init();
    };
    window['MaterialSlider'] = MaterialSlider;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialSlider.prototype.Constant_ = {};
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialSlider.prototype.CssClasses_ = {
        IE_CONTAINER: 'mdl-slider__ie-container',
        SLIDER_CONTAINER: 'mdl-slider__container',
        BACKGROUND_FLEX: 'mdl-slider__background-flex',
        BACKGROUND_LOWER: 'mdl-slider__background-lower',
        BACKGROUND_UPPER: 'mdl-slider__background-upper',
        IS_LOWEST_VALUE: 'is-lowest-value',
        IS_UPGRADED: 'is-upgraded'
    };
    /**
       * Handle input on element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialSlider.prototype.onInput_ = function (event) {
        this.updateValueStyles_();
    };
    /**
       * Handle change on element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialSlider.prototype.onChange_ = function (event) {
        this.updateValueStyles_();
    };
    /**
       * Handle mouseup on element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialSlider.prototype.onMouseUp_ = function (event) {
        event.target.blur();
    };
    /**
       * Handle mousedown on container element.
       * This handler is purpose is to not require the use to click
       * exactly on the 2px slider element, as FireFox seems to be very
       * strict about this.
       *
       * @param {Event} event The event that fired.
       * @private
       * @suppress {missingProperties}
       */
    MaterialSlider.prototype.onContainerMouseDown_ = function (event) {
        // If this click is not on the parent element (but rather some child)
        // ignore. It may still bubble up.
        if (event.target !== this.element_.parentElement) {
            return;
        }
        // Discard the original event and create a new event that
        // is on the slider element.
        event.preventDefault();
        var newEvent = new MouseEvent('mousedown', {
            target: event.target,
            buttons: event.buttons,
            clientX: event.clientX,
            clientY: this.element_.getBoundingClientRect().y
        });
        this.element_.dispatchEvent(newEvent);
    };
    /**
       * Handle updating of values.
       *
       * @private
       */
    MaterialSlider.prototype.updateValueStyles_ = function () {
        // Calculate and apply percentages to div structure behind slider.
        var fraction = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
        if (fraction === 0) {
            this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);
        }
        if (!this.isIE_) {
            this.backgroundLower_.style.flex = fraction;
            this.backgroundLower_.style.webkitFlex = fraction;
            this.backgroundUpper_.style.flex = 1 - fraction;
            this.backgroundUpper_.style.webkitFlex = 1 - fraction;
        }
    };
    // Public methods.
    /**
       * Disable slider.
       *
       * @public
       */
    MaterialSlider.prototype.disable = function () {
        this.element_.disabled = true;
    };
    MaterialSlider.prototype['disable'] = MaterialSlider.prototype.disable;
    /**
       * Enable slider.
       *
       * @public
       */
    MaterialSlider.prototype.enable = function () {
        this.element_.disabled = false;
    };
    MaterialSlider.prototype['enable'] = MaterialSlider.prototype.enable;
    /**
       * Update slider value.
       *
       * @param {number} value The value to which to set the control (optional).
       * @public
       */
    MaterialSlider.prototype.change = function (value) {
        if (typeof value !== 'undefined') {
            this.element_.value = value;
        }
        this.updateValueStyles_();
    };
    MaterialSlider.prototype['change'] = MaterialSlider.prototype.change;
    /**
       * Initialize element.
       */
    MaterialSlider.prototype.init = function () {
        if (this.element_) {
            if (this.isIE_) {
                // Since we need to specify a very large height in IE due to
                // implementation limitations, we add a parent here that trims it down to
                // a reasonable size.
                var containerIE = document.createElement('div');
                containerIE.classList.add(this.CssClasses_.IE_CONTAINER);
                this.element_.parentElement.insertBefore(containerIE, this.element_);
                this.element_.parentElement.removeChild(this.element_);
                containerIE.appendChild(this.element_);
            } else {
                // For non-IE browsers, we need a div structure that sits behind the
                // slider and allows us to style the left and right sides of it with
                // different colors.
                var container = document.createElement('div');
                container.classList.add(this.CssClasses_.SLIDER_CONTAINER);
                this.element_.parentElement.insertBefore(container, this.element_);
                this.element_.parentElement.removeChild(this.element_);
                container.appendChild(this.element_);
                var backgroundFlex = document.createElement('div');
                backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);
                container.appendChild(backgroundFlex);
                this.backgroundLower_ = document.createElement('div');
                this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);
                backgroundFlex.appendChild(this.backgroundLower_);
                this.backgroundUpper_ = document.createElement('div');
                this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);
                backgroundFlex.appendChild(this.backgroundUpper_);
            }
            this.boundInputHandler = this.onInput_.bind(this);
            this.boundChangeHandler = this.onChange_.bind(this);
            this.boundMouseUpHandler = this.onMouseUp_.bind(this);
            this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this);
            this.element_.addEventListener('input', this.boundInputHandler);
            this.element_.addEventListener('change', this.boundChangeHandler);
            this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
            this.element_.parentElement.addEventListener('mousedown', this.boundContainerMouseDownHandler);
            this.updateValueStyles_();
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialSlider,
        classAsString: 'MaterialSlider',
        cssClass: 'mdl-js-slider',
        widget: true
    });
    /**
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Snackbar MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialSnackbar = function MaterialSnackbar(element) {
        this.element_ = element;
        this.textElement_ = this.element_.querySelector('.' + this.cssClasses_.MESSAGE);
        this.actionElement_ = this.element_.querySelector('.' + this.cssClasses_.ACTION);
        if (!this.textElement_) {
            throw new Error('There must be a message element for a snackbar.');
        }
        if (!this.actionElement_) {
            throw new Error('There must be an action element for a snackbar.');
        }
        this.active = false;
        this.actionHandler_ = undefined;
        this.message_ = undefined;
        this.actionText_ = undefined;
        this.queuedNotifications_ = [];
        this.setActionHidden_(true);
    };
    window['MaterialSnackbar'] = MaterialSnackbar;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialSnackbar.prototype.Constant_ = {
        // The duration of the snackbar show/hide animation, in ms.
        ANIMATION_LENGTH: 250
    };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialSnackbar.prototype.cssClasses_ = {
        SNACKBAR: 'mdl-snackbar',
        MESSAGE: 'mdl-snackbar__text',
        ACTION: 'mdl-snackbar__action',
        ACTIVE: 'mdl-snackbar--active'
    };
    /**
       * Display the snackbar.
       *
       * @private
       */
    MaterialSnackbar.prototype.displaySnackbar_ = function () {
        this.element_.setAttribute('aria-hidden', 'true');
        if (this.actionHandler_) {
            this.actionElement_.textContent = this.actionText_;
            this.actionElement_.addEventListener('click', this.actionHandler_);
            this.setActionHidden_(false);
        }
        this.textElement_.textContent = this.message_;
        this.element_.classList.add(this.cssClasses_.ACTIVE);
        this.element_.setAttribute('aria-hidden', 'false');
        setTimeout(this.cleanup_.bind(this), this.timeout_);
    };
    /**
       * Show the snackbar.
       *
       * @param {Object} data The data for the notification.
       * @public
       */
    MaterialSnackbar.prototype.showSnackbar = function (data) {
        if (data === undefined) {
            throw new Error('Please provide a data object with at least a message to display.');
        }
        if (data['message'] === undefined) {
            throw new Error('Please provide a message to be displayed.');
        }
        if (data['actionHandler'] && !data['actionText']) {
            throw new Error('Please provide action text with the handler.');
        }
        if (this.active) {
            this.queuedNotifications_.push(data);
        } else {
            this.active = true;
            this.message_ = data['message'];
            if (data['timeout']) {
                this.timeout_ = data['timeout'];
            } else {
                this.timeout_ = 2750;
            }
            if (data['actionHandler']) {
                this.actionHandler_ = data['actionHandler'];
            }
            if (data['actionText']) {
                this.actionText_ = data['actionText'];
            }
            this.displaySnackbar_();
        }
    };
    MaterialSnackbar.prototype['showSnackbar'] = MaterialSnackbar.prototype.showSnackbar;
    /**
       * Check if the queue has items within it.
       * If it does, display the next entry.
       *
       * @private
       */
    MaterialSnackbar.prototype.checkQueue_ = function () {
        if (this.queuedNotifications_.length > 0) {
            this.showSnackbar(this.queuedNotifications_.shift());
        }
    };
    /**
       * Cleanup the snackbar event listeners and accessiblity attributes.
       *
       * @private
       */
    MaterialSnackbar.prototype.cleanup_ = function () {
        this.element_.classList.remove(this.cssClasses_.ACTIVE);
        setTimeout(function () {
            this.element_.setAttribute('aria-hidden', 'true');
            this.textElement_.textContent = '';
            if (!Boolean(this.actionElement_.getAttribute('aria-hidden'))) {
                this.setActionHidden_(true);
                this.actionElement_.textContent = '';
                this.actionElement_.removeEventListener('click', this.actionHandler_);
            }
            this.actionHandler_ = undefined;
            this.message_ = undefined;
            this.actionText_ = undefined;
            this.active = false;
            this.checkQueue_();
        }.bind(this), this.Constant_.ANIMATION_LENGTH);
    };
    /**
       * Set the action handler hidden state.
       *
       * @param {boolean} value
       * @private
       */
    MaterialSnackbar.prototype.setActionHidden_ = function (value) {
        if (value) {
            this.actionElement_.setAttribute('aria-hidden', 'true');
        } else {
            this.actionElement_.removeAttribute('aria-hidden');
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialSnackbar,
        classAsString: 'MaterialSnackbar',
        cssClass: 'mdl-js-snackbar',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Spinner MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @param {HTMLElement} element The element that will be upgraded.
       * @constructor
       */
    var MaterialSpinner = function MaterialSpinner(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialSpinner'] = MaterialSpinner;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialSpinner.prototype.Constant_ = { MDL_SPINNER_LAYER_COUNT: 4 };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialSpinner.prototype.CssClasses_ = {
        MDL_SPINNER_LAYER: 'mdl-spinner__layer',
        MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
        MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',
        MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',
        MDL_SPINNER_LEFT: 'mdl-spinner__left',
        MDL_SPINNER_RIGHT: 'mdl-spinner__right'
    };
    /**
       * Auxiliary method to create a spinner layer.
       *
       * @param {number} index Index of the layer to be created.
       * @public
       */
    MaterialSpinner.prototype.createLayer = function (index) {
        var layer = document.createElement('div');
        layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
        layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);
        var leftClipper = document.createElement('div');
        leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
        leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
        var gapPatch = document.createElement('div');
        gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
        var rightClipper = document.createElement('div');
        rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
        rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
        var circleOwners = [leftClipper, gapPatch, rightClipper];
        for (var i = 0; i < circleOwners.length; i++) {
            var circle = document.createElement('div');
            circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
            circleOwners[i].appendChild(circle);
        }
        layer.appendChild(leftClipper);
        layer.appendChild(gapPatch);
        layer.appendChild(rightClipper);
        this.element_.appendChild(layer);
    };
    MaterialSpinner.prototype['createLayer'] = MaterialSpinner.prototype.createLayer;
    /**
       * Stops the spinner animation.
       * Public method for users who need to stop the spinner for any reason.
       *
       * @public
       */
    MaterialSpinner.prototype.stop = function () {
        this.element_.classList.remove('is-active');
    };
    MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;
    /**
       * Starts the spinner animation.
       * Public method for users who need to manually start the spinner for any reason
       * (instead of just adding the 'is-active' class to their markup).
       *
       * @public
       */
    MaterialSpinner.prototype.start = function () {
        this.element_.classList.add('is-active');
    };
    MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;
    /**
       * Initialize element.
       */
    MaterialSpinner.prototype.init = function () {
        if (this.element_) {
            for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
                this.createLayer(i);
            }
            this.element_.classList.add('is-upgraded');
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialSpinner,
        classAsString: 'MaterialSpinner',
        cssClass: 'mdl-js-spinner',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Checkbox MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialSwitch = function MaterialSwitch(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialSwitch'] = MaterialSwitch;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialSwitch.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialSwitch.prototype.CssClasses_ = {
        INPUT: 'mdl-switch__input',
        TRACK: 'mdl-switch__track',
        THUMB: 'mdl-switch__thumb',
        FOCUS_HELPER: 'mdl-switch__focus-helper',
        RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
        RIPPLE_CONTAINER: 'mdl-switch__ripple-container',
        RIPPLE_CENTER: 'mdl-ripple--center',
        RIPPLE: 'mdl-ripple',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_CHECKED: 'is-checked'
    };
    /**
       * Handle change of state.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialSwitch.prototype.onChange_ = function (event) {
        this.updateClasses_();
    };
    /**
       * Handle focus of element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialSwitch.prototype.onFocus_ = function (event) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle lost focus of element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialSwitch.prototype.onBlur_ = function (event) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle mouseup.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialSwitch.prototype.onMouseUp_ = function (event) {
        this.blur_();
    };
    /**
       * Handle class updates.
       *
       * @private
       */
    MaterialSwitch.prototype.updateClasses_ = function () {
        this.checkDisabled();
        this.checkToggleState();
    };
    /**
       * Add blur.
       *
       * @private
       */
    MaterialSwitch.prototype.blur_ = function () {
        // TODO: figure out why there's a focus event being fired after our blur,
        // so that we can avoid this hack.
        window.setTimeout(function () {
            this.inputElement_.blur();
        }.bind(this), this.Constant_.TINY_TIMEOUT);
    };
    // Public methods.
    /**
       * Check the components disabled state.
       *
       * @public
       */
    MaterialSwitch.prototype.checkDisabled = function () {
        if (this.inputElement_.disabled) {
            this.element_.classList.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
        }
    };
    MaterialSwitch.prototype['checkDisabled'] = MaterialSwitch.prototype.checkDisabled;
    /**
       * Check the components toggled state.
       *
       * @public
       */
    MaterialSwitch.prototype.checkToggleState = function () {
        if (this.inputElement_.checked) {
            this.element_.classList.add(this.CssClasses_.IS_CHECKED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
        }
    };
    MaterialSwitch.prototype['checkToggleState'] = MaterialSwitch.prototype.checkToggleState;
    /**
       * Disable switch.
       *
       * @public
       */
    MaterialSwitch.prototype.disable = function () {
        this.inputElement_.disabled = true;
        this.updateClasses_();
    };
    MaterialSwitch.prototype['disable'] = MaterialSwitch.prototype.disable;
    /**
       * Enable switch.
       *
       * @public
       */
    MaterialSwitch.prototype.enable = function () {
        this.inputElement_.disabled = false;
        this.updateClasses_();
    };
    MaterialSwitch.prototype['enable'] = MaterialSwitch.prototype.enable;
    /**
       * Activate switch.
       *
       * @public
       */
    MaterialSwitch.prototype.on = function () {
        this.inputElement_.checked = true;
        this.updateClasses_();
    };
    MaterialSwitch.prototype['on'] = MaterialSwitch.prototype.on;
    /**
       * Deactivate switch.
       *
       * @public
       */
    MaterialSwitch.prototype.off = function () {
        this.inputElement_.checked = false;
        this.updateClasses_();
    };
    MaterialSwitch.prototype['off'] = MaterialSwitch.prototype.off;
    /**
       * Initialize element.
       */
    MaterialSwitch.prototype.init = function () {
        if (this.element_) {
            this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
            var track = document.createElement('div');
            track.classList.add(this.CssClasses_.TRACK);
            var thumb = document.createElement('div');
            thumb.classList.add(this.CssClasses_.THUMB);
            var focusHelper = document.createElement('span');
            focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);
            thumb.appendChild(focusHelper);
            this.element_.appendChild(track);
            this.element_.appendChild(thumb);
            this.boundMouseUpHandler = this.onMouseUp_.bind(this);
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                this.rippleContainerElement_ = document.createElement('span');
                this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
                this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
                this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
                this.rippleContainerElement_.addEventListener('mouseup', this.boundMouseUpHandler);
                var ripple = document.createElement('span');
                ripple.classList.add(this.CssClasses_.RIPPLE);
                this.rippleContainerElement_.appendChild(ripple);
                this.element_.appendChild(this.rippleContainerElement_);
            }
            this.boundChangeHandler = this.onChange_.bind(this);
            this.boundFocusHandler = this.onFocus_.bind(this);
            this.boundBlurHandler = this.onBlur_.bind(this);
            this.inputElement_.addEventListener('change', this.boundChangeHandler);
            this.inputElement_.addEventListener('focus', this.boundFocusHandler);
            this.inputElement_.addEventListener('blur', this.boundBlurHandler);
            this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
            this.updateClasses_();
            this.element_.classList.add('is-upgraded');
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialSwitch,
        classAsString: 'MaterialSwitch',
        cssClass: 'mdl-js-switch',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Tabs MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {Element} element The element that will be upgraded.
       */
    var MaterialTabs = function MaterialTabs(element) {
        // Stores the HTML element.
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialTabs'] = MaterialTabs;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string}
       * @private
       */
    MaterialTabs.prototype.Constant_ = {};
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialTabs.prototype.CssClasses_ = {
        TAB_CLASS: 'mdl-tabs__tab',
        PANEL_CLASS: 'mdl-tabs__panel',
        ACTIVE_CLASS: 'is-active',
        UPGRADED_CLASS: 'is-upgraded',
        MDL_JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        MDL_RIPPLE_CONTAINER: 'mdl-tabs__ripple-container',
        MDL_RIPPLE: 'mdl-ripple',
        MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events'
    };
    /**
       * Handle clicks to a tabs component
       *
       * @private
       */
    MaterialTabs.prototype.initTabs_ = function () {
        if (this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);
        }
        // Select element tabs, document panels
        this.tabs_ = this.element_.querySelectorAll('.' + this.CssClasses_.TAB_CLASS);
        this.panels_ = this.element_.querySelectorAll('.' + this.CssClasses_.PANEL_CLASS);
        // Create new tabs for each tab element
        for (var i = 0; i < this.tabs_.length; i++) {
            new MaterialTab(this.tabs_[i], this);
        }
        this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);
    };
    /**
       * Reset tab state, dropping active classes
       *
       * @private
       */
    MaterialTabs.prototype.resetTabState_ = function () {
        for (var k = 0; k < this.tabs_.length; k++) {
            this.tabs_[k].classList.remove(this.CssClasses_.ACTIVE_CLASS);
        }
    };
    /**
       * Reset panel state, droping active classes
       *
       * @private
       */
    MaterialTabs.prototype.resetPanelState_ = function () {
        for (var j = 0; j < this.panels_.length; j++) {
            this.panels_[j].classList.remove(this.CssClasses_.ACTIVE_CLASS);
        }
    };
    /**
       * Initialize element.
       */
    MaterialTabs.prototype.init = function () {
        if (this.element_) {
            this.initTabs_();
        }
    };
    /**
       * Constructor for an individual tab.
       *
       * @constructor
       * @param {Element} tab The HTML element for the tab.
       * @param {MaterialTabs} ctx The MaterialTabs object that owns the tab.
       */
    function MaterialTab(tab, ctx) {
        if (tab) {
            if (ctx.element_.classList.contains(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
                var rippleContainer = document.createElement('span');
                rippleContainer.classList.add(ctx.CssClasses_.MDL_RIPPLE_CONTAINER);
                rippleContainer.classList.add(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT);
                var ripple = document.createElement('span');
                ripple.classList.add(ctx.CssClasses_.MDL_RIPPLE);
                rippleContainer.appendChild(ripple);
                tab.appendChild(rippleContainer);
            }
            tab.addEventListener('click', function (e) {
                if (tab.getAttribute('href').charAt(0) === '#') {
                    e.preventDefault();
                    var href = tab.href.split('#')[1];
                    var panel = ctx.element_.querySelector('#' + href);
                    ctx.resetTabState_();
                    ctx.resetPanelState_();
                    tab.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
                    panel.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
                }
            });
        }
    }
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialTabs,
        classAsString: 'MaterialTabs',
        cssClass: 'mdl-js-tabs'
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Textfield MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialTextfield = function MaterialTextfield(element) {
        this.element_ = element;
        this.maxRows = this.Constant_.NO_MAX_ROWS;
        // Initialize instance.
        this.init();
    };
    window['MaterialTextfield'] = MaterialTextfield;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialTextfield.prototype.Constant_ = {
        NO_MAX_ROWS: -1,
        MAX_ROWS_ATTRIBUTE: 'maxrows'
    };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialTextfield.prototype.CssClasses_ = {
        LABEL: 'mdl-textfield__label',
        INPUT: 'mdl-textfield__input',
        IS_DIRTY: 'is-dirty',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_INVALID: 'is-invalid',
        IS_UPGRADED: 'is-upgraded',
        HAS_PLACEHOLDER: 'has-placeholder'
    };
    /**
       * Handle input being entered.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialTextfield.prototype.onKeyDown_ = function (event) {
        var currentRowCount = event.target.value.split('\n').length;
        if (event.keyCode === 13) {
            if (currentRowCount >= this.maxRows) {
                event.preventDefault();
            }
        }
    };
    /**
       * Handle focus.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialTextfield.prototype.onFocus_ = function (event) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle lost focus.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialTextfield.prototype.onBlur_ = function (event) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    };
    /**
       * Handle reset event from out side.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialTextfield.prototype.onReset_ = function (event) {
        this.updateClasses_();
    };
    /**
       * Handle class updates.
       *
       * @private
       */
    MaterialTextfield.prototype.updateClasses_ = function () {
        this.checkDisabled();
        this.checkValidity();
        this.checkDirty();
        this.checkFocus();
    };
    // Public methods.
    /**
       * Check the disabled state and update field accordingly.
       *
       * @public
       */
    MaterialTextfield.prototype.checkDisabled = function () {
        if (this.input_.disabled) {
            this.element_.classList.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
        }
    };
    MaterialTextfield.prototype['checkDisabled'] = MaterialTextfield.prototype.checkDisabled;
    /**
      * Check the focus state and update field accordingly.
      *
      * @public
      */
    MaterialTextfield.prototype.checkFocus = function () {
        if (Boolean(this.element_.querySelector(':focus'))) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
        }
    };
    MaterialTextfield.prototype['checkFocus'] = MaterialTextfield.prototype.checkFocus;
    /**
       * Check the validity state and update field accordingly.
       *
       * @public
       */
    MaterialTextfield.prototype.checkValidity = function () {
        if (this.input_.validity) {
            if (this.input_.validity.valid) {
                this.element_.classList.remove(this.CssClasses_.IS_INVALID);
            } else {
                this.element_.classList.add(this.CssClasses_.IS_INVALID);
            }
        }
    };
    MaterialTextfield.prototype['checkValidity'] = MaterialTextfield.prototype.checkValidity;
    /**
       * Check the dirty state and update field accordingly.
       *
       * @public
       */
    MaterialTextfield.prototype.checkDirty = function () {
        if (this.input_.value && this.input_.value.length > 0) {
            this.element_.classList.add(this.CssClasses_.IS_DIRTY);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
        }
    };
    MaterialTextfield.prototype['checkDirty'] = MaterialTextfield.prototype.checkDirty;
    /**
       * Disable text field.
       *
       * @public
       */
    MaterialTextfield.prototype.disable = function () {
        this.input_.disabled = true;
        this.updateClasses_();
    };
    MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;
    /**
       * Enable text field.
       *
       * @public
       */
    MaterialTextfield.prototype.enable = function () {
        this.input_.disabled = false;
        this.updateClasses_();
    };
    MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;
    /**
       * Update text field value.
       *
       * @param {string} value The value to which to set the control (optional).
       * @public
       */
    MaterialTextfield.prototype.change = function (value) {
        this.input_.value = value || '';
        this.updateClasses_();
    };
    MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;
    /**
       * Initialize element.
       */
    MaterialTextfield.prototype.init = function () {
        if (this.element_) {
            this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
            this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
            if (this.input_) {
                if (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)) {
                    this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10);
                    if (isNaN(this.maxRows)) {
                        this.maxRows = this.Constant_.NO_MAX_ROWS;
                    }
                }
                if (this.input_.hasAttribute('placeholder')) {
                    this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);
                }
                this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
                this.boundFocusHandler = this.onFocus_.bind(this);
                this.boundBlurHandler = this.onBlur_.bind(this);
                this.boundResetHandler = this.onReset_.bind(this);
                this.input_.addEventListener('input', this.boundUpdateClassesHandler);
                this.input_.addEventListener('focus', this.boundFocusHandler);
                this.input_.addEventListener('blur', this.boundBlurHandler);
                this.input_.addEventListener('reset', this.boundResetHandler);
                if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
                    // TODO: This should handle pasting multi line text.
                    // Currently doesn't.
                    this.boundKeyDownHandler = this.onKeyDown_.bind(this);
                    this.input_.addEventListener('keydown', this.boundKeyDownHandler);
                }
                var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
                this.updateClasses_();
                this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
                if (invalid) {
                    this.element_.classList.add(this.CssClasses_.IS_INVALID);
                }
                if (this.input_.hasAttribute('autofocus')) {
                    this.element_.focus();
                    this.checkFocus();
                }
            }
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialTextfield,
        classAsString: 'MaterialTextfield',
        cssClass: 'mdl-js-textfield',
        widget: true
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Tooltip MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialTooltip = function MaterialTooltip(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialTooltip'] = MaterialTooltip;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialTooltip.prototype.Constant_ = {};
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialTooltip.prototype.CssClasses_ = {
        IS_ACTIVE: 'is-active',
        BOTTOM: 'mdl-tooltip--bottom',
        LEFT: 'mdl-tooltip--left',
        RIGHT: 'mdl-tooltip--right',
        TOP: 'mdl-tooltip--top'
    };
    /**
       * Handle mouseenter for tooltip.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialTooltip.prototype.handleMouseEnter_ = function (event) {
        var props = event.target.getBoundingClientRect();
        var left = props.left + props.width / 2;
        var top = props.top + props.height / 2;
        var marginLeft = -1 * (this.element_.offsetWidth / 2);
        var marginTop = -1 * (this.element_.offsetHeight / 2);
        if (this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT)) {
            left = props.width / 2;
            if (top + marginTop < 0) {
                this.element_.style.top = '0';
                this.element_.style.marginTop = '0';
            } else {
                this.element_.style.top = top + 'px';
                this.element_.style.marginTop = marginTop + 'px';
            }
        } else {
            if (left + marginLeft < 0) {
                this.element_.style.left = '0';
                this.element_.style.marginLeft = '0';
            } else {
                this.element_.style.left = left + 'px';
                this.element_.style.marginLeft = marginLeft + 'px';
            }
        }
        if (this.element_.classList.contains(this.CssClasses_.TOP)) {
            this.element_.style.top = props.top - this.element_.offsetHeight - 10 + 'px';
        } else if (this.element_.classList.contains(this.CssClasses_.RIGHT)) {
            this.element_.style.left = props.left + props.width + 10 + 'px';
        } else if (this.element_.classList.contains(this.CssClasses_.LEFT)) {
            this.element_.style.left = props.left - this.element_.offsetWidth - 10 + 'px';
        } else {
            this.element_.style.top = props.top + props.height + 10 + 'px';
        }
        this.element_.classList.add(this.CssClasses_.IS_ACTIVE);
    };
    /**
       * Hide tooltip on mouseleave or scroll
       *
       * @private
       */
    MaterialTooltip.prototype.hideTooltip_ = function () {
        this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);
    };
    /**
       * Initialize element.
       */
    MaterialTooltip.prototype.init = function () {
        if (this.element_) {
            var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');
            if (forElId) {
                this.forElement_ = document.getElementById(forElId);
            }
            if (this.forElement_) {
                // It's left here because it prevents accidental text selection on Android
                if (!this.forElement_.hasAttribute('tabindex')) {
                    this.forElement_.setAttribute('tabindex', '0');
                }
                this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
                this.boundMouseLeaveAndScrollHandler = this.hideTooltip_.bind(this);
                this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler, false);
                this.forElement_.addEventListener('touchend', this.boundMouseEnterHandler, false);
                this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveAndScrollHandler, false);
                window.addEventListener('scroll', this.boundMouseLeaveAndScrollHandler, true);
                window.addEventListener('touchstart', this.boundMouseLeaveAndScrollHandler);
            }
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialTooltip,
        classAsString: 'MaterialTooltip',
        cssClass: 'mdl-tooltip'
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Layout MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialLayout = function MaterialLayout(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialLayout'] = MaterialLayout;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialLayout.prototype.Constant_ = {
        MAX_WIDTH: '(max-width: 1024px)',
        TAB_SCROLL_PIXELS: 100,
        RESIZE_TIMEOUT: 100,
        MENU_ICON: '&#xE5D2;',
        CHEVRON_LEFT: 'chevron_left',
        CHEVRON_RIGHT: 'chevron_right'
    };
    /**
       * Keycodes, for code readability.
       *
       * @enum {number}
       * @private
       */
    MaterialLayout.prototype.Keycodes_ = {
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32
    };
    /**
       * Modes.
       *
       * @enum {number}
       * @private
       */
    MaterialLayout.prototype.Mode_ = {
        STANDARD: 0,
        SEAMED: 1,
        WATERFALL: 2,
        SCROLL: 3
    };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialLayout.prototype.CssClasses_ = {
        CONTAINER: 'mdl-layout__container',
        HEADER: 'mdl-layout__header',
        DRAWER: 'mdl-layout__drawer',
        CONTENT: 'mdl-layout__content',
        DRAWER_BTN: 'mdl-layout__drawer-button',
        ICON: 'material-icons',
        JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
        RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
        RIPPLE: 'mdl-ripple',
        RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
        HEADER_SEAMED: 'mdl-layout__header--seamed',
        HEADER_WATERFALL: 'mdl-layout__header--waterfall',
        HEADER_SCROLL: 'mdl-layout__header--scroll',
        FIXED_HEADER: 'mdl-layout--fixed-header',
        OBFUSCATOR: 'mdl-layout__obfuscator',
        TAB_BAR: 'mdl-layout__tab-bar',
        TAB_CONTAINER: 'mdl-layout__tab-bar-container',
        TAB: 'mdl-layout__tab',
        TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',
        TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',
        TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',
        TAB_MANUAL_SWITCH: 'mdl-layout__tab-manual-switch',
        PANEL: 'mdl-layout__tab-panel',
        HAS_DRAWER: 'has-drawer',
        HAS_TABS: 'has-tabs',
        HAS_SCROLLING_HEADER: 'has-scrolling-header',
        CASTING_SHADOW: 'is-casting-shadow',
        IS_COMPACT: 'is-compact',
        IS_SMALL_SCREEN: 'is-small-screen',
        IS_DRAWER_OPEN: 'is-visible',
        IS_ACTIVE: 'is-active',
        IS_UPGRADED: 'is-upgraded',
        IS_ANIMATING: 'is-animating',
        ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',
        ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'
    };
    /**
       * Handles scrolling on the content.
       *
       * @private
       */
    MaterialLayout.prototype.contentScrollHandler_ = function () {
        if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
            return;
        }
        var headerVisible = !this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);
        if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
            this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
            this.header_.classList.add(this.CssClasses_.IS_COMPACT);
            if (headerVisible) {
                this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
            }
        } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
            this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
            this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
            if (headerVisible) {
                this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
            }
        }
    };
    /**
       * Handles a keyboard event on the drawer.
       *
       * @param {Event} evt The event that fired.
       * @private
       */
    MaterialLayout.prototype.keyboardEventHandler_ = function (evt) {
        // Only react when the drawer is open.
        if (evt.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
            this.toggleDrawer();
        }
    };
    /**
       * Handles changes in screen size.
       *
       * @private
       */
    MaterialLayout.prototype.screenSizeHandler_ = function () {
        if (this.screenSizeMediaQuery_.matches) {
            this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN);
            // Collapse drawer (if any) when moving to a large screen size.
            if (this.drawer_) {
                this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
                this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
            }
        }
    };
    /**
       * Handles events of drawer button.
       *
       * @param {Event} evt The event that fired.
       * @private
       */
    MaterialLayout.prototype.drawerToggleHandler_ = function (evt) {
        if (evt && evt.type === 'keydown') {
            if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
                // prevent scrolling in drawer nav
                evt.preventDefault();
            } else {
                // prevent other keys
                return;
            }
        }
        this.toggleDrawer();
    };
    /**
       * Handles (un)setting the `is-animating` class
       *
       * @private
       */
    MaterialLayout.prototype.headerTransitionEndHandler_ = function () {
        this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);
    };
    /**
       * Handles expanding the header on click
       *
       * @private
       */
    MaterialLayout.prototype.headerClickHandler_ = function () {
        if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
            this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
            this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
        }
    };
    /**
       * Reset tab state, dropping active classes
       *
       * @private
       */
    MaterialLayout.prototype.resetTabState_ = function (tabBar) {
        for (var k = 0; k < tabBar.length; k++) {
            tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);
        }
    };
    /**
       * Reset panel state, droping active classes
       *
       * @private
       */
    MaterialLayout.prototype.resetPanelState_ = function (panels) {
        for (var j = 0; j < panels.length; j++) {
            panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);
        }
    };
    /**
      * Toggle drawer state
      *
      * @public
      */
    MaterialLayout.prototype.toggleDrawer = function () {
        var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
        this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
        this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
        // Set accessibility properties.
        if (this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
            this.drawer_.setAttribute('aria-hidden', 'false');
            drawerButton.setAttribute('aria-expanded', 'true');
        } else {
            this.drawer_.setAttribute('aria-hidden', 'true');
            drawerButton.setAttribute('aria-expanded', 'false');
        }
    };
    MaterialLayout.prototype['toggleDrawer'] = MaterialLayout.prototype.toggleDrawer;
    /**
       * Initialize element.
       */
    MaterialLayout.prototype.init = function () {
        if (this.element_) {
            var container = document.createElement('div');
            container.classList.add(this.CssClasses_.CONTAINER);
            var focusedElement = this.element_.querySelector(':focus');
            this.element_.parentElement.insertBefore(container, this.element_);
            this.element_.parentElement.removeChild(this.element_);
            container.appendChild(this.element_);
            if (focusedElement) {
                focusedElement.focus();
            }
            var directChildren = this.element_.childNodes;
            var numChildren = directChildren.length;
            for (var c = 0; c < numChildren; c++) {
                var child = directChildren[c];
                if (child.classList && child.classList.contains(this.CssClasses_.HEADER)) {
                    this.header_ = child;
                }
                if (child.classList && child.classList.contains(this.CssClasses_.DRAWER)) {
                    this.drawer_ = child;
                }
                if (child.classList && child.classList.contains(this.CssClasses_.CONTENT)) {
                    this.content_ = child;
                }
            }
            window.addEventListener('pageshow', function (e) {
                if (e.persisted) {
                    // when page is loaded from back/forward cache
                    // trigger repaint to let layout scroll in safari
                    this.element_.style.overflowY = 'hidden';
                    requestAnimationFrame(function () {
                        this.element_.style.overflowY = '';
                    }.bind(this));
                }
            }.bind(this), false);
            if (this.header_) {
                this.tabBar_ = this.header_.querySelector('.' + this.CssClasses_.TAB_BAR);
            }
            var mode = this.Mode_.STANDARD;
            if (this.header_) {
                if (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)) {
                    mode = this.Mode_.SEAMED;
                } else if (this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)) {
                    mode = this.Mode_.WATERFALL;
                    this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_.bind(this));
                    this.header_.addEventListener('click', this.headerClickHandler_.bind(this));
                } else if (this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)) {
                    mode = this.Mode_.SCROLL;
                    container.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);
                }
                if (mode === this.Mode_.STANDARD) {
                    this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
                    if (this.tabBar_) {
                        this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);
                    }
                } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {
                    this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
                    if (this.tabBar_) {
                        this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);
                    }
                } else if (mode === this.Mode_.WATERFALL) {
                    // Add and remove shadows depending on scroll position.
                    // Also add/remove auxiliary class for styling of the compact version of
                    // the header.
                    this.content_.addEventListener('scroll', this.contentScrollHandler_.bind(this));
                    this.contentScrollHandler_();
                }
            }
            // Add drawer toggling button to our layout, if we have an openable drawer.
            if (this.drawer_) {
                var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
                if (!drawerButton) {
                    drawerButton = document.createElement('div');
                    drawerButton.setAttribute('aria-expanded', 'false');
                    drawerButton.setAttribute('role', 'button');
                    drawerButton.setAttribute('tabindex', '0');
                    drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);
                    var drawerButtonIcon = document.createElement('i');
                    drawerButtonIcon.classList.add(this.CssClasses_.ICON);
                    drawerButtonIcon.innerHTML = this.Constant_.MENU_ICON;
                    drawerButton.appendChild(drawerButtonIcon);
                }
                if (this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)) {
                    //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.
                    drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);
                } else if (this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)) {
                    //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.
                    drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
                }
                drawerButton.addEventListener('click', this.drawerToggleHandler_.bind(this));
                drawerButton.addEventListener('keydown', this.drawerToggleHandler_.bind(this));
                // Add a class if the layout has a drawer, for altering the left padding.
                // Adds the HAS_DRAWER to the elements since this.header_ may or may
                // not be present.
                this.element_.classList.add(this.CssClasses_.HAS_DRAWER);
                // If we have a fixed header, add the button to the header rather than
                // the layout.
                if (this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)) {
                    this.header_.insertBefore(drawerButton, this.header_.firstChild);
                } else {
                    this.element_.insertBefore(drawerButton, this.content_);
                }
                var obfuscator = document.createElement('div');
                obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);
                this.element_.appendChild(obfuscator);
                obfuscator.addEventListener('click', this.drawerToggleHandler_.bind(this));
                this.obfuscator_ = obfuscator;
                this.drawer_.addEventListener('keydown', this.keyboardEventHandler_.bind(this));
                this.drawer_.setAttribute('aria-hidden', 'true');
            }
            // Keep an eye on screen size, and add/remove auxiliary class for styling
            // of small screens.
            this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);
            this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));
            this.screenSizeHandler_();
            // Initialize tabs, if any.
            if (this.header_ && this.tabBar_) {
                this.element_.classList.add(this.CssClasses_.HAS_TABS);
                var tabContainer = document.createElement('div');
                tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);
                this.header_.insertBefore(tabContainer, this.tabBar_);
                this.header_.removeChild(this.tabBar_);
                var leftButton = document.createElement('div');
                leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
                leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
                var leftButtonIcon = document.createElement('i');
                leftButtonIcon.classList.add(this.CssClasses_.ICON);
                leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;
                leftButton.appendChild(leftButtonIcon);
                leftButton.addEventListener('click', function () {
                    this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;
                }.bind(this));
                var rightButton = document.createElement('div');
                rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
                rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
                var rightButtonIcon = document.createElement('i');
                rightButtonIcon.classList.add(this.CssClasses_.ICON);
                rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;
                rightButton.appendChild(rightButtonIcon);
                rightButton.addEventListener('click', function () {
                    this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;
                }.bind(this));
                tabContainer.appendChild(leftButton);
                tabContainer.appendChild(this.tabBar_);
                tabContainer.appendChild(rightButton);
                // Add and remove tab buttons depending on scroll position and total
                // window size.
                var tabUpdateHandler = function () {
                    if (this.tabBar_.scrollLeft > 0) {
                        leftButton.classList.add(this.CssClasses_.IS_ACTIVE);
                    } else {
                        leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);
                    }
                    if (this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth) {
                        rightButton.classList.add(this.CssClasses_.IS_ACTIVE);
                    } else {
                        rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);
                    }
                }.bind(this);
                this.tabBar_.addEventListener('scroll', tabUpdateHandler);
                tabUpdateHandler();
                // Update tabs when the window resizes.
                var windowResizeHandler = function () {
                    // Use timeouts to make sure it doesn't happen too often.
                    if (this.resizeTimeoutId_) {
                        clearTimeout(this.resizeTimeoutId_);
                    }
                    this.resizeTimeoutId_ = setTimeout(function () {
                        tabUpdateHandler();
                        this.resizeTimeoutId_ = null;
                    }.bind(this), this.Constant_.RESIZE_TIMEOUT);
                }.bind(this);
                window.addEventListener('resize', windowResizeHandler);
                if (this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
                    this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                }
                // Select element tabs, document panels
                var tabs = this.tabBar_.querySelectorAll('.' + this.CssClasses_.TAB);
                var panels = this.content_.querySelectorAll('.' + this.CssClasses_.PANEL);
                // Create new tabs for each tab element
                for (var i = 0; i < tabs.length; i++) {
                    new MaterialLayoutTab(tabs[i], tabs, panels, this);
                }
            }
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        }
    };
    /**
       * Constructor for an individual tab.
       *
       * @constructor
       * @param {HTMLElement} tab The HTML element for the tab.
       * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.
       * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.
       * @param {MaterialLayout} layout The MaterialLayout object that owns the tab.
       */
    function MaterialLayoutTab(tab, tabs, panels, layout) {
        /**
         * Auxiliary method to programmatically select a tab in the UI.
         */
        function selectTab() {
            var href = tab.href.split('#')[1];
            var panel = layout.content_.querySelector('#' + href);
            layout.resetTabState_(tabs);
            layout.resetPanelState_(panels);
            tab.classList.add(layout.CssClasses_.IS_ACTIVE);
            panel.classList.add(layout.CssClasses_.IS_ACTIVE);
        }
        if (layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)) {
            var rippleContainer = document.createElement('span');
            rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);
            rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);
            var ripple = document.createElement('span');
            ripple.classList.add(layout.CssClasses_.RIPPLE);
            rippleContainer.appendChild(ripple);
            tab.appendChild(rippleContainer);
        }
        if (!layout.tabBar_.classList.contains(layout.CssClasses_.TAB_MANUAL_SWITCH)) {
            tab.addEventListener('click', function (e) {
                if (tab.getAttribute('href').charAt(0) === '#') {
                    e.preventDefault();
                    selectTab();
                }
            });
        }
        tab.show = selectTab;
    }
    window['MaterialLayoutTab'] = MaterialLayoutTab;
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialLayout,
        classAsString: 'MaterialLayout',
        cssClass: 'mdl-js-layout'
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Data Table Card MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {Element} element The element that will be upgraded.
       */
    var MaterialDataTable = function MaterialDataTable(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialDataTable'] = MaterialDataTable;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialDataTable.prototype.Constant_ = {};
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialDataTable.prototype.CssClasses_ = {
        DATA_TABLE: 'mdl-data-table',
        SELECTABLE: 'mdl-data-table--selectable',
        SELECT_ELEMENT: 'mdl-data-table__select',
        IS_SELECTED: 'is-selected',
        IS_UPGRADED: 'is-upgraded'
    };
    /**
       * Generates and returns a function that toggles the selection state of a
       * single row (or multiple rows).
       *
       * @param {Element} checkbox Checkbox that toggles the selection state.
       * @param {Element} row Row to toggle when checkbox changes.
       * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
       * @private
       */
    MaterialDataTable.prototype.selectRow_ = function (checkbox, row, opt_rows) {
        if (row) {
            return function () {
                if (checkbox.checked) {
                    row.classList.add(this.CssClasses_.IS_SELECTED);
                } else {
                    row.classList.remove(this.CssClasses_.IS_SELECTED);
                }
            }.bind(this);
        }
        if (opt_rows) {
            return function () {
                var i;
                var el;
                if (checkbox.checked) {
                    for (i = 0; i < opt_rows.length; i++) {
                        el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
                        el['MaterialCheckbox'].check();
                        opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);
                    }
                } else {
                    for (i = 0; i < opt_rows.length; i++) {
                        el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
                        el['MaterialCheckbox'].uncheck();
                        opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);
                    }
                }
            }.bind(this);
        }
    };
    /**
       * Creates a checkbox for a single or or multiple rows and hooks up the
       * event handling.
       *
       * @param {Element} row Row to toggle when checkbox changes.
       * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
       * @private
       */
    MaterialDataTable.prototype.createCheckbox_ = function (row, opt_rows) {
        var label = document.createElement('label');
        var labelClasses = ['mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect', this.CssClasses_.SELECT_ELEMENT];
        label.className = labelClasses.join(' ');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('mdl-checkbox__input');
        if (row) {
            checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);
            checkbox.addEventListener('change', this.selectRow_(checkbox, row));
        } else if (opt_rows) {
            checkbox.addEventListener('change', this.selectRow_(checkbox, null, opt_rows));
        }
        label.appendChild(checkbox);
        componentHandler.upgradeElement(label, 'MaterialCheckbox');
        return label;
    };
    /**
       * Initialize element.
       */
    MaterialDataTable.prototype.init = function () {
        if (this.element_) {
            var firstHeader = this.element_.querySelector('th');
            var bodyRows = Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));
            var footRows = Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));
            var rows = bodyRows.concat(footRows);
            if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
                var th = document.createElement('th');
                var headerCheckbox = this.createCheckbox_(null, rows);
                th.appendChild(headerCheckbox);
                firstHeader.parentElement.insertBefore(th, firstHeader);
                for (var i = 0; i < rows.length; i++) {
                    var firstCell = rows[i].querySelector('td');
                    if (firstCell) {
                        var td = document.createElement('td');
                        if (rows[i].parentNode.nodeName.toUpperCase() === 'TBODY') {
                            var rowCheckbox = this.createCheckbox_(rows[i]);
                            td.appendChild(rowCheckbox);
                        }
                        rows[i].insertBefore(td, firstCell);
                    }
                }
                this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
            }
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialDataTable,
        classAsString: 'MaterialDataTable',
        cssClass: 'mdl-js-data-table'
    });
    /**
     * @license
     * Copyright 2015 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
       * Class constructor for Ripple MDL component.
       * Implements MDL component design pattern defined at:
       * https://github.com/jasonmayes/mdl-component-design-pattern
       *
       * @constructor
       * @param {HTMLElement} element The element that will be upgraded.
       */
    var MaterialRipple = function MaterialRipple(element) {
        this.element_ = element;
        // Initialize instance.
        this.init();
    };
    window['MaterialRipple'] = MaterialRipple;
    /**
       * Store constants in one place so they can be updated easily.
       *
       * @enum {string | number}
       * @private
       */
    MaterialRipple.prototype.Constant_ = {
        INITIAL_SCALE: 'scale(0.0001, 0.0001)',
        INITIAL_SIZE: '1px',
        INITIAL_OPACITY: '0.4',
        FINAL_OPACITY: '0',
        FINAL_SCALE: ''
    };
    /**
       * Store strings for class names defined by this component that are used in
       * JavaScript. This allows us to simply change it in one place should we
       * decide to modify at a later date.
       *
       * @enum {string}
       * @private
       */
    MaterialRipple.prototype.CssClasses_ = {
        RIPPLE_CENTER: 'mdl-ripple--center',
        RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
        RIPPLE: 'mdl-ripple',
        IS_ANIMATING: 'is-animating',
        IS_VISIBLE: 'is-visible'
    };
    /**
       * Handle mouse / finger down on element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialRipple.prototype.downHandler_ = function (event) {
        if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
            var rect = this.element_.getBoundingClientRect();
            this.boundHeight = rect.height;
            this.boundWidth = rect.width;
            this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
            this.rippleElement_.style.width = this.rippleSize_ + 'px';
            this.rippleElement_.style.height = this.rippleSize_ + 'px';
        }
        this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);
        if (event.type === 'mousedown' && this.ignoringMouseDown_) {
            this.ignoringMouseDown_ = false;
        } else {
            if (event.type === 'touchstart') {
                this.ignoringMouseDown_ = true;
            }
            var frameCount = this.getFrameCount();
            if (frameCount > 0) {
                return;
            }
            this.setFrameCount(1);
            var bound = event.currentTarget.getBoundingClientRect();
            var x;
            var y;
            // Check if we are handling a keyboard click.
            if (event.clientX === 0 && event.clientY === 0) {
                x = Math.round(bound.width / 2);
                y = Math.round(bound.height / 2);
            } else {
                var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
                var clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
                x = Math.round(clientX - bound.left);
                y = Math.round(clientY - bound.top);
            }
            this.setRippleXY(x, y);
            this.setRippleStyles(true);
            window.requestAnimationFrame(this.animFrameHandler.bind(this));
        }
    };
    /**
       * Handle mouse / finger up on element.
       *
       * @param {Event} event The event that fired.
       * @private
       */
    MaterialRipple.prototype.upHandler_ = function (event) {
        // Don't fire for the artificial "mouseup" generated by a double-click.
        if (event && event.detail !== 2) {
            // Allow a repaint to occur before removing this class, so the animation
            // shows for tap events, which seem to trigger a mouseup too soon after
            // mousedown.
            window.setTimeout(function () {
                this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
            }.bind(this), 0);
        }
    };
    /**
       * Initialize element.
       */
    MaterialRipple.prototype.init = function () {
        if (this.element_) {
            var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
            if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
                this.rippleElement_ = this.element_.querySelector('.' + this.CssClasses_.RIPPLE);
                this.frameCount_ = 0;
                this.rippleSize_ = 0;
                this.x_ = 0;
                this.y_ = 0;
                // Touch start produces a compat mouse down event, which would cause a
                // second ripples. To avoid that, we use this property to ignore the first
                // mouse down after a touch start.
                this.ignoringMouseDown_ = false;
                this.boundDownHandler = this.downHandler_.bind(this);
                this.element_.addEventListener('mousedown', this.boundDownHandler);
                this.element_.addEventListener('touchstart', this.boundDownHandler);
                this.boundUpHandler = this.upHandler_.bind(this);
                this.element_.addEventListener('mouseup', this.boundUpHandler);
                this.element_.addEventListener('mouseleave', this.boundUpHandler);
                this.element_.addEventListener('touchend', this.boundUpHandler);
                this.element_.addEventListener('blur', this.boundUpHandler);
                /**
                * Getter for frameCount_.
                * @return {number} the frame count.
                */
                this.getFrameCount = function () {
                    return this.frameCount_;
                };
                /**
                * Setter for frameCount_.
                * @param {number} fC the frame count.
                */
                this.setFrameCount = function (fC) {
                    this.frameCount_ = fC;
                };
                /**
                * Getter for rippleElement_.
                * @return {Element} the ripple element.
                */
                this.getRippleElement = function () {
                    return this.rippleElement_;
                };
                /**
                * Sets the ripple X and Y coordinates.
                * @param  {number} newX the new X coordinate
                * @param  {number} newY the new Y coordinate
                */
                this.setRippleXY = function (newX, newY) {
                    this.x_ = newX;
                    this.y_ = newY;
                };
                /**
                * Sets the ripple styles.
                * @param  {boolean} start whether or not this is the start frame.
                */
                this.setRippleStyles = function (start) {
                    if (this.rippleElement_ !== null) {
                        var transformString;
                        var scale;
                        var size;
                        var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
                        if (start) {
                            scale = this.Constant_.INITIAL_SCALE;
                            size = this.Constant_.INITIAL_SIZE;
                        } else {
                            scale = this.Constant_.FINAL_SCALE;
                            size = this.rippleSize_ + 'px';
                            if (recentering) {
                                offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
                            }
                        }
                        transformString = 'translate(-50%, -50%) ' + offset + scale;
                        this.rippleElement_.style.webkitTransform = transformString;
                        this.rippleElement_.style.msTransform = transformString;
                        this.rippleElement_.style.transform = transformString;
                        if (start) {
                            this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);
                        } else {
                            this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);
                        }
                    }
                };
                /**
                * Handles an animation frame.
                */
                this.animFrameHandler = function () {
                    if (this.frameCount_-- > 0) {
                        window.requestAnimationFrame(this.animFrameHandler.bind(this));
                    } else {
                        this.setRippleStyles(false);
                    }
                };
            }
        }
    };
    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialRipple,
        classAsString: 'MaterialRipple',
        cssClass: 'mdl-js-ripple-effect',
        widget: false
    });
})();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialize = initialize;

var _button = __webpack_require__(24);

var _dialogs = __webpack_require__(28);

var _formFields = __webpack_require__(29);

var _events = __webpack_require__(44);

function initialize(root) {
    console.log('Initializing');
    (0, _button.initButtons)(root);
    (0, _events.initEvents)(root);
    (0, _dialogs.initDialogs)(root);
    (0, _formFields.initTextFields)(root);
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VDialog = exports.VDialog = function () {
    function VDialog(dialogId, params, event) {
        _classCallCheck(this, VDialog);

        this.dialogId = dialogId;
        this.params = params;
        this.event = event;
    }

    _createClass(VDialog, [{
        key: 'call',
        value: function call() {
            var dialog = document.querySelector('#' + this.dialogId);
            if (!dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }

            dialog.showModal();
            var promiseObj = new Promise(function (resolve) {
                resolve(true);
            });
            return promiseObj;
        }
    }]);

    return VDialog;
}();

/***/ })
/******/ ]);