'use strict';

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

const customSelect = (function(window, document){
    
    
    const forEach = function(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    };
    
    const addClass = function(el, className) {
        console.log(el, className, el.classList);
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
        const styleSelect = document.querySelectorAll('.styledSelect'),
              list = document.querySelectorAll('.customSelect__options');

        forEach(styleSelect, function(index){
            removeClass(styleSelect[index], 'active');    
        });
        forEach(list, function(index){
            addClass(list[index], 'hide');
        });
    };
    
    const itemClick = function (e) {
        console.log(e);
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
        let selectSelectors = document.querySelectorAll('.form__select');
        
        forEach(selectSelectors, function (index, value) {
            let thisSelect = value,
                numberOfOptions = thisSelect.children.length,
                customSelect = document.createElement('div');
            
            addClass(thisSelect, 'form__select_hidden');
            addClass(customSelect, 'customSelect');

            wrapTag(thisSelect, customSelect);
            thisSelect.insertAdjacentHTML('afterend', '<div class="styledSelect"></div>');
            
            let styledSelect = thisSelect.nextElementSibling;
            
            styledSelect.textContent = thisSelect.children[0].textContent;
            styledSelect.insertAdjacentHTML('afterend', '<ul class="customSelect__options"></ul>');
            
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
            
            console.log(customSelectItems);
        });
        
        addEvent(document.querySelector('body'), 'click', hideStyledSelect);
    };
    
    return {
        init: createCustomSelect
    };
}(window, document));


function init() {
    customSelect.init();
}

ready(init);
