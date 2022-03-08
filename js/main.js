// Main

function redirect(page) {
	window.location.href = `/${page}`;
}

function download(version) {
	fetch(`https://api.synt.ml/download?version=${version}`).then(request => request.text()).then(link => {
		if (link !== 'ERROR') {
			window.location.open(link);
		} else {
			alert('ERROR!');
		}
	}).catch(error => {
		console.log("FAILED TO CONNECT: API.SYNT.ML (CONNECT SITE)");
		fetch(`https://synt-api.attaditya.repl.co/download?version=${version}`).then(request => request.text()).then(link => {
			if (link !== 'ERROR') {
				window.location.open(link);
			} else {
				alert('ERROR!');
			}
		}).catch(error => {
			console.log("FAILED TO CONNECT: API.SYNT.ML (HOST SITE)");
			window.open(`https://github.com/SyntLang/Versions`);
		});
	});
}

