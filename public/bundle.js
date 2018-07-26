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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(7);
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
class VBaseComponent {
    constructor(element) {
        this.element = element;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VBaseComponent;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventHandlerMixin; });
let eventHandlerMixin = Base => class extends Base {
    // idempotent event handling initialization
    initEventListener(eventName, eventHandler) {
        if (typeof this.eventsHandler === 'undefined') {
            this.eventsHandler = {};
        }
        if (!this.eventsHandler[eventName]) {
            // Delegate to the component if possible
            this.eventsHandler[eventName] = eventHandler;
            this.element.addEventListener(eventName, eventHandler);
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCSelectionControlState */
/* unused harmony export MDCSelectionControl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_ripple_index__ = __webpack_require__(2);
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

/* eslint-enable no-unused-vars */

/**
 * @typedef {{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
let MDCSelectionControlState;

/**
 * @record
 */
class MDCSelectionControl {
  /** @return {?MDCRipple} */
  get ripple() {}
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initSnackbar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_snackbar__ = __webpack_require__(68);


// This class displays a page level message
class VSnackbar {
    constructor(element, snackbar) {
        this.element = element;
        this.snackbar = snackbar;
    }

    display(message) {
        const dataObj = {
            message: message
            // actionText: 'Undo',
            // actionHandler: function () {
            //   console.log('my undo function');
            // }
        };
        this.snackbar.show(dataObj);
    }
}
/* unused harmony export VSnackbar */


function initSnackbar() {
    console.log('\tSnackbar');
    var components = document.querySelectorAll('.mdc-snackbar');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            let vSnackbar = new VSnackbar(component, __WEBPACK_IMPORTED_MODULE_0__material_snackbar__["a" /* MDCSnackbar */].attachTo(component));
            component.vComponent = vSnackbar;
        }
    }
}

/***/ }),
/* 7 */
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
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_urls__ = __webpack_require__(29);



class VBase extends __WEBPACK_IMPORTED_MODULE_1__utils_urls__["a" /* VUrls */] {
    constructor(options) {
        super();
        this.options = options;
    }

    clearErrors() {
        new __WEBPACK_IMPORTED_MODULE_0__errors__["a" /* VErrors */]().clearErrors();
    }

    parentElement() {
        return document.getElementById(this.options.__parent_id__);
    }

    inputValues(form) {
        let params = [];
        // Let input component push parameters
        let vComp = this.component();
        if (vComp) {
            vComp.prepareSubmit(form, params);
        }
        return params;
    }

    component() {
        let parent = this.parentElement();
        return parent ? parent.vComponent : null;
    }

    validate() {
        let errors = [];
        let comp = this.component();
        if (comp) {
            errors = comp.validate();
        }
        return errors;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VBase;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datetime__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_fields__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lists__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon_toggles__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menus__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selects__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chips__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cards__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__snackbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkboxes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__switches__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__steppers__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__radios__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sliders__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__hidden_fields__ = __webpack_require__(115);




















function initialize() {
    console.log('Initializing');
    Object(__WEBPACK_IMPORTED_MODULE_0__button__["a" /* initButtons */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__dialogs__["a" /* initDialogs */])();
    Object(__WEBPACK_IMPORTED_MODULE_2__datetime__["a" /* initDateTime */])(); // MUST BE BEFORE initTextFields
    Object(__WEBPACK_IMPORTED_MODULE_3__text_fields__["b" /* initTextFields */])();
    Object(__WEBPACK_IMPORTED_MODULE_5__lists__["a" /* initLists */])();
    Object(__WEBPACK_IMPORTED_MODULE_6__icon_toggles__["a" /* initIconToggles */])();
    Object(__WEBPACK_IMPORTED_MODULE_7__menus__["a" /* initMenus */])();
    Object(__WEBPACK_IMPORTED_MODULE_8__selects__["a" /* initSelects */])();
    Object(__WEBPACK_IMPORTED_MODULE_9__chips__["a" /* initChips */])();
    Object(__WEBPACK_IMPORTED_MODULE_10__cards__["a" /* initCards */])();
    Object(__WEBPACK_IMPORTED_MODULE_11__forms__["a" /* initForms */])();
    Object(__WEBPACK_IMPORTED_MODULE_12__snackbar__["a" /* initSnackbar */])();
    Object(__WEBPACK_IMPORTED_MODULE_13__checkboxes__["a" /* initCheckboxes */])();
    Object(__WEBPACK_IMPORTED_MODULE_14__switches__["a" /* initSwitches */])();
    Object(__WEBPACK_IMPORTED_MODULE_15__steppers__["a" /* initSteppers */])();
    Object(__WEBPACK_IMPORTED_MODULE_16__radios__["a" /* initRadios */])();
    Object(__WEBPACK_IMPORTED_MODULE_17__sliders__["a" /* initSliders */])();
    Object(__WEBPACK_IMPORTED_MODULE_18__hidden_fields__["a" /* initHiddenFields */])();
    // This needs to be last, because it relies on the components installed above.
    Object(__WEBPACK_IMPORTED_MODULE_4__events__["a" /* initEvents */])();
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_text_index__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icon_index__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_floating_label_index__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_notched_outline_index__ = __webpack_require__(26);
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
    this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].INPUT_SELECTOR);
    const labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    const lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].LINE_RIPPLE_SELECTOR);
    if (lineRippleElement) {
      this.lineRipple_ = lineRippleFactory(lineRippleElement);
    }
    const outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].OUTLINE_SELECTOR);
    if (outlineElement) {
      this.outline_ = outlineFactory(outlineElement);
    }
    if (this.input_.hasAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].ARIA_CONTROLS)) {
      const helperTextElement = document.getElementById(this.input_.getAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].ARIA_CONTROLS));
      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }
    const iconElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].ICON_SELECTOR);
    if (iconElement) {
      this.icon_ = iconFactory(iconElement);
    }

    this.ripple = null;
    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* cssClasses */].BOX)) {
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
   * Sets the aria label of the icon.
   * @param {string} label
   */
  set iconAriaLabel(label) {
    this.foundation_.setIconAriaLabel(label);
  }

  /**
   * Sets the text content of the icon.
   * @param {string} content
   */
  set iconContent(content) {
    this.foundation_.setIconContent(content);
  }

  /**
   * Recomputes the outline SVG path for the outline element.
   */
  layout() {
    const openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
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
        const getAttributesList = mutationsList => mutationsList.map(mutation => mutation.attributeName);
        const observer = new MutationObserver(mutationsList => handler(getAttributesList(mutationsList)));
        const targetNode = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].INPUT_SELECTOR);
        const config = { attributes: true };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: observer => observer.disconnect(),
      isFocused: () => {
        return document.activeElement === this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].INPUT_SELECTOR);
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
   *   setLineRippleTransformOrigin: function(number): undefined,
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(55);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(56);
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
        getAttr: () => {},
        setAttr: () => {},
        removeAttr: () => {},
        setContent: () => {},
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

    /** @private {string?} */
    this.savedTabIndex_ = null;

    /** @private {function(!Event): undefined} */
    this.interactionHandler_ = evt => this.handleInteraction(evt);
  }

  init() {
    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

    ['click', 'keydown'].forEach(evtType => {
      this.adapter_.registerInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  destroy() {
    ['click', 'keydown'].forEach(evtType => {
      this.adapter_.deregisterInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].ICON_ROLE);
    }
  }

  /** @param {string} label */
  setAriaLabel(label) {
    this.adapter_.setAttr('aria-label', label);
  }

  /** @param {string} content */
  setContent(content) {
    this.adapter_.setContent(content);
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transformStyleProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCorrectEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCorrectPropertyName; });
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
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
let VendorPropertyMapType;

/** @const {Object<string, !VendorPropertyMapType>} */
const eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
const cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  const map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  const el = windowObj['document']['createElement']('div');
  let eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

const transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCChipFoundation; });
/* unused harmony export MDCChipInteractionEventType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(36);
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
 * @extends {MDCFoundation<!MDCChipAdapter>}
 * @final
 */
class MDCChipFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCChipAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCChipAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCChipAdapter} */{
        addClass: () => {},
        removeClass: () => {},
        hasClass: () => {},
        addClassToLeadingIcon: () => {},
        removeClassFromLeadingIcon: () => {},
        eventTargetHasClass: () => {},
        registerEventHandler: () => {},
        deregisterEventHandler: () => {},
        registerTrailingIconInteractionHandler: () => {},
        deregisterTrailingIconInteractionHandler: () => {},
        notifyInteraction: () => {},
        notifyTrailingIconInteraction: () => {},
        notifyRemoval: () => {},
        getComputedStyleValue: () => {},
        setStyleProperty: () => {}
      }
    );
  }

  /**
   * @param {!MDCChipAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCChipFoundation.defaultAdapter, adapter));

    /**
     * Whether a trailing icon click should immediately trigger exit/removal of the chip.
     * @private {boolean}
     * */
    this.shouldRemoveOnTrailingIconClick_ = true;
    /** @private {function(!Event): undefined} */
    this.interactionHandler_ = evt => this.handleInteraction(evt);
    /** @private {function(!Event): undefined} */
    this.transitionEndHandler_ = evt => this.handleTransitionEnd(evt);
    /** @private {function(!Event): undefined} */
    this.trailingIconInteractionHandler_ = evt => this.handleTrailingIconInteraction(evt);
  }

  init() {
    ['click', 'keydown'].forEach(evtType => {
      this.adapter_.registerEventHandler(evtType, this.interactionHandler_);
    });
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    ['click', 'keydown', 'touchstart', 'pointerdown', 'mousedown'].forEach(evtType => {
      this.adapter_.registerTrailingIconInteractionHandler(evtType, this.trailingIconInteractionHandler_);
    });
  }

  destroy() {
    ['click', 'keydown'].forEach(evtType => {
      this.adapter_.deregisterEventHandler(evtType, this.interactionHandler_);
    });
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    ['click', 'keydown', 'touchstart', 'pointerdown', 'mousedown'].forEach(evtType => {
      this.adapter_.deregisterTrailingIconInteractionHandler(evtType, this.trailingIconInteractionHandler_);
    });
  }

  /**
   * @return {boolean}
   */
  isSelected() {
    return this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED);
  }

  /**
   * @param {boolean} selected
   */
  setSelected(selected) {
    if (selected) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED);
    }
  }

  /**
   * @return {boolean}
   */
  getShouldRemoveOnTrailingIconClick() {
    return this.shouldRemoveOnTrailingIconClick_;
  }

  /**
   * @param {boolean} shouldRemove
   */
  setShouldRemoveOnTrailingIconClick(shouldRemove) {
    this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
  }

  /**
   * Begins the exit animation which leads to removal of the chip.
   */
  beginExit() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CHIP_EXIT);
  }

  /**
   * Handles an interaction event on the root element.
   * @param {!Event} evt
   */
  handleInteraction(evt) {
    if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
      this.adapter_.notifyInteraction();
    }
  }

  /**
   * Handles a transition end event on the root element.
   * @param {!Event} evt
   */
  handleTransitionEnd(evt) {
    // Handle transition end event on the chip when it is about to be removed.
    if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CHIP_EXIT)) {
      if (evt.propertyName === 'width') {
        this.adapter_.notifyRemoval();
      } else if (evt.propertyName === 'opacity') {
        // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
        const chipWidth = this.adapter_.getComputedStyleValue('width');

        // On the next frame (once we get the computed width), explicitly set the chip's width
        // to its current pixel width, so we aren't transitioning out of 'auto'.
        requestAnimationFrame(() => {
          this.adapter_.setStyleProperty('width', chipWidth);

          // To mitigate jitter, start transitioning padding and margin before width.
          this.adapter_.setStyleProperty('padding', '0');
          this.adapter_.setStyleProperty('margin', '0');

          // On the next frame (once width is explicitly set), transition width to 0.
          requestAnimationFrame(() => {
            this.adapter_.setStyleProperty('width', '0');
          });
        });
      }
      return;
    }

    // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
    if (evt.propertyName !== 'opacity') {
      return;
    }
    if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LEADING_ICON) && this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED)) {
      this.adapter_.addClassToLeadingIcon(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HIDDEN_LEADING_ICON);
    } else if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CHECKMARK) && !this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED)) {
      this.adapter_.removeClassFromLeadingIcon(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HIDDEN_LEADING_ICON);
    }
  }

  /**
   * Handles an interaction event on the trailing icon element. This is used to
   * prevent the ripple from activating on interaction with the trailing icon.
   * @param {!Event} evt
   */
  handleTrailingIconInteraction(evt) {
    evt.stopPropagation();
    if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
      this.adapter_.notifyTrailingIconInteraction();
      if (this.shouldRemoveOnTrailingIconClick_) {
        this.beginExit();
      }
    }
  }
}

/**
 * @typedef {{
 *   detail: {
 *     chip: {foundation: !MDCChipFoundation},
 *   },
 *   bubbles: boolean,
 * }}
 */
let MDCChipInteractionEventType;



/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initTextFields;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_textfield__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_event_handler__ = __webpack_require__(4);




function initTextFields() {
    console.log('\tTextFields');

    var textFields = document.querySelectorAll('.mdc-text-field');
    for (var i = 0; i < textFields.length; i++) {
        var textField = textFields[i];
        if (!textField.vComponent) {
            textField.vComponent = new VTextField(textField, new __WEBPACK_IMPORTED_MODULE_0__material_textfield__["a" /* MDCTextField */](textField));
        }
    }
}

class VTextField extends Object(__WEBPACK_IMPORTED_MODULE_2__mixins_event_handler__["a" /* eventHandlerMixin */])(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* VBaseComponent */]) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        if (this.input == null) {
            this.input = element.querySelector('textarea');
        }
        this.input.vComponent = this;
        this.mdcComponent = mdcComponent;
    }

    // Called whenever a form is about to be submitted.
    // returns true on success
    // returns on failure return an error object that can be processed by VErrors:
    //    { email: ["email must be filled", "email must be from your domain"] }
    //    { :page: ["must be filled"] }
    validate(formData) {
        console.log("TextField validate", formData);
        let isValid = this.input.checkValidity();
        if (isValid) {
            return true;
        }
        let errorMessage = {};
        errorMessage[this.input.id] = [this.input.validationMessage];
        return errorMessage;
    }

    value() {
        return this.input.value;
    }

    // Called to collect data for submission
    prepareSubmit(form, params) {
        var optionSelected = this.optionSelected();
        if (optionSelected) {
            var key = optionSelected.dataset.key;
            if (key) {
                var name = this.input.name;
                var id = name + '_id';
                params.push([id, key]);
                console.log("TextField prepareSubmit added:" + id + '=' + key);
            }
        }
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            params.push([this.input.name, this.input.value]);
        }
    }

    optionSelected() {
        var dataList = this.element.querySelector('datalist');
        var parentElement = this.input;

        // If we find the input inside our list, we submit the form
        for (var element of dataList.children) {
            if (element.value === parentElement.value) {
                return element;
            }
        }
        return null;
    }

    clear() {
        this.setValue('');
    }

    setValue(value) {
        this.input.value = value;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VTextField;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VALIDATION_ATTR_WHITELIST; });
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
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
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

// whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
// under section: `Validation-related attributes`
const VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCTextFieldAdapter */
/* unused harmony export NativeInputType */
/* unused harmony export FoundationMapType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_text_foundation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_foundation__ = __webpack_require__(13);
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
   * Handler accepts list of attribute names.
   * @param {function(!Array<string>): undefined} handler
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
/* 20 */
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
/* 21 */
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
   * Gets the value of an attribute on the icon element.
   * @param {string} attr
   * @return {string}
   */
  getAttr(attr) {}

  /**
   * Sets an attribute on the icon element.
   * @param {string} attr
   * @param {string} value
   */
  setAttr(attr, value) {}

  /**
   * Removes an attribute from the icon element.
   * @param {string} attr
   */
  removeAttr(attr) {}

  /**
   * Sets the text content of the icon element.
   * @param {string} content
   */
  setContent(content) {}

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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCLineRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(58);
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
   * @param {number} xCoordinate
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
/* 23 */
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFloatingLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(62);
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
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCNotchedOutline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(28);
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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VUrls {

    paramsArrayToHash(params) {
        var results = {};
        // Map params to object/hash
        for (let param of params) {
            results[param[0]] = param[1];
        }
        return results;
    }

    buildURL(baseUrl) {
        var url = baseUrl;
        for (var i = 1; i < arguments.length; i++) {
            var args = arguments[i];
            if (Array.isArray(args)) {
                for (let arg of args) {
                    url += this.seperator(url) + this.encodeQueryParam(arg[0], arg[1]);
                }
            } else if (typeof args === 'object') {
                url += this.seperator(url) + this.serialize(arguments[i]);
            } else {
                url += this.seperator(url) + args;
            }
        }
        return url;
    }

    seperator(url) {
        if (url.endsWith('?')) {
            return '';
        }
        return url.includes("?") ? '&' : '?';
    }

    serialize(obj, prefix) {
        var str = [],
            p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p,
                    v = obj[p];
                str.push(v !== null && typeof v === "object" ? this.serialize(v, k) : this.encodeQueryParam(k, v));
            }
        }
        return str.join("&");
    }

    encodeQueryParam(k, v) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(v);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VUrls;


/***/ }),
/* 30 */
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
    displayErrors(result) {
        var httpStatus = result.statusCode;
        var contentType = result.contentType;
        var resultText = result.content;

        var responseErrors = null;

        if (contentType && contentType.indexOf("application/json") !== -1) {
            responseErrors = JSON.parse(resultText);
        } else if (contentType && contentType.indexOf("v/errors") !== -1) {
            responseErrors = resultText;
        }

        if (responseErrors) {
            if (!Array.isArray(responseErrors)) {
                responseErrors = [responseErrors];
            }
            for (var response of responseErrors) {
                var pageErrors = Object.values(this.normalizeErrors(response)).reduce(function (previous, value) {
                    if (Array.isArray(value)) {
                        previous.push(value.join('<br/>'));
                    }
                    return previous;
                }, []);
                var fieldErrors = this.normalizeErrors(response.errors);

                for (var field in fieldErrors) {
                    if (!this.displayInputError(field, fieldErrors[field])) {
                        // Collect errors that can't be displayed at the field level
                        pageErrors.push(fieldErrors[field]);
                    }
                }
                this.prependErrors(pageErrors);
            }
        } else if (httpStatus === 0) {
            this.prependErrors(["Unable to contact server. Please check that you are online and retry."]);
        } else {
            this.prependErrors(["The server returned an unexpected response! Status:" + httpStatus]);
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
    prependErrors(messages) {
        var errorsDiv = this.findNearestErrorDiv();
        // create a new div element
        var newDiv = document.createElement("div");
        newDiv.className = 'v-error-message';
        // and give it some content

        for (var message of messages) {
            var newContent = document.createTextNode(message);
            newDiv.appendChild(newContent);
            let br = document.createElement('br');
            // add the text node to the newly created div
            newDiv.appendChild(br);
        }

        // add the newly created element and its content into the DOM
        if (errorsDiv) {
            errorsDiv.parentElement.insertBefore(newDiv, errorsDiv);
            return true;
        } else {
            console.error("Unable to display Errors! ", messages);
        }
        return false;
    }

    findNearestErrorDiv() {
        let errorsDiv = null;
        const currentDiv = this.event.target;
        if (currentDiv) {
            errorsDiv = currentDiv.closest('.v-errors');
        } else {
            errorsDiv = document.querySelector('.v-errors');
        }
        return errorsDiv;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VErrors;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MDCMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(32);
/* unused harmony reexport MDCMenuFoundation */
/* unused harmony reexport AnchorMargin */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__constants__["a"]; });
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
        if (this.previousFocus_ && this.previousFocus_.focus) {
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
/* 32 */
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
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
  OUTLINED: 'mdc-select--outlined'
};

const strings = {
  CHANGE_EVENT: 'MDCSelect:change',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  LABEL_SELECTOR: '.mdc-floating-label',
  NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
  OUTLINE_SELECTOR: '.mdc-notched-outline'
};

/** @enum {number} */
const numbers = {
  LABEL_SCALE: 0.75
};



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCChip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(36);
/* unused harmony reexport MDCChipFoundation */
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
 * @extends {MDCComponent<!MDCChipFoundation>}
 * @final
 */
class MDCChip extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);

    /** @private {?Element} */
    this.leadingIcon_;
    /** @private {!MDCRipple} */
    this.ripple_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCChip}
   */
  static attachTo(root) {
    return new MDCChip(root);
  }

  initialize() {
    this.leadingIcon_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].LEADING_ICON_SELECTOR);

    // Adjust ripple size for chips with animated growing width. This applies when filter chips without
    // a leading icon are selected, and a leading checkmark will cause the chip width to expand.
    const checkmarkEl = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKMARK_SELECTOR);
    if (checkmarkEl && !this.leadingIcon_) {
      const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */].createAdapter(this), {
        computeBoundingRect: () => {
          const height = this.root_.getBoundingClientRect().height;
          // The checkmark's width is initially set to 0, so use the checkmark's height as a proxy since the
          // checkmark should always be square.
          const width = this.root_.getBoundingClientRect().width + checkmarkEl.getBoundingClientRect().height;
          return { height, width };
        }
      });
      this.ripple_ = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */](this.root_, new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["b" /* MDCRippleFoundation */](adapter));
    } else {
      this.ripple_ = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */](this.root_);
    }
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /**
   * Returns true if the chip is selected.
   * @return {boolean}
   */
  isSelected() {
    return this.foundation_.isSelected();
  }

  /**
   * Begins the exit animation which leads to removal of the chip.
   */
  beginExit() {
    this.foundation_.beginExit();
  }

  /**
   * @return {!MDCChipFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * Returns whether a trailing icon click should trigger exit/removal of the chip.
   * @return {boolean}
   */
  get shouldRemoveOnTrailingIconClick() {
    return this.foundation_.getShouldRemoveOnTrailingIconClick();
  }

  /**
   * Sets whether a trailing icon click should trigger exit/removal of the chip.
   * @param {boolean} shouldRemove
   */
  set shouldRemoveOnTrailingIconClick(shouldRemove) {
    return this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
  }

  /**
   * @return {!MDCChipFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* MDCChipFoundation */]( /** @type {!MDCChipAdapter} */Object.assign({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      hasClass: className => this.root_.classList.contains(className),
      addClassToLeadingIcon: className => {
        if (this.leadingIcon_) {
          this.leadingIcon_.classList.add(className);
        }
      },
      removeClassFromLeadingIcon: className => {
        if (this.leadingIcon_) {
          this.leadingIcon_.classList.remove(className);
        }
      },
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      registerEventHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      registerTrailingIconInteractionHandler: (evtType, handler) => {
        const trailingIconEl = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].TRAILING_ICON_SELECTOR);
        if (trailingIconEl) {
          trailingIconEl.addEventListener(evtType, handler);
        }
      },
      deregisterTrailingIconInteractionHandler: (evtType, handler) => {
        const trailingIconEl = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].TRAILING_ICON_SELECTOR);
        if (trailingIconEl) {
          trailingIconEl.removeEventListener(evtType, handler);
        }
      },
      notifyInteraction: () => this.emit(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].INTERACTION_EVENT, { chip: this }, true /* shouldBubble */),
      notifyTrailingIconInteraction: () => this.emit(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].TRAILING_ICON_INTERACTION_EVENT, { chip: this }, true /* shouldBubble */),
      notifyRemoval: () => this.emit(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].REMOVAL_EVENT, { chip: this, root: this.root_ }, true /* shouldBubble */),
      getComputedStyleValue: propertyName => window.getComputedStyle(this.root_).getPropertyValue(propertyName),
      setStyleProperty: (propertyName, value) => this.root_.style.setProperty(propertyName, value)
    }));
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }
}



