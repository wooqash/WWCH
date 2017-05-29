'use strict';

$(document).ready(function(){
    
    
    $('#SubscribeEmail, #ContactFormEmail').on('blur', function(){
        const elem = this; 
        const group = $(elem).parent();
        const isValid = validateEmail(elem);
        handleErrors(isValid, group);
    });
    
    $('#SubscribeBtn').on('click', function(e){
        e.preventDefault();
        const elem = this;
        const group = $(elem).prev();
        const isValid = validateEmail($('#SubscribeEmail'));
        handleErrors(isValid, group);
    });
    
    $('#ContactFormName').on('blur', function(){
        const elem = this; 
        const group = $(elem).parent();
        const isValid = validateName(elem);
        handleErrors(isValid, group);
    });
    
    $('#ContactFormPhone').on('blur', function(){
        const elem = this; 
        const group = $(elem).parent();
        const isValid = validatePhoneNumb(elem);
        handleErrors(isValid, group);
    });
    
    function handleErrors(status, group){
        console.log(status, $(group));
        if(status){
            $(group).removeClass('has-error');
        }
        else{
            $(group).addClass('has-error');
        }
    }
    
    function validateEmail(element){
        if(element.hasOwnProperty('target')){
            element = element.target;
        }
        const emailRegExp = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/ig;
        const email = $(element).val().trim();

        let status = false;
        
        if(emailRegExp.test(email)){
            status = true;
        }
        
        console.log(status);
        return status;
        
    }
    
    function validateName(element){
        if(element.hasOwnProperty('target')){
            element = element.target;
        }
        const nameRegExp = /[a-z\sąśźćęńłóĄŚŹĆÓŁŃĘ\-]+/ig;
        const name = $(element).val();

        let status = false;

        if(nameRegExp.test(name)){
            status = true;
        }

        console.log(status);
        return status;
    }
    
    function validatePhoneNumb(element){
        if(element.hasOwnProperty('target')){
            element = element.target;
        }
        const nameRegExp = /[\+\-\(\)0-9\s]+/ig;
        const name = $(element).val();

        let status = false;

        if(nameRegExp.test(name)){
            status = true;
        }

        console.log(status);
        return status;
    }
});

