const burgerBtn = document.querySelector('.mobilemenu-icon')
const mobileMenu = document.querySelector('.mobilemenu')
const footerYear = document.querySelector('.year')
const navMenuLink = document.querySelectorAll('.nav-items__itemlink')

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navbar-example',
})

const openCloseMenu = () => {
	mobileMenu.classList.toggle('mobilemenu-active')
	burgerBtn.classList.toggle('mobilemenu-icon__close')
}

navMenuLink.forEach(link => {
	link.addEventListener('click', openCloseMenu)
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

burgerBtn.addEventListener('click', openCloseMenu)
handleCurrentYear()