/***/ }),
/* 35 */
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
 * Adapter for MDC Chip.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Chip into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCChipAdapter {
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
   * Returns true if the root element contains the given class.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Adds a class to the leading icon element.
   * @param {string} className
   */
  addClassToLeadingIcon(className) {}

  /**
   * Removes a class from the leading icon element.
   * @param {string} className
   */
  removeClassFromLeadingIcon(className) {}

  /**
   * Returns true if target has className, false otherwise.
   * @param {!EventTarget} target
   * @param {string} className
   * @return {boolean}
   */
  eventTargetHasClass(target, className) {}

  /**
   * Registers an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerEventHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterEventHandler(evtType, handler) {}

  /**
   * Registers an event listener on the trailing icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerTrailingIconInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the trailing icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterTrailingIconInteractionHandler(evtType, handler) {}

  /**
   * Emits a custom "MDCChip:interaction" event denoting the chip has been
   * interacted with (typically on click or keydown).
   */
  notifyInteraction() {}

  /**
   * Emits a custom "MDCChip:trailingIconInteraction" event denoting the trailing icon has been
   * interacted with (typically on click or keydown).
   */
  notifyTrailingIconInteraction() {}

  /**
   * Emits a custom event "MDCChip:removal" denoting the chip will be removed.
   */
  notifyRemoval() {}

  /**
   * Returns the computed property value of the given style property on the root element.
   * @param {string} propertyName
   * @return {string}
   */
  getComputedStyleValue(propertyName) {}

  /**
   * Sets the property value of the given style property on the root element.
   * @param {string} propertyName
   * @param {string} value
   */
  setStyleProperty(propertyName, value) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCChipAdapter);

/***/ }),
/* 36 */
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
  ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
  INTERACTION_EVENT: 'MDCChip:interaction',
  TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
  REMOVAL_EVENT: 'MDCChip:removal',
  CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
  LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
  TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
};

/** @enum {string} */
const cssClasses = {
  CHECKMARK: 'mdc-chip__checkmark',
  CHIP_EXIT: 'mdc-chip--exit',
  HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
  LEADING_ICON: 'mdc-chip__icon--leading',
  TRAILING_ICON: 'mdc-chip__icon--trailing',
  SELECTED: 'mdc-chip--selected'
};



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chip_foundation__ = __webpack_require__(15);
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

// eslint-disable-next-line no-unused-vars


/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Chip Set.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Chip Set into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCChipSetAdapter {
  /**
   * Returns true if the root element contains the given class name.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} evtType
   * @param {function(!MDCChipInteractionEventType): undefined} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} evtType
   * @param {function(!MDCChipInteractionEventType): undefined} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * Removes the chip object from the chip set.
   * @param {!Object} chip
   */
  removeChip(chip) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCChipSetAdapter);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCFormField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_selection_control_index__ = __webpack_require__(5);
/* unused harmony reexport MDCFormFieldFoundation */
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

/* eslint-enable no-unused-vars */

/**
 * @extends MDCComponent<!MDCFormFieldFoundation>
 */
class MDCFormField extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCFormField(root);
  }

  /** @param {?MDCSelectionControl} input */
  set input(input) {
    this.input_ = input;
  }

  /** @return {?MDCSelectionControl} */
  get input() {
    return this.input_;
  }

  constructor(...args) {
    super(...args);

    /** @private {?MDCSelectionControl} */
    this.input_;
  }

  /**
   * @return {!Element}
   * @private
   */
  get label_() {
    const { LABEL_SELECTOR } = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;
    return (/** @type {!Element} */this.root_.querySelector(LABEL_SELECTOR)
    );
  }

  /** @return {!MDCFormFieldFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      registerInteractionHandler: (type, handler) => this.label_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.label_.removeEventListener(type, handler),
      activateInputRipple: () => {
        if (this.input_ && this.input_.ripple) {
          this.input_.ripple.activate();
        }
      },
      deactivateInputRipple: () => {
        if (this.input_ && this.input_.ripple) {
          this.input_.ripple.deactivate();
        }
      }
    });
  }
}



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_selection_control_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__ = __webpack_require__(2);
/* unused harmony reexport MDCRadioFoundation */
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



/**
 * @extends MDCComponent<!MDCRadioFoundation>
 * @implements {MDCSelectionControl}
 */
class MDCRadio extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCRadio(root);
  }

  /** @return {boolean} */
  get checked() {
    return this.foundation_.isChecked();
  }

  /** @param {boolean} checked */
  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /** @return {?string} */
  get value() {
    return this.foundation_.getValue();
  }

  /** @param {?string} value */
  set value(value) {
    this.foundation_.setValue(value);
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["a" /* MDCRipple */].createAdapter(this), {
      isUnbounded: () => true,
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler)
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["a" /* MDCRipple */](this.root_, foundation);
  }

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */
  get nativeControl_() {
    const { NATIVE_CONTROL_SELECTOR } = __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings;
    const el = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    return el;
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /** @return {!MDCRadioFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      getNativeControl: () => this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR)
    });
  }
}



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initRadios;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_form_field__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_radio__ = __webpack_require__(39);





function initRadios() {
    console.log('\tRadios');

    var radios = document.querySelectorAll('.mdc-radio');
    for (var i = 0; i < radios.length; i++) {
        var radio = radios[i];
        if (!radio.vComponent) {
            radio.vComponent = new VRadio(radio, new __WEBPACK_IMPORTED_MODULE_3__material_radio__["a" /* MDCRadio */](radio));
        }
    }
}

class VRadio extends Object(__WEBPACK_IMPORTED_MODULE_1__mixins_event_handler__["a" /* eventHandlerMixin */])(__WEBPACK_IMPORTED_MODULE_0__base_component__["a" /* VBaseComponent */]) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            if (this.input.selected) {
                params.push([this.input.name, this.input.value]);
            }
        }
    }
}
/* unused harmony export VRadio */


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers'
};

/** @enum {string} */
const strings = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input'
};

/** @enum {number} */
const numbers = {
  PAGE_FACTOR: 4
};



/***/ }),
/* 42 */
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
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/**
 * Adapter for MDC Slider.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Slider into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCSliderAdapter {
  /**
   * Returns true if className exists for the slider Element
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Adds a class to the slider Element
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the slider Element
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns a string if attribute name exists on the slider Element,
   * otherwise returns null
   * @param {string} name
   * @return {?string}
   */
  getAttribute(name) {}

  /**
   * Sets attribute name on slider Element to value
   * @param {string} name
   * @param {string} value
   */
  setAttribute(name, value) {}

  /**
   * Removes attribute name from slider Element
   * @param {string} name
   */
  removeAttribute(name) {}

  /**
   * Returns the bounding client rect for the slider Element
   * @return {?ClientRect}
   */
  computeBoundingRect() {}

  /**
   * Returns the tab index of the slider Element
   * @return {number}
   */
  getTabIndex() {}

  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterInteractionHandler(type, handler) {}

  /**
   * Registers an event handler on the thumb container element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerThumbContainerInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the thumb container element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterThumbContainerInteractionHandler(type, handler) {}

  /**
   * Registers an event handler on the body for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerBodyInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the body for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterBodyInteractionHandler(type, handler) {}

  /**
   * Registers an event handler for the window resize event
   * @param {function(!Event): undefined} handler
   */
  registerResizeHandler(handler) {}

  /**
   * Deregisters an event handler for the window resize event
   * @param {function(!Event): undefined} handler
   */
  deregisterResizeHandler(handler) {}

  /**
   * Emits a custom event MDCSlider:input from the root
   */
  notifyInput() {}

  /**
   * Emits a custom event MDCSlider:change from the root
   */
  notifyChange() {}

  /**
   * Sets a style property of the thumb container element to the passed value
   * @param {string} propertyName
   * @param {string} value
   */
  setThumbContainerStyleProperty(propertyName, value) {}

  /**
   * Sets a style property of the track element to the passed value
   * @param {string} propertyName
   * @param {string} value
   */
  setTrackStyleProperty(propertyName, value) {}

  /**
   * Sets the inner text of the pin marker to the passed value
   * @param {number} value
   */
  setMarkerValue(value) {}

  /**
   * Appends the passed number of track markers to the track mark container element
   * @param {number} numMarkers
   */
  appendTrackMarkers(numMarkers) {}

  /**
   * Removes all track markers fromt he track mark container element
   */
  removeTrackMarkers() {}

  /**
   * Sets a style property of the last track marker to the passed value
   * @param {string} propertyName
   * @param {string} value
   */
  setLastTrackMarkersStyleProperty(propertyName, value) {}

  /**
   * Returns true if the root element is RTL, otherwise false
   * @return {boolean}
   */
  isRTL() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCSliderAdapter);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_initialize__ = __webpack_require__(10);
__webpack_require__(45);
__webpack_require__(46);
window.dialogPolyfill = __webpack_require__(47);


document.addEventListener("DOMContentLoaded", function (event) {
    Object(__WEBPACK_IMPORTED_MODULE_0__components_initialize__["a" /* initialize */])();
});

