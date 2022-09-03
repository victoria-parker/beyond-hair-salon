const body=document.querySelector('body')
const header=document.querySelector('.header')


window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
        header.classList.add('header-scrolled')
    } else {
        header.classList.remove('header-scrolled')
    }
};


