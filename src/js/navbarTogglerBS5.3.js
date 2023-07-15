document.addEventListener('DOMContentLoaded', function () {
	const burgerBtn = document.querySelector('.navbar-toggler')
	const burgerMenu = document.querySelector('.navbar-collapse')

	const toggleMenu = () => {
		burgerMenu.classList.toggle('appear')

		if (burgerMenu.classList.contains('appear')) {
			burgerBtn.innerHTML = '<img src="./dist/img/x.svg" alt="Przycisk do zwijania nawigacji">'
		} else {
			burgerBtn.innerHTML = '<img src="./dist/img/list.svg" alt="Przycisk do rozwijania nawigacji">'
		}
	}

	burgerBtn.addEventListener('click', toggleMenu)
})