/***/ }),
/* 45 */
/***/ (function(module, exports) {

;(function() {
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
  upgradeDom: function(optJsClass, optCssClass) {},
  /**
   * Upgrades a specific element rather than all in the DOM.
   *
   * @param {!Element} element The element we wish to upgrade.
   * @param {string=} optJsClass Optional name of the class we want to upgrade
   * the element to.
   */
  upgradeElement: function(element, optJsClass) {},
  /**
   * Upgrades a specific list of elements rather than all in the DOM.
   *
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
   * The elements we wish to upgrade.
   */
  upgradeElements: function(elements) {},
  /**
   * Upgrades all registered components found in the current DOM. This is
   * automatically called on window load.
   */
  upgradeAllRegistered: function() {},
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
  registerUpgradedCallback: function(jsClass, callback) {},
  /**
   * Registers a class for future use and attempts to upgrade existing DOM.
   *
   * @param {componentHandler.ComponentConfigPublic} config the registration configuration
   */
  register: function(config) {},
  /**
   * Downgrade either a given node, an array of nodes, or a NodeList.
   *
   * @param {!Node|!Array<!Node>|!NodeList} nodes
   */
  downgradeElements: function(nodes) {}
};

componentHandler = (function() {
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
    if (typeof optJsClass === 'undefined' &&
        typeof optCssClass === 'undefined') {
      for (var i = 0; i < registeredComponents_.length; i++) {
        upgradeDomInternal(registeredComponents_[i].className,
            registeredComponents_[i].cssClass);
      }
    } else {
      var jsClass = /** @type {string} */ (optJsClass);
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
      registeredComponents_.forEach(function(component) {
        // Match CSS & Not to be upgraded & Not upgraded.
        if (classList.contains(component.cssClass) &&
            classesToUpgrade.indexOf(component) === -1 &&
            !isElementUpgraded_(element, component.className)) {
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
        throw new Error(
          'Unable to find a registered component for the given class.');
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
    var widgetMissing = (typeof config.widget === 'undefined' &&
        typeof config['widget'] === 'undefined');
    var widget = true;

    if (!widgetMissing) {
      widget = config.widget || config['widget'];
    }

    var newConfig = /** @type {componentHandler.ComponentConfig} */ ({
      classConstructor: config.constructor || config['constructor'],
      className: config.classAsString || config['classAsString'],
      cssClass: config.cssClass || config['cssClass'],
      widget: widget,
      callbacks: []
    });

    registeredComponents_.forEach(function(item) {
      if (item.cssClass === newConfig.cssClass) {
        throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
      }
      if (item.className === newConfig.className) {
        throw new Error('The provided className has already been registered');
      }
    });

    if (config.constructor.prototype
        .hasOwnProperty(componentConfigProperty_)) {
      throw new Error(
          'MDL component classes must not have ' + componentConfigProperty_ +
          ' defined as a property.');
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
    var downgradeNode = function(node) {
      createdComponents_.filter(function(item) {
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
})();

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
componentHandler.ComponentConfigPublic;  // jshint ignore:line

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
componentHandler.ComponentConfig;  // jshint ignore:line

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
componentHandler.Component;  // jshint ignore:line

// Export all symbols, for the benefit of Closure compiler.
// No effect on uncompiled code.
componentHandler['upgradeDom'] = componentHandler.upgradeDom;
componentHandler['upgradeElement'] = componentHandler.upgradeElement;
componentHandler['upgradeElements'] = componentHandler.upgradeElements;
componentHandler['upgradeAllRegistered'] =
    componentHandler.upgradeAllRegistered;
componentHandler['registerUpgradedCallback'] =
    componentHandler.registerUpgradedCallback;
componentHandler['register'] = componentHandler.register;
componentHandler['downgradeElements'] = componentHandler.downgradeElements;
window.componentHandler = componentHandler;
window['componentHandler'] = componentHandler;

window.addEventListener('load', function() {
  'use strict';

  /**
   * Performs a "Cutting the mustard" test. If the browser supports the features
   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
   * components requiring JavaScript.
   */
  if ('classList' in document.createElement('div') &&
      'querySelector' in document &&
      'addEventListener' in window && Array.prototype.forEach) {
    document.documentElement.classList.add('mdl-js');
    componentHandler.upgradeAllRegistered();
  } else {
    /**
     * Dummy function to avoid JS errors.
     */
    componentHandler.upgradeElement = function() {};
    /**
     * Dummy function to avoid JS errors.
     */
    componentHandler.register = function() {};
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
var vendors = [
    'webkit',
    'moz'
];
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
        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
        } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
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
    var circleOwners = [
        leftClipper,
        gapPatch,
        rightClipper
    ];
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
    var labelClasses = [
        'mdl-checkbox',
        'mdl-js-checkbox',
        'mdl-js-ripple-effect',
        this.CssClasses_.SELECT_ELEMENT
    ];
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
}());


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

	'use strict';

	/**
  * MDL Stepper - A library that implements to the Material Design Lite (MDL) a polyfill for stepper
  * component specified by Material Design.
  * @version v1.1.6
  * @author Alexandre Thebaldi <ahlechandre@gmail.com>.
  * @link https://github.com/ahlechandre/mdl-stepper
  */

	(function () {
		'use strict';

		/**
   * Class constructor for Stepper MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */

		function MaterialStepper(element) {
			this.element_ = element;

			// initialize instance.
			this.init();
		}

		window.MaterialStepper = MaterialStepper;

		/**
   * Store properties of stepper.
   * @private
   */
		MaterialStepper.prototype.Stepper_ = {};

		/**
   * Get properties of stepper.
   * @return {Object}
   * @private
   */
		MaterialStepper.prototype.getStepper_ = function () {
			return {
				isLinear: this.element_.classList.contains(this.CssClasses_.STEPPER_LINEAR),
				hasFeedback: this.element_.classList.contains(this.CssClasses_.STEPPER_FEEDBACK)
			};
		};

		/**
   * Store strings for steps states.
   * @enum {string}
   * @private
   */
		MaterialStepper.prototype.StepState_ = {
			COMPLETED: 'completed',
			ERROR: 'error',
			NORMAL: 'normal'
		};

		/**
   * Store strings for dataset attributes defined by this component that are used for
   * JavaScript custom events.
   *
   * @enum {string}
   * @private
   */
		MaterialStepper.prototype.DatasetAttributes_ = {
			CONTINUE: 'stepper-next',
			CANCEL: 'stepper-cancel',
			SKIP: 'stepper-skip',
			BACK: 'stepper-back'
		};

		/**
   * Issue: https://github.com/ahlechandre/mdl-stepper/issues/14
   * Returns a custom event object
   * @param {string} evtName The name/type of custom event to create.
   * @param {bool} bubble If event is bubbleable.
   * @param {bool} cancel If event is cancelable.
   * @returns {Event}
   */
		MaterialStepper.prototype.defineCustomEvent = function (evtName, bubble, cancel) {
			var ev;
			if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
				ev = new Event(evtName, {
					bubbles: bubble,
					cancelable: cancel
				});
			} else {
				ev = document.createEvent('Events');
				ev.initEvent(evtName, bubble, cancel);
			}
			return ev;
		};

		/**
   * Store the custom events applieds to the steps and stepper.
   *
   * @private
   */
		MaterialStepper.prototype.CustomEvents_ = {
			onstepnext: MaterialStepper.prototype.defineCustomEvent('onstepnext', true, true),
			onstepcancel: MaterialStepper.prototype.defineCustomEvent('onstepcancel', true, true),
			onstepskip: MaterialStepper.prototype.defineCustomEvent('onstepskip', true, true),
			onstepback: MaterialStepper.prototype.defineCustomEvent('onstepback', true, true),
			onstepcomplete: MaterialStepper.prototype.defineCustomEvent('onstepcomplete', true, true),
			onsteperror: MaterialStepper.prototype.defineCustomEvent('onsteperror', true, true),
			onsteppercomplete: MaterialStepper.prototype.defineCustomEvent('onsteppercomplete', true, true)
		};

		/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
		MaterialStepper.prototype.CssClasses_ = {
			BUTTON_JS: 'mdl-js-button',
			STEPPER_LINEAR: 'mdl-stepper--linear',
			STEPPER_FEEDBACK: 'mdl-stepper--feedback',
			STEP_COMPLETED: 'mdl-step--completed',
			STEP_ERROR: 'mdl-step--error',
			STEP_TRANSIENT: 'mdl-step--transient',
			STEP_OPTIONAL: 'mdl-step--optional',
			STEP_EDITABLE: 'mdl-step--editable',
			IS_ACTIVE: 'is-active',
			TRANSIENT: 'mdl-step__transient',
			TRANSIENT_OVERLAY: 'mdl-step__transient-overlay',
			TRANSIENT_LOADER: 'mdl-step__transient-loader',
			SPINNER: 'mdl-spinner',
			SPINNER_JS: 'mdl-js-spinner',
			SPINNER_IS_ACTIVE: 'is-active',
			STEPPER: 'mdl-stepper',
			STEP: 'mdl-step',
			STEP_LABEL: 'mdl-step__label',
			STEP_LABEL_INDICATOR: 'mdl-step__label-indicator',
			STEP_LABEL_INDICATOR_CONTENT: 'mdl-step__label-indicator-content',
			STEP_TITLE: 'mdl-step__title',
			STEP_TITLE_TEXT: 'mdl-step__title-text',
			STEP_TITLE_MESSAGE: 'mdl-step__title-message',
			STEP_CONTENT: 'mdl-step__content',
			STEP_ACTIONS: 'mdl-step__actions'
		};

		/**
   * Store collection of steps and important data about them
   * @private
   */
		MaterialStepper.prototype.Steps_ = {};

		/**
   * Returns the label indicator for referred to the passed step.
   * @param {MaterialStepper.Steps_.collection.<step>} step The step that will get
   *                                                        the label indicator.
   * @return {HTMLElement}
   * @private
   */
		MaterialStepper.prototype.getIndicatorElement_ = function (step) {
			/** @type {HTMLElement} */
			var indicatorElement;
			/** @type {HTMLElement} */
			var indicatorContent;
			indicatorElement = document.createElement('span');
			indicatorContent = this.getIndicatorContentNormal_(step.labelndicatorText);
			indicatorElement.classList.add(this.CssClasses_.STEP_LABEL_INDICATOR);
			indicatorElement.appendChild(indicatorContent);
			return indicatorElement;
		};

		/**
   * Create a new element that's represent "normal" label indicator.
   * @param {string} text The text content of indicator (e.g. 1, 2..N).
   * @return {HTMLElement}
   * @private
   */
		MaterialStepper.prototype.getIndicatorContentNormal_ = function (text) {
			/** @type {HTMLElement} */
			var normal;
			normal = document.createElement('span');
			normal.classList.add(this.CssClasses_.STEP_LABEL_INDICATOR_CONTENT);
			normal.textContent = text;
			return normal;
		};

		/**
   * Create a new element that's represent "completed" label indicator.
   * @param {boolean} isEditable Flag to check if step is of editable type.
   * @return {HTMLElement}
   * @private
   */
		MaterialStepper.prototype.getIndicatorContentCompleted_ = function (isEditable) {
			// Creates a new material icon to represent the completed step.
			/** @type {HTMLElement} */
			var completed;
			completed = document.createElement('i');
			completed.classList.add('material-icons', this.CssClasses_.STEP_LABEL_INDICATOR_CONTENT);
			// If step is editable the icon used will be "edit",
			// else the icon will be "check".
			completed.textContent = isEditable ? 'edit' : 'check';
			return completed;
		};

		/**
   * Create a new element that's represent "error" label indicator.
   * @return {HTMLElement}
   * @private
   */
		MaterialStepper.prototype.getIndicatorContentError_ = function () {
			/** @type {HTMLElement} */
			var error;
			error = document.createElement('span');
			error.classList.add(this.CssClasses_.STEP_LABEL_INDICATOR_CONTENT);
			error.textContent = '!';
			return error;
		};

		/**
   * Defines a new step model.
   * @param {HTMLElement} step The step element.
   * @param {number} id The unique number for each step.
   * @return {Object}
   * @private
   */
		MaterialStepper.prototype.getStepModel_ = function (step, id) {
			/** @type {Object} */
			var model;
			/** @type {string} */
			var selectorActionsBack;
			/** @type {string} */
			var selectorActionsCancel;
			/** @type {string} */
			var selectorActionsNext;
			/** @type {string} */
			var selectorActionsSkip;
			selectorActionsBack = '[data-' + this.DatasetAttributes_.BACK + ']';
			selectorActionsCancel = '[data-' + this.DatasetAttributes_.CANCEL + ']';
			selectorActionsNext = '[data-' + this.DatasetAttributes_.CONTINUE + ']';
			selectorActionsSkip = '[data-' + this.DatasetAttributes_.SKIP + ']';
			model = {};
			model.container = step;
			model.id = id;
			model.label = step.querySelector('.' + this.CssClasses_.STEP_LABEL);
			model.labelndicatorText = id;
			model.labelTitle = step.querySelector('.' + this.CssClasses_.STEP_TITLE);
			model.labelTitleText = step.querySelector('.' + this.CssClasses_.STEP_TITLE_TEXT).textContent;
			model.labelTitleMessage = step.querySelector('.' + this.CssClasses_.STEP_TITLE_MESSAGE);
			model.labelTitleMessageText = model.labelTitleMessage ? model.labelTitleMessage.textContent : '';
			model.content = step.querySelector('.' + this.CssClasses_.STEP_CONTENT);
			model.actions = step.querySelector('.' + this.CssClasses_.STEP_ACTIONS);
			model.actionsBack = model.actions.querySelector(selectorActionsBack) || null;
			model.actionsCancel = model.actions.querySelector(selectorActionsCancel) || null;
			model.actionsNext = model.actions.querySelector(selectorActionsNext) || null;
			model.actionsSkip = model.actions.querySelector(selectorActionsSkip) || null;
			model.labelIndicator = model.label.querySelector('.' + this.CssClasses_.STEP_LABEL_INDICATOR);

			if (!model.labelIndicator) {
				// Creates a new indicator for the label if not exists
				model.labelIndicator = this.getIndicatorElement_(model);
				model.label.appendChild(model.labelIndicator);
			}

			if (step.classList.contains(this.CssClasses_.STEP_COMPLETED)) {
				model.state = this.StepState_.COMPLETED;
			} else if (step.classList.contains(this.CssClasses_.STEP_ERROR)) {
				model.state = this.StepState_.ERROR;
			} else {
				model.state = this.StepState_.NORMAL;
			}
			model.isActive = step.classList.contains(this.CssClasses_.IS_ACTIVE);
			model.isOptional = step.classList.contains(this.CssClasses_.STEP_OPTIONAL);
			model.isEditable = step.classList.contains(this.CssClasses_.STEP_EDITABLE);
			return model;
		};

		/**
   * Get the active step element.
   * @return {HTMLElement}
   */
		MaterialStepper.prototype.getActive = function () {
			return this.Steps_.collection[this.Steps_.active - 1].container;
		};

		/**
   * Get the active step id.
   * @return {number}
   */
		MaterialStepper.prototype.getActiveId = function () {
			return this.Steps_.collection[this.Steps_.active - 1].id;
		};

		/**
   * Load the model of all steps and store inside a collection.
   * @return {Object}
   * @private
   */
		MaterialStepper.prototype.getSteps_ = function () {
			/** @type {array} */
			var collection;
			/** @type {number} */
			var total;
			/** @type {number} */
			var completed;
			/** @type {number} */
			var optional;
			/** @type {number} */
			var active;
			/** @type {HTMLElement} */
			var stepElements;
			/** @type {number} */
			var i;
			collection = [];
			total = 0;
			completed = 0;
			optional = 0;
			active = 0;
			stepElements = this.element_.querySelectorAll('.' + this.CssClasses_.STEP);

			for (i = 0; i < stepElements.length; i++) {
				collection[i] = this.getStepModel_(stepElements[i], i + 1);

				if (collection[i].isOptional) {
					optional += 1;
				}

				if (collection[i].isActive) {
					active = collection[i].id;
				}

				// Prevents the step label to scrolling out of user view on Google Chrome.
				// More details here: <https://github.com/ahlechandre/mdl-stepper/issues/11 />.
				stepElements[i].addEventListener('scroll', function (event) {
					event.target.scrollTop = 0;
				});
			}
			total = collection.length;
			return {
				collection: collection,
				total: total,
				completed: completed,
				optional: optional,
				active: active
			};
		};

		/**
   * Defines a specific step as "active".
   * @param {MaterialStepper.Steps_.collection<step>} step A model of step.
   * @return {boolean}
   * @private
   */
		MaterialStepper.prototype.setStepActive_ = function (step) {
			/** @type {function} */
			var stepsDeactivator;

			// The transient effect blocks the stepper to move
			if (this.hasTransient()) return false;

			stepsDeactivator = function stepsDeactivator(step) {
				step.container.classList.remove(this.CssClasses_.IS_ACTIVE);

				if (step.isActive) {
					step.isActive = false;
				}
			};
			this.Steps_.collection.forEach(stepsDeactivator.bind(this));
			// remove if step was in transient (feedback) effect
			step.container.classList.remove(this.CssClasses_.STEP_TRANSIENT);
			step.container.classList.add(this.CssClasses_.IS_ACTIVE);
			step.isActive = true;
			this.Steps_.active = step.id;
			return true;
		};

		/**
   * Defines as "active" the first step or a specific id.
   * @param {number | undefined} id Unique number of a step.
   * @return {boolean}
   * @private
   */
		MaterialStepper.prototype.setActive_ = function (id) {
			/** @type {HTMLElement | null} */
			var active;
			/** MaterialStepper.Steps_.collection<step> */
			var first;
			/** @type {number} */
			var i;
			/** @type {boolean} */
			var moved;
			/** MaterialStepper.Steps_.collection<step> */
			var step;

			// Return false if specified id is less or equal 0 and bigger than the last step
			if (!isNaN(id) && (id > this.Steps_.total || id <= 0)) return false;

			moved = false;

			if (id) {
				for (i = 0; i < this.Steps_.total; i++) {
					step = this.Steps_.collection[i];

					if (step.id === id) {
						moved = this.setStepActive_(step);
						break;
					}
				}
			} else {
				active = this.element_.querySelector('.' + this.CssClasses_.IS_ACTIVE);

				if (!active) {
					// Set the first step as "active" if none id was specified and
					// no "active" step was found at the DOM.
					first = this.Steps_.collection[0];
					moved = this.setStepActive_(first);
				}
			}

			if (this.Stepper_.isLinear) {
				// We know that all steps previous the "active" are "completed"
				// case the stepper is linear
				this.updateLinearStates_();
			}
			return moved;
		};

		/**
   * Change the state of a step
   * @param {MaterialStepper.Steps_.collection<step>} step The step to be updated.
   * @param {string} state The step state ("completed", "error" or "normal").
   * @return {boolean}
   * @private
   */
		MaterialStepper.prototype.updateStepState_ = function (step, state) {
			/** @type {string} */
			var stateClass;
			/** @type {HTMLElement} */
			var indicatorContent;
			/** @type {HTMLElement} */
			var currentIndicatorContent;
			/** @type {boolean} */
			var stepperCompleted;
			/** @type {boolean} */
			var hasRequired;
			/** @type {MaterialStepper.Steps_.collection<stepItem>} */
			var stepItem;
			/** @type {number} */
			var item;
			/** @type {string} */
			var selectorIndicator;
			selectorIndicator = '.' + this.CssClasses_.STEP_LABEL_INDICATOR_CONTENT;

			// Can't update the state for the same.
			if (step.state === state) return false;

			// Case the current step state to change is "completed",
			// we can decrement the total number of completed.
			if (step.state === this.StepState_.COMPLETED) {
				this.Steps_.completed -= 1;
			}
			currentIndicatorContent = step.labelIndicator.querySelector(selectorIndicator);

			switch (state) {
				case this.StepState_.COMPLETED:
					{
						// Case changing the current step state to "completed",
						// we can increment the total number of completed.
						this.Steps_.completed += 1;
						step.container.classList.remove(this.CssClasses_.STEP_ERROR);
						indicatorContent = this.getIndicatorContentCompleted_(step.isEditable);
						stateClass = this.CssClasses_.STEP_COMPLETED;
						break;
					}
				case this.StepState_.ERROR:
					{
						step.container.classList.remove(this.CssClasses_.STEP_COMPLETED);
						indicatorContent = this.getIndicatorContentError_();
						stateClass = this.CssClasses_.STEP_ERROR;
						break;
					}
				case this.StepState_.NORMAL:
					{
						step.container.classList.remove(this.CssClasses_.STEP_COMPLETED);
						step.container.classList.remove(this.CssClasses_.STEP_ERROR);
						indicatorContent = this.getIndicatorContentNormal_(step.labelndicatorText);
						break;
					}
				default:
					{
						break;
					}
			}

			// "normal" is the default state and don't have specific css class.
			if (stateClass) {
				step.container.classList.add(stateClass);
			}
			step.labelIndicator.replaceChild(indicatorContent, currentIndicatorContent);
			step.state = state;

			// Case the total number of completed steps
			// are equal the total number of steps less the optionals
			// or total number of completed steps are equal the total number of steps,
			// we can consider that the stepper are successfully complete and
			// dispatch the custom event.
			stepperCompleted = false;

			if (this.Steps_.completed === this.Steps_.total) {
				stepperCompleted = true;
			} else if (this.Steps_.completed === this.Steps_.total - this.Steps_.optional) {
				for (item in this.Steps_.collection) {
					// eslint guard-for-in.
					if (this.Steps_.collection.hasOwnProperty(item)) {
						stepItem = this.Steps_.collection[item];
						hasRequired = !stepItem.isOptional && stepItem.state !== this.StepState_.COMPLETED;

						if (hasRequired) break;
					}
				}
				stepperCompleted = !hasRequired;
			}

			if (stepperCompleted) {
				this.dispatchEventOnStepperComplete_();
			}

			return true;
		};

		/**
   * Change to "completed" the state of all steps previous the "active"
   * except the optionals.
   * @return {undefined}
   * @private
   */
		MaterialStepper.prototype.updateLinearStates_ = function () {
			/** @type {number} */
			var i;

			for (i = 0; i < this.Steps_.total; i++) {
				if (this.Steps_.collection[i].isActive) {
					break;
				} else {
					if (this.Steps_.collection[i].isOptional) continue;

					this.updateStepState_(this.Steps_.collection[i], this.StepState_.COMPLETED);
				}
			}
		};

		/**
   * Move "active" to the previous step. This operation can returns false
   * if it does not regress the step.
   * @return {boolean}
   */
		MaterialStepper.prototype.back = function () {
			/** @type {boolean} */
			var moved;
			/** @type {function} */
			var moveStep;
			/** @type {string} */
			var model;
			/** @type {MaterialStepper.Steps_.collection<step>} */
			var step;
			/** @type {MaterialStepper.Steps_.collection<step>} */
			var previous;
			moved = false;
			moveStep = function moveStep(step) {
				/** @type {boolean} */
				var stepActivated;
				stepActivated = this.setActive_(step.id);

				if (stepActivated) {
					if (stepActivated && this.Stepper_.hasFeedback) {
						// Remove the (feedback) transient effect before move.
						this.removeTransientEffect_(step);
					}
				}
				return stepActivated;
			};

			for (model in this.Steps_.collection) {
				// Rule eslint guard-for-in.
				if (this.Steps_.collection.hasOwnProperty(model)) {
					step = this.Steps_.collection[model];

					if (step.isActive) {
						previous = this.Steps_.collection[step.id - 2];

						if (!previous) return false;

						if (this.Stepper_.isLinear) {
							if (previous.isEditable) {
								moved = moveStep.bind(this)(previous);
							}
						} else {
							moved = moveStep.bind(this)(previous);
						}
						break;
					}
				}
			}
			return moved;
		};

		/**
   * Move "active" to the next if the current step is optional. This operation can returns false
   * if it does not advances the step.
   * @return {boolean}
   */
		MaterialStepper.prototype.skip = function () {
			/** @type {boolean} */
			var moved;
			/** @type {string} */
			var model;
			/** @type {MaterialStepper.Steps_.collection<step>} */
			var step;
			moved = false;

			for (model in this.Steps_.collection) {
				// Rule eslint guard-for-in.
				if (this.Steps_.collection.hasOwnProperty(model)) {
					step = this.Steps_.collection[model];

					if (step.isActive) {
						if (step.isOptional) {
							moved = this.setActive_(step.id + 1);

							if (moved && this.Stepper_.hasFeedback) {
								// Remove the (feedback) transient effect before move
								this.removeTransientEffect_(step);
							}
						}
						break;
					}
				}
			}
			return moved;
		};

		/**
   * Move "active" to specified step id.
   * This operation is similar to the MaterialStepper.setActive_(<number>).
   * @param {number} id Unique number for step.
   * @return {boolean}
   */
		MaterialStepper.prototype.goto = function (id) {
			return this.setActive_(id);
		};

		/**
   * Defines the current state of step to "error" and display
   * an alert message instead of default title message.
   * @param {string} message The text content to show with error state.
   * @return {undefined}
   */
		MaterialStepper.prototype.error = function (message) {
			/** @type {string} */
			var model;
			/** @type {MaterialStepper.Steps_.collection<step>} */
			var step;

			for (model in this.Steps_.collection) {
				// Rule eslint guard-for-in.
				if (this.Steps_.collection.hasOwnProperty(model)) {
					step = this.Steps_.collection[model];

					if (step.isActive) {
						if (this.Stepper_.hasFeedback) {
							// Remove the (feedback) transient effect before move.
							this.removeTransientEffect_(step);
						}
						this.updateStepState_(step, this.StepState_.ERROR);

						if (message) {
							this.updateTitleMessage_(step, message);
						}
						// Now dispatch on step the custom event "onsteperror".
						this.dispatchEventOnStepError_(step);
						break;
					}
				}
			}
		};

		/**
  * Defines current step state to "completed" and move active to the next.
  * This operation can returns false if it does not advance the step.
  * @return {boolean}
  */
		MaterialStepper.prototype.next = function () {
			/** @type {boolean} */
			var moved;
			/** @type {MaterialStepper.Steps_.collection<step>} */
			var step;
			/** @type {number} */
			var activate;
			/** @type {string} */
			var model;
			/** @type {string} */
			var item;
			/** @type {MaterialStepper.Steps_.collection<stepItem>} */
			var stepItem;
			moved = false;

			for (model in this.Steps_.collection) {
				// Rule eslint guard-for-in.
				if (this.Steps_.collection.hasOwnProperty(model)) {
					step = this.Steps_.collection[model];

					if (step.isActive) {
						activate = step.id + 1;

						if (this.Stepper_.hasFeedback) {
							// Remove the (feedback) transient effect before move
							this.removeTransientEffect_(step);
						}

						if (step.state === this.StepState_.ERROR) {
							// Case the current state of step is "error", update the error message
							// to the original title message or just remove it.
							if (step.labelTitleMessageText) {
								this.updateTitleMessage_(step, step.labelTitleMessageText);
							} else {
								this.removeTitleMessage_(step);
							}
						}

						if (step.isEditable && this.Stepper_.isLinear) {
							// In linear steppers if the current step is editable the stepper needs to find
							// the next step without "completed" state
							for (item in this.Steps_.collection) {
								// Rule eslint guard-for-in.
								if (this.Steps_.collection.hasOwnProperty(item)) {
									stepItem = this.Steps_.collection[item];

									if (stepItem.id > step.id && stepItem.state !== this.StepState_.COMPLETED) {
										activate = stepItem.id;
										break;
									}
								}
							}
						}
						moved = this.setActive_(activate);

						// Update "manually" the state of current step to "completed" because
						// MaterialStepper.setActive_(<number>) can't change the state of non-linears steppers
						// and can't change the state of optional or last step in linears steppers.
						if (this.Stepper_.isLinear) {
							if (step.isOptional || step.id === this.Steps_.total) {
								this.updateStepState_(step, this.StepState_.COMPLETED);
							}
						} else {
							this.updateStepState_(step, this.StepState_.COMPLETED);
						}

						// Now dispatch on step the custom event "onstepcomplete"
						this.dispatchEventOnStepComplete_(step);
						break;
					}
				}
			}
			return moved;
		};

		/**
   * Update the title message or creates a new if it not exists.
   * @param {MaterialStepper.Steps_.collection<step>} step The step of label to be updated.
   * @param {string} text The text content to update.
   * @return {undefined}
   */
		MaterialStepper.prototype.updateTitleMessage_ = function (step, text) {
			/** @type {HTMLElement | null} */
			var titleMessage;
			titleMessage = step.container.querySelector('.' + this.CssClasses_.STEP_TITLE_MESSAGE);

			if (!titleMessage) {
				titleMessage = document.createElement('span');
				titleMessage.classList.add(this.CssClasses_.STEP_TITLE_MESSAGE);
				step.labelTitle.appendChild(titleMessage);
			}
			titleMessage.textContent = text;
		};

		/**
   * Remove the title message if it exists.
   * @param {MaterialStepper.Steps_.collection<step>} step The step to remove title message.
   * @return {undefined}
   */
		MaterialStepper.prototype.removeTitleMessage_ = function (step) {
			/** @type {HTMLElement | null} */
			var titleMessage;
			titleMessage = step.container.querySelector('.' + this.CssClasses_.STEP_TITLE_MESSAGE);

			if (titleMessage) {
				titleMessage.parentNode.removeChild(titleMessage);
			}
		};

		/**
   * Remove (feedback) transient effect and applied to the step.
   * @param {MaterialStepper.Steps_.collection<step>} step The step to remove effect.
   * @return {boolean}
   */
		MaterialStepper.prototype.removeTransientEffect_ = function (step) {
			/** @type {HTMLElement | null} */
			var transient;
			transient = step.content.querySelector('.' + this.CssClasses_.TRANSIENT);

			if (!transient) return false;

			step.container.classList.remove(this.CssClasses_.STEP_TRANSIENT);
			step.content.removeChild(transient);
			return true;
		};

		/**
   * Create (feedback) transient effect and apply to the current step.
   * @param {MaterialStepper.Steps_.collection<step>} step The step to add effect.
   * @return {boolean}
   */
		MaterialStepper.prototype.addTransientEffect_ = function (step) {
			/** @type {HTMLElement} */
			var transient;
			/** @type {HTMLElement} */
			var overlay;
			/** @type {HTMLElement} */
			var loader;
			/** @type {HTMLElement} */
			var spinner;

			if (step.content.querySelector('.' + this.CssClasses_.TRANSIENT)) return false;

			transient = document.createElement('div');
			overlay = document.createElement('div');
			loader = document.createElement('div');
			spinner = document.createElement('div');
			transient.classList.add(this.CssClasses_.TRANSIENT);
			overlay.classList.add(this.CssClasses_.TRANSIENT_OVERLAY);
			loader.classList.add(this.CssClasses_.TRANSIENT_LOADER);
			spinner.classList.add(this.CssClasses_.SPINNER);
			spinner.classList.add(this.CssClasses_.SPINNER_JS);
			spinner.classList.add(this.CssClasses_.SPINNER_IS_ACTIVE);
			loader.appendChild(spinner);
			transient.appendChild(overlay);
			transient.appendChild(loader);
			step.container.classList.add(this.CssClasses_.STEP_TRANSIENT);
			step.content.appendChild(transient);
			// Assume componentHandler is available in the global scope.
			componentHandler.upgradeDom();
			return true;
		};

		/**
   * Add event listener to linear, non-linear steppers and dispatch the custom events.
   * @return {undefined}
   */
		MaterialStepper.prototype.setCustomEvents_ = function () {
			/** @type {function} */
			var linearLabels;
			/** @type {function} */
			var nonLinearLabels;
			/** @type {function} */
			var dispatchCustomEvents;

			linearLabels = function linearLabels(step) {
				// We know that editable steps can be activated by click on label case it's completed
				if (step.isEditable) {
					step.label.addEventListener('click', function (event) {
						event.preventDefault();

						if (step.state === this.StepState_.COMPLETED) {
							this.setStepActive_(step);
						}
					}.bind(this));
				}
			};
			nonLinearLabels = function nonLinearLabels(step) {
				step.label.addEventListener('click', function (event) {
					event.preventDefault();
					this.setStepActive_(step);
				}.bind(this));
			};
			dispatchCustomEvents = function dispatchCustomEvents(step) {
				this.dispatchEventOnStepNext_(step);
				this.dispatchEventOnStepCancel_(step);
				this.dispatchEventOnStepSkip_(step);
				this.dispatchEventOnStepBack_(step);
			};

			if (this.Stepper_.isLinear) {
				this.Steps_.collection.forEach(linearLabels.bind(this));
			} else {
				this.Steps_.collection.forEach(nonLinearLabels.bind(this));
			}
			this.Steps_.collection.forEach(dispatchCustomEvents.bind(this));
		};

		/**
   * Dispatch "onstepcomplete" event on step when method stepper.next() is invoked to the
   * current and return true. Or just when the active step change your state to "completed".
   * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
   * @return {undefined}
   */
		MaterialStepper.prototype.dispatchEventOnStepComplete_ = function (step) {
			step.container.dispatchEvent(this.CustomEvents_.onstepcomplete);
		};

		/**
   * Dispatch "onsteperror" event on step when method stepper.error('Your alert message')
   * is invoked to the current step and return true. Or just when the active step
   * change your state to "error".
   * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
   * @return {undefined}
   */
		MaterialStepper.prototype.dispatchEventOnStepError_ = function (step) {
			step.container.dispatchEvent(this.CustomEvents_.onsteperror);
		};

		/**
   * Dispatch "onsteppercomplete" event on stepper when all steps are completed.
   * If there is optionals steps, they will be ignored.
   * @return {undefined}
   */
		MaterialStepper.prototype.dispatchEventOnStepperComplete_ = function () {
			this.element_.dispatchEvent(this.CustomEvents_.onsteppercomplete);
		};

		/**
   * Dispatch "onstepnext" event on step when the step action button/link with
   * [data-stepper-next] attribute is clicked.
   * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
   * @return {boolean}
   */
		MaterialStepper.prototype.dispatchEventOnStepNext_ = function (step) {
			if (!step.actionsNext) return false;

			step.actionsNext.addEventListener('click', function () {
				if (this.Stepper_.hasFeedback) {
					this.addTransientEffect_(step);
				}
				step.container.dispatchEvent(this.CustomEvents_.onstepnext);
			}.bind(this));

			return true;
		};

		/**
   * Dispatch "onstepcancel" event on step when the step action button/link with
   * [data-stepper-cancel] attribute is clicked.
   * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
   * @return {boolean}
   */
		MaterialStepper.prototype.dispatchEventOnStepCancel_ = function (step) {
			if (!step.actionsCancel) return false;

			step.actionsCancel.addEventListener('click', function (event) {
				event.preventDefault();
				step.container.dispatchEvent(this.CustomEvents_.onstepcancel);
			}.bind(this));

			return true;
		};

		/**
   * Dispatch "onstepskip" event on step when the step action button/link with
   * [data-stepper-skip] attribute is clicked.
   * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
   * @return {boolean}
   */
		MaterialStepper.prototype.dispatchEventOnStepSkip_ = function (step) {
			if (!step.actionsSkip) return false;

			step.actionsSkip.addEventListener('click', function (event) {
				event.preventDefault();
				step.container.dispatchEvent(this.CustomEvents_.onstepskip);
			}.bind(this));
			return true;
		};

		/**
   * Dispatch "onstepback" event on step when the step action button/link with
   * [data-stepper-back] attribute is clicked.
   * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
   * @return {boolean}
   */
		MaterialStepper.prototype.dispatchEventOnStepBack_ = function (step) {
			if (!step.actionsBack) return false;

			step.actionsBack.addEventListener('click', function (event) {
				event.preventDefault();
				step.container.dispatchEvent(this.CustomEvents_.onstepback);
			}.bind(this));
			return true;
		};

		/**
   * Check if has some active transient effect on steps.
   * @return {boolean}
   */
		MaterialStepper.prototype.hasTransient = function () {
			/** @type {string} */
			var cssClasseStep;
			/** @type {string} */
			var cssClasseStepContent;
			/** @type {string} */
			var cssClasseTransient;
			/** @type {string} */
			var selectorTransient;
			/** @type {HTMLElement | null} */
			var transient;
			cssClasseStep = '.' + this.CssClasses_.STEP;
			cssClasseStepContent = '.' + this.CssClasses_.STEP_CONTENT;
			cssClasseTransient = '.' + this.CssClasses_.TRANSIENT;
			selectorTransient = cssClasseStep + ' > ' + cssClasseStepContent + ' > ' + cssClasseTransient;
			transient = this.element_.querySelector(selectorTransient);
			return transient !== null;
		};

		/**
   * Initialize the instance.
   * @return {undefined}
   * @public
   */
		MaterialStepper.prototype.init = function () {
			// Check if stepper element exists.
			if (this.element_) {
				this.Stepper_ = this.getStepper_();
				this.Steps_ = this.getSteps_();
				this.setActive_();
				this.setCustomEvents_();
			}
		};

		// The component registers itself. It can assume componentHandler is available
		// in the global scope.
		componentHandler.register({
			constructor: MaterialStepper,
			classAsString: 'MaterialStepper',
			cssClass: 'mdl-stepper',
			widget: true
		});
	})();

	/***/
}
/******/]);

/***/ }),
/* 47 */
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

  if ("function" === 'function' && 'amd' in __webpack_require__(48)) {
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
/* 48 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(7);
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
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
let ListenerInfoType;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
let ListenersType;

/**
 * @typedef {{
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
    this.focusHandler_ = () => this.handleFocus();

    /** @private {function(?Event=)} */
    this.blurHandler_ = () => this.handleBlur();

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {{left: number, top:number}} */
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
        // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
        this.layoutInternal_();
      }
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

    if (this.adapter_.isUnbounded()) {
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
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

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
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

    activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(() => {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  checkElementMadeActive_(e) {
    return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
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

    this.layoutInternal_();

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

  handleFocus() {
    requestAnimationFrame(() => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));
  }

  handleBlur() {
    requestAnimationFrame(() => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 51 */
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
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initDateTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flatpickr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_fields__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_textfield__ = __webpack_require__(11);




function initDateTime() {
    console.log('\tDateTime');
    let components = document.querySelectorAll('.v-datetime');
    for (let i = 0; i < components.length; i++) {
        let component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VDateTime(component, new __WEBPACK_IMPORTED_MODULE_2__material_textfield__["a" /* MDCTextField */](component));
        }
    }
}

class VDateTime extends __WEBPACK_IMPORTED_MODULE_1__text_fields__["a" /* VTextField */] {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        let config = JSON.parse(element.dataset.config);
        config.altInput = true;
        let type = element.dataset.type;

        if (type === 'datetime') {
            config.enableTime = true;
        } else if (type === 'time') {
            config.enableTime = true;
            config.noCalendar = true;
        }
        this.fp = __WEBPACK_IMPORTED_MODULE_0_flatpickr___default()(this.input, config);
    }

    clear() {
        this.fp.clear();
    }
}
/* unused harmony export VDateTime */


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
   true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.flatpickr = factory();
})(this, function () {
  'use strict';

  var pad = function pad(number) {
    return ("0" + number).slice(-2);
  };
  var int = function int(bool) {
    return bool === true ? 1 : 0;
  };
  function debounce(func, wait, immediate) {
    if (immediate === void 0) {
      immediate = false;
    }

    var timeout;
    return function () {
      var context = this,
          args = arguments;
      timeout !== null && clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }
  var arrayify = function arrayify(obj) {
    return obj instanceof Array ? obj : [obj];
  };

  var do_nothing = function do_nothing() {
    return undefined;
  };

  var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  };
  var revFormat = {
    D: do_nothing,
    F: function F(dateObj, monthName, locale) {
      dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function G(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    H: function H(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    J: function J(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    K: function K(dateObj, amPM, locale) {
      dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function M(dateObj, shortMonth, locale) {
      dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function S(dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    U: function U(_, unixSeconds) {
      return new Date(parseFloat(unixSeconds) * 1000);
    },
    W: function W(dateObj, weekNum) {
      var weekNumber = parseInt(weekNum);
      return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    },
    Y: function Y(dateObj, year) {
      dateObj.setFullYear(parseFloat(year));
    },
    Z: function Z(_, ISODate) {
      return new Date(ISODate);
    },
    d: function d(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    h: function h(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    i: function i(dateObj, minutes) {
      dateObj.setMinutes(parseFloat(minutes));
    },
    j: function j(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    l: do_nothing,
    m: function m(dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function n(dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function s(dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    w: do_nothing,
    y: function y(dateObj, year) {
      dateObj.setFullYear(2000 + parseFloat(year));
    }
  };
  var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  };
  var formats = {
    Z: function Z(date) {
      return date.toISOString();
    },
    D: function D(date, locale, options) {
      return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function F(date, locale, options) {
      return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function G(date, locale, options) {
      return pad(formats.h(date, locale, options));
    },
    H: function H(date) {
      return pad(date.getHours());
    },
    J: function J(date, locale) {
      return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    K: function K(date, locale) {
      return locale.amPM[int(date.getHours() > 11)];
    },
    M: function M(date, locale) {
      return monthToStr(date.getMonth(), true, locale);
    },
    S: function S(date) {
      return pad(date.getSeconds());
    },
    U: function U(date) {
      return date.getTime() / 1000;
    },
    W: function W(date, _, options) {
      return options.getWeek(date);
    },
    Y: function Y(date) {
      return date.getFullYear();
    },
    d: function d(date) {
      return pad(date.getDate());
    },
    h: function h(date) {
      return date.getHours() % 12 ? date.getHours() % 12 : 12;
    },
    i: function i(date) {
      return pad(date.getMinutes());
    },
    j: function j(date) {
      return date.getDate();
    },
    l: function l(date, locale) {
      return locale.weekdays.longhand[date.getDay()];
    },
    m: function m(date) {
      return pad(date.getMonth() + 1);
    },
    n: function n(date) {
      return date.getMonth() + 1;
    },
    s: function s(date) {
      return date.getSeconds();
    },
    w: function w(date) {
      return date.getDay();
    },
    y: function y(date) {
      return String(date.getFullYear()).substring(2);
    }
  };

  var english = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    months: {
      shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function ordinal(nth) {
      var s = nth % 100;
      if (s > 3 && s < 21) return "th";

      switch (s % 10) {
        case 1:
          return "st";

        case 2:
          return "nd";

        case 3:
          return "rd";

        default:
          return "th";
      }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year"
  };

  var createDateFormatter = function createDateFormatter(_ref) {
    var _ref$config = _ref.config,
        config = _ref$config === void 0 ? defaults : _ref$config,
        _ref$l10n = _ref.l10n,
        l10n = _ref$l10n === void 0 ? english : _ref$l10n;
    return function (dateObj, frmt, overrideLocale) {
      if (config.formatDate !== undefined) return config.formatDate(dateObj, frmt);
      var locale = overrideLocale || l10n;
      return frmt.split("").map(function (c, i, arr) {
        return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
      }).join("");
    };
  };
  var createDateParser = function createDateParser(_ref2) {
    var _ref2$config = _ref2.config,
        config = _ref2$config === void 0 ? defaults : _ref2$config,
        _ref2$l10n = _ref2.l10n,
        l10n = _ref2$l10n === void 0 ? english : _ref2$l10n;
    return function (date, givenFormat, timeless, customLocale) {
      if (date !== 0 && !date) return undefined;
      var locale = customLocale || l10n;
      var parsedDate;
      var date_orig = date;
      if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
        var format = givenFormat || (config || defaults).dateFormat;
        var datestr = String(date).trim();

        if (datestr === "today") {
          parsedDate = new Date();
          timeless = true;
        } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
          parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
          var matched,
              ops = [];

          for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
            var token = format[i];
            var isBackSlash = token === "\\";
            var escaped = format[i - 1] === "\\" || isBackSlash;

            if (tokenRegex[token] && !escaped) {
              regexStr += tokenRegex[token];
              var match = new RegExp(regexStr).exec(date);

              if (match && (matched = true)) {
                ops[token !== "Y" ? "push" : "unshift"]({
                  fn: revFormat[token],
                  val: match[++matchIndex]
                });
              }
            } else if (!isBackSlash) regexStr += ".";

            ops.forEach(function (_ref3) {
              var fn = _ref3.fn,
                  val = _ref3.val;
              return parsedDate = fn(parsedDate, val, locale) || parsedDate;
            });
          }

          parsedDate = matched ? parsedDate : undefined;
        }
      }

      if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
        config.errorHandler(new Error("Invalid date provided: " + date_orig));
        return undefined;
      }

      if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
      return parsedDate;
    };
  };
  function compareDates(date1, date2, timeless) {
    if (timeless === void 0) {
      timeless = true;
    }

    if (timeless !== false) {
      return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }

    return date1.getTime() - date2.getTime();
  }
  var getWeek = function getWeek(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  };
  var isBetween = function isBetween(ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
  };
  var duration = {
    DAY: 86400000
  };

  var defaults = {
    _disable: [],
    _enable: [],
    allowInput: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enable: [],
    enableSeconds: false,
    enableTime: false,
    errorHandler: function errorHandler(err) {
      return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: getWeek,
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
  };

  function toggleClass(elem, className, bool) {
    if (bool === true) return elem.classList.add(className);
    elem.classList.remove(className);
  }
  function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined) e.textContent = content;
    return e;
  }
  function clearNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
  function findParent(node, condition) {
    if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
    return undefined;
  }
  function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"),
        numInput = createElement("input", "numInput " + inputClassName),
        arrowUp = createElement("span", "arrowUp"),
        arrowDown = createElement("span", "arrowDown");
    numInput.type = "text";
    numInput.pattern = "\\d*";
    if (opts !== undefined) for (var key in opts) {
      numInput.setAttribute(key, opts[key]);
    }
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
  }

  if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
      if (!target) {
        throw TypeError("Cannot convert undefined or null to object");
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _loop = function _loop() {
        var source = args[_i];

        if (source) {
          Object.keys(source).forEach(function (key) {
            return target[key] = source[key];
          });
        }
      };

      for (var _i = 0; _i < args.length; _i++) {
        _loop();
      }

      return target;
    };
  }

  var DEBOUNCED_CHANGE_MS = 300;

  function FlatpickrInstance(element, instanceConfig) {
    var self = {
      config: Object.assign({}, flatpickr.defaultConfig),
      l10n: english
    };
    self.parseDate = createDateParser({
      config: self.config,
      l10n: self.l10n
    });
    self._handlers = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;

    function setupHelperFunctions() {
      self.utils = {
        getDaysInMonth: function getDaysInMonth(month, yr) {
          if (month === void 0) {
            month = self.currentMonth;
          }

          if (yr === void 0) {
            yr = self.currentYear;
          }

          if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
          return self.l10n.daysInMonth[month];
        }
      };
    }

    function init() {
      self.element = self.input = element;
      self.isOpen = false;
      parseConfig();
      setupLocale();
      setupInputs();
      setupDates();
      setupHelperFunctions();
      if (!self.isMobile) build();
      bindEvents();

      if (self.selectedDates.length || self.config.noCalendar) {
        if (self.config.enableTime) {
          setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
        }

        updateValue(false);
      }

      setCalendarWidth();
      self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      if (!self.isMobile && isSafari) {
        positionCalendar();
      }

      triggerEvent("onReady");
    }

    function bindToInstance(fn) {
      return fn.bind(self);
    }

    function setCalendarWidth() {
      var config = self.config;
      if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
        window.requestAnimationFrame(function () {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";

          if (self.daysContainer !== undefined) {
            var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
            self.daysContainer.style.width = daysWidth + "px";
            self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
            self.calendarContainer.style.removeProperty("visibility");
            self.calendarContainer.style.removeProperty("display");
          }
        });
      }
    }

    function updateTime(e) {
      if (self.selectedDates.length === 0) return;

      if (e !== undefined && e.type !== "blur") {
        timeWrapper(e);
      }

      var prevValue = self._input.value;
      setHoursFromInputs();
      updateValue();

      if (self._input.value !== prevValue) {
        self._debouncedChange();
      }
    }

    function ampm2military(hour, amPM) {
      return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
    }

    function military2ampm(hour) {
      switch (hour % 24) {
        case 0:
        case 12:
          return 12;

        default:
          return hour % 12;
      }
    }

    function setHoursFromInputs() {
      if (self.hourElement === undefined || self.minuteElement === undefined) return;
      var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
          minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
          seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

      if (self.amPM !== undefined) {
        hours = ampm2military(hours, self.amPM.textContent);
      }

      var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
      var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }

      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }

      setHours(hours, minutes, seconds);
    }

    function setHoursFromDate(dateObj) {
      var date = dateObj || self.latestSelectedDateObj;
      if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    function setDefaultHours() {
      var hours = self.config.defaultHour;
      var minutes = self.config.defaultMinute;
      var seconds = self.config.defaultSeconds;

      if (self.config.minDate !== undefined) {
        var min_hr = self.config.minDate.getHours();
        var min_minutes = self.config.minDate.getMinutes();
        hours = Math.max(hours, min_hr);
        if (hours === min_hr) minutes = Math.max(min_minutes, minutes);
        if (hours === min_hr && minutes === min_minutes) seconds = self.config.minDate.getSeconds();
      }

      if (self.config.maxDate !== undefined) {
        var max_hr = self.config.maxDate.getHours();
        var max_minutes = self.config.maxDate.getMinutes();
        hours = Math.min(hours, max_hr);
        if (hours === max_hr) minutes = Math.min(max_minutes, minutes);
        if (hours === max_hr && minutes === max_minutes) seconds = self.config.maxDate.getSeconds();
      }

      setHours(hours, minutes, seconds);
    }

    function setHours(hours, minutes, seconds) {
      if (self.latestSelectedDateObj !== undefined) {
        self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
      }

      if (!self.hourElement || !self.minuteElement || self.isMobile) return;
      self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
      self.minuteElement.value = pad(minutes);
      if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
      if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
    }

    function onYearInput(event) {
      var year = parseInt(event.target.value) + (event.delta || 0);

      if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
        changeYear(year);
      }
    }

    function bind(element, event, handler, options) {
      if (event instanceof Array) return event.forEach(function (ev) {
        return bind(element, ev, handler, options);
      });
      if (element instanceof Array) return element.forEach(function (el) {
        return bind(el, event, handler, options);
      });
      element.addEventListener(event, handler, options);

      self._handlers.push({
        element: element,
        event: event,
        handler: handler,
        options: options
      });
    }

    function onClick(handler) {
      return function (evt) {
        evt.which === 1 && handler(evt);
      };
    }

    function triggerChange() {
      triggerEvent("onChange");
    }

    function bindEvents() {
      if (self.config.wrap) {
        ["open", "close", "toggle", "clear"].forEach(function (evt) {
          Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
            return bind(el, "click", self[evt]);
          });
        });
      }

      if (self.isMobile) {
        setupMobile();
        return;
      }

      var debouncedResize = debounce(onResize, 50);
      self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
      if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
        if (self.config.mode === "range") onMouseOver(e.target);
      });
      bind(window.document.body, "keydown", onKeyDown);
      if (!self.config.static) bind(self._input, "keydown", onKeyDown);
      if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
      if (window.ontouchstart !== undefined) bind(window.document, "click", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
      bind(window.document, "focus", documentClick, {
        capture: true
      });

      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "mousedown", onClick(self.open));
      }

      if (self.daysContainer !== undefined) {
        bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
        bind(self.monthNav, ["keyup", "increment"], onYearInput);
        bind(self.daysContainer, "mousedown", onClick(selectDate));
      }

      if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
        var selText = function selText(e) {
          return e.target.select();
        };

        bind(self.timeContainer, ["increment"], updateTime);
        bind(self.timeContainer, "blur", updateTime, {
          capture: true
        });
        bind(self.timeContainer, "mousedown", onClick(timeIncrement));
        bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
        if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
          return self.secondElement && self.secondElement.select();
        });

        if (self.amPM !== undefined) {
          bind(self.amPM, "mousedown", onClick(function (e) {
            updateTime(e);
            triggerChange();
          }));
        }
      }
    }

    function jumpToDate(jumpDate) {
      var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

      try {
        if (jumpTo !== undefined) {
          self.currentYear = jumpTo.getFullYear();
          self.currentMonth = jumpTo.getMonth();
        }
      } catch (e) {
        e.message = "Invalid date supplied: " + jumpTo;
        self.config.errorHandler(e);
      }

      self.redraw();
    }

    function timeIncrement(e) {
      if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }

    function incrementNumInput(e, delta, inputElem) {
      var target = e && e.target;
      var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
      var event = createEvent("increment");
      event.delta = delta;
      input && input.dispatchEvent(event);
    }

    function build() {
      var fragment = window.document.createDocumentFragment();
      self.calendarContainer = createElement("div", "flatpickr-calendar");
      self.calendarContainer.tabIndex = -1;

      if (!self.config.noCalendar) {
        fragment.appendChild(buildMonthNav());
        self.innerContainer = createElement("div", "flatpickr-innerContainer");

        if (self.config.weekNumbers) {
          var _buildWeeks = buildWeeks(),
              weekWrapper = _buildWeeks.weekWrapper,
              weekNumbers = _buildWeeks.weekNumbers;

          self.innerContainer.appendChild(weekWrapper);
          self.weekNumbers = weekNumbers;
          self.weekWrapper = weekWrapper;
        }

        self.rContainer = createElement("div", "flatpickr-rContainer");
        self.rContainer.appendChild(buildWeekdays());

        if (!self.daysContainer) {
          self.daysContainer = createElement("div", "flatpickr-days");
          self.daysContainer.tabIndex = -1;
        }

        buildDays();
        self.rContainer.appendChild(self.daysContainer);
        self.innerContainer.appendChild(self.rContainer);
        fragment.appendChild(self.innerContainer);
      }

      if (self.config.enableTime) {
        fragment.appendChild(buildTime());
      }

      toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
      toggleClass(self.calendarContainer, "animate", self.config.animate === true);
      toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
      self.calendarContainer.appendChild(fragment);
      var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

      if (self.config.inline || self.config.static) {
        self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

        if (self.config.inline) {
          if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
        }

        if (self.config.static) {
          var wrapper = createElement("div", "flatpickr-wrapper");
          if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
          wrapper.appendChild(self.element);
          if (self.altInput) wrapper.appendChild(self.altInput);
          wrapper.appendChild(self.calendarContainer);
        }
      }

      if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }

    function createDay(className, date, dayNumber, i) {
      var dateIsEnabled = isEnabled(date, true),
          dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
      dayElement.dateObj = date;
      dayElement.$i = i;
      dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

      if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
        self.todayDateElem = dayElement;
        dayElement.classList.add("today");
        dayElement.setAttribute("aria-current", "date");
      }

      if (dateIsEnabled) {
        dayElement.tabIndex = -1;

        if (isDateSelected(date)) {
          dayElement.classList.add("selected");
          self.selectedDateElem = dayElement;

          if (self.config.mode === "range") {
            toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
            toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
            if (className === "nextMonthDay") dayElement.classList.add("inRange");
          }
        }
      } else {
        dayElement.classList.add("disabled");
      }

      if (self.config.mode === "range") {
        if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
      }

      if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
        self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
      }

      triggerEvent("onDayCreate", dayElement);
      return dayElement;
    }

    function focusOnDayElem(targetNode) {
      targetNode.focus();
      if (self.config.mode === "range") onMouseOver(targetNode);
    }

    function getFirstAvailableDay(delta) {
      var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
      var endMonth = delta > 0 ? self.config.showMonths : -1;

      for (var m = startMonth; m != endMonth; m += delta) {
        var month = self.daysContainer.children[m];
        var startIndex = delta > 0 ? 0 : month.children.length - 1;
        var endIndex = delta > 0 ? month.children.length : -1;

        for (var i = startIndex; i != endIndex; i += delta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
        }
      }

      return undefined;
    }

    function getNextAvailableDay(current, delta) {
      var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
      var endMonth = delta > 0 ? self.config.showMonths : -1;
      var loopDelta = delta > 0 ? 1 : -1;

      for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
        var month = self.daysContainer.children[m];
        var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
        var numMonthDays = month.children.length;

        for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
        }
      }

      self.changeMonth(loopDelta);
      focusOnDay(getFirstAvailableDay(loopDelta), 0);
      return undefined;
    }

    function focusOnDay(current, offset) {
      var dayFocused = isInView(document.activeElement);
      var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
      if (startElem === undefined) return self._input.focus();
      if (!dayFocused) return focusOnDayElem(startElem);
      getNextAvailableDay(startElem, offset);
    }

    function buildMonthDays(year, month) {
      var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
      var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
      var daysInMonth = self.utils.getDaysInMonth(month),
          days = window.document.createDocumentFragment(),
          isMultiMonth = self.config.showMonths > 1,
          prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
          nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
      var dayNumber = prevMonthDays + 1 - firstOfMonth,
          dayIndex = 0;

      for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
        days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
      }

      for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
        days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
      }

      for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
        days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
      }

      var dayContainer = createElement("div", "dayContainer");
      dayContainer.appendChild(days);
      return dayContainer;
    }

    function buildDays() {
      if (self.daysContainer === undefined) {
        return;
      }

      clearNode(self.daysContainer);
      if (self.weekNumbers) clearNode(self.weekNumbers);
      var frag = document.createDocumentFragment();

      for (var i = 0; i < self.config.showMonths; i++) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
      }

      self.daysContainer.appendChild(frag);
      self.days = self.daysContainer.firstChild;

      if (self.config.mode === "range" && self.selectedDates.length === 1) {
        onMouseOver();
      }
    }

    function buildMonth() {
      var container = createElement("div", "flatpickr-month");
      var monthNavFragment = window.document.createDocumentFragment();
      var monthElement = createElement("span", "cur-month");
      var yearInput = createNumberInput("cur-year", {
        tabindex: "-1"
      });
      var yearElement = yearInput.childNodes[0];
      yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
      if (self.config.minDate) yearElement.setAttribute("data-min", self.config.minDate.getFullYear().toString());

      if (self.config.maxDate) {
        yearElement.setAttribute("data-max", self.config.maxDate.getFullYear().toString());
        yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
      }

      var currentMonth = createElement("div", "flatpickr-current-month");
      currentMonth.appendChild(monthElement);
      currentMonth.appendChild(yearInput);
      monthNavFragment.appendChild(currentMonth);
      container.appendChild(monthNavFragment);
      return {
        container: container,
        yearElement: yearElement,
        monthElement: monthElement
      };
    }

    function buildMonths() {
      clearNode(self.monthNav);
      self.monthNav.appendChild(self.prevMonthNav);

      for (var m = self.config.showMonths; m--;) {
        var month = buildMonth();
        self.yearElements.push(month.yearElement);
        self.monthElements.push(month.monthElement);
        self.monthNav.appendChild(month.container);
      }

      self.monthNav.appendChild(self.nextMonthNav);
    }

    function buildMonthNav() {
      self.monthNav = createElement("div", "flatpickr-months");
      self.yearElements = [];
      self.monthElements = [];
      self.prevMonthNav = createElement("span", "flatpickr-prev-month");
      self.prevMonthNav.innerHTML = self.config.prevArrow;
      self.nextMonthNav = createElement("span", "flatpickr-next-month");
      self.nextMonthNav.innerHTML = self.config.nextArrow;
      buildMonths();
      Object.defineProperty(self, "_hidePrevMonthArrow", {
        get: function get() {
          return self.__hidePrevMonthArrow;
        },
        set: function set(bool) {
          if (self.__hidePrevMonthArrow !== bool) {
            toggleClass(self.prevMonthNav, "disabled", bool);
            self.__hidePrevMonthArrow = bool;
          }
        }
      });
      Object.defineProperty(self, "_hideNextMonthArrow", {
        get: function get() {
          return self.__hideNextMonthArrow;
        },
        set: function set(bool) {
          if (self.__hideNextMonthArrow !== bool) {
            toggleClass(self.nextMonthNav, "disabled", bool);
            self.__hideNextMonthArrow = bool;
          }
        }
      });
      self.currentYearElement = self.yearElements[0];
      updateNavigationCurrentMonth();
      return self.monthNav;
    }

    function buildTime() {
      self.calendarContainer.classList.add("hasTime");
      if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
      self.timeContainer = createElement("div", "flatpickr-time");
      self.timeContainer.tabIndex = -1;
      var separator = createElement("span", "flatpickr-time-separator", ":");
      var hourInput = createNumberInput("flatpickr-hour");
      self.hourElement = hourInput.childNodes[0];
      var minuteInput = createNumberInput("flatpickr-minute");
      self.minuteElement = minuteInput.childNodes[0];
      self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
      self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
      self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
      self.hourElement.setAttribute("data-step", self.config.hourIncrement.toString());
      self.minuteElement.setAttribute("data-step", self.config.minuteIncrement.toString());
      self.hourElement.setAttribute("data-min", self.config.time_24hr ? "0" : "1");
      self.hourElement.setAttribute("data-max", self.config.time_24hr ? "23" : "12");
      self.minuteElement.setAttribute("data-min", "0");
      self.minuteElement.setAttribute("data-max", "59");
      self.timeContainer.appendChild(hourInput);
      self.timeContainer.appendChild(separator);
      self.timeContainer.appendChild(minuteInput);
      if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

      if (self.config.enableSeconds) {
        self.timeContainer.classList.add("hasSeconds");
        var secondInput = createNumberInput("flatpickr-second");
        self.secondElement = secondInput.childNodes[0];
        self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
        self.secondElement.setAttribute("data-step", self.minuteElement.getAttribute("data-step"));
        self.secondElement.setAttribute("data-min", self.minuteElement.getAttribute("data-min"));
        self.secondElement.setAttribute("data-max", self.minuteElement.getAttribute("data-max"));
        self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
        self.timeContainer.appendChild(secondInput);
      }

      if (!self.config.time_24hr) {
        self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
        self.amPM.title = self.l10n.toggleTitle;
        self.amPM.tabIndex = -1;
        self.timeContainer.appendChild(self.amPM);
      }

      return self.timeContainer;
    }

    function buildWeekdays() {
      if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

      for (var i = self.config.showMonths; i--;) {
        var container = createElement("div", "flatpickr-weekdaycontainer");
        self.weekdayContainer.appendChild(container);
      }

      updateWeekdays();
      return self.weekdayContainer;
    }

    function updateWeekdays() {
      var firstDayOfWeek = self.l10n.firstDayOfWeek;
      var weekdays = self.l10n.weekdays.shorthand.concat();

      if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
        weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
      }

      for (var i = self.config.showMonths; i--;) {
        self.weekdayContainer.children[i].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      ";
      }
    }

    function buildWeeks() {
      self.calendarContainer.classList.add("hasWeeks");
      var weekWrapper = createElement("div", "flatpickr-weekwrapper");
      weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
      var weekNumbers = createElement("div", "flatpickr-weeks");
      weekWrapper.appendChild(weekNumbers);
      return {
        weekWrapper: weekWrapper,
        weekNumbers: weekNumbers
      };
    }

    function changeMonth(value, is_offset) {
      if (is_offset === void 0) {
        is_offset = true;
      }

      var delta = is_offset ? value : value - self.currentMonth;
      if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
      self.currentMonth += delta;

      if (self.currentMonth < 0 || self.currentMonth > 11) {
        self.currentYear += self.currentMonth > 11 ? 1 : -1;
        self.currentMonth = (self.currentMonth + 12) % 12;
        triggerEvent("onYearChange");
      }

      buildDays();
      triggerEvent("onMonthChange");
      updateNavigationCurrentMonth();
    }

    function clear(triggerChangeEvent) {
      if (triggerChangeEvent === void 0) {
        triggerChangeEvent = true;
      }

      self.input.value = "";
      if (self.altInput !== undefined) self.altInput.value = "";
      if (self.mobileInput !== undefined) self.mobileInput.value = "";
      self.selectedDates = [];
      self.latestSelectedDateObj = undefined;
      self.showTimeInput = false;

      if (self.config.enableTime === true) {
        setDefaultHours();
      }

      self.redraw();
      if (triggerChangeEvent) triggerEvent("onChange");
    }

    function close() {
      self.isOpen = false;

      if (!self.isMobile) {
        self.calendarContainer.classList.remove("open");

        self._input.classList.remove("active");
      }

      triggerEvent("onClose");
    }

    function destroy() {
      if (self.config !== undefined) triggerEvent("onDestroy");

      for (var i = self._handlers.length; i--;) {
        var h = self._handlers[i];
        h.element.removeEventListener(h.event, h.handler, h.options);
      }

      self._handlers = [];

      if (self.mobileInput) {
        if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
        self.mobileInput = undefined;
      } else if (self.calendarContainer && self.calendarContainer.parentNode) {
        if (self.config.static && self.calendarContainer.parentNode) {
          var wrapper = self.calendarContainer.parentNode;
          wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

          while (wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          }

          wrapper.parentNode.removeChild(wrapper);
        } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
      }

      if (self.altInput) {
        self.input.type = "text";
        if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
        delete self.altInput;
      }

      if (self.input) {
        self.input.type = self.input._type;
        self.input.classList.remove("flatpickr-input");
        self.input.removeAttribute("readonly");
        self.input.value = "";
      }

      ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
        try {
          delete self[k];
        } catch (_) {}
      });
    }

    function isCalendarElem(elem) {
      if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
      return self.calendarContainer.contains(elem);
    }

    function documentClick(e) {
      if (self.isOpen && !self.config.inline) {
        var isCalendarElement = isCalendarElem(e.target);
        var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
        var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;
        var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
          return elem.contains(e.target);
        });

        if (lostFocus && isIgnored) {
          self.close();

          if (self.config.mode === "range" && self.selectedDates.length === 1) {
            self.clear(false);
            self.redraw();
          }
        }
      }
    }

    function changeYear(newYear) {
      if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
      var newYearNum = newYear,
          isNewYear = self.currentYear !== newYearNum;
      self.currentYear = newYearNum || self.currentYear;

      if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
        self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
      } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
        self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
      }

      if (isNewYear) {
        self.redraw();
        triggerEvent("onYearChange");
      }
    }

    function isEnabled(date, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }

      var dateToCheck = self.parseDate(date, undefined, timeless);
      if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
      if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
      if (dateToCheck === undefined) return false;
      var bool = self.config.enable.length > 0,
          array = bool ? self.config.enable : self.config.disable;

      for (var i = 0, d; i < array.length; i++) {
        d = array[i];
        if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
          var parsed = self.parseDate(d, undefined, true);
          return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
        } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
      }

      return !bool;
    }

    function isInView(elem) {
      if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
      return false;
    }

    function onKeyDown(e) {
      var isInput = e.target === self._input;
      var allowInput = self.config.allowInput;
      var allowKeydown = self.isOpen && (!allowInput || !isInput);
      var allowInlineKeydown = self.config.inline && isInput && !allowInput;

      if (e.keyCode === 13 && isInput) {
        if (allowInput) {
          self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
          return e.target.blur();
        } else self.open();
      } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
        var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

        switch (e.keyCode) {
          case 13:
            if (isTimeObj) updateTime();else selectDate(e);
            break;

          case 27:
            e.preventDefault();
            focusAndClose();
            break;

          case 8:
          case 46:
            if (isInput && !self.config.allowInput) {
              e.preventDefault();
              self.clear();
            }

            break;

          case 37:
          case 39:
            if (!isTimeObj) {
              e.preventDefault();

              if (self.daysContainer !== undefined && (allowInput === false || isInView(document.activeElement))) {
                var _delta = e.keyCode === 39 ? 1 : -1;

                if (!e.ctrlKey) focusOnDay(undefined, _delta);else {
                  changeMonth(_delta);
                  focusOnDay(getFirstAvailableDay(1), 0);
                }
              }
            } else if (self.hourElement) self.hourElement.focus();

            break;

          case 38:
          case 40:
            e.preventDefault();
            var delta = e.keyCode === 40 ? 1 : -1;

            if (self.daysContainer) {
              if (e.ctrlKey) {
                changeYear(self.currentYear - delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
            } else if (self.config.enableTime) {
              if (!isTimeObj && self.hourElement) self.hourElement.focus();
              updateTime(e);

              self._debouncedChange();
            }

            break;

          case 9:
            if (!isTimeObj) break;
            var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].filter(function (x) {
              return x;
            });
            var i = elems.indexOf(e.target);

            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];

              if (target !== undefined) {
                e.preventDefault();
                target.focus();
              }
            }

            break;

          default:
            break;
        }
      }

      if (self.amPM !== undefined && e.target === self.amPM) {
        switch (e.key) {
          case self.l10n.amPM[0].charAt(0):
          case self.l10n.amPM[0].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[0];
            setHoursFromInputs();
            updateValue();
            break;

          case self.l10n.amPM[1].charAt(0):
          case self.l10n.amPM[1].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[1];
            setHoursFromInputs();
            updateValue();
            break;
        }
      }

      triggerEvent("onKeyDown", e);
    }

    function onMouseOver(elem) {
      if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("disabled"))) return;
      var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
          initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
          rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
          rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime()),
          lastDate = self.daysContainer.lastChild.lastChild.dateObj.getTime();
      var containsDisabled = false;
      var minRange = 0,
          maxRange = 0;

      for (var t = rangeStartDate; t < lastDate; t += duration.DAY) {
        if (!isEnabled(new Date(t), true)) {
          containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
          if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
        }
      }

      for (var m = 0; m < self.config.showMonths; m++) {
        var month = self.daysContainer.children[m];
        var prevMonth = self.daysContainer.children[m - 1];

        var _loop = function _loop(i, l) {
          var dayElem = month.children[i],
              date = dayElem.dateObj;
          var timestamp = date.getTime();
          var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

          if (outOfRange) {
            dayElem.classList.add("notAllowed");
            ["inRange", "startRange", "endRange"].forEach(function (c) {
              dayElem.classList.remove(c);
            });
            return "continue";
          } else if (containsDisabled && !outOfRange) return "continue";

          ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
            dayElem.classList.remove(c);
          });

          if (elem !== undefined) {
            elem.classList.add(hoverDate < self.selectedDates[0].getTime() ? "startRange" : "endRange");

            if (month.contains(elem) || !(m > 0 && prevMonth && prevMonth.lastChild.dateObj.getTime() >= timestamp)) {
              if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
              if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
            }
          }
        };

        for (var i = 0, l = month.children.length; i < l; i++) {
          var _ret = _loop(i, l);

          if (_ret === "continue") continue;
        }
      }
    }

    function onResize() {
      if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
    }

    function open(e, positionElement) {
      if (positionElement === void 0) {
        positionElement = self._positionElement;
      }

      if (self.isMobile === true) {
        if (e) {
          e.preventDefault();
          e.target && e.target.blur();
        }

        setTimeout(function () {
          self.mobileInput !== undefined && self.mobileInput.focus();
        }, 0);
        triggerEvent("onOpen");
        return;
      }

      if (self._input.disabled || self.config.inline) return;
      var wasOpen = self.isOpen;
      self.isOpen = true;

      if (!wasOpen) {
        self.calendarContainer.classList.add("open");

        self._input.classList.add("active");

        triggerEvent("onOpen");
        positionCalendar(positionElement);
      }

      if (self.config.enableTime === true && self.config.noCalendar === true) {
        if (self.selectedDates.length === 0) {
          self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), false);
          setDefaultHours();
          updateValue();
        }

        if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
          setTimeout(function () {
            return self.hourElement.select();
          }, 50);
        }
      }
    }

    function minMaxDateSetter(type) {
      return function (date) {
        var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
        var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

        if (dateObj !== undefined) {
          self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
        }

        if (self.selectedDates) {
          self.selectedDates = self.selectedDates.filter(function (d) {
            return isEnabled(d);
          });
          if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
          updateValue();
        }

        if (self.daysContainer) {
          redraw();
          if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
          self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
        }
      };
    }

    function parseConfig() {
      var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
      var hooks = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
      var userConfig = Object.assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
      var formats$$1 = {};
      self.config.parseDate = userConfig.parseDate;
      self.config.formatDate = userConfig.formatDate;
      Object.defineProperty(self.config, "enable", {
        get: function get() {
          return self.config._enable;
        },
        set: function set(dates) {
          self.config._enable = parseDateRules(dates);
        }
      });
      Object.defineProperty(self.config, "disable", {
        get: function get() {
          return self.config._disable;
        },
        set: function set(dates) {
          self.config._disable = parseDateRules(dates);
        }
      });
      var timeMode = userConfig.mode === "time";

      if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
        formats$$1.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
      }

      if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
        formats$$1.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
      }

      Object.defineProperty(self.config, "minDate", {
        get: function get() {
          return self.config._minDate;
        },
        set: minMaxDateSetter("min")
      });
      Object.defineProperty(self.config, "maxDate", {
        get: function get() {
          return self.config._maxDate;
        },
        set: minMaxDateSetter("max")
      });

      var minMaxTimeSetter = function minMaxTimeSetter(type) {
        return function (val) {
          self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i");
        };
      };

      Object.defineProperty(self.config, "minTime", {
        get: function get() {
          return self.config._minTime;
        },
        set: minMaxTimeSetter("min")
      });
      Object.defineProperty(self.config, "maxTime", {
        get: function get() {
          return self.config._maxTime;
        },
        set: minMaxTimeSetter("max")
      });

      if (userConfig.mode === "time") {
        self.config.noCalendar = true;
        self.config.enableTime = true;
      }

      Object.assign(self.config, formats$$1, userConfig);

      for (var i = 0; i < boolOpts.length; i++) {
        self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
      }

      for (var _i = hooks.length; _i--;) {
        if (self.config[hooks[_i]] !== undefined) {
          self.config[hooks[_i]] = arrayify(self.config[hooks[_i]] || []).map(bindToInstance);
        }
      }

      self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      for (var _i2 = 0; _i2 < self.config.plugins.length; _i2++) {
        var pluginConf = self.config.plugins[_i2](self) || {};

        for (var key in pluginConf) {
          if (~hooks.indexOf(key)) {
            self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
          } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
        }
      }

      triggerEvent("onParseConfig");
    }

    function setupLocale() {
      if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
      self.l10n = Object.assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
      tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
      self.formatDate = createDateFormatter(self);
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
    }

    function positionCalendar(customPositionElement) {
      if (self.calendarContainer === undefined) return;
      triggerEvent("onPreCalendarPosition");
      var positionElement = customPositionElement || self._positionElement;
      var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
        return acc + child.offsetHeight;
      }, 0),
          calendarWidth = self.calendarContainer.offsetWidth,
          configPos = self.config.position.split(" "),
          configPosVertical = configPos[0],
          configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
          inputBounds = positionElement.getBoundingClientRect(),
          distanceFromBottom = window.innerHeight - inputBounds.bottom,
          showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
      var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
      toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
      toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
      if (self.config.inline) return;
      var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
      var right = window.document.body.offsetWidth - inputBounds.right;
      var rightMost = left + calendarWidth > window.document.body.offsetWidth;
      toggleClass(self.calendarContainer, "rightMost", rightMost);
      if (self.config.static) return;
      self.calendarContainer.style.top = top + "px";

      if (!rightMost) {
        self.calendarContainer.style.left = left + "px";
        self.calendarContainer.style.right = "auto";
      } else {
        self.calendarContainer.style.left = "auto";
        self.calendarContainer.style.right = right + "px";
      }
    }

    function redraw() {
      if (self.config.noCalendar || self.isMobile) return;
      updateNavigationCurrentMonth();
      buildDays();
    }

    function focusAndClose() {
      self._input.focus();

      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
        setTimeout(self.close, 0);
      } else {
        self.close();
      }
    }

    function selectDate(e) {
      e.preventDefault();
      e.stopPropagation();

      var isSelectable = function isSelectable(day) {
        return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("disabled") && !day.classList.contains("notAllowed");
      };

      var t = findParent(e.target, isSelectable);
      if (t === undefined) return;
      var target = t;
      var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
      var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
      self.selectedDateElem = target;
      if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
        var selectedIndex = isDateSelected(selectedDate);
        if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
      } else if (self.config.mode === "range") {
        if (self.selectedDates.length === 2) self.clear(false);
        self.selectedDates.push(selectedDate);
        if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }
      setHoursFromInputs();

      if (shouldChangeMonth) {
        var isNewYear = self.currentYear !== selectedDate.getFullYear();
        self.currentYear = selectedDate.getFullYear();
        self.currentMonth = selectedDate.getMonth();
        if (isNewYear) triggerEvent("onYearChange");
        triggerEvent("onMonthChange");
      }

      updateNavigationCurrentMonth();
      buildDays();
      updateValue();
      if (self.config.enableTime) setTimeout(function () {
        return self.showTimeInput = true;
      }, 50);
      if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else self.selectedDateElem && self.selectedDateElem.focus();
      if (self.hourElement !== undefined) setTimeout(function () {
        return self.hourElement !== undefined && self.hourElement.select();
      }, 451);

      if (self.config.closeOnSelect) {
        var single = self.config.mode === "single" && !self.config.enableTime;
        var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

        if (single || range) {
          focusAndClose();
        }
      }

      triggerChange();
    }

    var CALLBACKS = {
      locale: [setupLocale, updateWeekdays],
      showMonths: [buildMonths, setCalendarWidth, buildWeekdays]
    };

    function set(option, value) {
      if (option !== null && typeof option === "object") Object.assign(self.config, option);else {
        self.config[option] = value;
        if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
          return x();
        });
      }
      self.redraw();
      jumpToDate();
    }

    function setSelectedDate(inputDate, format) {
      var dates = [];
      if (inputDate instanceof Array) dates = inputDate.map(function (d) {
        return self.parseDate(d, format);
      });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
        switch (self.config.mode) {
          case "single":
          case "time":
            dates = [self.parseDate(inputDate, format)];
            break;

          case "multiple":
            dates = inputDate.split(self.config.conjunction).map(function (date) {
              return self.parseDate(date, format);
            });
            break;

          case "range":
            dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
              return self.parseDate(date, format);
            });
            break;

          default:
            break;
        }
      } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
      self.selectedDates = dates.filter(function (d) {
        return d instanceof Date && isEnabled(d, false);
      });
      if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }

    function setDate(date, triggerChange, format) {
      if (triggerChange === void 0) {
        triggerChange = false;
      }

      if (format === void 0) {
        format = self.config.dateFormat;
      }

      if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
      setSelectedDate(date, format);
      self.showTimeInput = self.selectedDates.length > 0;
      self.latestSelectedDateObj = self.selectedDates[0];
      self.redraw();
      jumpToDate();
      setHoursFromDate();
      updateValue(triggerChange);
      if (triggerChange) triggerEvent("onChange");
    }

    function parseDateRules(arr) {
      return arr.slice().map(function (rule) {
        if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
          return self.parseDate(rule, undefined, true);
        } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
          from: self.parseDate(rule.from, undefined),
          to: self.parseDate(rule.to, undefined)
        };

        return rule;
      }).filter(function (x) {
        return x;
      });
    }

    function setupDates() {
      self.selectedDates = [];
      self.now = self.parseDate(self.config.now) || new Date();
      var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
      if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
      var initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
      self.currentYear = initialDate.getFullYear();
      self.currentMonth = initialDate.getMonth();
      if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
      if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
      if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
      self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
      self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
      Object.defineProperty(self, "showTimeInput", {
        get: function get() {
          return self._showTimeInput;
        },
        set: function set(bool) {
          self._showTimeInput = bool;
          if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
          self.isOpen && positionCalendar();
        }
      });
    }

    function setupInputs() {
      self.input = self.config.wrap ? element.querySelector("[data-input]") : element;

      if (!self.input) {
        self.config.errorHandler(new Error("Invalid input element specified"));
        return;
      }

      self.input._type = self.input.type;
      self.input.type = "text";
      self.input.classList.add("flatpickr-input");
      self._input = self.input;

      if (self.config.altInput) {
        self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
        self._input = self.altInput;
        self.altInput.placeholder = self.input.placeholder;
        self.altInput.disabled = self.input.disabled;
        self.altInput.required = self.input.required;
        self.altInput.tabIndex = self.input.tabIndex;
        self.altInput.type = "text";
        self.input.setAttribute("type", "hidden");
        if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
      }

      if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
      self._positionElement = self.config.positionElement || self._input;
    }

    function setupMobile() {
      var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
      self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
      self.mobileInput.step = self.input.getAttribute("step") || "any";
      self.mobileInput.tabIndex = 1;
      self.mobileInput.type = inputType;
      self.mobileInput.disabled = self.input.disabled;
      self.mobileInput.required = self.input.required;
      self.mobileInput.placeholder = self.input.placeholder;
      self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

      if (self.selectedDates.length > 0) {
        self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
      }

      if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
      if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
      self.input.type = "hidden";
      if (self.altInput !== undefined) self.altInput.type = "hidden";

      try {
        if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
      } catch (_a) {}

      bind(self.mobileInput, "change", function (e) {
        self.setDate(e.target.value, false, self.mobileFormatStr);
        triggerEvent("onChange");
        triggerEvent("onClose");
      });
    }

    function toggle(e) {
      if (self.isOpen === true) return self.close();
      self.open(e);
    }

    function triggerEvent(event, data) {
      var hooks = self.config[event];

      if (hooks !== undefined && hooks.length > 0) {
        for (var i = 0; hooks[i] && i < hooks.length; i++) {
          hooks[i](self.selectedDates, self.input.value, self, data);
        }
      }

      if (event === "onChange") {
        self.input.dispatchEvent(createEvent("change"));
        self.input.dispatchEvent(createEvent("input"));
      }
    }

    function createEvent(name) {
      var e = document.createEvent("Event");
      e.initEvent(name, true, true);
      return e;
    }

    function isDateSelected(date) {
      for (var i = 0; i < self.selectedDates.length; i++) {
        if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
      }

      return false;
    }

    function isDateInRange(date) {
      if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
      return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
    }

    function updateNavigationCurrentMonth() {
      if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
      self.yearElements.forEach(function (yearElement, i) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
        yearElement.value = d.getFullYear().toString();
      });
      self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
      self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
    }

    function updateValue(triggerChange) {
      if (triggerChange === void 0) {
        triggerChange = true;
      }

      if (self.selectedDates.length === 0) return self.clear(triggerChange);

      if (self.mobileInput !== undefined && self.mobileFormatStr) {
        self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
      }

      var joinChar = self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator;
      self.input.value = self.selectedDates.map(function (dObj) {
        return self.formatDate(dObj, self.config.dateFormat);
      }).join(joinChar);

      if (self.altInput !== undefined) {
        self.altInput.value = self.selectedDates.map(function (dObj) {
          return self.formatDate(dObj, self.config.altFormat);
        }).join(joinChar);
      }

      if (triggerChange !== false) triggerEvent("onValueUpdate");
    }

    function onMonthNavClick(e) {
      e.preventDefault();
      var isPrevMonth = self.prevMonthNav.contains(e.target);
      var isNextMonth = self.nextMonthNav.contains(e.target);

      if (isPrevMonth || isNextMonth) {
        changeMonth(isPrevMonth ? -1 : 1);
      } else if (self.yearElements.indexOf(e.target) >= 0) {
        e.target.select();
      } else if (e.target.classList.contains("arrowUp")) {
        self.changeYear(self.currentYear + 1);
      } else if (e.target.classList.contains("arrowDown")) {
        self.changeYear(self.currentYear - 1);
      }
    }

    function timeWrapper(e) {
      e.preventDefault();
      var isKeyDown = e.type === "keydown",
          input = e.target;

      if (self.amPM !== undefined && e.target === self.amPM) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }

      var min = parseFloat(input.getAttribute("data-min")),
          max = parseFloat(input.getAttribute("data-max")),
          step = parseFloat(input.getAttribute("data-step")),
          curValue = parseInt(input.value, 10),
          delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
      var newValue = curValue + step * delta;

      if (typeof input.value !== "undefined" && input.value.length === 2) {
        var isHourElem = input === self.hourElement,
            isMinuteElem = input === self.minuteElement;

        if (newValue < min) {
          newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
          if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
        } else if (newValue > max) {
          newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
          if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
        }

        if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        input.value = pad(newValue);
      }
    }

    init();
    return self;
  }

  function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice.call(nodeList);
    var instances = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      try {
        if (node.getAttribute("data-fp-omit") !== null) continue;

        if (node._flatpickr !== undefined) {
          node._flatpickr.destroy();

          node._flatpickr = undefined;
        }

        node._flatpickr = FlatpickrInstance(node, config || {});
        instances.push(node._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }

    return instances.length === 1 ? instances[0] : instances;
  }

  if (typeof HTMLElement !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
      return _flatpickr(this, config);
    };

    HTMLElement.prototype.flatpickr = function (config) {
      return _flatpickr([this], config);
    };
  }

  var flatpickr = function flatpickr(selector, config) {
    if (selector instanceof NodeList) return _flatpickr(selector, config);else if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
    return _flatpickr([selector], config);
  };

  flatpickr.defaultConfig = defaults;
  flatpickr.l10ns = {
    en: Object.assign({}, english),
    default: Object.assign({}, english)
  };

  flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = Object.assign({}, flatpickr.l10ns.default, l10n);
  };

  flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = Object.assign({}, flatpickr.defaultConfig, config);
  };

  flatpickr.parseDate = createDateParser({});
  flatpickr.formatDate = createDateFormatter({});
  flatpickr.compareDates = compareDates;

  if (typeof jQuery !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
      return _flatpickr(this, config);
    };
  }

  Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
  };

  if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
  }

  return flatpickr;
});

