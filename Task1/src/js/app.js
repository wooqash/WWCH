'use strict';

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

const customSelect = (function(){
    const forEach = function(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    };
    
    const addClass = function(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    };
    
    const wrapTag = function (toWrap, wrapper) {
        console.log(toWrap, wrapper);
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
    }
    
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
            styledSelect.insertAdjacentHTML('afterend', '<ul class="customSelect__options"></ul>')
            
            let customSelectOptions = styledSelect.nextElementSibling;
            
            for(let i=0; i<numberOfOptions; i++){
                let li = document.createElement('li');
                
                li.textContent = thisSelect.children[i].textContent;
                li.setAttribute('rel', thisSelect.children[i].value);
                
                customSelectOptions.appendChild(li);
            }
            
            let customSelectItems = customSelectOptions.children;
            
            
            console.log(customSelectItems);
        });
    };
    
    return {
        init: createCustomSelect
    };
}());


function init() {
    customSelect.init();
}

ready(init);
