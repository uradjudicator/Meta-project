const burger = document.querySelector('.bars')
const xBurger = document.querySelector('.x')
const mobileMenu = document.querySelector('.mobile-menu')

burger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active')
})

xBurger.addEventListener('click', ()=>{
    mobileMenu.classList.remove('active')
})
