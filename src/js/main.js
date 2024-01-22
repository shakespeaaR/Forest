const burgerBtn = document.querySelector('.mobilemenu-icon')
const mobileMenu = document.querySelector('.mobilemenu')
const footerYear = document.querySelector('.year')

burgerBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('mobilemenu-active')
	burgerBtn.classList.toggle('mobilemenu-icon__close')
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

handleCurrentYear()
