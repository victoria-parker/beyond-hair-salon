const body=document.querySelector('body')
const header=document.querySelector('.header')


window.onscroll = function() {
    
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
        header.classList.add('header-scrolled')
    } else {
        header.classList.remove('header-scrolled')
    }
};

/* Menu button */
const menuBtn=document.getElementById('menu-btn')
const closeMenuBtn=document.getElementById('close-menu-btn')
const menu=document.getElementById('menu')
const menuLinks=document.querySelectorAll('.menu a')

menuBtn.addEventListener('click',openMenu)
closeMenuBtn.addEventListener('click',closeMenu)
menuLinks.forEach(e=>e.addEventListener('click',closeMenu))

function openMenu(){
    menu.classList.remove('none')
    menuBtn.classList.add('none')
}

function closeMenu(){
    menu.classList.add('none')
    menuBtn.classList.remove('none')
}
