console.log("Hi, Welcome to Alen Begzic Portfolio!");

function toggleNavigation() {
	let navElement = $("#myTopnav");
	if (navElement[0].className === "topnav") {
		navElement[0].className += " responsive";
	} else {
		navElement[0].className = "topnav";
	}
}
