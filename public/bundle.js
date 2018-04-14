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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
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
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize() /* ...args */{}
  // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.


  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
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
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
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
}

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* unused harmony export RippleCapableSurface */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* unused harmony reexport util */
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
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class MDCRipple extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, { isUnbounded = undefined } = {}) {
    const ripple = new MDCRipple(root);
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
  static createAdapter(instance) {
    const MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* getMatchesProperty */](HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => __WEBPACK_IMPORTED_MODULE_3__util__["d" /* supportsCssVariables */](window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: className => instance.root_.classList.add(className),
      removeClass: className => instance.root_.classList.remove(className),
      containsEventTarget: target => instance.root_.contains(target),
      registerInteractionHandler: (evtType, handler) => instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      deregisterInteractionHandler: (evtType, handler) => instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      registerResizeHandler: handler => window.addEventListener('resize', handler),
      deregisterResizeHandler: handler => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded_();
  }

  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   * @private
   */
  setUnbounded_() {
    this.foundation_.setUnbounded(this.unbounded_);
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @return {!MDCRippleFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
class RippleCapableSurface {}

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



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMatchesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNormalizedEventCoords; });
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
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj, forceRefresh = false) {
  let supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
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
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(p => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const { x, y } = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
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



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(43);
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





/**
 * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
 * @final
 */
class MDCTextFieldHelperTextFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /**
   * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldHelperTextAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCTextFieldHelperTextAdapter} */{
        addClass: () => {},
        removeClass: () => {},
        hasClass: () => {},
        setAttr: () => {},
        removeAttr: () => {},
        setContent: () => {}
      }
    );
  }

  /**
   * @param {!MDCTextFieldHelperTextAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter));
  }

  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */
  setContent(content) {
    this.adapter_.setContent(content);
  }

  /** @param {boolean} isPersistent Sets the persistency of the helper text. */
  setPersistent(isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
    }
  }

  /**
   * @param {boolean} isValidation True to make the helper text act as an
   *   error validation message.
   */
  setValidation(isValidation) {
    if (isValidation) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
    }
  }

  /** Makes the helper text visible to the screen reader. */
  showToScreenReader() {
    this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN);
  }

  /**
   * Sets the validity of the helper text based on the input validity.
   * @param {boolean} inputIsValid
   */
  setValidity(inputIsValid) {
    const helperTextIsPersistent = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
    const helperTextIsValidationMsg = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
    const validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  }

  /**
   * Hides the help text from screen readers.
   * @private
   */
  hide_() {
    this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN, 'true');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTextFieldHelperTextFoundation);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(44);
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





/**
 * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
 * @final
 */
class MDCTextFieldIconFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */];
  }

  /**
   * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldIconAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCTextFieldIconAdapter} */{
        setAttr: () => {},
        registerInteractionHandler: () => {},
        deregisterInteractionHandler: () => {},
        notifyIconAction: () => {}
      }
    );
  }

  /**
   * @param {!MDCTextFieldIconAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCTextFieldIconFoundation.defaultAdapter, adapter));

    /** @private {function(!Event): undefined} */
    this.interactionHandler_ = evt => this.handleInteraction(evt);
  }

  init() {
    ['click', 'keydown'].forEach(evtType => {
      this.adapter_.registerInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  destroy() {
    ['click', 'keydown'].forEach(evtType => {
      this.adapter_.deregisterInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  /**
   * Sets the content of the helper text field.
   * @param {boolean} disabled
   */
  setDisabled(disabled) {
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
  handleInteraction(evt) {
    if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
      this.adapter_.notifyIconAction();
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTextFieldIconFoundation);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_fields__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lists__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_toggles__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select__ = __webpack_require__(74);









function initialize() {
    console.log('Initializing');
    Object(__WEBPACK_IMPORTED_MODULE_0__button__["a" /* initButtons */])();
    Object(__WEBPACK_IMPORTED_MODULE_3__events__["a" /* initEvents */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__dialogs__["a" /* initDialogs */])();
    Object(__WEBPACK_IMPORTED_MODULE_2__text_fields__["a" /* initTextFields */])();
    Object(__WEBPACK_IMPORTED_MODULE_4__lists__["a" /* initLists */])();
    Object(__WEBPACK_IMPORTED_MODULE_5__icon_toggles__["a" /* initIconToggles */])();
    Object(__WEBPACK_IMPORTED_MODULE_6__menus__["a" /* initMenus */])();
    Object(__WEBPACK_IMPORTED_MODULE_7__select__["a" /* initSelects */])();
    // componentHandler.upgradeAllRegistered();
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCRippleAdapter {
  /** @return {boolean} */
  browserSupportsCssVars() {}

  /** @return {boolean} */
  isUnbounded() {}

  /** @return {boolean} */
  isSurfaceActive() {}

  /** @return {boolean} */
  isSurfaceDisabled() {}

  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /** @param {!EventTarget} target */
  containsEventTarget(target) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {!Function} handler
   */
  registerResizeHandler(handler) {}

  /**
   * @param {!Function} handler
   */
  deregisterResizeHandler(handler) {}

  /**
   * @param {string} varName
   * @param {?number|string} value
   */
  updateCssVariable(varName, value) {}

  /** @return {!ClientRect} */
  computeBoundingRect() {}

  /** @return {{x: number, y: number}} */
  getWindowPageOffset() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCRippleAdapter);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
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
const strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  BOTTOM_LINE_SELECTOR: '.mdc-line-ripple'
};

/** @enum {string} */
const cssClasses = {
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
const numbers = {
  LABEL_SCALE: 0.75,
  DENSE_LABEL_SCALE: 0.923
};



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCTextFieldAdapter */
/* unused harmony export NativeInputType */
/* unused harmony export FoundationMapType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_text_foundation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_foundation__ = __webpack_require__(5);
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

/* eslint-disable no-unused-vars */



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
let NativeInputType;

/**
 * @typedef {{
 *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
 *   icon: (!MDCTextFieldIconFoundation|undefined),
 * }}
 */
let FoundationMapType;

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
class MDCTextFieldAdapter {
  /**
   * Adds a class to the root Element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the root Element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns true if the root element contains the given class name.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerTextFieldInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterTextFieldInteractionHandler(type, handler) {}

  /**
   * Registers an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerInputInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterInputInteractionHandler(evtType, handler) {}

  /**
   * Registers a validation attribute change listener on the input element.
   * @param {function(!Array): undefined} handler
   * @return {!MutationObserver}
   */
  registerValidationAttributeChangeHandler(handler) {}

  /**
   * Disconnects a validation attribute observer on the input element.
   * @param {!MutationObserver} observer
   */
  deregisterValidationAttributeChangeHandler(observer) {}

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
  getNativeInput() {}

  /**
   * Returns true if the textfield is focused.
   * We achieve this via `document.activeElement === this.root_`.
   * @return {boolean}
   */
  isFocused() {}

  /**
   * Returns true if the direction of the root element is set to RTL.
   * @return {boolean}
   */
  isRtl() {}

  /**
   * Activates the line ripple.
   */
  activateLineRipple() {}

  /**
   * Deactivates the line ripple.
   */
  deactivateLineRipple() {}

  /**
   * Sets the transform origin of the line ripple.
   * @param {number} normalizedX
   */
  setLineRippleTransformOrigin(normalizedX) {}

  /**
   * Only implement if label exists.
   * Shakes label if shouldShake is true.
   * @param {boolean} shouldShake
   */
  shakeLabel(shouldShake) {}

  /**
   * Only implement if label exists.
   * Floats the label above the input element if shouldFloat is true.
   * @param {boolean} shouldFloat
   */
  floatLabel(shouldFloat) {}

  /**
   * Returns true if label element exists, false if it doesn't.
   * @return {boolean}
   */
  hasLabel() {}

  /**
   * Only implement if label exists.
   * Returns width of label in pixels.
   * @return {number}
   */
  getLabelWidth() {}

  /**
   * Returns true if outline element exists, false if it doesn't.
   * @return {boolean}
   */
  hasOutline() {}

  /**
   * Only implement if outline element exists.
   * Updates SVG Path and outline element based on the
   * label element width and RTL context.
   * @param {number} labelWidth
   * @param {boolean=} isRtl
   */
  notchOutline(labelWidth, isRtl) {}

  /**
   * Only implement if outline element exists.
   * Closes notch in outline element.
   */
  closeOutline() {}
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCTextFieldHelperTextAdapter {
  /**
   * Adds a class to the helper text element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the helper text element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns whether or not the helper text element contains the given class.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Sets an attribute with a given value on the helper text element.
   * @param {string} attr
   * @param {string} value
   */
  setAttr(attr, value) {}

  /**
   * Removes an attribute from the helper text element.
   * @param {string} attr
   */
  removeAttr(attr) {}

  /**
   * Sets the text content for the helper text element.
   * @param {string} content
   */
  setContent(content) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTextFieldHelperTextAdapter);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCTextFieldIconAdapter {
  /**
   * Sets an attribute on the icon element.
   * @param {string} attr
   * @param {string} value
   */
  setAttr(attr, value) {}

  /**
   * Registers an event listener on the icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
   */
  notifyIconAction() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTextFieldIconAdapter);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(46);
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





/**
 * @extends {MDCFoundation<!MDCLineRippleAdapter>}
 * @final
 */
class MDCLineRippleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCLineRippleAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCLineRippleAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCLineRippleAdapter} */{
        addClass: () => {},
        removeClass: () => {},
        hasClass: () => {},
        setStyle: () => {},
        registerEventHandler: () => {},
        deregisterEventHandler: () => {}
      }
    );
  }

  /**
   * @param {!MDCLineRippleAdapter=} adapter
   */
  constructor(adapter = /** @type {!MDCLineRippleAdapter} */{}) {
    super(Object.assign(MDCLineRippleFoundation.defaultAdapter, adapter));

    /** @private {function(!Event): undefined} */
    this.transitionEndHandler_ = evt => this.handleTransitionEnd(evt);
  }

  init() {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  }

  /**
   * Activates the line ripple
   */
  activate() {
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
  }

  /**
   * Sets the center of the ripple animation to the given X coordinate.
   * @param {!number} xCoordinate
   */
  setRippleCenter(xCoordinate) {
    this.adapter_.setStyle('transform-origin', `${xCoordinate}px center`);
  }

  /**
   * Deactivates the line ripple
   */
  deactivate() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
  }

  /**
   * Handles a transition end event
   * @param {!Event} evt
   */
  handleTransitionEnd(evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    const isDeactivating = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCLineRippleFoundation);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCLineRippleAdapter {
  /**
   * Adds a class to the line ripple element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the line ripple element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Sets the style property with propertyName to value on the root element.
   * @param {string} propertyName
   * @param {string} value
   */
  setStyle(propertyName, value) {}

  /**
   * Registers an event listener on the line ripple element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerEventHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the line ripple element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterEventHandler(evtType, handler) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCLineRippleAdapter);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(47);
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
 * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
 * @final
 */
class MDCFloatingLabelFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCFloatingLabelAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCFloatingLabelAdapter} */{
        addClass: () => {},
        removeClass: () => {},
        getWidth: () => {},
        registerInteractionHandler: () => {},
        deregisterInteractionHandler: () => {}
      }
    );
  }

  /**
   * @param {!MDCFloatingLabelAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCFloatingLabelFoundation.defaultAdapter, adapter));

    /** @private {function(!Event): undefined} */
    this.shakeAnimationEndHandler_ = () => this.handleShakeAnimationEnd_();
  }

  init() {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  }

  /**
   * Returns the width of the label element.
   * @return {number}
   */
  getWidth() {
    return this.adapter_.getWidth();
  }

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake adds shake class if true,
   * otherwise removes shake class.
   */
  shake(shouldShake) {
    const { LABEL_SHAKE } = MDCFloatingLabelFoundation.cssClasses;
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
  float(shouldFloat) {
    const { LABEL_FLOAT_ABOVE, LABEL_SHAKE } = MDCFloatingLabelFoundation.cssClasses;
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
  handleShakeAnimationEnd_() {
    const { LABEL_SHAKE } = MDCFloatingLabelFoundation.cssClasses;
    this.adapter_.removeClass(LABEL_SHAKE);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFloatingLabelFoundation);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCFloatingLabelAdapter {
  /**
   * Adds a class to the label element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the label element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns the width of the label element.
   * @return {number}
   */
  getWidth() {}

  /**
   * Registers an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterInteractionHandler(evtType, handler) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCFloatingLabelAdapter);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(19);
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





/**
 * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
 * @final
 */
class MDCNotchedOutlineFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCNotchedOutlineAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCNotchedOutlineAdapter} */{
        getWidth: () => {},
        getHeight: () => {},
        addClass: () => {},
        removeClass: () => {},
        setOutlinePathAttr: () => {},
        getIdleOutlineStyleValue: () => {}
      }
    );
  }

  /**
   * @param {!MDCNotchedOutlineAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCNotchedOutlineFoundation.defaultAdapter, adapter));
  }

  /**
   * Adds the outline notched selector and updates the notch width
   * calculated based off of notchWidth and isRtl.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   */
  notch(notchWidth, isRtl = false) {
    const { OUTLINE_NOTCHED } = MDCNotchedOutlineFoundation.cssClasses;
    this.adapter_.addClass(OUTLINE_NOTCHED);
    this.updateSvgPath_(notchWidth, isRtl);
  }

  /**
   * Removes notched outline selector to close the notch in the outline.
   */
  closeNotch() {
    const { OUTLINE_NOTCHED } = MDCNotchedOutlineFoundation.cssClasses;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
  }

  /**
   * Updates the SVG path of the focus outline element based on the notchWidth
   * and the RTL context.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   * @private
   */
  updateSvgPath_(notchWidth, isRtl) {
    // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
    const radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') || this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
    const radius = parseFloat(radiusStyleValue);
    const width = this.adapter_.getWidth();
    const height = this.adapter_.getHeight();
    const cornerWidth = radius + 1.2;
    const leadingStrokeLength = Math.abs(11 - cornerWidth);
    const paddedNotchWidth = notchWidth + 8;

    // The right, bottom, and left sides of the outline follow the same SVG path.
    const pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (-width + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius + 'v' + (-height + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

    let path;
    if (!isRtl) {
      path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1 + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength) + pathMiddle + 'h' + leadingStrokeLength;
    } else {
      path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1 + 'h' + leadingStrokeLength + pathMiddle + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength);
    }

    this.adapter_.setOutlinePathAttr(path);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCNotchedOutlineFoundation);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCNotchedOutlineAdapter {
  /**
   * Returns the width of the root element.
   * @return {number}
   */
  getWidth() {}

  /**
   * Returns the height of the root element.
   * @return {number}
   */
  getHeight() {}

  /**
   * Adds a class to the root element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the root element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Sets the "d" attribute of the outline element's SVG path.
   * @param {string} value
   */
  setOutlinePathAttr(value) {}

  /**
   * Returns the idle outline element's computed style value of the given css property `propertyName`.
   * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
   * @param {string} propertyName
   * @return {string}
   */
  getIdleOutlineStyleValue(propertyName) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCNotchedOutlineAdapter);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
const strings = {
  PATH_SELECTOR: '.mdc-notched-outline__path',
  IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle'
};

/** @enum {string} */
const cssClasses = {
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched'
};



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This class displays a page level message
class VSnackbar {
    constructor(message, action_text, action_fn) {
        this.message = message;
        this.action_text = action_text;
        this.action_fn = action_fn;
    }

    display() {
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
}
/* unused harmony export VSnackbar */


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(22);

class VBase {
    clearErrors() {
        new __WEBPACK_IMPORTED_MODULE_0__errors__["a" /* VErrors */]().clearErrors();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VBase;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VErrors {
    constructor(event) {
        this.event = event;
    }

    clearErrors() {
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

    stringsToArrays(value) {
        if (Array.isArray(value) || value.constructor === Object) {
            return value;
        }
        return new Array(value);
    }

    normalizeErrors(errors) {
        if (errors && errors.constructor === Object) {
            return Object.keys(errors).reduce((previous, key) => {
                previous[key] = this.stringsToArrays(errors[key]);
                return previous;
            }, {});
        }
        return [];
    }

    // [http_status, content_type, resultText]
    displayErrors(results) {
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
            var errors = this.event.target.closest('form').querySelector('.v-errors');
            if (!errors) {
                errors = document.querySelector('.v-errors');
            }
            this.prependError(null, pageErrors, errors);
        } else if (httpStatus === 0) {
            this.prependError('errors', ["Unable to contact server. Please check that you are online and retry."]);
        } else if (results !== true) {
            this.prependError('errors', ["The server returned an unexpected response! Status:" + httpStatus]);
        }
    }

    // Sets the helper text on the field
    // Returns true if it was able to set the error on the control
    displayInputError(divId, messages) {
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
    prependError(divId, messages, errorsDiv) {
        // create a new div element
        var newDiv = document.createElement("div");
        newDiv.className = 'v-error-message';
        // and give it some content
        var newContent = document.createTextNode(messages.join('<br/>'));
        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        var currentDiv = errorsDiv || document.getElementById(divId);
        if (currentDiv) {
            currentDiv.parentElement.insertBefore(newDiv, currentDiv);
            return true;
        }
        return false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VErrors;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(6);
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
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize() /* ...args */{}
  // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.


  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
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
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
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
}

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCRippleAdapter {
  /** @return {boolean} */
  browserSupportsCssVars() {}

  /** @return {boolean} */
  isUnbounded() {}

  /** @return {boolean} */
  isSurfaceActive() {}

  /** @return {boolean} */
  isSurfaceDisabled() {}

  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /** @param {!EventTarget} target */
  containsEventTarget(target) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {!Function} handler
   */
  registerResizeHandler(handler) {}

  /**
   * @param {!Function} handler
   */
  deregisterResizeHandler(handler) {}

  /**
   * @param {string} varName
   * @param {?number|string} value
   */
  updateCssVariable(varName, value) {}

  /** @return {!ClientRect} */
  computeBoundingRect() {}

  /** @return {{x: number, y: number}} */
  getWindowPageOffset() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCRippleAdapter);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMatchesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNormalizedEventCoords; });
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
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj, forceRefresh = false) {
  let supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
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
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(p => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const { x, y } = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
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



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CornerBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Corner; });
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
const cssClasses = {
  ROOT: 'mdc-menu',
  OPEN: 'mdc-menu--open',
  ANIMATING_OPEN: 'mdc-menu--animating-open',
  ANIMATING_CLOSED: 'mdc-menu--animating-closed',
  SELECTED_LIST_ITEM: 'mdc-list-item--selected'
};

/** @enum {string} */
const strings = {
  ITEMS_SELECTOR: '.mdc-menu__items',
  SELECTED_EVENT: 'MDCMenu:selected',
  CANCEL_EVENT: 'MDCMenu:cancel',
  ARIA_DISABLED_ATTR: 'aria-disabled'
};

/** @enum {number} */
const numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of menu open animation.
  TRANSITION_OPEN_DURATION: 120,
  // Total duration of menu close animation.
  TRANSITION_CLOSE_DURATION: 75,
  // Margin left to the edge of the viewport when menu is at maximum possible height.
  MARGIN_TO_EDGE: 32,
  // Ratio of anchor width to menu width for switching from corner positioning to center positioning.
  ANCHOR_TO_MENU_WIDTH_RATIO: 0.67,
  // Ratio of vertical offset to menu height for switching from corner to mid-way origin positioning.
  OFFSET_TO_MENU_HEIGHT_RATIO: 0.1
};

/**
 * Enum for bits in the {@see Corner) bitmap.
 * @enum {number}
 */
const CornerBit = {
  BOTTOM: 1,
  CENTER: 2,
  RIGHT: 4,
  FLIP_RTL: 8
};

/**
 * Enum for representing an element corner for positioning the menu.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 *
 * @enum {number}
 */
const Corner = {
  TOP_LEFT: 0,
  TOP_RIGHT: CornerBit.RIGHT,
  BOTTOM_LEFT: CornerBit.BOTTOM,
  BOTTOM_RIGHT: CornerBit.BOTTOM | CornerBit.RIGHT,
  TOP_START: CornerBit.FLIP_RTL,
  TOP_END: CornerBit.FLIP_RTL | CornerBit.RIGHT,
  BOTTOM_START: CornerBit.BOTTOM | CornerBit.FLIP_RTL,
  BOTTOM_END: CornerBit.BOTTOM | CornerBit.RIGHT | CornerBit.FLIP_RTL
};



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
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






/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
 * Adapter for MDC Select Bottom Line.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Select label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCSelectBottomLineAdapter {
  /**
   * Adds a class to the bottom line element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the bottom line element.
   * @param {string} className
   */
  removeClass(className) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCSelectBottomLineAdapter);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
 * Adapter for MDC Select Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Select label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCSelectLabelAdapter {
  /**
   * Adds a class to the label element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the label element.
   * @param {string} className
   */
  removeClass(className) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCSelectLabelAdapter);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
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
const cssClasses = {
  BOX: 'mdc-select--box',
  DISABLED: 'mdc-select--disabled',
  ROOT: 'mdc-select',
  IS_CHANGING: 'mdc-select--is-changing'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const numbers = {
  FLOAT_NATIVE_CONTROL_TRANSITION_TIME_MS: 125
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;


const strings = {
  CHANGE_EVENT: 'MDCSelect:change',
  BOTTOM_LINE_SELECTOR: '.mdc-select__bottom-line',
  LABEL_SELECTOR: '.mdc-select__label',
  NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control'
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_initialize__ = __webpack_require__(7);
window.dialogPolyfill = __webpack_require__(34);
window.componentHandler = __webpack_require__(36);



document.addEventListener("DOMContentLoaded", function (event) {
    Object(__WEBPACK_IMPORTED_MODULE_0__components_initialize__["a" /* initialize */])();
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function () {

  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;
  if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
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
      var invalid = function (k, ok) {
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
      var delayModel = function (ev) {
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
    maybeHideModal: function () {
      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) {
        return;
      }
      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function () {
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
    setOpen: function (value) {
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
    backdropClick_: function (e) {
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
    focus_: function () {
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
    updateZIndex: function (dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }
      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function () {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function () {
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
    close: function (opt_returnValue) {
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
    var replacementFormSubmit = function () {
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

  if ("function" === 'function' && 'amd' in __webpack_require__(35)) {
    // AMD support
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dialogPolyfill;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && typeof module['exports'] === 'object') {
    // CommonJS support
    module['exports'] = dialogPolyfill;
  } else {
    // all others
    window['dialogPolyfill'] = dialogPolyfill;
  }
})();

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

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
        upgradeDom: function (optJsClass, optCssClass) {},
        /**
         * Upgrades a specific element rather than all in the DOM.
         *
         * @param {!Element} element The element we wish to upgrade.
         * @param {string=} optJsClass Optional name of the class we want to upgrade
         * the element to.
         */
        upgradeElement: function (element, optJsClass) {},
        /**
         * Upgrades a specific list of elements rather than all in the DOM.
         *
         * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
         * The elements we wish to upgrade.
         */
        upgradeElements: function (elements) {},
        /**
         * Upgrades all registered components found in the current DOM. This is
         * automatically called on window load.
         */
        upgradeAllRegistered: function () {},
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
        registerUpgradedCallback: function (jsClass, callback) {},
        /**
         * Registers a class for future use and attempts to upgrade existing DOM.
         *
         * @param {componentHandler.ComponentConfigPublic} config the registration configuration
         */
        register: function (config) {},
        /**
         * Downgrade either a given node, an array of nodes, or a NodeList.
         *
         * @param {!Node|!Array<!Node>|!NodeList} nodes
         */
        downgradeElements: function (nodes) {}
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
            if (!(typeof element === 'object' && element instanceof Element)) {
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
            var downgradeNode = function (node) {
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initButtons;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_ripple__ = __webpack_require__(2);


function initButtons() {
    console.log('\tButtons');

    var rippleButtons = document.querySelectorAll('.v-js-ripple-button');
    if (rippleButtons) {
        for (var i = 0; i < rippleButtons.length; i++) {
            var button = rippleButtons[i];
            if (!button.mdcComponent) {
                button.mdcComponent = new __WEBPACK_IMPORTED_MODULE_0__material_ripple__["a" /* MDCRipple */](button);
            }
        }
    }
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(3);
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
 * @typedef {!{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
let ActivationStateType;

/**
 * @typedef {!{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
let ListenerInfoType;

/**
 * @typedef {!{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
let ListenersType;

/**
 * @typedef {!{
 *   x: number,
 *   y: number
 * }}
 */
let PointType;

// Activation events registered on the root element of each instance for activation
const ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
const POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
let activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class MDCRippleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */{},
      isUnbounded: () => /* boolean */{},
      isSurfaceActive: () => /* boolean */{},
      isSurfaceDisabled: () => /* boolean */{},
      addClass: () => /* className: string */{},
      removeClass: () => /* className: string */{},
      containsEventTarget: () => /* target: !EventTarget */{},
      registerInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      deregisterInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      registerDocumentInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      deregisterDocumentInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      registerResizeHandler: () => /* handler: EventListener */{},
      deregisterResizeHandler: () => /* handler: EventListener */{},
      updateCssVariable: () => /* varName: string, value: string */{},
      computeBoundingRect: () => /* ClientRect */{},
      getWindowPageOffset: () => /* {x: number, y: number} */{}
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    this.activateHandler_ = e => this.activate_(e);

    /** @private {function(!Event)} */
    this.deactivateHandler_ = e => this.deactivate_(e);

    /** @private {function(?Event=)} */
    this.focusHandler_ = () => requestAnimationFrame(() => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));

    /** @private {function(?Event=)} */
    this.blurHandler_ = () => requestAnimationFrame(() => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {!{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    this.previousActivationEvent_ = null;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */
  isSupported_() {
    return this.adapter_.browserSupportsCssVars();
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationEvent: null,
      isProgrammatic: false
    };
  }

  init() {
    if (!this.isSupported_()) {
      return;
    }
    this.registerRootHandlers_();

    const { ROOT, UNBOUNDED } = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.addClass(ROOT);
      if (this.adapter_.isUnbounded()) {
        this.adapter_.addClass(UNBOUNDED);
      }
      this.layoutInternal_();
    });
  }

  destroy() {
    if (!this.isSupported_()) {
      return;
    }

    if (this.activationTimer_) {
      clearTimeout(this.activationTimer_);
      this.activationTimer_ = 0;
      const { FG_ACTIVATION } = MDCRippleFoundation.cssClasses;
      this.adapter_.removeClass(FG_ACTIVATION);
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();

    const { ROOT, UNBOUNDED } = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.removeClass(ROOT);
      this.adapter_.removeClass(UNBOUNDED);
      this.removeCssVars_();
    });
  }

  /** @private */
  registerRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach(type => {
      this.adapter_.registerInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }

  /**
   * @param {!Event} e
   * @private
   */
  registerDeactivationHandlers_(e) {
    if (e.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(type => {
        this.adapter_.registerDocumentInteractionHandler(type, this.deactivateHandler_);
      });
    }
  }

  /** @private */
  deregisterRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach(type => {
      this.adapter_.deregisterInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  /** @private */
  deregisterDeactivationHandlers_() {
    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(type => {
      this.adapter_.deregisterDocumentInteractionHandler(type, this.deactivateHandler_);
    });
  }

  /** @private */
  removeCssVars_() {
    const { strings } = MDCRippleFoundation;
    Object.keys(strings).forEach(k => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const activationState = this.activationState_;
    if (activationState.isActivated) {
      return;
    }

    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    const previousActivationEvent = this.previousActivationEvent_;
    const isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

    const hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(target => this.adapter_.containsEventTarget(target));
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (e) {
      activatedTargets.push( /** @type {!EventTarget} */e.target);
      this.registerDeactivationHandlers_(e);
    }

    requestAnimationFrame(() => {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }

      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];
    });
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  activate(event = null) {
    this.activate_(event);
  }

  /** @private */
  animateActivation_() {
    const { VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END } = MDCRippleFoundation.strings;
    const { FG_DEACTIVATION, FG_ACTIVATION } = MDCRippleFoundation.cssClasses;
    const { DEACTIVATION_TIMEOUT_MS } = MDCRippleFoundation.numbers;

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const { startPoint, endPoint } = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
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
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const { activationEvent, wasActivatedByPointer } = this.activationState_;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* getNormalizedEventCoords */])(
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

    const endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };

    return { startPoint, endPoint };
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    const { FG_DEACTIVATION } = MDCRippleFoundation.cssClasses;
    const { hasDeactivationUXRun, isActivated } = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const { FG_ACTIVATION } = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  resetActivationState_() {
    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(() => this.previousActivationEvent_ = null, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  }

  /**
   * @param {?Event} e
   * @private
   */
  deactivate_(e) {
    const activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }

    const state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

    if (activationState.isProgrammatic) {
      const evtObject = null;
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(() => {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
        this.resetActivationState_();
      });
    }
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  deactivate(event = null) {
    this.deactivate_(event);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, { wasActivatedByPointer, wasElementMadeActive }) {
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();
    const maxDim = Math.max(this.frame_.height, this.frame_.width);

    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    const getBoundedRadius = () => {
      const hypotenuse = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;

    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE, VAR_LEFT, VAR_TOP, VAR_FG_SCALE
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }

  /** @param {boolean} unbounded */
  setUnbounded(unbounded) {
    const { UNBOUNDED } = MDCRippleFoundation.cssClasses;
    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
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

const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

const strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initDialogs;
// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
function createDialogHandler(dialog) {
    return function () {
        dialog.close();
    };
}

function initDialogs() {
    console.log('\tDialogs');

    var dialogs = document.querySelectorAll('.v-js-dialog');
    if (dialogs) {
        for (var i = 0; i < dialogs.length; i++) {
            var dialog = dialogs[i];
            var dialogButtons = dialog.querySelectorAll('button:not([disabled])');
            for (var j = 0; j != dialogButtons.length; j++) {
                var dialogButton = dialogButtons[j];
                if (!dialogButton.dialog) {
                    dialogButton.dialog = dialog;
                    var buttonEvents = dialogButton.dataset.events;
                    // If the dialog button does not have any events tied to it,
                    // then close the dialog on click, otherwise let the events handlers
                    // take care of the close.
                    if (!buttonEvents) {
                        dialogButton.addEventListener('click', createDialogHandler(dialog));
                    }
                }
            }
        }
    }
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initTextFields;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_textfield__ = __webpack_require__(42);


function initTextFields() {
    console.log('\tTextFields');

    var textFields = document.querySelectorAll('.mdc-text-field');
    for (var i = 0; i < textFields.length; i++) {
        var textField = textFields[i];
        if (!textField.mdcComponent) {
            textField.mdcComponent = new __WEBPACK_IMPORTED_MODULE_0__material_textfield__["a" /* MDCTextField */](textField);
        }
    }
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_text_index__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icon_index__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_floating_label_index__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_notched_outline_index__ = __webpack_require__(52);
/* unused harmony reexport MDCTextFieldFoundation */
/* unused harmony reexport MDCTextFieldHelperText */
/* unused harmony reexport MDCTextFieldHelperTextFoundation */
/* unused harmony reexport MDCTextFieldIcon */
/* unused harmony reexport MDCTextFieldIconFoundation */
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


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */





/* eslint-disable no-unused-vars */





/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */
class MDCTextField extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /** @private {?Element} */
    this.input_;
    /** @type {?MDCRipple} */
    this.ripple;
    /** @private {?MDCLineRipple} */
    this.lineRipple_;
    /** @private {?MDCTextFieldHelperText} */
    this.helperText_;
    /** @private {?MDCTextFieldIcon} */
    this.icon_;
    /** @private {?MDCFloatingLabel} */
    this.label_;
    /** @private {?MDCNotchedOutline} */
    this.outline_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */
  static attachTo(root) {
    return new MDCTextField(root);
  }

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
  initialize(rippleFactory = (el, foundation) => new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */](el, foundation), lineRippleFactory = el => new __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__["a" /* MDCLineRipple */](el), helperTextFactory = el => new __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a" /* MDCTextFieldHelperText */](el), iconFactory = el => new __WEBPACK_IMPORTED_MODULE_8__icon_index__["a" /* MDCTextFieldIcon */](el), labelFactory = el => new __WEBPACK_IMPORTED_MODULE_9__material_floating_label_index__["a" /* MDCFloatingLabel */](el), outlineFactory = el => new __WEBPACK_IMPORTED_MODULE_10__material_notched_outline_index__["a" /* MDCNotchedOutline */](el)) {
    this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].INPUT_SELECTOR);
    const labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    const lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].BOTTOM_LINE_SELECTOR);
    if (lineRippleElement) {
      this.lineRipple_ = lineRippleFactory(lineRippleElement);
    }
    const outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].OUTLINE_SELECTOR);
    if (outlineElement) {
      this.outline_ = outlineFactory(outlineElement);
    }
    if (this.input_.hasAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ARIA_CONTROLS)) {
      const helperTextElement = document.getElementById(this.input_.getAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ARIA_CONTROLS));
      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }
    const iconElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ICON_SELECTOR);
    if (iconElement) {
      this.icon_ = iconFactory(iconElement);
    }

    this.ripple = null;
    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].BOX)) {
      const MATCHES = Object(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["b" /* getMatchesProperty */])(HTMLElement.prototype);
      const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */].createAdapter( /** @type {!RippleCapableSurface} */this), {
        isSurfaceActive: () => this.input_[MATCHES](':active'),
        registerInteractionHandler: (type, handler) => this.input_.addEventListener(type, handler),
        deregisterInteractionHandler: (type, handler) => this.input_.removeEventListener(type, handler)
      });
      const foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["b" /* MDCRippleFoundation */](adapter);
      this.ripple = rippleFactory(this.root_, foundation);
    }
  }

  destroy() {
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
    super.destroy();
  }

  /**
   * Initiliazes the Text Field's internal state based on the environment's
   * state.
   */
  initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  }

  /**
   * @return {string} The value of the input.
   */
  get value() {
    return this.foundation_.getValue();
  }

  /**
   * @param {string} value The value to set on the input.
   */
  set value(value) {
    this.foundation_.setValue(value);
  }

  /**
   * @return {boolean} True if the Text Field is disabled.
   */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /**
   * @param {boolean} disabled Sets the Text Field disabled or enabled.
   */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /**
   * @return {boolean} valid True if the Text Field is valid.
   */
  get valid() {
    return this.foundation_.isValid();
  }

  /**
   * @param {boolean} valid Sets the Text Field valid or invalid.
   */
  set valid(valid) {
    this.foundation_.setValid(valid);
  }

  /**
   * @return {boolean} True if the Text Field is required.
   */
  get required() {
    return this.input_.required;
  }

  /**
   * @param {boolean} required Sets the Text Field to required.
   */
  set required(required) {
    this.input_.required = required;
  }

  /**
   * @return {string} The input element's validation pattern.
   */
  get pattern() {
    return this.input_.pattern;
  }

  /**
   * @param {string} pattern Sets the input element's validation pattern.
   */
  set pattern(pattern) {
    this.input_.pattern = pattern;
  }

  /**
   * @return {number} The input element's minLength.
   */
  get minLength() {
    return this.input_.minLength;
  }

  /**
   * @param {number} minLength Sets the input element's minLength.
   */
  set minLength(minLength) {
    this.input_.minLength = minLength;
  }

  /**
   * @return {number} The input element's maxLength.
   */
  get maxLength() {
    return this.input_.maxLength;
  }

  /**
   * @param {number} maxLength Sets the input element's maxLength.
   */
  set maxLength(maxLength) {
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
  get min() {
    return this.input_.min;
  }

  /**
   * @param {string} min Sets the input element's min.
   */
  set min(min) {
    this.input_.min = min;
  }

  /**
   * @return {string} The input element's max.
   */
  get max() {
    return this.input_.max;
  }

  /**
   * @param {string} max Sets the input element's max.
   */
  set max(max) {
    this.input_.max = max;
  }

  /**
   * @return {string} The input element's step.
   */
  get step() {
    return this.input_.step;
  }

  /**
   * @param {string} step Sets the input element's step.
   */
  set step(step) {
    this.input_.step = step;
  }

  /**
   * Sets the helper text element content.
   * @param {string} content
   */
  set helperTextContent(content) {
    this.foundation_.setHelperTextContent(content);
  }

  /**
   * Recomputes the outline SVG path for the outline element, and recomputes
   * all dimensions and positions for the ripple element.
   */
  layout() {
    const openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
    if (this.ripple) {
      this.ripple.layout();
    }
  }

  /**
   * @return {!MDCTextFieldFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_5__foundation__["a" /* default */](
    /** @type {!MDCTextFieldAdapter} */Object.assign({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      hasClass: className => this.root_.classList.contains(className),
      registerTextFieldInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterTextFieldInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      registerValidationAttributeChangeHandler: handler => {
        const observer = new MutationObserver(handler);
        const targetNode = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].INPUT_SELECTOR);
        const config = { attributes: true };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: observer => observer.disconnect(),
      isFocused: () => {
        return document.activeElement === this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].INPUT_SELECTOR);
      },
      isRtl: () => window.getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl'
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
  getLabelAdapterMethods_() {
    return {
      shakeLabel: shouldShake => this.label_.shake(shouldShake),
      floatLabel: shouldFloat => this.label_.float(shouldFloat),
      hasLabel: () => !!this.label_,
      getLabelWidth: () => this.label_.getWidth()
    };
  }

  /**
   * @return {!{
   *   activateLineRipple: function(): undefined,
   *   deactivateLineRipple: function(): undefined,
   *   setLineRippleTransformOrigin: function(!number): undefined,
   * }}
   */
  getLineRippleAdapterMethods_() {
    return {
      activateLineRipple: () => {
        if (this.lineRipple_) {
          this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: () => {
        if (this.lineRipple_) {
          this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: normalizedX => {
        if (this.lineRipple_) {
          this.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  }

  /**
   * @return {!{
   *   notchOutline: function(number, boolean): undefined,
   *   hasOutline: function(): boolean,
   * }}
   */
  getOutlineAdapterMethods_() {
    return {
      notchOutline: (labelWidth, isRtl) => this.outline_.notch(labelWidth, isRtl),
      closeOutline: () => this.outline_.closeNotch(),
      hasOutline: () => !!this.outline_
    };
  }

  /**
   * @return {!{
   *   registerInputInteractionHandler: function(string, function()): undefined,
   *   deregisterInputInteractionHandler: function(string, function()): undefined,
   *   getNativeInput: function(): ?Element,
   * }}
   */
  getInputAdapterMethods_() {
    return {
      registerInputInteractionHandler: (evtType, handler) => this.input_.addEventListener(evtType, handler),
      deregisterInputInteractionHandler: (evtType, handler) => this.input_.removeEventListener(evtType, handler),
      getNativeInput: () => this.input_
    };
  }

  /**
   * Returns a map of all subcomponents to subfoundations.
   * @return {!FoundationMapType}
   */
  getFoundationMap_() {
    return {
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      icon: this.icon_ ? this.icon_.foundation : undefined
    };
  }
}



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
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
const strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};

/** @enum {string} */
const cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
};



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
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
const strings = {
  ICON_EVENT: 'MDCTextField:icon'
};



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_line_ripple_foundation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_text_foundation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_foundation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_floating_label_foundation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_notched_outline_foundation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(9);
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



/* eslint-disable no-unused-vars */





/* eslint-enable no-unused-vars */


// whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
// under section: `Validation-related attributes`
const VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */
class MDCTextFieldFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */];
  }

  /** @return enum {string} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_7__constants__["b" /* numbers */];
  }

  /** @return {boolean} */
  get shouldShake() {
    return !this.isValid() && !this.isFocused_;
  }

  /** @return {boolean} */
  get shouldFloat() {
    return !this.isBadInput_() && (!!this.getValue() || this.isFocused_);
  }

  /**
   * {@see MDCTextFieldAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCTextFieldAdapter} */{
        addClass: () => {},
        removeClass: () => {},
        hasClass: () => {},
        registerTextFieldInteractionHandler: () => {},
        deregisterTextFieldInteractionHandler: () => {},
        registerInputInteractionHandler: () => {},
        deregisterInputInteractionHandler: () => {},
        registerValidationAttributeChangeHandler: () => {},
        deregisterValidationAttributeChangeHandler: () => {},
        getNativeInput: () => {},
        isFocused: () => {},
        isRtl: () => {},
        activateLineRipple: () => {},
        deactivateLineRipple: () => {},
        setLineRippleTransformOrigin: () => {},
        shakeLabel: () => {},
        floatLabel: () => {},
        hasLabel: () => {},
        getLabelWidth: () => {},
        hasOutline: () => {},
        notchOutline: () => {},
        closeOutline: () => {}
      }
    );
  }

  /**
   * @param {!MDCTextFieldAdapter} adapter
   * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
   */
  constructor(adapter, foundationMap = /** @type {!FoundationMapType} */{}) {
    super(Object.assign(MDCTextFieldFoundation.defaultAdapter, adapter));

    /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
    this.helperText_ = foundationMap.helperText;
    /** @type {!MDCTextFieldIconFoundation|undefined} */
    this.icon_ = foundationMap.icon;

    /** @private {boolean} */
    this.isFocused_ = false;
    /** @private {boolean} */
    this.receivedUserInput_ = false;
    /** @private {boolean} */
    this.useCustomValidityChecking_ = false;
    /** @private {boolean} */
    this.isValid_ = true;
    /** @private {function(): undefined} */
    this.inputFocusHandler_ = () => this.activateFocus();
    /** @private {function(): undefined} */
    this.inputBlurHandler_ = () => this.deactivateFocus();
    /** @private {function(): undefined} */
    this.inputInputHandler_ = () => this.autoCompleteFocus();
    /** @private {function(!Event): undefined} */
    this.setPointerXOffset_ = evt => this.setTransformOrigin(evt);
    /** @private {function(!Event): undefined} */
    this.textFieldInteractionHandler_ = () => this.handleTextFieldInteraction();
    /** @private {function(!Array): undefined} */
    this.validationAttributeChangeHandler_ = mutations => this.handleValidationAttributeMutation_(mutations);
    /** @private {!MutationObserver} */
    this.validationObserver_;
  }

  init() {
    this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    // Ensure label does not collide with any pre-filled value.
    if (this.adapter_.hasLabel() && this.getValue()) {
      this.adapter_.floatLabel(this.shouldFloat);
      this.notchOutline(this.shouldFloat);
    }

    if (this.adapter_.isFocused()) {
      this.inputFocusHandler_();
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach(evtType => {
      this.adapter_.registerInputInteractionHandler(evtType, this.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach(evtType => {
      this.adapter_.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler_);
    });
    this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
  }

  destroy() {
    this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach(evtType => {
      this.adapter_.deregisterInputInteractionHandler(evtType, this.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach(evtType => {
      this.adapter_.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  }

  /**
   * Handles user interactions with the Text Field.
   */
  handleTextFieldInteraction() {
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
  handleValidationAttributeMutation_(mutationsList) {
    mutationsList.some(mutation => {
      if (VALIDATION_ATTR_WHITELIST.indexOf(mutation.attributeName) > -1) {
        this.styleValidity_(true);
        return true;
      }
    });
  }

  /**
   * Opens/closes the notched outline.
   * @param {boolean} openNotch
   */
  notchOutline(openNotch) {
    if (!this.adapter_.hasOutline() || !this.adapter_.hasLabel()) {
      return;
    }

    if (openNotch) {
      const isDense = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].DENSE);
      const labelScale = isDense ? __WEBPACK_IMPORTED_MODULE_7__constants__["b" /* numbers */].DENSE_LABEL_SCALE : __WEBPACK_IMPORTED_MODULE_7__constants__["b" /* numbers */].LABEL_SCALE;
      const labelWidth = this.adapter_.getLabelWidth() * labelScale;
      const isRtl = this.adapter_.isRtl();
      this.adapter_.notchOutline(labelWidth, isRtl);
    } else {
      this.adapter_.closeOutline();
    }
  }

  /**
   * Activates the text field focus state.
   */
  activateFocus() {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter_.activateLineRipple();
    this.notchOutline(this.shouldFloat);
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
  setTransformOrigin(evt) {
    const targetClientRect = evt.target.getBoundingClientRect();
    const evtCoords = { x: evt.clientX, y: evt.clientY };
    const normalizedX = evtCoords.x - targetClientRect.left;
    this.adapter_.setLineRippleTransformOrigin(normalizedX);
  }

  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programatically).
   */
  autoCompleteFocus() {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  }

  /**
   * Deactivates the Text Field's focus state.
   */
  deactivateFocus() {
    this.isFocused_ = false;
    this.adapter_.deactivateLineRipple();
    const input = this.getNativeInput_();
    const shouldRemoveLabelFloat = !input.value && !this.isBadInput_();
    const isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);
    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(this.shouldShake);
      this.adapter_.floatLabel(this.shouldFloat);
      this.notchOutline(this.shouldFloat);
    }
    if (shouldRemoveLabelFloat) {
      this.receivedUserInput_ = false;
    }
  }

  /**
   * @return {string} The value of the input Element.
   */
  getValue() {
    return this.getNativeInput_().value;
  }

  /**
   * @param {string} value The value to set on the input Element.
   */
  setValue(value) {
    this.getNativeInput_().value = value;
    const isValid = this.isValid();
    this.styleValidity_(isValid);
    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(this.shouldShake);
      this.adapter_.floatLabel(this.shouldFloat);
      this.notchOutline(this.shouldFloat);
    }
  }

  /**
   * @return {boolean} If a custom validity is set, returns that value.
   *     Otherwise, returns the result of native validity checks.
   */
  isValid() {
    return this.useCustomValidityChecking_ ? this.isValid_ : this.isNativeInputValid_();
  }

  /**
   * @param {boolean} isValid Sets the validity state of the Text Field.
   */
  setValid(isValid) {
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
  isDisabled() {
    return this.getNativeInput_().disabled;
  }

  /**
   * @param {boolean} disabled Sets the text-field disabled or enabled.
   */
  setDisabled(disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  }

  /**
   * @param {string} content Sets the content of the helper text.
   */
  setHelperTextContent(content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  }

  /**
   * @return {boolean} True if the Text Field input fails in converting the
   *     user-supplied value.
   * @private
   */
  isBadInput_() {
    return this.getNativeInput_().validity.badInput;
  }

  /**
   * @return {boolean} The result of native validity checking
   *     (ValidityState.valid).
   */
  isNativeInputValid_() {
    return this.getNativeInput_().validity.valid;
  }

  /**
   * Styles the component based on the validity state.
   * @param {boolean} isValid
   * @private
   */
  styleValidity_(isValid) {
    const { INVALID } = MDCTextFieldFoundation.cssClasses;
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
  styleFocused_(isFocused) {
    const { FOCUSED } = MDCTextFieldFoundation.cssClasses;
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
  styleDisabled_(isDisabled) {
    const { DISABLED, INVALID } = MDCTextFieldFoundation.cssClasses;
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
  getNativeInput_() {
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
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTextFieldFoundation);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
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
const cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
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
const cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake'
};



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCLineRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(13);
/* unused harmony reexport MDCLineRippleFoundation */
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






/**
 * @extends {MDCComponent<!MDCLineRippleFoundation>}
 * @final
 */
class MDCLineRipple extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCLineRipple}
   */
  static attachTo(root) {
    return new MDCLineRipple(root);
  }

  /**
   * Activates the line ripple
   */
  activate() {
    this.foundation_.activate();
  }

  /**
   * Deactivates the line ripple
   */
  deactivate() {
    this.foundation_.deactivate();
  }

  /**
   * Sets the transform origin given a user's click location. The `rippleCenter` is the
   * x-coordinate of the middle of the ripple.
   * @param {!number} xCoordinate
   */
  setRippleCenter(xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  }

  /**
   * @return {!MDCLineRippleFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCLineRippleAdapter} */Object.assign({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      hasClass: className => this.root_.classList.contains(className),
      setStyle: (propertyName, value) => this.root_.style[propertyName] = value,
      registerEventHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler)
    }));
  }
}



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldHelperText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(4);
/* unused harmony reexport MDCTextFieldHelperTextFoundation */
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






/**
 * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
 * @final
 */
class MDCTextFieldHelperText extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCTextFieldHelperText}
   */
  static attachTo(root) {
    return new MDCTextFieldHelperText(root);
  }

  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCTextFieldHelperTextAdapter} */Object.assign({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      hasClass: className => this.root_.classList.contains(className),
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      removeAttr: attr => this.root_.removeAttribute(attr),
      setContent: content => {
        this.root_.textContent = content;
      }
    }));
  }
}



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
/* unused harmony reexport MDCTextFieldIconFoundation */
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






/**
 * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
 * @final
 */
class MDCTextFieldIcon extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCTextFieldIcon}
   */
  static attachTo(root) {
    return new MDCTextFieldIcon(root);
  }

  /**
   * @return {!MDCTextFieldIconFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * @return {!MDCTextFieldIconFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCTextFieldIconAdapter} */Object.assign({
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      registerInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      notifyIconAction: () => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */)
    }));
  }
}



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFloatingLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(15);
/* unused harmony reexport MDCFloatingLabelFoundation */
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
 * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
 * @final
 */
class MDCFloatingLabel extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCFloatingLabel}
   */
  static attachTo(root) {
    return new MDCFloatingLabel(root);
  }

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake styles the label to shake by adding shake class
   * if true, otherwise will stop shaking by removing shake class.
   */
  shake(shouldShake) {
    this.foundation_.shake(shouldShake);
  }

  /**
   * Styles label to float/dock.
   * @param {boolean} shouldFloat styles the label to float by adding float class
   * if true, otherwise docks the label by removing the float class.
   */
  float(shouldFloat) {
    this.foundation_.float(shouldFloat);
  }

  /**
   * @return {number}
   */
  getWidth() {
    return this.foundation_.getWidth();
  }

  /**
   * @return {!MDCFloatingLabelFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      getWidth: () => this.root_.offsetWidth,
      registerInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler)
    });
  }
}



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCNotchedOutline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(19);
/* unused harmony reexport MDCNotchedOutlineFoundation */
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







/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */
class MDCNotchedOutline extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCNotchedOutline}
   */
  static attachTo(root) {
    return new MDCNotchedOutline(root);
  }

  /**
    * Updates outline selectors and SVG path to open notch.
    * @param {number} notchWidth The notch width in the outline.
    * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
    * will be right justified in outline path, otherwise left justified.
    */
  notch(notchWidth, isRtl) {
    this.foundation_.notch(notchWidth, isRtl);
  }

  /**
   * Updates the outline selectors to close notch and return it to idle state.
   */
  closeNotch() {
    this.foundation_.closeNotch();
  }

  /**
   * @return {!MDCNotchedOutlineFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      getWidth: () => this.root_.offsetWidth,
      getHeight: () => this.root_.offsetHeight,
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      setOutlinePathAttr: value => {
        const path = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].PATH_SELECTOR);
        path.setAttribute('d', value);
      },
      getIdleOutlineStyleValue: propertyName => {
        const idleOutlineElement = this.root_.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].IDLE_OUTLINE_SELECTOR);
        return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
      }
    });
  }
}



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_loads__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_replace__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_dialog__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_errors__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_toggle_visiblity__ = __webpack_require__(58);







class VEvents {
    //[[type, url, target, params]]
    constructor(actions, event) {
        this.event = event;
        this.actions = actions.map(action => {
            return this.constructor.action_class(action, event);
        });
    }

    call() {
        // Adapted from http://www.datchley.name/promise-patterns-anti-patterns/#executingpromisesinseries
        var fnlist = this.actions.map(action => {
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
            // var responseText = results[2];
            var responseURL = results[3];

            if (event.target.dialog) {
                event.target.dialog.close();
            }
            if (contentType && contentType.indexOf("text/html") !== -1 && typeof responseURL !== 'undefined') {
                window.location = responseURL;
            }
        }).catch(function (results) {
            new __WEBPACK_IMPORTED_MODULE_4__events_errors__["a" /* VErrors */](event).displayErrors(results);
        });
    }

    static action_class(action, event) {
        var action_type = action[0];
        var url = action[1];
        var target = action[2];
        var params = action[3];

        switch (action_type) {
            case 'loads':
                return new __WEBPACK_IMPORTED_MODULE_0__events_loads__["a" /* VLoadsPage */](url);
            case 'replaces':
                return new __WEBPACK_IMPORTED_MODULE_2__events_replace__["a" /* VReplaceElement */](target, url, params, event);
            case 'post':
                return new __WEBPACK_IMPORTED_MODULE_1__events_post__["a" /* VPost */](url, params, 'POST', event);
            case 'update':
                return new __WEBPACK_IMPORTED_MODULE_1__events_post__["a" /* VPost */](url, params, 'PUT', event);
            case 'delete':
                return new __WEBPACK_IMPORTED_MODULE_1__events_post__["a" /* VPost */](url, params, 'DELETE', event);
            case 'dialog':
                return new __WEBPACK_IMPORTED_MODULE_3__events_dialog__["a" /* VDialog */](target, params, event);
            case 'toggle_visibility':
                return new __WEBPACK_IMPORTED_MODULE_5__events_toggle_visiblity__["a" /* VToggleVisiblity */](target, params, event);
            default:
                throw action_type + ' is not supported.';
        }
    }

}
/* unused harmony export VEvents */


// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
function createEventHandler(actionsData) {
    return function (event) {
        new VEvents(actionsData, event).call();
    };
}

function initEvents() {
    console.log('\tEvents');

    var events = document.querySelectorAll('[data-events]');
    for (var i = 0; i < events.length; i++) {
        var eventElem = events[i];
        var eventsData = JSON.parse(eventElem.dataset.events);
        for (var j = 0; j < eventsData.length; j++) {
            var eventData = eventsData[j];
            var eventName = eventData[0];
            var actionsData = eventData[1];
            if (!eventElem.eventsHandler) {
                eventElem.eventsHandler = createEventHandler(actionsData);
                eventElem.addEventListener(eventName, eventElem.eventsHandler);
            }
        }
    }
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VLoadsPage {
    constructor(url) {
        this.url = url;
    }

    call() {
        var url = this.url;
        var promiseObj = new Promise(function (resolve) {
            console.log("Loading page: " + url);
            window.location = url;
            resolve([200, null, null]);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VLoadsPage;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snackbar__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(21);



// Replaces a given element with the contents of the call to the url.
// parameters are appended.
class VPost extends __WEBPACK_IMPORTED_MODULE_1__base__["a" /* VBase */] {
    constructor(url, params, method, event) {
        super();
        this.url = url;
        this.params = params;
        this.method = method;
        this.event = event;
    }

    call() {
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

    isForm(parent_element) {
        return parent_element && parent_element.elements;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VPost;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snackbar__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initialize__ = __webpack_require__(7);




// Replaces a given element with the contents of the call to the url.
// parameters are appended.
class VReplaceElement extends __WEBPACK_IMPORTED_MODULE_1__base__["a" /* VBase */] {
    constructor(element_id, url, params, event) {
        super();
        this.element_id = element_id;
        this.url = url;
        this.params = params;
        this.event = event;
    }

    call() {
        this.clearErrors();

        var parent_element = document.getElementById(this.params.__parent_id__);
        var FD = null;
        // Automatically pull values out of input controls
        if (this.params.__parent_id__) {
            var parent_element = document.getElementById(this.params.__parent_id__);
            if (parent_element) {
                var value = parent_element.value;
                if (value) {
                    this.params[parent_element.name] = value;
                    delete this.params.__parent_id__;
                }
            }
        }

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
                        Object(__WEBPACK_IMPORTED_MODULE_2__initialize__["a" /* initialize */])(newNode);
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

    seperator() {
        return this.url.includes("?") ? '&' : '?';
    }

    serialize(obj, prefix) {
        var str = [],
            p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p,
                    v = obj[p];
                str.push(v !== null && typeof v === "object" ? this.serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VReplaceElement;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VDialog {
    constructor(dialogId, params, event) {
        this.dialogId = dialogId;
        this.params = params;
        this.event = event;
    }

    call() {
        var dialog = document.querySelector('#' + this.dialogId);
        if (dialog) {
            if (!dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }

            dialog.showModal();
        } else {
            console.error("Unable to find dialog with id: " + this.dialogId + ". Usually this means you forgot to attach it to the currently rendered page.");
        }
        var promiseObj = new Promise(function (resolve) {
            resolve(true);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VDialog;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VToggleVisiblity {
    constructor(targetId, params, event) {
        this.targetId = targetId;
        this.params = params;
        this.event = event;
    }

    call() {
        var targetId = this.targetId;
        var promiseObj = new Promise(function (resolve) {
            console.log("Toggling visiblity on: " + targetId);
            var elem = document.getElementById(targetId);
            elem.classList.toggle("v-hidden");

            resolve([200, null, null]);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VToggleVisiblity;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initLists;
function initLists() {
    console.log('\tLists');
    // Put any initialization code you need here
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initIconToggles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_icon_toggle__ = __webpack_require__(61);


function initIconToggles() {
    console.log('\tIcon Toggles');

    var components = document.querySelectorAll('.mdc-icon-toggle');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.mdcComponent) {
            component.mdcComponent = new __WEBPACK_IMPORTED_MODULE_0__material_icon_toggle__["a" /* MDCIconToggle */](component);
        }
    }
}

// TODO: Add event handler
// var addToFavorites = document.getElementById('add-to-favorites');
//         var favoritedStatus = document.getElementById('favorited-status');
//         addToFavorites.addEventListener('MDCIconToggle:change', function(evt) {
//           var newStatus = evt.detail.isOn ? 'yes' : 'no';
//           favoritedStatus.textContent = newStatus;
//         });

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCIconToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__ = __webpack_require__(65);
/* unused harmony reexport MDCIconToggleFoundation */
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
 * @extends {MDCComponent<!MDCIconToggleFoundation>}
 */
class MDCIconToggle extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCIconToggle(root);
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /** @return {!Element} */
  get iconEl_() {
    const { 'iconInnerSelector': sel } = this.root_.dataset;
    return sel ?
    /** @type {!Element} */this.root_.querySelector(sel) : this.root_;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["a" /* MDCRipple */].createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.foundation_.isKeyboardActivated()
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["a" /* MDCRipple */](this.root_, foundation);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /** @return {!MDCIconToggleFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: className => this.iconEl_.classList.add(className),
      removeClass: className => this.iconEl_.classList.remove(className),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      setText: text => this.iconEl_.textContent = text,
      getTabIndex: () => /* number */this.root_.tabIndex,
      setTabIndex: tabIndex => this.root_.tabIndex = tabIndex,
      getAttr: (name, value) => this.root_.getAttribute(name, value),
      setAttr: (name, value) => this.root_.setAttribute(name, value),
      rmAttr: name => this.root_.removeAttribute(name),
      notifyChange: evtData => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData)
    });
  }

  initialSyncWithDOM() {
    this.on = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ARIA_PRESSED) === 'true';
    this.disabled = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ARIA_DISABLED) === 'true';
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  /** @return {boolean} */
  get on() {
    return this.foundation_.isOn();
  }

  /** @param {boolean} isOn */
  set on(isOn) {
    this.foundation_.toggle(isOn);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} isDisabled */
  set disabled(isDisabled) {
    this.foundation_.setDisabled(isDisabled);
  }

  refreshToggleData() {
    this.foundation_.refreshToggleData();
  }
}



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(64);
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


/* eslint-disable no-unused-vars */



/**
 * @extends {MDCFoundation<!MDCIconToggleAdapter>}
 */
class MDCIconToggleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: () => /* className: string */{},
      removeClass: () => /* className: string */{},
      registerInteractionHandler: () => /* type: string, handler: EventListener */{},
      deregisterInteractionHandler: () => /* type: string, handler: EventListener */{},
      setText: () => /* text: string */{},
      getTabIndex: () => /* number */0,
      setTabIndex: () => /* tabIndex: number */{},
      getAttr: () => /* name: string */ /* string */'',
      setAttr: () => /* name: string, value: string */{},
      rmAttr: () => /* name: string */{},
      notifyChange: () => /* evtData: IconToggleEvent */{}
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCIconToggleFoundation.defaultAdapter, adapter));

    /** @private {boolean} */
    this.on_ = false;

    /** @private {boolean} */
    this.disabled_ = false;

    /** @private {number} */
    this.savedTabIndex_ = -1;

    /** @private {?IconToggleState} */
    this.toggleOnData_ = null;

    /** @private {?IconToggleState} */
    this.toggleOffData_ = null;

    this.clickHandler_ = /** @private {!EventListener} */() => this.toggleFromEvt_();

    /** @private {boolean} */
    this.isHandlingKeydown_ = false;

    this.keydownHandler_ = /** @private {!EventListener} */ /** @type {!KeyboardKey} */evt => {
      if (isSpace(evt)) {
        this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    };

    this.keyupHandler_ = /** @private {!EventListener} */ /** @type {!KeyboardKey} */evt => {
      if (isSpace(evt)) {
        this.isHandlingKeydown_ = false;
        this.toggleFromEvt_();
      }
    };
  }

  init() {
    this.refreshToggleData();
    this.savedTabIndex_ = this.adapter_.getTabIndex();
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
  }

  refreshToggleData() {
    const { DATA_TOGGLE_ON, DATA_TOGGLE_OFF } = MDCIconToggleFoundation.strings;
    this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
    this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
  }

  /** @private */
  toggleFromEvt_() {
    this.toggle();
    const { on_: isOn } = this;
    this.adapter_.notifyChange( /** @type {!IconToggleEvent} */{ isOn });
  }

  /** @return {boolean} */
  isOn() {
    return this.on_;
  }

  /** @param {boolean=} isOn */
  toggle(isOn = !this.on_) {
    this.on_ = isOn;

    const { ARIA_LABEL, ARIA_PRESSED } = MDCIconToggleFoundation.strings;

    if (this.on_) {
      this.adapter_.setAttr(ARIA_PRESSED, 'true');
    } else {
      this.adapter_.setAttr(ARIA_PRESSED, 'false');
    }

    const { cssClass: classToRemove } = this.on_ ? this.toggleOffData_ : this.toggleOnData_;

    if (classToRemove) {
      this.adapter_.removeClass(classToRemove);
    }

    const { content, label, cssClass } = this.on_ ? this.toggleOnData_ : this.toggleOffData_;

    if (cssClass) {
      this.adapter_.addClass(cssClass);
    }
    if (content) {
      this.adapter_.setText(content);
    }
    if (label) {
      this.adapter_.setAttr(ARIA_LABEL, label);
    }
  }

  /**
   * @param {string} dataAttr
   * @return {!IconToggleState}
   */
  parseJsonDataAttr_(dataAttr) {
    const val = this.adapter_.getAttr(dataAttr);
    if (!val) {
      return {};
    }
    return (/** @type {!IconToggleState} */JSON.parse(val)
    );
  }

  /** @return {boolean} */
  isDisabled() {
    return this.disabled_;
  }

  /** @param {boolean} isDisabled */
  setDisabled(isDisabled) {
    this.disabled_ = isDisabled;

    const { DISABLED } = MDCIconToggleFoundation.cssClasses;
    const { ARIA_DISABLED } = MDCIconToggleFoundation.strings;

    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setTabIndex(-1);
      this.adapter_.setAttr(ARIA_DISABLED, 'true');
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.setTabIndex(this.savedTabIndex_);
      this.adapter_.rmAttr(ARIA_DISABLED);
      this.adapter_.removeClass(DISABLED);
    }
  }

  /** @return {boolean} */
  isKeyboardActivated() {
    return this.isHandlingKeydown_;
  }
}

/**
 * @typedef {!{
 *   key: string,
 *   keyCode: number
 * }}
 */
let KeyboardKey;

/**
 * @param {!KeyboardKey} keyboardKey
 * @return {boolean}
 */
function isSpace(keyboardKey) {
  return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
}

/** @record */
class IconToggleState {}

/**
 * The aria-label value of the icon toggle, or undefined if there is no aria-label.
 * @export {string|undefined}
 */
IconToggleState.prototype.label;

/**
 * The text for the icon toggle, or undefined if there is no text.
 * @export {string|undefined}
 */
IconToggleState.prototype.content;

/**
 * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
 * @export {string|undefined}
 */
IconToggleState.prototype.cssClass;

/* harmony default export */ __webpack_exports__["a"] = (MDCIconToggleFoundation);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCIconToggleAdapter */
/* unused harmony export IconToggleEvent */
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
 * Adapter for MDC Icon Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
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

class MDCIconToggleAdapter {
  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /**
   * @param {string} type
   * @param {!EventListener} handler
   */
  registerInteractionHandler(type, handler) {}

  /**
   * @param {string} type
   * @param {!EventListener} handler
   */
  deregisterInteractionHandler(type, handler) {}

  /** @param {string} text */
  setText(text) {}

  /** @return {number} */
  getTabIndex() {}

  /** @param {number} tabIndex */
  setTabIndex(tabIndex) {}

  /**
   * @param {string} name
   * @return {string}
   */
  getAttr(name) {}

  /**
   * @param {string} name
   * @param {string} value
   */
  setAttr(name, value) {}

  /** @param {string} name */
  rmAttr(name) {}

  /** @param {!IconToggleEvent} evtData */
  notifyChange(evtData) {}
}

/**
 * @typedef {!{
 *   isOn: boolean,
 * }}
 */
let IconToggleEvent;



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
const cssClasses = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled'
};

/** @enum {string} */
const strings = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconToggle:change'
};



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* unused harmony export RippleCapableSurface */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* unused harmony reexport util */
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
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class MDCRipple extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, { isUnbounded = undefined } = {}) {
    const ripple = new MDCRipple(root);
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
  static createAdapter(instance) {
    const MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* getMatchesProperty */](HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => __WEBPACK_IMPORTED_MODULE_3__util__["d" /* supportsCssVariables */](window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: className => instance.root_.classList.add(className),
      removeClass: className => instance.root_.classList.remove(className),
      containsEventTarget: target => instance.root_.contains(target),
      registerInteractionHandler: (evtType, handler) => instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      deregisterInteractionHandler: (evtType, handler) => instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      registerResizeHandler: handler => window.addEventListener('resize', handler),
      deregisterResizeHandler: handler => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded_();
  }

  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   * @private
   */
  setUnbounded_() {
    this.foundation_.setUnbounded(this.unbounded_);
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @return {!MDCRippleFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
class RippleCapableSurface {}

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



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(25);
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
 * @typedef {!{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
let ActivationStateType;

/**
 * @typedef {!{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
let ListenerInfoType;

/**
 * @typedef {!{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
let ListenersType;

/**
 * @typedef {!{
 *   x: number,
 *   y: number
 * }}
 */
let PointType;

// Activation events registered on the root element of each instance for activation
const ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
const POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
let activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class MDCRippleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */{},
      isUnbounded: () => /* boolean */{},
      isSurfaceActive: () => /* boolean */{},
      isSurfaceDisabled: () => /* boolean */{},
      addClass: () => /* className: string */{},
      removeClass: () => /* className: string */{},
      containsEventTarget: () => /* target: !EventTarget */{},
      registerInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      deregisterInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      registerDocumentInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      deregisterDocumentInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      registerResizeHandler: () => /* handler: EventListener */{},
      deregisterResizeHandler: () => /* handler: EventListener */{},
      updateCssVariable: () => /* varName: string, value: string */{},
      computeBoundingRect: () => /* ClientRect */{},
      getWindowPageOffset: () => /* {x: number, y: number} */{}
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    this.activateHandler_ = e => this.activate_(e);

    /** @private {function(!Event)} */
    this.deactivateHandler_ = e => this.deactivate_(e);

    /** @private {function(?Event=)} */
    this.focusHandler_ = () => requestAnimationFrame(() => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));

    /** @private {function(?Event=)} */
    this.blurHandler_ = () => requestAnimationFrame(() => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {!{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    this.previousActivationEvent_ = null;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */
  isSupported_() {
    return this.adapter_.browserSupportsCssVars();
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationEvent: null,
      isProgrammatic: false
    };
  }

  init() {
    if (!this.isSupported_()) {
      return;
    }
    this.registerRootHandlers_();

    const { ROOT, UNBOUNDED } = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.addClass(ROOT);
      if (this.adapter_.isUnbounded()) {
        this.adapter_.addClass(UNBOUNDED);
      }
      this.layoutInternal_();
    });
  }

  destroy() {
    if (!this.isSupported_()) {
      return;
    }

    if (this.activationTimer_) {
      clearTimeout(this.activationTimer_);
      this.activationTimer_ = 0;
      const { FG_ACTIVATION } = MDCRippleFoundation.cssClasses;
      this.adapter_.removeClass(FG_ACTIVATION);
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();

    const { ROOT, UNBOUNDED } = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.removeClass(ROOT);
      this.adapter_.removeClass(UNBOUNDED);
      this.removeCssVars_();
    });
  }

  /** @private */
  registerRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach(type => {
      this.adapter_.registerInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }

  /**
   * @param {!Event} e
   * @private
   */
  registerDeactivationHandlers_(e) {
    if (e.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(type => {
        this.adapter_.registerDocumentInteractionHandler(type, this.deactivateHandler_);
      });
    }
  }

  /** @private */
  deregisterRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach(type => {
      this.adapter_.deregisterInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  /** @private */
  deregisterDeactivationHandlers_() {
    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(type => {
      this.adapter_.deregisterDocumentInteractionHandler(type, this.deactivateHandler_);
    });
  }

  /** @private */
  removeCssVars_() {
    const { strings } = MDCRippleFoundation;
    Object.keys(strings).forEach(k => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const activationState = this.activationState_;
    if (activationState.isActivated) {
      return;
    }

    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    const previousActivationEvent = this.previousActivationEvent_;
    const isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

    const hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(target => this.adapter_.containsEventTarget(target));
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (e) {
      activatedTargets.push( /** @type {!EventTarget} */e.target);
      this.registerDeactivationHandlers_(e);
    }

    requestAnimationFrame(() => {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }

      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];
    });
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  activate(event = null) {
    this.activate_(event);
  }

  /** @private */
  animateActivation_() {
    const { VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END } = MDCRippleFoundation.strings;
    const { FG_DEACTIVATION, FG_ACTIVATION } = MDCRippleFoundation.cssClasses;
    const { DEACTIVATION_TIMEOUT_MS } = MDCRippleFoundation.numbers;

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const { startPoint, endPoint } = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
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
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const { activationEvent, wasActivatedByPointer } = this.activationState_;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* getNormalizedEventCoords */])(
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

    const endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };

    return { startPoint, endPoint };
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    const { FG_DEACTIVATION } = MDCRippleFoundation.cssClasses;
    const { hasDeactivationUXRun, isActivated } = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const { FG_ACTIVATION } = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  resetActivationState_() {
    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(() => this.previousActivationEvent_ = null, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  }

  /**
   * @param {?Event} e
   * @private
   */
  deactivate_(e) {
    const activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }

    const state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

    if (activationState.isProgrammatic) {
      const evtObject = null;
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(() => {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
        this.resetActivationState_();
      });
    }
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  deactivate(event = null) {
    this.deactivate_(event);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, { wasActivatedByPointer, wasElementMadeActive }) {
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();
    const maxDim = Math.max(this.frame_.height, this.frame_.width);

    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    const getBoundedRadius = () => {
      const hypotenuse = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;

    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE, VAR_LEFT, VAR_TOP, VAR_FG_SCALE
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }

  /** @param {boolean} unbounded */
  setUnbounded(unbounded) {
    const { UNBOUNDED } = MDCRippleFoundation.cssClasses;
    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
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

const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

const strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMenus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_menu__ = __webpack_require__(69);


function createMenuHandler(menu) {
    return function () {
        menu.open = !menu.open;
    };
}

function initMenus() {
    console.log('\tMenus');

    var components = document.querySelectorAll('.v-menu');
    if (components) {
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            if (!component.mdcComponent) {
                component.mdcComponent = new __WEBPACK_IMPORTED_MODULE_0__material_menu__["a" /* MDCMenu */](component);
                var anchor = component.closest('.mdc-menu-anchor').querySelector('.v-menu-click');
                anchor.addEventListener('click', createMenuHandler(component.mdcComponent));
            }
        }
    }
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(27);
/* unused harmony reexport MDCMenuFoundation */
/* unused harmony reexport AnchorMargin */
/* unused harmony reexport Corner */
/* unused harmony reexport CornerBit */
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
 * @extends MDCComponent<!MDCMenuFoundation>
 */
class MDCMenu extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);
    /** @private {!Element} */
    this.previousFocus_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCMenu}
   */
  static attachTo(root) {
    return new MDCMenu(root);
  }

  /** @return {boolean} */
  get open() {
    return this.foundation_.isOpen();
  }

  /** @param {boolean} value */
  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /** @param {{focusIndex: ?number}=} options */
  show({ focusIndex = null } = {}) {
    this.foundation_.open({ focusIndex: focusIndex });
  }

  hide() {
    this.foundation_.close();
  }

  /**
   * @param {Corner} corner Default anchor corner alignment of top-left
   *     menu corner.
   */
  setAnchorCorner(corner) {
    this.foundation_.setAnchorCorner(corner);
  }

  /**
   * @param {AnchorMargin} margin
   */
  setAnchorMargin(margin) {
    this.foundation_.setAnchorMargin(margin);
  }

  /**
   * Return the item container element inside the component.
   * @return {?Element}
   */
  get itemsContainer_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCMenuFoundation */].strings.ITEMS_SELECTOR);
  }

  /**
   * Return the items within the menu. Note that this only contains the set of elements within
   * the items container that are proper list items, and not supplemental / presentational DOM
   * elements.
   * @return {!Array<!Element>}
   */
  get items() {
    const { itemsContainer_: itemsContainer } = this;
    return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
  }

  /**
   * Return the item within the menu that is selected.
   * @param {number} index
   * @return {?Element}
   */
  getOptionByIndex(index) {
    const items = this.items;

    if (index < items.length) {
      return this.items[index];
    } else {
      return null;
    }
  }

  /** @param {number} index */
  set selectedItemIndex(index) {
    this.foundation_.setSelectedIndex(index);
  }

  /** @return {number} */
  get selectedItemIndex() {
    return this.foundation_.getSelectedIndex();
  }

  /** @param {!boolean} rememberSelection */
  set rememberSelection(rememberSelection) {
    this.foundation_.setRememberSelection(rememberSelection);
  }

  /** @param {boolean} quickOpen */
  set quickOpen(quickOpen) {
    this.foundation_.setQuickOpen(quickOpen);
  }

  /** @return {!MDCMenuFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCMenuFoundation */]({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      hasClass: className => this.root_.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.itemsContainer_),
      getAttributeForEventTarget: (target, attributeName) => target.getAttribute(attributeName),
      getInnerDimensions: () => {
        const { itemsContainer_: itemsContainer } = this;
        return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
      },
      hasAnchor: () => this.root_.parentElement && this.root_.parentElement.classList.contains('mdc-menu-anchor'),
      getAnchorDimensions: () => this.root_.parentElement.getBoundingClientRect(),
      getWindowDimensions: () => {
        return { width: window.innerWidth, height: window.innerHeight };
      },
      getNumberOfItems: () => this.items.length,
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      registerBodyClickHandler: handler => document.body.addEventListener('click', handler),
      deregisterBodyClickHandler: handler => document.body.removeEventListener('click', handler),
      getIndexForEventTarget: target => this.items.indexOf(target),
      notifySelected: evtData => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCMenuFoundation */].strings.SELECTED_EVENT, {
        index: evtData.index,
        item: this.items[evtData.index]
      }),
      notifyCancel: () => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCMenuFoundation */].strings.CANCEL_EVENT, {}),
      saveFocus: () => {
        this.previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        if (this.previousFocus_) {
          this.previousFocus_.focus();
        }
      },
      isFocused: () => document.activeElement === this.root_,
      focus: () => this.root_.focus(),
      getFocusedItemIndex: () => this.items.indexOf(document.activeElement),
      focusItemAtIndex: index => this.items[index].focus(),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: origin => {
        this.root_.style[`${Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getTransformPropertyName */])(window)}-origin`] = origin;
      },
      setPosition: position => {
        this.root_.style.left = 'left' in position ? position.left : null;
        this.root_.style.right = 'right' in position ? position.right : null;
        this.root_.style.top = 'top' in position ? position.top : null;
        this.root_.style.bottom = 'bottom' in position ? position.bottom : null;
      },
      setMaxHeight: height => {
        this.root_.style.maxHeight = height;
      },
      setAttrForOptionAtIndex: (index, attr, value) => this.items[index].setAttribute(attr, value),
      rmAttrForOptionAtIndex: (index, attr) => this.items[index].removeAttribute(attr),
      addClassForOptionAtIndex: (index, className) => this.items[index].classList.add(className),
      rmClassForOptionAtIndex: (index, className) => this.items[index].classList.remove(className)
    });
  }
}



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(26);
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
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize() /* ...args */{}
  // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.


  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
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
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
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
}

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTransformPropertyName; });
/* unused harmony export clamp */
/* unused harmony export bezierProgress */
/**
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

/** @type {string|undefined} */
let storedTransformPropertyName_;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj, forceRefresh = false) {
  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    const transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

/**
 * Clamps a value between the minimum and the maximum, returning the clamped value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Returns the easing value to apply at time t, for a given cubic bezier curve.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Parameters are as follows:
 * - time: The current time in the animation, scaled between 0 and 1.
 * - x1: The x value of control point P1.
 * - y1: The y value of control point P1.
 * - x2: The x value of control point P2.
 * - y2: The y value of control point P2.
 * @param {number} time
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

/**
 * Compute a single coordinate at a position point between 0 and 1.
 * c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} t
 * @param {number} c1
 * @param {number} c2
 * @return {number}
 */
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  let ic0 = t * c1;
  let ic1 = c1 + t * (c2 - c1);
  const ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

/**
 * Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} xVal
 * @param {number} x1
 * @param {number} x2
 * @return {number}
 */
function solvePositionFromXValue_(xVal, x1, x2) {
  const EPSILON = 1e-6;
  const MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  let t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  let tMin = 0;
  let tMax = 1;
  let value = 0;
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    const derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (let i = 0; Math.abs(value - xVal) > EPSILON && i < MAX_ITERATIONS; i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCMenuFoundation; });
/* unused harmony export AnchorMargin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(27);
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
 * @typedef {{
 *   top: number,
 *   right: number,
 *   bottom: number,
 *   left: number
 * }}
 */
let AnchorMargin;

/* eslint-disable no-unused-vars */
/**
 * @typedef {{
 *   viewport: { width: number, height: number },
 *   viewportDistance: {top: number, right: number, bottom: number, left: number},
 *   anchorHeight: number,
 *   anchorWidth: number,
 *   menuHeight: number,
 *   menuWidth: number,
 * }}
 */
let AutoLayoutMeasurements;
/* eslint-enable no-unused-vars */





/**
 * @extends {MDCFoundation<!MDCMenuAdapter>}
 */
class MDCMenuFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* cssClasses */];
  }

  /** @return enum{strings} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* strings */];
  }

  /** @return enum{numbers} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */];
  }

  /** @return enum{number} */
  static get Corner() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */];
  }

  /**
   * {@see MDCMenuAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCMenuAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCMenuAdapter} */{
        addClass: () => {},
        removeClass: () => {},
        hasClass: () => false,
        hasNecessaryDom: () => false,
        getAttributeForEventTarget: () => {},
        getInnerDimensions: () => ({}),
        hasAnchor: () => false,
        getAnchorDimensions: () => ({}),
        getWindowDimensions: () => ({}),
        getNumberOfItems: () => 0,
        registerInteractionHandler: () => {},
        deregisterInteractionHandler: () => {},
        registerBodyClickHandler: () => {},
        deregisterBodyClickHandler: () => {},
        getIndexForEventTarget: () => 0,
        notifySelected: () => {},
        notifyCancel: () => {},
        saveFocus: () => {},
        restoreFocus: () => {},
        isFocused: () => false,
        focus: () => {},
        getFocusedItemIndex: () => -1,
        focusItemAtIndex: () => {},
        isRtl: () => false,
        setTransformOrigin: () => {},
        setPosition: () => {},
        setMaxHeight: () => {},
        setAttrForOptionAtIndex: () => {},
        rmAttrForOptionAtIndex: () => {},
        addClassForOptionAtIndex: () => {},
        rmClassForOptionAtIndex: () => {}
      }
    );
  }

  /** @param {!MDCMenuAdapter} adapter */
  constructor(adapter) {
    super(Object.assign(MDCMenuFoundation.defaultAdapter, adapter));

    /** @private {function(!Event)} */
    this.clickHandler_ = evt => this.handlePossibleSelected_(evt);
    /** @private {function(!Event)} */
    this.keydownHandler_ = evt => this.handleKeyboardDown_(evt);
    /** @private {function(!Event)} */
    this.keyupHandler_ = evt => this.handleKeyboardUp_(evt);
    /** @private {function(!Event)} */
    this.documentClickHandler_ = evt => this.handleDocumentClick_(evt);
    /** @private {boolean} */
    this.isOpen_ = false;
    /** @private {number} */
    this.openAnimationEndTimerId_ = 0;
    /** @private {number} */
    this.closeAnimationEndTimerId_ = 0;
    /** @private {number} */
    this.selectedTriggerTimerId_ = 0;
    /** @private {number} */
    this.animationRequestId_ = 0;
    /** @private {!{ width: number, height: number }} */
    this.dimensions_;
    /** @private {number} */
    this.itemHeight_;
    /** @private {Corner} */
    this.anchorCorner_ = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */].TOP_START;
    /** @private {AnchorMargin} */
    this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
    /** @private {?AutoLayoutMeasurements} */
    this.measures_ = null;
    /** @private {number} */
    this.selectedIndex_ = -1;
    /** @private {boolean} */
    this.rememberSelection_ = false;
    /** @private {boolean} */
    this.quickOpen_ = false;

    // A keyup event on the menu needs to have a corresponding keydown
    // event on the menu. If the user opens the menu with a keydown event on a
    // button, the menu will only get the key up event causing buggy behavior with selected elements.
    /** @private {boolean} */
    this.keyDownWithinMenu_ = false;
  }

  init() {
    const { ROOT, OPEN } = MDCMenuFoundation.cssClasses;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(`${ROOT} class required in root element.`);
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error(`Required DOM nodes missing in ${ROOT} component.`);
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    }

    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
  }

  destroy() {
    clearTimeout(this.selectedTriggerTimerId_);
    clearTimeout(this.openAnimationEndTimerId_);
    clearTimeout(this.closeAnimationEndTimerId_);
    // Cancel any currently running animations.
    cancelAnimationFrame(this.animationRequestId_);
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
  }

  /**
   * @param {!Corner} corner Default anchor corner alignment of top-left menu corner.
   */
  setAnchorCorner(corner) {
    this.anchorCorner_ = corner;
  }

  /**
   * @param {!AnchorMargin} margin 4-plet of margins from anchor.
   */
  setAnchorMargin(margin) {
    this.anchorMargin_.top = typeof margin.top === 'number' ? margin.top : 0;
    this.anchorMargin_.right = typeof margin.right === 'number' ? margin.right : 0;
    this.anchorMargin_.bottom = typeof margin.bottom === 'number' ? margin.bottom : 0;
    this.anchorMargin_.left = typeof margin.left === 'number' ? margin.left : 0;
  }

  /** @param {boolean} rememberSelection */
  setRememberSelection(rememberSelection) {
    this.rememberSelection_ = rememberSelection;
    this.setSelectedIndex(-1);
  }

  /** @param {boolean} quickOpen */
  setQuickOpen(quickOpen) {
    this.quickOpen_ = quickOpen;
  }

  /**
   * @param {?number} focusIndex
   * @private
   */
  focusOnOpen_(focusIndex) {
    if (focusIndex === null) {
      // If this instance of MDCMenu remembers selections, and the user has
      // made a selection, then focus the last selected item
      if (this.rememberSelection_ && this.selectedIndex_ >= 0) {
        this.adapter_.focusItemAtIndex(this.selectedIndex_);
        return;
      }

      this.adapter_.focus();
      // If that doesn't work, focus first item instead.
      if (!this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      }
    } else {
      this.adapter_.focusItemAtIndex(focusIndex);
    }
  }

  /**
   * Handle clicks and cancel the menu if not a child list-item
   * @param {!Event} evt
   * @private
   */
  handleDocumentClick_(evt) {
    let el = evt.target;

    while (el && el !== document.documentElement) {
      if (this.adapter_.getIndexForEventTarget(el) !== -1) {
        return;
      }
      el = el.parentNode;
    }

    this.adapter_.notifyCancel();
    this.close(evt);
  }

  /**
   * Handle keys that we want to repeat on hold (tab and arrows).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */
  handleKeyboardDown_(evt) {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    const { keyCode, key, shiftKey } = evt;
    const isTab = key === 'Tab' || keyCode === 9;
    const isArrowUp = key === 'ArrowUp' || keyCode === 38;
    const isArrowDown = key === 'ArrowDown' || keyCode === 40;
    const isSpace = key === 'Space' || keyCode === 32;
    const isEnter = key === 'Enter' || keyCode === 13;
    // The menu needs to know if the keydown event was triggered on the menu
    this.keyDownWithinMenu_ = isEnter || isSpace;

    const focusedItemIndex = this.adapter_.getFocusedItemIndex();
    const lastItemIndex = this.adapter_.getNumberOfItems() - 1;

    if (shiftKey && isTab && focusedItemIndex === 0) {
      this.adapter_.focusItemAtIndex(lastItemIndex);
      evt.preventDefault();
      return false;
    }

    if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
      this.adapter_.focusItemAtIndex(0);
      evt.preventDefault();
      return false;
    }

    // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
    if (isArrowUp || isArrowDown || isSpace) {
      evt.preventDefault();
    }

    if (isArrowUp) {
      if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
      } else {
        this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
      }
    } else if (isArrowDown) {
      if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      } else {
        this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
      }
    }

    return true;
  }

  /**
   * Handle keys that we don't want to repeat on hold (Enter, Space, Escape).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */
  handleKeyboardUp_(evt) {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    const { keyCode, key } = evt;
    const isEnter = key === 'Enter' || keyCode === 13;
    const isSpace = key === 'Space' || keyCode === 32;
    const isEscape = key === 'Escape' || keyCode === 27;

    if (isEnter || isSpace) {
      // If the keydown event didn't occur on the menu, then it should
      // disregard the possible selected event.
      if (this.keyDownWithinMenu_) {
        this.handlePossibleSelected_(evt);
      }
      this.keyDownWithinMenu_ = false;
    }

    if (isEscape) {
      this.adapter_.notifyCancel();
      this.close();
    }

    return true;
  }

  /**
   * @param {!Event} evt
   * @private
   */
  handlePossibleSelected_(evt) {
    if (this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* strings */].ARIA_DISABLED_ATTR) === 'true') {
      return;
    }
    const targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
    if (targetIndex < 0) {
      return;
    }
    // Debounce multiple selections
    if (this.selectedTriggerTimerId_) {
      return;
    }
    this.selectedTriggerTimerId_ = setTimeout(() => {
      this.selectedTriggerTimerId_ = 0;
      this.close();
      if (this.rememberSelection_) {
        this.setSelectedIndex(targetIndex);
      }
      this.adapter_.notifySelected({ index: targetIndex });
    }, __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].SELECTED_TRIGGER_DELAY);
  }

  /**
   * @return {AutoLayoutMeasurements} Measurements used to position menu popup.
   */
  getAutoLayoutMeasurements_() {
    const anchorRect = this.adapter_.getAnchorDimensions();
    const viewport = this.adapter_.getWindowDimensions();

    return {
      viewport: viewport,
      viewportDistance: {
        top: anchorRect.top,
        right: viewport.width - anchorRect.right,
        left: anchorRect.left,
        bottom: viewport.height - anchorRect.bottom
      },
      anchorHeight: anchorRect.height,
      anchorWidth: anchorRect.width,
      menuHeight: this.dimensions_.height,
      menuWidth: this.dimensions_.width
    };
  }

  /**
   * Computes the corner of the anchor from which to animate and position the menu.
   * @return {Corner}
   * @private
   */
  getOriginCorner_() {
    // Defaults: open from the top left.
    let corner = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */].TOP_LEFT;

    const { viewportDistance, anchorHeight, anchorWidth, menuHeight, menuWidth } = this.measures_;
    const isBottomAligned = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
    const availableTop = isBottomAligned ? viewportDistance.top + anchorHeight + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
    const availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorHeight - this.anchorMargin_.top;

    const topOverflow = menuHeight - availableTop;
    const bottomOverflow = menuHeight - availableBottom;
    if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
      corner |= __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM;
    }

    const isRtl = this.adapter_.isRtl();
    const isFlipRtl = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].FLIP_RTL);
    const avoidHorizontalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);
    const isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
    const availableLeft = isAlignedRight ? viewportDistance.left + anchorWidth + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
    const availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorWidth - this.anchorMargin_.left;

    const leftOverflow = menuWidth - availableLeft;
    const rightOverflow = menuWidth - availableRight;

    if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
      corner |= __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT;
    }

    return corner;
  }

  /**
   * @param {Corner} corner Origin corner of the menu.
   * @return {number} Horizontal offset of menu origin corner from corresponding anchor corner.
   * @private
   */
  getHorizontalOriginOffset_(corner) {
    const { anchorWidth } = this.measures_;
    const isRightAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);
    const avoidHorizontalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);
    let x = 0;
    if (isRightAligned) {
      const rightOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.left : this.anchorMargin_.right;
      x = rightOffset;
    } else {
      const leftOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.right : this.anchorMargin_.left;
      x = leftOffset;
    }
    return x;
  }

  /**
   * @param {Corner} corner Origin corner of the menu.
   * @return {number} Vertical offset of menu origin corner from corresponding anchor corner.
   * @private
   */
  getVerticalOriginOffset_(corner) {
    const { viewport, viewportDistance, anchorHeight, menuHeight } = this.measures_;
    const isBottomAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
    const { MARGIN_TO_EDGE } = MDCMenuFoundation.numbers;
    const avoidVerticalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
    const canOverlapVertically = !avoidVerticalOverlap;
    let y = 0;

    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorHeight - this.anchorMargin_.top : -this.anchorMargin_.bottom;
      // adjust for when menu can overlap anchor, but too tall to be aligned to bottom
      // anchor corner. Bottom margin is ignored in such cases.
      if (canOverlapVertically && menuHeight > viewportDistance.top + anchorHeight) {
        y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.top + anchorHeight));
      }
    } else {
      y = avoidVerticalOverlap ? anchorHeight + this.anchorMargin_.bottom : this.anchorMargin_.top;
      // adjust for when menu can overlap anchor, but too tall to be aligned to top
      // anchor corners. Top margin is ignored in that case.
      if (canOverlapVertically && menuHeight > viewportDistance.bottom + anchorHeight) {
        y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.bottom + anchorHeight));
      }
    }
    return y;
  }

  /**
   * @param {Corner} corner Origin corner of the menu.
   * @return {number} Maximum height of the menu, based on available space. 0 indicates should not be set.
   * @private
   */
  getMenuMaxHeight_(corner) {
    let maxHeight = 0;
    const { viewportDistance } = this.measures_;
    const isBottomAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);

    // When maximum height is not specified, it is handled from css.
    if (this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM) {
      if (isBottomAligned) {
        maxHeight = viewportDistance.top + this.anchorMargin_.top;
      } else {
        maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom;
      }
    }

    return maxHeight;
  }

  /** @private */
  autoPosition_() {
    if (!this.adapter_.hasAnchor()) {
      return;
    }

    // Compute measurements for autoposition methods reuse.
    this.measures_ = this.getAutoLayoutMeasurements_();

    const corner = this.getOriginCorner_();
    const maxMenuHeight = this.getMenuMaxHeight_(corner);
    let verticalAlignment = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM ? 'bottom' : 'top';
    let horizontalAlignment = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT ? 'right' : 'left';
    const horizontalOffset = this.getHorizontalOriginOffset_(corner);
    const verticalOffset = this.getVerticalOriginOffset_(corner);
    const position = {
      [horizontalAlignment]: horizontalOffset ? horizontalOffset + 'px' : '0',
      [verticalAlignment]: verticalOffset ? verticalOffset + 'px' : '0'
    };
    const { anchorWidth, menuHeight, menuWidth } = this.measures_;
    // Center align when anchor width is comparable or greater than menu, otherwise keep corner.
    if (anchorWidth / menuWidth > __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].ANCHOR_TO_MENU_WIDTH_RATIO) {
      horizontalAlignment = 'center';
    }

    // Adjust vertical origin when menu is positioned with significant offset from anchor. This is done so that
    // scale animation is "anchored" on the anchor.
    if (!(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM) && Math.abs(verticalOffset / menuHeight) > __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].OFFSET_TO_MENU_HEIGHT_RATIO) {
      const verticalOffsetPercent = Math.abs(verticalOffset / menuHeight) * 100;
      const originPercent = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM ? 100 - verticalOffsetPercent : verticalOffsetPercent;
      verticalAlignment = Math.round(originPercent * 100) / 100 + '%';
    }

    this.adapter_.setTransformOrigin(`${horizontalAlignment} ${verticalAlignment}`);
    this.adapter_.setPosition(position);
    this.adapter_.setMaxHeight(maxMenuHeight ? maxMenuHeight + 'px' : '');

    // Clear measures after positioning is complete.
    this.measures_ = null;
  }

  /**
   * Open the menu.
   * @param {{focusIndex: ?number}=} options
   */
  open({ focusIndex = null } = {}) {
    this.adapter_.saveFocus();

    if (!this.quickOpen_) {
      this.adapter_.addClass(MDCMenuFoundation.cssClasses.ANIMATING_OPEN);
    }

    this.animationRequestId_ = requestAnimationFrame(() => {
      this.dimensions_ = this.adapter_.getInnerDimensions();
      this.autoPosition_();
      this.adapter_.addClass(MDCMenuFoundation.cssClasses.OPEN);
      this.focusOnOpen_(focusIndex);
      this.adapter_.registerBodyClickHandler(this.documentClickHandler_);
      if (!this.quickOpen_) {
        this.openAnimationEndTimerId_ = setTimeout(() => {
          this.openAnimationEndTimerId_ = 0;
          this.adapter_.removeClass(MDCMenuFoundation.cssClasses.ANIMATING_OPEN);
        }, __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].TRANSITION_OPEN_DURATION);
      }
    });
    this.isOpen_ = true;
  }

  /**
   * Closes the menu.
   * @param {Event=} evt
   */
  close(evt = null) {
    const targetIsDisabled = evt ? this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* strings */].ARIA_DISABLED_ATTR) === 'true' : false;

    if (targetIsDisabled) {
      return;
    }

    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);

    if (!this.quickOpen_) {
      this.adapter_.addClass(MDCMenuFoundation.cssClasses.ANIMATING_CLOSED);
    }

    requestAnimationFrame(() => {
      this.adapter_.removeClass(MDCMenuFoundation.cssClasses.OPEN);
      if (!this.quickOpen_) {
        this.closeAnimationEndTimerId_ = setTimeout(() => {
          this.closeAnimationEndTimerId_ = 0;
          this.adapter_.removeClass(MDCMenuFoundation.cssClasses.ANIMATING_CLOSED);
        }, __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].TRANSITION_CLOSE_DURATION);
      }
    });
    this.isOpen_ = false;
    this.adapter_.restoreFocus();
  }

  /** @return {boolean} */
  isOpen() {
    return this.isOpen_;
  }

  /** @return {number} */
  getSelectedIndex() {
    return this.selectedIndex_;
  }

  /**
   * @param {number} index Index of the item to set as selected.
   */
  setSelectedIndex(index) {
    if (index === this.selectedIndex_) {
      return;
    }

    const prevSelectedIndex = this.selectedIndex_;
    if (prevSelectedIndex >= 0) {
      this.adapter_.rmAttrForOptionAtIndex(prevSelectedIndex, 'aria-selected');
      this.adapter_.rmClassForOptionAtIndex(prevSelectedIndex, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* cssClasses */].SELECTED_LIST_ITEM);
    }

    this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfItems() ? index : -1;
    if (this.selectedIndex_ >= 0) {
      this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
      this.adapter_.addClassForOptionAtIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* cssClasses */].SELECTED_LIST_ITEM);
    }
  }
}



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCMenuAdapter */
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
 * Adapter for MDC Menu. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
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
class MDCMenuAdapter {
  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /**
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /** @return {boolean} */
  hasNecessaryDom() {}

