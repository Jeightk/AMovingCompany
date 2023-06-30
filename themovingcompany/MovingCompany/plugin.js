

const body = document.body;
let lastScroll = 0;



const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", ()=> {

	const currentScroll = window.pageYOffset

	if(currentScroll <= 0){
		body.classList.remove("scroll-up")
	}

	if(currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up")
		body.classList.add("scroll-down")
	}

	if(currentScroll < lastScroll && body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-down")
		body.classList.add("scroll-up")
	}


	lastScroll = currentScroll;

	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		document.getElementById("home").style.top = "0";
  	} else {
    	document.getElementById("home").style.top = "-50px";
  	}

	// lastScrollY = window.scrollY;
});


//mobile stuff

// $(document).ready(function(){
// 	var width = screen.width,height = screen.height;

// 	if (screen.width <= 1000 || screen.height <= 1000) {
// 		$('#navi').remove();
// 	}
// });


//









function scrollToReview(){
	var rev = document.getElementById("rev1");
	rev.scrollIntoView();
	// alert("Holy shaft");
}
function scrollToHome(){
	var rev = document.getElementById("mainPageHeader");
	rev.scrollIntoView();
}
function scrollToContact(){
	var rev = document.getElementById("contactseparater");
	rev.scrollIntoView();
}
function scrollToAbout(){
	var rev = document.getElementById("aboutseparater");
	rev.scrollIntoView();
}



