'use strict';

const utils = (function(window, document){
    const forEach = function(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    };
    
    const insertAfter = function(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    };

    const addClass = function(el, className) {
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
        if (el.classList){
            if(el.classList.contains(className)){
                return true;
            }
        }
        else{
            if(new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)){
                return true;
            }
        }
            
        return false;
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
    
    const triggerEvent = function(element, eventType){
        if('createEvent' in document){
            const event = document.createEvent('HTMLEvents');
            event.initEvent(eventType, false, true);
            element.dispatchEvent(event);            
        }
        else{
            const event = document.createEventObject();
            event.eventType = eventType;
            element.fireEvent('on'+event.eventType, event);
        }        
    };
    
    const checkType = function (type, obj) {
        var clas = Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase();
        return obj !== undefined && obj !== null && clas === type.toLocaleLowerCase();
    };
    
    return {
        forEach: forEach,
        insertAfter: insertAfter,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        hasClass: hasClass,
        wrapTag: wrapTag,
        addEvent: addEvent,
        triggerEvent: triggerEvent,
        isTypeOf: checkType
    };
}(window, document));

export default utils;