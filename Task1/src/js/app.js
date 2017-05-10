'use strict';

import * as utils from './modules/utils';
import * as customCheckbox from './modules/customCheckbox';
import * as customSelect from './modules/customSelect';

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

//const forms = (function(window, document){
//    
//    const blockSubmit = function(element){
//        const formsElems = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('form');
//            
//        utils.forEach(formsElems, function(index, value){
//            let thisForm = value;
//            utils.addEvent(thisForm, 'submit', function(e){e.preventDefault();});
//        });
//    };
//    
//    return {
//        block: blockSubmit
//    };
//}(window, document));

function init() {
    customCheckbox.init(); 
//    customSelect.config({
//        'customSelectButtonClass': 'dupa'
//    });
    customSelect.init();
//    forms.block();
    
//    (function blockSubmit(element){
//        const formsElems = element && document.querySelectorAll(element) ? document.querySelectorAll(element) : document.querySelectorAll('form');
//            
//        utils.forEach(formsElems, function(index, value){
//            let thisForm = value;
//            utils.addEvent(thisForm, 'submit', function(e){e.preventDefault();});
//        });
//    }());
}

ready(init);
