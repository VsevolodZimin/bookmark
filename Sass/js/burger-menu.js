"strict mode"

const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('mobile-menu-close-btn');
const menu = document.getElementById('mobile-menu');
console.log(burgerButton, menu, closeButton);
if(burgerButton && menu && closeButton) {
    burgerButton.addEventListener('click', () => {
        openMenu();        
    })

    closeButton.addEventListener('click', () => {
        closeMenu();       
    })
}
else {
    throw new Error('Element not found!')
}

function addClass(el, className) {
    if(!el.classList.contains(className)){
        el.classList.add(className);
    } 
}

function removeClass(el, className) {
    if(el.classList.contains(className)){
        el.classList.remove(className);
    } 
}

function openMenu() {
    addClass(burgerButton, 'hidden');
    addClass(menu, 'menu-shown');
}

function closeMenu() {
    removeClass(burgerButton, 'hidden');
    removeClass(menu, 'menu-shown');
}

