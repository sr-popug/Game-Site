
menu = document.querySelector('.menu')
hideMenu = document.querySelector('.menu-hidden')

menu.addEventListener('click', () => {
    hideMenu.classList.toggle('hidden')
})
