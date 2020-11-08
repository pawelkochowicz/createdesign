"use strict";
console.log(`Hello world!`);

const navigationSwitcher = document.querySelector('.nav__switcher--js')
navigationSwitcher.addEventListener('click',(e) => {
    const navigationList = document.querySelector('.nav__menu--js')
    navigationList.classList.toggle('nav__menu--visible')
});