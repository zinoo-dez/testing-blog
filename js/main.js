let bars = document.querySelector("#bars");
let nav__links = document.querySelector(".nav__links");
bars.onclick = function () {
	bars.classList.toggle("fa-times");
	nav__links.classList.toggle("show");
};
