'use strict';

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

const utils = (function(window, document){
    const forEach = function(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    };

    const addClass = function(el, className) {
        // console.log(el, className, el.classList);
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    };

    const removeClass = function(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className += ' ';
        }
    };

    const toggleClass = function(el, className){
        if (el.classList) {
          el.classList.toggle(className);
        } else {
          var classes = el.className.split(' ');
          var existingIndex = classes.indexOf(className);

          if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
          else
            classes.push(className);

          el.className = classes.join(' ');
        }
    };
    
    const hasClass = function(el, className){
        if (el.classList)
          el.classList.contains(className);
        else
          new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    };

    const wrapTag = function (toWrap, wrapper) {
        wrapper = wrapper || document.createElement('div');
        if (toWrap.nextSibling) {
            toWrap.parentNode.insertBefore(wrapper, toWrap.nextSibling);
        } else {
            toWrap.parentNode.appendChild(wrapper);
        }
        return wrapper.appendChild(toWrap);
    };

    const addEvent = function(element, eventName, eventHandler, eventCapture) {
        var oldEventName = 'on' + eventName,
            useCapture = eventCapture ? eventCapture : false;


        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, useCapture);
        } else if (element.attachEvent) {
            element.attachEvent(oldEventName, eventHandler);
        }
    };
    
    const triggerEvent = function(element, eventName){
        const event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, false);
        element.dispatchEvent(event);
    };
    
    return {
        forEach: forEach,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        hasClass: hasClass,
        wrapTag: wrapTag,
        addEvent: addEvent,
        triggerEvent: triggerEvent
    };
}(window, document));

const forms = (function(window, document){
    const onSubmitForm = function(e){
        e.preventDefault();
    };
    
    const handleForms = function(){
        const formsElems = document.querySelectorAll('form');
            
        utils.forEach(formsElems, function(index, value){
            let thisForm = value;
            utils.addEvent(thisForm, 'submit', onSubmitForm);
        });
    };
    
    return {
        handle: handleForms
    };
}(window, document));


const customCheckbox = (function(window, document){
    const handleFocus = function(e){
        e.preventDefault();
    };
    
    const handleKeys = function(e){
        e.preventDefault();

        if(e.keyCode === 13 || e.keyCode === 32){
            if(e.target.checked){
               e.target.checked = false; 
            }
            else{
                e.target.checked = true;
            }
        }
    };
    
    const handleCheckboxes = function(){
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        utils.forEach(checkboxes, function (index, value) {
            let thisCheckbox = value;
            
            utils.addEvent(thisCheckbox, 'focus', handleFocus);
            utils.addEvent(thisCheckbox, 'keyup', handleKeys);
        });
    };
    
    return {
        handle: handleCheckboxes
    };
}(window, document));