  /**
   * @param {EventTarget} target
   * @param {string} attributeName
   * @return {string}
   */
  getAttributeForEventTarget(target, attributeName) {}

  /** @return {{ width: number, height: number }} */
  getInnerDimensions() {}

  /** @return {boolean} */
  hasAnchor() {}

  /** @return {{width: number, height: number, top: number, right: number, bottom: number, left: number}} */
  getAnchorDimensions() {}

  /** @return {{ width: number, height: number }} */
  getWindowDimensions() {}

  /** @return {number} */
  getNumberOfItems() {}

  /**
   * @param {string} type
   * @param {function(!Event)} handler
   */
  registerInteractionHandler(type, handler) {}

  /**
   * @param {string} type
   * @param {function(!Event)} handler
   */
  deregisterInteractionHandler(type, handler) {}

  /** @param {function(!Event)} handler */
  registerBodyClickHandler(handler) {}

  /** @param {function(!Event)} handler */
  deregisterBodyClickHandler(handler) {}

  /**
   * @param {EventTarget} target
   * @return {number}
   */
  getIndexForEventTarget(target) {}

  /** @param {{index: number}} evtData */
  notifySelected(evtData) {}

  notifyCancel() {}

  saveFocus() {}

  restoreFocus() {}

  /** @return {boolean} */
  isFocused() {}

