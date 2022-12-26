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
