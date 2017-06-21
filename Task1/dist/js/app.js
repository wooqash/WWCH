<<<<<<< HEAD
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
	
	var _customCheckbox = __webpack_require__(2);
	
	var customCheckbox = _interopRequireWildcard(_customCheckbox);
	
	var _customSelect = __webpack_require__(4);
	
	var customSelect = _interopRequireWildcard(_customSelect);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	(function () {
	  customCheckbox.init();
	  customSelect.init();
	})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = undefined;
	
	var _utils = __webpack_require__(3);
	
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.config = exports.init = undefined;
	
	var _utils = __webpack_require__(3);
	
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjFmMjZhZWEwM2U4MWQ3NGVkYWIiLCJ3ZWJwYWNrOi8vLy4vQzovUHJvamVjdHMvUHJpdmF0ZS9XV0NIL3Rhc2sxL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQzovUHJvamVjdHMvUHJpdmF0ZS9XV0NIL3Rhc2sxL3NyYy9qcy9tb2R1bGVzL2N1c3RvbUNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL0M6L1Byb2plY3RzL1ByaXZhdGUvV1dDSC90YXNrMS9zcmMvanMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9DOi9Qcm9qZWN0cy9Qcml2YXRlL1dXQ0gvdGFzazEvc3JjL2pzL21vZHVsZXMvY3VzdG9tU2VsZWN0LmpzIl0sIm5hbWVzIjpbImN1c3RvbUNoZWNrYm94IiwiY3VzdG9tU2VsZWN0IiwiaW5pdCIsInV0aWxzIiwiY2hlY2tpbmciLCJlIiwibGFiZWwiLCJ0YXJnZXQiLCJub2RlTmFtZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwicGFyZW50Tm9kZSIsImNoZWNrYm94IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImNoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUtleXMiLCJrZXlDb2RlIiwiaW5pdENoZWNrYm94ZXMiLCJlbGVtZW50IiwiY2hlY2tib3hlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbmRleCIsInZhbHVlIiwidGhpc0NoZWNrYm94IiwidGhpc0xhYmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWRkRXZlbnQiLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJpIiwibGVuZ3RoIiwiY2FsbCIsImluc2VydEFmdGVyIiwiZWwiLCJyZWZlcmVuY2VOb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJjbGFzc2VzIiwic3BsaXQiLCJleGlzdGluZ0luZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJqb2luIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsIlJlZ0V4cCIsInRlc3QiLCJ3cmFwVGFnIiwidG9XcmFwIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImV2ZW50TmFtZSIsImV2ZW50SGFuZGxlciIsImV2ZW50Q2FwdHVyZSIsIm9sZEV2ZW50TmFtZSIsInVzZUNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudFR5cGUiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUV2ZW50T2JqZWN0IiwiZmlyZUV2ZW50IiwiaXNUeXBlT2YiLCJ0eXBlIiwib2JqIiwiY2xhcyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJjb25maWciLCJzZWxlY3RIaWRkZW5DbGFzcyIsImN1c3RvbVNlbGVjdEJ1dHRvbkNsYXNzIiwiY3VzdG9tU2VsZWN0QnV0dG9uT3BlbkNsYXNzIiwiY3VzdG9tU2VsZWN0U3RhdHVzQ2xhc3MiLCJjdXN0b21TZWxlY3RJY29uQ2xhc3MiLCJjdXN0b21TZWxlY3RSb2xldGV4dENsYXNzIiwiY3VzdG9tU2VsZWN0TWVudUNsYXNzIiwiY3VzdG9tU2VsZWN0TWVudUhpZGRlbkNsYXNzIiwiY3VzdG9tU2VsZWN0TWVudUl0ZW0iLCJjdXN0b21TZWxlY3RNZW51SXRlbVNlbGVjdGVkIiwiY3VzdG9tU2VsZWN0TWVudUl0ZW1NYXJrZWQiLCJyb2xlVGV4dCIsInNldENvbmZpZyIsImN1c3RvbUNvbmZpZyIsIm5ld0NvbmZpZyIsImtleSIsImhhc093blByb3BlcnR5IiwiYXNzaWduIiwic2hvd01lbnUiLCJtZW51SWQiLCJhdHRyaWJ1dGVzIiwibWVudUNvbnRyb2wiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uSWQiLCJzdWJzdHIiLCJidXR0b25Db250cm9sIiwic2VsZWN0ZWRJdGVtIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJoaWRlTWVudSIsInRvZ2dsZU1lbnUiLCJkaXNwbGF5Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImN1cnJlbnRTdHlsZSIsInNlbGVjdEVsZW1lbnQiLCJzZWxlY3RDb250cm9sSWQiLCJzZWxlY3RDb250cm9sIiwiYnV0dG9uQ29udHJvbElkIiwic2VsZWN0ZWQiLCJidXR0b25TdGF0dXMiLCJ0aGlzRWxlbSIsInRleHRDb250ZW50Iiwic2VsZWN0ZWRJbmRleCIsImNsaWNrTGluayIsIm1hcmtMaW5rIiwibWFya2VkIiwidW5tYXJrTGluayIsImJ1dHRvbkNsaWNrIiwibWVudSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlQnV0dG9uS2V5ZG93biIsImN1cnJlbnRTZWxlY3RlZExpIiwiY2hpbGRyZW4iLCJoYW5kbGVNZW51S2V5ZG93biIsImluaXRDdXN0b21TZWxlY3QiLCJzZWxlY3RTZWxlY3RvcnMiLCJ0aGlzU2VsZWN0IiwidGhpc1NlbGVjdElkIiwiZ2V0QXR0cmlidXRlIiwiaW5pdGlhbFNlbGVjdGVkSW5kZXgiLCJzZWxlY3RlZE9wdGlvblRleHQiLCJ0ZXh0IiwiYnV0dG9uIiwic2VsZWN0TWVudVN0YXR1cyIsInNlbGVjdE1lbnVJY29uIiwiaXRlbSIsImxpbmsiLCJtZW51T3B0aW9ucyIsImNoaWxkTm9kZXMiLCJvcGVuZWRNZW51Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FB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YXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIiwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ1pqRm1NalpoWldFd00yVTRNV1EzTkdWa1lXSWlMQ0ozWldKd1lXTnJPaTh2THk0dlF6b3ZVSEp2YW1WamRITXZVSEpwZG1GMFpTOVhWME5JTDNSaGMyc3hMM055WXk5cWN5OWhjSEF1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2UXpvdlVISnZhbVZqZEhNdlVISnBkbUYwWlM5WFYwTklMM1JoYzJzeEwzTnlZeTlxY3k5dGIyUjFiR1Z6TDJOMWMzUnZiVU5vWldOclltOTRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMME02TDFCeWIycGxZM1J6TDFCeWFYWmhkR1V2VjFkRFNDOTBZWE5yTVM5emNtTXZhbk12Ylc5a2RXeGxjeTkxZEdsc2N5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOURPaTlRY205cVpXTjBjeTlRY21sMllYUmxMMWRYUTBndmRHRnphekV2YzNKakwycHpMMjF2WkhWc1pYTXZZM1Z6ZEc5dFUyVnNaV04wTG1weklsMHNJbTVoYldWeklqcGJJbU4xYzNSdmJVTm9aV05yWW05NElpd2lZM1Z6ZEc5dFUyVnNaV04wSWl3aWFXNXBkQ0lzSW5WMGFXeHpJaXdpWTJobFkydHBibWNpTENKbElpd2liR0ZpWld3aUxDSjBZWEpuWlhRaUxDSnViMlJsVG1GdFpTSXNJblJ2VEc5allXeGxURzkzWlhKRFlYTmxJaXdpY0dGeVpXNTBUbTlrWlNJc0ltTm9aV05yWW05NElpd2ljSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1WnlJc0ltTm9aV05yWldRaUxDSndjbVYyWlc1MFJHVm1ZWFZzZENJc0ltaGhibVJzWlV0bGVYTWlMQ0pyWlhsRGIyUmxJaXdpYVc1cGRFTm9aV05yWW05NFpYTWlMQ0psYkdWdFpXNTBJaXdpWTJobFkydGliM2hsY3lJc0ltUnZZM1Z0Wlc1MElpd2ljWFZsY25sVFpXeGxZM1J2Y2tGc2JDSXNJbVp2Y2tWaFkyZ2lMQ0pwYm1SbGVDSXNJblpoYkhWbElpd2lkR2hwYzBOb1pXTnJZbTk0SWl3aWRHaHBjMHhoWW1Wc0lpd2libVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5JaXdpWVdSa1JYWmxiblFpTENKaGNuSmhlU0lzSW1OaGJHeGlZV05ySWl3aWMyTnZjR1VpTENKcElpd2liR1Z1WjNSb0lpd2lZMkZzYkNJc0ltbHVjMlZ5ZEVGbWRHVnlJaXdpWld3aUxDSnlaV1psY21WdVkyVk9iMlJsSWl3aWFXNXpaWEowUW1WbWIzSmxJaXdpYm1WNGRGTnBZbXhwYm1jaUxDSmhaR1JEYkdGemN5SXNJbU5zWVhOelRtRnRaU0lzSW1Oc1lYTnpUR2x6ZENJc0ltRmtaQ0lzSW5KbGJXOTJaVU5zWVhOeklpd2ljbVZ0YjNabElpd2lkRzluWjJ4bFEyeGhjM01pTENKMGIyZG5iR1VpTENKamJHRnpjMlZ6SWl3aWMzQnNhWFFpTENKbGVHbHpkR2x1WjBsdVpHVjRJaXdpYVc1a1pYaFBaaUlzSW5Od2JHbGpaU0lzSW5CMWMyZ2lMQ0pxYjJsdUlpd2lhR0Z6UTJ4aGMzTWlMQ0pqYjI1MFlXbHVjeUlzSWxKbFowVjRjQ0lzSW5SbGMzUWlMQ0ozY21Gd1ZHRm5JaXdpZEc5WGNtRndJaXdpZDNKaGNIQmxjaUlzSW1OeVpXRjBaVVZzWlcxbGJuUWlMQ0poY0hCbGJtUkRhR2xzWkNJc0ltVjJaVzUwVG1GdFpTSXNJbVYyWlc1MFNHRnVaR3hsY2lJc0ltVjJaVzUwUTJGd2RIVnlaU0lzSW05c1pFVjJaVzUwVG1GdFpTSXNJblZ6WlVOaGNIUjFjbVVpTENKaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aVlYUjBZV05vUlhabGJuUWlMQ0owY21sbloyVnlSWFpsYm5RaUxDSmxkbVZ1ZEZSNWNHVWlMQ0psZG1WdWRDSXNJbU55WldGMFpVVjJaVzUwSWl3aWFXNXBkRVYyWlc1MElpd2laR2x6Y0dGMFkyaEZkbVZ1ZENJc0ltTnlaV0YwWlVWMlpXNTBUMkpxWldOMElpd2labWx5WlVWMlpXNTBJaXdpYVhOVWVYQmxUMllpTENKMGVYQmxJaXdpYjJKcUlpd2lZMnhoY3lJc0lrOWlhbVZqZENJc0luQnliM1J2ZEhsd1pTSXNJblJ2VTNSeWFXNW5JaXdpYzJ4cFkyVWlMQ0oxYm1SbFptbHVaV1FpTENKamIyNW1hV2NpTENKelpXeGxZM1JJYVdSa1pXNURiR0Z6Y3lJc0ltTjFjM1J2YlZObGJHVmpkRUoxZEhSdmJrTnNZWE56SWl3aVkzVnpkRzl0VTJWc1pXTjBRblYwZEc5dVQzQmxia05zWVhOeklpd2lZM1Z6ZEc5dFUyVnNaV04wVTNSaGRIVnpRMnhoYzNNaUxDSmpkWE4wYjIxVFpXeGxZM1JKWTI5dVEyeGhjM01pTENKamRYTjBiMjFUWld4bFkzUlNiMnhsZEdWNGRFTnNZWE56SWl3aVkzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVOc1lYTnpJaXdpWTNWemRHOXRVMlZzWldOMFRXVnVkVWhwWkdSbGJrTnNZWE56SWl3aVkzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVsMFpXMGlMQ0pqZFhOMGIyMVRaV3hsWTNSTlpXNTFTWFJsYlZObGJHVmpkR1ZrSWl3aVkzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVsMFpXMU5ZWEpyWldRaUxDSnliMnhsVkdWNGRDSXNJbk5sZEVOdmJtWnBaeUlzSW1OMWMzUnZiVU52Ym1acFp5SXNJbTVsZDBOdmJtWnBaeUlzSW10bGVTSXNJbWhoYzA5M2JsQnliM0JsY25SNUlpd2lZWE56YVdkdUlpd2ljMmh2ZDAxbGJuVWlMQ0p0Wlc1MVNXUWlMQ0poZEhSeWFXSjFkR1Z6SWl3aWJXVnVkVU52Ym5SeWIyd2lMQ0p4ZFdWeWVWTmxiR1ZqZEc5eUlpd2lZblYwZEc5dVNXUWlMQ0p6ZFdKemRISWlMQ0ppZFhSMGIyNURiMjUwY205c0lpd2ljMlZzWldOMFpXUkpkR1Z0SWl3aWMyVjBRWFIwY21saWRYUmxJaXdpWm05amRYTWlMQ0pvYVdSbFRXVnVkU0lzSW5SdloyZHNaVTFsYm5VaUxDSmthWE53YkdGNUlpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbU4xY25KbGJuUlRkSGxzWlNJc0luTmxiR1ZqZEVWc1pXMWxiblFpTENKelpXeGxZM1JEYjI1MGNtOXNTV1FpTENKelpXeGxZM1JEYjI1MGNtOXNJaXdpWW5WMGRHOXVRMjl1ZEhKdmJFbGtJaXdpYzJWc1pXTjBaV1FpTENKaWRYUjBiMjVUZEdGMGRYTWlMQ0owYUdselJXeGxiU0lzSW5SbGVIUkRiMjUwWlc1MElpd2ljMlZzWldOMFpXUkpibVJsZUNJc0ltTnNhV05yVEdsdWF5SXNJbTFoY210TWFXNXJJaXdpYldGeWEyVmtJaXdpZFc1dFlYSnJUR2x1YXlJc0ltSjFkSFJ2YmtOc2FXTnJJaXdpYldWdWRTSXNJblJ2VEc5M1pYSkRZWE5sSWl3aWFHRnVaR3hsUW5WMGRHOXVTMlY1Wkc5M2JpSXNJbU4xY25KbGJuUlRaV3hsWTNSbFpFeHBJaXdpWTJocGJHUnlaVzRpTENKb1lXNWtiR1ZOWlc1MVMyVjVaRzkzYmlJc0ltbHVhWFJEZFhOMGIyMVRaV3hsWTNRaUxDSnpaV3hsWTNSVFpXeGxZM1J2Y25NaUxDSjBhR2x6VTJWc1pXTjBJaXdpZEdocGMxTmxiR1ZqZEVsa0lpd2laMlYwUVhSMGNtbGlkWFJsSWl3aWFXNXBkR2xoYkZObGJHVmpkR1ZrU1c1a1pYZ2lMQ0p6Wld4bFkzUmxaRTl3ZEdsdmJsUmxlSFFpTENKMFpYaDBJaXdpWW5WMGRHOXVJaXdpYzJWc1pXTjBUV1Z1ZFZOMFlYUjFjeUlzSW5ObGJHVmpkRTFsYm5WSlkyOXVJaXdpYVhSbGJTSXNJbXhwYm1zaUxDSnRaVzUxVDNCMGFXOXVjeUlzSW1Ob2FXeGtUbTlrWlhNaUxDSnZjR1Z1WldSTlpXNTFJbDBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2RVSkJRV1U3UVVGRFpqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN1FVTjBRMEU3TzBGQlJVRTdPMHRCUVZsQkxHTTdPMEZCUTFvN08wdEJRVmxETEZrN096czdRVUZGV0N4alFVRlZPMEZCUTFSRUxHdENRVUZsUlN4SlFVRm1PMEZCUTBWRUxHZENRVUZoUXl4SlFVRmlPMEZCUTBnc1JVRklRU3hIUVVGRUxFTTdPenM3T3p0QlEweEJPenM3T3pzN08wRkJSVUU3TzB0QlFWbERMRXM3T3pzN1FVRkZXaXhWUVVGVFF5eFJRVUZVTEVOQlFXdENReXhEUVVGc1FpeEZRVUZ2UWp0QlFVTm9RaXhUUVVGTlF5eFJRVUZSUkN4RlFVRkZSU3hOUVVGR0xFTkJRVk5ETEZGQlFWUXNRMEZCYTBKRExHbENRVUZzUWl4UFFVRXdReXhQUVVFeFF5eEhRVUZ2UkVvc1JVRkJSVVVzVFVGQmRFUXNSMEZCSzBSR0xFVkJRVVZGTEUxQlFVWXNRMEZCVTBjc1ZVRkJkRVk3UVVGQlFTeFRRVU5OUXl4WFFVRlhUQ3hOUVVGTlRTeHpRa0ZFZGtJN08wRkJSMEVzVTBGQlJ5eERRVUZEUkN4VFFVRlRSU3hQUVVGaUxFVkJRWEZDTzBGQlEycENSaXhyUWtGQlUwVXNUMEZCVkN4SFFVRnRRaXhKUVVGdVFqdEJRVU5JTEUxQlJrUXNUVUZIU1R0QlFVTkJSaXhyUWtGQlUwVXNUMEZCVkN4SFFVRnRRaXhMUVVGdVFqdEJRVU5JT3p0QlFVVkVVaXhQUVVGRlV5eGpRVUZHTzBGQlEwZzdPMEZCUlVRc1ZVRkJVME1zVlVGQlZDeERRVUZ2UWxZc1EwRkJjRUlzUlVGQmMwSTdRVUZEYkVJc1UwRkJSMEVzUlVGQlJWY3NUMEZCUml4TFFVRmpMRVZCUVdRc1NVRkJiMEpZTEVWQlFVVlhMRTlCUVVZc1MwRkJZeXhGUVVGeVF5eEZRVUYzUXp0QlFVTndReXhoUVVGSFdDeEZRVUZGUlN4TlFVRkdMRU5CUVZOTkxFOUJRVm9zUlVGQmIwSTdRVUZEYWtKU0xHVkJRVVZGTEUxQlFVWXNRMEZCVTAwc1QwRkJWQ3hIUVVGdFFpeExRVUZ1UWp0QlFVTkdMRlZCUmtRc1RVRkhTVHRCUVVOQlVpeGxRVUZGUlN4TlFVRkdMRU5CUVZOTkxFOUJRVlFzUjBGQmJVSXNTVUZCYmtJN1FVRkRTRHRCUVVOS08wRkJRMG83TzBGQlJVUXNWVUZCVTBrc1kwRkJWQ3hEUVVGM1FrTXNUMEZCZUVJc1JVRkJaME03UVVGRE5VSXNVMEZCU1VNc1lVRkJZVVFzVjBGQlYwVXNVMEZCVTBNc1owSkJRVlFzUTBGQk1FSklMRTlCUVRGQ0xFTkJRVmdzUjBGQlowUkZMRk5CUVZORExHZENRVUZVTEVOQlFUQkNTQ3hQUVVFeFFpeERRVUZvUkN4SFFVRnhSa1VzVTBGQlUwTXNaMEpCUVZRc1EwRkJNRUlzZDBKQlFURkNMRU5CUVhSSE96dEJRVVZCYkVJc1YwRkJUVzFDTEU5QlFVNHNRMEZCWTBnc1ZVRkJaQ3hGUVVFd1FpeFZRVUZWU1N4TFFVRldMRVZCUVdsQ1F5eExRVUZxUWl4RlFVRjNRanRCUVVNNVF5eGhRVUZKUXl4bFFVRmxSQ3hMUVVGdVFqdEJRVUZCTEdGQlEwbEZMRmxCUVZsR0xFMUJRVTFITEd0Q1FVUjBRanM3UVVGSFFYaENMR1ZCUVUxNVFpeFJRVUZPTEVOQlFXVklMRmxCUVdZc1JVRkJOa0lzVTBGQk4wSXNSVUZCZDBOV0xGVkJRWGhETzBGQlEwRmFMR1ZCUVUxNVFpeFJRVUZPTEVOQlFXVkdMRk5CUVdZc1JVRkJNRUlzVDBGQk1VSXNSVUZCYlVOMFFpeFJRVUZ1UXp0QlFVTklMRTFCVGtRN1FVRlBTRHM3VTBGRmVVSkdMRWtzUjBGQmJFSmxMR003T3pzN096dEJRM3BEVWpzN096czdRVUZGUVN4VlFVRlRTeXhQUVVGVUxFTkJRV2xDVHl4TFFVRnFRaXhGUVVGM1FrTXNVVUZCZUVJc1JVRkJhME5ETEV0QlFXeERMRVZCUVhsRE8wRkJRMnBETEZWQlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpTQ3hOUVVGTlNTeE5RVUV4UWl4RlFVRnJRMFFzUjBGQmJFTXNSVUZCZFVNN1FVRkRia05HTEd0Q1FVRlRTU3hKUVVGVUxFTkJRV05JTEV0QlFXUXNSVUZCY1VKRExFTkJRWEpDTEVWQlFYZENTQ3hOUVVGTlJ5eERRVUZPTEVOQlFYaENMRVZCUkcxRExFTkJRMEU3UVVGRGRFTTdRVUZEU2pzN1FVRkZUQ3hWUVVGVFJ5eFhRVUZVTEVOQlFYRkNReXhGUVVGeVFpeEZRVUY1UWtNc1lVRkJla0lzUlVGQmQwTTdRVUZEYUVOQkxHMUNRVUZqTTBJc1ZVRkJaQ3hEUVVGNVFqUkNMRmxCUVhwQ0xFTkJRWE5EUml4RlFVRjBReXhGUVVFd1EwTXNZMEZCWTBVc1YwRkJlRVE3UVVGRFNEczdRVUZGVEN4VlFVRlRReXhSUVVGVUxFTkJRV3RDU2l4RlFVRnNRaXhGUVVGelFrc3NVMEZCZEVJc1JVRkJhVU03UVVGRGVrSXNVMEZCU1V3c1IwRkJSMDBzVTBGQlVDeEZRVUZyUWp0QlFVTmtUaXhaUVVGSFRTeFRRVUZJTEVOQlFXRkRMRWRCUVdJc1EwRkJhVUpHTEZOQlFXcENPMEZCUTBnc1RVRkdSQ3hOUVVWUE8wRkJRMGhNTEZsQlFVZExMRk5CUVVnc1NVRkJaMElzVFVGQlRVRXNVMEZCZEVJN1FVRkRTRHRCUVVOS096dEJRVVZNTEZWQlFWTkhMRmRCUVZRc1EwRkJjVUpTTEVWQlFYSkNMRVZCUVhsQ1N5eFRRVUY2UWl4RlFVRnZRenRCUVVNMVFpeFRRVUZKVEN4SFFVRkhUU3hUUVVGUUxFVkJRV3RDTzBGQlEyUk9MRmxCUVVkTkxGTkJRVWdzUTBGQllVY3NUVUZCWWl4RFFVRnZRa29zVTBGQmNFSTdRVUZEU0N4TlFVWkVMRTFCUlU4N1FVRkRTRXdzV1VGQlIwc3NVMEZCU0N4SlFVRm5RaXhIUVVGb1FqdEJRVU5JTzBGQlEwbzdPMEZCUlV3c1ZVRkJVMHNzVjBGQlZDeERRVUZ4UWxZc1JVRkJja0lzUlVGQmVVSkxMRk5CUVhwQ0xFVkJRVzFETzBGQlF6TkNMRk5CUVVsTUxFZEJRVWROTEZOQlFWQXNSVUZCYTBJN1FVRkRhRUpPTEZsQlFVZE5MRk5CUVVnc1EwRkJZVXNzVFVGQllpeERRVUZ2UWs0c1UwRkJjRUk3UVVGRFJDeE5RVVpFTEUxQlJVODdRVUZEVEN4aFFVRkpUeXhWUVVGVldpeEhRVUZIU3l4VFFVRklMRU5CUVdGUkxFdEJRV0lzUTBGQmJVSXNSMEZCYmtJc1EwRkJaRHRCUVVOQkxHRkJRVWxETEdkQ1FVRm5Ra1lzVVVGQlVVY3NUMEZCVWl4RFFVRm5RbFlzVTBGQmFFSXNRMEZCY0VJN08wRkJSVUVzWVVGQlNWTXNhVUpCUVdsQ0xFTkJRWEpDTEVWQlEwVkdMRkZCUVZGSkxFMUJRVklzUTBGQlpVWXNZVUZCWml4RlFVRTRRaXhEUVVFNVFpeEZRVVJHTEV0QlIwVkdMRkZCUVZGTExFbEJRVklzUTBGQllWb3NVMEZCWWpzN1FVRkZSa3dzV1VGQlIwc3NVMEZCU0N4SFFVRmxUeXhSUVVGUlRTeEpRVUZTTEVOQlFXRXNSMEZCWWl4RFFVRm1PMEZCUTBRN1FVRkRTanM3UVVGRlRDeFZRVUZUUXl4UlFVRlVMRU5CUVd0Q2JrSXNSVUZCYkVJc1JVRkJjMEpMTEZOQlFYUkNMRVZCUVdkRE8wRkJRM2hDTEZOQlFVbE1MRWRCUVVkTkxGTkJRVkFzUlVGQmFVSTdRVUZEWWl4aFFVRkhUaXhIUVVGSFRTeFRRVUZJTEVOQlFXRmpMRkZCUVdJc1EwRkJjMEptTEZOQlFYUkNMRU5CUVVnc1JVRkJiME03UVVGRGFFTXNiMEpCUVU4c1NVRkJVRHRCUVVOSU8wRkJRMG9zVFVGS1JDeE5RVXRKTzBGQlEwRXNZVUZCUnl4SlFVRkpaMElzVFVGQlNpeERRVUZYTEZWQlFWVm9RaXhUUVVGV0xFZEJRWE5DTEU5QlFXcERMRVZCUVRCRExFbEJRVEZETEVWQlFXZEVhVUlzU1VGQmFFUXNRMEZCY1VSMFFpeEhRVUZIU3l4VFFVRjRSQ3hEUVVGSUxFVkJRWE5GTzBGQlEyeEZMRzlDUVVGUExFbEJRVkE3UVVGRFNEdEJRVU5LT3p0QlFVVkVMRmxCUVU4c1MwRkJVRHRCUVVOSU96dEJRVVZNTEZWQlFWTnJRaXhQUVVGVUxFTkJRV3RDUXl4TlFVRnNRaXhGUVVFd1FrTXNUMEZCTVVJc1JVRkJiVU03UVVGRE0wSkJMR1ZCUVZWQkxGZEJRVmQ2UXl4VFFVRlRNRU1zWVVGQlZDeERRVUYxUWl4TFFVRjJRaXhEUVVGeVFqdEJRVU5CTEZOQlFVbEdMRTlCUVU5eVFpeFhRVUZZTEVWQlFYZENPMEZCUTNCQ2NVSXNaMEpCUVU5c1JDeFZRVUZRTEVOQlFXdENORUlzV1VGQmJFSXNRMEZCSzBKMVFpeFBRVUV2UWl4RlFVRjNRMFFzVDBGQlQzSkNMRmRCUVM5RE8wRkJRMGdzVFVGR1JDeE5RVVZQTzBGQlEwaHhRaXhuUWtGQlQyeEVMRlZCUVZBc1EwRkJhMEp4UkN4WFFVRnNRaXhEUVVFNFFrWXNUMEZCT1VJN1FVRkRTRHRCUVVORUxGbEJRVTlCTEZGQlFWRkZMRmRCUVZJc1EwRkJiMEpJTEUxQlFYQkNMRU5CUVZBN1FVRkRTRHM3UVVGRlRDeFZRVUZUYUVNc1VVRkJWQ3hEUVVGclFsWXNUMEZCYkVJc1JVRkJNa0k0UXl4VFFVRXpRaXhGUVVGelEwTXNXVUZCZEVNc1JVRkJiMFJETEZsQlFYQkVMRVZCUVd0Rk8wRkJRekZFTEZOQlFVbERMR1ZCUVdVc1QwRkJUMGdzVTBGQk1VSTdRVUZCUVN4VFFVTkpTU3hoUVVGaFJpeGxRVUZsUVN4WlFVRm1MRWRCUVRoQ0xFdEJSQzlET3p0QlFVbEJMRk5CUVVsb1JDeFJRVUZSYlVRc1owSkJRVm9zUlVGQk9FSTdRVUZETVVKdVJDeHBRa0ZCVVcxRUxHZENRVUZTTEVOQlFYbENUQ3hUUVVGNlFpeEZRVUZ2UTBNc1dVRkJjRU1zUlVGQmEwUkhMRlZCUVd4RU8wRkJRMGdzVFVGR1JDeE5RVVZQTEVsQlFVbHNSQ3hSUVVGUmIwUXNWMEZCV2l4RlFVRjVRanRCUVVNMVFuQkVMR2xDUVVGUmIwUXNWMEZCVWl4RFFVRnZRa2dzV1VGQmNFSXNSVUZCYTBOR0xGbEJRV3hETzBGQlEwZzdRVUZEU2pzN1FVRkZUQ3hWUVVGVFRTeFpRVUZVTEVOQlFYTkNja1FzVDBGQmRFSXNSVUZCSzBKelJDeFRRVUV2UWl4RlFVRjVRenRCUVVOcVF5eFRRVUZITEdsQ1FVRnBRbkJFTEZGQlFYQkNMRVZCUVRaQ08wRkJRM3BDTEdGQlFVMXhSQ3hSUVVGUmNrUXNVMEZCVTNORUxGZEJRVlFzUTBGQmNVSXNXVUZCY2tJc1EwRkJaRHRCUVVOQlJDeGxRVUZOUlN4VFFVRk9MRU5CUVdkQ1NDeFRRVUZvUWl4RlFVRXlRaXhMUVVFelFpeEZRVUZyUXl4SlFVRnNRenRCUVVOQmRFUXNhVUpCUVZFd1JDeGhRVUZTTEVOQlFYTkNTQ3hMUVVGMFFqdEJRVU5JTEUxQlNrUXNUVUZMU1R0QlFVTkJMR0ZCUVUxQkxGTkJRVkZ5UkN4VFFVRlRlVVFzYVVKQlFWUXNSVUZCWkR0QlFVTkJTaXhuUWtGQlRVUXNVMEZCVGl4SFFVRnJRa0VzVTBGQmJFSTdRVUZEUVhSRUxHbENRVUZSTkVRc1UwRkJVaXhEUVVGclFpeFBRVUZMVEN4UFFVRk5SQ3hUUVVFM1FpeEZRVUYzUTBNc1RVRkJlRU03UVVGRFNEdEJRVU5LT3p0QlFVVk1MRlZCUVZOTkxGRkJRVlFzUTBGQmEwSkRMRWxCUVd4Q0xFVkJRWGRDUXl4SFFVRjRRaXhGUVVFMlFqdEJRVU55UWl4VFFVRkpReXhQUVVGUFF5eFBRVUZQUXl4VFFVRlFMRU5CUVdsQ1F5eFJRVUZxUWl4RFFVRXdRbTVFTEVsQlFURkNMRU5CUVN0Q0swTXNSMEZCTDBJc1JVRkJiME5MTEV0QlFYQkRMRU5CUVRCRExFTkJRVEZETEVWQlFUWkRMRU5CUVVNc1EwRkJPVU1zUlVGQmFVUTNSU3hwUWtGQmFrUXNSVUZCV0R0QlFVTkJMRmxCUVU5M1JTeFJRVUZSVFN4VFFVRlNMRWxCUVhGQ1RpeFJRVUZSTEVsQlFUZENMRWxCUVhGRFF5eFRRVUZUUml4TFFVRkxka1VzYVVKQlFVd3NSVUZCY2tRN1FVRkRTRHM3VTBGRlIyRXNUeXhIUVVGQlFTeFBPMU5CUVZOaExGY3NSMEZCUVVFc1Z6dFRRVUZoU3l4UkxFZEJRVUZCTEZFN1UwRkJWVWtzVnl4SFFVRkJRU3hYTzFOQlFXRkZMRmNzUjBGQlFVRXNWenRUUVVGaFV5eFJMRWRCUVVGQkxGRTdVMEZCVlVrc1R5eEhRVUZCUVN4UE8xTkJRVk12UWl4UkxFZEJRVUZCTEZFN1UwRkJWVEpETEZrc1IwRkJRVUVzV1R0VFFVRmpVU3hSTEVkQlFVRkJMRkU3T3pzN096dEJRMjVITjBjN096czdPenM3UVVGRlFUczdTMEZCV1RWRkxFczdPenM3UVVGRldpeExRVUZOY1VZc1UwRkJVenRCUVVOWVF5eDNRa0ZCYlVJc2NVSkJSRkk3UVVGRldFTXNPRUpCUVhsQ0xITkNRVVprTzBGQlIxaERMR3REUVVFMlFpd3lRa0ZJYkVJN1FVRkpXRU1zT0VKQlFYbENMRGhDUVVwa08wRkJTMWhETERSQ1FVRjFRaXcwUWtGTVdqdEJRVTFZUXl4blEwRkJNa0lzWjBOQlRtaENPMEZCVDFoRExEUkNRVUYxUWl4dlFrRlFXanRCUVZGWVF5eHJRMEZCTmtJc01rSkJVbXhDTzBGQlUxaERMREpDUVVGelFpd3dRa0ZVV0R0QlFWVllReXh0UTBGQk9FSXNiVU5CVm01Q08wRkJWMWhETEdsRFFVRTBRaXh6UTBGWWFrSTdRVUZaV0VNc1pVRkJWVHRCUVZwRExFVkJRV1k3TzBGQlpVRXNWVUZCVTBNc1UwRkJWQ3hEUVVGdFFrTXNXVUZCYmtJc1JVRkJaME03UVVGRE5VSXNVMEZCVFVNc1dVRkJXU3hGUVVGc1FqdEJRVU5CTEZWQlFVa3NTVUZCU1VNc1IwRkJVaXhKUVVGbFJpeFpRVUZtTEVWQlFUUkNPMEZCUTNoQ0xHRkJRVWRrTEU5QlFVOXBRaXhqUVVGUUxFTkJRWE5DUkN4SFFVRjBRaXhEUVVGSUxFVkJRVGhDTzBGQlF6RkNSQ3gxUWtGQlZVTXNSMEZCVml4SlFVRnBRa1lzWVVGQllVVXNSMEZCWWl4RFFVRnFRanRCUVVOSU8wRkJRMG83UVVGRFJISkNMRmxCUVU5MVFpeE5RVUZRTEVOQlFXTnNRaXhOUVVGa0xFVkJRWE5DWlN4VFFVRjBRanRCUVVOSU96dEJRVVZFTEZWQlFWTkpMRkZCUVZRc1EwRkJhMEowUnl4RFFVRnNRaXhGUVVGdlFqdEJRVU5vUWl4VFFVRk5kVWNzVTBGQlUzWkhMRVZCUVVWRkxFMUJRVVlzUTBGQlUzTkhMRlZCUVZRc1EwRkJiMElzU1VGQmNFSXNSVUZCTUVKeVJpeExRVUY2UXp0QlFVRkJMRk5CUTAxelJpeGpRVUZqTVVZc1UwRkJVekpHTEdGQlFWUXNRMEZCZFVJc1RVRkJUVWdzVFVGQk4wSXNRMEZFY0VJN1FVRkJRU3hUUVVWTlNTeFhRVUZYU2l4UFFVRlBTeXhOUVVGUUxFTkJRV01zUTBGQlpDeEZRVUZwUWt3c1QwRkJUM3BFTEU5QlFWQXNRMEZCWlN4TlFVRm1MRU5CUVdwQ0xFbEJRVEpETEZGQlJqVkVPMEZCUVVFc1UwRkhUU3RFTEdkQ1FVRm5RamxHTEZOQlFWTXlSaXhoUVVGVUxFTkJRWFZDTEUxQlFVMURMRkZCUVRkQ0xFTkJTSFJDTzBGQlFVRXNVMEZKVFVjc1pVRkJaUzlHTEZOQlFWTXlSaXhoUVVGVUxFTkJRWFZDTEUxQlFVMUlMRTFCUVU0c1IwRkJaU3hOUVVGbUxFZEJRWGRDY0VJc1QwRkJUMVVzTkVKQlFTOUNMRWRCUVRoRUxFbEJRWEpHTEVOQlNuSkNPenRCUVUxQkwwWXNWMEZCVFhsRExGZEJRVTRzUTBGQmEwSnJSU3hYUVVGc1FpeEZRVUVyUW5SQ0xFOUJRVTlSTERKQ1FVRjBRenRCUVVOQll5eHBRa0ZCV1Uwc1dVRkJXaXhEUVVGNVFpeGhRVUY2UWl4RlFVRjNReXhMUVVGNFF6czdRVUZGUVVRc2EwSkJRV0ZGTEV0QlFXSTdRVUZEUVd4SUxGZEJRVTF4UXl4UlFVRk9MRU5CUVdVd1JTeGhRVUZtTEVWQlFUaENNVUlzVDBGQlQwY3NNa0pCUVhKRE8wRkJRMGc3TzBGQlJVUXNWVUZCVXpKQ0xGRkJRVlFzUTBGQmEwSnFTQ3hEUVVGc1FpeEZRVUZ2UWp0QlFVTm9RaXhUUVVGTmRVY3NVMEZCVTNaSExFVkJRVVZGTEUxQlFVWXNRMEZCVTNOSExGVkJRVlFzUTBGQmIwSXNTVUZCY0VJc1JVRkJNRUp5Uml4TFFVRjZRenRCUVVGQkxGTkJRMDF6Uml4alFVRmpNVVlzVTBGQlV6SkdMR0ZCUVZRc1EwRkJkVUlzVFVGQlRVZ3NUVUZCTjBJc1EwRkVjRUk3UVVGQlFTeFRRVVZOU1N4WFFVRlhTaXhQUVVGUFN5eE5RVUZRTEVOQlFXTXNRMEZCWkN4RlFVRnBRa3dzVDBGQlQzcEVMRTlCUVZBc1EwRkJaU3hOUVVGbUxFTkJRV3BDTEVsQlFUSkRMRkZCUmpWRU8wRkJRVUVzVTBGSFRTdEVMR2RDUVVGblFqbEdMRk5CUVZNeVJpeGhRVUZVTEVOQlFYVkNMRTFCUVUxRExGRkJRVGRDTEVOQlNIUkNPenRCUVV0Qk4wY3NWMEZCVFhsRExGZEJRVTRzUTBGQmEwSnpSU3hoUVVGc1FpeEZRVUZwUXpGQ0xFOUJRVTlITERKQ1FVRjRRenRCUVVOQmVFWXNWMEZCVFhGRExGRkJRVTRzUTBGQlpYTkZMRmRCUVdZc1JVRkJORUowUWl4UFFVRlBVU3d5UWtGQmJrTTdRVUZEUVdNc2FVSkJRVmxOTEZsQlFWb3NRMEZCZVVJc1lVRkJla0lzUlVGQmQwTXNTVUZCZUVNN1FVRkRTRHM3UVVGRlJDeFZRVUZUUnl4VlFVRlVMRU5CUVc5Q2JFZ3NRMEZCY0VJc1JVRkJjMEk3UVVGRGJFSXNVMEZCVFhWSExGTkJRVk4yUnl4RlFVRkZSU3hOUVVGR0xFTkJRVk56Unl4VlFVRlVMRU5CUVc5Q0xFbEJRWEJDTEVWQlFUQkNja1lzUzBGQmVrTTdRVUZCUVN4VFFVTk5jMFlzWTBGQll6RkdMRk5CUVZNeVJpeGhRVUZVTEVOQlFYVkNMRTFCUVUxSUxFMUJRVGRDTEVOQlJIQkNPMEZCUVVFc1UwRkZUVmtzVlVGQlZTeERRVUZEUXl4UFFVRlBReXhuUWtGQlVDeEhRVUV3UWtFc2FVSkJRV2xDV2l4WFFVRnFRaXhGUVVFNFFpeEpRVUU1UWl4RFFVRXhRaXhIUVVGblJVRXNXVUZCV1dFc1dVRkJOMFVzUlVGQk1rWklMRTlCUmpOSE96dEJRVWxCTEZOQlFVZEJMRmxCUVZrc1RVRkJaaXhGUVVGelFqdEJRVU5zUW5KSUxHVkJRVTF2UlN4WlFVRk9MRU5CUVcxQ2RVTXNWMEZCYmtJc1JVRkJaME1zVFVGQmFFTTdRVUZEU0N4TlFVWkVMRTFCUjBrN1FVRkRRVE5ITEdWQlFVMXZSU3haUVVGT0xFTkJRVzFDZFVNc1YwRkJia0lzUlVGQlowTXNUVUZCYUVNN1FVRkRTRHRCUVVOS096dEJRVVZFTEZWQlFWTmpMR0ZCUVZRc1EwRkJkVUoyU0N4RFFVRjJRaXhGUVVGNVFqdEJRVU55UWl4VFFVRk5lVWNzWTBGQlkzcEhMRVZCUVVWRkxFMUJRVVlzUTBGQlUwY3NWVUZCVkN4RFFVRnZRa0VzVlVGQmVFTTdRVUZCUVN4VFFVTk5hMGNzVTBGQlUwVXNXVUZCV1VRc1ZVRkJXaXhEUVVGMVFpeEpRVUYyUWl4RlFVRTJRbkpHTEV0QlJEVkRPMEZCUVVFc1UwRkZUWEZITEd0Q1FVRnJRbXBDTEU5QlFVOUxMRTFCUVZBc1EwRkJZeXhEUVVGa0xFVkJRV2xDVEN4UFFVRlBla1FzVDBGQlVDeERRVUZsTEUxQlFXWXNRMEZCYWtJc1EwRkdlRUk3UVVGQlFTeFRRVWROTWtVc1owSkJRV2RDTVVjc1UwRkJVekpHTEdGQlFWUXNRMEZCZFVJc1RVRkJTV01zWlVGQk0wSXNRMEZJZEVJN1FVRkJRU3hUUVVsTlJTeHJRa0ZCYTBKdVFpeFBRVUZQU3l4TlFVRlFMRU5CUVdNc1EwRkJaQ3hGUVVGcFFrd3NUMEZCVDNwRUxFOUJRVkFzUTBGQlpTeE5RVUZtTEVOQlFXcENMRWxCUVRKRExGRkJTbTVGTzBGQlFVRXNVMEZMVFRaRkxGZEJRVmMxUnl4VFFVRlRNa1lzWVVGQlZDeERRVUYxUWl4TlFVRkpTQ3hOUVVGS0xFZEJRV0VzVFVGQllpeEhRVUZ6UW5CQ0xFOUJRVTlWTERSQ1FVRndSQ3hEUVV4cVFqdEJRVUZCTEZOQlRVMHJRaXhsUVVGbE4wY3NVMEZCVXpKR0xHRkJRVlFzUTBGQmRVSXNUVUZCVFdkQ0xHVkJRVTRzUjBGQmQwSXNTVUZCZUVJc1IwRkJLMEoyUXl4UFFVRlBTU3gxUWtGQk4wUXNRMEZPY2tJN1FVRkJRU3hUUVU5TmMwTXNWMEZCVnpkSUxFVkJRVVZGTEUxQlFVWXNRMEZCVTBjc1ZVRlFNVUk3UVVGQlFTeFRRVkZOWVN4UlFVRlJiRUlzUlVGQlJVVXNUVUZCUml4RFFVRlRjMGNzVlVGQlZDeERRVUZ2UWl4WlFVRndRaXhGUVVGclEzSkdMRXRCVW1oRU96dEJRVlZCY2tJc1YwRkJUWGxETEZkQlFVNHNRMEZCYTBKdlJpeFJRVUZzUWl4RlFVRTBRbmhETEU5QlFVOVZMRFJDUVVGdVF6dEJRVU5CTDBZc1YwRkJUWEZETEZGQlFVNHNRMEZCWlRCR0xGRkJRV1lzUlVGQmVVSXhReXhQUVVGUFZTdzBRa0ZCYUVNN1FVRkRRVGhDTEdOQlFWTmFMRmxCUVZRc1EwRkJjMElzWlVGQmRFSXNSVUZCZFVNc1MwRkJka003UVVGRFFXTXNZMEZCVTJRc1dVRkJWQ3hEUVVGelFpeGxRVUYwUWl4RlFVRjFReXhKUVVGMlF6czdRVUZGUVdFc2EwSkJRV0ZGTEZkQlFXSXNSMEZCTWtJNVNDeEZRVUZGUlN4TlFVRkdMRU5CUVZNMFNDeFhRVUZ3UXpzN1FVRkZRV2hKTEZkQlFVMXZSU3haUVVGT0xFTkJRVzFDZFVNc1YwRkJia0lzUlVGQlowTXNUVUZCYUVNN08wRkJSVUZuUWl4dFFrRkJZMDBzWVVGQlpDeEhRVUU0UWpkSExFdEJRVGxDTzBGQlEwZzdPMEZCUlVRc1ZVRkJVemhITEZOQlFWUXNRMEZCYlVKb1NTeERRVUZ1UWl4RlFVRnhRanRCUVVOcVFrWXNWMEZCVFc5RkxGbEJRVTRzUTBGQmJVSnNSU3hGUVVGRlJTeE5RVUZ5UWl4RlFVRTJRaXhSUVVFM1FqdEJRVU5CUml4UFFVRkZVeXhqUVVGR08wRkJRMGc3TzBGQlJVUXNWVUZCVTNkSUxGRkJRVlFzUTBGQmEwSnFTU3hEUVVGc1FpeEZRVUZ2UWp0QlFVTm9RaXhUUVVGTmVVY3NZMEZCWTNwSExFVkJRVVZGTEUxQlFVWXNRMEZCVTBjc1ZVRkJWQ3hEUVVGdlFrRXNWVUZCZUVNN1FVRkJRU3hUUVVOTmEwY3NVMEZCVTBVc1dVRkJXVVFzVlVGQldpeERRVUYxUWl4SlFVRjJRaXhGUVVFMlFuSkdMRXRCUkRWRE8wRkJRVUVzVTBGRlRTdEhMRk5CUVZOdVNDeFRRVUZUTWtZc1lVRkJWQ3hEUVVGMVFpeE5RVUZKU0N4TlFVRktMRWRCUVdFc1RVRkJZaXhIUVVGelFuQkNMRTlCUVU5WExEQkNRVUZ3UkN4RFFVWm1PMEZCUVVFc1UwRkhUU3RDTEZkQlFWYzNTQ3hGUVVGRlJTeE5RVUZHTEVOQlFWTkhMRlZCU0RGQ096dEJRVXRCTEZOQlFVYzJTQ3hOUVVGSUxFVkJRVlU3UVVGRFRuQkpMR1ZCUVUxNVF5eFhRVUZPTEVOQlFXdENNa1lzVFVGQmJFSXNSVUZCTUVJdlF5eFBRVUZQVnl3d1FrRkJha003UVVGRFNEdEJRVU5FYUVjc1YwRkJUWEZETEZGQlFVNHNRMEZCWlRCR0xGRkJRV1lzUlVGQmVVSXhReXhQUVVGUFZ5d3dRa0ZCYUVNN1FVRkRRVGxHTEU5QlFVVlRMR05CUVVZN1FVRkRTRHM3UVVGRlJDeFZRVUZUTUVnc1ZVRkJWQ3hEUVVGdlFtNUpMRU5CUVhCQ0xFVkJRWE5DTzBGQlEyeENMRk5CUVUwMlNDeFhRVUZYTjBnc1JVRkJSVVVzVFVGQlJpeERRVUZUUnl4VlFVRXhRanM3UVVGRlFTeFRRVUZIZDBnc1VVRkJTQ3hGUVVGWk8wRkJRMUl2U0N4bFFVRk5lVU1zVjBGQlRpeERRVUZyUW5OR0xGRkJRV3hDTEVWQlFUUkNNVU1zVDBGQlQxY3NNRUpCUVc1RE8wRkJRMGc3UVVGRFJEbEdMRTlCUVVWVExHTkJRVVk3UVVGRFNEczdRVUZGUkN4VlFVRlRNa2dzVjBGQlZDeERRVUZ4UW5CSkxFTkJRWEpDTEVWQlFYVkNPMEZCUTI1Q0xGTkJRVTF4U1N4UFFVRlBja2tzUlVGQlJVVXNUVUZCUml4RFFVRlRReXhSUVVGVUxFTkJRV3RDYlVrc1YwRkJiRUlzVDBGQmIwTXNSMEZCY0VNc1IwRkJNRU4wU1N4RlFVRkZSU3hOUVVGR0xFTkJRVk52UWl4clFrRkJia1FzUjBGQmQwVjBRaXhGUVVGRlJTeE5RVUZHTEVOQlFWTkhMRlZCUVZRc1EwRkJiMEpwUWl4clFrRkJla2M3TzBGQlJVRjRRaXhYUVVGTmIwVXNXVUZCVGl4RFFVRnRRbTFGTEVsQlFXNUNMRVZCUVhsQ0xGRkJRWHBDTzBGQlEwRnlTU3hQUVVGRlV5eGpRVUZHTzBGQlEwZzdPMEZCUlVRc1ZVRkJVemhJTEcxQ1FVRlVMRU5CUVRaQ2Rra3NRMEZCTjBJc1JVRkJLMEk3UVVGRE0wSXNVMEZCVFRKSExGZEJRVmN6Unl4RlFVRkZSU3hOUVVGR0xFTkJRVk56Unl4VlFVRlVMRU5CUVc5Q0xFbEJRWEJDTEVWQlFUQkNja1lzUzBGQk0wTTdRVUZCUVN4VFFVTk5NRVlzWjBKQlFXZENPVVlzVTBGQlV6SkdMR0ZCUVZRc1EwRkJkVUlzVFVGQlRVTXNVVUZCTjBJc1EwRkVkRUk3UVVGQlFTeFRRVVZOWVN4clFrRkJhMEppTEZOQlFWTkRMRTFCUVZRc1EwRkJaMElzUTBGQmFFSXNSVUZCYlVKRUxGTkJRVk0zUkN4UFFVRlVMRU5CUVdsQ0xGRkJRV3BDTEVOQlFXNUNMRU5CUm5oQ08wRkJRVUVzVTBGSFRUSkZMR2RDUVVGblFqRkhMRk5CUVZNeVJpeGhRVUZVTEVOQlFYVkNMRTFCUVUxakxHVkJRVGRDTEVOQlNIUkNPMEZCUVVFc1UwRkpUV3BDTEZOQlFWTnBRaXhyUWtGQmEwSXNUVUZLYWtNN1FVRkJRU3hUUVV0TlR5eG5Ra0ZCWjBKT0xHTkJRV05OTEdGQlRIQkRPMEZCUVVFc1UwRk5UVk1zYjBKQlFXOUNla2dzVTBGQlV6SkdMR0ZCUVZRc1EwRkJkVUlzVFVGQlRVZ3NUVUZCVGl4SFFVRmxMRzlDUVVGbUxFZEJRWE5EZDBJc1lVRkJkRU1zUjBGQmMwUXNTVUZCTjBVc1JVRkJiVVl4U0N4VlFVNDNSenM3UVVGUlFTeGhRVUZQVEN4RlFVRkZWeXhQUVVGVU8wRkJRMGtzWTBGQlN5eEZRVUZNTzBGQlEwRXNZMEZCU3l4RlFVRk1PMEZCUTBsaUxHMUNRVUZOYjBVc1dVRkJUaXhEUVVGdFFqSkRMR0ZCUVc1Q0xFVkJRV3RETEZkQlFXeERPMEZCUTBFM1J5eGxRVUZGVXl4alFVRkdPMEZCUTBFN1FVRkRTaXhqUVVGTExFVkJRVXc3UVVGRFFTeGpRVUZMTEVWQlFVdzdRVUZEU1N4cFFrRkJSeXRJTEd0Q1FVRnJRbXBKTEhOQ1FVRnlRaXhGUVVFMFF6dEJRVU40UTFRc2RVSkJRVTF2UlN4WlFVRk9MRU5CUVcxQ2MwVXNhMEpCUVd0Q2Fra3NjMEpCUVd4Q0xFTkJRWGxEYTBrc1VVRkJla01zUTBGQmEwUXNRMEZCYkVRc1EwRkJia0lzUlVGQmVVVXNVVUZCZWtVN1FVRkRTRHRCUVVORWVra3NaVUZCUlZNc1kwRkJSanRCUVVOQk8wRkJRMG9zWTBGQlN5eEZRVUZNTzBGQlEwRXNZMEZCU3l4RlFVRk1PMEZCUTBrc2FVSkJRVWNyU0N4clFrRkJhMEpzU0N4clFrRkJja0lzUlVGQmQwTTdRVUZEY0VONFFpeDFRa0ZCVFc5RkxGbEJRVTRzUTBGQmJVSnpSU3hyUWtGQmEwSnNTQ3hyUWtGQmJFSXNRMEZCY1VOdFNDeFJRVUZ5UXl4RFFVRTRReXhEUVVFNVF5eERRVUZ1UWl4RlFVRnhSU3hSUVVGeVJUdEJRVU5JTzBGQlEwUjZTU3hsUVVGRlV5eGpRVUZHTzBGQlEwRTdRVUZ1UWxJN1FVRnhRa2c3TzBGQlJVUXNWVUZCVTJsSkxHbENRVUZVTEVOQlFUSkNNVWtzUTBGQk0wSXNSVUZCTmtJN1FVRkRla0lzVTBGQlRUWklMRmRCUVZjM1NDeEZRVUZGUlN4TlFVRnVRanRCUVVGQkxGTkJRMDF6U1N4dlFrRkJiMEpZTEZOQlFWTjRTQ3hWUVVSdVF6dEJRVUZCTEZOQlJVMXZSeXhqUVVGakswSXNhMEpCUVd0Q2Jra3NWVUZHZEVNN1FVRkJRU3hUUVVkTmEwY3NVMEZCVTBVc1dVRkJXVVFzVlVGQldpeERRVUYxUWl4SlFVRjJRaXhGUVVFMlFuSkdMRXRCU0RWRE8wRkJRVUVzVTBGSlRYZEdMRmRCUVZkS0xFOUJRVTlMTEUxQlFWQXNRMEZCWXl4RFFVRmtMRVZCUVdsQ1RDeFBRVUZQZWtRc1QwRkJVQ3hEUVVGbExFMUJRV1lzUTBGQmFrSXNTVUZCTWtNc1VVRktOVVE3UVVGQlFTeFRRVXROSzBRc1owSkJRV2RDT1VZc1UwRkJVekpHTEdGQlFWUXNRMEZCZFVJc1RVRkJUVU1zVVVGQk4wSXNRMEZNZEVJN08wRkJUMEVzWVVGQlR6TkhMRVZCUVVWWExFOUJRVlE3UVVGRFNTeGpRVUZMTEVWQlFVdzdRVUZEUVN4alFVRkxMRVZCUVV3N1FVRkRTV0lzYlVKQlFVMXZSU3haUVVGT0xFTkJRVzFDTWtRc1VVRkJia0lzUlVGQk5rSXNVVUZCTjBJN1FVRkRRVGRJTEdWQlFVVlRMR05CUVVZN1FVRkRRVHRCUVVOS0xHTkJRVXNzUlVGQlREdEJRVU5CTEdOQlFVc3NSVUZCVER0QlFVTkpMR2xDUVVGSEswZ3NhMEpCUVd0Q2Fra3NjMEpCUVhKQ0xFVkJRVFJETzBGQlEzaERhVWtzYlVOQlFXdENha2tzYzBKQlFXeENMRU5CUVhsRGEwa3NVVUZCZWtNc1EwRkJhMFFzUTBGQmJFUXNSVUZCY1VSNlFpeExRVUZ5UkR0QlFVTklPMEZCUTBSb1NDeGxRVUZGVXl4alFVRkdPMEZCUTBFN1FVRkRTaXhqUVVGTExFVkJRVXc3UVVGRFFTeGpRVUZMTEVWQlFVdzdRVUZEU1N4cFFrRkJSeXRJTEd0Q1FVRnJRbXhJTEd0Q1FVRnlRaXhGUVVGM1F6dEJRVU53UTJ0SUxHMURRVUZyUW14SUxHdENRVUZzUWl4RFFVRnhRMjFJTEZGQlFYSkRMRU5CUVRoRExFTkJRVGxETEVWQlFXbEVla0lzUzBGQmFrUTdRVUZEU0R0QlFVTkVhRWdzWlVGQlJWTXNZMEZCUmp0QlFVTkJPMEZCUTBvc1kwRkJTeXhEUVVGTU8wRkJRMGxZTEcxQ1FVRk5iMFVzV1VGQlRpeERRVUZ0UW5WRExGZEJRVzVDTEVWQlFXZERMRTFCUVdoRE8wRkJRMEZKTERKQ1FVRmpSeXhMUVVGa08wRkJRMEZvU0N4bFFVRkZVeXhqUVVGR08wRkJRMEU3UVVGNFFsSTdRVUV3UWtnN08wRkJSVVFzVlVGQlUydEpMR2RDUVVGVUxFTkJRVEJDT1Vnc1QwRkJNVUlzUlVGQmJVTnZSaXhaUVVGdVF5eEZRVUZuUkR0QlFVTTFReXhUUVVGTk1rTXNhMEpCUVd0Q0wwZ3NWMEZCVjBVc1UwRkJVME1zWjBKQlFWUXNRMEZCTUVKSUxFOUJRVEZDTEVOQlFWZ3NSMEZCWjBSRkxGTkJRVk5ETEdkQ1FVRlVMRU5CUVRCQ1NDeFBRVUV4UWl4RFFVRm9SQ3hIUVVGeFJrVXNVMEZCVTBNc1owSkJRVlFzUTBGQk1FSXNVVUZCTVVJc1EwRkJOMGM3TzBGQlJVRTdRVUZEUVN4VFFVRkhhVVlzWjBKQlFXZENia2NzVFVGQlRUUkZMRkZCUVU0c1EwRkJaU3hSUVVGbUxFVkJRWGxDZFVJc1dVRkJla0lzUTBGQmJrSXNSVUZCTUVRN1FVRkRkRVJFTEcxQ1FVRlZReXhaUVVGV08wRkJRMGc3TzBGQlJVUXNVMEZCUnpKRExHVkJRVWdzUlVGQmJVSTdRVUZEWmpsSkxHVkJRVTF0UWl4UFFVRk9MRU5CUVdNeVNDeGxRVUZrTEVWQlFTdENMRlZCUVZVeFNDeExRVUZXTEVWQlFXbENReXhMUVVGcVFpeEZRVUYzUWp0QlFVTnVSQ3hwUWtGQlNUQklMR0ZCUVdFeFNDeExRVUZxUWp0QlFVRkJMR2xDUVVOSk1rZ3NaVUZCWlVRc1YwRkJWMFVzV1VGQldDeERRVUYzUWl4SlFVRjRRaXhEUVVSdVFqdEJRVUZCTEdsQ1FVVkpNVWdzV1VGQldVNHNVMEZCVXpKR0xHRkJRVlFzUTBGQmRVSXNaMEpCUVdOdlF5eFpRVUZrTEVkQlFUSkNMRWxCUVd4RUxFTkJSbWhDTzBGQlFVRXNhVUpCUjBsRkxIVkNRVUYxUWtnc1YwRkJWMlFzWVVGSWRFTTdRVUZCUVN4cFFrRkpTV3RDTEhGQ1FVRnhRa29zVjBGQlYwb3NVVUZCV0N4RFFVRnZRazhzYjBKQlFYQkNMRVZCUVRCRFJTeEpRVXB1UlR0QlFVRkJMR2xDUVV0SmRrTXNWMEZCVjIxRExHVkJRV1VzVVVGTU9VSTdRVUZCUVN4cFFrRk5TWFpETEZOQlFWTjFReXhsUVVGbExFMUJUalZDTzBGQlFVRXNhVUpCVDBsTExGTkJRVk53U1N4VFFVRlRNRU1zWVVGQlZDeERRVUYxUWl4SFFVRjJRaXhEUVZCaU8wRkJRVUVzYVVKQlVVa3lSaXh0UWtGQmJVSnlTU3hUUVVGVE1FTXNZVUZCVkN4RFFVRjFRaXhOUVVGMlFpeERRVkoyUWp0QlFVRkJMR2xDUVZOSk5FWXNhVUpCUVdsQ2RFa3NVMEZCVXpCRExHRkJRVlFzUTBGQmRVSXNUVUZCZGtJc1EwRlVja0k3UVVGQlFTeHBRa0ZWU1hORExGZEJRVmRvUml4VFFVRlRNRU1zWVVGQlZDeERRVUYxUWl4TlFVRjJRaXhEUVZabU8wRkJRVUVzYVVKQlYwazBSU3hQUVVGUGRFZ3NVMEZCVXpCRExHRkJRVlFzUTBGQmRVSXNTVUZCZGtJc1EwRllXRHM3UVVGaFFUdEJRVU5CTTBRc2JVSkJRVTF4UXl4UlFVRk9MRU5CUVdWblNDeE5RVUZtTEVWQlFYVkNhRVVzVDBGQlQwVXNkVUpCUVRsQ08wRkJRMEU0UkN4dlFrRkJUM0JETEZsQlFWQXNRMEZCYjBJc1NVRkJjRUlzUlVGQk1FSktMRkZCUVRGQ08wRkJRMEYzUXl4dlFrRkJUM0JETEZsQlFWQXNRMEZCYjBJc1RVRkJjRUlzUlVGQk5FSXNVVUZCTlVJN1FVRkRRVzlETEc5Q1FVRlBjRU1zV1VGQlVDeERRVUZ2UWl4TlFVRndRaXhGUVVFMFFpeEhRVUUxUWp0QlFVTkJiME1zYjBKQlFVOXdReXhaUVVGUUxFTkJRVzlDTEdWQlFYQkNMRVZCUVhGRExFMUJRWEpETzBGQlEwRnZReXh2UWtGQlQzQkRMRmxCUVZBc1EwRkJiMElzVjBGQmNFSXNSVUZCYVVOU0xFMUJRV3BETzBGQlEwRTBReXh2UWtGQlQzcEdMRmRCUVZBc1EwRkJiVUl3Uml4blFrRkJia0k3UVVGRFFVUXNiMEpCUVU5NlJpeFhRVUZRTEVOQlFXMUNNa1lzWTBGQmJrSTdRVUZEUVVZc2IwSkJRVTk2Uml4WFFVRlFMRU5CUVcxQ2NVTXNVVUZCYmtJN08wRkJSVUU3UVVGRFFXcEhMRzFDUVVGTmNVTXNVVUZCVGl4RFFVRmxhVWdzWjBKQlFXWXNSVUZCYVVOcVJTeFBRVUZQU1N4MVFrRkJlRU03UVVGRFFUWkVMRGhDUVVGcFFuUkNMRmRCUVdwQ0xFZEJRU3RDYlVJc2EwSkJRUzlDT3p0QlFVVkJPMEZCUTBGdVNpeHRRa0ZCVFhGRExGRkJRVTRzUTBGQlpXdElMR05CUVdZc1JVRkJLMEpzUlN4UFFVRlBTeXh4UWtGQmRFTTdRVUZEUVRGR0xHMUNRVUZOY1VNc1VVRkJUaXhEUVVGbE5FUXNVVUZCWml4RlFVRjVRbG9zVDBGQlQwMHNlVUpCUVdoRE96dEJRVVZCTzBGQlEwRXNhVUpCUVVkdlJDeFhRVUZYUlN4WlFVRllMRU5CUVhkQ0xGVkJRWGhDTEVOQlFVZ3NSVUZCZFVNN1FVRkRia05KTEhkQ1FVRlBjRU1zV1VGQlVDeERRVUZ2UWl4VlFVRndRaXhGUVVGblF6aENMRmRCUVZkRkxGbEJRVmdzUTBGQmQwSXNWVUZCZUVJc1EwRkJhRU03UVVGRFNEczdRVUZGUkR0QlFVTkJha29zYlVKQlFVMW5ReXhYUVVGT0xFTkJRV3RDY1Vnc1RVRkJiRUlzUlVGQk1FSk9MRlZCUVRGQ096dEJRVWxCTzBGQlEwRXZTU3h0UWtGQlRYRkRMRkZCUVU0c1EwRkJaV3RITEVsQlFXWXNSVUZCY1VKc1JDeFBRVUZQVHl4eFFrRkJOVUk3UVVGRFFUSkRMR3RDUVVGTGRFSXNXVUZCVEN4RFFVRnJRaXhKUVVGc1FpeEZRVUYzUWxJc1RVRkJlRUk3UVVGRFFUaENMR3RDUVVGTGRFSXNXVUZCVEN4RFFVRnJRaXhOUVVGc1FpeEZRVUV3UWl4VFFVRXhRanRCUVVOQmMwSXNhMEpCUVV0MFFpeFpRVUZNTEVOQlFXdENMR0ZCUVd4Q0xFVkJRV2xETEUxQlFXcERPMEZCUTBGelFpeHJRa0ZCUzNSQ0xGbEJRVXdzUTBGQmEwSXNhVUpCUVd4Q0xFVkJRWEZEU2l4UlFVRnlRenM3UVVGRlFUdEJRVU5CTjBjc2JVSkJRVTF0UWl4UFFVRk9MRU5CUVdNMFNDeFhRVUZYU2l4UlFVRjZRaXhGUVVGdFF5eFZRVUZUZGtnc1MwRkJWQ3hGUVVGblFrTXNTMEZCYUVJc1JVRkJjMEk3UVVGRGNrUXNjVUpCUVVsdFNTeFBRVUZQZGtrc1UwRkJVekJETEdGQlFWUXNRMEZCZFVJc1NVRkJka0lzUTBGQldEdEJRVUZCTEhGQ1FVTkpPRVlzVDBGQlQzaEpMRk5CUVZNd1F5eGhRVUZVTEVOQlFYVkNMRWRCUVhaQ0xFTkJSRmc3TzBGQlIwRTRSaXh6UWtGQlMzaERMRmxCUVV3c1EwRkJhMElzVFVGQmJFSXNSVUZCTUVJc1IwRkJNVUk3UVVGRFFYZERMSE5DUVVGTGVFTXNXVUZCVEN4RFFVRnJRaXhWUVVGc1FpeEZRVUU0UWl4SlFVRTVRanRCUVVOQmQwTXNjMEpCUVV0NFF5eFpRVUZNTEVOQlFXdENMRTFCUVd4Q0xFVkJRVEJDTEZGQlFURkNPMEZCUTBGM1F5eHpRa0ZCUzNoRExGbEJRVXdzUTBGQmEwSXNaVUZCYkVJc1JVRkJiVU1zVDBGQmJrTTdRVUZEUVhkRExITkNRVUZMZUVNc1dVRkJUQ3hEUVVGclFpeFpRVUZzUWl4RlFVRm5RemRHTEV0QlFXaERPMEZCUTBGeFNTeHpRa0ZCUzNwQ0xGZEJRVXdzUjBGQmJVSXpSeXhOUVVGTk1rY3NWMEZCZWtJN08wRkJSVUYzUWl4elFrRkJTelZHTEZkQlFVd3NRMEZCYVVJMlJpeEpRVUZxUWpzN1FVRkZRU3h4UWtGQlIzSkpMRlZCUVZVNFNDeHZRa0ZCWWl4RlFVRnJRenRCUVVNNVFteEtMREpDUVVGTmNVTXNVVUZCVGl4RFFVRmxiVWdzU1VGQlppeEZRVUZ4UW01RkxFOUJRVTlWTERSQ1FVRTFRanRCUVVOQmVVUXNNRUpCUVV0MlF5eFpRVUZNTEVOQlFXdENMR1ZCUVd4Q0xFVkJRVzFETEUxQlFXNURPMEZCUTBnN1FVRkRSSE5DTEhOQ1FVRkxNMFVzVjBGQlRDeERRVUZwUWpSR0xFbEJRV3BDTzBGQlEwZ3NZMEZzUWtRN08wRkJiMEpCTzBGQlEwRjRTaXh0UWtGQlRXZERMRmRCUVU0c1EwRkJhMEoxUnl4SlFVRnNRaXhGUVVGM1FtTXNUVUZCZUVJN1FVRkRRWEpLTEcxQ1FVRk5jVU1zVVVGQlRpeERRVUZsYTBjc1NVRkJaaXhGUVVGeFFteEVMRTlCUVU5UkxESkNRVUUxUWpzN1FVRkZRVHRCUVVOQk5VVXNjMEpCUVZNeVJpeGhRVUZVTEVOQlFYVkNMRTFCUVhaQ0xFVkJRU3RDU3l4WlFVRXZRaXhEUVVFMFF5eE5RVUUxUXl4RlFVRnZSQ3hoUVVGd1JEczdRVUZGUVN4cFFrRkJTWGxETEdOQlFXTXNSVUZCYkVJN08wRkJSVUV4U2l4dFFrRkJUVzFDTEU5QlFVNHNRMEZCWTI5SUxFdEJRVXRKTEZGQlFXNUNMRVZCUVRaQ0xGVkJRVk4yU0N4TFFVRlVMRVZCUVdkQ1F5eExRVUZvUWl4RlFVRnpRanRCUVVNdlF5eHhRa0ZCU1c5SkxFOUJRVTl3U1N4TlFVRk5jMGtzVlVGQlRpeERRVUZwUWl4RFFVRnFRaXhEUVVGWU8wRkJRMEVzY1VKQlFVZEdMRWxCUVVnc1JVRkJVVHRCUVVOS1F5eHBRMEZCV1hoSExFbEJRVm9zUTBGQmFVSjFSeXhKUVVGcVFqdEJRVU5CZWtvc01rSkJRVTE1UWl4UlFVRk9MRU5CUVdWblNTeEpRVUZtTEVWQlFYRkNMRTlCUVhKQ0xFVkJRVGhDZGtJc1UwRkJPVUk3UVVGRFFXeEpMREpDUVVGTmVVSXNVVUZCVGl4RFFVRmxaMGtzU1VGQlppeEZRVUZ4UWl4UlFVRnlRaXhGUVVFclFtaERMR0ZCUVM5Q08wRkJRMEY2U0N3eVFrRkJUWGxDTEZGQlFVNHNRMEZCWldkSkxFbEJRV1lzUlVGQmNVSXNWMEZCY2tJc1JVRkJhME4wUWl4UlFVRnNRenRCUVVOQmJra3NNa0pCUVUxNVFpeFJRVUZPTEVOQlFXVm5TU3hKUVVGbUxFVkJRWEZDTEU5QlFYSkNMRVZCUVRoQ2RFSXNVVUZCT1VJN1FVRkRRVzVKTERKQ1FVRk5lVUlzVVVGQlRpeERRVUZsWjBrc1NVRkJaaXhGUVVGeFFpeFZRVUZ5UWl4RlFVRnBRM0JDTEZWQlFXcERPMEZCUTBGeVNTd3lRa0ZCVFhsQ0xGRkJRVTRzUTBGQlpXZEpMRWxCUVdZc1JVRkJjVUlzVFVGQmNrSXNSVUZCTmtKd1FpeFZRVUUzUWp0QlFVTklPMEZCUTBvc1kwRllSRHM3UVVGaFFUdEJRVU5CY2trc2JVSkJRVTE1UWl4UlFVRk9MRU5CUVdVNFJ5eEpRVUZtTEVWQlFYRkNMRTFCUVhKQ0xFVkJRVFpDTDBJc1VVRkJOMEk3UVVGRFFYaEhMRzFDUVVGTmVVSXNVVUZCVGl4RFFVRmxPRWNzU1VGQlppeEZRVUZ4UWl4TlFVRnlRaXhGUVVFMlFuQkNMRkZCUVRkQ08wRkJRMEZ1U0N4dFFrRkJUWGxDTEZGQlFVNHNRMEZCWlRoSExFbEJRV1lzUlVGQmNVSXNVVUZCY2tJc1JVRkJLMEp1UWl4VlFVRXZRanRCUVVOQmNFZ3NiVUpCUVUxNVFpeFJRVUZPTEVOQlFXVTRSeXhKUVVGbUxFVkJRWEZDTEZOQlFYSkNMRVZCUVdkRFN5eHBRa0ZCYUVNN1FVRkRRVFZKTEcxQ1FVRk5lVUlzVVVGQlRpeERRVUZsTkVnc1RVRkJaaXhGUVVGMVFpeFhRVUYyUWl4RlFVRnZRMllzVjBGQmNFTTdRVUZEUVhSSkxHMUNRVUZOZVVJc1VVRkJUaXhEUVVGbE5FZ3NUVUZCWml4RlFVRjFRaXhQUVVGMlFpeEZRVUZuUXl4VlFVRlRia29zUTBGQlZDeEZRVUZYTzBGQlFVTkJMRzFDUVVGRlV5eGpRVUZHTzBGQlFXOUNMR05CUVdoRk8wRkJRMEZZTEcxQ1FVRk5lVUlzVVVGQlRpeERRVUZsTkVnc1RVRkJaaXhGUVVGMVFpeFRRVUYyUWl4RlFVRnJRMW9zYlVKQlFXeERPMEZCUTBGNlNTeHRRa0ZCVFhGRExGRkJRVTRzUTBGQlpUQkhMRlZCUVdZc1JVRkJNa0l4UkN4UFFVRlBReXhwUWtGQmJFTTdRVUZEUVhsRUxIZENRVUZYT1VJc1dVRkJXQ3hEUVVGM1FpeGhRVUY0UWl4RlFVRjFReXhKUVVGMlF6dEJRVU5CT0VJc2QwSkJRVmM1UWl4WlFVRllMRU5CUVhkQ0xGVkJRWGhDTEVWQlFXOURMRWxCUVhCRE96dEJRVVZCTzBGQlEwRXhSaXgxUWtGQlZUQkdMRmxCUVZZc1EwRkJkVUlzUzBGQmRrSXNSVUZCT0VKS0xGRkJRVGxDTzBGQlEwRTNSeXh0UWtGQlRYbENMRkZCUVU0c1EwRkJaVVlzVTBGQlppeEZRVUV3UWl4UFFVRXhRaXhGUVVGdFF5eFpRVUZWTzBGQlEzcERPRWdzZDBKQlFVOXVReXhMUVVGUU8wRkJRMEVzZDBKQlFVOHNTMEZCVUR0QlFVTklMR05CU0VRN1FVRkpTQ3hWUVM5SFJEczdRVUZwU0VFN1FVRkRRV3hJTEdWQlFVMTVRaXhSUVVGT0xFTkJRV1ZTTEZGQlFXWXNSVUZCZVVJc1QwRkJla0lzUlVGQmEwTXNWVUZCVTJZc1EwRkJWQ3hGUVVGWE8wRkJRM3BEUVN4bFFVRkZVeXhqUVVGR08wRkJRMEVzYVVKQlFVMHdTU3hUUVVGVGJrb3NSVUZCUlVVc1RVRkJSaXhEUVVGVFF5eFJRVUZVTEVOQlFXdENReXhwUWtGQmJFSXNUMEZCTUVNc1IwRkJNVU1zUjBGQlowUktMRVZCUVVWRkxFMUJRV3hFTEVkQlFUSkVSaXhGUVVGRlJTeE5RVUZHTEVOQlFWTkhMRlZCUVc1R08wRkJRVUVzYVVKQlEwMXhTaXhoUVVGaE0wa3NVMEZCVXpKR0xHRkJRVlFzUTBGQmRVSXNUVUZCUzNaQ0xFOUJRVTlITERKQ1FVRmFMRWRCUVRCRExFdEJRVEZETEVkQlFXdEVTQ3hQUVVGUFR5eHhRa0ZCYUVZc1EwRkVia0k3TzBGQlIwRXNhVUpCUVVjc1EwRkJRelZHTEUxQlFVMXZSQ3hSUVVGT0xFTkJRV1ZwUnl4TlFVRm1MRVZCUVhWQ2FFVXNUMEZCVDBVc2RVSkJRVGxDTEVOQlFVUXNTVUZCTWtSeFJTeFZRVUU1UkN4RlFVRjVSVHRCUVVOeVJUVktMSFZDUVVGTmIwVXNXVUZCVGl4RFFVRnRRbmRHTEZWQlFXNUNMRVZCUVN0Q0xFMUJRUzlDTzBGQlEwZzdRVUZEU2l4VlFWSkVPMEZCVTBnN1FVRkRTanM3VTBGRk5FSTNTaXhKTEVkQlFYQkNPRWtzWjBJN1UwRkJkVU40UkN4TkxFZEJRV0poTEZNaUxDSm1hV3hsSWpvaVlYQndMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwWEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzVjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5TEZ4dUlGeDBYSFJjZEdsa09pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNiMkZrWldRNklHWmhiSE5sWEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG14dllXUmxaQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvTUNrN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnWmpGbU1qWmhaV0V3TTJVNE1XUTNOR1ZrWVdJaUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEhKY2JseHlYRzVwYlhCdmNuUWdLaUJoY3lCamRYTjBiMjFEYUdWamEySnZlQ0JtY205dElDY3VMMjF2WkhWc1pYTXZZM1Z6ZEc5dFEyaGxZMnRpYjNnbk8xeHlYRzVwYlhCdmNuUWdLaUJoY3lCamRYTjBiMjFUWld4bFkzUWdabkp2YlNBbkxpOXRiMlIxYkdWekwyTjFjM1J2YlZObGJHVmpkQ2M3WEhKY2JseHlYRzRvWm5WdVkzUnBiMjRvS1h0Y2NseHVYSFJjZEdOMWMzUnZiVU5vWldOclltOTRMbWx1YVhRb0tUdGNjbHh1SUNBZ0lHTjFjM1J2YlZObGJHVmpkQzVwYm1sMEtDazdYSEpjYm4wb0tTazdYSEpjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMME02TDFCeWIycGxZM1J6TDFCeWFYWmhkR1V2VjFkRFNDOTBZWE5yTVM5emNtTXZhbk12WVhCd0xtcHpJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHlYRzVjY2x4dWFXMXdiM0owSUNvZ1lYTWdkWFJwYkhNZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqYUdWamEybHVaeWhsS1h0Y2NseHVJQ0FnSUdOdmJuTjBJR3hoWW1Wc0lEMGdaUzUwWVhKblpYUXVibTlrWlU1aGJXVXVkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVW9LU0E5UFQwZ0oyeGhZbVZzSnlBL0lHVXVkR0Z5WjJWMElEb2daUzUwWVhKblpYUXVjR0Z5Wlc1MFRtOWtaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lHTm9aV05yWW05NElEMGdiR0ZpWld3dWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaenRjY2x4dVhISmNiaUFnSUNCcFppZ2hZMmhsWTJ0aWIzZ3VZMmhsWTJ0bFpDbDdYSEpjYmlBZ0lDQWdJQ0FnWTJobFkydGliM2d1WTJobFkydGxaQ0E5SUhSeWRXVTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmxiSE5sZTF4eVhHNGdJQ0FnSUNBZ0lHTm9aV05yWW05NExtTm9aV05yWldRZ1BTQm1ZV3h6WlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdoaGJtUnNaVXRsZVhNb1pTbDdYSEpjYmlBZ0lDQnBaaWhsTG10bGVVTnZaR1VnUFQwOUlERXpJSHg4SUdVdWEyVjVRMjlrWlNBOVBUMGdNeklwZTF4eVhHNGdJQ0FnSUNBZ0lHbG1LR1V1ZEdGeVoyVjBMbU5vWldOclpXUXBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lHVXVkR0Z5WjJWMExtTm9aV05yWldRZ1BTQm1ZV3h6WlRzZ1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUdWc2MyVjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVXVkR0Z5WjJWMExtTm9aV05yWldRZ1BTQjBjblZsTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVc1cGRFTm9aV05yWW05NFpYTW9aV3hsYldWdWRDbDdYSEpjYmlBZ0lDQnNaWFFnWTJobFkydGliM2hsY3lBOUlHVnNaVzFsYm5RZ0ppWWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDaGxiR1Z0Wlc1MEtTQS9JR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29aV3hsYldWdWRDa2dPaUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2RwYm5CMWRGdDBlWEJsUFZ3aVkyaGxZMnRpYjNoY0lsMG5LVHRjY2x4dVhISmNiaUFnSUNCMWRHbHNjeTVtYjNKRllXTm9LR05vWldOclltOTRaWE1zSUdaMWJtTjBhVzl1SUNocGJtUmxlQ3dnZG1Gc2RXVXBJSHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdkR2hwYzBOb1pXTnJZbTk0SUQwZ2RtRnNkV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhOTVlXSmxiQ0E5SUhaaGJIVmxMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkWFJwYkhNdVlXUmtSWFpsYm5Rb2RHaHBjME5vWldOclltOTRMQ0FuYTJWNVpHOTNiaWNzSUdoaGJtUnNaVXRsZVhNcE8xeHlYRzRnSUNBZ0lDQWdJSFYwYVd4ekxtRmtaRVYyWlc1MEtIUm9hWE5NWVdKbGJDd2dKMk5zYVdOckp5d2dZMmhsWTJ0cGJtY3BPMXh5WEc0Z0lDQWdmU2s3WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCN2FXNXBkRU5vWldOclltOTRaWE1nWVhNZ2FXNXBkSDA3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZRem92VUhKdmFtVmpkSE12VUhKcGRtRjBaUzlYVjBOSUwzUmhjMnN4TDNOeVl5OXFjeTl0YjJSMWJHVnpMMk4xYzNSdmJVTm9aV05yWW05NExtcHpJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1ptOXlSV0ZqYUNoaGNuSmhlU3dnWTJGc2JHSmhZMnNzSUhOamIzQmxLU0I3WEhKY2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQmhjbkpoZVM1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5NWpZV3hzS0hOamIzQmxMQ0JwTENCaGNuSmhlVnRwWFNrN0lDOHZJSEJoYzNObGN5QmlZV05ySUhOMGRXWm1JSGRsSUc1bFpXUmNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JjY2x4dVpuVnVZM1JwYjI0Z2FXNXpaWEowUVdaMFpYSW9aV3dzSUhKbFptVnlaVzVqWlU1dlpHVXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpXWmxjbVZ1WTJWT2IyUmxMbkJoY21WdWRFNXZaR1V1YVc1elpYSjBRbVZtYjNKbEtHVnNMQ0J5WldabGNtVnVZMlZPYjJSbExtNWxlSFJUYVdKc2FXNW5LVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNibVoxYm1OMGFXOXVJR0ZrWkVOc1lYTnpLR1ZzTENCamJHRnpjMDVoYldVcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb1pXd3VZMnhoYzNOTWFYTjBLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzTG1Oc1lYTnpUR2x6ZEM1aFpHUW9ZMnhoYzNOT1lXMWxLVHRjY2x4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkM1amJHRnpjMDVoYldVZ0t6MGdKeUFuSUNzZ1kyeGhjM05PWVcxbE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dVhISmNibVoxYm1OMGFXOXVJSEpsYlc5MlpVTnNZWE56S0dWc0xDQmpiR0Z6YzA1aGJXVXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9aV3d1WTJ4aGMzTk1hWE4wS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWc0xtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb1kyeGhjM05PWVcxbEtUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiQzVqYkdGemMwNWhiV1VnS3owZ0p5QW5PMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhSdloyZHNaVU5zWVhOektHVnNMQ0JqYkdGemMwNWhiV1VwZTF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hsYkM1amJHRnpjMHhwYzNRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUdWc0xtTnNZWE56VEdsemRDNTBiMmRuYkdVb1kyeGhjM05PWVcxbEtUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR05zWVhOelpYTWdQU0JsYkM1amJHRnpjMDVoYldVdWMzQnNhWFFvSnlBbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmxlR2x6ZEdsdVowbHVaR1Y0SUQwZ1kyeGhjM05sY3k1cGJtUmxlRTltS0dOc1lYTnpUbUZ0WlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLR1Y0YVhOMGFXNW5TVzVrWlhnZ1BqMGdNQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNObGN5NXpjR3hwWTJVb1pYaHBjM1JwYm1kSmJtUmxlQ3dnTVNrN1hISmNiaUFnSUNBZ0lDQWdJQ0JsYkhObFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpaWE11Y0hWemFDaGpiR0Z6YzA1aGJXVXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJR1ZzTG1Oc1lYTnpUbUZ0WlNBOUlHTnNZWE56WlhNdWFtOXBiaWduSUNjcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dUlDQWdJRnh5WEc1bWRXNWpkR2x2YmlCb1lYTkRiR0Z6Y3lobGJDd2dZMnhoYzNOT1lXMWxLWHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9aV3d1WTJ4aGMzTk1hWE4wS1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb1pXd3VZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLR05zWVhOelRtRnRaU2twZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ1pXeHpaWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvYm1WM0lGSmxaMFY0Y0NnbktGNThJQ2tuSUNzZ1kyeGhjM05PWVcxbElDc2dKeWdnZkNRcEp5d2dKMmRwSnlrdWRHVnpkQ2hsYkM1amJHRnpjMDVoYldVcEtYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzVtZFc1amRHbHZiaUIzY21Gd1ZHRm5JQ2gwYjFkeVlYQXNJSGR5WVhCd1pYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCM2NtRndjR1Z5SUQwZ2QzSmhjSEJsY2lCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9kRzlYY21Gd0xtNWxlSFJUYVdKc2FXNW5LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2VjNKaGNDNXdZWEpsYm5ST2IyUmxMbWx1YzJWeWRFSmxabTl5WlNoM2NtRndjR1Z5TENCMGIxZHlZWEF1Ym1WNGRGTnBZbXhwYm1jcE8xeHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnZWM0poY0M1d1lYSmxiblJPYjJSbExtRndjR1Z1WkVOb2FXeGtLSGR5WVhCd1pYSXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2QzSmhjSEJsY2k1aGNIQmxibVJEYUdsc1pDaDBiMWR5WVhBcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1lXUmtSWFpsYm5Rb1pXeGxiV1Z1ZEN3Z1pYWmxiblJPWVcxbExDQmxkbVZ1ZEVoaGJtUnNaWElzSUdWMlpXNTBRMkZ3ZEhWeVpTa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnZiR1JGZG1WdWRFNWhiV1VnUFNBbmIyNG5JQ3NnWlhabGJuUk9ZVzFsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxYzJWRFlYQjBkWEpsSUQwZ1pYWmxiblJEWVhCMGRYSmxJRDhnWlhabGJuUkRZWEIwZFhKbElEb2dabUZzYzJVN1hISmNibHh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGxkbVZ1ZEU1aGJXVXNJR1YyWlc1MFNHRnVaR3hsY2l3Z2RYTmxRMkZ3ZEhWeVpTazdYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNobGJHVnRaVzUwTG1GMGRHRmphRVYyWlc1MEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVlYUjBZV05vUlhabGJuUW9iMnhrUlhabGJuUk9ZVzFsTENCbGRtVnVkRWhoYm1Sc1pYSXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVJQ0FnSUZ4eVhHNW1kVzVqZEdsdmJpQjBjbWxuWjJWeVJYWmxiblFvWld4bGJXVnVkQ3dnWlhabGJuUlVlWEJsS1h0Y2NseHVJQ0FnSUNBZ0lDQnBaaWduWTNKbFlYUmxSWFpsYm5RbklHbHVJR1J2WTNWdFpXNTBLWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1pYWmxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGZG1WdWRDZ25TRlJOVEVWMlpXNTBjeWNwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWRDNXBibWwwUlhabGJuUW9aWFpsYm5SVWVYQmxMQ0JtWVd4elpTd2dkSEoxWlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblF1WkdsemNHRjBZMmhGZG1WdWRDaGxkbVZ1ZENrN0lDQWdJQ0FnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lHVnNjMlY3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHVjJaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUlhabGJuUlBZbXBsWTNRb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblF1WlhabGJuUlVlWEJsSUQwZ1pYWmxiblJVZVhCbE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1acGNtVkZkbVZ1ZENnbmIyNG5LMlYyWlc1MExtVjJaVzUwVkhsd1pTd2daWFpsYm5RcE8xeHlYRzRnSUNBZ0lDQWdJSDBnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdYSEpjYm1aMWJtTjBhVzl1SUdselZIbHdaVTltS0hSNWNHVXNJRzlpYWlrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCamJHRnpJRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeTVqWVd4c0tHOWlhaWt1YzJ4cFkyVW9PQ3dnTFRFcExuUnZURzlqWVd4bFRHOTNaWEpEWVhObEtDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzlpYWlBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUc5aWFpQWhQVDBnYm5Wc2JDQW1KaUJqYkdGeklEMDlQU0IwZVhCbExuUnZURzlqWVd4bFRHOTNaWEpEWVhObEtDazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JtVjRjRzl5ZENCN1ptOXlSV0ZqYUN3Z2FXNXpaWEowUVdaMFpYSXNJR0ZrWkVOc1lYTnpMQ0J5WlcxdmRtVkRiR0Z6Y3l3Z2RHOW5aMnhsUTJ4aGMzTXNJR2hoYzBOc1lYTnpMQ0IzY21Gd1ZHRm5MQ0JoWkdSRmRtVnVkQ3dnZEhKcFoyZGxja1YyWlc1MExDQnBjMVI1Y0dWUFppQjlPMXh5WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlET2k5UWNtOXFaV04wY3k5UWNtbDJZWFJsTDFkWFEwZ3ZkR0Z6YXpFdmMzSmpMMnB6TDIxdlpIVnNaWE12ZFhScGJITXVhbk1pTENJbmRYTmxJSE4wY21samRDYzdYSEpjYmx4eVhHNXBiWEJ2Y25RZ0tpQmhjeUIxZEdsc2N5Qm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2NseHVYSEpjYm1OdmJuTjBJR052Ym1acFp5QTlJSHRjY2x4dUlDQWdJSE5sYkdWamRFaHBaR1JsYmtOc1lYTnpPaUFuWm05eWJWOWZjMlZzWldOMFgyaHBaR1JsYmljc1hISmNiaUFnSUNCamRYTjBiMjFUWld4bFkzUkNkWFIwYjI1RGJHRnpjem9nSjJOMWMzUnZiUzF6Wld4bFkzUXRZblYwZEc5dUp5eGNjbHh1SUNBZ0lHTjFjM1J2YlZObGJHVmpkRUoxZEhSdmJrOXdaVzVEYkdGemN6b2dKMk4xYzNSdmJTMXpaV3hsWTNRdFluVjBkRzl1WDI5d1pXNG5MRnh5WEc0Z0lDQWdZM1Z6ZEc5dFUyVnNaV04wVTNSaGRIVnpRMnhoYzNNNklDZGpkWE4wYjIwdGMyVnNaV04wTFdKMWRIUnZibDlmYzNSaGRIVnpKeXhjY2x4dUlDQWdJR04xYzNSdmJWTmxiR1ZqZEVsamIyNURiR0Z6Y3pvZ0oyTjFjM1J2YlMxelpXeGxZM1F0WW5WMGRHOXVYMTlwWTI5dUp5eGNjbHh1SUNBZ0lHTjFjM1J2YlZObGJHVmpkRkp2YkdWMFpYaDBRMnhoYzNNNklDZGpkWE4wYjIwdGMyVnNaV04wTFdKMWRIUnZibDlmY205c1pYUmxlSFFuTEZ4eVhHNGdJQ0FnWTNWemRHOXRVMlZzWldOMFRXVnVkVU5zWVhOek9pQW5ZM1Z6ZEc5dExYTmxiR1ZqZEMxdFpXNTFKeXhjY2x4dUlDQWdJR04xYzNSdmJWTmxiR1ZqZEUxbGJuVklhV1JrWlc1RGJHRnpjem9nSjJOMWMzUnZiUzF6Wld4bFkzUXRiV1Z1ZFY5b2FXUmtaVzRuTEZ4eVhHNGdJQ0FnWTNWemRHOXRVMlZzWldOMFRXVnVkVWwwWlcwNklDZGpkWE4wYjIwdGMyVnNaV04wTFcxbGJuVmZYMmwwWlcwbkxGeHlYRzRnSUNBZ1kzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVsMFpXMVRaV3hsWTNSbFpEb2dKMk4xYzNSdmJTMXpaV3hsWTNRdGJXVnVkVjlmYVhSbGJWOXpaV3hsWTNSbFpDY3NYSEpjYmlBZ0lDQmpkWE4wYjIxVFpXeGxZM1JOWlc1MVNYUmxiVTFoY210bFpEb2dKMk4xYzNSdmJTMXpaV3hsWTNRdGJXVnVkVjlmYVhSbGJWOW9iM1psY2kxbWIyTjFjeWNzWEhKY2JpQWdJQ0J5YjJ4bFZHVjRkRG9nSnlCelpXeGxZM1FuWEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnpaWFJEYjI1bWFXY29ZM1Z6ZEc5dFEyOXVabWxuS1h0Y2NseHVJQ0FnSUdOdmJuTjBJRzVsZDBOdmJtWnBaeUE5SUh0OU8xeHlYRzRnSUNBZ1ptOXlLR3hsZENCclpYa2dhVzRnWTNWemRHOXRRMjl1Wm1sbktYdGNjbHh1SUNBZ0lDQWdJQ0JwWmloamIyNW1hV2N1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUc1bGQwTnZibVpwWjF0clpYbGRJRDBnWTNWemRHOXRRMjl1Wm1sblcydGxlVjA3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1QySnFaV04wTG1GemMybG5iaWhqYjI1bWFXY3NJRzVsZDBOdmJtWnBaeWs3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlITm9iM2ROWlc1MUtHVXBlMXh5WEc0Z0lDQWdZMjl1YzNRZ2JXVnVkVWxrSUQwZ1pTNTBZWEpuWlhRdVlYUjBjbWxpZFhSbGMxc25hV1FuWFM1MllXeDFaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lHMWxiblZEYjI1MGNtOXNJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JeWNnS3lCdFpXNTFTV1FwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdZblYwZEc5dVNXUWdQU0J0Wlc1MVNXUXVjM1ZpYzNSeUtEQXNJRzFsYm5WSlpDNXBibVJsZUU5bUtDZE5aVzUxSnlrcElDc2dKMEoxZEhSdmJpY3NYSEpjYmlBZ0lDQWdJQ0FnSUNCaWRYUjBiMjVEYjI1MGNtOXNJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JeWNnS3lCaWRYUjBiMjVKWkNrc1hISmNiaUFnSUNBZ0lDQWdJQ0J6Wld4bFkzUmxaRWwwWlcwZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Njakp5QXJJRzFsYm5WSlpDQXJJQ2NnYkdrdUp5QXJJR052Ym1acFp5NWpkWE4wYjIxVFpXeGxZM1JOWlc1MVNYUmxiVk5sYkdWamRHVmtJQ3NnSnlCaEp5azdYSEpjYmx4eVhHNGdJQ0FnZFhScGJITXVjbVZ0YjNabFEyeGhjM01vYldWdWRVTnZiblJ5YjJ3c0lHTnZibVpwWnk1amRYTjBiMjFUWld4bFkzUk5aVzUxU0dsa1pHVnVRMnhoYzNNcE8xeHlYRzRnSUNBZ2JXVnVkVU52Ym5SeWIyd3VjMlYwUVhSMGNtbGlkWFJsS0NkaGNtbGhMV2hwWkdSbGJpY3NJR1poYkhObEtUdGNjbHh1WEhKY2JpQWdJQ0J6Wld4bFkzUmxaRWwwWlcwdVptOWpkWE1vS1R0Y2NseHVJQ0FnSUhWMGFXeHpMbUZrWkVOc1lYTnpLR0oxZEhSdmJrTnZiblJ5YjJ3c0lHTnZibVpwWnk1amRYTjBiMjFUWld4bFkzUkNkWFIwYjI1UGNHVnVRMnhoYzNNcE95QWdJQ0FnSUNBZ1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2hwWkdWTlpXNTFLR1VwZTF4eVhHNGdJQ0FnWTI5dWMzUWdiV1Z1ZFVsa0lEMGdaUzUwWVhKblpYUXVZWFIwY21saWRYUmxjMXNuYVdRblhTNTJZV3gxWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJRzFsYm5WRGIyNTBjbTlzSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSXljZ0t5QnRaVzUxU1dRcExGeHlYRzRnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVTV1FnUFNCdFpXNTFTV1F1YzNWaWMzUnlLREFzSUcxbGJuVkpaQzVwYm1SbGVFOW1LQ2ROWlc1MUp5a3BJQ3NnSjBKMWRIUnZiaWNzWEhKY2JpQWdJQ0FnSUNBZ0lDQmlkWFIwYjI1RGIyNTBjbTlzSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSXljZ0t5QmlkWFIwYjI1SlpDazdYSEpjYmx4eVhHNGdJQ0FnZFhScGJITXVjbVZ0YjNabFEyeGhjM01vWW5WMGRHOXVRMjl1ZEhKdmJDd2dZMjl1Wm1sbkxtTjFjM1J2YlZObGJHVmpkRUoxZEhSdmJrOXdaVzVEYkdGemN5azdYSEpjYmlBZ0lDQjFkR2xzY3k1aFpHUkRiR0Z6Y3lodFpXNTFRMjl1ZEhKdmJDd2dZMjl1Wm1sbkxtTjFjM1J2YlZObGJHVmpkRTFsYm5WSWFXUmtaVzVEYkdGemN5azdYSEpjYmlBZ0lDQnRaVzUxUTI5dWRISnZiQzV6WlhSQmRIUnlhV0oxZEdVb0oyRnlhV0V0YUdsa1pHVnVKeXdnZEhKMVpTazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhSdloyZHNaVTFsYm5Vb1pTbDdYSEpjYmlBZ0lDQmpiMjV6ZENCdFpXNTFTV1FnUFNCbExuUmhjbWRsZEM1aGRIUnlhV0oxZEdWeld5ZHBaQ2RkTG5aaGJIVmxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ2JXVnVkVU52Ym5SeWIyd2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pKeUFySUcxbGJuVkpaQ2tzWEhKY2JpQWdJQ0FnSUNBZ0lDQmthWE53YkdGNUlEMGdLSGRwYm1SdmR5NW5aWFJEYjIxd2RYUmxaRk4wZVd4bElEOGdaMlYwUTI5dGNIVjBaV1JUZEhsc1pTaHRaVzUxUTI5dWRISnZiQ3dnYm5Wc2JDa2dPaUJ0Wlc1MVEyOXVkSEp2YkM1amRYSnlaVzUwVTNSNWJHVXBMbVJwYzNCc1lYazdYSEpjYmx4eVhHNGdJQ0FnYVdZb1pHbHpjR3hoZVNBOVBUMGdKMjV2Ym1VbktYdGNjbHh1SUNBZ0lDQWdJQ0IxZEdsc2N5NTBjbWxuWjJWeVJYWmxiblFvYldWdWRVTnZiblJ5YjJ3c0lDZHphRzkzSnlrN1hISmNiaUFnSUNCOVhISmNiaUFnSUNCbGJITmxlMXh5WEc0Z0lDQWdJQ0FnSUhWMGFXeHpMblJ5YVdkblpYSkZkbVZ1ZENodFpXNTFRMjl1ZEhKdmJDd2dKMmhwWkdVbktUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYzJWc1pXTjBSV3hsYldWdWRDaGxLWHRjY2x4dUlDQWdJR052Ym5OMElHMWxiblZEYjI1MGNtOXNJRDBnWlM1MFlYSm5aWFF1Y0dGeVpXNTBUbTlrWlM1d1lYSmxiblJPYjJSbExGeHlYRzRnSUNBZ0lDQWdJQ0FnYldWdWRVbGtJRDBnYldWdWRVTnZiblJ5YjJ3dVlYUjBjbWxpZFhSbGMxc25hV1FuWFM1MllXeDFaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lITmxiR1ZqZEVOdmJuUnliMnhKWkNBOUlHMWxiblZKWkM1emRXSnpkSElvTUN3Z2JXVnVkVWxrTG1sdVpHVjRUMllvSjAxbGJuVW5LU2tzWEhKY2JpQWdJQ0FnSUNBZ0lDQnpaV3hsWTNSRGIyNTBjbTlzSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSXljcmMyVnNaV04wUTI5dWRISnZiRWxrS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJrTnZiblJ5YjJ4SlpDQTlJRzFsYm5WSlpDNXpkV0p6ZEhJb01Dd2diV1Z1ZFVsa0xtbHVaR1Y0VDJZb0owMWxiblVuS1NrZ0t5QW5RblYwZEc5dUp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUhObGJHVmpkR1ZrSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSXljcmJXVnVkVWxrSUNzZ0p5QnNhUzRuSUNzZ1kyOXVabWxuTG1OMWMzUnZiVk5sYkdWamRFMWxiblZKZEdWdFUyVnNaV04wWldRcExGeHlYRzRnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVVM1JoZEhWeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkl5Y2dLeUJpZFhSMGIyNURiMjUwY205c1NXUWdLeUFuSUM0bklDc2dZMjl1Wm1sbkxtTjFjM1J2YlZObGJHVmpkRk4wWVhSMWMwTnNZWE56S1N4Y2NseHVJQ0FnSUNBZ0lDQWdJSFJvYVhORmJHVnRJRDBnWlM1MFlYSm5aWFF1Y0dGeVpXNTBUbTlrWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJR2x1WkdWNElEMGdaUzUwWVhKblpYUXVZWFIwY21saWRYUmxjMXNuWkdGMFlTMXBibVJsZUNkZExuWmhiSFZsTzF4eVhHNWNjbHh1SUNBZ0lIVjBhV3h6TG5KbGJXOTJaVU5zWVhOektITmxiR1ZqZEdWa0xDQmpiMjVtYVdjdVkzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVsMFpXMVRaV3hsWTNSbFpDazdYSEpjYmlBZ0lDQjFkR2xzY3k1aFpHUkRiR0Z6Y3loMGFHbHpSV3hsYlN3Z1kyOXVabWxuTG1OMWMzUnZiVk5sYkdWamRFMWxiblZKZEdWdFUyVnNaV04wWldRcE8xeHlYRzRnSUNBZ2MyVnNaV04wWldRdWMyVjBRWFIwY21saWRYUmxLQ2RoY21saExYTmxiR1ZqZEdWa0p5d2dabUZzYzJVcE8xeHlYRzRnSUNBZ2RHaHBjMFZzWlcwdWMyVjBRWFIwY21saWRYUmxLQ2RoY21saExYTmxiR1ZqZEdWa0p5d2dkSEoxWlNrN1hISmNibHh5WEc0Z0lDQWdZblYwZEc5dVUzUmhkSFZ6TG5SbGVIUkRiMjUwWlc1MElEMGdaUzUwWVhKblpYUXVkR1Y0ZEVOdmJuUmxiblE3WEhKY2JseHlYRzRnSUNBZ2RYUnBiSE11ZEhKcFoyZGxja1YyWlc1MEtHMWxiblZEYjI1MGNtOXNMQ0FuYUdsa1pTY3BPMXh5WEc1Y2NseHVJQ0FnSUhObGJHVmpkRU52Ym5SeWIyd3VjMlZzWldOMFpXUkpibVJsZUNBOUlHbHVaR1Y0TzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmpiR2xqYTB4cGJtc29aU2w3WEhKY2JpQWdJQ0IxZEdsc2N5NTBjbWxuWjJWeVJYWmxiblFvWlM1MFlYSm5aWFFzSUNkelpXeGxZM1FuS1R0Y2NseHVJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1RzZ1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJRzFoY210TWFXNXJLR1VwZTF4eVhHNGdJQ0FnWTI5dWMzUWdiV1Z1ZFVOdmJuUnliMndnUFNCbExuUmhjbWRsZEM1d1lYSmxiblJPYjJSbExuQmhjbVZ1ZEU1dlpHVXNYSEpjYmlBZ0lDQWdJQ0FnSUNCdFpXNTFTV1FnUFNCdFpXNTFRMjl1ZEhKdmJDNWhkSFJ5YVdKMWRHVnpXeWRwWkNkZExuWmhiSFZsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdiV0Z5YTJWa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkl5Y3JiV1Z1ZFVsa0lDc2dKeUJzYVM0bklDc2dZMjl1Wm1sbkxtTjFjM1J2YlZObGJHVmpkRTFsYm5WSmRHVnRUV0Z5YTJWa0tTeGNjbHh1SUNBZ0lDQWdJQ0FnSUhSb2FYTkZiR1Z0SUQwZ1pTNTBZWEpuWlhRdWNHRnlaVzUwVG05a1pUdGNjbHh1WEhKY2JpQWdJQ0JwWmlodFlYSnJaV1FwZTF4eVhHNGdJQ0FnSUNBZ0lIVjBhV3h6TG5KbGJXOTJaVU5zWVhOektHMWhjbXRsWkN3Z1kyOXVabWxuTG1OMWMzUnZiVk5sYkdWamRFMWxiblZKZEdWdFRXRnlhMlZrS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhWMGFXeHpMbUZrWkVOc1lYTnpLSFJvYVhORmJHVnRMQ0JqYjI1bWFXY3VZM1Z6ZEc5dFUyVnNaV04wVFdWdWRVbDBaVzFOWVhKclpXUXBPMXh5WEc0Z0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPeUFnSUZ4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjFibTFoY210TWFXNXJLR1VwZTF4eVhHNGdJQ0FnWTI5dWMzUWdkR2hwYzBWc1pXMGdQU0JsTG5SaGNtZGxkQzV3WVhKbGJuUk9iMlJsTzF4eVhHNWNjbHh1SUNBZ0lHbG1LSFJvYVhORmJHVnRLWHRjY2x4dUlDQWdJQ0FnSUNCMWRHbHNjeTV5WlcxdmRtVkRiR0Z6Y3loMGFHbHpSV3hsYlN3Z1kyOXVabWxuTG1OMWMzUnZiVk5sYkdWamRFMWxiblZKZEdWdFRXRnlhMlZrS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1RzZ0lDQmNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWW5WMGRHOXVRMnhwWTJzb1pTbDdYSEpjYmlBZ0lDQmpiMjV6ZENCdFpXNTFJRDBnWlM1MFlYSm5aWFF1Ym05a1pVNWhiV1V1ZEc5TWIzZGxja05oYzJVb0tTQTlQVDBnSjJFbklEOGdaUzUwWVhKblpYUXVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5JRG9nWlM1MFlYSm5aWFF1Y0dGeVpXNTBUbTlrWlM1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jN1hISmNibHh5WEc0Z0lDQWdkWFJwYkhNdWRISnBaMmRsY2tWMlpXNTBLRzFsYm5Vc0lDZDBiMmRuYkdVbktUdGNjbHh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYUdGdVpHeGxRblYwZEc5dVMyVjVaRzkzYmlobEtYdGNjbHh1SUNBZ0lHTnZibk4wSUdKMWRIUnZia2xrSUQwZ1pTNTBZWEpuWlhRdVlYUjBjbWxpZFhSbGMxc25hV1FuWFM1MllXeDFaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtOdmJuUnliMndnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqSnlBcklHSjFkSFJ2Ymtsa0tTeGNjbHh1SUNBZ0lDQWdJQ0FnSUhObGJHVmpkRU52Ym5SeWIyeEpaQ0E5SUdKMWRIUnZia2xrTG5OMVluTjBjaWd3TENCaWRYUjBiMjVKWkM1cGJtUmxlRTltS0NkQ2RYUjBiMjRuS1Nrc1hISmNiaUFnSUNBZ0lDQWdJQ0J6Wld4bFkzUkRiMjUwY205c0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkl5Y2dLeUJ6Wld4bFkzUkRiMjUwY205c1NXUXBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ2JXVnVkVWxrSUQwZ2MyVnNaV04wUTI5dWRISnZiRWxrSUNzZ0owMWxiblVuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdjMlZzWldOMFpXUkpibVJsZUNBOUlITmxiR1ZqZEVOdmJuUnliMnd1YzJWc1pXTjBaV1JKYm1SbGVDeGNjbHh1SUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJUWld4bFkzUmxaRXhwSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSXljZ0t5QnRaVzUxU1dRZ0t5QW5JR3hwSUdGYlpHRjBZUzFwYm1SbGVEMWNJaWNnS3lCelpXeGxZM1JsWkVsdVpHVjRJQ3NnSjF3aVhTY3BMbkJoY21WdWRFNXZaR1U3WEhKY2JseHlYRzRnSUNBZ2MzZHBkR05vS0dVdWEyVjVRMjlrWlNsN1hISmNiaUFnSUNBZ0lDQWdZMkZ6WlNBeE16cGNjbHh1SUNBZ0lDQWdJQ0JqWVhObElETXlPbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1MGNtbG5aMlZ5UlhabGJuUW9ZblYwZEc5dVEyOXVkSEp2YkN3Z0oyMXZkWE5sWkc5M2JpY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4eVhHNGdJQ0FnSUNBZ0lHTmhjMlVnTXpjNlhISmNiaUFnSUNBZ0lDQWdZMkZ6WlNBek9EcGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9ZM1Z5Y21WdWRGTmxiR1ZqZEdWa1RHa3VjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1WnlsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1MGNtbG5aMlZ5UlhabGJuUW9ZM1Z5Y21WdWRGTmxiR1ZqZEdWa1RHa3VjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amFHbHNaSEpsYmxzd1hTd2dKM05sYkdWamRDY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0FnSUNBZ1kyRnpaU0F6T1RwY2NseHVJQ0FnSUNBZ0lDQmpZWE5sSURRd09seHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaGpkWEp5Wlc1MFUyVnNaV04wWldSTWFTNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3BlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVkSEpwWjJkbGNrVjJaVzUwS0dOMWNuSmxiblJUWld4bFkzUmxaRXhwTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1amFHbHNaSEpsYmxzd1hTd2dKM05sYkdWamRDY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHaGhibVJzWlUxbGJuVkxaWGxrYjNkdUtHVXBlMXh5WEc0Z0lDQWdZMjl1YzNRZ2RHaHBjMFZzWlcwZ1BTQmxMblJoY21kbGRDeGNjbHh1SUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJUWld4bFkzUmxaRXhwSUQwZ2RHaHBjMFZzWlcwdWNHRnlaVzUwVG05a1pTeGNjbHh1SUNBZ0lDQWdJQ0FnSUcxbGJuVkRiMjUwY205c0lEMGdZM1Z5Y21WdWRGTmxiR1ZqZEdWa1RHa3VjR0Z5Wlc1MFRtOWtaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lHMWxiblZKWkNBOUlHMWxiblZEYjI1MGNtOXNMbUYwZEhKcFluVjBaWE5iSjJsa0oxMHVkbUZzZFdVc1hISmNiaUFnSUNBZ0lDQWdJQ0JpZFhSMGIyNUpaQ0E5SUcxbGJuVkpaQzV6ZFdKemRISW9NQ3dnYldWdWRVbGtMbWx1WkdWNFQyWW9KMDFsYm5VbktTa2dLeUFuUW5WMGRHOXVKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtOdmJuUnliMndnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqSnlBcklHSjFkSFJ2Ymtsa0tUdGNjbHh1WEhKY2JpQWdJQ0J6ZDJsMFkyZ29aUzVyWlhsRGIyUmxLWHRjY2x4dUlDQWdJQ0FnSUNCallYTmxJREV6T2x4eVhHNGdJQ0FnSUNBZ0lHTmhjMlVnTXpJNlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhWMGFXeHpMblJ5YVdkblpYSkZkbVZ1ZENoMGFHbHpSV3hsYlN3Z0ozTmxiR1ZqZENjcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdJQ0FnSUdOaGMyVWdNemM2WEhKY2JpQWdJQ0FnSUNBZ1kyRnpaU0F6T0RwY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb1kzVnljbVZ1ZEZObGJHVmpkR1ZrVEdrdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeWw3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVTJWc1pXTjBaV1JNYVM1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5MbU5vYVd4a2NtVnVXekJkTG1adlkzVnpLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNBZ0lDQmpZWE5sSURNNU9seHlYRzRnSUNBZ0lDQWdJR05oYzJVZ05EQTZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LR04xY25KbGJuUlRaV3hsWTNSbFpFeHBMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeWw3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVTJWc1pXTjBaV1JNYVM1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyaHBiR1J5Wlc1Yk1GMHVabTlqZFhNb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdJQ0FnSUdOaGMyVWdPVHBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdWRISnBaMmRsY2tWMlpXNTBLRzFsYm5WRGIyNTBjbTlzTENBbmFHbGtaU2NwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JpZFhSMGIyNURiMjUwY205c0xtWnZZM1Z6S0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUdsdWFYUkRkWE4wYjIxVFpXeGxZM1FvWld4bGJXVnVkQ3dnWTNWemRHOXRRMjl1Wm1sbktYdGNjbHh1SUNBZ0lHTnZibk4wSUhObGJHVmpkRk5sYkdWamRHOXljeUE5SUdWc1pXMWxiblFnSmlZZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNobGJHVnRaVzUwS1NBL0lHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b1pXeGxiV1Z1ZENrZ09pQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDZHpaV3hsWTNRbktUdGNjbHh1WEhKY2JpQWdJQ0F2TDBOb1pXTnJjeUIwYUdGMElHTnZibVpwWnlCbGVHbHpkQ3dnYVdZZ1pYaHBjM1J6SUdGdVpDQjBhR1ZwY2lCd2NtOXdaWEowYVdWeklHRnlaU0IyWVd4cFpDQjBhR1VnWTNWemRHOXRJR052Ym1acFp5QnZZbXBsWTNRZ2IzWmxjbmR5YVhSbGN5QmtaV1poZFd4MElHTnZibVpwWnlCdlltcGxZM1JjY2x4dUlDQWdJR2xtS0dOMWMzUnZiVU52Ym1acFp5QW1KaUIxZEdsc2N5NXBjMVI1Y0dWUFppZ25UMkpxWldOMEp5d2dZM1Z6ZEc5dFEyOXVabWxuS1NsN1hISmNiaUFnSUNBZ0lDQWdjMlYwUTI5dVptbG5LR04xYzNSdmJVTnZibVpwWnlrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lvYzJWc1pXTjBVMlZzWldOMGIzSnpLWHRjY2x4dUlDQWdJQ0FnSUNCMWRHbHNjeTVtYjNKRllXTm9LSE5sYkdWamRGTmxiR1ZqZEc5eWN5d2dablZ1WTNScGIyNGdLR2x1WkdWNExDQjJZV3gxWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdkR2hwYzFObGJHVmpkQ0E5SUhaaGJIVmxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxTmxiR1ZqZEVsa0lEMGdkR2hwYzFObGJHVmpkQzVuWlhSQmRIUnlhV0oxZEdVb0oybGtKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpUR0ZpWld3Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Nkc1lXSmxiRnRtYjNJOVhDSW5LM1JvYVhOVFpXeGxZM1JKWkNzblhDSmRKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJtbDBhV0ZzVTJWc1pXTjBaV1JKYm1SbGVDQTlJSFJvYVhOVFpXeGxZM1F1YzJWc1pXTjBaV1JKYm1SbGVDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRHVmtUM0IwYVc5dVZHVjRkQ0E5SUhSb2FYTlRaV3hsWTNRdVkyaHBiR1J5Wlc1YmFXNXBkR2xoYkZObGJHVmpkR1ZrU1c1a1pYaGRMblJsZUhRc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlkWFIwYjI1SlpDQTlJSFJvYVhOVFpXeGxZM1JKWkNBcklDZENkWFIwYjI0bkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV1Z1ZFVsa0lEMGdkR2hwYzFObGJHVmpkRWxrSUNzZ0owMWxiblVuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luVjBkRzl1SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWVNjcExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlZzWldOMFRXVnVkVk4wWVhSMWN5QTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0ozTndZVzRuS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEUxbGJuVkpZMjl1SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duYzNCaGJpY3BMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY205c1pWUmxlSFFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2R6Y0dGdUp5a3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0Wlc1MUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbmRXd25LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlEzSmxZWFJsSUdKMWRIUnZibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkRiR0Z6Y3loaWRYUjBiMjRzSUdOdmJtWnBaeTVqZFhOMGIyMVRaV3hsWTNSQ2RYUjBiMjVEYkdGemN5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFkSFJ2Ymk1elpYUkJkSFJ5YVdKMWRHVW9KMmxrSnl3Z1luVjBkRzl1U1dRcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRYUjBiMjR1YzJWMFFYUjBjbWxpZFhSbEtDZHliMnhsSnl3Z0oySjFkSFJ2YmljcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRYUjBiMjR1YzJWMFFYUjBjbWxpZFhSbEtDZG9jbVZtSnl3Z0p5TW5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZblYwZEc5dUxuTmxkRUYwZEhKcFluVjBaU2duWVhKcFlTMW9ZWE53YjNCMWNDY3NJQ2QwY25WbEp5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFkSFJ2Ymk1elpYUkJkSFJ5YVdKMWRHVW9KMkZ5YVdFdGIzZHVjeWNzSUcxbGJuVkpaQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJpNWhjSEJsYm1SRGFHbHNaQ2h6Wld4bFkzUk5aVzUxVTNSaGRIVnpLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZblYwZEc5dUxtRndjR1Z1WkVOb2FXeGtLSE5sYkdWamRFMWxiblZKWTI5dUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1luVjBkRzl1TG1Gd2NHVnVaRU5vYVd4a0tISnZiR1ZVWlhoMEtUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2VTJWMGN5QmlkWFIwYjI0Z2MzUmhkSFZ6SUdOc1lYTnpJR0Z1WkNCMFpYaDBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIVjBhV3h6TG1Ga1pFTnNZWE56S0hObGJHVmpkRTFsYm5WVGRHRjBkWE1zSUdOdmJtWnBaeTVqZFhOMGIyMVRaV3hsWTNSVGRHRjBkWE5EYkdGemN5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEUxbGJuVlRkR0YwZFhNdWRHVjRkRU52Ym5SbGJuUWdQU0J6Wld4bFkzUmxaRTl3ZEdsdmJsUmxlSFE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwwRmtaQ0JqYkdGemMyVnpJSFJ2SUdKMWRIUnZiaUJwWTI5dUlHRnVaQ0J5YjJ4bElIUmxlSFJjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdVlXUmtRMnhoYzNNb2MyVnNaV04wVFdWdWRVbGpiMjRzSUdOdmJtWnBaeTVqZFhOMGIyMVRaV3hsWTNSSlkyOXVRMnhoYzNNcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVoWkdSRGJHRnpjeWh5YjJ4bFZHVjRkQ3dnWTI5dVptbG5MbU4xYzNSdmJWTmxiR1ZqZEZKdmJHVjBaWGgwUTJ4aGMzTXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk5TmIzWmxJR0Z1SUdGMGRISnBZblYwWlNCMFlXSnBibVJsZUNCbWNtOXRJSE5sYkdWamRDQjBieUJpZFhSMGIyNHNJRzl1YkhrZ2FXWWdkR2hwY3lCaGRIUnlhV0oxZEdVZ1pYaHBjM1J6WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTlRaV3hsWTNRdVoyVjBRWFIwY21saWRYUmxLQ2QwWVdKcGJtUmxlQ2NwS1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSjFkSFJ2Ymk1elpYUkJkSFJ5YVdKMWRHVW9KM1JoWW1sdVpHVjRKeXdnZEdocGMxTmxiR1ZqZEM1blpYUkJkSFJ5YVdKMWRHVW9KM1JoWW1sdVpHVjRKeWtwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwwbHVjMlZ5ZENCaWRYUjBiMjRnWVdaMFpYSWdjMlZzWldOMElGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVwYm5ObGNuUkJablJsY2loaWRYUjBiMjRzSUhSb2FYTlRaV3hsWTNRcE8xeHlYRzVjY2x4dVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMME55WldGMFpTQnRaVzUxSUdWc1pXMWxiblJjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdVlXUmtRMnhoYzNNb2JXVnVkU3dnWTI5dVptbG5MbU4xYzNSdmJWTmxiR1ZqZEUxbGJuVkRiR0Z6Y3lrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUcxbGJuVXVjMlYwUVhSMGNtbGlkWFJsS0NkcFpDY3NJRzFsYm5WSlpDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWxiblV1YzJWMFFYUjBjbWxpZFhSbEtDZHliMnhsSnl3Z0oyeHBjM1JpYjNnbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXVnVkUzV6WlhSQmRIUnlhV0oxZEdVb0oyRnlhV0V0YUdsa1pHVnVKeXdnSjNSeWRXVW5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiV1Z1ZFM1elpYUkJkSFJ5YVdKMWRHVW9KMkZ5YVdFdGJHRmlaV3hzWldSaWVTY3NJR0oxZEhSdmJrbGtLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlEzSmxZWFJsSUcxbGJuVWdaV3hsYldWdWRDQmphR2xzWkhKbGJseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVtYjNKRllXTm9LSFJvYVhOVFpXeGxZM1F1WTJocGJHUnlaVzRzSUdaMWJtTjBhVzl1S0dsdVpHVjRMQ0IyWVd4MVpTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2FYUmxiU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMnhwSnlrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdsdWF5QTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyRW5LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNhVzVyTG5ObGRFRjBkSEpwWW5WMFpTZ25hSEpsWmljc0lDY2pKeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc2FXNXJMbk5sZEVGMGRISnBZblYwWlNnbmRHRmlhVzVrWlhnbkxDQW5MVEVuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeHBibXN1YzJWMFFYUjBjbWxpZFhSbEtDZHliMnhsSnl3Z0oyOXdkR2x2YmljcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR2x1YXk1elpYUkJkSFJ5YVdKMWRHVW9KMkZ5YVdFdGMyVnNaV04wWldRbkxDQW5abUZzYzJVbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hwYm1zdWMyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExXbHVaR1Y0Snl3Z2FXNWtaWGdwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHbHVheTUwWlhoMFEyOXVkR1Z1ZENBOUlIWmhiSFZsTG5SbGVIUkRiMjUwWlc1ME8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsMFpXMHVZWEJ3Wlc1a1EyaHBiR1FvYkdsdWF5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9hVzVrWlhnZ1BUMDlJR2x1YVhScFlXeFRaV3hsWTNSbFpFbHVaR1Y0S1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NWhaR1JEYkdGemN5aHBkR1Z0TENCamIyNW1hV2N1WTNWemRHOXRVMlZzWldOMFRXVnVkVWwwWlcxVFpXeGxZM1JsWkNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJTNXpaWFJCZEhSeWFXSjFkR1VvSjJGeWFXRXRjMlZzWldOMFpXUW5MQ0FuZEhKMVpTY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JXVnVkUzVoY0hCbGJtUkRhR2xzWkNocGRHVnRLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwwbHVjMlZ5ZENCdFpXNTFJR0ZtZEdWeUlHSjFkSFJ2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NXBibk5sY25SQlpuUmxjaWh0Wlc1MUxDQmlkWFIwYjI0cE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVoWkdSRGJHRnpjeWh0Wlc1MUxDQmpiMjVtYVdjdVkzVnpkRzl0VTJWc1pXTjBUV1Z1ZFVocFpHUmxia05zWVhOektUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2VTJWMElISnZiR1VnWVhCd2JHbGpZWFJwYjI0Z2RHOGdZbTlrZVNCbWIzSWdaWGgwWlc1a1pXUWdkbVZ5YzJsdmJpQnZaaUJ6Wld4bFkzUWdZMjl1ZEhKdmJGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2RpYjJSNUp5a3VjMlYwUVhSMGNtbGlkWFJsS0NkeWIyeGxKeXdnSjJGd2NHeHBZMkYwYVc5dUp5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JXVnVkVTl3ZEdsdmJuTWdQU0JiWFR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIVjBhV3h6TG1admNrVmhZMmdvYldWdWRTNWphR2xzWkhKbGJpd2dablZ1WTNScGIyNG9hVzVrWlhnc0lIWmhiSFZsS1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JzYVc1cklEMGdkbUZzZFdVdVkyaHBiR1JPYjJSbGMxc3dYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtHeHBibXNwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzFsYm5WUGNIUnBiMjV6TG5CMWMyZ29iR2x1YXlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVZV1JrUlhabGJuUW9iR2x1YXl3Z0oyTnNhV05ySnl3Z1kyeHBZMnRNYVc1cktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVoWkdSRmRtVnVkQ2hzYVc1ckxDQW5jMlZzWldOMEp5d2djMlZzWldOMFJXeGxiV1Z1ZENrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVZV1JrUlhabGJuUW9iR2x1YXl3Z0oyMXZkWE5sYjNabGNpY3NJRzFoY210TWFXNXJLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkZkbVZ1ZENoc2FXNXJMQ0FuWm05amRYTW5MQ0J0WVhKclRHbHVheWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdVlXUmtSWFpsYm5Rb2JHbHVheXdnSjIxdmRYTmxiM1YwSnl3Z2RXNXRZWEpyVEdsdWF5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiSE11WVdSa1JYWmxiblFvYkdsdWF5d2dKMkpzZFhJbkxDQjFibTFoY210TWFXNXJLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMEpwYm1RZ2JtOXVjM1JoYm1SaGNtUWdaWFpsYm5SelhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhWMGFXeHpMbUZrWkVWMlpXNTBLRzFsYm5Vc0lDZHphRzkzSnl3Z2MyaHZkMDFsYm5VcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTVoWkdSRmRtVnVkQ2h0Wlc1MUxDQW5hR2xrWlNjc0lHaHBaR1ZOWlc1MUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiSE11WVdSa1JYWmxiblFvYldWdWRTd2dKM1J2WjJkc1pTY3NJSFJ2WjJkc1pVMWxiblVwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NWhaR1JGZG1WdWRDaHRaVzUxTENBbmEyVjVaRzkzYmljc0lHaGhibVJzWlUxbGJuVkxaWGxrYjNkdUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiSE11WVdSa1JYWmxiblFvWW5WMGRHOXVMQ0FuYlc5MWMyVmtiM2R1Snl3Z1luVjBkRzl1UTJ4cFkyc3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkZkbVZ1ZENoaWRYUjBiMjRzSUNkamJHbGpheWNzSUdaMWJtTjBhVzl1S0dVcGUyVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdDlLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdVlXUmtSWFpsYm5Rb1luVjBkRzl1TENBbmEyVjVaRzkzYmljc0lHaGhibVJzWlVKMWRIUnZia3RsZVdSdmQyNHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkRiR0Z6Y3loMGFHbHpVMlZzWldOMExDQmpiMjVtYVdjdWMyVnNaV04wU0dsa1pHVnVRMnhoYzNNcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpVMlZzWldOMExuTmxkRUYwZEhKcFluVjBaU2duWVhKcFlTMW9hV1JrWlc0bkxDQjBjblZsS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxTmxiR1ZqZEM1elpYUkJkSFJ5YVdKMWRHVW9KM1JoWW1sdVpHVjRKeXdnSnkweEp5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDBKcGJtUWdZU0JzWVdKbGJDQnZaaUJ6Wld4bFkzUWdkMmwwYUNCdVpYY2dZblYwZEc5dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTk1ZV0psYkM1elpYUkJkSFJ5YVdKMWRHVW9KMlp2Y2ljc0lHSjFkSFJ2Ymtsa0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RYUnBiSE11WVdSa1JYWmxiblFvZEdocGMweGhZbVZzTENBblkyeHBZMnNuTENCbWRXNWpkR2x2YmlncGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblYwZEc5dUxtWnZZM1Z6S0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZMMGhwWkdVZ2JXVnVkU0JoWm5SbGNpQmpiR2xqYXlCdmRYUnphV1JsSUhSb1pTQmlkWFIwYjI1Y2NseHVJQ0FnSUNBZ0lDQjFkR2xzY3k1aFpHUkZkbVZ1ZENoa2IyTjFiV1Z1ZEN3Z0oyTnNhV05ySnl3Z1puVnVZM1JwYjI0b1pTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWW5WMGRHOXVJRDBnWlM1MFlYSm5aWFF1Ym05a1pVNWhiV1V1ZEc5TWIyTmhiR1ZNYjNkbGNrTmhjMlVvS1NBOVBUMGdKMkVuSUQ4Z1pTNTBZWEpuWlhRZ09pQmxMblJoY21kbGRDNXdZWEpsYm5ST2IyUmxMQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IzQmxibVZrVFdWdWRTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NG5LeUJqYjI1bWFXY3VZM1Z6ZEc5dFUyVnNaV04wUW5WMGRHOXVUM0JsYmtOc1lYTnpJQ3NnSnlzZ0xpY2dLeUJqYjI1bWFXY3VZM1Z6ZEc5dFUyVnNaV04wVFdWdWRVTnNZWE56S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LQ0YxZEdsc2N5NW9ZWE5EYkdGemN5aGlkWFIwYjI0c0lHTnZibVpwWnk1amRYTjBiMjFUWld4bFkzUkNkWFIwYjI1RGJHRnpjeWtnSmlZZ2IzQmxibVZrVFdWdWRTbDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxZEdsc2N5NTBjbWxuWjJWeVJYWmxiblFvYjNCbGJtVmtUV1Z1ZFN3Z0oyaHBaR1VuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnZXlCcGJtbDBRM1Z6ZEc5dFUyVnNaV04wSUdGeklHbHVhWFFzSUhObGRFTnZibVpwWnlCaGN5QmpiMjVtYVdjZ2ZUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5RE9pOVFjbTlxWldOMGN5OVFjbWwyWVhSbEwxZFhRMGd2ZEdGemF6RXZjM0pqTDJwekwyMXZaSFZzWlhNdlkzVnpkRzl0VTJWc1pXTjBMbXB6SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSJ9
=======
/*!
 * validate.js 0.11.1
 *
 * (c) 2013-2016 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */

(function(exports, module, define) {
  "use strict";

  // The main function that calls the validators specified by the constraints.
  // The options are the following:
  //   - format (string) - An option that controls how the returned value is formatted
  //     * flat - Returns a flat array of just the error messages
  //     * grouped - Returns the messages grouped by attribute (default)
  //     * detailed - Returns an array of the raw validation data
  //   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
  //
  // Please note that the options are also passed to each validator.
  var validate = function(attributes, constraints, options) {
    options = v.extend({}, v.options, options);

    var results = v.runValidations(attributes, constraints, options)
      , attr
      , validator;

    for (attr in results) {
      for (validator in results[attr]) {
        if (v.isPromise(results[attr][validator])) {
          throw new Error("Use validate.async if you want support for promises");
        }
      }
    }
    return validate.processValidationResults(results, options);
  };

  var v = validate;

  // Copies over attributes from one or more sources to a single destination.
  // Very much similar to underscore's extend.
  // The first argument is the target object and the remaining arguments will be
  // used as sources.
  v.extend = function(obj) {
    [].slice.call(arguments, 1).forEach(function(source) {
      for (var attr in source) {
        obj[attr] = source[attr];
      }
    });
    return obj;
  };

  v.extend(validate, {
    // This is the version of the library as a semver.
    // The toString function will allow it to be coerced into a string
    version: {
      major: 0,
      minor: 11,
      patch: 1,
      metadata: null,
      toString: function() {
        var version = v.format("%{major}.%{minor}.%{patch}", v.version);
        if (!v.isEmpty(v.version.metadata)) {
          version += "+" + v.version.metadata;
        }
        return version;
      }
    },

    // Below is the dependencies that are used in validate.js

    // The constructor of the Promise implementation.
    // If you are using Q.js, RSVP or any other A+ compatible implementation
    // override this attribute to be the constructor of that promise.
    // Since jQuery promises aren't A+ compatible they won't work.
    Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */ null,

    EMPTY_STRING_REGEXP: /^\s*$/,

    // Runs the validators specified by the constraints object.
    // Will return an array of the format:
    //     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
    runValidations: function(attributes, constraints, options) {
      var results = []
        , attr
        , validatorName
        , value
        , validators
        , validator
        , validatorOptions
        , error;

      if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
        attributes = v.collectFormValues(attributes);
      }

      // Loops through each constraints, finds the correct validator and run it.
      for (attr in constraints) {
        value = v.getDeepObjectValue(attributes, attr);
        // This allows the constraints for an attribute to be a function.
        // The function will be called with the value, attribute name, the complete dict of
        // attributes as well as the options and constraints passed in.
        // This is useful when you want to have different
        // validations depending on the attribute value.
        validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

        for (validatorName in validators) {
          validator = v.validators[validatorName];

          if (!validator) {
            error = v.format("Unknown validator %{name}", {name: validatorName});
            throw new Error(error);
          }

          validatorOptions = validators[validatorName];
          // This allows the options to be a function. The function will be
          // called with the value, attribute name, the complete dict of
          // attributes as well as the options and constraints passed in.
          // This is useful when you want to have different
          // validations depending on the attribute value.
          validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
          if (!validatorOptions) {
            continue;
          }
          results.push({
            attribute: attr,
            value: value,
            validator: validatorName,
            globalOptions: options,
            attributes: attributes,
            options: validatorOptions,
            error: validator.call(validator,
                value,
                validatorOptions,
                attr,
                attributes,
                options)
          });
        }
      }

      return results;
    },

    // Takes the output from runValidations and converts it to the correct
    // output format.
    processValidationResults: function(errors, options) {
      errors = v.pruneEmptyErrors(errors, options);
      errors = v.expandMultipleErrors(errors, options);
      errors = v.convertErrorMessages(errors, options);

      var format = options.format || "grouped";

      if (typeof v.formatters[format] === 'function') {
        errors = v.formatters[format](errors);
      } else {
        throw new Error(v.format("Unknown format %{format}", options));
      }

      return v.isEmpty(errors) ? undefined : errors;
    },

    // Runs the validations with support for promises.
    // This function will return a promise that is settled when all the
    // validation promises have been completed.
    // It can be called even if no validations returned a promise.
    async: function(attributes, constraints, options) {
      options = v.extend({}, v.async.options, options);

      var WrapErrors = options.wrapErrors || function(errors) {
        return errors;
      };

      // Removes unknown attributes
      if (options.cleanAttributes !== false) {
        attributes = v.cleanAttributes(attributes, constraints);
      }

      var results = v.runValidations(attributes, constraints, options);

      return new v.Promise(function(resolve, reject) {
        v.waitForResults(results).then(function() {
          var errors = v.processValidationResults(results, options);
          if (errors) {
            reject(new WrapErrors(errors, options, attributes, constraints));
          } else {
            resolve(attributes);
          }
        }, function(err) {
          reject(err);
        });
      });
    },

    single: function(value, constraints, options) {
      options = v.extend({}, v.single.options, options, {
        format: "flat",
        fullMessages: false
      });
      return v({single: value}, {single: constraints}, options);
    },

    // Returns a promise that is resolved when all promises in the results array
    // are settled. The promise returned from this function is always resolved,
    // never rejected.
    // This function modifies the input argument, it replaces the promises
    // with the value returned from the promise.
    waitForResults: function(results) {
      // Create a sequence of all the results starting with a resolved promise.
      return results.reduce(function(memo, result) {
        // If this result isn't a promise skip it in the sequence.
        if (!v.isPromise(result.error)) {
          return memo;
        }

        return memo.then(function() {
          return result.error.then(function(error) {
            result.error = error || null;
          });
        });
      }, new v.Promise(function(r) { r(); })); // A resolved promise
    },

    // If the given argument is a call: function the and: function return the value
    // otherwise just return the value. Additional arguments will be passed as
    // arguments to the function.
    // Example:
    // ```
    // result('foo') // 'foo'
    // result(Math.max, 1, 2) // 2
    // ```
    result: function(value) {
      var args = [].slice.call(arguments, 1);
      if (typeof value === 'function') {
        value = value.apply(null, args);
      }
      return value;
    },

    // Checks if the value is a number. This function does not consider NaN a
    // number like many other `isNumber` functions do.
    isNumber: function(value) {
      return typeof value === 'number' && !isNaN(value);
    },

    // Returns false if the object is not a function
    isFunction: function(value) {
      return typeof value === 'function';
    },

    // A simple check to verify that the value is an integer. Uses `isNumber`
    // and a simple modulo check.
    isInteger: function(value) {
      return v.isNumber(value) && value % 1 === 0;
    },

    // Checks if the value is a boolean
    isBoolean: function(value) {
      return typeof value === 'boolean';
    },

    // Uses the `Object` function to check if the given argument is an object.
    isObject: function(obj) {
      return obj === Object(obj);
    },

    // Simply checks if the object is an instance of a date
    isDate: function(obj) {
      return obj instanceof Date;
    },

    // Returns false if the object is `null` of `undefined`
    isDefined: function(obj) {
      return obj !== null && obj !== undefined;
    },

    // Checks if the given argument is a promise. Anything with a `then`
    // function is considered a promise.
    isPromise: function(p) {
      return !!p && v.isFunction(p.then);
    },

    isJqueryElement: function(o) {
      return o && v.isString(o.jquery);
    },

    isDomElement: function(o) {
      if (!o) {
        return false;
      }

      if (!o.querySelectorAll || !o.querySelector) {
        return false;
      }

      if (v.isObject(document) && o === document) {
        return true;
      }

      // http://stackoverflow.com/a/384380/699304
      /* istanbul ignore else */
      if (typeof HTMLElement === "object") {
        return o instanceof HTMLElement;
      } else {
        return o &&
          typeof o === "object" &&
          o !== null &&
          o.nodeType === 1 &&
          typeof o.nodeName === "string";
      }
    },

    isEmpty: function(value) {
      var attr;

      // Null and undefined are empty
      if (!v.isDefined(value)) {
        return true;
      }

      // functions are non empty
      if (v.isFunction(value)) {
        return false;
      }

      // Whitespace only strings are empty
      if (v.isString(value)) {
        return v.EMPTY_STRING_REGEXP.test(value);
      }

      // For arrays we use the length property
      if (v.isArray(value)) {
        return value.length === 0;
      }

      // Dates have no attributes but aren't empty
      if (v.isDate(value)) {
        return false;
      }

      // If we find at least one property we consider it non empty
      if (v.isObject(value)) {
        for (attr in value) {
          return false;
        }
        return true;
      }

      return false;
    },

    // Formats the specified strings with the given values like so:
    // ```
    // format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
    // ```
    // If you want to write %{...} without having it replaced simply
    // prefix it with % like this `Foo: %%{foo}` and it will be returned
    // as `"Foo: %{foo}"`
    format: v.extend(function(str, vals) {
      if (!v.isString(str)) {
        return str;
      }
      return str.replace(v.format.FORMAT_REGEXP, function(m0, m1, m2) {
        if (m1 === '%') {
          return "%{" + m2 + "}";
        } else {
          return String(vals[m2]);
        }
      });
    }, {
      // Finds %{key} style patterns in the given string
      FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
    }),

    // "Prettifies" the given string.
    // Prettifying means replacing [.\_-] with spaces as well as splitting
    // camel case words.
    prettify: function(str) {
      if (v.isNumber(str)) {
        // If there are more than 2 decimals round it to two
        if ((str * 100) % 1 === 0) {
          return "" + str;
        } else {
          return parseFloat(Math.round(str * 100) / 100).toFixed(2);
        }
      }

      if (v.isArray(str)) {
        return str.map(function(s) { return v.prettify(s); }).join(", ");
      }

      if (v.isObject(str)) {
        return str.toString();
      }

      // Ensure the string is actually a string
      str = "" + str;

      return str
        // Splits keys separated by periods
        .replace(/([^\s])\.([^\s])/g, '$1 $2')
        // Removes backslashes
        .replace(/\\+/g, '')
        // Replaces - and - with space
        .replace(/[_-]/g, ' ')
        // Splits camel cased words
        .replace(/([a-z])([A-Z])/g, function(m0, m1, m2) {
          return "" + m1 + " " + m2.toLowerCase();
        })
        .toLowerCase();
    },

    stringifyValue: function(value) {
      return v.prettify(value);
    },

    isString: function(value) {
      return typeof value === 'string';
    },

    isArray: function(value) {
      return {}.toString.call(value) === '[object Array]';
    },

    // Checks if the object is a hash, which is equivalent to an object that
    // is neither an array nor a function.
    isHash: function(value) {
      return v.isObject(value) && !v.isArray(value) && !v.isFunction(value);
    },

    contains: function(obj, value) {
      if (!v.isDefined(obj)) {
        return false;
      }
      if (v.isArray(obj)) {
        return obj.indexOf(value) !== -1;
      }
      return value in obj;
    },

    unique: function(array) {
      if (!v.isArray(array)) {
        return array;
      }
      return array.filter(function(el, index, array) {
        return array.indexOf(el) == index;
      });
    },

    forEachKeyInKeypath: function(object, keypath, callback) {
      if (!v.isString(keypath)) {
        return undefined;
      }

      var key = ""
        , i
        , escape = false;

      for (i = 0; i < keypath.length; ++i) {
        switch (keypath[i]) {
          case '.':
            if (escape) {
              escape = false;
              key += '.';
            } else {
              object = callback(object, key, false);
              key = "";
            }
            break;

          case '\\':
            if (escape) {
              escape = false;
              key += '\\';
            } else {
              escape = true;
            }
            break;

          default:
            escape = false;
            key += keypath[i];
            break;
        }
      }

      return callback(object, key, true);
    },

    getDeepObjectValue: function(obj, keypath) {
      if (!v.isObject(obj)) {
        return undefined;
      }

      return v.forEachKeyInKeypath(obj, keypath, function(obj, key) {
        if (v.isObject(obj)) {
          return obj[key];
        }
      });
    },

    // This returns an object with all the values of the form.
    // It uses the input name as key and the value as value
    // So for example this:
    // <input type="text" name="email" value="foo@bar.com" />
    // would return:
    // {email: "foo@bar.com"}
    collectFormValues: function(form, options) {
      var values = {}
        , i
        , j
        , input
        , inputs
        , option
        , value;

      if (v.isJqueryElement(form)) {
        form = form[0];
      }

      if (!form) {
        return values;
      }

      options = options || {};

      inputs = form.querySelectorAll("input[name], textarea[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);

        if (v.isDefined(input.getAttribute("data-ignored"))) {
          continue;
        }

        value = v.sanitizeFormValue(input.value, options);
        if (input.type === "number") {
          value = value ? +value : null;
        } else if (input.type === "checkbox") {
          if (input.attributes.value) {
            if (!input.checked) {
              value = values[input.name] || null;
            }
          } else {
            value = input.checked;
          }
        } else if (input.type === "radio") {
          if (!input.checked) {
            value = values[input.name] || null;
          }
        }
        values[input.name] = value;
      }

      inputs = form.querySelectorAll("select[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);
        if (input.multiple) {
          value = [];
          for (j in input.options) {
            option = input.options[j];
            if (option.selected) {
              value.push(v.sanitizeFormValue(option.value, options));
            }
          }
        } else {
          value = v.sanitizeFormValue(input.options[input.selectedIndex].value, options);
        }
        values[input.name] = value;
      }

      return values;
    },

    sanitizeFormValue: function(value, options) {
      if (options.trim && v.isString(value)) {
        value = value.trim();
      }

      if (options.nullify !== false && value === "") {
        return null;
      }
      return value;
    },

    capitalize: function(str) {
      if (!v.isString(str)) {
        return str;
      }
      return str[0].toUpperCase() + str.slice(1);
    },

    // Remove all errors who's error attribute is empty (null or undefined)
    pruneEmptyErrors: function(errors) {
      return errors.filter(function(error) {
        return !v.isEmpty(error.error);
      });
    },

    // In
    // [{error: ["err1", "err2"], ...}]
    // Out
    // [{error: "err1", ...}, {error: "err2", ...}]
    //
    // All attributes in an error with multiple messages are duplicated
    // when expanding the errors.
    expandMultipleErrors: function(errors) {
      var ret = [];
      errors.forEach(function(error) {
        // Removes errors without a message
        if (v.isArray(error.error)) {
          error.error.forEach(function(msg) {
            ret.push(v.extend({}, error, {error: msg}));
          });
        } else {
          ret.push(error);
        }
      });
      return ret;
    },

    // Converts the error mesages by prepending the attribute name unless the
    // message is prefixed by ^
    convertErrorMessages: function(errors, options) {
      options = options || {};

      var ret = [];
      errors.forEach(function(errorInfo) {
        var error = v.result(errorInfo.error,
            errorInfo.value,
            errorInfo.attribute,
            errorInfo.options,
            errorInfo.attributes,
            errorInfo.globalOptions);

        if (!v.isString(error)) {
          ret.push(errorInfo);
          return;
        }

        if (error[0] === '^') {
          error = error.slice(1);
        } else if (options.fullMessages !== false) {
          error = v.capitalize(v.prettify(errorInfo.attribute)) + " " + error;
        }
        error = error.replace(/\\\^/g, "^");
        error = v.format(error, {value: v.stringifyValue(errorInfo.value)});
        ret.push(v.extend({}, errorInfo, {error: error}));
      });
      return ret;
    },

    // In:
    // [{attribute: "<attributeName>", ...}]
    // Out:
    // {"<attributeName>": [{attribute: "<attributeName>", ...}]}
    groupErrorsByAttribute: function(errors) {
      var ret = {};
      errors.forEach(function(error) {
        var list = ret[error.attribute];
        if (list) {
          list.push(error);
        } else {
          ret[error.attribute] = [error];
        }
      });
      return ret;
    },

    // In:
    // [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
    // Out:
    // ["<message 1>", "<message 2>"]
    flattenErrorsToArray: function(errors) {
      return errors
        .map(function(error) { return error.error; })
        .filter(function(value, index, self) {
          return self.indexOf(value) === index;
        });
    },

    cleanAttributes: function(attributes, whitelist) {
      function whitelistCreator(obj, key, last) {
        if (v.isObject(obj[key])) {
          return obj[key];
        }
        return (obj[key] = last ? true : {});
      }

      function buildObjectWhitelist(whitelist) {
        var ow = {}
          , lastObject
          , attr;
        for (attr in whitelist) {
          if (!whitelist[attr]) {
            continue;
          }
          v.forEachKeyInKeypath(ow, attr, whitelistCreator);
        }
        return ow;
      }

      function cleanRecursive(attributes, whitelist) {
        if (!v.isObject(attributes)) {
          return attributes;
        }

        var ret = v.extend({}, attributes)
          , w
          , attribute;

        for (attribute in attributes) {
          w = whitelist[attribute];

          if (v.isObject(w)) {
            ret[attribute] = cleanRecursive(ret[attribute], w);
          } else if (!w) {
            delete ret[attribute];
          }
        }
        return ret;
      }

      if (!v.isObject(whitelist) || !v.isObject(attributes)) {
        return {};
      }

      whitelist = buildObjectWhitelist(whitelist);
      return cleanRecursive(attributes, whitelist);
    },

    exposeModule: function(validate, root, exports, module, define) {
      if (exports) {
        if (module && module.exports) {
          exports = module.exports = validate;
        }
        exports.validate = validate;
      } else {
        root.validate = validate;
        if (validate.isFunction(define) && define.amd) {
          define([], function () { return validate; });
        }
      }
    },

    warn: function(msg) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("[validate.js] " + msg);
      }
    },

    error: function(msg) {
      if (typeof console !== "undefined" && console.error) {
        console.error("[validate.js] " + msg);
      }
    }
  });

  validate.validators = {
    // Presence validates that the value isn't empty
    presence: function(value, options) {
      options = v.extend({}, this.options, options);
      if (options.allowEmpty ? !v.isDefined(value) : v.isEmpty(value)) {
        return options.message || this.message || "can't be blank";
      }
    },
    length: function(value, options, attribute) {
      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var is = options.is
        , maximum = options.maximum
        , minimum = options.minimum
        , tokenizer = options.tokenizer || function(val) { return val; }
        , err
        , errors = [];

      value = tokenizer(value);
      var length = value.length;
      if(!v.isNumber(length)) {
        v.error(v.format("Attribute %{attr} has a non numeric value for `length`", {attr: attribute}));
        return options.message || this.notValid || "has an incorrect length";
      }

      // Is checks
      if (v.isNumber(is) && length !== is) {
        err = options.wrongLength ||
          this.wrongLength ||
          "is the wrong length (should be %{count} characters)";
        errors.push(v.format(err, {count: is}));
      }

      if (v.isNumber(minimum) && length < minimum) {
        err = options.tooShort ||
          this.tooShort ||
          "is too short (minimum is %{count} characters)";
        errors.push(v.format(err, {count: minimum}));
      }

      if (v.isNumber(maximum) && length > maximum) {
        err = options.tooLong ||
          this.tooLong ||
          "is too long (maximum is %{count} characters)";
        errors.push(v.format(err, {count: maximum}));
      }

      if (errors.length > 0) {
        return options.message || errors;
      }
    },
    numericality: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var errors = []
        , name
        , count
        , checks = {
            greaterThan:          function(v, c) { return v > c; },
            greaterThanOrEqualTo: function(v, c) { return v >= c; },
            equalTo:              function(v, c) { return v === c; },
            lessThan:             function(v, c) { return v < c; },
            lessThanOrEqualTo:    function(v, c) { return v <= c; },
            divisibleBy:          function(v, c) { return v % c === 0; }
          };

      // Strict will check that it is a valid looking number
      if (v.isString(value) && options.strict) {
        var pattern = "^(0|[1-9]\\d*)";
        if (!options.onlyInteger) {
          pattern += "(\\.\\d+)?";
        }
        pattern += "$";

        if (!(new RegExp(pattern).test(value))) {
          return options.message ||
            options.notValid ||
            this.notValid ||
            this.message ||
            "must be a valid number";
        }
      }

      // Coerce the value to a number unless we're being strict.
      if (options.noStrings !== true && v.isString(value) && !v.isEmpty(value)) {
        value = +value;
      }

      // If it's not a number we shouldn't continue since it will compare it.
      if (!v.isNumber(value)) {
        return options.message ||
          options.notValid ||
          this.notValid ||
          this.message ||
          "is not a number";
      }

      // Same logic as above, sort of. Don't bother with comparisons if this
      // doesn't pass.
      if (options.onlyInteger && !v.isInteger(value)) {
        return options.message ||
          options.notInteger ||
          this.notInteger ||
          this.message ||
          "must be an integer";
      }

      for (name in checks) {
        count = options[name];
        if (v.isNumber(count) && !checks[name](value, count)) {
          // This picks the default message if specified
          // For example the greaterThan check uses the message from
          // this.notGreaterThan so we capitalize the name and prepend "not"
          var key = "not" + v.capitalize(name);
          var msg = options[key] ||
            this[key] ||
            this.message ||
            "must be %{type} %{count}";

          errors.push(v.format(msg, {
            count: count,
            type: v.prettify(name)
          }));
        }
      }

      if (options.odd && value % 2 !== 1) {
        errors.push(options.notOdd ||
            this.notOdd ||
            this.message ||
            "must be odd");
      }
      if (options.even && value % 2 !== 0) {
        errors.push(options.notEven ||
            this.notEven ||
            this.message ||
            "must be even");
      }

      if (errors.length) {
        return options.message || errors;
      }
    },
    datetime: v.extend(function(value, options) {
      if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
        throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
      }

      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var err
        , errors = []
        , earliest = options.earliest ? this.parse(options.earliest, options) : NaN
        , latest = options.latest ? this.parse(options.latest, options) : NaN;

      value = this.parse(value, options);

      // 86400000 is the number of seconds in a day, this is used to remove
      // the time from the date
      if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
        err = options.notValid ||
          options.message ||
          this.notValid ||
          "must be a valid date";
        return v.format(err, {value: arguments[0]});
      }

      if (!isNaN(earliest) && value < earliest) {
        err = options.tooEarly ||
          options.message ||
          this.tooEarly ||
          "must be no earlier than %{date}";
        err = v.format(err, {
          value: this.format(value, options),
          date: this.format(earliest, options)
        });
        errors.push(err);
      }

      if (!isNaN(latest) && value > latest) {
        err = options.tooLate ||
          options.message ||
          this.tooLate ||
          "must be no later than %{date}";
        err = v.format(err, {
          date: this.format(latest, options),
          value: this.format(value, options)
        });
        errors.push(err);
      }

      if (errors.length) {
        return v.unique(errors);
      }
    }, {
      parse: null,
      format: null
    }),
    date: function(value, options) {
      options = v.extend({}, options, {dateOnly: true});
      return v.validators.datetime.call(v.validators.datetime, value, options);
    },
    format: function(value, options) {
      if (v.isString(options) || (options instanceof RegExp)) {
        options = {pattern: options};
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is invalid"
        , pattern = options.pattern
        , match;

      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }

      if (v.isString(pattern)) {
        pattern = new RegExp(options.pattern, options.flags);
      }
      match = pattern.exec(value);
      if (!match || match[0].length != value.length) {
        return message;
      }
    },
    inclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (v.contains(options.within, value)) {
        return;
      }
      var message = options.message ||
        this.message ||
        "^%{value} is not included in the list";
      return v.format(message, {value: value});
    },
    exclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (!v.contains(options.within, value)) {
        return;
      }
      var message = options.message || this.message || "^%{value} is restricted";
      return v.format(message, {value: value});
    },
    email: v.extend(function(value, options) {
      options = v.extend({}, this.options, options);
      var message = options.message || this.message || "is not a valid email";
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }
      if (!this.PATTERN.exec(value)) {
        return message;
      }
    }, {
      PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
    }),
    equality: function(value, options, attribute, attributes) {
      if (!v.isDefined(value)) {
        return;
      }

      if (v.isString(options)) {
        options = {attribute: options};
      }
      options = v.extend({}, this.options, options);
      var message = options.message ||
        this.message ||
        "is not equal to %{attribute}";

      if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
        throw new Error("The attribute must be a non empty string");
      }

      var otherValue = v.getDeepObjectValue(attributes, options.attribute)
        , comparator = options.comparator || function(v1, v2) {
          return v1 === v2;
        };

      if (!comparator(value, otherValue, options, attribute, attributes)) {
        return v.format(message, {attribute: v.prettify(options.attribute)});
      }
    },

    // A URL validator that is used to validate URLs with the ability to
    // restrict schemes and some domains.
    url: function(value, options) {
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is not a valid url"
        , schemes = options.schemes || this.schemes || ['http', 'https']
        , allowLocal = options.allowLocal || this.allowLocal || false;

      if (!v.isString(value)) {
        return message;
      }

      // https://gist.github.com/dperini/729294
      var regex =
        "^" +
        // protocol identifier
        "(?:(?:" + schemes.join("|") + ")://)" +
        // user:pass authentication
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:";

      var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";

      if (allowLocal) {
        tld += "?";
      } else {
        regex +=
          // IP address exclusion
          // private & local networks
          "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
          "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
          "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})";
      }

      regex +=
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
          // host name
          "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
          // domain name
          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
          tld +
        ")" +
        // port number
        "(?::\\d{2,5})?" +
        // resource path
        "(?:[/?#]\\S*)?" +
      "$";

      var PATTERN = new RegExp(regex, 'i');
      if (!PATTERN.exec(value)) {
        return message;
      }
    }
  };

  validate.formatters = {
    detailed: function(errors) {return errors;},
    flat: v.flattenErrorsToArray,
    grouped: function(errors) {
      var attr;

      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = v.flattenErrorsToArray(errors[attr]);
      }
      return errors;
    },
    constraint: function(errors) {
      var attr;
      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = errors[attr].map(function(result) {
          return result.validator;
        }).sort();
      }
      return errors;
    }
  };

  validate.exposeModule(validate, this, exports, module, define);
}).call(this,
        typeof exports !== 'undefined' ? /* istanbul ignore next */ exports : null,
        typeof module !== 'undefined' ? /* istanbul ignore next */ module : null,
        typeof define !== 'undefined' ? /* istanbul ignore next */ define : null);