/***/ }),
/* 55 */
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
/* 56 */
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
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_text_foundation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_foundation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(18);
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



/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */
class MDCTextFieldFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* cssClasses */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* strings */];
  }

  /** @return enum {string} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* numbers */];
  }

  /** @return {boolean} */
  get shouldShake() {
    return !this.isValid() && !this.isFocused_;
  }

  /** @return {boolean} */
  get shouldFloat() {
    return this.isFocused_ || !!this.getValue() || this.isBadInput_();
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
    this.validationAttributeChangeHandler_ = attributesList => this.handleValidationAttributeChange(attributesList);

    /** @private {!MutationObserver} */
    this.validationObserver_;
  }

  init() {
    this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    // Ensure label does not collide with any pre-filled value.
    if (this.adapter_.hasLabel() && (this.getValue() || this.isBadInput_())) {
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
   * @param {!Array<string>} attributesList
   */
  handleValidationAttributeChange(attributesList) {
    attributesList.some(attributeName => {
      if (__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* VALIDATION_ATTR_WHITELIST */].indexOf(attributeName) > -1) {
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
      const isDense = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* cssClasses */].DENSE);
      const labelScale = isDense ? __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* numbers */].DENSE_LABEL_SCALE : __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* numbers */].LABEL_SCALE;
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
   * Sets the aria label of the icon.
   * @param {string} label
   */
  setIconAriaLabel(label) {
    if (this.icon_) {
      this.icon_.setAriaLabel(label);
    }
  }

  /**
   * Sets the text content of the icon.
   * @param {string} content
   */
  setIconContent(content) {
    if (this.icon_) {
      this.icon_.setContent(content);
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(59);
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
   * @param {number} xCoordinate
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
/* 59 */
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldHelperText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(12);
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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(13);
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
      getAttr: attr => this.root_.getAttribute(attr),
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      removeAttr: attr => this.root_.removeAttribute(attr),
      setContent: content => {
        this.root_.textContent = content;
      },
      registerInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      notifyIconAction: () => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */)
    }));
  }
}



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(63);
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
/* 63 */
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
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(28);
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
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_loads__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_posts__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_replaces__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_dialog__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_errors__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_toggle_visibility__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_snackbar__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_autocomplete__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_navigates__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__events_clears__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__events_stepper__ = __webpack_require__(78);












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
            return function (results) {
                return Promise.resolve(action.call(results));
            };
        });

        // Execute a list of Promise return functions in series
        function pseries(list) {
            var p = Promise.resolve([]);
            return list.reduce(function (pacc, fn) {
                return pacc = pacc.then(fn);
            }, p);
        }

        var event = this.event;

        pseries(fnlist).then(function (results) {
            var result = results.pop();
            var contentType = result.contentType;
            var responseURL = result.responseURL;

            if (event.target.dialog) {
                event.target.dialog.close();
            }
            if (contentType && contentType.indexOf("text/html") !== -1 && typeof responseURL !== 'undefined') {
                window.location = responseURL;
            }
        }).catch(function (results) {
            console.log("If you got here it may not be what you think:", results);

            var result = results.pop();
            new __WEBPACK_IMPORTED_MODULE_4__events_errors__["a" /* VErrors */](event).displayErrors(result);
        });
    }

    static action_class(action, event) {
        var action_type = action[0];
        var url = action[1];
        var options = action[2];
        var params = action[3];

        switch (action_type) {
            case 'loads':
                return new __WEBPACK_IMPORTED_MODULE_0__events_loads__["a" /* VLoads */](options, url, params, event);
            case 'replaces':
                return new __WEBPACK_IMPORTED_MODULE_2__events_replaces__["a" /* VReplaces */](options, url, params, event);
            case 'post':
                return new __WEBPACK_IMPORTED_MODULE_1__events_posts__["a" /* VPosts */](options, url, params, 'POST', event);
            case 'update':
                return new __WEBPACK_IMPORTED_MODULE_1__events_posts__["a" /* VPosts */](options, url, params, 'PUT', event);
            case 'delete':
                return new __WEBPACK_IMPORTED_MODULE_1__events_posts__["a" /* VPosts */](options, url, params, 'DELETE', event);
            case 'dialog':
                return new __WEBPACK_IMPORTED_MODULE_3__events_dialog__["a" /* VDialog */](options, params, event);
            case 'toggle_visibility':
                return new __WEBPACK_IMPORTED_MODULE_5__events_toggle_visibility__["a" /* VToggleVisibility */](options, params, event);
            case 'snackbar':
                return new __WEBPACK_IMPORTED_MODULE_6__events_snackbar__["a" /* VSnackbarEvent */](options, params, event);
            case 'autocomplete':
                return new __WEBPACK_IMPORTED_MODULE_7__events_autocomplete__["a" /* VAutoComplete */](options, url, params, event);
            case 'navigates':
                return new __WEBPACK_IMPORTED_MODULE_8__events_navigates__["a" /* VNavigates */](options, params, event);
            case 'clear':
                return new __WEBPACK_IMPORTED_MODULE_9__events_clears__["a" /* VClears */](options, params, event);
            case 'stepper':
                return new __WEBPACK_IMPORTED_MODULE_10__events_stepper__["a" /* VStepperEvent */](options, params, event);
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
            var eventOptions = eventData[2];
            var actionsData = eventData[1];
            var eventHandler = createEventHandler(actionsData);
            // Delegate to the component if possible
            if (eventElem.vComponent && eventElem.vComponent.initEventListener) {
                eventElem.vComponent.initEventListener(eventName, eventHandler);
            } else {
                if (typeof eventElem.eventsHandler === 'undefined') {
                    eventElem.eventsHandler = {};
                }
                if (!eventElem.eventsHandler[eventName]) {
                    // Delegate to the component if possible
                    eventElem.eventsHandler[eventName] = eventHandler;
                    eventElem.addEventListener(eventName, eventHandler, eventOptions);
                }
            }
        }
    }
    fireAfterLoad();
}

