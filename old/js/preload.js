// Preloader

// stop context menu actions
window.addEventListener('contextmenu', (event) => {
	event.preventDefault();
});

// toggle utilities
function utilities() {
	let utilities = document.getElementById("utilities");
	
	if (utilities.style.height == "5vmin") {
		utilities.style.height = `${((utilities.innerHTML.split('\n').length - 2) * 5) + (utilities.innerHTML.split('\n').length - 3)}vmin`;
	} else {
		utilities.style.height = "5vmin";
	}
}