;'use strict';

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var forms = function (window, document) {

    var blockSubmit = function blockSubmit(element) {
        var formsElems = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('form');

        utils.forEach(formsElems, function (index, value) {
            var thisForm = value;
            utils.addEvent(thisForm, 'submit', function (e) {
                e.preventDefault();
            });
        });
    };

    return {
        block: blockSubmit
    };
}(window, document);

var customCheckbox = function (window, document) {
    var handleFocus = function handleFocus(e) {
        e.preventDefault();
    };

    var checking = function checking(e) {
        var label = e.target.nodeName.toLocaleLowerCase() === 'label' ? e.target : e.target.parentNode,
            checkbox = label.previousElementSibling;

        if (!checkbox.checked) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }

        e.preventDefault();
    };

    var handleKeys = function handleKeys(e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            if (e.target.checked) {
                e.target.checked = false;
            } else {
                e.target.checked = true;
            }
        }
        e.preventDefault();
    };

    var initCheckboxes = function initCheckboxes(element) {
        var checkboxes = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('input[type="checkbox"]');

        utils.forEach(checkboxes, function (index, value) {
            var thisCheckbox = value,
                thisLabel = value.nextElementSibling;

            //            utils.addEvent(thisCheckbox, 'focus', handleFocus);
            utils.addEvent(thisCheckbox, 'keydown', handleKeys);
            utils.addEvent(thisLabel, 'click', checking);
        });
    };

    return {
        create: initCheckboxes
    };
}(window, document);

