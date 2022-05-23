
// restrict context menu
window.addEventListener("contextmenu", event => {
	event.preventDefault();
});

function view_topic(topic_id) {
	document.getElementById(topic_id).scrollIntoView({
		behavior: "smooth",
	});
}

function fetch_content(file) {
	fetch(file, {
		cors: "no-cors",
		headers: {
			"Content-Type": "text/plain",
		},
		method: "GET",
	}).then(response => response.text()).then(content => {
		insert_content = `
			<div id="top" class="banner">
				<h1 id="title">
					<img src="Logo.png" alt="Synt">
					Synt Docs
				</h1>
			</div>
		`;

		insert_content += content;

		document.getElementById("content").innerHTML = insert_content;
	});
}