function fireAfterLoad() {
    var events = document.querySelectorAll('[data-events]');
    for (var i = 0; i < events.length; i++) {
        var eventElem = events[i];
        var eventsData = JSON.parse(eventElem.dataset.events);
        for (var j = 0; j < eventsData.length; j++) {
            var eventData = eventsData[j];
            var eventName = eventData[0];
            if (eventName === 'after_init') {
                var event = new Event('after_init');
                // Dispatch the event.
                eventElem.dispatchEvent(event);
            }
        }
    }
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_urls__ = __webpack_require__(29);


class VLoads extends __WEBPACK_IMPORTED_MODULE_0__utils_urls__["a" /* VUrls */] {
    constructor(options, url, params, event) {
        super();
        this.options = options;
        this.params = params;
        this.url = url;
        this.event = event;
    }

    call(results) {
        var url = this.buildURL(this.url, this.params);
        var newWindow = this.options['target'] === '_blank';
        var promiseObj = new Promise(function (resolve) {
            console.log("Loading page: " + url);
            results.push({ action: 'loads', statusCode: 200 });
            resolve(results);
            newWindow ? window.open(url) : window.location = url;
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VLoads;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snackbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(9);



// Replaces a given element with the contents of the call to the url.
// parameters are appended.
class VPosts extends __WEBPACK_IMPORTED_MODULE_1__base__["a" /* VBase */] {
    constructor(options, url, params, method, event) {
        super(options);
        this.url = url;
        this.params = params;
        this.method = method;
        this.event = event;
    }

    call(results) {
        this.clearErrors();
        let errors = this.validate();
        let method = this.method;
        if (errors.length > 0) {
            return new Promise(function (_, reject) {
                results.push({
                    action: 'posts',
                    method: method,
                    statusCode: 400,
                    contentType: 'v/errors',
                    content: errors
                });
                reject(results);
            });
        }

        var FD = null;
        var form = this.form();
        if (form) {
            FD = new FormData(form);
        } else {
            FD = new FormData();
        }
        // Add params from presenter
        for (var name in this.params) {
            FD.append(name, this.params[name]);
        }

        var inputValues = this.inputValues(form);
        for (var input of inputValues) {
            FD.append(input[0], input[1]);
        }

        var httpRequest = new XMLHttpRequest();
        var url = this.url;
        if (!httpRequest) {
            throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
        }
        return new Promise(function (resolve, reject) {
            httpRequest.onreadystatechange = function (event) {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                    if (httpRequest.status >= 200 && httpRequest.status < 300) {
                        results.push({
                            action: 'posts',
                            method: this.method,
                            statusCode: httpRequest.status,
                            contentType: this.getResponseHeader('content-type'),
                            content: httpRequest.responseText,
                            responseURL: httpRequest.responseURL
                        });
                        resolve(results);
                    } else {
                        results.push({
                            action: 'posts',
                            method: this.method,
                            statusCode: httpRequest.status,
                            contentType: this.getResponseHeader('content-type'),
                            content: httpRequest.responseText
                        });
                        reject(results);
                    }
                }
            };
            // Set up our request
            httpRequest.open(method, url);
            console.log(method + ':' + url);
            // Send our FormData object; HTTP headers are set automatically
            httpRequest.send(FD);
        });
    }

    isForm() {
        var parentElement = this.parentElement();
        return parentElement && parentElement.elements;
    }

    form() {
        if (this.isForm()) {
            return this.parentElement();
        }
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VPosts;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation_index__ = __webpack_require__(14);
/* unused harmony reexport MDCSnackbarFoundation */
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







class MDCSnackbar extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCSnackbar(root);
  }

  show(data) {
    this.foundation_.show(data);
  }

  getDefaultFoundation() {
    const {
      TEXT_SELECTOR,
      ACTION_BUTTON_SELECTOR
    } = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;
    const getText = () => this.root_.querySelector(TEXT_SELECTOR);
    const getActionButton = () => this.root_.querySelector(ACTION_BUTTON_SELECTOR);

    /* eslint brace-style: "off" */
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      setAriaHidden: () => this.root_.setAttribute('aria-hidden', 'true'),
      unsetAriaHidden: () => this.root_.removeAttribute('aria-hidden'),
      setActionAriaHidden: () => getActionButton().setAttribute('aria-hidden', 'true'),
      unsetActionAriaHidden: () => getActionButton().removeAttribute('aria-hidden'),
      setActionText: text => {
        getActionButton().textContent = text;
      },
      setMessageText: text => {
        getText().textContent = text;
      },
      setFocus: () => getActionButton().focus(),
      visibilityIsHidden: () => document.hidden,
      registerCapturedBlurHandler: handler => getActionButton().addEventListener('blur', handler, true),
      deregisterCapturedBlurHandler: handler => getActionButton().removeEventListener('blur', handler, true),
      registerVisibilityChangeHandler: handler => document.addEventListener('visibilitychange', handler),
      deregisterVisibilityChangeHandler: handler => document.removeEventListener('visibilitychange', handler),
      registerCapturedInteractionHandler: (evt, handler) => document.body.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) => document.body.removeEventListener(evt, handler, true),
      registerActionClickHandler: handler => getActionButton().addEventListener('click', handler),
      deregisterActionClickHandler: handler => getActionButton().removeEventListener('click', handler),
      registerTransitionEndHandler: handler => this.root_.addEventListener(Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a" /* getCorrectEventName */])(window, 'transitionend'), handler),
      deregisterTransitionEndHandler: handler => this.root_.removeEventListener(Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a" /* getCorrectEventName */])(window, 'transitionend'), handler),
      notifyShow: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.SHOW_EVENT),
      notifyHide: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.HIDE_EVENT)
    });
  }

  get dismissesOnAction() {
    return this.foundation_.dismissesOnAction();
  }

  set dismissesOnAction(dismissesOnAction) {
    this.foundation_.setDismissOnAction(dismissesOnAction);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSnackbar;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(70);
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




class MDCSnackbarFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: () => /* className: string */{},
      removeClass: () => /* className: string */{},
      setAriaHidden: () => {},
      unsetAriaHidden: () => {},
      setActionAriaHidden: () => {},
      unsetActionAriaHidden: () => {},
      setActionText: () => /* actionText: string */{},
      setMessageText: () => /* message: string */{},
      setFocus: () => {},
      visibilityIsHidden: () => /* boolean */false,
      registerCapturedBlurHandler: () => /* handler: EventListener */{},
      deregisterCapturedBlurHandler: () => /* handler: EventListener */{},
      registerVisibilityChangeHandler: () => /* handler: EventListener */{},
      deregisterVisibilityChangeHandler: () => /* handler: EventListener */{},
      registerCapturedInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      deregisterCapturedInteractionHandler: () => /* evtType: string, handler: EventListener */{},
      registerActionClickHandler: () => /* handler: EventListener */{},
      deregisterActionClickHandler: () => /* handler: EventListener */{},
      registerTransitionEndHandler: () => /* handler: EventListener */{},
      deregisterTransitionEndHandler: () => /* handler: EventListener */{},
      notifyShow: () => {},
      notifyHide: () => {}
    };
  }

  get active() {
    return this.active_;
  }

  constructor(adapter) {
    super(Object.assign(MDCSnackbarFoundation.defaultAdapter, adapter));

    this.active_ = false;
    this.actionWasClicked_ = false;
    this.dismissOnAction_ = true;
    this.firstFocus_ = true;
    this.pointerDownRecognized_ = false;
    this.snackbarHasFocus_ = false;
    this.snackbarData_ = null;
    this.queue_ = [];
    this.actionClickHandler_ = () => {
      this.actionWasClicked_ = true;
      this.invokeAction_();
    };
    this.visibilitychangeHandler_ = () => {
      clearTimeout(this.timeoutId_);
      this.snackbarHasFocus_ = true;

      if (!this.adapter_.visibilityIsHidden()) {
        setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
      }
    };
    this.interactionHandler_ = evt => {
      if (evt.type == 'touchstart' || evt.type == 'mousedown') {
        this.pointerDownRecognized_ = true;
      }
      this.handlePossibleTabKeyboardFocus_(evt);

      if (evt.type == 'focus') {
        this.pointerDownRecognized_ = false;
      }
    };
    this.blurHandler_ = () => {
      clearTimeout(this.timeoutId_);
      this.snackbarHasFocus_ = false;
      this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
    };
  }

  init() {
    this.adapter_.registerActionClickHandler(this.actionClickHandler_);
    this.adapter_.setAriaHidden();
    this.adapter_.setActionAriaHidden();
  }

  destroy() {
    this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
    this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach(evtType => {
      this.adapter_.deregisterCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  dismissesOnAction() {
    return this.dismissOnAction_;
  }

  setDismissOnAction(dismissOnAction) {
    this.dismissOnAction_ = !!dismissOnAction;
  }

  show(data) {
    if (!data) {
      throw new Error('Please provide a data object with at least a message to display.');
    }
    if (!data.message) {
      throw new Error('Please provide a message to be displayed.');
    }
    if (data.actionHandler && !data.actionText) {
      throw new Error('Please provide action text with the handler.');
    }
    if (this.active) {
      this.queue_.push(data);
      return;
    }
    clearTimeout(this.timeoutId_);
    this.snackbarData_ = data;
    this.firstFocus_ = true;
    this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
    this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach(evtType => {
      this.adapter_.registerCapturedInteractionHandler(evtType, this.interactionHandler_);
    });

    const { ACTIVE, MULTILINE, ACTION_ON_BOTTOM } = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];

    this.adapter_.setMessageText(this.snackbarData_.message);

    if (this.snackbarData_.multiline) {
      this.adapter_.addClass(MULTILINE);
      if (this.snackbarData_.actionOnBottom) {
        this.adapter_.addClass(ACTION_ON_BOTTOM);
      }
    }

    if (this.snackbarData_.actionHandler) {
      this.adapter_.setActionText(this.snackbarData_.actionText);
      this.actionHandler_ = this.snackbarData_.actionHandler;
      this.setActionHidden_(false);
    } else {
      this.setActionHidden_(true);
      this.actionHandler_ = null;
      this.adapter_.setActionText(null);
    }

    this.active_ = true;
    this.adapter_.addClass(ACTIVE);
    this.adapter_.unsetAriaHidden();
    this.adapter_.notifyShow();

    this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
  }

  handlePossibleTabKeyboardFocus_() {
    const hijackFocus = this.firstFocus_ && !this.pointerDownRecognized_;

    if (hijackFocus) {
      this.setFocusOnAction_();
    }

    this.firstFocus_ = false;
  }

  setFocusOnAction_() {
    this.adapter_.setFocus();
    this.snackbarHasFocus_ = true;
    this.firstFocus_ = false;
  }

  invokeAction_() {
    try {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    } finally {
      if (this.dismissOnAction_) {
        this.cleanup_();
      }
    }
  }

  cleanup_() {
    const allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;

    if (allowDismissal) {
      const { ACTIVE, MULTILINE, ACTION_ON_BOTTOM } = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];

      this.adapter_.removeClass(ACTIVE);

      const handler = () => {
        clearTimeout(this.timeoutId_);
        this.adapter_.deregisterTransitionEndHandler(handler);
        this.adapter_.removeClass(MULTILINE);
        this.adapter_.removeClass(ACTION_ON_BOTTOM);
        this.setActionHidden_(true);
        this.adapter_.setAriaHidden();
        this.active_ = false;
        this.snackbarHasFocus_ = false;
        this.adapter_.notifyHide();
        this.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  }

  showNext_() {
    if (!this.queue_.length) {
      return;
    }
    this.show(this.queue_.shift());
  }

  setActionHidden_(isHidden) {
    if (isHidden) {
      this.adapter_.setActionAriaHidden();
    } else {
      this.adapter_.unsetActionAriaHidden();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSnackbarFoundation;


/***/ }),
/* 70 */
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
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
  SHOW_EVENT: 'MDCSnackbar:show',
  HIDE_EVENT: 'MDCSnackbar:hide'
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  MESSAGE_TIMEOUT: 2750
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snackbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initialize__ = __webpack_require__(10);




// Replaces a given element with the contents of the call to the url.
// parameters are appended.
class VReplaces extends __WEBPACK_IMPORTED_MODULE_1__base__["a" /* VBase */] {
    constructor(options, url, params, event) {
        super(options);
        this.element_id = options.target;
        this.url = url;
        this.params = params;
        this.event = event;
    }

    call(results) {
        this.clearErrors();
        console.log('The event: ' + this.event);
        var httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
        }
        var elementId = this.element_id;
        var parentElement = this.parentElement();
        var url = this.buildURL(this.url, this.params, this.inputValues(), [['grid_nesting', this.options.grid_nesting]]);

        let delayAmt = this.event instanceof InputEvent ? 500 : 0;

        var promiseObj = new Promise(function (resolve, reject) {
            clearTimeout(parentElement.vTimeout);
            parentElement.vTimeout = setTimeout(function () {
                httpRequest.onreadystatechange = function () {
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                        if (httpRequest.status === 200) {
                            var nodeToReplace = document.getElementById(elementId);
                            if (!nodeToReplace) {
                                let msg = 'Unable to located node: \'' + elementId + '\'' + ' This usually the result of issuing a replaces action and specifying a element id that does not currently exist on the page.';
                                console.error(msg);
                                results.push({
                                    action: 'replaces',
                                    statusCode: 500,
                                    contentType: 'v/errors',
                                    content: { exception: msg }
                                });
                                reject(results);
                            } else {
                                nodeToReplace.outerHTML = httpRequest.responseText;
                                var newNode = document.getElementById(elementId);
                                Object(__WEBPACK_IMPORTED_MODULE_2__initialize__["a" /* initialize */])(newNode);

                                results.push({
                                    action: 'replaces',
                                    statusCode: httpRequest.status,
                                    contentType: this.getResponseHeader('content-type'),
                                    content: httpRequest.responseText
                                });
                                resolve(results);
                            }
                        } else {
                            results.push({
                                action: 'replaces',
                                statusCode: httpRequest.status,
                                contentType: this.getResponseHeader('content-type'),
                                content: httpRequest.responseText
                            });
                            reject(results);
                        }
                    }
                };
                console.log('GET:' + url);
                httpRequest.open('GET', url, true);
                httpRequest.setRequestHeader('X-NO-LAYOUT', true);
                httpRequest.send();
            }, delayAmt);
        });
        return promiseObj;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = VReplaces;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VDialog {
    constructor(options, params, event) {
        this.dialogId = options.target;
        this.params = params;
        this.event = event;
    }

    call(results) {
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
            results.push({ action: 'dialog', statusCode: 200 });
            resolve(results);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VDialog;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VToggleVisibility {
    constructor(options, params, event) {
        this.targetId = options.target;
        this.params = params;
        this.event = event;
    }

    call(results) {
        let targetId = this.targetId;
        let action = this.params.action;
        let promiseObj = new Promise(function (resolve) {
            console.log("Toggling visibility on: " + targetId);
            let elem = document.getElementById(targetId);
            if (action === 'show') {
                elem.classList.remove("v-hidden");
            } else if (action === 'hide') {
                elem.classList.add("v-hidden");
            } else {
                elem.classList.toggle("v-hidden");
            }
            results.push({ action: 'toggle_visibility', statusCode: 200 });
            resolve(results);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VToggleVisibility;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snackbar_js__ = __webpack_require__(6);


class VSnackbarEvent {
    constructor(options, params, event) {
        this.options = options;
        this.params = params;
        this.event = event;
        let snackbarElem = document.querySelector('.mdc-snackbar');
        this.snackbar = snackbarElem.vComponent;
    }

    call(results) {
        let message = this.params.text;
        let snackbar = this.snackbar;
        let promiseObj = new Promise(function (resolve) {
            console.log("Showing snackbar");
            snackbar.display(message);
            results.push({ action: 'snackbar', statusCode: 200 });
            resolve(results);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VSnackbarEvent;


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snackbar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initialize__ = __webpack_require__(10);




// Auto complete a datalist
// The elementId is a datalist
// The url is called as a GET expecting json back
class VAutoComplete extends __WEBPACK_IMPORTED_MODULE_1__base__["a" /* VBase */] {
    constructor(options, url, params, event) {
        super(options);
        this.element_id = options.target;
        this.url = url;
        this.params = params;
        this.event = event;
    }

    call(results) {
        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        var parentElement = this.parentElement();
        var updateElement = this.createUpdateElementHandler(this);
        var promiseObj = new Promise(function (resolve) {
            clearTimeout(parentElement.vTimeout);
            // Make a new timeout
            parentElement.vTimeout = setTimeout(updateElement, 500);
            results.push({ action: 'autocomplete', statusCode: 200 });
            resolve(results);
        });
        return promiseObj;
    }

    // This is used to get a proper binding of the object
    // https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
    createUpdateElementHandler(_this_) {
        return function () {
            _this_.updateElement();
        };
    }

    updateElement() {
        this.clearErrors();
        this.getData(this.populateOptions);
    }

    dataList() {
        return document.getElementById(this.element_id);
    }

    getData(funcProcessData) {
        var comp = this.component();
        if (comp.value().length < 2) {
            return;
        }
        var httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
            // new VSnackbar('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.').display();
        }
        var dataList = this.dataList();
        var url = this.buildURL(this.url, this.params, this.inputValues());

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                if (httpRequest.status === 200) {
                    var response = JSON.parse(httpRequest.responseText);
                    funcProcessData(response, dataList);
                } else {
                    console.error("Unable to autocomplete! ElementId: " + this.element_id);
                }
            }
        };
        console.log('GET:' + url);
        httpRequest.open('GET', url, true);
        httpRequest.send();
    }

    populateOptions(response, dataList) {
        dataList.innerHTML = "";

        response.forEach(function (item) {
            var value = item;
            var key = null;
            if (Array.isArray(item)) {
                value = item[0];
                key = item[1];
            }
            // Create a new <option> element.
            var option = document.createElement('option');
            option.value = value;
            option.dataset.key = key;
            dataList.appendChild(option);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VAutoComplete;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VNavigates {
    constructor(options, params, event) {
        this.target = options.target;
        this.params = params;
        this.event = event;
    }

    call(results) {
        var promiseObj = new Promise(function (resolve) {
            console.log("Navigating back");
            results.push({ action: 'navigates', statusCode: 200 });
            history.back();
            resolve(results);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VNavigates;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VClears {
    constructor(options, params, event) {
        this.target = options.target;
        this.ids = params.ids;
        this.event = event;
    }

    call(results) {
        let ids = this.ids;
        var promiseObj = new Promise(function (resolve) {
            console.log("Clearing");
            results.push({ action: 'clears', statusCode: 200 });
            for (const id of ids) {
                let elem = document.getElementById(id);
                if (elem && elem.vComponent && elem.vComponent.clear) {
                    elem.vComponent.clear();
                } else {
                    console.log("Unable to clear element with id: " + id + "! Check to make sure you passed the correct id, and that the control/input can be cleared.");
                }
            }
            resolve(results);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VClears;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(9);


class VStepperEvent extends __WEBPACK_IMPORTED_MODULE_0__base__["a" /* VBase */] {

    constructor(options, params, event) {
        super(options);
        this.params = params;
        this.event = event;
    }

    call(results) {
        let parentElem = document.getElementById(this.params.stepper_id);
        let component = parentElem.vComponent;
        let nav_action = this.params.navigate;

        let promiseObj = new Promise(function (resolve) {
            console.log("Stepping: " + nav_action);
            component.navigate(nav_action);
            results.push({ action: 'stepper', statusCode: 200 });
            resolve(results);
        });
        return promiseObj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VStepperEvent;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initLists;

function createSelectAllHandler(component, target, listElements) {
    return function () {
        for (let element of listElements) {
            element.checked = target.checked;
        }
        if (component.dataset.totalLines > listElements.length) {
            toggleSelectTotalHeader(component, listElements.length, target.checked);
        }
    };
}

function createSelectTotalSetHandler(component) {
    return function (event) {
        event.preventDefault();
        if (component.dataset.totalLines > 0) {
            toggleSelectTotalInput(component, !component.querySelector('#select-total').checked);
        }
    };
}

function createListItemSelectHandler(component, listElements, selectAll) {
    return function () {
        let checked = 0;
        let unchecked = 0;
        toggleSelectTotalInput(component, false); // Clear select total results whenever a list item selection is modified
        for (let element of listElements) {
            element.checked ? checked++ : unchecked++;
        }
        selectAll.indeterminate = checked && unchecked;
        selectAll.checked = checked && !unchecked;
        toggleSelectTotalHeader(component, listElements.length, Boolean(checked) && !Boolean(unchecked));
    };
}

function toggleSelectTotalHeader(component, count, show = false) {
    if (component.dataset.totalLines > 0) {
        updateSelectionCount(component, count);
        if (show === false) {
            component.querySelector('#list-item-select-all-header').classList.add('hidden');
        } else {
            component.querySelector('#list-item-select-all-header').classList.remove('hidden');
        }
    }
}

function toggleSelectTotalInput(component, selectTotal = false) {
    if (component.dataset.totalLines > 0) {
        component.querySelector('#select-total').checked = selectTotal;
        component.querySelector('#list-item-select-all-toggle-on').classList.add('hidden');
        component.querySelector('#list-item-select-all-toggle-off').classList.add('hidden');
        component.querySelector('#list-item-select-all-toggle-' + (selectTotal ? 'on' : 'off')).classList.remove('hidden');
    }
}

function updateSelectionCount(component, count) {
    if (component.dataset.totalLines > 0) {
        component.querySelector('#page-selection-count').innerHTML = count;
    }
}

function initLists() {
    console.log('\tLists');
    let components = document.querySelectorAll('.mdc-list');
    if (components) {
        for (let component of components) {
            let selectAllLineItem = component.querySelector('.v-checkbox--select-control');
            let selectableLineItems = component.querySelectorAll('.v-list-item--selectable-checkbox');
            if (selectAllLineItem && selectableLineItems) {

                for (let element of component.querySelectorAll('.toggle-total-set')) {
                    // Clone and replace element to prevent duplicate event handlers when additional records are loaded/paged
                    let new_element = element.cloneNode(true);
                    element.parentNode.replaceChild(new_element, element);
                    new_element.addEventListener('click', createSelectTotalSetHandler(component));
                }

                selectAllLineItem.addEventListener('change', createSelectAllHandler(component, selectAllLineItem, selectableLineItems));

                for (let element of selectableLineItems) {
                    element.addEventListener('change', createListItemSelectHandler(component, selectableLineItems, selectAllLineItem));
                }
                updateSelectionCount(component, selectableLineItems.length);
            }
        }
    }
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initIconToggles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_icon_toggle__ = __webpack_require__(81);


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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCIconToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__ = __webpack_require__(2);
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
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(84);
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
 * @typedef {{
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
/* 83 */
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
 * @typedef {{
 *   isOn: boolean,
 * }}
 */
let IconToggleEvent;



/***/ }),
/* 84 */
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
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMenus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_menu__ = __webpack_require__(31);



function createMenuHandler(menu, element) {
    return function () {
        let offset = parseInt(element.dataset.rightOffset);
        let placement = element.dataset.placement === 'contextual' ? __WEBPACK_IMPORTED_MODULE_0__material_menu__["a" /* Corner */].TOP_LEFT : __WEBPACK_IMPORTED_MODULE_0__material_menu__["a" /* Corner */].BOTTOM_LEFT;
        menu.setAnchorMargin({ left: offset });
        menu.setAnchorCorner(placement);
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
                component.mdcComponent = new __WEBPACK_IMPORTED_MODULE_0__material_menu__["b" /* MDCMenu */](component);
                var anchor = component.closest('.mdc-menu-anchor');
                if (anchor) {
                    var menulink = anchor.querySelector('.v-menu-click');
                    menulink.addEventListener('click', createMenuHandler(component.mdcComponent, component));
                }
            }
        }
    }
}

/***/ }),
/* 86 */
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
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCMenuFoundation; });
/* unused harmony export AnchorMargin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(32);
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
/* 88 */
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
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initSelects;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_select__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_event_handler__ = __webpack_require__(4);




function initSelects() {
    console.log('\tSelects');
    var components = document.querySelectorAll('.mdc-select');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VSelect(component, __WEBPACK_IMPORTED_MODULE_0__material_select__["a" /* MDCSelect */].attachTo(component));
        }
    }
}

class VSelect extends Object(__WEBPACK_IMPORTED_MODULE_2__mixins_event_handler__["a" /* eventHandlerMixin */])(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* VBaseComponent */]) {
    constructor(element, mdcComponent) {
        super(element);
        this.select = element.querySelector('select');
        this.select.vComponent = this;
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            params.push([this.select.name, this.select.value]);
        }
    }

    validate() {
        return true;
    }

    name() {}

    value() {}
}
/* unused harmony export VSelect */


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_floating_label_index__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_line_ripple_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_notched_outline_index__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(33);
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

  /**
   * Recomputes the outline SVG path for the outline element.
   */
  layout() {
    const openNotch = this.nativeControl_.value.length > 0;
    this.foundation_.notchOutline(openNotch);
  }

  initialize(labelFactory = el => new __WEBPACK_IMPORTED_MODULE_1__material_floating_label_index__["a" /* MDCFloatingLabel */](el), lineRippleFactory = el => new __WEBPACK_IMPORTED_MODULE_2__material_line_ripple_index__["a" /* MDCLineRipple */](el), outlineFactory = el => new __WEBPACK_IMPORTED_MODULE_4__material_notched_outline_index__["a" /* MDCNotchedOutline */](el)) {
    this.nativeControl_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_6__constants__["c" /* strings */].NATIVE_CONTROL_SELECTOR);
    const labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_6__constants__["c" /* strings */].LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    const lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_6__constants__["c" /* strings */].LINE_RIPPLE_SELECTOR);
    if (lineRippleElement) {
      this.lineRipple_ = lineRippleFactory(lineRippleElement);
    }
    const outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_6__constants__["c" /* strings */].OUTLINE_SELECTOR);
    if (outlineElement) {
      this.outline_ = outlineFactory(outlineElement);
    }

    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* cssClasses */].BOX)) {
      this.ripple = this.initRipple_();
    }
  }

  initRipple_() {
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["a" /* MDCRipple */].createAdapter(this), {
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler)
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["a" /* MDCRipple */](this.root_, foundation);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_5__foundation__["a" /* default */](Object.assign({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      hasClass: className => this.root_.classList.contains(className),
      activateBottomLine: () => {
        if (this.lineRipple_) {
          this.lineRipple_.activate();
        }
      },
      deactivateBottomLine: () => {
        if (this.lineRipple_) {
          this.lineRipple_.deactivate();
        }
      },
      setDisabled: disabled => this.nativeControl_.disabled = disabled,
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler),
      getSelectedIndex: () => this.nativeControl_.selectedIndex,
      setSelectedIndex: index => this.nativeControl_.selectedIndex = index,
      getValue: () => this.nativeControl_.value,
      setValue: value => this.nativeControl_.value = value,
      isRtl: () => window.getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl'
    }, this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_()));
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
    if (this.outline_) {
      this.outline_.destroy();
    }
    super.destroy();
  }

  /**
   * @return {!{
   *   notchOutline: function(number, boolean): undefined,
   *   hasOutline: function(): boolean,
   * }}
   */
  getOutlineAdapterMethods_() {
    return {
      notchOutline: (labelWidth, isRtl) => {
        if (this.outline_) {
          this.outline_.notch(labelWidth, isRtl);
        }
      },
      closeOutline: () => {
        if (this.outline_) {
          this.outline_.closeNotch();
        }
      },
      hasOutline: () => !!this.outline_
    };
  }

  /**
   * @return {!{
   *   floatLabel: function(boolean): undefined,
   *   hasLabel: function(): boolean,
   *   getLabelWidth: function(): number,
   * }}
   */
  getLabelAdapterMethods_() {
    return {
      floatLabel: shouldFloat => {
        if (this.label_) {
          this.label_.float(shouldFloat);
        }
      },
      hasLabel: () => !!this.label_,
      getLabelWidth: () => {
        if (this.label_) {
          return this.label_.getWidth();
        }
      }
    };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSelect;


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(33);
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
      hasClass: () => /* className: string */false,
      floatLabel: () => /* value: boolean */{},
      activateBottomLine: () => {},
      deactivateBottomLine: () => {},
      registerInteractionHandler: () => /* type: string, handler: EventListener */{},
      deregisterInteractionHandler: () => /* type: string, handler: EventListener */{},
      getSelectedIndex: () => /* number */-1,
      setSelectedIndex: () => /* index: number */{},
      setDisabled: () => /* disabled: boolean */{},
      getValue: () => /* string */'',
      setValue: () => /* value: string */{},
      isRtl: () => false,
      hasLabel: () => {},
      getLabelWidth: () => {},
      hasOutline: () => {},
      notchOutline: () => {},
      closeOutline: () => {}
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
    this.adapter_.setSelectedIndex(index);
    this.floatLabelWithValue_();
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

  floatLabelWithValue_() {
    const optionHasValue = this.adapter_.getValue().length > 0;
    this.adapter_.floatLabel(optionHasValue);
    this.notchOutline(optionHasValue);
  }

  handleFocus_() {
    this.adapter_.floatLabel(true);
    this.notchOutline(true);
    this.adapter_.activateBottomLine();
  }

  handleBlur_() {
    this.floatLabelWithValue_();
    this.adapter_.deactivateBottomLine();
  }

  handleSelect_() {
    this.setSelectedIndex(this.adapter_.getSelectedIndex());
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
      const labelScale = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].LABEL_SCALE;
      const labelWidth = this.adapter_.getLabelWidth() * labelScale;
      const isRtl = this.adapter_.isRtl();
      this.adapter_.notchOutline(labelWidth, isRtl);
    } else {
      this.adapter_.closeOutline();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSelectFoundation;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initChips;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_chips__ = __webpack_require__(93);


function initChips() {
    console.log('\tChips');
    var components = document.querySelectorAll('.mdc-chip');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.mdcComponent) {
            component.mdcComponent = __WEBPACK_IMPORTED_MODULE_0__material_chips__["a" /* MDCChip */].attachTo(component);
        }
    }
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chip_index__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chip_set_index__ = __webpack_require__(94);
/* unused harmony reexport MDCChipFoundation */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chip_index__["a"]; });
/* unused harmony reexport MDCChipSetFoundation */
/* unused harmony reexport MDCChipSet */
/**
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






/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCChipSet */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chip_index__ = __webpack_require__(34);
/* unused harmony reexport MDCChipSetFoundation */
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
 * @extends {MDCComponent<!MDCChipSetFoundation>}
 * @final
 */
class MDCChipSet extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);

    /** @type {!Array<!MDCChip>} */
    this.chips;
    /** @type {(function(!Element): !MDCChip)} */
    this.chipFactory_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCChipSet}
   */
  static attachTo(root) {
    return new MDCChipSet(root);
  }

  /**
   * @param {(function(!Element): !MDCChip)=} chipFactory A function which
   * creates a new MDCChip.
   */
  initialize(chipFactory = el => new __WEBPACK_IMPORTED_MODULE_3__chip_index__["a" /* MDCChip */](el)) {
    this.chipFactory_ = chipFactory;
    this.chips = this.instantiateChips_(this.chipFactory_);
  }

  destroy() {
    this.chips.forEach(chip => {
      chip.destroy();
    });
  }

  initialSyncWithDOM() {
    this.chips.forEach(chip => {
      if (chip.isSelected()) {
        this.foundation_.select(chip.foundation);
      }
    });
  }

  /**
   * Adds a new chip object to the chip set from the given chip element.
   * @param {!Element} chipEl
   */
  addChip(chipEl) {
    this.chips.push(this.chipFactory_(chipEl));
  }

  /**
   * @return {!MDCChipSetFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCChipSetAdapter} */Object.assign({
      hasClass: className => this.root_.classList.contains(className),
      registerInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      removeChip: chip => {
        const index = this.chips.indexOf(chip);
        this.chips.splice(index, 1);
        chip.destroy();
      }
    }));
  }

  /**
   * Instantiates chip components on all of the chip set's child chip elements.
   * @param {(function(!Element): !MDCChip)} chipFactory
   * @return {!Array<!MDCChip>}
   */
  instantiateChips_(chipFactory) {
    const chipElements = [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CHIP_SELECTOR));
    return chipElements.map(el => chipFactory(el));
  }
}



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chip_foundation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(96);
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



// eslint-disable-next-line no-unused-vars



/**
 * @extends {MDCFoundation<!MDCChipSetAdapter>}
 * @final
 */
class MDCChipSetFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */];
  }

  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCChipSetAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCChipSetAdapter}
   */
  static get defaultAdapter() {
    return (/** @type {!MDCChipSetAdapter} */{
        hasClass: () => {},
        registerInteractionHandler: () => {},
        deregisterInteractionHandler: () => {},
        removeChip: () => {}
      }
    );
  }

  /**
   * @param {!MDCChipSetAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCChipSetFoundation.defaultAdapter, adapter));

    /**
     * The selected chips in the set. Only used for choice chip set or filter chip set.
     * @private {!Array<!MDCChipFoundation>}
     */
    this.selectedChips_ = [];

    /** @private {function(!MDCChipInteractionEventType): undefined} */
    this.chipInteractionHandler_ = evt => this.handleChipInteraction_(evt);
    /** @private {function(!MDCChipInteractionEventType): undefined} */
    this.chipRemovalHandler_ = evt => this.handleChipRemoval_(evt);
  }

  init() {
    this.adapter_.registerInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__chip_foundation__["a" /* MDCChipFoundation */].strings.INTERACTION_EVENT, this.chipInteractionHandler_);
    this.adapter_.registerInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__chip_foundation__["a" /* MDCChipFoundation */].strings.REMOVAL_EVENT, this.chipRemovalHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__chip_foundation__["a" /* MDCChipFoundation */].strings.INTERACTION_EVENT, this.chipInteractionHandler_);
    this.adapter_.deregisterInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__chip_foundation__["a" /* MDCChipFoundation */].strings.REMOVAL_EVENT, this.chipRemovalHandler_);
  }

  /**
   * Selects the given chip. Deselects all other chips if the chip set is of the choice variant.
   * @param {!MDCChipFoundation} chipFoundation
   */
  select(chipFoundation) {
    if (this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].CHOICE)) {
      this.deselectAll_();
    }
    chipFoundation.setSelected(true);
    this.selectedChips_.push(chipFoundation);
  }

  /**
   * Deselects the given chip.
   * @param {!MDCChipFoundation} chipFoundation
   */
  deselect(chipFoundation) {
    const index = this.selectedChips_.indexOf(chipFoundation);
    if (index >= 0) {
      this.selectedChips_.splice(index, 1);
    }
    chipFoundation.setSelected(false);
  }

  /** Deselects all selected chips. */
  deselectAll_() {
    this.selectedChips_.forEach(chipFoundation => {
      chipFoundation.setSelected(false);
    });
    this.selectedChips_.length = 0;
  }

  /**
   * Handles a chip interaction event
   * @param {!MDCChipInteractionEventType} evt
   * @private
   */
  handleChipInteraction_(evt) {
    const chipFoundation = evt.detail.chip.foundation;
    if (this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].CHOICE) || this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].FILTER)) {
      if (chipFoundation.isSelected()) {
        this.deselect(chipFoundation);
      } else {
        this.select(chipFoundation);
      }
    }
  }

  /**
   * Handles the event when a chip is removed.
   * @param {!MDCChipInteractionEventType} evt
   * @private
   */
  handleChipRemoval_(evt) {
    const { chip } = evt.detail;
    this.deselect(chip.foundation);
    this.adapter_.removeChip(chip);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCChipSetFoundation);

