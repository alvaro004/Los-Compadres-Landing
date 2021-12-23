// responsive carousel

let swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1080: {
			slidesPerView: 3,
			spaceBetween: 30,
			slidesPerGroup: 3,
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 30,
			slidesPerGroup: 2,
		},
	},
});

// ANIMATIONS

AOS.init();

//mobile slide

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		// toggle nav

		nav.classList.toggle('nav-active');
		nav.classList.toggle('show-nav');

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
	});
};

navSlide();
