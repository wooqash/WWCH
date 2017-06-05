'use strict';

$(document).ready(function(){
    
    const settings = {
        'navHeight': 0
    };
    
    $(window).on('resize', resizePage).triggerHandler('resize');
    
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
    
    $('#ContactFormMessage').on('blur', function(){
        const elem = this; 
        const group = $(elem).parent();
        const isValid = validateMsg(elem);
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
        const name = $(element).val().trim();

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
    
    function validateMsg(element){
        if(element.hasOwnProperty('target')){
            element = element.target;
        }
        const messageRegExp = /[ąśźćęńłó\-\_\!\(\)\+\^\~\`\@\#\$\%\&\*\/\'\"\;\:\{\}\[\]\|\,\.\?\\\w\d\s]+/ig;
        const message = $(element).val().trim();

        let status = false;

        if(messageRegExp.test(message)){
            status = true;
        }

        console.log(status);
        return status;
    }
    
    function resizePage(){
        setNavHeight();
    }
    
    function setNavHeight(){
        settings.navHeight =  $('.navbar').height();
    }
    
    function smoothScroll(event){
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            
            if($('.navbar-collapse').hasClass('in')){
                $('.navbar-toggle').trigger('click');
            }
            
            
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - settings.navHeight
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    }
    
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .off('click')
        .on('click', smoothScroll);
});

