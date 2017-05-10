'use strict';

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

function toggleClass(el, className){
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
    
function hasClass(el, className){
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
    }

function wrapTag (toWrap, wrapper) {
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
    
function triggerEvent(element, eventType){
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
    }
    
function isTypeOf(type, obj) {
        var clas = Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase();
        return obj !== undefined && obj !== null && clas === type.toLocaleLowerCase();
    }
        
export {forEach, insertAfter, addClass, removeClass, toggleClass, hasClass, wrapTag, addEvent, triggerEvent, isTypeOf };
