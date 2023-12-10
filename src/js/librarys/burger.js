import { enableScroll, disableScroll } from "./scrollController.js"


const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

nav.setAttribute("data-fixed-block", "");


burger.addEventListener("click", function () {
	burger.classList.toggle("burger_active");
	nav.classList.toggle("nav_open");
	header.classList.toggle("header_active");

	if (burger.classList.contains("burger_active")) {
		disableScroll();
		nav.style.paddingTop = header.offsetHeight + 50 +"px";
	} else {
		enableScroll();
		nav.style.paddingTop = "";
	}
})

const mediaQuery = window.matchMedia("(min-width: 992px")

// if (mediaQuery && burger.classList.contains("burger_active")) {
//   nav.style.paddingTop = "";
//   enableScroll();
// }

mediaQuery.addEventListener("change", function (event) {
	if (event.matches && burger.classList.contains("burger_active")) {
		nav.style.paddingTop = "";
		enableScroll();
	}
})