  focus() {}

  /** @return {number} */
  getFocusedItemIndex() /* number */{}

  /** @param {number} index */
  focusItemAtIndex(index) {}

  /** @return {boolean} */
  isRtl() {}

  /** @param {string} origin */
  setTransformOrigin(origin) {}

  /** @param {{
  *   top: (string|undefined),
  *   right: (string|undefined),
  *   bottom: (string|undefined),
  *   left: (string|undefined)
  * }} position */
  setPosition(position) {}

  /** @param {string} height */
  setMaxHeight(height) {}

  /**
   * @param {number} index
   * @param {string} attr
   * @param {string} value
   */
  setAttrForOptionAtIndex(index, attr, value) {}

  /**
   * @param {number} index
   * @param {string} attr
   */
  rmAttrForOptionAtIndex(index, attr) {}

  /**
   * @param {number} index
   * @param {string} className
   */
  addClassForOptionAtIndex(index, className) {}

  /**
   * @param {number} index
   * @param {string} className
   */
  rmClassForOptionAtIndex(index, className) {}
}



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initSelects;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_select__ = __webpack_require__(75);


function initSelects() {
    console.log('\tSelects');
    var components = document.querySelectorAll('.mdc-select');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.mdcComponent) {
            component.mdcComponent = __WEBPACK_IMPORTED_MODULE_0__material_select__["a" /* MDCSelect */].attachTo(component);
        }
    }
}

