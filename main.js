
window.addEventListener('contextmenu', event => event.preventDefault());

function $(id) {
	return document.getElementById(id.replace("#", ""));
}

function page(pageId) {
	let changed = false;

	if (pageId == "home") {
		changed = true;
		$("#main-ux").style.left = "-10%";
		$("#home").style.transitionDelay = "2.5s";
		$("#home").style.opacity = "100%";
		$("#home-glass").style.left = "50%";
		$("#home-ux").style.height = "auto";
	} else {
		$("#main-ux").style.left = "0%";
		$("#home").style.transitionDelay = "0s";
		$("#home").style.opacity = "0%";
		$("#home-glass").style.left = "-150%";
		$("#home-ux").style.height = "0%";
	}

	if (pageId == "downloads") {
		changed = true;
		$("#downloads").style.transitionDelay = "0.75s";
		$("#downloads").style.opacity = "100%";
		$("#downloads").style.left = "0%";
	} else {
		$("#downloads").style.transitionDelay = "0s";
		$("#downloads").style.opacity = "0%";
		$("#downloads").style.left = "-100%";
	}

	if (pageId == "code") {
		changed = true;
		$("#code").style.transitionDelay = "0.75s";
		$("#code").style.opacity = "100%";
		$("#code").style.left = "0%";
	} else {
		$("#code").style.transitionDelay = "0s";
		$("#code").style.opacity = "0%";
		$("#code").style.left = "-100%";
	}

	if (pageId == "forums") {
		changed = true;
		$("#forums").style.transitionDelay = "0.75s";
		$("#forums").style.opacity = "100%";
		$("#forums").style.left = "0%";
	} else {
		$("#forums").style.transitionDelay = "0s";
		$("#forums").style.opacity = "0%";
		$("#forums").style.left = "-100%";
	}

	if (pageId == "info") {
		changed = true;
		$("#info").style.transitionDelay = "0.75s";
		$("#info").style.opacity = "100%";
		$("#info").style.left = "0%";
	} else {
		$("#info").style.transitionDelay = "0s";
		$("#info").style.opacity = "0%";
		$("#info").style.left = "-100%";
	}

	if (pageId == "license") {
		changed = true;
		$("#license").style.transitionDelay = "0.75s";
		$("#license").style.opacity = "100%";
		$("#license").style.left = "0%";
	} else {
		$("#license").style.transitionDelay = "0s";
		$("#license").style.opacity = "0%";
		$("#license").style.left = "-100%";
	}
	
	if (pageId == "docs") {
		changed = true;
		$("#docs").style.transitionDelay = "0.75s";
		$("#docs").style.opacity = "100%";
		$("#docs").style.left = "0%";
	} else {
		$("#docs").style.transitionDelay = "0s";
		$("#docs").style.opacity = "0%";
		$("#docs").style.left = "-100%";
	}

	if (!(changed)) {
		page("home");
	}
}

function code(langId) {
	if (langId == "Python") {
		window.location.href = "https://github.com/SyntLang/SyntPy";
	} else {
		window.location.href = "https://github.com/SyntLang";
	}
}

function download(fileId) {
	if (fileId == "SyntPy") {
		window.location.href = "https://github.com/SyntLang/Versions/blob/main/Synt%20V0_4%20DEV.zip?raw=true";
	} else {
		window.location.href = "https://github.com/SyntLang/Versions";
	}
}

page(window.location.hash.replace("#", ""));


