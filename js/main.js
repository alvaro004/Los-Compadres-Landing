let swiper = new Swiper('.mySwiper', {
	cssMode: true,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewheel: true,
	keyboard: true,
});
