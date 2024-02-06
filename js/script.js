const burgerBtn = document.querySelector('.burger')
const barsIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-times')
const burgerItems = document.querySelector('.burger-items')

const showBurgerIcon = () => {
    burgerItems.classList.toggle('active')
    burgerBtn.classList.toggle('activeBtn')
    barsIcon.classList.toggle('hide')
    xIcon.classList.toggle('hide')
}

burgerBtn.addEventListener('click', showBurgerIcon)