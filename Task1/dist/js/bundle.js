(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('utils')) :
	typeof define === 'function' && define.amd ? define(['utils'], factory) :
	(factory(global.utils));
}(this, (function (utils) { 'use strict';

utils = 'default' in utils ? utils['default'] : utils;

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


const forms = (function(window, document){
    
    const blockSubmit = function(element){
        const formsElems = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('form');
            
        utils.forEach(formsElems, function(index, value){
            let thisForm = value;
            utils.addEvent(thisForm, 'submit', function(e){e.preventDefault();});
        });
    };
    
    return {
        block: blockSubmit
    };
}(window, document));

const customCheckbox = (function(window, document){
    const handleFocus = function(e){
        e.preventDefault();
    };
    
    const checking = function(e){
        const label = e.target.nodeName.toLocaleLowerCase() === 'label' ? e.target : e.target.parentNode,
              checkbox = label.previousElementSibling;
        
        if(!checkbox.checked){
            checkbox.checked = true;
        }
        else{
            checkbox.checked = false;
        }
        
        e.preventDefault();
    };
    
    const handleKeys = function(e){
        if(e.keyCode === 13 || e.keyCode === 32){
            if(e.target.checked){
               e.target.checked = false; 
            }
            else{
                e.target.checked = true;
            }
        }
        e.preventDefault();
    };
    
    const initCheckboxes = function(element){
        let checkboxes = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('input[type="checkbox"]');
        
        utils.forEach(checkboxes, function (index, value) {
            let thisCheckbox = value,
                thisLabel = value.nextElementSibling;
            
//            utils.addEvent(thisCheckbox, 'focus', handleFocus);
            utils.addEvent(thisCheckbox, 'keydown', handleKeys);
            utils.addEvent(thisLabel, 'click', checking);
        });
    };
    
    return {
        create: initCheckboxes
    };
}(window, document));

const customSelect = (function(window, document){
    const config = {
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
    
    const setConfig = function(customConfig){
        const newConfig = {};
        for(let key in customConfig){
            if(config.hasOwnProperty(key)){
                newConfig[key] = customConfig[key];
            }
        }
        Object.assign(config, newConfig);
    };
    
    const showMenu = function(e){
        const menuId = e.target.attributes['id'].value,
              menuControl = document.querySelector('#' + menuId),
              buttonId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
              buttonControl = document.querySelector('#' + buttonId),
              selectedItem = document.querySelector('#' + menuId + ' li.' + config.customSelectMenuItemSelected + ' a');
        
        utils.removeClass(menuControl, config.customSelectMenuHiddenClass);
        menuControl.setAttribute('aria-hidden', false);
        
        selectedItem.focus();
        utils.addClass(buttonControl, config.customSelectButtonOpenClass);        
    };
    
    const hideMenu = function(e){
        const menuId = e.target.attributes['id'].value,
              menuControl = document.querySelector('#' + menuId),
              buttonId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
              buttonControl = document.querySelector('#' + buttonId);
        
        utils.removeClass(buttonControl, config.customSelectButtonOpenClass);
        utils.addClass(menuControl, config.customSelectMenuHiddenClass);
        menuControl.setAttribute('aria-hidden', true);
    };
    
    const toggleMenu = function(e){
        const menuId = e.target.attributes['id'].value,
              menuControl = document.querySelector('#' + menuId),
              display = (window.getComputedStyle ? getComputedStyle(menuControl, null) : menuControl.currentStyle).display;
        
        if(display === 'none'){
            utils.triggerEvent(menuControl, 'show');
        }
        else{
            utils.triggerEvent(menuControl, 'hide');
        }
    };
    
    const selectElement = function(e){
        const menuControl = e.target.parentNode.parentNode,
              menuId = menuControl.attributes['id'].value,
              selectControlId = menuId.substr(0, menuId.indexOf('Menu')),
              selectControl = document.querySelector('#'+selectControlId),
              buttonControlId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
              selected = document.querySelector('#'+menuId + ' li.' + config.customSelectMenuItemSelected),
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
    
    const clickLink = function(e){
        utils.triggerEvent(e.target, 'select');
        e.preventDefault(); 
    };
    
    const markLink = function(e){
        const menuControl = e.target.parentNode.parentNode,
              menuId = menuControl.attributes['id'].value,
              marked = document.querySelector('#'+menuId + ' li.' + config.customSelectMenuItemMarked),
              thisElem = e.target.parentNode;

        if(marked){
            utils.removeClass(marked, config.customSelectMenuItemMarked);
        }
        utils.addClass(thisElem, config.customSelectMenuItemMarked);
        e.preventDefault();   
    };
    
    const unmarkLink = function(e){
        const thisElem = e.target.parentNode;

        if(thisElem){
            utils.removeClass(thisElem, config.customSelectMenuItemMarked);
        }
        e.preventDefault();   
    };
    
    const buttonClick = function(e){
        const menu = e.target.nodeName.toLowerCase() === 'a' ? e.target.nextElementSibling : e.target.parentNode.nextElementSibling;
        
        utils.triggerEvent(menu, 'toggle');
        e.preventDefault();
    };
    
    const handleButtonKeydown = function(e){
        const buttonId = e.target.attributes['id'].value,
              buttonControl = document.querySelector('#' + buttonId),
              selectControlId = buttonId.substr(0, buttonId.indexOf('Button')),
              selectControl = document.querySelector('#' + selectControlId),
              menuId = selectControlId + 'Menu',
              selectedIndex = selectControl.selectedIndex,
              currentSelectedLi = document.querySelector('#' + menuId + ' li a[data-index="' + selectedIndex + '"]').parentNode;
        
        switch(e.keyCode){
            case 13:
            case 32:
                utils.triggerEvent(buttonControl, 'mousedown');
                e.preventDefault();
                break;
            case 37:
            case 38:
                if(currentSelectedLi.previousElementSibling){
                    utils.triggerEvent(currentSelectedLi.previousElementSibling.children[0], 'select');
                }
                e.preventDefault();
                break;
            case 39:
            case 40:
                if(currentSelectedLi.nextElementSibling){
                    utils.triggerEvent(currentSelectedLi.nextElementSibling.children[0], 'select');
                }
                e.preventDefault();
                break;
        }
    };
    
    const handleMenuKeydown = function(e){
        const thisElem = e.target,
              currentSelectedLi = thisElem.parentNode,
              menuControl = currentSelectedLi.parentNode,
              menuId = menuControl.attributes['id'].value,
              buttonId = menuId.substr(0, menuId.indexOf('Menu')) + 'Button',
              buttonControl = document.querySelector('#' + buttonId);
        
        switch(e.keyCode){
            case 13:
            case 32:
                utils.triggerEvent(thisElem, 'select');
                e.preventDefault();
                break;
            case 37:
            case 38:
                if(currentSelectedLi.previousElementSibling){
                    currentSelectedLi.previousElementSibling.children[0].focus();
                }
                e.preventDefault();
                break;
            case 39:
            case 40:
                if(currentSelectedLi.nextElementSibling){
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
    
    const initCustomSelect = function(element, customConfig){
        const selectSelectors = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('select');
        
        //Checks that config exist, if exists and their properties are valid the custom config object overwrites default config object
        if(customConfig && utils.isTypeOf('Object', customConfig)){
            setConfig(customConfig);
        }
        
        if(selectSelectors){
            utils.forEach(selectSelectors, function (index, value) {
                let thisSelect = value,
                    thisSelectId = thisSelect.getAttribute('id'),
                    thisLabel = document.querySelector('label[for="'+thisSelectId+'"]'),
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
                if(thisSelect.getAttribute('tabindex')){
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
                utils.forEach(thisSelect.children, function(index, value){
                    let item = document.createElement('li'),
                        link = document.createElement('a');

                    link.setAttribute('href', '#');
                    link.setAttribute('tabindex', '-1');
                    link.setAttribute('role', 'option');
                    link.setAttribute('aria-selected', 'false');
                    link.setAttribute('data-index', index);
                    link.textContent = value.textContent;
                    
                    item.appendChild(link);
                    
                    if(index === initialSelectedIndex){
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
                
                let menuOptions = [];
                
                utils.forEach(menu.children, function(index, value){
                    let link = value.childNodes[0];
                    if(link){
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
                utils.addEvent(button, 'click', function(e){e.preventDefault();});
                utils.addEvent(button, 'keydown', handleButtonKeydown);
                utils.addClass(thisSelect, config.selectHiddenClass);
                thisSelect.setAttribute('aria-hidden', true);
                thisSelect.setAttribute('tabindex', '-1');
                
                //Bind a label of select with new button
                thisLabel.setAttribute('for', buttonId);
                utils.addEvent(thisLabel, 'click', function(){
                    button.focus();
                    return false;
                });
            });

            //Hide menu after click outside the button
            utils.addEvent(document, 'click', function(e){
                e.preventDefault();
                const button = e.target.nodeName.toLocaleLowerCase() === 'a' ? e.target : e.target.parentNode, 
                      openedMenu = document.querySelector('.'+ config.customSelectButtonOpenClass + '+ .' + config.customSelectMenuClass);
                
                if(!utils.hasClass(button, config.customSelectButtonClass) && openedMenu){
                    utils.triggerEvent(openedMenu, 'hide');
                }
            });
        }
    };
    
    return {        
        create: initCustomSelect,
        config: setConfig
    };
}(window, document));

function init() {
    customSelect.create();
    customCheckbox.create();
    forms.block();
}

ready(init);

})));
