document.addEventListener('DOMContentLoaded', function () {
	const burgerBtn = document.querySelector('.navbar-toggler')
	const burgerMenu = document.querySelector('.navbar-collapse')

	const toggleMenu = () => {
		burgerMenu.classList.toggle('menu-appear')
	}

	burgerBtn.addEventListener('click', toggleMenu)
})
