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
        console.log(element, oldEventName);
    }

    const itemClick = function (e) {
        e.stopPropagation();
        let itemValue = e.target.attributes['rel'],
            list = e.target.parentNode,
            styledSelect = list.previousElementSibling;

        console.log(itemValue, list, styledSelect);



        console.log(e);
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
                addEvent(li, 'click', itemClick);
                
                customSelectOptions.appendChild(li);
            }
            
            let customSelectItems = customSelectOptions.children;
            
            addEvent(customSelectItems, 'click', function(e){
                console.log(e)
            });
            // console.log(customSelectItems[0]);
            // customSelectItems[0].addEventListener('click', function(e){
            //     console.log(e);
            // });

            console.log(customSelectItems);
        });
    };
    
    return {
        init: createCustomSelect
    };
}(window, document));


function init() {
    customSelect.init();
}

ready(init);