var customSelect = function (window, document) {
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

    var setConfig = function setConfig(customConfig) {
        var newConfig = {};
        for (var key in customConfig) {
            if (config.hasOwnProperty(key)) {
                newConfig[key] = customConfig[key];
            }
        }
        Object.assign(config, newConfig);
    };

    var showMenu = function showMenu(e) {
        var menuId = e.target.attributes['id'].value,
            menuControl = document.querySelector('#' + menuId),
            buttonId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
            buttonControl = document.querySelector('#' + buttonId),
            selectedItem = document.querySelector('#' + menuId + ' li.' + config.customSelectMenuItemSelected + ' a');

        utils.removeClass(menuControl, config.customSelectMenuHiddenClass);
        menuControl.setAttribute('aria-hidden', false);

        selectedItem.focus();
        utils.addClass(buttonControl, config.customSelectButtonOpenClass);
    };

    var hideMenu = function hideMenu(e) {
        var menuId = e.target.attributes['id'].value,
            menuControl = document.querySelector('#' + menuId),
            buttonId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
            buttonControl = document.querySelector('#' + buttonId);

        utils.removeClass(buttonControl, config.customSelectButtonOpenClass);
        utils.addClass(menuControl, config.customSelectMenuHiddenClass);
        menuControl.setAttribute('aria-hidden', true);
    };

    var toggleMenu = function toggleMenu(e) {
        var menuId = e.target.attributes['id'].value,
            menuControl = document.querySelector('#' + menuId),
            display = (window.getComputedStyle ? getComputedStyle(menuControl, null) : menuControl.currentStyle).display;

        if (display === 'none') {
            utils.triggerEvent(menuControl, 'show');
        } else {
            utils.triggerEvent(menuControl, 'hide');
        }
    };

    var selectElement = function selectElement(e) {
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
    };

    var clickLink = function clickLink(e) {
        utils.triggerEvent(e.target, 'select');
        e.preventDefault();
    };

    var markLink = function markLink(e) {
        var menuControl = e.target.parentNode.parentNode,
            menuId = menuControl.attributes['id'].value,
            marked = document.querySelector('#' + menuId + ' li.' + config.customSelectMenuItemMarked),
            thisElem = e.target.parentNode;

        if (marked) {
            utils.removeClass(marked, config.customSelectMenuItemMarked);
        }
        utils.addClass(thisElem, config.customSelectMenuItemMarked);
        e.preventDefault();
    };

    var unmarkLink = function unmarkLink(e) {
        var thisElem = e.target.parentNode;

        if (thisElem) {
            utils.removeClass(thisElem, config.customSelectMenuItemMarked);
        }
        e.preventDefault();
    };

    var buttonClick = function buttonClick(e) {
        var menu = e.target.nodeName.toLowerCase() === 'a' ? e.target.nextElementSibling : e.target.parentNode.nextElementSibling;

        utils.triggerEvent(menu, 'toggle');
        e.preventDefault();
    };

    var handleButtonKeydown = function handleButtonKeydown(e) {
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
    };

    var handleMenuKeydown = function handleMenuKeydown(e) {
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
    };

    var initCustomSelect = function initCustomSelect(element, customConfig) {
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
    };

    return {
        create: initCustomSelect,
        config: setConfig
    };
}(window, document);