/***/ }),
/* 96 */
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
  CHIP_SELECTOR: '.mdc-chip'
};

/** @enum {string} */
const cssClasses = {
  CHOICE: 'mdc-chip-set--choice',
  FILTER: 'mdc-chip-set--filter'
};



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initCards;
function initCards() {
    console.log('\tCards');
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initForms;
function initForms() {
    console.log('\tForms');

    var components = document.querySelectorAll('.v-form');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VForm(component);
        }
    }
}

class VForm {
    constructor(element) {
        this.element = element;
    }

    // Called whenever a form is about to be submitted.
    // returns true on success
    // returns on failure return an error object that can be processed by VErrors:
    //    { email: ["email must be filled", "email must be from your domain"] }
    //    { :page: ["must be filled"] }
    validate(form, params) {
        console.log("Form validate", form, params);
        var errors = [];
        for (let input of this.inputs()) {
            if (input.vComponent && input.vComponent.validate) {
                var result = input.vComponent.validate(form, params);
                if (result !== true) {
                    errors.push(result);
                }
            }
        }
        return errors;
    }

    inputs() {
        //return this.element.elements;
        return this.element.querySelectorAll('.v-input');
    }

    // Called to collect data for submission
    prepareSubmit(form, params) {
        for (let input of this.inputs()) {
            if (input.vComponent && input.vComponent.prepareSubmit) {
                input.vComponent.prepareSubmit(form, params);
            }
        }
    }

