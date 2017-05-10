/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(2);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _customCheckbox = __webpack_require__(3);
	
	var customCheckbox = _interopRequireWildcard(_customCheckbox);
	
	var _customSelect = __webpack_require__(4);
	
	var customSelect = _interopRequireWildcard(_customSelect);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function ready(fn) {
	    if (document.readyState !== 'loading') {
	        fn();
	    } else {
	        document.addEventListener('DOMContentLoaded', fn);
	    }
	}
	
	//const forms = (function(window, document){
	//    
	//    const blockSubmit = function(element){
	//        const formsElems = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('form');
	//            
	//        utils.forEach(formsElems, function(index, value){
	//            let thisForm = value;
	//            utils.addEvent(thisForm, 'submit', function(e){e.preventDefault();});
	//        });
	//    };
	//    
	//    return {
	//        block: blockSubmit
	//    };
	//}(window, document));
	
	function init() {
	    customCheckbox.init();
	    //    customSelect.config({
	    //        'customSelectButtonClass': 'dupa'
	    //    });
	    customSelect.init();
	    //    forms.block();
	
	    //    (function blockSubmit(element){
	    //        const formsElems = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('form');
	    //            
	    //        utils.forEach(formsElems, function(index, value){
	    //            let thisForm = value;
	    //            utils.addEvent(thisForm, 'submit', function(e){e.preventDefault();});
	    //        });
	    //    }());
	}
	
	ready(init);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function forEach(array, callback, scope) {
	    for (var i = 0; i < array.length; i++) {
	        callback.call(scope, i, array[i]); // passes back stuff we need
	    }
	}
	
	function insertAfter(el, referenceNode) {
	    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
	}
	
	function addClass(el, className) {
	    if (el.classList) {
	        el.classList.add(className);
	    } else {
	        el.className += ' ' + className;
	    }
	}
	
	function removeClass(el, className) {
	    if (el.classList) {
	        el.classList.remove(className);
	    } else {
	        el.className += ' ';
	    }
	}
	
	function toggleClass(el, className) {
	    if (el.classList) {
	        el.classList.toggle(className);
	    } else {
	        var classes = el.className.split(' ');
	        var existingIndex = classes.indexOf(className);
	
	        if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push(className);
	
	        el.className = classes.join(' ');
	    }
	}
	
	function hasClass(el, className) {
	    if (el.classList) {
	        if (el.classList.contains(className)) {
	            return true;
	        }
	    } else {
	        if (new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)) {
	            return true;
	        }
	    }
	
	    return false;
	}
	
	function wrapTag(toWrap, wrapper) {
	    wrapper = wrapper || document.createElement('div');
	    if (toWrap.nextSibling) {
	        toWrap.parentNode.insertBefore(wrapper, toWrap.nextSibling);
	    } else {
	        toWrap.parentNode.appendChild(wrapper);
	    }
	    return wrapper.appendChild(toWrap);
	}
	
	function addEvent(element, eventName, eventHandler, eventCapture) {
	    var oldEventName = 'on' + eventName,
	        useCapture = eventCapture ? eventCapture : false;
	
	    if (element.addEventListener) {
	        element.addEventListener(eventName, eventHandler, useCapture);
	    } else if (element.attachEvent) {
	        element.attachEvent(oldEventName, eventHandler);
	    }
	}
	
	function triggerEvent(element, eventType) {
	    if ('createEvent' in document) {
	        var event = document.createEvent('HTMLEvents');
	        event.initEvent(eventType, false, true);
	        element.dispatchEvent(event);
	    } else {
	        var _event = document.createEventObject();
	        _event.eventType = eventType;
	        element.fireEvent('on' + _event.eventType, _event);
	    }
	}
	
	function isTypeOf(type, obj) {
	    var clas = Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase();
	    return obj !== undefined && obj !== null && clas === type.toLocaleLowerCase();
	}
	
	exports.forEach = forEach;
	exports.insertAfter = insertAfter;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.toggleClass = toggleClass;
	exports.hasClass = hasClass;
	exports.wrapTag = wrapTag;
	exports.addEvent = addEvent;
	exports.triggerEvent = triggerEvent;
	exports.isTypeOf = isTypeOf;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = undefined;
	
	var _utils = __webpack_require__(2);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function checking(e) {
	    var label = e.target.nodeName.toLocaleLowerCase() === 'label' ? e.target : e.target.parentNode,
	        checkbox = label.previousElementSibling;
	
	    if (!checkbox.checked) {
	        checkbox.checked = true;
	    } else {
	        checkbox.checked = false;
	    }
	
	    e.preventDefault();
	}
	
	function handleKeys(e) {
	    if (e.keyCode === 13 || e.keyCode === 32) {
	        if (e.target.checked) {
	            e.target.checked = false;
	        } else {
	            e.target.checked = true;
	        }
	    }
	    e.preventDefault();
	}
	
	function initCheckboxes(element) {
	    var checkboxes = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('input[type="checkbox"]');
	
	    utils.forEach(checkboxes, function (index, value) {
	        var thisCheckbox = value,
	            thisLabel = value.nextElementSibling;
	
	        utils.addEvent(thisCheckbox, 'keydown', handleKeys);
	        utils.addEvent(thisLabel, 'click', checking);
	    });
	}
	
	exports.init = initCheckboxes;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.config = exports.init = undefined;
	
	var _utils = __webpack_require__(2);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var config = {
	    selectHiddenClass: 'form__select_hidden',
	    customSelectButtonClass: 'custom-select-button',
	    customSelectButtonOpenClass: 'custom-select-button_open',
	    customSelectStatusClass: 'custom-select-button__status',
	    customSelectIconClass: 'custom-select-button__icon',
	    customSelectRoletextClass: 'custom-select-button__roletext',
	    customSelectMenuClass: 'custom-select-menu',
	    customSelectMenuHiddenClass: 'custom-select-menu_hidden',
	    customSelectMenuItem: 'custom-select-menu__item',
	    customSelectMenuItemSelected: 'custom-select-menu__item_selected',
	    customSelectMenuItemMarked: 'custom-select-menu__item_hover-focus',
	    roleText: ' select'
	};
	
	function setConfig(customConfig) {
	    var newConfig = {};
	    for (var key in customConfig) {
	        if (config.hasOwnProperty(key)) {
	            newConfig[key] = customConfig[key];
	        }
	    }
	    Object.assign(config, newConfig);
	}
	
	function showMenu(e) {
	    var menuId = e.target.attributes['id'].value,
	        menuControl = document.querySelector('#' + menuId),
	        buttonId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
	        buttonControl = document.querySelector('#' + buttonId),
	        selectedItem = document.querySelector('#' + menuId + ' li.' + config.customSelectMenuItemSelected + ' a');
	
	    utils.removeClass(menuControl, config.customSelectMenuHiddenClass);
	    menuControl.setAttribute('aria-hidden', false);
	
	    selectedItem.focus();
	    utils.addClass(buttonControl, config.customSelectButtonOpenClass);
	}
	
	function hideMenu(e) {
	    var menuId = e.target.attributes['id'].value,
	        menuControl = document.querySelector('#' + menuId),
	        buttonId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
	        buttonControl = document.querySelector('#' + buttonId);
	
	    utils.removeClass(buttonControl, config.customSelectButtonOpenClass);
	    utils.addClass(menuControl, config.customSelectMenuHiddenClass);
	    menuControl.setAttribute('aria-hidden', true);
	}
	
	function toggleMenu(e) {
	    var menuId = e.target.attributes['id'].value,
	        menuControl = document.querySelector('#' + menuId),
	        display = (window.getComputedStyle ? getComputedStyle(menuControl, null) : menuControl.currentStyle).display;
	
	    if (display === 'none') {
	        utils.triggerEvent(menuControl, 'show');
	    } else {
	        utils.triggerEvent(menuControl, 'hide');
	    }
	}
	
	function selectElement(e) {
	    var menuControl = e.target.parentNode.parentNode,
	        menuId = menuControl.attributes['id'].value,
	        selectControlId = menuId.substr(0, menuId.indexOf('Menu')),
	        selectControl = document.querySelector('#' + selectControlId),
	        buttonControlId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
	        selected = document.querySelector('#' + menuId + ' li.' + config.customSelectMenuItemSelected),
	        buttonStatus = document.querySelector('#' + buttonControlId + ' .' + config.customSelectStatusClass),
	        thisElem = e.target.parentNode,
	        index = e.target.attributes['data-index'].value;
	
	    utils.removeClass(selected, config.customSelectMenuItemSelected);
	    utils.addClass(thisElem, config.customSelectMenuItemSelected);
	    selected.setAttribute('aria-selected', false);
	    thisElem.setAttribute('aria-selected', true);
	
	    buttonStatus.textContent = e.target.textContent;
	
	    utils.triggerEvent(menuControl, 'hide');
	
	    selectControl.selectedIndex = index;
	}
	
	function clickLink(e) {
	    utils.triggerEvent(e.target, 'select');
	    e.preventDefault();
	}
	
	function markLink(e) {
	    var menuControl = e.target.parentNode.parentNode,
	        menuId = menuControl.attributes['id'].value,
	        marked = document.querySelector('#' + menuId + ' li.' + config.customSelectMenuItemMarked),
	        thisElem = e.target.parentNode;
	
	    if (marked) {
	        utils.removeClass(marked, config.customSelectMenuItemMarked);
	    }
	    utils.addClass(thisElem, config.customSelectMenuItemMarked);
	    e.preventDefault();
	}
	
	function unmarkLink(e) {
	    var thisElem = e.target.parentNode;
	
	    if (thisElem) {
	        utils.removeClass(thisElem, config.customSelectMenuItemMarked);
	    }
	    e.preventDefault();
	}
	
	function buttonClick(e) {
	    var menu = e.target.nodeName.toLowerCase() === 'a' ? e.target.nextElementSibling : e.target.parentNode.nextElementSibling;
	
	    utils.triggerEvent(menu, 'toggle');
	    e.preventDefault();
	}
	
	function handleButtonKeydown(e) {
	    var buttonId = e.target.attributes['id'].value,
	        buttonControl = document.querySelector('#' + buttonId),
	        selectControlId = buttonId.substr(0, buttonId.indexOf('Button')),
	        selectControl = document.querySelector('#' + selectControlId),
	        menuId = selectControlId + 'Menu',
	        selectedIndex = selectControl.selectedIndex,
	        currentSelectedLi = document.querySelector('#' + menuId + ' li a[data-index="' + selectedIndex + '"]').parentNode;
	
	    switch (e.keyCode) {
	        case 13:
	        case 32:
	            utils.triggerEvent(buttonControl, 'mousedown');
	            e.preventDefault();
	            break;
	        case 37:
	        case 38:
	            if (currentSelectedLi.previousElementSibling) {
	                utils.triggerEvent(currentSelectedLi.previousElementSibling.children[0], 'select');
	            }
	            e.preventDefault();
	            break;
	        case 39:
	        case 40:
	            if (currentSelectedLi.nextElementSibling) {
	                utils.triggerEvent(currentSelectedLi.nextElementSibling.children[0], 'select');
	            }
	            e.preventDefault();
	            break;
	    }
	}
	
	function handleMenuKeydown(e) {
	    var thisElem = e.target,
	        currentSelectedLi = thisElem.parentNode,
	        menuControl = currentSelectedLi.parentNode,
	        menuId = menuControl.attributes['id'].value,
	        buttonId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
	        buttonControl = document.querySelector('#' + buttonId);
	
	    switch (e.keyCode) {
	        case 13:
	        case 32:
	            utils.triggerEvent(thisElem, 'select');
	            e.preventDefault();
	            break;
	        case 37:
	        case 38:
	            if (currentSelectedLi.previousElementSibling) {
	                currentSelectedLi.previousElementSibling.children[0].focus();
	            }
	            e.preventDefault();
	            break;
	        case 39:
	        case 40:
	            if (currentSelectedLi.nextElementSibling) {
	                currentSelectedLi.nextElementSibling.children[0].focus();
	            }
	            e.preventDefault();
	            break;
	        case 9:
	            utils.triggerEvent(menuControl, 'hide');
	            buttonControl.focus();
	            e.preventDefault();
	            break;
	    }
	}
	
	function initCustomSelect(element, customConfig) {
	    var selectSelectors = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('select');
	
	    //Checks that config exist, if exists and their properties are valid the custom config object overwrites default config object
	    if (customConfig && utils.isTypeOf('Object', customConfig)) {
	        setConfig(customConfig);
	    }
	
	    if (selectSelectors) {
	        utils.forEach(selectSelectors, function (index, value) {
	            var thisSelect = value,
	                thisSelectId = thisSelect.getAttribute('id'),
	                thisLabel = document.querySelector('label[for="' + thisSelectId + '"]'),
	                initialSelectedIndex = thisSelect.selectedIndex,
	                selectedOptionText = thisSelect.children[initialSelectedIndex].text,
	                buttonId = thisSelectId + 'Button',
	                menuId = thisSelectId + 'Menu',
	                button = document.createElement('a'),
	                selectMenuStatus = document.createElement('span'),
	                selectMenuIcon = document.createElement('span'),
	                roleText = document.createElement('span'),
	                menu = document.createElement('ul');
	
	            //Create button
	            utils.addClass(button, config.customSelectButtonClass);
	            button.setAttribute('id', buttonId);
	            button.setAttribute('role', 'button');
	            button.setAttribute('href', '#');
	            button.setAttribute('aria-haspopup', 'true');
	            button.setAttribute('aria-owns', menuId);
	            button.appendChild(selectMenuStatus);
	            button.appendChild(selectMenuIcon);
	            button.appendChild(roleText);
	
	            //Sets button status class and text
	            utils.addClass(selectMenuStatus, config.customSelectStatusClass);
	            selectMenuStatus.textContent = selectedOptionText;
	
	            //Add classes to button icon and role text
	            utils.addClass(selectMenuIcon, config.customSelectIconClass);
	            utils.addClass(roleText, config.customSelectRoletextClass);
	
	            //Move an attribute tabindex from select to button, only if this attribute exists
	            if (thisSelect.getAttribute('tabindex')) {
	                button.setAttribute('tabindex', thisSelect.getAttribute('tabindex'));
	            }
	
	            //Insert button after select 
	            utils.insertAfter(button, thisSelect);
	
	            //Create menu element
	            utils.addClass(menu, config.customSelectMenuClass);
	            menu.setAttribute('id', menuId);
	            menu.setAttribute('role', 'listbox');
	            menu.setAttribute('aria-hidden', 'true');
	            menu.setAttribute('aria-labelledby', buttonId);
	
	            //Create menu element children
	            utils.forEach(thisSelect.children, function (index, value) {
	                var item = document.createElement('li'),
	                    link = document.createElement('a');
	
	                link.setAttribute('href', '#');
	                link.setAttribute('tabindex', '-1');
	                link.setAttribute('role', 'option');
	                link.setAttribute('aria-selected', 'false');
	                link.setAttribute('data-index', index);
	                link.textContent = value.textContent;
	
	                item.appendChild(link);
	
	                if (index === initialSelectedIndex) {
	                    utils.addClass(item, config.customSelectMenuItemSelected);
	                    item.setAttribute('aria-selected', 'true');
	                }
	                menu.appendChild(item);
	            });
	
	            //Insert menu after button
	            utils.insertAfter(menu, button);
	            utils.addClass(menu, config.customSelectMenuHiddenClass);
	
	            //Set role application to body for extended version of select control
	            document.querySelector('body').setAttribute('role', 'application');
	
	            var menuOptions = [];
	
	            utils.forEach(menu.children, function (index, value) {
	                var link = value.childNodes[0];
	                if (link) {
	                    menuOptions.push(link);
	                    utils.addEvent(link, 'click', clickLink);
	                    utils.addEvent(link, 'select', selectElement);
	                    utils.addEvent(link, 'mouseover', markLink);
	                    utils.addEvent(link, 'focus', markLink);
	                    utils.addEvent(link, 'mouseout', unmarkLink);
	                    utils.addEvent(link, 'blur', unmarkLink);
	                }
	            });
	
	            //Bind nonstandard events
	            utils.addEvent(menu, 'show', showMenu);
	            utils.addEvent(menu, 'hide', hideMenu);
	            utils.addEvent(menu, 'toggle', toggleMenu);
	            utils.addEvent(menu, 'keydown', handleMenuKeydown);
	            utils.addEvent(button, 'mousedown', buttonClick);
	            utils.addEvent(button, 'click', function (e) {
	                e.preventDefault();
	            });
	            utils.addEvent(button, 'keydown', handleButtonKeydown);
	            utils.addClass(thisSelect, config.selectHiddenClass);
	            thisSelect.setAttribute('aria-hidden', true);
	            thisSelect.setAttribute('tabindex', '-1');
	
	            //Bind a label of select with new button
	            thisLabel.setAttribute('for', buttonId);
	            utils.addEvent(thisLabel, 'click', function () {
	                button.focus();
	                return false;
	            });
	        });
	
	        //Hide menu after click outside the button
	        utils.addEvent(document, 'click', function (e) {
	            e.preventDefault();
	            var button = e.target.nodeName.toLocaleLowerCase() === 'a' ? e.target : e.target.parentNode,
	                openedMenu = document.querySelector('.' + config.customSelectButtonOpenClass + '+ .' + config.customSelectMenuClass);
	
	            if (!utils.hasClass(button, config.customSelectButtonClass) && openedMenu) {
	                utils.triggerEvent(openedMenu, 'hide');
	            }
	        });
	    }
	}
	
	exports.init = initCustomSelect;
	exports.config = setConfig;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJjMmFjZDAyYmU2OGE5ODNjNmQiLCJ3ZWJwYWNrOi8vLy4vQzovUHJvamVjdHMvUHJpdmF0ZS9XV0NIL1Rhc2sxL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQzovUHJvamVjdHMvUHJpdmF0ZS9XV0NIL1Rhc2sxL3NyYy9qcy9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL0M6L1Byb2plY3RzL1ByaXZhdGUvV1dDSC9UYXNrMS9zcmMvanMvbW9kdWxlcy9jdXN0b21DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9DOi9Qcm9qZWN0cy9Qcml2YXRlL1dXQ0gvVGFzazEvc3JjL2pzL21vZHVsZXMvY3VzdG9tU2VsZWN0LmpzIl0sIm5hbWVzIjpbInV0aWxzIiwiY3VzdG9tQ2hlY2tib3giLCJjdXN0b21TZWxlY3QiLCJyZWFkeSIsImZuIiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwiaSIsImxlbmd0aCIsImNhbGwiLCJpbnNlcnRBZnRlciIsImVsIiwicmVmZXJlbmNlTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZSIsImNsYXNzZXMiLCJzcGxpdCIsImV4aXN0aW5nSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImpvaW4iLCJoYXNDbGFzcyIsImNvbnRhaW5zIiwiUmVnRXhwIiwidGVzdCIsIndyYXBUYWciLCJ0b1dyYXAiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnQiLCJlbGVtZW50IiwiZXZlbnROYW1lIiwiZXZlbnRIYW5kbGVyIiwiZXZlbnRDYXB0dXJlIiwib2xkRXZlbnROYW1lIiwidXNlQ2FwdHVyZSIsImF0dGFjaEV2ZW50IiwidHJpZ2dlckV2ZW50IiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVFdmVudE9iamVjdCIsImZpcmVFdmVudCIsImlzVHlwZU9mIiwidHlwZSIsIm9iaiIsImNsYXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsInNsaWNlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJjaGVja2luZyIsImUiLCJsYWJlbCIsInRhcmdldCIsIm5vZGVOYW1lIiwiY2hlY2tib3giLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY2hlY2tlZCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlS2V5cyIsImtleUNvZGUiLCJpbml0Q2hlY2tib3hlcyIsImNoZWNrYm94ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5kZXgiLCJ2YWx1ZSIsInRoaXNDaGVja2JveCIsInRoaXNMYWJlbCIsIm5leHRFbGVtZW50U2libGluZyIsImNvbmZpZyIsInNlbGVjdEhpZGRlbkNsYXNzIiwiY3VzdG9tU2VsZWN0QnV0dG9uQ2xhc3MiLCJjdXN0b21TZWxlY3RCdXR0b25PcGVuQ2xhc3MiLCJjdXN0b21TZWxlY3RTdGF0dXNDbGFzcyIsImN1c3RvbVNlbGVjdEljb25DbGFzcyIsImN1c3RvbVNlbGVjdFJvbGV0ZXh0Q2xhc3MiLCJjdXN0b21TZWxlY3RNZW51Q2xhc3MiLCJjdXN0b21TZWxlY3RNZW51SGlkZGVuQ2xhc3MiLCJjdXN0b21TZWxlY3RNZW51SXRlbSIsImN1c3RvbVNlbGVjdE1lbnVJdGVtU2VsZWN0ZWQiLCJjdXN0b21TZWxlY3RNZW51SXRlbU1hcmtlZCIsInJvbGVUZXh0Iiwic2V0Q29uZmlnIiwiY3VzdG9tQ29uZmlnIiwibmV3Q29uZmlnIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhc3NpZ24iLCJzaG93TWVudSIsIm1lbnVJZCIsImF0dHJpYnV0ZXMiLCJtZW51Q29udHJvbCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25JZCIsInN1YnN0ciIsImJ1dHRvbkNvbnRyb2wiLCJzZWxlY3RlZEl0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsImhpZGVNZW51IiwidG9nZ2xlTWVudSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiY3VycmVudFN0eWxlIiwic2VsZWN0RWxlbWVudCIsInNlbGVjdENvbnRyb2xJZCIsInNlbGVjdENvbnRyb2wiLCJidXR0b25Db250cm9sSWQiLCJzZWxlY3RlZCIsImJ1dHRvblN0YXR1cyIsInRoaXNFbGVtIiwidGV4dENvbnRlbnQiLCJzZWxlY3RlZEluZGV4IiwiY2xpY2tMaW5rIiwibWFya0xpbmsiLCJtYXJrZWQiLCJ1bm1hcmtMaW5rIiwiYnV0dG9uQ2xpY2siLCJtZW51IiwidG9Mb3dlckNhc2UiLCJoYW5kbGVCdXR0b25LZXlkb3duIiwiY3VycmVudFNlbGVjdGVkTGkiLCJjaGlsZHJlbiIsImhhbmRsZU1lbnVLZXlkb3duIiwiaW5pdEN1c3RvbVNlbGVjdCIsInNlbGVjdFNlbGVjdG9ycyIsInRoaXNTZWxlY3QiLCJ0aGlzU2VsZWN0SWQiLCJnZXRBdHRyaWJ1dGUiLCJpbml0aWFsU2VsZWN0ZWRJbmRleCIsInNlbGVjdGVkT3B0aW9uVGV4dCIsInRleHQiLCJidXR0b24iLCJzZWxlY3RNZW51U3RhdHVzIiwic2VsZWN0TWVudUljb24iLCJpdGVtIiwibGluayIsIm1lbnVPcHRpb25zIiwiY2hpbGROb2RlcyIsIm9wZW5lZE1lbnUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QVNDLFFBQVQsQ0FBa0JOLGlCQUFsQixPQUEwQyxHQUExQyxHQUFnREcsRUFBRUUsTUFBbEQsR0FBMkRGLEVBQUVFLE1BQUYsQ0FBU3hELFVBQW5GO0FBQUEsaUJBQ00rSSxhQUFhN0osU0FBUzZHLGFBQVQsQ0FBdUIsTUFBS3ZCLE9BQU9HLDJCQUFaLEdBQTBDLEtBQTFDLEdBQWtESCxPQUFPTyxxQkFBaEYsQ0FEbkI7O0FBR0EsaUJBQUcsQ0FBQ2xHLE1BQU1xQyxRQUFOLENBQWVzSCxNQUFmLEVBQXVCaEUsT0FBT0UsdUJBQTlCLENBQUQsSUFBMkRxRSxVQUE5RCxFQUF5RTtBQUNyRWxLLHVCQUFNc0QsWUFBTixDQUFtQjRHLFVBQW5CLEVBQStCLE1BQS9CO0FBQ0g7QUFDSixVQVJEO0FBU0g7QUFDSjs7U0FFNEIxSixJLEdBQXBCMkksZ0I7U0FBdUN4RCxNLEdBQWJhLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIiwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ01ESmpNbUZqWkRBeVltVTJPR0U1T0ROak5tUWlMQ0ozWldKd1lXTnJPaTh2THk0dlF6b3ZVSEp2YW1WamRITXZVSEpwZG1GMFpTOVhWME5JTDFSaGMyc3hMM055WXk5cWN5OWhjSEF1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2UXpvdlVISnZhbVZqZEhNdlVISnBkbUYwWlM5WFYwTklMMVJoYzJzeEwzTnlZeTlxY3k5dGIyUjFiR1Z6TDNWMGFXeHpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMME02TDFCeWIycGxZM1J6TDFCeWFYWmhkR1V2VjFkRFNDOVVZWE5yTVM5emNtTXZhbk12Ylc5a2RXeGxjeTlqZFhOMGIyMURhR1ZqYTJKdmVDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOURPaTlRY205cVpXTjBjeTlRY21sMllYUmxMMWRYUTBndlZHRnphekV2YzNKakwycHpMMjF2WkhWc1pYTXZZM1Z6ZEc5dFUyVnNaV04wTG1weklsMHNJbTVoYldWeklqcGJJblYwYVd4eklpd2lZM1Z6ZEc5dFEyaGxZMnRpYjNnaUxDSmpkWE4wYjIxVFpXeGxZM1FpTENKeVpXRmtlU0lzSW1adUlpd2laRzlqZFcxbGJuUWlMQ0p5WldGa2VWTjBZWFJsSWl3aVlXUmtSWFpsYm5STWFYTjBaVzVsY2lJc0ltbHVhWFFpTENKbWIzSkZZV05vSWl3aVlYSnlZWGtpTENKallXeHNZbUZqYXlJc0luTmpiM0JsSWl3aWFTSXNJbXhsYm1kMGFDSXNJbU5oYkd3aUxDSnBibk5sY25SQlpuUmxjaUlzSW1Wc0lpd2ljbVZtWlhKbGJtTmxUbTlrWlNJc0luQmhjbVZ1ZEU1dlpHVWlMQ0pwYm5ObGNuUkNaV1p2Y21VaUxDSnVaWGgwVTJsaWJHbHVaeUlzSW1Ga1pFTnNZWE56SWl3aVkyeGhjM05PWVcxbElpd2lZMnhoYzNOTWFYTjBJaXdpWVdSa0lpd2ljbVZ0YjNabFEyeGhjM01pTENKeVpXMXZkbVVpTENKMGIyZG5iR1ZEYkdGemN5SXNJblJ2WjJkc1pTSXNJbU5zWVhOelpYTWlMQ0p6Y0d4cGRDSXNJbVY0YVhOMGFXNW5TVzVrWlhnaUxDSnBibVJsZUU5bUlpd2ljM0JzYVdObElpd2ljSFZ6YUNJc0ltcHZhVzRpTENKb1lYTkRiR0Z6Y3lJc0ltTnZiblJoYVc1eklpd2lVbVZuUlhod0lpd2lkR1Z6ZENJc0luZHlZWEJVWVdjaUxDSjBiMWR5WVhBaUxDSjNjbUZ3Y0dWeUlpd2lZM0psWVhSbFJXeGxiV1Z1ZENJc0ltRndjR1Z1WkVOb2FXeGtJaXdpWVdSa1JYWmxiblFpTENKbGJHVnRaVzUwSWl3aVpYWmxiblJPWVcxbElpd2laWFpsYm5SSVlXNWtiR1Z5SWl3aVpYWmxiblJEWVhCMGRYSmxJaXdpYjJ4a1JYWmxiblJPWVcxbElpd2lkWE5sUTJGd2RIVnlaU0lzSW1GMGRHRmphRVYyWlc1MElpd2lkSEpwWjJkbGNrVjJaVzUwSWl3aVpYWmxiblJVZVhCbElpd2laWFpsYm5RaUxDSmpjbVZoZEdWRmRtVnVkQ0lzSW1sdWFYUkZkbVZ1ZENJc0ltUnBjM0JoZEdOb1JYWmxiblFpTENKamNtVmhkR1ZGZG1WdWRFOWlhbVZqZENJc0ltWnBjbVZGZG1WdWRDSXNJbWx6Vkhsd1pVOW1JaXdpZEhsd1pTSXNJbTlpYWlJc0ltTnNZWE1pTENKUFltcGxZM1FpTENKd2NtOTBiM1I1Y0dVaUxDSjBiMU4wY21sdVp5SXNJbk5zYVdObElpd2lkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVWlMQ0oxYm1SbFptbHVaV1FpTENKamFHVmphMmx1WnlJc0ltVWlMQ0pzWVdKbGJDSXNJblJoY21kbGRDSXNJbTV2WkdWT1lXMWxJaXdpWTJobFkydGliM2dpTENKd2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5JaXdpWTJobFkydGxaQ0lzSW5CeVpYWmxiblJFWldaaGRXeDBJaXdpYUdGdVpHeGxTMlY1Y3lJc0ltdGxlVU52WkdVaUxDSnBibWwwUTJobFkydGliM2hsY3lJc0ltTm9aV05yWW05NFpYTWlMQ0p4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNJaXdpYVc1a1pYZ2lMQ0oyWVd4MVpTSXNJblJvYVhORGFHVmphMkp2ZUNJc0luUm9hWE5NWVdKbGJDSXNJbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeUlzSW1OdmJtWnBaeUlzSW5ObGJHVmpkRWhwWkdSbGJrTnNZWE56SWl3aVkzVnpkRzl0VTJWc1pXTjBRblYwZEc5dVEyeGhjM01pTENKamRYTjBiMjFUWld4bFkzUkNkWFIwYjI1UGNHVnVRMnhoYzNNaUxDSmpkWE4wYjIxVFpXeGxZM1JUZEdGMGRYTkRiR0Z6Y3lJc0ltTjFjM1J2YlZObGJHVmpkRWxqYjI1RGJHRnpjeUlzSW1OMWMzUnZiVk5sYkdWamRGSnZiR1YwWlhoMFEyeGhjM01pTENKamRYTjBiMjFUWld4bFkzUk5aVzUxUTJ4aGMzTWlMQ0pqZFhOMGIyMVRaV3hsWTNSTlpXNTFTR2xrWkdWdVEyeGhjM01pTENKamRYTjBiMjFUWld4bFkzUk5aVzUxU1hSbGJTSXNJbU4xYzNSdmJWTmxiR1ZqZEUxbGJuVkpkR1Z0VTJWc1pXTjBaV1FpTENKamRYTjBiMjFUWld4bFkzUk5aVzUxU1hSbGJVMWhjbXRsWkNJc0luSnZiR1ZVWlhoMElpd2ljMlYwUTI5dVptbG5JaXdpWTNWemRHOXRRMjl1Wm1sbklpd2libVYzUTI5dVptbG5JaXdpYTJWNUlpd2lhR0Z6VDNkdVVISnZjR1Z5ZEhraUxDSmhjM05wWjI0aUxDSnphRzkzVFdWdWRTSXNJbTFsYm5WSlpDSXNJbUYwZEhKcFluVjBaWE1pTENKdFpXNTFRMjl1ZEhKdmJDSXNJbkYxWlhKNVUyVnNaV04wYjNJaUxDSmlkWFIwYjI1SlpDSXNJbk4xWW5OMGNpSXNJbUoxZEhSdmJrTnZiblJ5YjJ3aUxDSnpaV3hsWTNSbFpFbDBaVzBpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0ptYjJOMWN5SXNJbWhwWkdWTlpXNTFJaXdpZEc5bloyeGxUV1Z1ZFNJc0ltUnBjM0JzWVhraUxDSjNhVzVrYjNjaUxDSm5aWFJEYjIxd2RYUmxaRk4wZVd4bElpd2lZM1Z5Y21WdWRGTjBlV3hsSWl3aWMyVnNaV04wUld4bGJXVnVkQ0lzSW5ObGJHVmpkRU52Ym5SeWIyeEpaQ0lzSW5ObGJHVmpkRU52Ym5SeWIyd2lMQ0ppZFhSMGIyNURiMjUwY205c1NXUWlMQ0p6Wld4bFkzUmxaQ0lzSW1KMWRIUnZibE4wWVhSMWN5SXNJblJvYVhORmJHVnRJaXdpZEdWNGRFTnZiblJsYm5RaUxDSnpaV3hsWTNSbFpFbHVaR1Y0SWl3aVkyeHBZMnRNYVc1cklpd2liV0Z5YTB4cGJtc2lMQ0p0WVhKclpXUWlMQ0oxYm0xaGNtdE1hVzVySWl3aVluVjBkRzl1UTJ4cFkyc2lMQ0p0Wlc1MUlpd2lkRzlNYjNkbGNrTmhjMlVpTENKb1lXNWtiR1ZDZFhSMGIyNUxaWGxrYjNkdUlpd2lZM1Z5Y21WdWRGTmxiR1ZqZEdWa1RHa2lMQ0pqYUdsc1pISmxiaUlzSW1oaGJtUnNaVTFsYm5WTFpYbGtiM2R1SWl3aWFXNXBkRU4xYzNSdmJWTmxiR1ZqZENJc0luTmxiR1ZqZEZObGJHVmpkRzl5Y3lJc0luUm9hWE5UWld4bFkzUWlMQ0owYUdselUyVnNaV04wU1dRaUxDSm5aWFJCZEhSeWFXSjFkR1VpTENKcGJtbDBhV0ZzVTJWc1pXTjBaV1JKYm1SbGVDSXNJbk5sYkdWamRHVmtUM0IwYVc5dVZHVjRkQ0lzSW5SbGVIUWlMQ0ppZFhSMGIyNGlMQ0p6Wld4bFkzUk5aVzUxVTNSaGRIVnpJaXdpYzJWc1pXTjBUV1Z1ZFVsamIyNGlMQ0pwZEdWdElpd2liR2x1YXlJc0ltMWxiblZQY0hScGIyNXpJaXdpWTJocGJHUk9iMlJsY3lJc0ltOXdaVzVsWkUxbGJuVWlYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4MVFrRkJaVHRCUVVObU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3T3p0QlEzUkRRVHM3UVVGRlFUczdTMEZCV1VFc1N6czdRVUZEV2pzN1MwRkJXVU1zWXpzN1FVRkRXanM3UzBGQldVTXNXVHM3T3p0QlFVVmFMRlZCUVZORExFdEJRVlFzUTBGQlpVTXNSVUZCWml4RlFVRnRRanRCUVVObUxGTkJRVWxETEZOQlFWTkRMRlZCUVZRc1MwRkJkMElzVTBGQk5VSXNSVUZCZFVNN1FVRkRia05HTzBGQlEwZ3NUVUZHUkN4TlFVVlBPMEZCUTBoRExHdENRVUZUUlN4blFrRkJWQ3hEUVVFd1FpeHJRa0ZCTVVJc1JVRkJPRU5JTEVWQlFUbERPMEZCUTBnN1FVRkRTanM3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzVlVGQlUwa3NTVUZCVkN4SFFVRm5RanRCUVVOYVVDeHZRa0ZCWlU4c1NVRkJaanRCUVVOS08wRkJRMEU3UVVGRFFUdEJRVU5KVGl4clFrRkJZVTBzU1VGQllqdEJRVU5LT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUXpzN1FVRkZSRXdzVDBGQlRVc3NTVUZCVGl4Rk96czdPenM3UVVOb1JFRTdPenM3TzBGQlJVRXNWVUZCVTBNc1QwRkJWQ3hEUVVGcFFrTXNTMEZCYWtJc1JVRkJkMEpETEZGQlFYaENMRVZCUVd0RFF5eExRVUZzUXl4RlFVRjVRenRCUVVOcVF5eFZRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1Vnc1RVRkJUVWtzVFVGQk1VSXNSVUZCYTBORUxFZEJRV3hETEVWQlFYVkRPMEZCUTI1RFJpeHJRa0ZCVTBrc1NVRkJWQ3hEUVVGalNDeExRVUZrTEVWQlFYRkNReXhEUVVGeVFpeEZRVUYzUWtnc1RVRkJUVWNzUTBGQlRpeERRVUY0UWl4RlFVUnRReXhEUVVOQk8wRkJRM1JETzBGQlEwbzdPMEZCUlV3c1ZVRkJVMGNzVjBGQlZDeERRVUZ4UWtNc1JVRkJja0lzUlVGQmVVSkRMR0ZCUVhwQ0xFVkJRWGRETzBGQlEyaERRU3h0UWtGQlkwTXNWVUZCWkN4RFFVRjVRa01zV1VGQmVrSXNRMEZCYzBOSUxFVkJRWFJETEVWQlFUQkRReXhqUVVGalJ5eFhRVUY0UkR0QlFVTklPenRCUVVWTUxGVkJRVk5ETEZGQlFWUXNRMEZCYTBKTUxFVkJRV3hDTEVWQlFYTkNUU3hUUVVGMFFpeEZRVUZwUXp0QlFVTjZRaXhUUVVGSlRpeEhRVUZIVHl4VFFVRlFMRVZCUVd0Q08wRkJRMlJRTEZsQlFVZFBMRk5CUVVnc1EwRkJZVU1zUjBGQllpeERRVUZwUWtZc1UwRkJha0k3UVVGRFNDeE5RVVpFTEUxQlJVODdRVUZEU0U0c1dVRkJSMDBzVTBGQlNDeEpRVUZuUWl4TlFVRk5RU3hUUVVGMFFqdEJRVU5JTzBGQlEwbzdPMEZCUlV3c1ZVRkJVMGNzVjBGQlZDeERRVUZ4UWxRc1JVRkJja0lzUlVGQmVVSk5MRk5CUVhwQ0xFVkJRVzlETzBGQlF6VkNMRk5CUVVsT0xFZEJRVWRQTEZOQlFWQXNSVUZCYTBJN1FVRkRaRkFzV1VGQlIwOHNVMEZCU0N4RFFVRmhSeXhOUVVGaUxFTkJRVzlDU2l4VFFVRndRanRCUVVOSUxFMUJSa1FzVFVGRlR6dEJRVU5JVGl4WlFVRkhUU3hUUVVGSUxFbEJRV2RDTEVkQlFXaENPMEZCUTBnN1FVRkRTanM3UVVGRlRDeFZRVUZUU3l4WFFVRlVMRU5CUVhGQ1dDeEZRVUZ5UWl4RlFVRjVRazBzVTBGQmVrSXNSVUZCYlVNN1FVRkRNMElzVTBGQlNVNHNSMEZCUjA4c1UwRkJVQ3hGUVVGclFqdEJRVU5vUWxBc1dVRkJSMDhzVTBGQlNDeERRVUZoU3l4TlFVRmlMRU5CUVc5Q1RpeFRRVUZ3UWp0QlFVTkVMRTFCUmtRc1RVRkZUenRCUVVOTUxHRkJRVWxQTEZWQlFWVmlMRWRCUVVkTkxGTkJRVWdzUTBGQllWRXNTMEZCWWl4RFFVRnRRaXhIUVVGdVFpeERRVUZrTzBGQlEwRXNZVUZCU1VNc1owSkJRV2RDUml4UlFVRlJSeXhQUVVGU0xFTkJRV2RDVml4VFFVRm9RaXhEUVVGd1FqczdRVUZGUVN4aFFVRkpVeXhwUWtGQmFVSXNRMEZCY2tJc1JVRkRSVVlzVVVGQlVVa3NUVUZCVWl4RFFVRmxSaXhoUVVGbUxFVkJRVGhDTEVOQlFUbENMRVZCUkVZc1MwRkhSVVlzVVVGQlVVc3NTVUZCVWl4RFFVRmhXaXhUUVVGaU96dEJRVVZHVGl4WlFVRkhUU3hUUVVGSUxFZEJRV1ZQTEZGQlFWRk5MRWxCUVZJc1EwRkJZU3hIUVVGaUxFTkJRV1k3UVVGRFJEdEJRVU5LT3p0QlFVVk1MRlZCUVZORExGRkJRVlFzUTBGQmEwSndRaXhGUVVGc1FpeEZRVUZ6UWswc1UwRkJkRUlzUlVGQlowTTdRVUZEZUVJc1UwRkJTVTRzUjBGQlIwOHNVMEZCVUN4RlFVRnBRanRCUVVOaUxHRkJRVWRRTEVkQlFVZFBMRk5CUVVnc1EwRkJZV01zVVVGQllpeERRVUZ6UW1Zc1UwRkJkRUlzUTBGQlNDeEZRVUZ2UXp0QlFVTm9ReXh2UWtGQlR5eEpRVUZRTzBGQlEwZzdRVUZEU2l4TlFVcEVMRTFCUzBrN1FVRkRRU3hoUVVGSExFbEJRVWxuUWl4TlFVRktMRU5CUVZjc1ZVRkJWV2hDTEZOQlFWWXNSMEZCYzBJc1QwRkJha01zUlVGQk1FTXNTVUZCTVVNc1JVRkJaMFJwUWl4SlFVRm9SQ3hEUVVGeFJIWkNMRWRCUVVkTkxGTkJRWGhFTEVOQlFVZ3NSVUZCYzBVN1FVRkRiRVVzYjBKQlFVOHNTVUZCVUR0QlFVTklPMEZCUTBvN08wRkJSVVFzV1VGQlR5eExRVUZRTzBGQlEwZzdPMEZCUlV3c1ZVRkJVMnRDTEU5QlFWUXNRMEZCYTBKRExFMUJRV3hDTEVWQlFUQkNReXhQUVVFeFFpeEZRVUZ0UXp0QlFVTXpRa0VzWlVGQlZVRXNWMEZCVjNSRExGTkJRVk4xUXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFYSkNPMEZCUTBFc1UwRkJTVVlzVDBGQlQzSkNMRmRCUVZnc1JVRkJkMEk3UVVGRGNFSnhRaXhuUWtGQlQzWkNMRlZCUVZBc1EwRkJhMEpETEZsQlFXeENMRU5CUVN0Q2RVSXNUMEZCTDBJc1JVRkJkME5FTEU5QlFVOXlRaXhYUVVFdlF6dEJRVU5JTEUxQlJrUXNUVUZGVHp0QlFVTkljVUlzWjBKQlFVOTJRaXhWUVVGUUxFTkJRV3RDTUVJc1YwRkJiRUlzUTBGQk9FSkdMRTlCUVRsQ08wRkJRMGc3UVVGRFJDeFpRVUZQUVN4UlFVRlJSU3hYUVVGU0xFTkJRVzlDU0N4TlFVRndRaXhEUVVGUU8wRkJRMGc3TzBGQlJVd3NWVUZCVTBrc1VVRkJWQ3hEUVVGclFrTXNUMEZCYkVJc1JVRkJNa0pETEZOQlFUTkNMRVZCUVhORFF5eFpRVUYwUXl4RlFVRnZSRU1zV1VGQmNFUXNSVUZCYTBVN1FVRkRNVVFzVTBGQlNVTXNaVUZCWlN4UFFVRlBTQ3hUUVVFeFFqdEJRVUZCTEZOQlEwbEpMR0ZCUVdGR0xHVkJRV1ZCTEZsQlFXWXNSMEZCT0VJc1MwRkVMME03TzBGQlNVRXNVMEZCU1Vnc1VVRkJVWGhETEdkQ1FVRmFMRVZCUVRoQ08wRkJRekZDZDBNc2FVSkJRVkY0UXl4blFrRkJVaXhEUVVGNVFubERMRk5CUVhwQ0xFVkJRVzlEUXl4WlFVRndReXhGUVVGclJFY3NWVUZCYkVRN1FVRkRTQ3hOUVVaRUxFMUJSVThzU1VGQlNVd3NVVUZCVVUwc1YwRkJXaXhGUVVGNVFqdEJRVU0xUWs0c2FVSkJRVkZOTEZkQlFWSXNRMEZCYjBKR0xGbEJRWEJDTEVWQlFXdERSaXhaUVVGc1F6dEJRVU5JTzBGQlEwbzdPMEZCUlV3c1ZVRkJVMHNzV1VGQlZDeERRVUZ6UWxBc1QwRkJkRUlzUlVGQkswSlJMRk5CUVM5Q0xFVkJRWGxETzBGQlEycERMRk5CUVVjc2FVSkJRV2xDYkVRc1VVRkJjRUlzUlVGQk5rSTdRVUZEZWtJc1lVRkJUVzFFTEZGQlFWRnVSQ3hUUVVGVGIwUXNWMEZCVkN4RFFVRnhRaXhaUVVGeVFpeERRVUZrTzBGQlEwRkVMR1ZCUVUxRkxGTkJRVTRzUTBGQlowSklMRk5CUVdoQ0xFVkJRVEpDTEV0QlFUTkNMRVZCUVd0RExFbEJRV3hETzBGQlEwRlNMR2xDUVVGUldTeGhRVUZTTEVOQlFYTkNTQ3hMUVVGMFFqdEJRVU5JTEUxQlNrUXNUVUZMU1R0QlFVTkJMR0ZCUVUxQkxGTkJRVkZ1UkN4VFFVRlRkVVFzYVVKQlFWUXNSVUZCWkR0QlFVTkJTaXhuUWtGQlRVUXNVMEZCVGl4SFFVRnJRa0VzVTBGQmJFSTdRVUZEUVZJc2FVSkJRVkZqTEZOQlFWSXNRMEZCYTBJc1QwRkJTMHdzVDBGQlRVUXNVMEZCTjBJc1JVRkJkME5ETEUxQlFYaERPMEZCUTBnN1FVRkRTanM3UVVGRlRDeFZRVUZUVFN4UlFVRlVMRU5CUVd0Q1F5eEpRVUZzUWl4RlFVRjNRa01zUjBGQmVFSXNSVUZCTmtJN1FVRkRja0lzVTBGQlNVTXNUMEZCVDBNc1QwRkJUME1zVTBGQlVDeERRVUZwUWtNc1VVRkJha0lzUTBGQk1FSnlSQ3hKUVVFeFFpeERRVUVyUW1sRUxFZEJRUzlDTEVWQlFXOURTeXhMUVVGd1F5eERRVUV3UXl4RFFVRXhReXhGUVVFMlF5eERRVUZETEVOQlFUbERMRVZCUVdsRVF5eHBRa0ZCYWtRc1JVRkJXRHRCUVVOQkxGbEJRVTlPTEZGQlFWRlBMRk5CUVZJc1NVRkJjVUpRTEZGQlFWRXNTVUZCTjBJc1NVRkJjVU5ETEZOQlFWTkdMRXRCUVV0UExHbENRVUZNTEVWQlFYSkVPMEZCUTBnN08xTkJSVWMzUkN4UExFZEJRVUZCTEU4N1UwRkJVMDhzVnl4SFFVRkJRU3hYTzFOQlFXRk5MRkVzUjBGQlFVRXNVVHRUUVVGVlNTeFhMRWRCUVVGQkxGYzdVMEZCWVVVc1Z5eEhRVUZCUVN4WE8xTkJRV0ZUTEZFc1IwRkJRVUVzVVR0VFFVRlZTU3hQTEVkQlFVRkJMRTg3VTBGQlUwc3NVU3hIUVVGQlFTeFJPMU5CUVZWUkxGa3NSMEZCUVVFc1dUdFRRVUZqVVN4UkxFZEJRVUZCTEZFN096czdPenRCUTI1SE4wYzdPenM3T3pzN1FVRkZRVHM3UzBGQldUbEVMRXM3T3pzN1FVRkZXaXhWUVVGVGQwVXNVVUZCVkN4RFFVRnJRa01zUTBGQmJFSXNSVUZCYjBJN1FVRkRhRUlzVTBGQlRVTXNVVUZCVVVRc1JVRkJSVVVzVFVGQlJpeERRVUZUUXl4UlFVRlVMRU5CUVd0Q1RpeHBRa0ZCYkVJc1QwRkJNRU1zVDBGQk1VTXNSMEZCYjBSSExFVkJRVVZGTEUxQlFYUkVMRWRCUVN0RVJpeEZRVUZGUlN4TlFVRkdMRU5CUVZONFJDeFZRVUYwUmp0QlFVRkJMRk5CUTAwd1JDeFhRVUZYU0N4TlFVRk5TU3h6UWtGRWRrSTdPMEZCUjBFc1UwRkJSeXhEUVVGRFJDeFRRVUZUUlN4UFFVRmlMRVZCUVhGQ08wRkJRMnBDUml4clFrRkJVMFVzVDBGQlZDeEhRVUZ0UWl4SlFVRnVRanRCUVVOSUxFMUJSa1FzVFVGSFNUdEJRVU5CUml4clFrRkJVMFVzVDBGQlZDeEhRVUZ0UWl4TFFVRnVRanRCUVVOSU96dEJRVVZFVGl4UFFVRkZUeXhqUVVGR08wRkJRMGc3TzBGQlJVUXNWVUZCVTBNc1ZVRkJWQ3hEUVVGdlFsSXNRMEZCY0VJc1JVRkJjMEk3UVVGRGJFSXNVMEZCUjBFc1JVRkJSVk1zVDBGQlJpeExRVUZqTEVWQlFXUXNTVUZCYjBKVUxFVkJRVVZUTEU5QlFVWXNTMEZCWXl4RlFVRnlReXhGUVVGM1F6dEJRVU53UXl4aFFVRkhWQ3hGUVVGRlJTeE5RVUZHTEVOQlFWTkpMRTlCUVZvc1JVRkJiMEk3UVVGRGFrSk9MR1ZCUVVWRkxFMUJRVVlzUTBGQlUwa3NUMEZCVkN4SFFVRnRRaXhMUVVGdVFqdEJRVU5HTEZWQlJrUXNUVUZIU1R0QlFVTkJUaXhsUVVGRlJTeE5RVUZHTEVOQlFWTkpMRTlCUVZRc1IwRkJiVUlzU1VGQmJrSTdRVUZEU0R0QlFVTktPMEZCUTBST0xFOUJRVVZQTEdOQlFVWTdRVUZEU0RzN1FVRkZSQ3hWUVVGVFJ5eGpRVUZVTEVOQlFYZENjRU1zVDBGQmVFSXNSVUZCWjBNN1FVRkROVUlzVTBGQlNYRkRMR0ZCUVdGeVF5eFhRVUZYTVVNc1UwRkJVMmRHTEdkQ1FVRlVMRU5CUVRCQ2RFTXNUMEZCTVVJc1EwRkJXQ3hIUVVGblJERkRMRk5CUVZOblJpeG5Ra0ZCVkN4RFFVRXdRblJETEU5QlFURkNMRU5CUVdoRUxFZEJRWEZHTVVNc1UwRkJVMmRHTEdkQ1FVRlVMRU5CUVRCQ0xIZENRVUV4UWl4RFFVRjBSenM3UVVGRlFYSkdMRmRCUVUxVExFOUJRVTRzUTBGQll6SkZMRlZCUVdRc1JVRkJNRUlzVlVGQlZVVXNTMEZCVml4RlFVRnBRa01zUzBGQmFrSXNSVUZCZDBJN1FVRkRPVU1zWVVGQlNVTXNaVUZCWlVRc1MwRkJia0k3UVVGQlFTeGhRVU5KUlN4WlFVRlpSaXhOUVVGTlJ5eHJRa0ZFZEVJN08wRkJSMEV4Uml4bFFVRk5PRU1zVVVGQlRpeERRVUZsTUVNc1dVRkJaaXhGUVVFMlFpeFRRVUUzUWl4RlFVRjNRMUFzVlVGQmVFTTdRVUZEUVdwR0xHVkJRVTA0UXl4UlFVRk9MRU5CUVdVeVF5eFRRVUZtTEVWQlFUQkNMRTlCUVRGQ0xFVkJRVzFEYWtJc1VVRkJia003UVVGRFNDeE5RVTVFTzBGQlQwZzdPMU5CUlhsQ2FFVXNTU3hIUVVGc1FqSkZMR003T3pzN096dEJRekZEVWpzN096czdPenRCUVVWQk96dExRVUZaYmtZc1N6czdPenRCUVVWYUxFdEJRVTB5Uml4VFFVRlRPMEZCUTFoRExIZENRVUZ0UWl4eFFrRkVVanRCUVVWWVF5dzRRa0ZCZVVJc2MwSkJSbVE3UVVGSFdFTXNhME5CUVRaQ0xESkNRVWhzUWp0QlFVbFlReXc0UWtGQmVVSXNPRUpCU21RN1FVRkxXRU1zTkVKQlFYVkNMRFJDUVV4YU8wRkJUVmhETEdkRFFVRXlRaXhuUTBGT2FFSTdRVUZQV0VNc05FSkJRWFZDTEc5Q1FWQmFPMEZCVVZoRExHdERRVUUyUWl3eVFrRlNiRUk3UVVGVFdFTXNNa0pCUVhOQ0xEQkNRVlJZTzBGQlZWaERMRzFEUVVFNFFpeHRRMEZXYmtJN1FVRlhXRU1zYVVOQlFUUkNMSE5EUVZocVFqdEJRVmxZUXl4bFFVRlZPMEZCV2tNc1JVRkJaanM3UVVGbFFTeFZRVUZUUXl4VFFVRlVMRU5CUVcxQ1F5eFpRVUZ1UWl4RlFVRm5RenRCUVVNMVFpeFRRVUZOUXl4WlFVRlpMRVZCUVd4Q08wRkJRMEVzVlVGQlNTeEpRVUZKUXl4SFFVRlNMRWxCUVdWR0xGbEJRV1lzUlVGQk5FSTdRVUZEZUVJc1lVRkJSMlFzVDBGQlQybENMR05CUVZBc1EwRkJjMEpFTEVkQlFYUkNMRU5CUVVnc1JVRkJPRUk3UVVGRE1VSkVMSFZDUVVGVlF5eEhRVUZXTEVsQlFXbENSaXhoUVVGaFJTeEhRVUZpTEVOQlFXcENPMEZCUTBnN1FVRkRTanRCUVVORWVrTXNXVUZCVHpKRExFMUJRVkFzUTBGQlkyeENMRTFCUVdRc1JVRkJjMEpsTEZOQlFYUkNPMEZCUTBnN08wRkJSVVFzVlVGQlUwa3NVVUZCVkN4RFFVRnJRbkpETEVOQlFXeENMRVZCUVc5Q08wRkJRMmhDTEZOQlFVMXpReXhUUVVGVGRFTXNSVUZCUlVVc1RVRkJSaXhEUVVGVGNVTXNWVUZCVkN4RFFVRnZRaXhKUVVGd1FpeEZRVUV3UW5wQ0xFdEJRWHBETzBGQlFVRXNVMEZEVFRCQ0xHTkJRV00xUnl4VFFVRlROa2NzWVVGQlZDeERRVUYxUWl4TlFVRk5TQ3hOUVVFM1FpeERRVVJ3UWp0QlFVRkJMRk5CUlUxSkxGZEJRVmRLTEU5QlFVOUxMRTFCUVZBc1EwRkJZeXhEUVVGa0xFVkJRV2xDVEN4UFFVRlBPVVVzVDBGQlVDeERRVUZsTEUxQlFXWXNRMEZCYWtJc1NVRkJNa01zVVVGR05VUTdRVUZCUVN4VFFVZE5iMFlzWjBKQlFXZENhRWdzVTBGQlV6WkhMR0ZCUVZRc1EwRkJkVUlzVFVGQlRVTXNVVUZCTjBJc1EwRklkRUk3UVVGQlFTeFRRVWxOUnl4bFFVRmxha2dzVTBGQlV6WkhMR0ZCUVZRc1EwRkJkVUlzVFVGQlRVZ3NUVUZCVGl4SFFVRmxMRTFCUVdZc1IwRkJkMEp3UWl4UFFVRlBWU3cwUWtGQkwwSXNSMEZCT0VRc1NVRkJja1lzUTBGS2NrSTdPMEZCVFVGeVJ5eFhRVUZOTUVJc1YwRkJUaXhEUVVGclFuVkdMRmRCUVd4Q0xFVkJRU3RDZEVJc1QwRkJUMUVzTWtKQlFYUkRPMEZCUTBGakxHbENRVUZaVFN4WlFVRmFMRU5CUVhsQ0xHRkJRWHBDTEVWQlFYZERMRXRCUVhoRE96dEJRVVZCUkN4clFrRkJZVVVzUzBGQllqdEJRVU5CZUVnc1YwRkJUWE5DTEZGQlFVNHNRMEZCWlN0R0xHRkJRV1lzUlVGQk9FSXhRaXhQUVVGUFJ5d3lRa0ZCY2tNN1FVRkRTRHM3UVVGRlJDeFZRVUZUTWtJc1VVRkJWQ3hEUVVGclFtaEVMRU5CUVd4Q0xFVkJRVzlDTzBGQlEyaENMRk5CUVUxelF5eFRRVUZUZEVNc1JVRkJSVVVzVFVGQlJpeERRVUZUY1VNc1ZVRkJWQ3hEUVVGdlFpeEpRVUZ3UWl4RlFVRXdRbnBDTEV0QlFYcERPMEZCUVVFc1UwRkRUVEJDTEdOQlFXTTFSeXhUUVVGVE5rY3NZVUZCVkN4RFFVRjFRaXhOUVVGTlNDeE5RVUUzUWl4RFFVUndRanRCUVVGQkxGTkJSVTFKTEZkQlFWZEtMRTlCUVU5TExFMUJRVkFzUTBGQll5eERRVUZrTEVWQlFXbENUQ3hQUVVGUE9VVXNUMEZCVUN4RFFVRmxMRTFCUVdZc1EwRkJha0lzU1VGQk1rTXNVVUZHTlVRN1FVRkJRU3hUUVVkTmIwWXNaMEpCUVdkQ2FFZ3NVMEZCVXpaSExHRkJRVlFzUTBGQmRVSXNUVUZCVFVNc1VVRkJOMElzUTBGSWRFSTdPMEZCUzBGdVNDeFhRVUZOTUVJc1YwRkJUaXhEUVVGclFqSkdMR0ZCUVd4Q0xFVkJRV2xETVVJc1QwRkJUMGNzTWtKQlFYaERPMEZCUTBFNVJpeFhRVUZOYzBJc1VVRkJUaXhEUVVGbE1rWXNWMEZCWml4RlFVRTBRblJDTEU5QlFVOVJMREpDUVVGdVF6dEJRVU5CWXl4cFFrRkJXVTBzV1VGQldpeERRVUY1UWl4aFFVRjZRaXhGUVVGM1F5eEpRVUY0UXp0QlFVTklPenRCUVVWRUxGVkJRVk5ITEZWQlFWUXNRMEZCYjBKcVJDeERRVUZ3UWl4RlFVRnpRanRCUVVOc1FpeFRRVUZOYzBNc1UwRkJVM1JETEVWQlFVVkZMRTFCUVVZc1EwRkJVM0ZETEZWQlFWUXNRMEZCYjBJc1NVRkJjRUlzUlVGQk1FSjZRaXhMUVVGNlF6dEJRVUZCTEZOQlEwMHdRaXhqUVVGak5VY3NVMEZCVXpaSExHRkJRVlFzUTBGQmRVSXNUVUZCVFVnc1RVRkJOMElzUTBGRWNFSTdRVUZCUVN4VFFVVk5XU3hWUVVGVkxFTkJRVU5ETEU5QlFVOURMR2RDUVVGUUxFZEJRVEJDUVN4cFFrRkJhVUphTEZkQlFXcENMRVZCUVRoQ0xFbEJRVGxDTEVOQlFURkNMRWRCUVdkRlFTeFpRVUZaWVN4WlFVRTNSU3hGUVVFeVJrZ3NUMEZHTTBjN08wRkJTVUVzVTBGQlIwRXNXVUZCV1N4TlFVRm1MRVZCUVhOQ08wRkJRMnhDTTBnc1pVRkJUWE5FTEZsQlFVNHNRMEZCYlVJeVJDeFhRVUZ1UWl4RlFVRm5ReXhOUVVGb1F6dEJRVU5JTEUxQlJrUXNUVUZIU1R0QlFVTkJha2dzWlVGQlRYTkVMRmxCUVU0c1EwRkJiVUl5UkN4WFFVRnVRaXhGUVVGblF5eE5RVUZvUXp0QlFVTklPMEZCUTBvN08wRkJSVVFzVlVGQlUyTXNZVUZCVkN4RFFVRjFRblJFTEVOQlFYWkNMRVZCUVhsQ08wRkJRM0pDTEZOQlFVMTNReXhqUVVGamVFTXNSVUZCUlVVc1RVRkJSaXhEUVVGVGVFUXNWVUZCVkN4RFFVRnZRa0VzVlVGQmVFTTdRVUZCUVN4VFFVTk5ORVlzVTBGQlUwVXNXVUZCV1VRc1ZVRkJXaXhEUVVGMVFpeEpRVUYyUWl4RlFVRTJRbnBDTEV0QlJEVkRPMEZCUVVFc1UwRkZUWGxETEd0Q1FVRnJRbXBDTEU5QlFVOUxMRTFCUVZBc1EwRkJZeXhEUVVGa0xFVkJRV2xDVEN4UFFVRlBPVVVzVDBGQlVDeERRVUZsTEUxQlFXWXNRMEZCYWtJc1EwRkdlRUk3UVVGQlFTeFRRVWROWjBjc1owSkJRV2RDTlVnc1UwRkJVelpITEdGQlFWUXNRMEZCZFVJc1RVRkJTV01zWlVGQk0wSXNRMEZJZEVJN1FVRkJRU3hUUVVsTlJTeHJRa0ZCYTBKdVFpeFBRVUZQU3l4TlFVRlFMRU5CUVdNc1EwRkJaQ3hGUVVGcFFrd3NUMEZCVHpsRkxFOUJRVkFzUTBGQlpTeE5RVUZtTEVOQlFXcENMRWxCUVRKRExGRkJTbTVGTzBGQlFVRXNVMEZMVFd0SExGZEJRVmM1U0N4VFFVRlROa2NzWVVGQlZDeERRVUYxUWl4TlFVRkpTQ3hOUVVGS0xFZEJRV0VzVFVGQllpeEhRVUZ6UW5CQ0xFOUJRVTlWTERSQ1FVRndSQ3hEUVV4cVFqdEJRVUZCTEZOQlRVMHJRaXhsUVVGbEwwZ3NVMEZCVXpaSExHRkJRVlFzUTBGQmRVSXNUVUZCVFdkQ0xHVkJRVTRzUjBGQmQwSXNTVUZCZUVJc1IwRkJLMEoyUXl4UFFVRlBTU3gxUWtGQk4wUXNRMEZPY2tJN1FVRkJRU3hUUVU5TmMwTXNWMEZCVnpWRUxFVkJRVVZGTEUxQlFVWXNRMEZCVTNoRUxGVkJVREZDTzBGQlFVRXNVMEZSVFcxRkxGRkJRVkZpTEVWQlFVVkZMRTFCUVVZc1EwRkJVM0ZETEZWQlFWUXNRMEZCYjBJc1dVRkJjRUlzUlVGQmEwTjZRaXhMUVZKb1JEczdRVUZWUVhaR0xGZEJRVTB3UWl4WFFVRk9MRU5CUVd0Q2VVY3NVVUZCYkVJc1JVRkJORUo0UXl4UFFVRlBWU3cwUWtGQmJrTTdRVUZEUVhKSExGZEJRVTF6UWl4UlFVRk9MRU5CUVdVclJ5eFJRVUZtTEVWQlFYbENNVU1zVDBGQlQxVXNORUpCUVdoRE8wRkJRMEU0UWl4alFVRlRXaXhaUVVGVUxFTkJRWE5DTEdWQlFYUkNMRVZCUVhWRExFdEJRWFpETzBGQlEwRmpMR05CUVZOa0xGbEJRVlFzUTBGQmMwSXNaVUZCZEVJc1JVRkJkVU1zU1VGQmRrTTdPMEZCUlVGaExHdENRVUZoUlN4WFFVRmlMRWRCUVRKQ04wUXNSVUZCUlVVc1RVRkJSaXhEUVVGVE1rUXNWMEZCY0VNN08wRkJSVUYwU1N4WFFVRk5jMFFzV1VGQlRpeERRVUZ0UWpKRUxGZEJRVzVDTEVWQlFXZERMRTFCUVdoRE96dEJRVVZCWjBJc2JVSkJRV05OTEdGQlFXUXNSMEZCT0VKcVJDeExRVUU1UWp0QlFVTklPenRCUVVWRUxGVkJRVk5yUkN4VFFVRlVMRU5CUVcxQ0wwUXNRMEZCYmtJc1JVRkJjVUk3UVVGRGFrSjZSU3hYUVVGTmMwUXNXVUZCVGl4RFFVRnRRbTFDTEVWQlFVVkZMRTFCUVhKQ0xFVkJRVFpDTEZGQlFUZENPMEZCUTBGR0xFOUJRVVZQTEdOQlFVWTdRVUZEU0RzN1FVRkZSQ3hWUVVGVGVVUXNVVUZCVkN4RFFVRnJRbWhGTEVOQlFXeENMRVZCUVc5Q08wRkJRMmhDTEZOQlFVMTNReXhqUVVGamVFTXNSVUZCUlVVc1RVRkJSaXhEUVVGVGVFUXNWVUZCVkN4RFFVRnZRa0VzVlVGQmVFTTdRVUZCUVN4VFFVTk5ORVlzVTBGQlUwVXNXVUZCV1VRc1ZVRkJXaXhEUVVGMVFpeEpRVUYyUWl4RlFVRTJRbnBDTEV0QlJEVkRPMEZCUVVFc1UwRkZUVzFFTEZOQlFWTnlTU3hUUVVGVE5rY3NZVUZCVkN4RFFVRjFRaXhOUVVGSlNDeE5RVUZLTEVkQlFXRXNUVUZCWWl4SFFVRnpRbkJDTEU5QlFVOVhMREJDUVVGd1JDeERRVVptTzBGQlFVRXNVMEZIVFN0Q0xGZEJRVmMxUkN4RlFVRkZSU3hOUVVGR0xFTkJRVk40UkN4VlFVZ3hRanM3UVVGTFFTeFRRVUZIZFVnc1RVRkJTQ3hGUVVGVk8wRkJRMDR4U1N4bFFVRk5NRUlzVjBGQlRpeERRVUZyUW1kSUxFMUJRV3hDTEVWQlFUQkNMME1zVDBGQlQxY3NNRUpCUVdwRE8wRkJRMGc3UVVGRFJIUkhMRmRCUVUxelFpeFJRVUZPTEVOQlFXVXJSeXhSUVVGbUxFVkJRWGxDTVVNc1QwRkJUMWNzTUVKQlFXaERPMEZCUTBFM1FpeFBRVUZGVHl4alFVRkdPMEZCUTBnN08wRkJSVVFzVlVGQlV6SkVMRlZCUVZRc1EwRkJiMEpzUlN4RFFVRndRaXhGUVVGelFqdEJRVU5zUWl4VFFVRk5ORVFzVjBGQlZ6VkVMRVZCUVVWRkxFMUJRVVlzUTBGQlUzaEVMRlZCUVRGQ096dEJRVVZCTEZOQlFVZHJTQ3hSUVVGSUxFVkJRVms3UVVGRFVuSkpMR1ZCUVUwd1FpeFhRVUZPTEVOQlFXdENNa2NzVVVGQmJFSXNSVUZCTkVJeFF5eFBRVUZQVnl3d1FrRkJia003UVVGRFNEdEJRVU5FTjBJc1QwRkJSVThzWTBGQlJqdEJRVU5JT3p0QlFVVkVMRlZCUVZNMFJDeFhRVUZVTEVOQlFYRkNia1VzUTBGQmNrSXNSVUZCZFVJN1FVRkRia0lzVTBGQlRXOUZMRTlCUVU5d1JTeEZRVUZGUlN4TlFVRkdMRU5CUVZORExGRkJRVlFzUTBGQmEwSnJSU3hYUVVGc1FpeFBRVUZ2UXl4SFFVRndReXhIUVVFd1EzSkZMRVZCUVVWRkxFMUJRVVlzUTBGQlUyVXNhMEpCUVc1RUxFZEJRWGRGYWtJc1JVRkJSVVVzVFVGQlJpeERRVUZUZUVRc1ZVRkJWQ3hEUVVGdlFuVkZMR3RDUVVGNlJ6czdRVUZGUVRGR0xGZEJRVTF6UkN4WlFVRk9MRU5CUVcxQ2RVWXNTVUZCYmtJc1JVRkJlVUlzVVVGQmVrSTdRVUZEUVhCRkxFOUJRVVZQTEdOQlFVWTdRVUZEU0RzN1FVRkZSQ3hWUVVGVEswUXNiVUpCUVZRc1EwRkJOa0owUlN4RFFVRTNRaXhGUVVFclFqdEJRVU16UWl4VFFVRk5NRU1zVjBGQlZ6RkRMRVZCUVVWRkxFMUJRVVlzUTBGQlUzRkRMRlZCUVZRc1EwRkJiMElzU1VGQmNFSXNSVUZCTUVKNlFpeExRVUV6UXp0QlFVRkJMRk5CUTAwNFFpeG5Ra0ZCWjBKb1NDeFRRVUZUTmtjc1lVRkJWQ3hEUVVGMVFpeE5RVUZOUXl4UlFVRTNRaXhEUVVSMFFqdEJRVUZCTEZOQlJVMWhMR3RDUVVGclFtSXNVMEZCVTBNc1RVRkJWQ3hEUVVGblFpeERRVUZvUWl4RlFVRnRRa1FzVTBGQlUyeEdMRTlCUVZRc1EwRkJhVUlzVVVGQmFrSXNRMEZCYmtJc1EwRkdlRUk3UVVGQlFTeFRRVWROWjBjc1owSkJRV2RDTlVnc1UwRkJVelpITEdGQlFWUXNRMEZCZFVJc1RVRkJUV01zWlVGQk4wSXNRMEZJZEVJN1FVRkJRU3hUUVVsTmFrSXNVMEZCVTJsQ0xHdENRVUZyUWl4TlFVcHFRenRCUVVGQkxGTkJTMDFQTEdkQ1FVRm5RazRzWTBGQlkwMHNZVUZNY0VNN1FVRkJRU3hUUVUxTlV5eHZRa0ZCYjBJelNTeFRRVUZUTmtjc1lVRkJWQ3hEUVVGMVFpeE5RVUZOU0N4TlFVRk9MRWRCUVdVc2IwSkJRV1lzUjBGQmMwTjNRaXhoUVVGMFF5eEhRVUZ6UkN4SlFVRTNSU3hGUVVGdFJuQklMRlZCVGpkSE96dEJRVkZCTEdGQlFVOXpSQ3hGUVVGRlV5eFBRVUZVTzBGQlEwa3NZMEZCU3l4RlFVRk1PMEZCUTBFc1kwRkJTeXhGUVVGTU8wRkJRMGxzUml4dFFrRkJUWE5FTEZsQlFVNHNRMEZCYlVJclJDeGhRVUZ1UWl4RlFVRnJReXhYUVVGc1F6dEJRVU5CTlVNc1pVRkJSVThzWTBGQlJqdEJRVU5CTzBGQlEwb3NZMEZCU3l4RlFVRk1PMEZCUTBFc1kwRkJTeXhGUVVGTU8wRkJRMGtzYVVKQlFVZG5SU3hyUWtGQmEwSnNSU3h6UWtGQmNrSXNSVUZCTkVNN1FVRkRlRU01UlN4MVFrRkJUWE5FTEZsQlFVNHNRMEZCYlVJd1JpeHJRa0ZCYTBKc1JTeHpRa0ZCYkVJc1EwRkJlVU50UlN4UlFVRjZReXhEUVVGclJDeERRVUZzUkN4RFFVRnVRaXhGUVVGNVJTeFJRVUY2UlR0QlFVTklPMEZCUTBSNFJTeGxRVUZGVHl4alFVRkdPMEZCUTBFN1FVRkRTaXhqUVVGTExFVkJRVXc3UVVGRFFTeGpRVUZMTEVWQlFVdzdRVUZEU1N4cFFrRkJSMmRGTEd0Q1FVRnJRblJFTEd0Q1FVRnlRaXhGUVVGM1F6dEJRVU53UXpGR0xIVkNRVUZOYzBRc1dVRkJUaXhEUVVGdFFqQkdMR3RDUVVGclFuUkVMR3RDUVVGc1FpeERRVUZ4UTNWRUxGRkJRWEpETEVOQlFUaERMRU5CUVRsRExFTkJRVzVDTEVWQlFYRkZMRkZCUVhKRk8wRkJRMGc3UVVGRFJIaEZMR1ZCUVVWUExHTkJRVVk3UVVGRFFUdEJRVzVDVWp0QlFYRkNTRHM3UVVGRlJDeFZRVUZUYTBVc2FVSkJRVlFzUTBGQk1rSjZSU3hEUVVFelFpeEZRVUUyUWp0QlFVTjZRaXhUUVVGTk5FUXNWMEZCVnpWRUxFVkJRVVZGTEUxQlFXNUNPMEZCUVVFc1UwRkRUWEZGTEc5Q1FVRnZRbGdzVTBGQlUyeElMRlZCUkc1RE8wRkJRVUVzVTBGRlRUaEdMR05CUVdNclFpeHJRa0ZCYTBJM1NDeFZRVVowUXp0QlFVRkJMRk5CUjAwMFJpeFRRVUZUUlN4WlFVRlpSQ3hWUVVGYUxFTkJRWFZDTEVsQlFYWkNMRVZCUVRaQ2VrSXNTMEZJTlVNN1FVRkJRU3hUUVVsTk5FSXNWMEZCVjBvc1QwRkJUMHNzVFVGQlVDeERRVUZqTEVOQlFXUXNSVUZCYVVKTUxFOUJRVTg1UlN4UFFVRlFMRU5CUVdVc1RVRkJaaXhEUVVGcVFpeEpRVUV5UXl4UlFVbzFSRHRCUVVGQkxGTkJTMDF2Uml4blFrRkJaMEpvU0N4VFFVRlROa2NzWVVGQlZDeERRVUYxUWl4TlFVRk5ReXhSUVVFM1FpeERRVXgwUWpzN1FVRlBRU3hoUVVGUE1VTXNSVUZCUlZNc1QwRkJWRHRCUVVOSkxHTkJRVXNzUlVGQlREdEJRVU5CTEdOQlFVc3NSVUZCVER0QlFVTkpiRVlzYlVKQlFVMXpSQ3haUVVGT0xFTkJRVzFDSzBVc1VVRkJia0lzUlVGQk5rSXNVVUZCTjBJN1FVRkRRVFZFTEdWQlFVVlBMR05CUVVZN1FVRkRRVHRCUVVOS0xHTkJRVXNzUlVGQlREdEJRVU5CTEdOQlFVc3NSVUZCVER0QlFVTkpMR2xDUVVGSFowVXNhMEpCUVd0Q2JFVXNjMEpCUVhKQ0xFVkJRVFJETzBGQlEzaERhMFVzYlVOQlFXdENiRVVzYzBKQlFXeENMRU5CUVhsRGJVVXNVVUZCZWtNc1EwRkJhMFFzUTBGQmJFUXNSVUZCY1VSNlFpeExRVUZ5UkR0QlFVTklPMEZCUTBRdlF5eGxRVUZGVHl4alFVRkdPMEZCUTBFN1FVRkRTaXhqUVVGTExFVkJRVXc3UVVGRFFTeGpRVUZMTEVWQlFVdzdRVUZEU1N4cFFrRkJSMmRGTEd0Q1FVRnJRblJFTEd0Q1FVRnlRaXhGUVVGM1F6dEJRVU53UTNORUxHMURRVUZyUW5SRUxHdENRVUZzUWl4RFFVRnhRM1ZFTEZGQlFYSkRMRU5CUVRoRExFTkJRVGxETEVWQlFXbEVla0lzUzBGQmFrUTdRVUZEU0R0QlFVTkVMME1zWlVGQlJVOHNZMEZCUmp0QlFVTkJPMEZCUTBvc1kwRkJTeXhEUVVGTU8wRkJRMGxvUml4dFFrRkJUWE5FTEZsQlFVNHNRMEZCYlVJeVJDeFhRVUZ1UWl4RlFVRm5ReXhOUVVGb1F6dEJRVU5CU1N3eVFrRkJZMGNzUzBGQlpEdEJRVU5CTDBNc1pVRkJSVThzWTBGQlJqdEJRVU5CTzBGQmVFSlNPMEZCTUVKSU96dEJRVVZFTEZWQlFWTnRSU3huUWtGQlZDeERRVUV3UW5CSExFOUJRVEZDTEVWQlFXMURNRVFzV1VGQmJrTXNSVUZCWjBRN1FVRkROVU1zVTBGQlRUSkRMR3RDUVVGclFuSkhMRmRCUVZjeFF5eFRRVUZUWjBZc1owSkJRVlFzUTBGQk1FSjBReXhQUVVFeFFpeERRVUZZTEVkQlFXZEVNVU1zVTBGQlUyZEdMR2RDUVVGVUxFTkJRVEJDZEVNc1QwRkJNVUlzUTBGQmFFUXNSMEZCY1VZeFF5eFRRVUZUWjBZc1owSkJRVlFzUTBGQk1FSXNVVUZCTVVJc1EwRkJOMGM3TzBGQlJVRTdRVUZEUVN4VFFVRkhiMElzWjBKQlFXZENla2NzVFVGQlRUaEVMRkZCUVU0c1EwRkJaU3hSUVVGbUxFVkJRWGxDTWtNc1dVRkJla0lzUTBGQmJrSXNSVUZCTUVRN1FVRkRkRVJFTEcxQ1FVRlZReXhaUVVGV08wRkJRMGc3TzBGQlJVUXNVMEZCUnpKRExHVkJRVWdzUlVGQmJVSTdRVUZEWm5CS0xHVkJRVTFUTEU5QlFVNHNRMEZCWXpKSkxHVkJRV1FzUlVGQkswSXNWVUZCVlRsRUxFdEJRVllzUlVGQmFVSkRMRXRCUVdwQ0xFVkJRWGRDTzBGQlEyNUVMR2xDUVVGSk9FUXNZVUZCWVRsRUxFdEJRV3BDTzBGQlFVRXNhVUpCUTBrclJDeGxRVUZsUkN4WFFVRlhSU3haUVVGWUxFTkJRWGRDTEVsQlFYaENMRU5CUkc1Q08wRkJRVUVzYVVKQlJVazVSQ3haUVVGWmNFWXNVMEZCVXpaSExHRkJRVlFzUTBGQmRVSXNaMEpCUVdOdlF5eFpRVUZrTEVkQlFUSkNMRWxCUVd4RUxFTkJSbWhDTzBGQlFVRXNhVUpCUjBsRkxIVkNRVUYxUWtnc1YwRkJWMlFzWVVGSWRFTTdRVUZCUVN4cFFrRkpTV3RDTEhGQ1FVRnhRa29zVjBGQlYwb3NVVUZCV0N4RFFVRnZRazhzYjBKQlFYQkNMRVZCUVRCRFJTeEpRVXB1UlR0QlFVRkJMR2xDUVV0SmRrTXNWMEZCVjIxRExHVkJRV1VzVVVGTU9VSTdRVUZCUVN4cFFrRk5TWFpETEZOQlFWTjFReXhsUVVGbExFMUJUalZDTzBGQlFVRXNhVUpCVDBsTExGTkJRVk4wU2l4VFFVRlRkVU1zWVVGQlZDeERRVUYxUWl4SFFVRjJRaXhEUVZCaU8wRkJRVUVzYVVKQlVVbG5TQ3h0UWtGQmJVSjJTaXhUUVVGVGRVTXNZVUZCVkN4RFFVRjFRaXhOUVVGMlFpeERRVkoyUWp0QlFVRkJMR2xDUVZOSmFVZ3NhVUpCUVdsQ2VFb3NVMEZCVTNWRExHRkJRVlFzUTBGQmRVSXNUVUZCZGtJc1EwRlVja0k3UVVGQlFTeHBRa0ZWU1RKRUxGZEJRVmRzUnl4VFFVRlRkVU1zWVVGQlZDeERRVUYxUWl4TlFVRjJRaXhEUVZabU8wRkJRVUVzYVVKQlYwbHBSeXhQUVVGUGVFa3NVMEZCVTNWRExHRkJRVlFzUTBGQmRVSXNTVUZCZGtJc1EwRllXRHM3UVVGaFFUdEJRVU5CTlVNc2JVSkJRVTF6UWl4UlFVRk9MRU5CUVdWeFNTeE5RVUZtTEVWQlFYVkNhRVVzVDBGQlQwVXNkVUpCUVRsQ08wRkJRMEU0UkN4dlFrRkJUM0JETEZsQlFWQXNRMEZCYjBJc1NVRkJjRUlzUlVGQk1FSktMRkZCUVRGQ08wRkJRMEYzUXl4dlFrRkJUM0JETEZsQlFWQXNRMEZCYjBJc1RVRkJjRUlzUlVGQk5FSXNVVUZCTlVJN1FVRkRRVzlETEc5Q1FVRlBjRU1zV1VGQlVDeERRVUZ2UWl4TlFVRndRaXhGUVVFMFFpeEhRVUUxUWp0QlFVTkJiME1zYjBKQlFVOXdReXhaUVVGUUxFTkJRVzlDTEdWQlFYQkNMRVZCUVhGRExFMUJRWEpETzBGQlEwRnZReXh2UWtGQlQzQkRMRmxCUVZBc1EwRkJiMElzVjBGQmNFSXNSVUZCYVVOU0xFMUJRV3BETzBGQlEwRTBReXh2UWtGQlR6bEhMRmRCUVZBc1EwRkJiVUlyUnl4blFrRkJia0k3UVVGRFFVUXNiMEpCUVU4NVJ5eFhRVUZRTEVOQlFXMUNaMGdzWTBGQmJrSTdRVUZEUVVZc2IwSkJRVTg1Unl4WFFVRlFMRU5CUVcxQ01FUXNVVUZCYmtJN08wRkJSVUU3UVVGRFFYWkhMRzFDUVVGTmMwSXNVVUZCVGl4RFFVRmxjMGtzWjBKQlFXWXNSVUZCYVVOcVJTeFBRVUZQU1N4MVFrRkJlRU03UVVGRFFUWkVMRGhDUVVGcFFuUkNMRmRCUVdwQ0xFZEJRU3RDYlVJc2EwSkJRUzlDT3p0QlFVVkJPMEZCUTBGNlNpeHRRa0ZCVFhOQ0xGRkJRVTRzUTBGQlpYVkpMR05CUVdZc1JVRkJLMEpzUlN4UFFVRlBTeXh4UWtGQmRFTTdRVUZEUVdoSExHMUNRVUZOYzBJc1VVRkJUaXhEUVVGbGFVWXNVVUZCWml4RlFVRjVRbG9zVDBGQlQwMHNlVUpCUVdoRE96dEJRVVZCTzBGQlEwRXNhVUpCUVVkdlJDeFhRVUZYUlN4WlFVRllMRU5CUVhkQ0xGVkJRWGhDTEVOQlFVZ3NSVUZCZFVNN1FVRkRia05KTEhkQ1FVRlBjRU1zV1VGQlVDeERRVUZ2UWl4VlFVRndRaXhGUVVGblF6aENMRmRCUVZkRkxGbEJRVmdzUTBGQmQwSXNWVUZCZUVJc1EwRkJhRU03UVVGRFNEczdRVUZGUkR0QlFVTkJka29zYlVKQlFVMW5RaXhYUVVGT0xFTkJRV3RDTWtrc1RVRkJiRUlzUlVGQk1FSk9MRlZCUVRGQ096dEJRVWxCTzBGQlEwRnlTaXh0UWtGQlRYTkNMRkZCUVU0c1EwRkJaWFZJTEVsQlFXWXNSVUZCY1VKc1JDeFBRVUZQVHl4eFFrRkJOVUk3UVVGRFFUSkRMR3RDUVVGTGRFSXNXVUZCVEN4RFFVRnJRaXhKUVVGc1FpeEZRVUYzUWxJc1RVRkJlRUk3UVVGRFFUaENMR3RDUVVGTGRFSXNXVUZCVEN4RFFVRnJRaXhOUVVGc1FpeEZRVUV3UWl4VFFVRXhRanRCUVVOQmMwSXNhMEpCUVV0MFFpeFpRVUZNTEVOQlFXdENMR0ZCUVd4Q0xFVkJRV2xETEUxQlFXcERPMEZCUTBGelFpeHJRa0ZCUzNSQ0xGbEJRVXdzUTBGQmEwSXNhVUpCUVd4Q0xFVkJRWEZEU2l4UlFVRnlRenM3UVVGRlFUdEJRVU5CYmtnc2JVSkJRVTFUTEU5QlFVNHNRMEZCWXpSSkxGZEJRVmRLTEZGQlFYcENMRVZCUVcxRExGVkJRVk16UkN4TFFVRlVMRVZCUVdkQ1F5eExRVUZvUWl4RlFVRnpRanRCUVVOeVJDeHhRa0ZCU1hWRkxFOUJRVTk2U2l4VFFVRlRkVU1zWVVGQlZDeERRVUYxUWl4SlFVRjJRaXhEUVVGWU8wRkJRVUVzY1VKQlEwbHRTQ3hQUVVGUE1Vb3NVMEZCVTNWRExHRkJRVlFzUTBGQmRVSXNSMEZCZGtJc1EwRkVXRHM3UVVGSFFXMUlMSE5DUVVGTGVFTXNXVUZCVEN4RFFVRnJRaXhOUVVGc1FpeEZRVUV3UWl4SFFVRXhRanRCUVVOQmQwTXNjMEpCUVV0NFF5eFpRVUZNTEVOQlFXdENMRlZCUVd4Q0xFVkJRVGhDTEVsQlFUbENPMEZCUTBGM1F5eHpRa0ZCUzNoRExGbEJRVXdzUTBGQmEwSXNUVUZCYkVJc1JVRkJNRUlzVVVGQk1VSTdRVUZEUVhkRExITkNRVUZMZUVNc1dVRkJUQ3hEUVVGclFpeGxRVUZzUWl4RlFVRnRReXhQUVVGdVF6dEJRVU5CZDBNc2MwSkJRVXQ0UXl4WlFVRk1MRU5CUVd0Q0xGbEJRV3hDTEVWQlFXZERha01zUzBGQmFFTTdRVUZEUVhsRkxITkNRVUZMZWtJc1YwRkJUQ3hIUVVGdFFpOURMRTFCUVUwclF5eFhRVUY2UWpzN1FVRkZRWGRDTEhOQ1FVRkxha2dzVjBGQlRDeERRVUZwUW10SUxFbEJRV3BDT3p0QlFVVkJMSEZDUVVGSGVrVXNWVUZCVld0RkxHOUNRVUZpTEVWQlFXdERPMEZCUXpsQ2VFb3NNa0pCUVUxelFpeFJRVUZPTEVOQlFXVjNTU3hKUVVGbUxFVkJRWEZDYmtVc1QwRkJUMVVzTkVKQlFUVkNPMEZCUTBGNVJDd3dRa0ZCUzNaRExGbEJRVXdzUTBGQmEwSXNaVUZCYkVJc1JVRkJiVU1zVFVGQmJrTTdRVUZEU0R0QlFVTkVjMElzYzBKQlFVdG9SeXhYUVVGTUxFTkJRV2xDYVVnc1NVRkJha0k3UVVGRFNDeGpRV3hDUkRzN1FVRnZRa0U3UVVGRFFUbEtMRzFDUVVGTlowSXNWMEZCVGl4RFFVRnJRalpJTEVsQlFXeENMRVZCUVhkQ1l5eE5RVUY0UWp0QlFVTkJNMG9zYlVKQlFVMXpRaXhSUVVGT0xFTkJRV1YxU0N4SlFVRm1MRVZCUVhGQ2JFUXNUMEZCVDFFc01rSkJRVFZDT3p0QlFVVkJPMEZCUTBFNVJpeHpRa0ZCVXpaSExHRkJRVlFzUTBGQmRVSXNUVUZCZGtJc1JVRkJLMEpMTEZsQlFTOUNMRU5CUVRSRExFMUJRVFZETEVWQlFXOUVMR0ZCUVhCRU96dEJRVVZCTEdsQ1FVRkplVU1zWTBGQll5eEZRVUZzUWpzN1FVRkZRV2hMTEcxQ1FVRk5VeXhQUVVGT0xFTkJRV052U1N4TFFVRkxTU3hSUVVGdVFpeEZRVUUyUWl4VlFVRlRNMFFzUzBGQlZDeEZRVUZuUWtNc1MwRkJhRUlzUlVGQmMwSTdRVUZETDBNc2NVSkJRVWwzUlN4UFFVRlBlRVVzVFVGQlRUQkZMRlZCUVU0c1EwRkJhVUlzUTBGQmFrSXNRMEZCV0R0QlFVTkJMSEZDUVVGSFJpeEpRVUZJTEVWQlFWRTdRVUZEU2tNc2FVTkJRVmszU0N4SlFVRmFMRU5CUVdsQ05FZ3NTVUZCYWtJN1FVRkRRUzlLTERKQ1FVRk5PRU1zVVVGQlRpeERRVUZsYVVnc1NVRkJaaXhGUVVGeFFpeFBRVUZ5UWl4RlFVRTRRblpDTEZOQlFUbENPMEZCUTBGNFNTd3lRa0ZCVFRoRExGRkJRVTRzUTBGQlpXbElMRWxCUVdZc1JVRkJjVUlzVVVGQmNrSXNSVUZCSzBKb1F5eGhRVUV2UWp0QlFVTkJMMGdzTWtKQlFVMDRReXhSUVVGT0xFTkJRV1ZwU0N4SlFVRm1MRVZCUVhGQ0xGZEJRWEpDTEVWQlFXdERkRUlzVVVGQmJFTTdRVUZEUVhwSkxESkNRVUZOT0VNc1VVRkJUaXhEUVVGbGFVZ3NTVUZCWml4RlFVRnhRaXhQUVVGeVFpeEZRVUU0UW5SQ0xGRkJRVGxDTzBGQlEwRjZTU3d5UWtGQlRUaERMRkZCUVU0c1EwRkJaV2xJTEVsQlFXWXNSVUZCY1VJc1ZVRkJja0lzUlVGQmFVTndRaXhWUVVGcVF6dEJRVU5CTTBrc01rSkJRVTA0UXl4UlFVRk9MRU5CUVdWcFNDeEpRVUZtTEVWQlFYRkNMRTFCUVhKQ0xFVkJRVFpDY0VJc1ZVRkJOMEk3UVVGRFNEdEJRVU5LTEdOQldFUTdPMEZCWVVFN1FVRkRRVE5KTEcxQ1FVRk5PRU1zVVVGQlRpeERRVUZsSzBZc1NVRkJaaXhGUVVGeFFpeE5RVUZ5UWl4RlFVRTJRaTlDTEZGQlFUZENPMEZCUTBFNVJ5eHRRa0ZCVFRoRExGRkJRVTRzUTBGQlpTdEdMRWxCUVdZc1JVRkJjVUlzVFVGQmNrSXNSVUZCTmtKd1FpeFJRVUUzUWp0QlFVTkJla2dzYlVKQlFVMDRReXhSUVVGT0xFTkJRV1VyUml4SlFVRm1MRVZCUVhGQ0xGRkJRWEpDTEVWQlFTdENia0lzVlVGQkwwSTdRVUZEUVRGSUxHMUNRVUZOT0VNc1VVRkJUaXhEUVVGbEswWXNTVUZCWml4RlFVRnhRaXhUUVVGeVFpeEZRVUZuUTBzc2FVSkJRV2hETzBGQlEwRnNTaXh0UWtGQlRUaERMRkZCUVU0c1EwRkJaVFpITEUxQlFXWXNSVUZCZFVJc1YwRkJka0lzUlVGQmIwTm1MRmRCUVhCRE8wRkJRMEUxU1N4dFFrRkJUVGhETEZGQlFVNHNRMEZCWlRaSExFMUJRV1lzUlVGQmRVSXNUMEZCZGtJc1JVRkJaME1zVlVGQlUyeEdMRU5CUVZRc1JVRkJWenRCUVVGRFFTeHRRa0ZCUlU4c1kwRkJSanRCUVVGdlFpeGpRVUZvUlR0QlFVTkJhRVlzYlVKQlFVMDRReXhSUVVGT0xFTkJRV1UyUnl4TlFVRm1MRVZCUVhWQ0xGTkJRWFpDTEVWQlFXdERXaXh0UWtGQmJFTTdRVUZEUVM5SkxHMUNRVUZOYzBJc1VVRkJUaXhEUVVGbEswZ3NWVUZCWml4RlFVRXlRakZFTEU5QlFVOURMR2xDUVVGc1F6dEJRVU5CZVVRc2QwSkJRVmM1UWl4WlFVRllMRU5CUVhkQ0xHRkJRWGhDTEVWQlFYVkRMRWxCUVhaRE8wRkJRMEU0UWl4M1FrRkJWemxDTEZsQlFWZ3NRMEZCZDBJc1ZVRkJlRUlzUlVGQmIwTXNTVUZCY0VNN08wRkJSVUU3UVVGRFFUbENMSFZDUVVGVk9FSXNXVUZCVml4RFFVRjFRaXhMUVVGMlFpeEZRVUU0UWtvc1VVRkJPVUk3UVVGRFFXNUlMRzFDUVVGTk9FTXNVVUZCVGl4RFFVRmxNa01zVTBGQlppeEZRVUV3UWl4UFFVRXhRaXhGUVVGdFF5eFpRVUZWTzBGQlEzcERhMFVzZDBKQlFVOXVReXhMUVVGUU8wRkJRMEVzZDBKQlFVOHNTMEZCVUR0QlFVTklMR05CU0VRN1FVRkpTQ3hWUVM5SFJEczdRVUZwU0VFN1FVRkRRWGhJTEdWQlFVMDRReXhSUVVGT0xFTkJRV1Y2UXl4UlFVRm1MRVZCUVhsQ0xFOUJRWHBDTEVWQlFXdERMRlZCUVZOdlJTeERRVUZVTEVWQlFWYzdRVUZEZWtOQkxHVkJRVVZQTEdOQlFVWTdRVUZEUVN4cFFrRkJUVEpGTEZOQlFWTnNSaXhGUVVGRlJTeE5RVUZHTEVOQlFWTkRMRkZCUVZRc1EwRkJhMEpPTEdsQ1FVRnNRaXhQUVVFd1F5eEhRVUV4UXl4SFFVRm5SRWNzUlVGQlJVVXNUVUZCYkVRc1IwRkJNa1JHTEVWQlFVVkZMRTFCUVVZc1EwRkJVM2hFTEZWQlFXNUdPMEZCUVVFc2FVSkJRMDByU1N4aFFVRmhOMG9zVTBGQlV6WkhMR0ZCUVZRc1EwRkJkVUlzVFVGQlMzWkNMRTlCUVU5SExESkNRVUZhTEVkQlFUQkRMRXRCUVRGRExFZEJRV3RFU0N4UFFVRlBUeXh4UWtGQmFFWXNRMEZFYmtJN08wRkJSMEVzYVVKQlFVY3NRMEZCUTJ4SExFMUJRVTF4UXl4UlFVRk9MRU5CUVdWelNDeE5RVUZtTEVWQlFYVkNhRVVzVDBGQlQwVXNkVUpCUVRsQ0xFTkJRVVFzU1VGQk1rUnhSU3hWUVVFNVJDeEZRVUY1UlR0QlFVTnlSV3hMTEhWQ1FVRk5jMFFzV1VGQlRpeERRVUZ0UWpSSExGVkJRVzVDTEVWQlFTdENMRTFCUVM5Q08wRkJRMGc3UVVGRFNpeFZRVkpFTzBGQlUwZzdRVUZEU2pzN1UwRkZORUl4U2l4SkxFZEJRWEJDTWtrc1owSTdVMEZCZFVONFJDeE5MRWRCUVdKaExGTWlMQ0ptYVd4bElqb2lZWEJ3TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcFhHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc1Y2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OUxGeHVJRngwWEhSY2RHbGtPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzYjJGa1pXUTZJR1poYkhObFhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExteHZZV1JsWkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01DazdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ01ESmpNbUZqWkRBeVltVTJPR0U1T0ROak5tUWlMQ0luZFhObElITjBjbWxqZENjN1hISmNibHh5WEc1cGJYQnZjblFnS2lCaGN5QjFkR2xzY3lCbWNtOXRJQ2N1TDIxdlpIVnNaWE12ZFhScGJITW5PMXh5WEc1cGJYQnZjblFnS2lCaGN5QmpkWE4wYjIxRGFHVmphMkp2ZUNCbWNtOXRJQ2N1TDIxdlpIVnNaWE12WTNWemRHOXRRMmhsWTJ0aWIzZ25PMXh5WEc1cGJYQnZjblFnS2lCaGN5QmpkWE4wYjIxVFpXeGxZM1FnWm5KdmJTQW5MaTl0YjJSMWJHVnpMMk4xYzNSdmJWTmxiR1ZqZENjN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCeVpXRmtlU2htYmlrZ2UxeHlYRzRnSUNBZ2FXWWdLR1J2WTNWdFpXNTBMbkpsWVdSNVUzUmhkR1VnSVQwOUlDZHNiMkZrYVc1bkp5a2dlMXh5WEc0Z0lDQWdJQ0FnSUdadUtDazdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtYmlrN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNiaTh2WTI5dWMzUWdabTl5YlhNZ1BTQW9ablZ1WTNScGIyNG9kMmx1Wkc5M0xDQmtiMk4xYldWdWRDbDdYSEpjYmk4dklDQWdJRnh5WEc0dkx5QWdJQ0JqYjI1emRDQmliRzlqYTFOMVltMXBkQ0E5SUdaMWJtTjBhVzl1S0dWc1pXMWxiblFwZTF4eVhHNHZMeUFnSUNBZ0lDQWdZMjl1YzNRZ1ptOXliWE5GYkdWdGN5QTlJR1ZzWlcxbGJuUWdKaVlnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2hsYkdWdFpXNTBLU0EvSUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvWld4bGJXVnVkQ2tnT2lCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NkbWIzSnRKeWs3WEhKY2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnWEhKY2JpOHZJQ0FnSUNBZ0lDQjFkR2xzY3k1bWIzSkZZV05vS0dadmNtMXpSV3hsYlhNc0lHWjFibU4wYVc5dUtHbHVaR1Y0TENCMllXeDFaU2w3WEhKY2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIUm9hWE5HYjNKdElEMGdkbUZzZFdVN1hISmNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiSE11WVdSa1JYWmxiblFvZEdocGMwWnZjbTBzSUNkemRXSnRhWFFuTENCbWRXNWpkR2x2YmlobEtYdGxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdmU2s3WEhKY2JpOHZJQ0FnSUNBZ0lDQjlLVHRjY2x4dUx5OGdJQ0FnZlR0Y2NseHVMeThnSUNBZ1hISmNiaTh2SUNBZ0lISmxkSFZ5YmlCN1hISmNiaTh2SUNBZ0lDQWdJQ0JpYkc5amF6b2dZbXh2WTJ0VGRXSnRhWFJjY2x4dUx5OGdJQ0FnZlR0Y2NseHVMeTk5S0hkcGJtUnZkeXdnWkc5amRXMWxiblFwS1R0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdsdWFYUW9LU0I3WEhKY2JpQWdJQ0JqZFhOMGIyMURhR1ZqYTJKdmVDNXBibWwwS0NrN0lGeHlYRzR2THlBZ0lDQmpkWE4wYjIxVFpXeGxZM1F1WTI5dVptbG5LSHRjY2x4dUx5OGdJQ0FnSUNBZ0lDZGpkWE4wYjIxVFpXeGxZM1JDZFhSMGIyNURiR0Z6Y3ljNklDZGtkWEJoSjF4eVhHNHZMeUFnSUNCOUtUdGNjbHh1SUNBZ0lHTjFjM1J2YlZObGJHVmpkQzVwYm1sMEtDazdYSEpjYmk4dklDQWdJR1p2Y20xekxtSnNiMk5yS0NrN1hISmNiaUFnSUNCY2NseHVMeThnSUNBZ0tHWjFibU4wYVc5dUlHSnNiMk5yVTNWaWJXbDBLR1ZzWlcxbGJuUXBlMXh5WEc0dkx5QWdJQ0FnSUNBZ1kyOXVjM1FnWm05eWJYTkZiR1Z0Y3lBOUlHVnNaVzFsYm5RZ0ppWWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDaGxiR1Z0Wlc1MEtTQS9JR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29aV3hsYldWdWRDa2dPaUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2RtYjNKdEp5azdYSEpjYmk4dklDQWdJQ0FnSUNBZ0lDQWdYSEpjYmk4dklDQWdJQ0FnSUNCMWRHbHNjeTVtYjNKRllXTm9LR1p2Y20xelJXeGxiWE1zSUdaMWJtTjBhVzl1S0dsdVpHVjRMQ0IyWVd4MVpTbDdYSEpjYmk4dklDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhSb2FYTkdiM0p0SUQwZ2RtRnNkV1U3WEhKY2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVZV1JrUlhabGJuUW9kR2hwYzBadmNtMHNJQ2R6ZFdKdGFYUW5MQ0JtZFc1amRHbHZiaWhsS1h0bExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN2ZTazdYSEpjYmk4dklDQWdJQ0FnSUNCOUtUdGNjbHh1THk4Z0lDQWdmU2dwS1R0Y2NseHVmVnh5WEc1Y2NseHVjbVZoWkhrb2FXNXBkQ2s3WEhKY2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDBNNkwxQnliMnBsWTNSekwxQnlhWFpoZEdVdlYxZERTQzlVWVhOck1TOXpjbU12YW5NdllYQndMbXB6SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh5WEc1Y2NseHVablZ1WTNScGIyNGdabTl5UldGamFDaGhjbkpoZVN3Z1kyRnNiR0poWTJzc0lITmpiM0JsS1NCN1hISmNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JoY25KaGVTNXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmpheTVqWVd4c0tITmpiM0JsTENCcExDQmhjbkpoZVZ0cFhTazdJQzh2SUhCaGMzTmxjeUJpWVdOcklITjBkV1ptSUhkbElHNWxaV1JjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNCY2NseHVablZ1WTNScGIyNGdhVzV6WlhKMFFXWjBaWElvWld3c0lISmxabVZ5Wlc1alpVNXZaR1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaV1psY21WdVkyVk9iMlJsTG5CaGNtVnVkRTV2WkdVdWFXNXpaWEowUW1WbWIzSmxLR1ZzTENCeVpXWmxjbVZ1WTJWT2IyUmxMbTVsZUhSVGFXSnNhVzVuS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdGa1pFTnNZWE56S0dWc0xDQmpiR0Z6YzA1aGJXVXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9aV3d1WTJ4aGMzTk1hWE4wS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWc0xtTnNZWE56VEdsemRDNWhaR1FvWTJ4aGMzTk9ZVzFsS1R0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJDNWpiR0Z6YzA1aGJXVWdLejBnSnlBbklDc2dZMnhoYzNOT1lXMWxPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhKbGJXOTJaVU5zWVhOektHVnNMQ0JqYkdGemMwNWhiV1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWld3dVkyeGhjM05NYVhOMEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9ZMnhoYzNOT1lXMWxLVHRjY2x4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkM1amJHRnpjMDVoYldVZ0t6MGdKeUFuTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlIUnZaMmRzWlVOc1lYTnpLR1ZzTENCamJHRnpjMDVoYldVcGUxeHlYRzRnSUNBZ0lDQWdJR2xtSUNobGJDNWpiR0Z6YzB4cGMzUXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lHVnNMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9ZMnhoYzNOT1lXMWxLVHRjY2x4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOc1lYTnpaWE1nUFNCbGJDNWpiR0Z6YzA1aGJXVXVjM0JzYVhRb0p5QW5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJsZUdsemRHbHVaMGx1WkdWNElEMGdZMnhoYzNObGN5NXBibVJsZUU5bUtHTnNZWE56VG1GdFpTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0dWNGFYTjBhVzVuU1c1a1pYZ2dQajBnTUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTmxjeTV6Y0d4cFkyVW9aWGhwYzNScGJtZEpibVJsZUN3Z01TazdYSEpjYmlBZ0lDQWdJQ0FnSUNCbGJITmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56WlhNdWNIVnphQ2hqYkdGemMwNWhiV1VwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUdWc0xtTnNZWE56VG1GdFpTQTlJR05zWVhOelpYTXVhbTlwYmlnbklDY3BPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVJQ0FnSUZ4eVhHNW1kVzVqZEdsdmJpQm9ZWE5EYkdGemN5aGxiQ3dnWTJ4aGMzTk9ZVzFsS1h0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWld3dVkyeGhjM05NYVhOMEtYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9aV3d1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0dOc1lYTnpUbUZ0WlNrcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdaV3h6Wlh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2JtVjNJRkpsWjBWNGNDZ25LRjU4SUNrbklDc2dZMnhoYzNOT1lXMWxJQ3NnSnlnZ2ZDUXBKeXdnSjJkcEp5a3VkR1Z6ZENobGJDNWpiR0Z6YzA1aGJXVXBLWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hISmNiaUFnSUNCOVhISmNibHh5WEc1bWRXNWpkR2x2YmlCM2NtRndWR0ZuSUNoMGIxZHlZWEFzSUhkeVlYQndaWElwSUh0Y2NseHVJQ0FnSUNBZ0lDQjNjbUZ3Y0dWeUlEMGdkM0poY0hCbGNpQjhmQ0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvZEc5WGNtRndMbTVsZUhSVGFXSnNhVzVuS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSdlYzSmhjQzV3WVhKbGJuUk9iMlJsTG1sdWMyVnlkRUpsWm05eVpTaDNjbUZ3Y0dWeUxDQjBiMWR5WVhBdWJtVjRkRk5wWW14cGJtY3BPMXh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2VjNKaGNDNXdZWEpsYm5ST2IyUmxMbUZ3Y0dWdVpFTm9hV3hrS0hkeVlYQndaWElwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkM0poY0hCbGNpNWhjSEJsYm1SRGFHbHNaQ2gwYjFkeVlYQXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdZV1JrUlhabGJuUW9aV3hsYldWdWRDd2daWFpsYm5ST1lXMWxMQ0JsZG1WdWRFaGhibVJzWlhJc0lHVjJaVzUwUTJGd2RIVnlaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ2YkdSRmRtVnVkRTVoYldVZ1BTQW5iMjRuSUNzZ1pYWmxiblJPWVcxbExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWMyVkRZWEIwZFhKbElEMGdaWFpsYm5SRFlYQjBkWEpsSUQ4Z1pYWmxiblJEWVhCMGRYSmxJRG9nWm1Gc2MyVTdYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb1pXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWhsZG1WdWRFNWhiV1VzSUdWMlpXNTBTR0Z1Wkd4bGNpd2dkWE5sUTJGd2RIVnlaU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxiR1Z0Wlc1MExtRjBkR0ZqYUVWMlpXNTBLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVZWFIwWVdOb1JYWmxiblFvYjJ4a1JYWmxiblJPWVcxbExDQmxkbVZ1ZEVoaGJtUnNaWElwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lGeHlYRzVtZFc1amRHbHZiaUIwY21sbloyVnlSWFpsYm5Rb1pXeGxiV1Z1ZEN3Z1pYWmxiblJVZVhCbEtYdGNjbHh1SUNBZ0lDQWdJQ0JwWmlnblkzSmxZWFJsUlhabGJuUW5JR2x1SUdSdlkzVnRaVzUwS1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaWFpsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmRtVnVkQ2duU0ZSTlRFVjJaVzUwY3ljcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkQzVwYm1sMFJYWmxiblFvWlhabGJuUlVlWEJsTENCbVlXeHpaU3dnZEhKMVpTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVpHbHpjR0YwWTJoRmRtVnVkQ2hsZG1WdWRDazdJQ0FnSUNBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJR1ZzYzJWN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1YyWlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJYWmxiblJQWW1wbFkzUW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaWFpsYm5RdVpYWmxiblJVZVhCbElEMGdaWFpsYm5SVWVYQmxPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExtWnBjbVZGZG1WdWRDZ25iMjRuSzJWMlpXNTBMbVYyWlc1MFZIbHdaU3dnWlhabGJuUXBPMXh5WEc0Z0lDQWdJQ0FnSUgwZ0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWEhKY2JtWjFibU4wYVc5dUlHbHpWSGx3WlU5bUtIUjVjR1VzSUc5aWFpa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQmpiR0Z6SUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLRzlpYWlrdWMyeHBZMlVvT0N3Z0xURXBMblJ2VEc5allXeGxURzkzWlhKRFlYTmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFpQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlHOWlhaUFoUFQwZ2JuVnNiQ0FtSmlCamJHRnpJRDA5UFNCMGVYQmxMblJ2VEc5allXeGxURzkzWlhKRFlYTmxLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ1hISmNibVY0Y0c5eWRDQjdabTl5UldGamFDd2dhVzV6WlhKMFFXWjBaWElzSUdGa1pFTnNZWE56TENCeVpXMXZkbVZEYkdGemN5d2dkRzluWjJ4bFEyeGhjM01zSUdoaGMwTnNZWE56TENCM2NtRndWR0ZuTENCaFpHUkZkbVZ1ZEN3Z2RISnBaMmRsY2tWMlpXNTBMQ0JwYzFSNWNHVlBaaUI5TzF4eVhHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5RE9pOVFjbTlxWldOMGN5OVFjbWwyWVhSbEwxZFhRMGd2VkdGemF6RXZjM0pqTDJwekwyMXZaSFZzWlhNdmRYUnBiSE11YW5NaUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEhKY2JseHlYRzVwYlhCdmNuUWdLaUJoY3lCMWRHbHNjeUJtY205dElDY3VMM1YwYVd4ekp6dGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHTm9aV05yYVc1bktHVXBlMXh5WEc0Z0lDQWdZMjl1YzNRZ2JHRmlaV3dnUFNCbExuUmhjbWRsZEM1dWIyUmxUbUZ0WlM1MGIweHZZMkZzWlV4dmQyVnlRMkZ6WlNncElEMDlQU0FuYkdGaVpXd25JRDhnWlM1MFlYSm5aWFFnT2lCbExuUmhjbWRsZEM1d1lYSmxiblJPYjJSbExGeHlYRzRnSUNBZ0lDQWdJQ0FnWTJobFkydGliM2dnUFNCc1lXSmxiQzV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bk8xeHlYRzVjY2x4dUlDQWdJR2xtS0NGamFHVmphMkp2ZUM1amFHVmphMlZrS1h0Y2NseHVJQ0FnSUNBZ0lDQmphR1ZqYTJKdmVDNWphR1ZqYTJWa0lEMGdkSEoxWlR0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdWc2MyVjdYSEpjYmlBZ0lDQWdJQ0FnWTJobFkydGliM2d1WTJobFkydGxaQ0E5SUdaaGJITmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdhR0Z1Wkd4bFMyVjVjeWhsS1h0Y2NseHVJQ0FnSUdsbUtHVXVhMlY1UTI5a1pTQTlQVDBnTVRNZ2ZId2daUzVyWlhsRGIyUmxJRDA5UFNBek1pbDdYSEpjYmlBZ0lDQWdJQ0FnYVdZb1pTNTBZWEpuWlhRdVkyaGxZMnRsWkNsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnWlM1MFlYSm5aWFF1WTJobFkydGxaQ0E5SUdaaGJITmxPeUJjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdaV3h6Wlh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWlM1MFlYSm5aWFF1WTJobFkydGxaQ0E5SUhSeWRXVTdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnBibWwwUTJobFkydGliM2hsY3lobGJHVnRaVzUwS1h0Y2NseHVJQ0FnSUd4bGRDQmphR1ZqYTJKdmVHVnpJRDBnWld4bGJXVnVkQ0FtSmlCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0dWc1pXMWxiblFwSUQ4Z1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNobGJHVnRaVzUwS1NBNklHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0oybHVjSFYwVzNSNWNHVTlYQ0pqYUdWamEySnZlRndpWFNjcE8xeHlYRzVjY2x4dUlDQWdJSFYwYVd4ekxtWnZja1ZoWTJnb1kyaGxZMnRpYjNobGN5d2dablZ1WTNScGIyNGdLR2x1WkdWNExDQjJZV3gxWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJR3hsZENCMGFHbHpRMmhsWTJ0aWIzZ2dQU0IyWVd4MVpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMHhoWW1Wc0lEMGdkbUZzZFdVdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bk8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMWRHbHNjeTVoWkdSRmRtVnVkQ2gwYUdselEyaGxZMnRpYjNnc0lDZHJaWGxrYjNkdUp5d2dhR0Z1Wkd4bFMyVjVjeWs3WEhKY2JpQWdJQ0FnSUNBZ2RYUnBiSE11WVdSa1JYWmxiblFvZEdocGMweGhZbVZzTENBblkyeHBZMnNuTENCamFHVmphMmx1WnlrN1hISmNiaUFnSUNCOUtUdGNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJSHRwYm1sMFEyaGxZMnRpYjNobGN5QmhjeUJwYm1sMGZUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5RE9pOVFjbTlxWldOMGN5OVFjbWwyWVhSbEwxZFhRMGd2VkdGemF6RXZjM0pqTDJwekwyMXZaSFZzWlhNdlkzVnpkRzl0UTJobFkydGliM2d1YW5NaUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEhKY2JseHlYRzVwYlhCdmNuUWdLaUJoY3lCMWRHbHNjeUJtY205dElDY3VMM1YwYVd4ekp6dGNjbHh1WEhKY2JtTnZibk4wSUdOdmJtWnBaeUE5SUh0Y2NseHVJQ0FnSUhObGJHVmpkRWhwWkdSbGJrTnNZWE56T2lBblptOXliVjlmYzJWc1pXTjBYMmhwWkdSbGJpY3NYSEpjYmlBZ0lDQmpkWE4wYjIxVFpXeGxZM1JDZFhSMGIyNURiR0Z6Y3pvZ0oyTjFjM1J2YlMxelpXeGxZM1F0WW5WMGRHOXVKeXhjY2x4dUlDQWdJR04xYzNSdmJWTmxiR1ZqZEVKMWRIUnZiazl3Wlc1RGJHRnpjem9nSjJOMWMzUnZiUzF6Wld4bFkzUXRZblYwZEc5dVgyOXdaVzRuTEZ4eVhHNGdJQ0FnWTNWemRHOXRVMlZzWldOMFUzUmhkSFZ6UTJ4aGMzTTZJQ2RqZFhOMGIyMHRjMlZzWldOMExXSjFkSFJ2Ymw5ZmMzUmhkSFZ6Snl4Y2NseHVJQ0FnSUdOMWMzUnZiVk5sYkdWamRFbGpiMjVEYkdGemN6b2dKMk4xYzNSdmJTMXpaV3hsWTNRdFluVjBkRzl1WDE5cFkyOXVKeXhjY2x4dUlDQWdJR04xYzNSdmJWTmxiR1ZqZEZKdmJHVjBaWGgwUTJ4aGMzTTZJQ2RqZFhOMGIyMHRjMlZzWldOMExXSjFkSFJ2Ymw5ZmNtOXNaWFJsZUhRbkxGeHlYRzRnSUNBZ1kzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVOc1lYTnpPaUFuWTNWemRHOXRMWE5sYkdWamRDMXRaVzUxSnl4Y2NseHVJQ0FnSUdOMWMzUnZiVk5sYkdWamRFMWxiblZJYVdSa1pXNURiR0Z6Y3pvZ0oyTjFjM1J2YlMxelpXeGxZM1F0YldWdWRWOW9hV1JrWlc0bkxGeHlYRzRnSUNBZ1kzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVsMFpXMDZJQ2RqZFhOMGIyMHRjMlZzWldOMExXMWxiblZmWDJsMFpXMG5MRnh5WEc0Z0lDQWdZM1Z6ZEc5dFUyVnNaV04wVFdWdWRVbDBaVzFUWld4bFkzUmxaRG9nSjJOMWMzUnZiUzF6Wld4bFkzUXRiV1Z1ZFY5ZmFYUmxiVjl6Wld4bFkzUmxaQ2NzWEhKY2JpQWdJQ0JqZFhOMGIyMVRaV3hsWTNSTlpXNTFTWFJsYlUxaGNtdGxaRG9nSjJOMWMzUnZiUzF6Wld4bFkzUXRiV1Z1ZFY5ZmFYUmxiVjlvYjNabGNpMW1iMk4xY3ljc1hISmNiaUFnSUNCeWIyeGxWR1Y0ZERvZ0p5QnpaV3hsWTNRblhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ6WlhSRGIyNW1hV2NvWTNWemRHOXRRMjl1Wm1sbktYdGNjbHh1SUNBZ0lHTnZibk4wSUc1bGQwTnZibVpwWnlBOUlIdDlPMXh5WEc0Z0lDQWdabTl5S0d4bGRDQnJaWGtnYVc0Z1kzVnpkRzl0UTI5dVptbG5LWHRjY2x4dUlDQWdJQ0FnSUNCcFppaGpiMjVtYVdjdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkME52Ym1acFoxdHJaWGxkSUQwZ1kzVnpkRzl0UTI5dVptbG5XMnRsZVYwN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdUMkpxWldOMExtRnpjMmxuYmloamIyNW1hV2NzSUc1bGQwTnZibVpwWnlrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5vYjNkTlpXNTFLR1VwZTF4eVhHNGdJQ0FnWTI5dWMzUWdiV1Z1ZFVsa0lEMGdaUzUwWVhKblpYUXVZWFIwY21saWRYUmxjMXNuYVdRblhTNTJZV3gxWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJRzFsYm5WRGIyNTBjbTlzSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSXljZ0t5QnRaVzUxU1dRcExGeHlYRzRnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVTV1FnUFNCdFpXNTFTV1F1YzNWaWMzUnlLREFzSUcxbGJuVkpaQzVwYm1SbGVFOW1LQ2ROWlc1MUp5a3BJQ3NnSjBKMWRIUnZiaWNzWEhKY2JpQWdJQ0FnSUNBZ0lDQmlkWFIwYjI1RGIyNTBjbTlzSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSXljZ0t5QmlkWFIwYjI1SlpDa3NYSEpjYmlBZ0lDQWdJQ0FnSUNCelpXeGxZM1JsWkVsMFpXMGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pKeUFySUcxbGJuVkpaQ0FySUNjZ2JHa3VKeUFySUdOdmJtWnBaeTVqZFhOMGIyMVRaV3hsWTNSTlpXNTFTWFJsYlZObGJHVmpkR1ZrSUNzZ0p5QmhKeWs3WEhKY2JseHlYRzRnSUNBZ2RYUnBiSE11Y21WdGIzWmxRMnhoYzNNb2JXVnVkVU52Ym5SeWIyd3NJR052Ym1acFp5NWpkWE4wYjIxVFpXeGxZM1JOWlc1MVNHbGtaR1Z1UTJ4aGMzTXBPMXh5WEc0Z0lDQWdiV1Z1ZFVOdmJuUnliMnd1YzJWMFFYUjBjbWxpZFhSbEtDZGhjbWxoTFdocFpHUmxiaWNzSUdaaGJITmxLVHRjY2x4dVhISmNiaUFnSUNCelpXeGxZM1JsWkVsMFpXMHVabTlqZFhNb0tUdGNjbHh1SUNBZ0lIVjBhV3h6TG1Ga1pFTnNZWE56S0dKMWRIUnZia052Ym5SeWIyd3NJR052Ym1acFp5NWpkWE4wYjIxVFpXeGxZM1JDZFhSMGIyNVBjR1Z1UTJ4aGMzTXBPeUFnSUNBZ0lDQWdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdocFpHVk5aVzUxS0dVcGUxeHlYRzRnSUNBZ1kyOXVjM1FnYldWdWRVbGtJRDBnWlM1MFlYSm5aWFF1WVhSMGNtbGlkWFJsYzFzbmFXUW5YUzUyWVd4MVpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUcxbGJuVkRiMjUwY205c0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkl5Y2dLeUJ0Wlc1MVNXUXBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ1luVjBkRzl1U1dRZ1BTQnRaVzUxU1dRdWMzVmljM1J5S0RBc0lHMWxiblZKWkM1cGJtUmxlRTltS0NkTlpXNTFKeWtwSUNzZ0owSjFkSFJ2Ymljc1hISmNiaUFnSUNBZ0lDQWdJQ0JpZFhSMGIyNURiMjUwY205c0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkl5Y2dLeUJpZFhSMGIyNUpaQ2s3WEhKY2JseHlYRzRnSUNBZ2RYUnBiSE11Y21WdGIzWmxRMnhoYzNNb1luVjBkRzl1UTI5dWRISnZiQ3dnWTI5dVptbG5MbU4xYzNSdmJWTmxiR1ZqZEVKMWRIUnZiazl3Wlc1RGJHRnpjeWs3WEhKY2JpQWdJQ0IxZEdsc2N5NWhaR1JEYkdGemN5aHRaVzUxUTI5dWRISnZiQ3dnWTI5dVptbG5MbU4xYzNSdmJWTmxiR1ZqZEUxbGJuVklhV1JrWlc1RGJHRnpjeWs3WEhKY2JpQWdJQ0J0Wlc1MVEyOXVkSEp2YkM1elpYUkJkSFJ5YVdKMWRHVW9KMkZ5YVdFdGFHbGtaR1Z1Snl3Z2RISjFaU2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlIUnZaMmRzWlUxbGJuVW9aU2w3WEhKY2JpQWdJQ0JqYjI1emRDQnRaVzUxU1dRZ1BTQmxMblJoY21kbGRDNWhkSFJ5YVdKMWRHVnpXeWRwWkNkZExuWmhiSFZsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdiV1Z1ZFVOdmJuUnliMndnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqSnlBcklHMWxiblZKWkNrc1hISmNiaUFnSUNBZ0lDQWdJQ0JrYVhOd2JHRjVJRDBnS0hkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxJRDhnWjJWMFEyOXRjSFYwWldSVGRIbHNaU2h0Wlc1MVEyOXVkSEp2YkN3Z2JuVnNiQ2tnT2lCdFpXNTFRMjl1ZEhKdmJDNWpkWEp5Wlc1MFUzUjViR1VwTG1ScGMzQnNZWGs3WEhKY2JseHlYRzRnSUNBZ2FXWW9aR2x6Y0d4aGVTQTlQVDBnSjI1dmJtVW5LWHRjY2x4dUlDQWdJQ0FnSUNCMWRHbHNjeTUwY21sbloyVnlSWFpsYm5Rb2JXVnVkVU52Ym5SeWIyd3NJQ2R6YUc5M0p5azdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmxiSE5sZTF4eVhHNGdJQ0FnSUNBZ0lIVjBhV3h6TG5SeWFXZG5aWEpGZG1WdWRDaHRaVzUxUTI5dWRISnZiQ3dnSjJocFpHVW5LVHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyVnNaV04wUld4bGJXVnVkQ2hsS1h0Y2NseHVJQ0FnSUdOdmJuTjBJRzFsYm5WRGIyNTBjbTlzSUQwZ1pTNTBZWEpuWlhRdWNHRnlaVzUwVG05a1pTNXdZWEpsYm5ST2IyUmxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ2JXVnVkVWxrSUQwZ2JXVnVkVU52Ym5SeWIyd3VZWFIwY21saWRYUmxjMXNuYVdRblhTNTJZV3gxWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJSE5sYkdWamRFTnZiblJ5YjJ4SlpDQTlJRzFsYm5WSlpDNXpkV0p6ZEhJb01Dd2diV1Z1ZFVsa0xtbHVaR1Y0VDJZb0owMWxiblVuS1Nrc1hISmNiaUFnSUNBZ0lDQWdJQ0J6Wld4bFkzUkRiMjUwY205c0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkl5Y3JjMlZzWldOMFEyOXVkSEp2YkVsa0tTeGNjbHh1SUNBZ0lDQWdJQ0FnSUdKMWRIUnZia052Ym5SeWIyeEpaQ0E5SUcxbGJuVkpaQzV6ZFdKemRISW9NQ3dnYldWdWRVbGtMbWx1WkdWNFQyWW9KMDFsYm5VbktTa2dLeUFuUW5WMGRHOXVKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lITmxiR1ZqZEdWa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkl5Y3JiV1Z1ZFVsa0lDc2dKeUJzYVM0bklDc2dZMjl1Wm1sbkxtTjFjM1J2YlZObGJHVmpkRTFsYm5WSmRHVnRVMlZzWldOMFpXUXBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ1luVjBkRzl1VTNSaGRIVnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JeWNnS3lCaWRYUjBiMjVEYjI1MGNtOXNTV1FnS3lBbklDNG5JQ3NnWTI5dVptbG5MbU4xYzNSdmJWTmxiR1ZqZEZOMFlYUjFjME5zWVhOektTeGNjbHh1SUNBZ0lDQWdJQ0FnSUhSb2FYTkZiR1Z0SUQwZ1pTNTBZWEpuWlhRdWNHRnlaVzUwVG05a1pTeGNjbHh1SUNBZ0lDQWdJQ0FnSUdsdVpHVjRJRDBnWlM1MFlYSm5aWFF1WVhSMGNtbGlkWFJsYzFzblpHRjBZUzFwYm1SbGVDZGRMblpoYkhWbE8xeHlYRzVjY2x4dUlDQWdJSFYwYVd4ekxuSmxiVzkyWlVOc1lYTnpLSE5sYkdWamRHVmtMQ0JqYjI1bWFXY3VZM1Z6ZEc5dFUyVnNaV04wVFdWdWRVbDBaVzFUWld4bFkzUmxaQ2s3WEhKY2JpQWdJQ0IxZEdsc2N5NWhaR1JEYkdGemN5aDBhR2x6Uld4bGJTd2dZMjl1Wm1sbkxtTjFjM1J2YlZObGJHVmpkRTFsYm5WSmRHVnRVMlZzWldOMFpXUXBPMXh5WEc0Z0lDQWdjMlZzWldOMFpXUXVjMlYwUVhSMGNtbGlkWFJsS0NkaGNtbGhMWE5sYkdWamRHVmtKeXdnWm1Gc2MyVXBPMXh5WEc0Z0lDQWdkR2hwYzBWc1pXMHVjMlYwUVhSMGNtbGlkWFJsS0NkaGNtbGhMWE5sYkdWamRHVmtKeXdnZEhKMVpTazdYSEpjYmx4eVhHNGdJQ0FnWW5WMGRHOXVVM1JoZEhWekxuUmxlSFJEYjI1MFpXNTBJRDBnWlM1MFlYSm5aWFF1ZEdWNGRFTnZiblJsYm5RN1hISmNibHh5WEc0Z0lDQWdkWFJwYkhNdWRISnBaMmRsY2tWMlpXNTBLRzFsYm5WRGIyNTBjbTlzTENBbmFHbGtaU2NwTzF4eVhHNWNjbHh1SUNBZ0lITmxiR1ZqZEVOdmJuUnliMnd1YzJWc1pXTjBaV1JKYm1SbGVDQTlJR2x1WkdWNE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqYkdsamEweHBibXNvWlNsN1hISmNiaUFnSUNCMWRHbHNjeTUwY21sbloyVnlSWFpsYm5Rb1pTNTBZWEpuWlhRc0lDZHpaV3hsWTNRbktUdGNjbHh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUc2dYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUcxaGNtdE1hVzVyS0dVcGUxeHlYRzRnSUNBZ1kyOXVjM1FnYldWdWRVTnZiblJ5YjJ3Z1BTQmxMblJoY21kbGRDNXdZWEpsYm5ST2IyUmxMbkJoY21WdWRFNXZaR1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQnRaVzUxU1dRZ1BTQnRaVzUxUTI5dWRISnZiQzVoZEhSeWFXSjFkR1Z6V3lkcFpDZGRMblpoYkhWbExGeHlYRzRnSUNBZ0lDQWdJQ0FnYldGeWEyVmtJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JeWNyYldWdWRVbGtJQ3NnSnlCc2FTNG5JQ3NnWTI5dVptbG5MbU4xYzNSdmJWTmxiR1ZqZEUxbGJuVkpkR1Z0VFdGeWEyVmtLU3hjY2x4dUlDQWdJQ0FnSUNBZ0lIUm9hWE5GYkdWdElEMGdaUzUwWVhKblpYUXVjR0Z5Wlc1MFRtOWtaVHRjY2x4dVhISmNiaUFnSUNCcFppaHRZWEpyWldRcGUxeHlYRzRnSUNBZ0lDQWdJSFYwYVd4ekxuSmxiVzkyWlVOc1lYTnpLRzFoY210bFpDd2dZMjl1Wm1sbkxtTjFjM1J2YlZObGJHVmpkRTFsYm5WSmRHVnRUV0Z5YTJWa0tUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lIVjBhV3h6TG1Ga1pFTnNZWE56S0hSb2FYTkZiR1Z0TENCamIyNW1hV2N1WTNWemRHOXRVMlZzWldOMFRXVnVkVWwwWlcxTllYSnJaV1FwTzF4eVhHNGdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwT3lBZ0lGeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUIxYm0xaGNtdE1hVzVyS0dVcGUxeHlYRzRnSUNBZ1kyOXVjM1FnZEdocGMwVnNaVzBnUFNCbExuUmhjbWRsZEM1d1lYSmxiblJPYjJSbE8xeHlYRzVjY2x4dUlDQWdJR2xtS0hSb2FYTkZiR1Z0S1h0Y2NseHVJQ0FnSUNBZ0lDQjFkR2xzY3k1eVpXMXZkbVZEYkdGemN5aDBhR2x6Uld4bGJTd2dZMjl1Wm1sbkxtTjFjM1J2YlZObGJHVmpkRTFsYm5WSmRHVnRUV0Z5YTJWa0tUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUc2dJQ0JjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1luVjBkRzl1UTJ4cFkyc29aU2w3WEhKY2JpQWdJQ0JqYjI1emRDQnRaVzUxSUQwZ1pTNTBZWEpuWlhRdWJtOWtaVTVoYldVdWRHOU1iM2RsY2tOaGMyVW9LU0E5UFQwZ0oyRW5JRDhnWlM1MFlYSm5aWFF1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuSURvZ1pTNTBZWEpuWlhRdWNHRnlaVzUwVG05a1pTNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtYzdYSEpjYmx4eVhHNGdJQ0FnZFhScGJITXVkSEpwWjJkbGNrVjJaVzUwS0cxbGJuVXNJQ2QwYjJkbmJHVW5LVHRjY2x4dUlDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsUW5WMGRHOXVTMlY1Wkc5M2JpaGxLWHRjY2x4dUlDQWdJR052Ym5OMElHSjFkSFJ2Ymtsa0lEMGdaUzUwWVhKblpYUXVZWFIwY21saWRYUmxjMXNuYVdRblhTNTJZV3gxWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJrTnZiblJ5YjJ3Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Njakp5QXJJR0oxZEhSdmJrbGtLU3hjY2x4dUlDQWdJQ0FnSUNBZ0lITmxiR1ZqZEVOdmJuUnliMnhKWkNBOUlHSjFkSFJ2Ymtsa0xuTjFZbk4wY2lnd0xDQmlkWFIwYjI1SlpDNXBibVJsZUU5bUtDZENkWFIwYjI0bktTa3NYSEpjYmlBZ0lDQWdJQ0FnSUNCelpXeGxZM1JEYjI1MGNtOXNJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JeWNnS3lCelpXeGxZM1JEYjI1MGNtOXNTV1FwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdiV1Z1ZFVsa0lEMGdjMlZzWldOMFEyOXVkSEp2YkVsa0lDc2dKMDFsYm5VbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnYzJWc1pXTjBaV1JKYm1SbGVDQTlJSE5sYkdWamRFTnZiblJ5YjJ3dWMyVnNaV04wWldSSmJtUmxlQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SVFpXeGxZM1JsWkV4cElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkl5Y2dLeUJ0Wlc1MVNXUWdLeUFuSUd4cElHRmJaR0YwWVMxcGJtUmxlRDFjSWljZ0t5QnpaV3hsWTNSbFpFbHVaR1Y0SUNzZ0oxd2lYU2NwTG5CaGNtVnVkRTV2WkdVN1hISmNibHh5WEc0Z0lDQWdjM2RwZEdOb0tHVXVhMlY1UTI5a1pTbDdYSEpjYmlBZ0lDQWdJQ0FnWTJGelpTQXhNenBjY2x4dUlDQWdJQ0FnSUNCallYTmxJRE15T2x4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NTBjbWxuWjJWeVJYWmxiblFvWW5WMGRHOXVRMjl1ZEhKdmJDd2dKMjF2ZFhObFpHOTNiaWNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzRnSUNBZ0lDQWdJR05oYzJVZ016YzZYSEpjYmlBZ0lDQWdJQ0FnWTJGelpTQXpPRHBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvWTNWeWNtVnVkRk5sYkdWamRHVmtUR2t1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5bDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NTBjbWxuWjJWeVJYWmxiblFvWTNWeWNtVnVkRk5sYkdWamRHVmtUR2t1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWphR2xzWkhKbGJsc3dYU3dnSjNObGJHVmpkQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hISmNiaUFnSUNBZ0lDQWdZMkZ6WlNBek9UcGNjbHh1SUNBZ0lDQWdJQ0JqWVhObElEUXdPbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhqZFhKeVpXNTBVMlZzWldOMFpXUk1hUzV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWNwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiSE11ZEhKcFoyZGxja1YyWlc1MEtHTjFjbkpsYm5SVFpXeGxZM1JsWkV4cExtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWphR2xzWkhKbGJsc3dYU3dnSjNObGJHVmpkQ2NwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2hoYm1Sc1pVMWxiblZMWlhsa2IzZHVLR1VwZTF4eVhHNGdJQ0FnWTI5dWMzUWdkR2hwYzBWc1pXMGdQU0JsTG5SaGNtZGxkQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SVFpXeGxZM1JsWkV4cElEMGdkR2hwYzBWc1pXMHVjR0Z5Wlc1MFRtOWtaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lHMWxiblZEYjI1MGNtOXNJRDBnWTNWeWNtVnVkRk5sYkdWamRHVmtUR2t1Y0dGeVpXNTBUbTlrWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJRzFsYm5WSlpDQTlJRzFsYm5WRGIyNTBjbTlzTG1GMGRISnBZblYwWlhOYkoybGtKMTB1ZG1Gc2RXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNCaWRYUjBiMjVKWkNBOUlHMWxiblZKWkM1emRXSnpkSElvTUN3Z2JXVnVkVWxrTG1sdVpHVjRUMllvSjAxbGJuVW5LU2tnS3lBblFuVjBkRzl1Snl4Y2NseHVJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJrTnZiblJ5YjJ3Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Njakp5QXJJR0oxZEhSdmJrbGtLVHRjY2x4dVhISmNiaUFnSUNCemQybDBZMmdvWlM1clpYbERiMlJsS1h0Y2NseHVJQ0FnSUNBZ0lDQmpZWE5sSURFek9seHlYRzRnSUNBZ0lDQWdJR05oYzJVZ016STZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIVjBhV3h6TG5SeWFXZG5aWEpGZG1WdWRDaDBhR2x6Uld4bGJTd2dKM05sYkdWamRDY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4eVhHNGdJQ0FnSUNBZ0lHTmhjMlVnTXpjNlhISmNiaUFnSUNBZ0lDQWdZMkZ6WlNBek9EcGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9ZM1Z5Y21WdWRGTmxiR1ZqZEdWa1RHa3VjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1WnlsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFUyVnNaV04wWldSTWFTNXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Ob2FXeGtjbVZ1V3pCZExtWnZZM1Z6S0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNBZ0lDQWdJQ0JqWVhObElETTVPbHh5WEc0Z0lDQWdJQ0FnSUdOaGMyVWdOREE2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0dOMWNuSmxiblJUWld4bFkzUmxaRXhwTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1WnlsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFUyVnNaV04wWldSTWFTNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMmhwYkdSeVpXNWJNRjB1Wm05amRYTW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4eVhHNGdJQ0FnSUNBZ0lHTmhjMlVnT1RwY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVkSEpwWjJkbGNrVjJaVzUwS0cxbGJuVkRiMjUwY205c0xDQW5hR2xrWlNjcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRYUjBiMjVEYjI1MGNtOXNMbVp2WTNWektDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHbHVhWFJEZFhOMGIyMVRaV3hsWTNRb1pXeGxiV1Z1ZEN3Z1kzVnpkRzl0UTI5dVptbG5LWHRjY2x4dUlDQWdJR052Ym5OMElITmxiR1ZqZEZObGJHVmpkRzl5Y3lBOUlHVnNaVzFsYm5RZ0ppWWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDaGxiR1Z0Wlc1MEtTQS9JR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29aV3hsYldWdWRDa2dPaUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2R6Wld4bFkzUW5LVHRjY2x4dVhISmNiaUFnSUNBdkwwTm9aV05yY3lCMGFHRjBJR052Ym1acFp5QmxlR2x6ZEN3Z2FXWWdaWGhwYzNSeklHRnVaQ0IwYUdWcGNpQndjbTl3WlhKMGFXVnpJR0Z5WlNCMllXeHBaQ0IwYUdVZ1kzVnpkRzl0SUdOdmJtWnBaeUJ2WW1wbFkzUWdiM1psY25keWFYUmxjeUJrWldaaGRXeDBJR052Ym1acFp5QnZZbXBsWTNSY2NseHVJQ0FnSUdsbUtHTjFjM1J2YlVOdmJtWnBaeUFtSmlCMWRHbHNjeTVwYzFSNWNHVlBaaWduVDJKcVpXTjBKeXdnWTNWemRHOXRRMjl1Wm1sbktTbDdYSEpjYmlBZ0lDQWdJQ0FnYzJWMFEyOXVabWxuS0dOMWMzUnZiVU52Ym1acFp5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZb2MyVnNaV04wVTJWc1pXTjBiM0p6S1h0Y2NseHVJQ0FnSUNBZ0lDQjFkR2xzY3k1bWIzSkZZV05vS0hObGJHVmpkRk5sYkdWamRHOXljeXdnWm5WdVkzUnBiMjRnS0dsdVpHVjRMQ0IyWVd4MVpTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnZEdocGMxTmxiR1ZqZENBOUlIWmhiSFZsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMU5sYkdWamRFbGtJRDBnZEdocGMxTmxiR1ZqZEM1blpYUkJkSFJ5YVdKMWRHVW9KMmxrSnlrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VEdGaVpXd2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDZHNZV0psYkZ0bWIzSTlYQ0luSzNSb2FYTlRaV3hsWTNSSlpDc25YQ0pkSnlrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibWwwYVdGc1UyVnNaV04wWldSSmJtUmxlQ0E5SUhSb2FYTlRaV3hsWTNRdWMyVnNaV04wWldSSmJtUmxlQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkR1ZrVDNCMGFXOXVWR1Y0ZENBOUlIUm9hWE5UWld4bFkzUXVZMmhwYkdSeVpXNWJhVzVwZEdsaGJGTmxiR1ZqZEdWa1NXNWtaWGhkTG5SbGVIUXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpZFhSMGIyNUpaQ0E5SUhSb2FYTlRaV3hsWTNSSlpDQXJJQ2RDZFhSMGIyNG5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldWdWRVbGtJRDBnZEdocGMxTmxiR1ZqZEVsa0lDc2dKMDFsYm5VbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblYwZEc5dUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbllTY3BMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1pXTjBUV1Z1ZFZOMFlYUjFjeUE5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KM053WVc0bktTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRFMWxiblZKWTI5dUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbmMzQmhiaWNwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtOXNaVlJsZUhRZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkemNHRnVKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdFpXNTFJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25kV3duS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZRM0psWVhSbElHSjFkSFJ2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NWhaR1JEYkdGemN5aGlkWFIwYjI0c0lHTnZibVpwWnk1amRYTjBiMjFUWld4bFkzUkNkWFIwYjI1RGJHRnpjeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJpNXpaWFJCZEhSeWFXSjFkR1VvSjJsa0p5d2dZblYwZEc5dVNXUXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkWFIwYjI0dWMyVjBRWFIwY21saWRYUmxLQ2R5YjJ4bEp5d2dKMkoxZEhSdmJpY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkWFIwYjI0dWMyVjBRWFIwY21saWRYUmxLQ2RvY21WbUp5d2dKeU1uS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVMbk5sZEVGMGRISnBZblYwWlNnbllYSnBZUzFvWVhOd2IzQjFjQ2NzSUNkMGNuVmxKeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJpNXpaWFJCZEhSeWFXSjFkR1VvSjJGeWFXRXRiM2R1Y3ljc0lHMWxiblZKWkNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdKMWRIUnZiaTVoY0hCbGJtUkRhR2xzWkNoelpXeGxZM1JOWlc1MVUzUmhkSFZ6S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVMbUZ3Y0dWdVpFTm9hV3hrS0hObGJHVmpkRTFsYm5WSlkyOXVLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZblYwZEc5dUxtRndjR1Z1WkVOb2FXeGtLSEp2YkdWVVpYaDBLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlUyVjBjeUJpZFhSMGIyNGdjM1JoZEhWeklHTnNZWE56SUdGdVpDQjBaWGgwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFYwYVd4ekxtRmtaRU5zWVhOektITmxiR1ZqZEUxbGJuVlRkR0YwZFhNc0lHTnZibVpwWnk1amRYTjBiMjFUWld4bFkzUlRkR0YwZFhORGJHRnpjeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRFMWxiblZUZEdGMGRYTXVkR1Y0ZEVOdmJuUmxiblFnUFNCelpXeGxZM1JsWkU5d2RHbHZibFJsZUhRN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMEZrWkNCamJHRnpjMlZ6SUhSdklHSjFkSFJ2YmlCcFkyOXVJR0Z1WkNCeWIyeGxJSFJsZUhSY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVZV1JrUTJ4aGMzTW9jMlZzWldOMFRXVnVkVWxqYjI0c0lHTnZibVpwWnk1amRYTjBiMjFUWld4bFkzUkpZMjl1UTJ4aGMzTXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkRiR0Z6Y3loeWIyeGxWR1Y0ZEN3Z1kyOXVabWxuTG1OMWMzUnZiVk5sYkdWamRGSnZiR1YwWlhoMFEyeGhjM01wTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OU5iM1psSUdGdUlHRjBkSEpwWW5WMFpTQjBZV0pwYm1SbGVDQm1jbTl0SUhObGJHVmpkQ0IwYnlCaWRYUjBiMjRzSUc5dWJIa2dhV1lnZEdocGN5QmhkSFJ5YVdKMWRHVWdaWGhwYzNSelhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUm9hWE5UWld4bFkzUXVaMlYwUVhSMGNtbGlkWFJsS0NkMFlXSnBibVJsZUNjcEtYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJpNXpaWFJCZEhSeWFXSjFkR1VvSjNSaFltbHVaR1Y0Snl3Z2RHaHBjMU5sYkdWamRDNW5aWFJCZEhSeWFXSjFkR1VvSjNSaFltbHVaR1Y0SnlrcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMGx1YzJWeWRDQmlkWFIwYjI0Z1lXWjBaWElnYzJWc1pXTjBJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1cGJuTmxjblJCWm5SbGNpaGlkWFIwYjI0c0lIUm9hWE5UWld4bFkzUXBPMXh5WEc1Y2NseHVYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDBOeVpXRjBaU0J0Wlc1MUlHVnNaVzFsYm5SY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVZV1JrUTJ4aGMzTW9iV1Z1ZFN3Z1kyOXVabWxuTG1OMWMzUnZiVk5sYkdWamRFMWxiblZEYkdGemN5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWxiblV1YzJWMFFYUjBjbWxpZFhSbEtDZHBaQ2NzSUcxbGJuVkpaQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzFsYm5VdWMyVjBRWFIwY21saWRYUmxLQ2R5YjJ4bEp5d2dKMnhwYzNSaWIzZ25LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiV1Z1ZFM1elpYUkJkSFJ5YVdKMWRHVW9KMkZ5YVdFdGFHbGtaR1Z1Snl3Z0ozUnlkV1VuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYldWdWRTNXpaWFJCZEhSeWFXSjFkR1VvSjJGeWFXRXRiR0ZpWld4c1pXUmllU2NzSUdKMWRIUnZia2xrS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZRM0psWVhSbElHMWxiblVnWld4bGJXVnVkQ0JqYUdsc1pISmxibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1bWIzSkZZV05vS0hSb2FYTlRaV3hsWTNRdVkyaHBiR1J5Wlc0c0lHWjFibU4wYVc5dUtHbHVaR1Y0TENCMllXeDFaU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhWFJsYlNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJ4cEp5a3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHbHVheUE5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMkVuS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzYVc1ckxuTmxkRUYwZEhKcFluVjBaU2duYUhKbFppY3NJQ2NqSnlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNhVzVyTG5ObGRFRjBkSEpwWW5WMFpTZ25kR0ZpYVc1a1pYZ25MQ0FuTFRFbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hwYm1zdWMyVjBRWFIwY21saWRYUmxLQ2R5YjJ4bEp5d2dKMjl3ZEdsdmJpY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdsdWF5NXpaWFJCZEhSeWFXSjFkR1VvSjJGeWFXRXRjMlZzWldOMFpXUW5MQ0FuWm1Gc2MyVW5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4cGJtc3VjMlYwUVhSMGNtbGlkWFJsS0Nka1lYUmhMV2x1WkdWNEp5d2dhVzVrWlhncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR2x1YXk1MFpYaDBRMjl1ZEdWdWRDQTlJSFpoYkhWbExuUmxlSFJEYjI1MFpXNTBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbDBaVzB1WVhCd1pXNWtRMmhwYkdRb2JHbHVheWs3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvYVc1a1pYZ2dQVDA5SUdsdWFYUnBZV3hUWld4bFkzUmxaRWx1WkdWNEtYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVoWkdSRGJHRnpjeWhwZEdWdExDQmpiMjVtYVdjdVkzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVsMFpXMVRaV3hsWTNSbFpDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FYUmxiUzV6WlhSQmRIUnlhV0oxZEdVb0oyRnlhV0V0YzJWc1pXTjBaV1FuTENBbmRISjFaU2NwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV1Z1ZFM1aGNIQmxibVJEYUdsc1pDaHBkR1Z0S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMGx1YzJWeWRDQnRaVzUxSUdGbWRHVnlJR0oxZEhSdmJseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVwYm5ObGNuUkJablJsY2lodFpXNTFMQ0JpZFhSMGIyNHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkRiR0Z6Y3lodFpXNTFMQ0JqYjI1bWFXY3VZM1Z6ZEc5dFUyVnNaV04wVFdWdWRVaHBaR1JsYmtOc1lYTnpLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlUyVjBJSEp2YkdVZ1lYQndiR2xqWVhScGIyNGdkRzhnWW05a2VTQm1iM0lnWlhoMFpXNWtaV1FnZG1WeWMybHZiaUJ2WmlCelpXeGxZM1FnWTI5dWRISnZiRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NkaWIyUjVKeWt1YzJWMFFYUjBjbWxpZFhSbEtDZHliMnhsSnl3Z0oyRndjR3hwWTJGMGFXOXVKeWs3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdiV1Z1ZFU5d2RHbHZibk1nUFNCYlhUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFYwYVd4ekxtWnZja1ZoWTJnb2JXVnVkUzVqYUdsc1pISmxiaXdnWm5WdVkzUnBiMjRvYVc1a1pYZ3NJSFpoYkhWbEtYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCc2FXNXJJRDBnZG1Gc2RXVXVZMmhwYkdST2IyUmxjMXN3WFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LR3hwYm1zcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUcxbGJuVlBjSFJwYjI1ekxuQjFjMmdvYkdsdWF5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiSE11WVdSa1JYWmxiblFvYkdsdWF5d2dKMk5zYVdOckp5d2dZMnhwWTJ0TWFXNXJLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkZkbVZ1ZENoc2FXNXJMQ0FuYzJWc1pXTjBKeXdnYzJWc1pXTjBSV3hsYldWdWRDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiSE11WVdSa1JYWmxiblFvYkdsdWF5d2dKMjF2ZFhObGIzWmxjaWNzSUcxaGNtdE1hVzVyS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NWhaR1JGZG1WdWRDaHNhVzVyTENBblptOWpkWE1uTENCdFlYSnJUR2x1YXlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVZV1JrUlhabGJuUW9iR2x1YXl3Z0oyMXZkWE5sYjNWMEp5d2dkVzV0WVhKclRHbHVheWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdVlXUmtSWFpsYm5Rb2JHbHVheXdnSjJKc2RYSW5MQ0IxYm0xaGNtdE1hVzVyS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDBKcGJtUWdibTl1YzNSaGJtUmhjbVFnWlhabGJuUnpYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIVjBhV3h6TG1Ga1pFVjJaVzUwS0cxbGJuVXNJQ2R6YUc5M0p5d2djMmh2ZDAxbGJuVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkZkbVZ1ZENodFpXNTFMQ0FuYUdsa1pTY3NJR2hwWkdWTlpXNTFLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdVlXUmtSWFpsYm5Rb2JXVnVkU3dnSjNSdloyZHNaU2NzSUhSdloyZHNaVTFsYm5VcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVoWkdSRmRtVnVkQ2h0Wlc1MUxDQW5hMlY1Wkc5M2JpY3NJR2hoYm1Sc1pVMWxiblZMWlhsa2IzZHVLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdVlXUmtSWFpsYm5Rb1luVjBkRzl1TENBbmJXOTFjMlZrYjNkdUp5d2dZblYwZEc5dVEyeHBZMnNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NWhaR1JGZG1WdWRDaGlkWFIwYjI0c0lDZGpiR2xqYXljc0lHWjFibU4wYVc5dUtHVXBlMlV1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHQ5S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVZV1JrUlhabGJuUW9ZblYwZEc5dUxDQW5hMlY1Wkc5M2JpY3NJR2hoYm1Sc1pVSjFkSFJ2Ymt0bGVXUnZkMjRwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NWhaR1JEYkdGemN5aDBhR2x6VTJWc1pXTjBMQ0JqYjI1bWFXY3VjMlZzWldOMFNHbGtaR1Z1UTJ4aGMzTXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VTJWc1pXTjBMbk5sZEVGMGRISnBZblYwWlNnbllYSnBZUzFvYVdSa1pXNG5MQ0IwY25WbEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMU5sYkdWamRDNXpaWFJCZEhSeWFXSjFkR1VvSjNSaFltbHVaR1Y0Snl3Z0p5MHhKeWs3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwwSnBibVFnWVNCc1lXSmxiQ0J2WmlCelpXeGxZM1FnZDJsMGFDQnVaWGNnWW5WMGRHOXVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE5NWVdKbGJDNXpaWFJCZEhSeWFXSjFkR1VvSjJadmNpY3NJR0oxZEhSdmJrbGtLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdVlXUmtSWFpsYm5Rb2RHaHBjMHhoWW1Wc0xDQW5ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpZ3BlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVMbVp2WTNWektDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2TDBocFpHVWdiV1Z1ZFNCaFpuUmxjaUJqYkdsamF5QnZkWFJ6YVdSbElIUm9aU0JpZFhSMGIyNWNjbHh1SUNBZ0lDQWdJQ0IxZEdsc2N5NWhaR1JGZG1WdWRDaGtiMk4xYldWdWRDd2dKMk5zYVdOckp5d2dablZ1WTNScGIyNG9aU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1luVjBkRzl1SUQwZ1pTNTBZWEpuWlhRdWJtOWtaVTVoYldVdWRHOU1iMk5oYkdWTWIzZGxja05oYzJVb0tTQTlQVDBnSjJFbklEOGdaUzUwWVhKblpYUWdPaUJsTG5SaGNtZGxkQzV3WVhKbGJuUk9iMlJsTENCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiM0JsYm1Wa1RXVnVkU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTRuS3lCamIyNW1hV2N1WTNWemRHOXRVMlZzWldOMFFuVjBkRzl1VDNCbGJrTnNZWE56SUNzZ0p5c2dMaWNnS3lCamIyNW1hV2N1WTNWemRHOXRVMlZzWldOMFRXVnVkVU5zWVhOektUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0NGMWRHbHNjeTVvWVhORGJHRnpjeWhpZFhSMGIyNHNJR052Ym1acFp5NWpkWE4wYjIxVFpXeGxZM1JDZFhSMGIyNURiR0Z6Y3lrZ0ppWWdiM0JsYm1Wa1RXVnVkU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTUwY21sbloyVnlSWFpsYm5Rb2IzQmxibVZrVFdWdWRTd2dKMmhwWkdVbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ2V5QnBibWwwUTNWemRHOXRVMlZzWldOMElHRnpJR2x1YVhRc0lITmxkRU52Ym1acFp5QmhjeUJqYjI1bWFXY2dmVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOURPaTlRY205cVpXTjBjeTlRY21sMllYUmxMMWRYUTBndlZHRnphekV2YzNKakwycHpMMjF2WkhWc1pYTXZZM1Z6ZEc5dFUyVnNaV04wTG1weklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0ifQ==
