'use strict';

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

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
    }
    
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

    const hideStyledSelect = function(e){
        e.stopPropagation();
        const styleSelect = document.querySelectorAll(config.styledSelectClass),
              list = document.querySelectorAll(config.optionsClass);

        forEach(styleSelect, function(index){
            removeClass(styleSelect[index], config.styledSelectActiveClass.substr(1));    
        });

        console.log(list, config.optionsClassHidden.substr(1));
        forEach(list, function(index){
            addClass(list[index], config.optionsClassHidden.substr(1));
        });
    };

    const styledSelectClick = function(e){
        console.log(e);
        e.stopPropagation();
        let styledSelect = e.target,
            list = styledSelect.nextElementSibling;

        console.log(list);
        toggleClass(styledSelect, config.styledSelectActiveClass.substr(1));
        toggleClass(list, config.optionsClassHidden.substr(1));
    };
    
    const itemClick = function (e) {
        
        e.stopPropagation();
        let item = e.target,
            itemValue = item.attributes['rel'].value,
            list = e.target.parentNode,
            styledSelect = list.previousElementSibling,
            select = styledSelect.previousElementSibling;

        select.value = itemValue;
//        addClass(list, 'hide');
        hideStyledSelect(e);
    };
    
    const createCustomSelect = function(){ 
        let selectSelectors = document.querySelectorAll(config.selectClass);
        
        forEach(selectSelectors, function (index, value) {
            let thisSelect = value,
                numberOfOptions = thisSelect.children.length,
                customSelect = document.createElement('div');
            
            addClass(thisSelect, config.selectClassHidden.substr(1));
            addClass(customSelect, config.customSelectWrapperClass.substr(1));

            wrapTag(thisSelect, customSelect);
            thisSelect.insertAdjacentHTML('afterend', '<div class="'+ config.styledSelectClass.substr(1) +'"></div>');
            
            let styledSelect = thisSelect.nextElementSibling;
            
            styledSelect.textContent = thisSelect.children[0].textContent;
            styledSelect.insertAdjacentHTML('afterend', '<ul class="'+ config.optionsClass.substr(1) +' '+ config.optionsClassHidden.substr(1) +'"></ul>');
            addEvent(styledSelect, 'click', styledSelectClick);
            
            let customSelectOptions = styledSelect.nextElementSibling;
            
            for(let i=0; i<numberOfOptions; i++){
                let li = document.createElement('li');
                
                li.textContent = thisSelect.children[i].textContent;
                li.setAttribute('rel', thisSelect.children[i].value);
                addEvent(li, 'click', itemClick);
                
                customSelectOptions.appendChild(li);
            }
            
            let customSelectItems = customSelectOptions.children;
            
            addEvent(customSelectItems, 'click', itemClick);           
        });
        
        addEvent(document.querySelector('body'), 'click', hideStyledSelect);
    };
    
    return {
        setSelectClass: setSelectClass,
        init: createCustomSelect
    };
}(window, document));


function init() {
    // customSelect.setSelectClass('test');
    customSelect.init();
}

ready(init);