    initEventListener(eventName, eventHandler) {
        for (let input of this.inputs()) {
            if (input.vComponent && input.vComponent.initEventListener) {
                input.vComponent.initEventListener(eventName, eventHandler);
            }
        }
    }

    clear() {
        for (const input of this.inputs()) {
            if (input.vComponent && input.vComponent.clear) {
                input.vComponent.clear();
            }
        }
    }
}
/* unused harmony export VForm */


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initCheckboxes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_checkbox__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_form_field_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_radio_index__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__radios__ = __webpack_require__(40);







function initCheckboxes() {
    console.log('\tCheckboxes');

    var components = document.querySelectorAll('.mdc-checkbox');
    if (components) {
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            if (!component.mdcComponent) {
                component.vComponent = new VCheckbox(radio, __WEBPACK_IMPORTED_MODULE_0__material_checkbox__["a" /* MDCCheckbox */].attachTo(component));
            }
        }
    }
}

class VCheckbox extends Object(__WEBPACK_IMPORTED_MODULE_1__mixins_event_handler__["a" /* eventHandlerMixin */])(__WEBPACK_IMPORTED_MODULE_2__base_component__["a" /* VBaseComponent */]) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            params.push([this.input.name, this.input.value]);
        }
    }
}
/* unused harmony export VCheckbox */


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_animation_index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_selection_control_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ripple_util__ = __webpack_require__(7);
/* unused harmony reexport MDCCheckboxFoundation */
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




/**
 * @extends MDCComponent<!MDCCheckboxFoundation>
 * @implements {MDCSelectionControl}
 */
class MDCCheckbox extends __WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCCheckbox(root);
  }

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */
  get nativeCb_() {
    const { NATIVE_CONTROL_SELECTOR } = __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings;
    const cbEl = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    return cbEl;
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const MATCHES = Object(__WEBPACK_IMPORTED_MODULE_5__material_ripple_util__["b" /* getMatchesProperty */])(HTMLElement.prototype);
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["a" /* MDCRipple */].createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.nativeCb_[MATCHES](':active'),
      registerInteractionHandler: (type, handler) => this.nativeCb_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeCb_.removeEventListener(type, handler)
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["a" /* MDCRipple */](this.root_, foundation);
  }

  /** @return {!MDCCheckboxFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      setNativeControlAttr: (attr, value) => this.nativeCb_.setAttribute(attr, value),
      removeNativeControlAttr: attr => this.nativeCb_.removeAttribute(attr),
      registerAnimationEndHandler: handler => this.root_.addEventListener(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation_index__["a" /* getCorrectEventName */])(window, 'animationend'), handler),
      deregisterAnimationEndHandler: handler => this.root_.removeEventListener(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation_index__["a" /* getCorrectEventName */])(window, 'animationend'), handler),
      registerChangeHandler: handler => this.nativeCb_.addEventListener('change', handler),
      deregisterChangeHandler: handler => this.nativeCb_.removeEventListener('change', handler),
      getNativeControl: () => this.nativeCb_,
      forceLayout: () => this.root_.offsetWidth,
      isAttachedToDOM: () => Boolean(this.root_.parentNode)
    });
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  /** @return {boolean} */
  get checked() {
    return this.foundation_.isChecked();
  }

  /** @param {boolean} checked */
  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  /** @return {boolean} */
  get indeterminate() {
    return this.foundation_.isIndeterminate();
  }

  /** @param {boolean} indeterminate */
  set indeterminate(indeterminate) {
    this.foundation_.setIndeterminate(indeterminate);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /** @return {?string} */
  get value() {
    return this.foundation_.getValue();
  }

  /** @param {?string} value */
  set value(value) {
    this.foundation_.setValue(value);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }
}



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_selection_control_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(103);
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


/** @const {!Array<string>} */
const CB_PROTO_PROPS = ['checked', 'indeterminate'];

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */
class MDCCheckboxFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */];
  }

  /** @return enum {strings} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */];
  }

  /** @return enum {numbers} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* numbers */];
  }

  /** @return {!MDCCheckboxAdapter} */
  static get defaultAdapter() {
    return (/** @type {!MDCCheckboxAdapter} */{
        addClass: () => /* className: string */{},
        removeClass: () => /* className: string */{},
        setNativeControlAttr: () => /* attr: string, value: string */{},
        removeNativeControlAttr: () => /* attr: string */{},
        registerAnimationEndHandler: () => /* handler: EventListener */{},
        deregisterAnimationEndHandler: () => /* handler: EventListener */{},
        registerChangeHandler: () => /* handler: EventListener */{},
        deregisterChangeHandler: () => /* handler: EventListener */{},
        getNativeControl: () => /* !MDCSelectionControlState */{},
        forceLayout: () => {},
        isAttachedToDOM: () => /* boolean */{}
      }
    );
  }

  constructor(adapter) {
    super(Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter));

    /** @private {string} */
    this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].TRANSITION_STATE_INIT;

    /** @private {string} */
    this.currentAnimationClass_ = '';

    /** @private {number} */
    this.animEndLatchTimer_ = 0;

    this.animEndHandler_ = /** @private {!EventListener} */() => this.handleAnimationEnd();

    this.changeHandler_ = /** @private {!EventListener} */() => this.handleChange();
  }

  init() {
    this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
    this.updateAriaChecked_();
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].UPGRADED);
    this.adapter_.registerChangeHandler(this.changeHandler_);
    this.installPropertyChangeHooks_();
  }

  destroy() {
    this.adapter_.deregisterChangeHandler(this.changeHandler_);
    this.uninstallPropertyChangeHooks_();
  }

  /** @return {boolean} */
  isChecked() {
    return this.getNativeControl_().checked;
  }

  /** @param {boolean} checked */
  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }

  /** @return {boolean} */
  isIndeterminate() {
    return this.getNativeControl_().indeterminate;
  }

  /** @param {boolean} indeterminate */
  setIndeterminate(indeterminate) {
    this.getNativeControl_().indeterminate = indeterminate;
  }

  /** @return {boolean} */
  isDisabled() {
    return this.getNativeControl_().disabled;
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].DISABLED);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].DISABLED);
    }
  }

  /** @return {?string} */
  getValue() {
    return this.getNativeControl_().value;
  }

  /** @param {?string} value */
  setValue(value) {
    this.getNativeControl_().value = value;
  }

  /**
   * Handles the animationend event for the checkbox
   */
  handleAnimationEnd() {
    clearTimeout(this.animEndLatchTimer_);
    this.animEndLatchTimer_ = setTimeout(() => {
      this.adapter_.removeClass(this.currentAnimationClass_);
      this.adapter_.deregisterAnimationEndHandler(this.animEndHandler_);
    }, __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* numbers */].ANIM_END_LATCH_MS);
  }

  /**
   * Handles the change event for the checkbox
   */
  handleChange() {
    this.transitionCheckState_();
  }

  /** @private */
  installPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach(controlState => {
      const desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
      // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739
      if (validDescriptor(desc)) {
        const nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */{
          get: desc.get,
          set: state => {
            desc.set.call(nativeCb, state);
            this.transitionCheckState_();
          },
          configurable: desc.configurable,
          enumerable: desc.enumerable
        };
        Object.defineProperty(nativeCb, controlState, nativeCbDesc);
      }
    });
  }

  /** @private */
  uninstallPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach(controlState => {
      const desc = /** @type {!ObjectPropertyDescriptor} */Object.getOwnPropertyDescriptor(cbProto, controlState);
      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, desc);
      }
    });
  }

  /** @private */
  transitionCheckState_() {
    const nativeCb = this.adapter_.getNativeControl();
    if (!nativeCb) {
      return;
    }
    const oldState = this.currentCheckState_;
    const newState = this.determineCheckState_(nativeCb);
    if (oldState === newState) {
      return;
    }

    this.updateAriaChecked_();

    // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.
    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState;

    // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.
    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
    }
  }

  /**
   * @param {!MDCSelectionControlState} nativeCb
   * @return {string}
   * @private
   */
  determineCheckState_(nativeCb) {
    const {
      TRANSITION_STATE_INDETERMINATE,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED
    } = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */];

    if (nativeCb.indeterminate) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  }

  /**
   * @param {string} oldState
   * @param {string} newState
   * @return {string}
   */
  getTransitionAnimationClass_(oldState, newState) {
    const {
      TRANSITION_STATE_INIT,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED
    } = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */];

    const {
      ANIM_UNCHECKED_CHECKED,
      ANIM_UNCHECKED_INDETERMINATE,
      ANIM_CHECKED_UNCHECKED,
      ANIM_CHECKED_INDETERMINATE,
      ANIM_INDETERMINATE_CHECKED,
      ANIM_INDETERMINATE_UNCHECKED
    } = MDCCheckboxFoundation.cssClasses;

    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return '';
        }
      // fallthrough
      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
      // TRANSITION_STATE_INDETERMINATE
      default:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  }

  updateAriaChecked_() {
    // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
    if (this.isIndeterminate()) {
      this.adapter_.setNativeControlAttr(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ARIA_CHECKED_ATTR, __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      this.adapter_.removeNativeControlAttr(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ARIA_CHECKED_ATTR);
    }
  }

  /**
   * @return {!MDCSelectionControlState}
   * @private
   */
  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      indeterminate: false,
      disabled: false,
      value: null
    };
  }
}