// mdc.select.MDCSelect.attachTo(document.getElementById('hero-js-select'));
//        mdc.select.MDCSelect.attachTo(document.getElementById('js-pre-selected'));
//        mdc.select.MDCSelect.attachTo(document.getElementById('optgroup-js-select'));
//
//        var root = document.getElementById('js-select');
//        var nativeSelect = root.querySelector('.mdc-select__native-control');
//        var boxCurrentlySelected = document.getElementById('currently-selected');
//        var select = new mdc.select.MDCSelect(root);
//        var boxDemoWrapper = document.getElementById('demo-wrapper');
//        var rtlCb = document.getElementById('rtl');
//        var alternateColorsCb = document.getElementById('alternate-colors');
//        var disabledCb = document.getElementById('disabled');
//        var setSelectedButton = document.getElementById('set-selected-index-zero-button');
//        var setValueMeatButton = document.getElementById('set-value-meat-button');
//        function updateSelectedTextContent() {
//          var item = nativeSelect.selectedOptions[0];
//          var index = nativeSelect.selectedIndex;
//          if (item) {
//            boxCurrentlySelected.textContent = '"' + item.textContent + '" at index ' + index +
//              ' with value "' + nativeSelect.value + '"';
//          }
//        }
//        root.addEventListener('change', function() {
//          updateSelectedTextContent();
//        });
//        rtlCb.addEventListener('change', function() {
//          if (rtlCb.checked) {
//            boxDemoWrapper.setAttribute('dir', 'rtl');
//          } else {
//            boxDemoWrapper.removeAttribute('dir');
//          }
//        });
//        alternateColorsCb.addEventListener('change', function() {
//          root.classList[alternateColorsCb.checked ? 'add' : 'remove']('demo-select-custom-colors');
//        });
//        disabledCb.addEventListener('change', function() {
//          select.disabled = disabledCb.checked;
//        });
//        setSelectedButton.addEventListener('click', function() {
//          select.selectedIndex = 0;
//          updateSelectedTextContent();
//        });
//        setValueMeatButton.addEventListener('click', function() {
//          select.value = 'meat';
//          updateSelectedTextContent();
//        });

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bottom_line_index__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__label_index__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(31);
/* unused harmony reexport MDCSelectFoundation */
/**
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











class MDCSelect extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCSelect(root);
  }

  get value() {
    return this.nativeControl_.value;
  }

  set value(value) {
    this.foundation_.setValue(value);
  }

  get selectedIndex() {
    return this.nativeControl_.selectedIndex;
  }

  set selectedIndex(selectedIndex) {
    this.foundation_.setSelectedIndex(selectedIndex);
  }

  get disabled() {
    return this.nativeControl_.disabled;
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  initialize(labelFactory = el => new __WEBPACK_IMPORTED_MODULE_3__label_index__["a" /* MDCSelectLabel */](el), bottomLineFactory = el => new __WEBPACK_IMPORTED_MODULE_2__bottom_line_index__["a" /* MDCSelectBottomLine */](el)) {
    this.nativeControl_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_5__constants__["c" /* strings */].NATIVE_CONTROL_SELECTOR);
    const labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_5__constants__["c" /* strings */].LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    const bottomLineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_5__constants__["c" /* strings */].BOTTOM_LINE_SELECTOR);
    if (bottomLineElement) {
      this.bottomLine_ = bottomLineFactory(bottomLineElement);
    }

    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* cssClasses */].BOX)) {
      this.ripple = this.initRipple_();
    }
  }

  initRipple_() {
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */].createAdapter(this), {
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler)
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */](this.root_, foundation);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */]({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      floatLabel: value => {
        if (this.label_) {
          this.label_.float(value);
        }
      },
      activateBottomLine: () => {
        if (this.bottomLine_) {
          this.bottomLine_.activate();
        }
      },
      deactivateBottomLine: () => {
        if (this.bottomLine_) {
          this.bottomLine_.deactivate();
        }
      },
      setDisabled: disabled => this.nativeControl_.disabled = disabled,
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler),
      getSelectedIndex: () => this.nativeControl_.selectedIndex,
      setSelectedIndex: index => this.nativeControl_.selectedIndex = index,
      getValue: () => this.nativeControl_.value,
      setValue: value => this.nativeControl_.value = value
    });
  }

  initialSyncWithDOM() {
    // needed to sync floating label
    this.selectedIndex = this.nativeControl_.selectedIndex;

    if (this.nativeControl_.disabled) {
      this.disabled = true;
    }
  }

  destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    super.destroy();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSelect;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSelectBottomLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(77);
