// Раскрывающийся блок в секции "Вопрос-ответ"

let plus = document.querySelectorAll(".questions__plus");
let minus = document.querySelectorAll(".questions__minus");
let answer = document.querySelectorAll(".questions__answer");
for (let i = 0; i < plus.length; i++) {
	plus[i].addEventListener("click", function () {
		answer[i].classList.add("questions__answer_visible");
		plus[i].style.display = "none";
		minus[i].style.display = "block";
	});
}

for (let i = 0; i < plus.length; i++) {
	minus[i].addEventListener("click", function () {
		answer[i].classList.remove("questions__answer_visible");
		plus[i].style.display = "block";
		minus[i].style.display = "none";
	});
}

// Гамбургер-меню

window.addEventListener("DOMContentLoaded", () => {
	let menu = document.querySelector(".header__menu"),
		menuItem = document.querySelectorAll(".header__link"),
		hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("header__menu_active");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			menu.classList.toggle("header__menu_active");
		});
	});
});

// Карусель

let switchButton = document.querySelectorAll(".carousel__dot");
let item = document.querySelectorAll(".home-comfort__item");
for (let i = 0; i < switchButton.length; i++) {
	switchButton[i].addEventListener("click", function () {
		switchButton.forEach((el) => el.classList.remove("carousel__dot_active"));
		switchButton[i].classList.toggle("carousel__dot_active");
		item.forEach((el) => (el.style.display = "none"));
		item[i].style.display = "block";
	});
}