/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */
function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/* harmony default export */ __webpack_exports__["a"] = (MDCCheckboxFoundation);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_selection_control_index__ = __webpack_require__(5);
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


/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
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
class MDCCheckboxAdapter {
  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /**
   * Sets an attribute with a given value on the input element.
   * @param {string} attr
   * @param {string} value
   */
  setNativeControlAttr(attr, value) {}

  /**
   * Removes an attribute from the input element.
   * @param {string} attr
   */
  removeNativeControlAttr(attr) {}

  /** @param {!EventListener} handler */
  registerAnimationEndHandler(handler) {}

  /** @param {!EventListener} handler */
  deregisterAnimationEndHandler(handler) {}

  /** @param {!EventListener} handler */
  registerChangeHandler(handler) {}

  /** @param {!EventListener} handler */
  deregisterChangeHandler(handler) {}

  /** @return {!MDCSelectionControlState} */
  getNativeControl() {}

  forceLayout() {}

  /** @return {boolean} */
  isAttachedToDOM() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCCheckboxAdapter);

/***/ }),
/* 103 */
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

/** @const {string} */
const ROOT = 'mdc-checkbox';

/** @enum {string} */
const cssClasses = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

/** @enum {string} */
const strings = {
  NATIVE_CONTROL_SELECTOR: `.${ROOT}__native-control`,
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
};

/** @enum {number} */
const numbers = {
  ANIM_END_LATCH_MS: 250
};



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(106);
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
 * @extends {MDCFoundation<!MDCFormFieldAdapter>}
 */
class MDCFormFieldFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /** @return enum {strings} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /** @return {!MDCFormFieldAdapter} */
  static get defaultAdapter() {
    return {
      registerInteractionHandler: () => /* type: string, handler: EventListener */{},
      deregisterInteractionHandler: () => /* type: string, handler: EventListener */{},
      activateInputRipple: () => {},
      deactivateInputRipple: () => {}
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCFormFieldFoundation.defaultAdapter, adapter));

    /** @private {!EventListener} */
    this.clickHandler_ = /** @type {!EventListener} */() => this.handleClick_();
  }

  init() {
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
  }

  /** @private */
  handleClick_() {
    this.adapter_.activateInputRipple();
    requestAnimationFrame(() => this.adapter_.deactivateInputRipple());
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFormFieldFoundation);

/***/ }),
/* 105 */
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
 * Adapter for MDC Form Field. Provides an interface for managing
 * - event handlers
 * - ripple activation
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
class MDCFormFieldAdapter {
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

  activateInputRipple() {}

  deactivateInputRipple() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCFormFieldAdapter);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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

/** @enum {string} */
const cssClasses = {
  ROOT: 'mdc-form-field'
};

/** @enum {string} */
const strings = {
  LABEL_SELECTOR: '.mdc-form-field > label'
};



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_selection_control_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(109);
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


/**
 * @extends {MDCFoundation<!MDCRadioAdapter>}
 */
class MDCRadioFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */];
  }

  /** @return enum {strings} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */];
  }

  /** @return {!MDCRadioAdapter} */
  static get defaultAdapter() {
    return (/** @type {!MDCRadioAdapter} */{
        addClass: () => /* className: string */{},
        removeClass: () => /* className: string */{},
        getNativeControl: () => /* !MDCSelectionControlState */{}
      }
    );
  }

  /** @return {boolean} */
  isChecked() {
    return this.getNativeControl_().checked;
  }

  /** @param {boolean} checked */
  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }

  /** @return {boolean} */
  isDisabled() {
    return this.getNativeControl_().disabled;
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    const { DISABLED } = MDCRadioFoundation.cssClasses;
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }

  /** @return {?string} */
  getValue() {
    return this.getNativeControl_().value;
  }

  /** @param {?string} value */
  setValue(value) {
    this.getNativeControl_().value = value;
  }

  /**
   * @return {!MDCSelectionControlState}
   * @private
   */
  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      disabled: false,
      value: null
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCRadioFoundation);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_selection_control_index__ = __webpack_require__(5);
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


/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Radio. Provides an interface for managing
 * - classes
 * - dom
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
class MDCRadioAdapter {
  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /** @return {!MDCSelectionControlState} */
  getNativeControl() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCRadioAdapter);

/***/ }),
/* 109 */
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
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

/** @enum {string} */
const cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initSwitches;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_event_handler__ = __webpack_require__(4);



function initSwitches() {
    console.log('\tSwitches');

    let components = document.querySelectorAll('.v-switch');
    if (components) {
        for (let i = 0; i < components.length; i++) {
            let component = components[i];
            if (!component.vComponent) {
                component.vComponent = new VSwitch(component, null); //new MDCSwitch(commponent));
            }
        }
    }
}

class VSwitch extends Object(__WEBPACK_IMPORTED_MODULE_1__mixins_event_handler__["a" /* eventHandlerMixin */])(__WEBPACK_IMPORTED_MODULE_0__base_component__["a" /* VBaseComponent */]) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        this.mdcComponent = mdcComponent;
    }

    validate(_formData) {
        return true;
    }

    prepareSubmit(form, params) {
        if (!form) {
            params.push([this.input.name, this.input.checked]);
        }
    }
}
/* unused harmony export VSwitch */


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initSteppers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(3);



function initSteppers() {
    console.log('\tStepper');
    let components = document.querySelectorAll('ul.mdl-stepper');
    for (let i = 0; i < components.length; i++) {
        let component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VStepper(component);
        }
    }
}

class VStepper extends Object(__WEBPACK_IMPORTED_MODULE_0__mixins_event_handler__["a" /* eventHandlerMixin */])(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* VBaseComponent */]) {
    constructor(element) {
        super(element);

        if (typeof componentHandler !== 'undefined') {
            // MDL is loaded?
            componentHandler.upgradeElement(element);
            this.stepper = element.MaterialStepper;
        }
    }

    navigate(nav_action) {
        if (nav_action === 'continue' || nav_action === 'next') {
            this.next_step();
        } else if (nav_action === 'back') {
            this.back_step();
        } else if (nav_action === 'skip') {
            this.skip_step();
        }
    }

    next_step() {
        this.stepper.next();
    }
    back_step() {
        this.stepper.back();
    }
    skip_step() {
        this.stepper.skip();
    }

}
/* unused harmony export VStepper */


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initSliders;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_slider__ = __webpack_require__(113);




function initSliders() {
    console.log('\tSliders');

    var components = document.querySelectorAll('.mdc-slider');
    for (var i = 0; i < components.length; i++) {
        var comp = components[i];
        if (!comp.vComponent) {
            comp.vComponent = new VSlider(comp, new __WEBPACK_IMPORTED_MODULE_2__material_slider__["a" /* MDCSlider */](comp));
        }
    }
}

class VSlider extends Object(__WEBPACK_IMPORTED_MODULE_1__mixins_event_handler__["a" /* eventHandlerMixin */])(__WEBPACK_IMPORTED_MODULE_0__base_component__["a" /* VBaseComponent */]) {
    constructor(element, mdcComponent) {
        super(element);
        this.mdcComponent = mdcComponent;

        this.mutationObserver = new MutationObserver(function (mutations) {
            var components = document.querySelectorAll('.mdc-slider');
            for (var i = 0; i < components.length; i++) {
                var comp = components[i];
                if (comp.vComponent) {
                    comp.vComponent.mdcComponent.layout();
                }
            }
        });
        this.mutationObserver.observe(document.documentElement, {
            attributes: true,
            characterData: false,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: false
        });
    }

    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        //if (!form) {
        params.push([this.element.getAttribute('data-name'), this.mdcComponent.value]);
        //}
    }
}
/* unused harmony export VSlider */


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSlider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(114);
/* unused harmony reexport MDCSliderFoundation */
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/**
 * @extends MDCComponent<!MDCSliderFoundation>
 */
class MDCSlider extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCSlider(root);
  }

  constructor(...args) {
    super(...args);
    /** @type {?Element} */
    this.thumbContainer_;
    /** @type {?Element} */
    this.track_;
    /** @type {?Element} */
    this.pinValueMarker_;
    /** @type {?Element} */
    this.trackMarkerContainer_;
  }

  /** @return {number} */
  get value() {
    return this.foundation_.getValue();
  }

  /** @param {number} value */
  set value(value) {
    this.foundation_.setValue(value);
  }

  /** @return {number} */
  get min() {
    return this.foundation_.getMin();
  }

  /** @param {number} min */
  set min(min) {
    this.foundation_.setMin(min);
  }

  /** @return {number} */
  get max() {
    return this.foundation_.getMax();
  }

  /** @param {number} max */
  set max(max) {
    this.foundation_.setMax(max);
  }

  /** @return {number} */
  get step() {
    return this.foundation_.getStep();
  }

  /** @param {number} step */
  set step(step) {
    this.foundation_.setStep(step);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  initialize() {
    this.thumbContainer_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].TRACK_MARKER_CONTAINER_SELECTOR);
  }

  /**
   * @return {!MDCSliderFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */](
    /** @type {!MDCSliderAdapter} */{
      hasClass: className => this.root_.classList.contains(className),
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      getAttribute: name => this.root_.getAttribute(name),
      setAttribute: (name, value) => this.root_.setAttribute(name, value),
      removeAttribute: name => this.root_.removeAttribute(name),
      computeBoundingRect: () => this.root_.getBoundingClientRect(),
      getTabIndex: () => this.root_.tabIndex,
      registerInteractionHandler: (type, handler) => {
        this.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.root_.removeEventListener(type, handler);
      },
      registerThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.addEventListener(type, handler);
      },
      deregisterThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.removeEventListener(type, handler);
      },
      registerBodyInteractionHandler: (type, handler) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type, handler) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        this.emit(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].INPUT_EVENT, this);
      },
      notifyChange: () => {
        this.emit(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].CHANGE_EVENT, this);
      },
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: (propertyName, value) => {
        this.track_.style.setProperty(propertyName, value);
      },
      setMarkerValue: value => {
        this.pinValueMarker_.innerText = value;
      },
      appendTrackMarkers: numMarkers => {
        const frag = document.createDocumentFragment();
        for (let i = 0; i < numMarkers; i++) {
          const marker = document.createElement('div');
          marker.classList.add('mdc-slider__track-marker');
          frag.appendChild(marker);
        }
        this.trackMarkerContainer_.appendChild(frag);
      },
      removeTrackMarkers: () => {
        while (this.trackMarkerContainer_.firstChild) {
          this.trackMarkerContainer_.removeChild(this.trackMarkerContainer_.firstChild);
        }
      },
      setLastTrackMarkersStyleProperty: (propertyName, value) => {
        // We remove and append new nodes, thus, the last track marker must be dynamically found.
        const lastTrackMarker = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].LAST_TRACK_MARKER_SELECTOR);
        lastTrackMarker.style.setProperty(propertyName, value);
      },
      isRTL: () => getComputedStyle(this.root_).direction === 'rtl'
    });
  }

  initialSyncWithDOM() {
    const origValueNow = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_VALUENOW));
    this.min = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_VALUEMIN)) || this.min;
    this.max = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_VALUEMAX)) || this.max;
    this.step = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].STEP_DATA_ATTR)) || this.step;
    this.value = origValueNow || this.value;
    this.disabled = this.root_.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_DISABLED) && this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_DISABLED) !== 'false';
    this.foundation_.setupTrackMarker();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @param {number=} amount */
  stepUp(amount = this.step || 1) {
    this.value += amount;
  }

  /** @param {number=} amount */
  stepDown(amount = this.step || 1) {
    this.value -= amount;
  }
}



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation_index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_base_foundation__ = __webpack_require__(0);
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/** @enum {string} */
const KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown'
};

/** @enum {string} */
const MOVE_EVENT_MAP = {
  'mousedown': 'mousemove',
  'touchstart': 'touchmove',
  'pointerdown': 'pointermove'
};

const DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
const UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];

/**
 * @extends {MDCFoundation<!MDCSliderAdapter>}
 */
class MDCSliderFoundation extends __WEBPACK_IMPORTED_MODULE_3__material_base_foundation__["a" /* default */] {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */];
  }

  /** @return enum {strings} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */];
  }

  /** @return enum {numbers} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* numbers */];
  }

  /** @return {!MDCSliderAdapter} */
  static get defaultAdapter() {
    return (/** @type {!MDCSliderAdapter} */{
        hasClass: () => /* className: string */ /* boolean */false,
        addClass: () => /* className: string */{},
        removeClass: () => /* className: string */{},
        getAttribute: () => /* name: string */ /* string|null */null,
        setAttribute: () => /* name: string, value: string */{},
        removeAttribute: () => /* name: string */{},
        computeBoundingRect: () => ( /* ClientRect */{
          top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0
        }),
        getTabIndex: () => /* number */0,
        registerInteractionHandler: () => /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: () => /* type: string, handler: EventListener */{},
        registerThumbContainerInteractionHandler: () => /* type: string, handler: EventListener */{},
        deregisterThumbContainerInteractionHandler: () => /* type: string, handler: EventListener */{},
        registerBodyInteractionHandler: () => /* type: string, handler: EventListener */{},
        deregisterBodyInteractionHandler: () => /* type: string, handler: EventListener */{},
        registerResizeHandler: () => /* handler: EventListener */{},
        deregisterResizeHandler: () => /* handler: EventListener */{},
        notifyInput: () => {},
        notifyChange: () => {},
        setThumbContainerStyleProperty: () => /* propertyName: string, value: string */{},
        setTrackStyleProperty: () => /* propertyName: string, value: string */{},
        setMarkerValue: () => /* value: number */{},
        appendTrackMarkers: () => /* numMarkers: number */{},
        removeTrackMarkers: () => {},
        setLastTrackMarkersStyleProperty: () => /* propertyName: string, value: string */{},
        isRTL: () => /* boolean */false
      }
    );
  }

  /**
   * Creates a new instance of MDCSliderFoundation
   * @param {?MDCSliderAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCSliderFoundation.defaultAdapter, adapter));
    /** @private {?ClientRect} */
    this.rect_ = null;
    // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.
    this.savedTabIndex_ = NaN;
    this.active_ = false;
    this.inTransit_ = false;
    this.isDiscrete_ = false;
    this.hasTrackMarker_ = false;
    this.handlingThumbTargetEvt_ = false;
    this.min_ = 0;
    this.max_ = 100;
    this.step_ = 0;
    this.value_ = 0;
    this.disabled_ = false;
    this.preventFocusState_ = false;
    this.updateUIFrame_ = 0;
    this.thumbContainerPointerHandler_ = () => {
      this.handlingThumbTargetEvt_ = true;
    };
    this.interactionStartHandler_ = evt => this.handleDown_(evt);
    this.keydownHandler_ = evt => this.handleKeydown_(evt);
    this.focusHandler_ = () => this.handleFocus_();
    this.blurHandler_ = () => this.handleBlur_();
    this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.isDiscrete_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].HAS_TRACK_MARKER);
    DOWN_EVENTS.forEach(evtName => this.adapter_.registerInteractionHandler(evtName, this.interactionStartHandler_));
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    DOWN_EVENTS.forEach(evtName => {
      this.adapter_.registerThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout();
    // At last step, provide a reasonable default value to discrete slider
    if (this.isDiscrete_ && this.getStep() == 0) {
      this.step_ = 1;
    }
  }

  destroy() {
    DOWN_EVENTS.forEach(evtName => {
      this.adapter_.deregisterInteractionHandler(evtName, this.interactionStartHandler_);
    });
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    DOWN_EVENTS.forEach(evtName => {
      this.adapter_.deregisterThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  setupTrackMarker() {
    if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() != 0) {
      const min = this.getMin();
      const max = this.getMax();
      const step = this.getStep();
      let numMarkers = (max - min) / step;

      // In case distance between max & min is indivisible to step,
      // we place the secondary to last marker proportionally at where thumb
      // could reach and place the last marker at max value
      const indivisible = Math.ceil(numMarkers) !== numMarkers;
      if (indivisible) {
        numMarkers = Math.ceil(numMarkers);
      }

      this.adapter_.removeTrackMarkers();
      this.adapter_.appendTrackMarkers(numMarkers);

      if (indivisible) {
        const lastStepRatio = (max - numMarkers * step) / step + 1;
        const flex = Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["b" /* getCorrectPropertyName */])(window, 'flex');
        this.adapter_.setLastTrackMarkersStyleProperty(flex, String(lastStepRatio));
      }
    }
  }

  layout() {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  }

  /** @return {number} */
  getValue() {
    return this.value_;
  }

  /** @param {number} value */
  setValue(value) {
    this.setValue_(value, false);
  }

  /** @return {number} */
  getMax() {
    return this.max_;
  }

  /** @param {number} max */
  setMax(max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }
    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  }

  /** @return {number} */
  getMin() {
    return this.min_;
  }

  /** @param {number} min */
  setMin(min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }
    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  }

  /** @return {number} */
  getStep() {
    return this.step_;
  }

  /** @param {number} step */
  setStep(step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }
    if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
      step = 1;
    }
    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  }

  /** @return {boolean} */
  isDisabled() {
    return this.disabled_;
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].DISABLED, this.disabled_);
    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_DISABLED);
      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  }

  /**
   * Called when the user starts interacting with the slider
   * @param {!Event} evt
   * @private
   */
  handleDown_(evt) {
    if (this.disabled_) {
      return;
    }

    this.preventFocusState_ = true;
    this.setInTransit_(!this.handlingThumbTargetEvt_);
    this.handlingThumbTargetEvt_ = false;
    this.setActive_(true);

    const moveHandler = evt => {
      this.handleMove_(evt);
    };

    // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
    // do not always fire these consistently in pairs.
    // (See https://github.com/material-components/material-components-web/issues/1192)
    const upHandler = () => {
      this.handleUp_();
      this.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
      UP_EVENTS.forEach(evtName => this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler));
    };

    this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
    UP_EVENTS.forEach(evtName => this.adapter_.registerBodyInteractionHandler(evtName, upHandler));
    this.setValueFromEvt_(evt);
  }

  /**
   * Called when the user moves the slider
   * @param {!Event} evt
   * @private
   */
  handleMove_(evt) {
    evt.preventDefault();
    this.setValueFromEvt_(evt);
  }

  /**
   * Called when the user's interaction with the slider ends
   * @private
   */
  handleUp_() {
    this.setActive_(false);
    this.adapter_.notifyChange();
  }

  /**
   * Returns the pageX of the event
   * @param {!Event} evt
   * @return {number}
   * @private
   */
  getPageX_(evt) {
    if (evt.targetTouches && evt.targetTouches.length > 0) {
      return evt.targetTouches[0].pageX;
    }
    return evt.pageX;
  }

  /**
   * Sets the slider value from an event
   * @param {!Event} evt
   * @private
   */
  setValueFromEvt_(evt) {
    const pageX = this.getPageX_(evt);
    const value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  }

  /**
   * Computes the new value from the pageX position
   * @param {number} pageX
   * @return {number}
   */
  computeValueFromPageX_(pageX) {
    const { max_: max, min_: min } = this;
    const xPos = pageX - this.rect_.left;
    let pctComplete = xPos / this.rect_.width;
    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    }
    // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].
    return min + pctComplete * (max - min);
  }

  /**
   * Handles keydown events
   * @param {!Event} evt
   */
  handleKeydown_(evt) {
    const keyId = this.getKeyId_(evt);
    const value = this.getValueForKeyId_(keyId);
    if (isNaN(value)) {
      return;
    }

    // Prevent page from scrolling due to key presses that would normally scroll the page
    evt.preventDefault();
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  }

  /**
   * Returns the computed name of the event
   * @param {!Event} kbdEvt
   * @return {string}
   */
  getKeyId_(kbdEvt) {
    if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
      return KEY_IDS.ARROW_LEFT;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
      return KEY_IDS.ARROW_RIGHT;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
      return KEY_IDS.ARROW_UP;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
      return KEY_IDS.ARROW_DOWN;
    }
    if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
      return KEY_IDS.HOME;
    }
    if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
      return KEY_IDS.END;
    }
    if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
      return KEY_IDS.PAGE_UP;
    }
    if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
      return KEY_IDS.PAGE_DOWN;
    }

    return '';
  }

  /**
   * Computes the value given a keyboard key ID
   * @param {string} keyId
   * @return {number}
   */
  getValueForKeyId_(keyId) {
    const { max_: max, min_: min, step_: step } = this;
    let delta = step || (max - min) / 100;
    const valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);
    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
      case KEY_IDS.ARROW_LEFT:
      case KEY_IDS.ARROW_DOWN:
        return this.value_ - delta;
      case KEY_IDS.ARROW_RIGHT:
      case KEY_IDS.ARROW_UP:
        return this.value_ + delta;
      case KEY_IDS.HOME:
        return this.min_;
      case KEY_IDS.END:
        return this.max_;
      case KEY_IDS.PAGE_UP:
        return this.value_ + delta * __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* numbers */].PAGE_FACTOR;
      case KEY_IDS.PAGE_DOWN:
        return this.value_ - delta * __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* numbers */].PAGE_FACTOR;
      default:
        return NaN;
    }
  }

  handleFocus_() {
    if (this.preventFocusState_) {
      return;
    }
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].FOCUS);
  }

  handleBlur_() {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].FOCUS);
  }

  /**
   * Sets the value of the slider
   * @param {number} value
   * @param {boolean} shouldFireInput
   * @param {boolean=} force
   */
  setValue_(value, shouldFireInput, force = false) {
    if (value === this.value_ && !force) {
      return;
    }

    const { min_: min, max_: max } = this;
    const valueSetToBoundary = value === min || value === max;
    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    this.value_ = value;
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();
      if (this.isDiscrete_) {
        this.adapter_.setMarkerValue(value);
      }
    }
  }

  /**
   * Calculates the quantized value
   * @param {number} value
   * @return {number}
   */
  quantize_(value) {
    const numSteps = Math.round(value / this.step_);
    const quantizedVal = numSteps * this.step_;
    return quantizedVal;
  }

  updateUIForCurrentValue_() {
    const { max_: max, min_: min, value_: value } = this;
    const pctComplete = (value - min) / (max - min);
    let translatePx = pctComplete * this.rect_.width;
    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    const transformProp = Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["b" /* getCorrectPropertyName */])(window, 'transform');
    const transitionendEvtName = Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a" /* getCorrectEventName */])(window, 'transitionend');

    if (this.inTransit_) {
      const onTransitionEnd = () => {
        this.setInTransit_(false);
        this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      };
      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
    }

    this.updateUIFrame_ = requestAnimationFrame(() => {
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      this.adapter_.setThumbContainerStyleProperty(transformProp, `translateX(${translatePx}px) translateX(-50%)`);
      this.adapter_.setTrackStyleProperty(transformProp, `scaleX(${pctComplete})`);
    });
  }

  /**
   * Toggles the active state of the slider
   * @param {boolean} active
   */
  setActive_(active) {
    this.active_ = active;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].ACTIVE, this.active_);
  }

  /**
   * Toggles the inTransit state of the slider
   * @param {boolean} inTransit
   */
  setInTransit_(inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].IN_TRANSIT, this.inTransit_);
  }

  /**
   * Conditionally adds or removes a class based on shouldBePresent
   * @param {string} className
   * @param {boolean} shouldBePresent
   */
  toggleClass_(className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCSliderFoundation);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initHiddenFields;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_textfield__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_event_handler__ = __webpack_require__(4);




function initHiddenFields() {
    console.log('\tHiddenFields');

    var fields = document.querySelectorAll('.v-hidden-field');
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (!field.vComponent) {
            field.vComponent = new VHiddenField(field);
        }
    }
}

class VHiddenField extends Object(__WEBPACK_IMPORTED_MODULE_2__mixins_event_handler__["a" /* eventHandlerMixin */])(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* VBaseComponent */]) {
    constructor(element, mdcComponent) {
        super(element);
        // With the component the element is the input
        this.vComponent = this;
    }

    value() {
        return this.element.value;
    }

    // Called to collect data for submission
    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            params.push([this.element.name, this.element.value]);
        }
    }

    clear() {
        this.element.setValue('');
    }

    setValue(value) {
        this.element.value = value;
    }
}
/* unused harmony export VHiddenField */


/***/ })
/******/ ]);