/* unused harmony reexport MDCSelectBottomLineFoundation */
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
 * @extends {MDCComponent<!MDCSelectBottomLineFoundation>}
 * @final
 */
class MDCSelectBottomLine extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCSelectBottomLine}
   */
  static attachTo(root) {
    return new MDCSelectBottomLine(root);
  }

  /**
   * Activates the bottom line active class
   */
  activate() {
    this.foundation_.activate();
  }

  /**
   * Deactivates the bottom line active class
   */
  deactivate() {
    this.foundation_.deactivate();
  }

  /**
   * @return {!MDCSelectBottomLineFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className)
    });
  }
}



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(78);
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
 * @extends {MDCFoundation<!MDCSelectBottomLineAdapter>}
 * @final
 */
class MDCSelectBottomLineFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCSelectBottomLineAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCSelectBottomLineAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCSelectBottomLineAdapter} */{
        addClass: () => {},
        removeClass: () => {}
      }
    );
  }

  /**
   * Adds the active class to bottom line
   */
  activate() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].BOTTOM_LINE_ACTIVE);
  }

  /**
   * Removes the active class from the bottom line
   */
  deactivate() {
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].BOTTOM_LINE_ACTIVE);
  }

  /**
   * @param {!MDCSelectBottomLineAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCSelectBottomLineFoundation.defaultAdapter, adapter));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCSelectBottomLineFoundation);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
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

const cssClasses = {
  BOTTOM_LINE_ACTIVE: 'mdc-select__bottom-line--active'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSelectLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(80);
/* unused harmony reexport MDCSelectLabelFoundation */
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
 * @extends {MDCComponent<!MDCSelectLabelFoundation>}
 * @final
 */
