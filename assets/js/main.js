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


function debounceFn(func, wait, immediate) {
	let timeout;
	return function () {
		 let context = this,
		 args = arguments;
		 let later = function () {
			  timeout = null;
			  if (!immediate) func.apply(context, args);
		 };
		 let callNow = immediate && !timeout;
		 clearTimeout(timeout);
		 timeout = setTimeout(later, wait);
		 if (callNow) func.apply(context, args);
	};
}

/*==================== FIXED HEADER ====================*/
const header = this.document.querySelector(".header");
window.addEventListener("scroll", debounceFn(function(e){
    const scrollY = window.pageYOffset;
    if(scrollY >= header.offsetHeight){
        header && header.classList.add("is-fixed"); // if(header) header.classList.add("is-fixed"); 
    }
    else{
        header && header.classList.remove("is-fixed"); // if(header) header.classList.remove("is-fixed"); 
    }
},50));



/*==================== ACTIVE NAVIGATION ITEM WHEN SCROLL ====================*/
const sections = document.querySelectorAll(".section");
const listNavlink = document.querySelectorAll(".nav-link");

listNavlink.forEach(item => item.addEventListener("click", (e) => {
	listNavlink.forEach(item => item.classList.remove("active"));
	e.target.classList.add("active")

	const navigationMenu = document.querySelector(".navigation__menu");
	navigationMenu.classList.contains("is-show") && navigationMenu.classList.remove("is-show")

}));



//============================ Event click show-hide search form moble ============================
const btnShowSearch = document.querySelector(".btn-show-search");
btnShowSearch.addEventListener("click", (e) => {
	const icon = e.currentTarget.querySelector("i");
	icon.classList.toggle("uil-times-square");

	const wrapFormSearch = document.querySelector(".search-wrapper");
	wrapFormSearch.classList.toggle("is-show");
})


//============================ Event click show-hide menu moble ============================
const btnShowMenu = document.querySelector(".btn-show-menu i");
const btnHideMenu = document.querySelector(".btn-hide-menu i");

btnShowMenu.addEventListener("click", (e) => {
	const navigationMenu = document.querySelector(".navigation__menu");
	navigationMenu.classList.add("is-show");
})

btnHideMenu.addEventListener("click", (e) => {
	const navigationMenu = document.querySelector(".navigation__menu");
	navigationMenu.classList.remove("is-show");
})





//============================ Event click button show modal ============================
const modal = document.querySelector(".modal");
const modalThank = document.querySelector("#modal-thank");
const btnCloseModal = document.querySelector(".modal-close");
const btnCloseModalThanks = document.querySelector(".btn-close");
const body = document.querySelector("body");


const btnRegister = document.querySelector(".btn-register");
btnRegister.addEventListener("click", () => {
	!document.body.classList.contains("modal-open") && document.body.classList.add("modal-open");
	modal.classList.add("is-show");
})




//============================ Event click button hidden modal ============================
btnCloseModal.addEventListener("click", function() {
    if (modal.classList.contains("is-show")) {
        modal.classList.remove("is-show");
		}
		document.body.classList.contains("modal-open") && document.body.classList.remove("modal-open");
})

btnCloseModalThanks.addEventListener("click", function() {
    if (modalThank.classList.contains("is-show")) {
			modalThank.classList.remove("is-show");
    }
})

//============================ Event click outside modal then hidden modal ============================
document.body.addEventListener("click", function (event) {
    if(event.target.matches(".modal") && modal.classList.contains("is-show")){ // Nhấn vào div modal rìa ngoài sẽ close
        modal.classList.remove("is-show");
		  document.body.classList.contains("modal-open") && document.body.classList.remove("modal-open");
    }
});



const formRegister = document.querySelector("#form-register");
formRegister.addEventListener("submit", (e) => {
	e.preventDefault();
	// reset form
	e.target.reset();
	modalThank.classList.add("is-show");
})

