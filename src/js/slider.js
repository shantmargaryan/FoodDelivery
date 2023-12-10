import Swiper from "swiper"
import { Navigation, Pagination } from 'swiper/modules';

let swiper = new Swiper(".menu__swiper", {
	modules: [Navigation, Pagination],
	spaceBetween: 15,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 4,
		}
	}
})

let swiperWeek = new Swiper(".menu__week-swiper", {
	modules: [Navigation, Pagination],
	spaceBetween: 15,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})