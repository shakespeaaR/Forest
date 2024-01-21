const burgerBtn = document.querySelector('.mobilemenu-icon')
const mobileMenu = document.querySelector('.mobilemenu')

burgerBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('mobilemenu-active')
	burgerBtn.classList.toggle('mobilemenu-icon__close')
})