class MDCSelectLabel extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCSelectLabel}
   */
  static attachTo(root) {
    return new MDCSelectLabel(root);
  }

  /**
   * Styles the label to float or defloat as necessary.
   * @param {string} value The value of the input.
   */
  float(value) {
    this.foundation_.styleFloat(value);
  }

  /**
   * @return {!MDCSelectLabelFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className)
    });
  }
}



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(81);
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
 * @extends {MDCFoundation<!MDCSelectLabelAdapter>}
 * @final
 */
class MDCSelectLabelFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCSelectLabelAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCSelectLabelAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCSelectLabelAdapter} */{
        addClass: () => {},
        removeClass: () => {},
        getWidth: () => {}
      }
    );
  }

  /**
   * @param {!MDCSelectLabelAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCSelectLabelFoundation.defaultAdapter, adapter));
  }

  /**
   * Styles the label to float or defloat as necessary.
   * @param {string} value The value of the input.
   */
  styleFloat(value) {
    const { LABEL_FLOAT_ABOVE } = MDCSelectLabelFoundation.cssClasses;
    if (!!value) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCSelectLabelFoundation);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-select__label--float-above'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(31);
/**
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




class MDCSelectFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: () => /* className: string */{},
      removeClass: () => /* className: string */{},
      floatLabel: () => /* value: boolean */{},
      activateBottomLine: () => {},
      deactivateBottomLine: () => {},
      registerInteractionHandler: () => /* type: string, handler: EventListener */{},
      deregisterInteractionHandler: () => /* type: string, handler: EventListener */{},
      getSelectedIndex: () => /* number */-1,
      setSelectedIndex: () => /* index: number */{},
      setDisabled: () => /* disabled: boolean */{},
      getValue: () => /* string */'',
      setValue: () => /* value: string */{}
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCSelectFoundation.defaultAdapter, adapter));

    this.focusHandler_ = evt => this.handleFocus_(evt);
    this.blurHandler_ = evt => this.handleBlur_(evt);
    this.selectionHandler_ = evt => this.handleSelect_(evt);
  }

  init() {
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    this.adapter_.registerInteractionHandler('change', this.selectionHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    this.adapter_.deregisterInteractionHandler('change', this.selectionHandler_);
  }

  setSelectedIndex(index) {
    const { IS_CHANGING } = MDCSelectFoundation.cssClasses;
    const { FLOAT_NATIVE_CONTROL_TRANSITION_TIME_MS } = MDCSelectFoundation.numbers;

    this.adapter_.setSelectedIndex(index);
    this.adapter_.addClass(IS_CHANGING);
    const optionHasValue = this.adapter_.getValue().length > 0;

    this.adapter_.floatLabel(optionHasValue);

    setTimeout(() => {
      this.adapter_.removeClass(IS_CHANGING);
    }, FLOAT_NATIVE_CONTROL_TRANSITION_TIME_MS);
  }

  setValue(value) {
    this.adapter_.setValue(value);
    this.setSelectedIndex(this.adapter_.getSelectedIndex());
  }

  setDisabled(disabled) {
    const { DISABLED } = MDCSelectFoundation.cssClasses;
    this.adapter_.setDisabled(disabled);
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }

  handleFocus_() {
    this.adapter_.activateBottomLine();
  }

  handleBlur_() {
    this.adapter_.deactivateBottomLine();
  }

  handleSelect_() {
    this.setSelectedIndex(this.adapter_.getSelectedIndex());
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSelectFoundation;


/***/ })
/******/ ]);