const customSelect = (function(window, document){
    const config = {
        selectClass: '.form__select',
        selectClassHidden: '.form__select_hidden',
        customSelectWrapperClass: '.custom-select',
        styledSelectClass: '.custom-select__styled-select',
        styledSelectActiveClass: '.custom-select__styled-select_active',
        optionsClass: '.customSelect__options',
        optionsClassHidden: '.customSelect__options_hide'
    };

    const setSelectClass = function(className){
        if(!className){return;}

        if(className.indexOf('.') < 0){
            className = '.' + className;
        }
        config.selectClass = className;

        console.log(config.selectClass);
    };
    
    const hideStyledSelect = function(e){
        e.stopPropagation();
        const styleSelect = document.querySelectorAll(config.styledSelectClass),
              list = document.querySelectorAll(config.optionsClass);

        utils.forEach(styleSelect, function(index){
            utils.removeClass(styleSelect[index], config.styledSelectActiveClass.substr(1));    
        });

        utils.forEach(list, function(index){
            utils.addClass(list[index], config.optionsClassHidden.substr(1));
        });
    };

    const styledSelectClick = function(e){
        e.stopPropagation();
        let styledSelect = e.target,
            list = styledSelect.nextElementSibling;

        utils.toggleClass(styledSelect, config.styledSelectActiveClass.substr(1));
        utils.toggleClass(list, config.optionsClassHidden.substr(1));
        console.log(list, list.children[1]);
        list.children[1].focus;
    };
    
    const itemClick = function (e) {
        
        e.stopPropagation();
        let item = e.target,
            itemValue = item.attributes.rel.value,
            list = e.target.parentNode,
            styledSelect = list.previousElementSibling,
            select = styledSelect.previousElementSibling;

        styledSelect.textContent = itemValue;
        select.value = itemValue;
        
//        document.querySelector(list)
//        console.log(item.attributes['class']);
//        utils.forEach(list.children, function(index, value){
////            console.log(value.attributes['class']);
//            if(value.attributes['class'] === 'active'){
//                utils.removeClass(value, 'active');
//            }
////            console.log(value.);
//        })
        
        utils.addClass(item, 'active');

        hideStyledSelect(e);
    };
    
    const labelClick = function (e){
        console.log(e);
    };
    
//    const handleKeys = function(e){
////        e.preventDefault();
////        const styledSelect = e.target.nextElementSibling,
////              options = styledSelect.nextElementSibling;
////        
////        console.log(e.keyCode);
////        
////        if(e.keyCode === 13 || e.keyCode === 32){
////            utils.triggerEvent(styledSelect, 'click');
//////            console.log(e);
////            options.focus();
////            
////        }
//        
//        if(e.keyCode === 40){
////            console.log('test');
//            console.log(e, options);
//            
////            console.log(e.options[e.selectedIndex].value);
//        }
//        
//    };
//    
//    const focusSelect = function(e){
//        e.preventDefault();
//        console.log('focus', e, e.nextElementSibling);
//        
//        
//    };
    
    const createCustomSelect = function(){ 
        let selectSelectors = document.querySelectorAll(config.selectClass);
        
        utils.forEach(selectSelectors, function (index, value) {
            let thisSelect = value,
                numberOfOptions = thisSelect.children.length,
                customSelect = document.createElement('div');
                
            
//            utils.addEvent(thisSelect, 'focus', focusSelect);
            
            utils.addClass(thisSelect, config.selectClassHidden.substr(1));
            utils.addClass(customSelect, config.customSelectWrapperClass.substr(1));

            utils.wrapTag(thisSelect, customSelect);
            thisSelect.insertAdjacentHTML('afterend', '<div class="'+ config.styledSelectClass.substr(1) +'"></div>');
                        
            let styledSelect = thisSelect.nextElementSibling,
                customSelectLabel = customSelect.previousElementSibling;
            
            if(customSelect){
                utils.addEvent(customSelectLabel, 'click', labelClick);
            }
            
            styledSelect.textContent = thisSelect.children[0].textContent;
            styledSelect.insertAdjacentHTML('afterend', '<ul class="'+ config.optionsClass.substr(1) +' '+ config.optionsClassHidden.substr(1) +'"></ul>');
            utils.addEvent(styledSelect, 'click', styledSelectClick);
            
            let customSelectOptions = styledSelect.nextElementSibling;
            
            for(let i=0; i<numberOfOptions; i++){
                let li = document.createElement('li');
                
                li.textContent = thisSelect.children[i].textContent;
                li.setAttribute('rel', thisSelect.children[i].value);
                utils.addEvent(li, 'click', itemClick);
                
                customSelectOptions.appendChild(li);
            }
            
            let customSelectItems = customSelectOptions.children;
            customSelectItems[1].focus();
            
            utils.addEvent(thisSelect, 'keydown', function(e){
//                e.preventDefault();
//                if(e.keyCode !== 9 ){
                    
                    if(e.keyCode === 13 || e.keyCode === 32){
                        e.preventDefault();
                        utils.triggerEvent(styledSelect, 'click');
//                        console.log(this.value, customSelectItems[1]);
//                        $(customSelectItems[1]).focus();
                        
                    }
                    if(e.keyCode === 40){
                        console.log(this.value);
                    }
//                }
            });
//            utils.addEvent(customSelectItems, 'keydown', function(e){
//                if(e.keyCode === 40){
//                        console.log(e);
//                    }
//            });           
            utils.addEvent(customSelectItems, 'click', itemClick);           
        });
        
        utils.addEvent(document.querySelector('body'), 'click', hideStyledSelect);
    };
    
    return {
        setSelectClass: setSelectClass,
        init: createCustomSelect
    };
    }(window, document));


function init() {
    // customSelect.setSelectClass('test');
    customSelect.init();
    customCheckbox.handle();
    forms.handle();
    
}

ready(init);
