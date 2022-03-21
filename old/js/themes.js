// THEMES

// default
if (localStorage.getItem("theme_mode") == null || localStorage.getItem("theme_mode") == "") {
	localStorage.setItem("theme_mode", "0");
}
var theme_mode = Number(localStorage.getItem("theme_mode"));

// THEMES
const THEMES = [
	{
		"name" : "dark",
		"--c1" : "#2a4455",
		"--c2" : "#ffffff",
	},
	{
		"name" : "light",
		"--c1" : "#ffffff",
		"--c2" : "#2a4455",
	}
]

// set theme
function set_theme(mode) {
	for (var key in THEMES[mode]) {
		document.documentElement.style.setProperty(key, THEMES[mode][key]);
	}
}

// change theme
function change_theme() {
	theme_mode = Number(theme_mode) + 1;
	if (theme_mode > THEMES.length - 1) {
		theme_mode = 0;
	}
	set_theme(theme_mode);
	localStorage.setItem("theme_mode", String(theme_mode));
}

// set theme on load
window.addEventListener("load", () => {
	set_theme(theme_mode);
});

