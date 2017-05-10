'use strict';

import * as utils from './utils';

function checking(e){
    const label = e.target.nodeName.toLocaleLowerCase() === 'label' ? e.target : e.target.parentNode,
          checkbox = label.previousElementSibling;

    if(!checkbox.checked){
        checkbox.checked = true;
    }
    else{
        checkbox.checked = false;
    }

    e.preventDefault();
}

function handleKeys(e){
    if(e.keyCode === 13 || e.keyCode === 32){
        if(e.target.checked){
           e.target.checked = false; 
        }
        else{
            e.target.checked = true;
        }
    }
    e.preventDefault();
}

function initCheckboxes(element){
    let checkboxes = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('input[type="checkbox"]');

    utils.forEach(checkboxes, function (index, value) {
        let thisCheckbox = value,
            thisLabel = value.nextElementSibling;

        utils.addEvent(thisCheckbox, 'keydown', handleKeys);
        utils.addEvent(thisLabel, 'click', checking);
    });
}

export {initCheckboxes as init};