
var splide = new Splide("#image-carousel", {
	direction: "ttb",
	height: "100rem",
	wheel: false,
	perPage : 2,
	pagination: false,
	breakpoints: {
		740: {
		  height : '30rem',
		},
	},
});

splide.mount();