function init() {
    customSelect.create();
    customCheckbox.create();
    forms.block();
}

ready(init);
;'use strict';

//export default function(){

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
//    return {
//        forEach: forEach,
//        insertAfter: insertAfter,
//        addClass: addClass,
//        removeClass: removeClass,
//        toggleClass: toggleClass,
//        hasClass: hasClass,
//        wrapTag: wrapTag,
//        addEvent: addEvent,
//        triggerEvent: triggerEvent,
//        isTypeOf: checkType
//    };
//}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2FwcC5qcyIsImpzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInV0aWxzIiwicmVhZHkiLCJmbiIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtcyIsIndpbmRvdyIsImJsb2NrU3VibWl0IiwiZWxlbWVudCIsImZvcm1zRWxlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImluZGV4IiwidmFsdWUiLCJ0aGlzRm9ybSIsImFkZEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2siLCJjdXN0b21DaGVja2JveCIsImhhbmRsZUZvY3VzIiwiY2hlY2tpbmciLCJsYWJlbCIsInRhcmdldCIsIm5vZGVOYW1lIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJwYXJlbnROb2RlIiwiY2hlY2tib3giLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY2hlY2tlZCIsImhhbmRsZUtleXMiLCJrZXlDb2RlIiwiaW5pdENoZWNrYm94ZXMiLCJjaGVja2JveGVzIiwidGhpc0NoZWNrYm94IiwidGhpc0xhYmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY3JlYXRlIiwiY3VzdG9tU2VsZWN0IiwiY29uZmlnIiwic2VsZWN0SGlkZGVuQ2xhc3MiLCJjdXN0b21TZWxlY3RCdXR0b25DbGFzcyIsImN1c3RvbVNlbGVjdEJ1dHRvbk9wZW5DbGFzcyIsImN1c3RvbVNlbGVjdFN0YXR1c0NsYXNzIiwiY3VzdG9tU2VsZWN0SWNvbkNsYXNzIiwiY3VzdG9tU2VsZWN0Um9sZXRleHRDbGFzcyIsImN1c3RvbVNlbGVjdE1lbnVDbGFzcyIsImN1c3RvbVNlbGVjdE1lbnVIaWRkZW5DbGFzcyIsImN1c3RvbVNlbGVjdE1lbnVJdGVtIiwiY3VzdG9tU2VsZWN0TWVudUl0ZW1TZWxlY3RlZCIsImN1c3RvbVNlbGVjdE1lbnVJdGVtTWFya2VkIiwicm9sZVRleHQiLCJzZXRDb25maWciLCJjdXN0b21Db25maWciLCJuZXdDb25maWciLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImFzc2lnbiIsInNob3dNZW51IiwibWVudUlkIiwiYXR0cmlidXRlcyIsIm1lbnVDb250cm9sIiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbklkIiwic3Vic3RyIiwiaW5kZXhPZiIsImJ1dHRvbkNvbnRyb2wiLCJzZWxlY3RlZEl0ZW0iLCJyZW1vdmVDbGFzcyIsInNldEF0dHJpYnV0ZSIsImZvY3VzIiwiYWRkQ2xhc3MiLCJoaWRlTWVudSIsInRvZ2dsZU1lbnUiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImN1cnJlbnRTdHlsZSIsInRyaWdnZXJFdmVudCIsInNlbGVjdEVsZW1lbnQiLCJzZWxlY3RDb250cm9sSWQiLCJzZWxlY3RDb250cm9sIiwiYnV0dG9uQ29udHJvbElkIiwic2VsZWN0ZWQiLCJidXR0b25TdGF0dXMiLCJ0aGlzRWxlbSIsInRleHRDb250ZW50Iiwic2VsZWN0ZWRJbmRleCIsImNsaWNrTGluayIsIm1hcmtMaW5rIiwibWFya2VkIiwidW5tYXJrTGluayIsImJ1dHRvbkNsaWNrIiwibWVudSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlQnV0dG9uS2V5ZG93biIsImN1cnJlbnRTZWxlY3RlZExpIiwiY2hpbGRyZW4iLCJoYW5kbGVNZW51S2V5ZG93biIsImluaXRDdXN0b21TZWxlY3QiLCJzZWxlY3RTZWxlY3RvcnMiLCJpc1R5cGVPZiIsInRoaXNTZWxlY3QiLCJ0aGlzU2VsZWN0SWQiLCJnZXRBdHRyaWJ1dGUiLCJpbml0aWFsU2VsZWN0ZWRJbmRleCIsInNlbGVjdGVkT3B0aW9uVGV4dCIsInRleHQiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50Iiwic2VsZWN0TWVudVN0YXR1cyIsInNlbGVjdE1lbnVJY29uIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRBZnRlciIsIml0ZW0iLCJsaW5rIiwibWVudU9wdGlvbnMiLCJjaGlsZE5vZGVzIiwicHVzaCIsIm9wZW5lZE1lbnUiLCJoYXNDbGFzcyIsImluaXQiLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJpIiwibGVuZ3RoIiwiY2FsbCIsImVsIiwicmVmZXJlbmNlTm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJjbGFzc2VzIiwic3BsaXQiLCJleGlzdGluZ0luZGV4Iiwic3BsaWNlIiwiam9pbiIsImNvbnRhaW5zIiwiUmVnRXhwIiwidGVzdCIsIndyYXBUYWciLCJ0b1dyYXAiLCJ3cmFwcGVyIiwiZXZlbnROYW1lIiwiZXZlbnRIYW5kbGVyIiwiZXZlbnRDYXB0dXJlIiwib2xkRXZlbnROYW1lIiwidXNlQ2FwdHVyZSIsImF0dGFjaEV2ZW50IiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVFdmVudE9iamVjdCIsImZpcmVFdmVudCIsInR5cGUiLCJvYmoiLCJjbGFzIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJzbGljZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0lBQVlBOzs7O0FBRVosU0FBU0MsS0FBVCxDQUFlQyxFQUFmLEVBQW1CO0FBQ2YsUUFBSUMsU0FBU0MsVUFBVCxLQUF3QixTQUE1QixFQUF1QztBQUNuQ0Y7QUFDSCxLQUZELE1BRU87QUFDSEMsaUJBQVNFLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0gsRUFBOUM7QUFDSDtBQUNKOztBQUVELElBQU1JLFFBQVMsVUFBU0MsTUFBVCxFQUFpQkosUUFBakIsRUFBMEI7O0FBRXJDLFFBQU1LLGNBQWMsU0FBZEEsV0FBYyxDQUFTQyxPQUFULEVBQWlCO0FBQ2pDLFlBQU1DLGFBQWFELFdBQVdOLFNBQVNRLGdCQUFULENBQTBCRixPQUExQixDQUFYLEdBQWdETixTQUFTUSxnQkFBVCxDQUEwQkYsT0FBMUIsQ0FBaEQsR0FBcUZOLFNBQVNRLGdCQUFULENBQTBCLE1BQTFCLENB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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ib3dlcl9jb21wb25lbnRzL3ZhbGlkYXRlL3ZhbGlkYXRlLmpzIiwiL3NyYy9qcy9hcHAuanMiLCIvc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInV0aWxzIiwicmVhZHkiLCJmbiIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtcyIsIndpbmRvdyIsImJsb2NrU3VibWl0IiwiZWxlbWVudCIsImZvcm1zRWxlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImluZGV4IiwidmFsdWUiLCJ0aGlzRm9ybSIsImFkZEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2siLCJjdXN0b21DaGVja2JveCIsImhhbmRsZUZvY3VzIiwiY2hlY2tpbmciLCJsYWJlbCIsInRhcmdldCIsIm5vZGVOYW1lIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJwYXJlbnROb2RlIiwiY2hlY2tib3giLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY2hlY2tlZCIsImhhbmRsZUtleXMiLCJrZXlDb2RlIiwiaW5pdENoZWNrYm94ZXMiLCJjaGVja2JveGVzIiwidGhpc0NoZWNrYm94IiwidGhpc0xhYmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY3JlYXRlIiwiY3VzdG9tU2VsZWN0IiwiY29uZmlnIiwic2VsZWN0SGlkZGVuQ2xhc3MiLCJjdXN0b21TZWxlY3RCdXR0b25DbGFzcyIsImN1c3RvbVNlbGVjdEJ1dHRvbk9wZW5DbGFzcyIsImN1c3RvbVNlbGVjdFN0YXR1c0NsYXNzIiwiY3VzdG9tU2VsZWN0SWNvbkNsYXNzIiwiY3VzdG9tU2VsZWN0Um9sZXRleHRDbGFzcyIsImN1c3RvbVNlbGVjdE1lbnVDbGFzcyIsImN1c3RvbVNlbGVjdE1lbnVIaWRkZW5DbGFzcyIsImN1c3RvbVNlbGVjdE1lbnVJdGVtIiwiY3VzdG9tU2VsZWN0TWVudUl0ZW1TZWxlY3RlZCIsImN1c3RvbVNlbGVjdE1lbnVJdGVtTWFya2VkIiwicm9sZVRleHQiLCJzZXRDb25maWciLCJjdXN0b21Db25maWciLCJuZXdDb25maWciLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImFzc2lnbiIsInNob3dNZW51IiwibWVudUlkIiwiYXR0cmlidXRlcyIsIm1lbnVDb250cm9sIiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbklkIiwic3Vic3RyIiwiaW5kZXhPZiIsImJ1dHRvbkNvbnRyb2wiLCJzZWxlY3RlZEl0ZW0iLCJyZW1vdmVDbGFzcyIsInNldEF0dHJpYnV0ZSIsImZvY3VzIiwiYWRkQ2xhc3MiLCJoaWRlTWVudSIsInRvZ2dsZU1lbnUiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImN1cnJlbnRTdHlsZSIsInRyaWdnZXJFdmVudCIsInNlbGVjdEVsZW1lbnQiLCJzZWxlY3RDb250cm9sSWQiLCJzZWxlY3RDb250cm9sIiwiYnV0dG9uQ29udHJvbElkIiwic2VsZWN0ZWQiLCJidXR0b25TdGF0dXMiLCJ0aGlzRWxlbSIsInRleHRDb250ZW50Iiwic2VsZWN0ZWRJbmRleCIsImNsaWNrTGluayIsIm1hcmtMaW5rIiwibWFya2VkIiwidW5tYXJrTGluayIsImJ1dHRvbkNsaWNrIiwibWVudSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlQnV0dG9uS2V5ZG93biIsImN1cnJlbnRTZWxlY3RlZExpIiwiY2hpbGRyZW4iLCJoYW5kbGVNZW51S2V5ZG93biIsImluaXRDdXN0b21TZWxlY3QiLCJzZWxlY3RTZWxlY3RvcnMiLCJpc1R5cGVPZiIsInRoaXNTZWxlY3QiLCJ0aGlzU2VsZWN0SWQiLCJnZXRBdHRyaWJ1dGUiLCJpbml0aWFsU2VsZWN0ZWRJbmRleCIsInNlbGVjdGVkT3B0aW9uVGV4dCIsInRleHQiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50Iiwic2VsZWN0TWVudVN0YXR1cyIsInNlbGVjdE1lbnVJY29uIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRBZnRlciIsIml0ZW0iLCJsaW5rIiwibWVudU9wdGlvbnMiLCJjaGlsZE5vZGVzIiwicHVzaCIsIm9wZW5lZE1lbnUiLCJoYXNDbGFzcyIsImluaXQiLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJpIiwibGVuZ3RoIiwiY2FsbCIsImVsIiwicmVmZXJlbmNlTm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJjbGFzc2VzIiwic3BsaXQiLCJleGlzdGluZ0luZGV4Iiwic3BsaWNlIiwiam9pbiIsImNvbnRhaW5zIiwiUmVnRXhwIiwidGVzdCIsIndyYXBUYWciLCJ0b1dyYXAiLCJ3cmFwcGVyIiwiZXZlbnROYW1lIiwiZXZlbnRIYW5kbGVyIiwiZXZlbnRDYXB0dXJlIiwib2xkRXZlbnROYW1lIiwidXNlQ2FwdHVyZSIsImF0dGFjaEV2ZW50IiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVFdmVudE9iamVjdCIsImZpcmVFdmVudCIsInR5cGUiLCJvYmoiLCJjbGFzIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJzbGljZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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
>>>>>>> task2
