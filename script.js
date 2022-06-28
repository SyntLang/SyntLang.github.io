
// no context menu
window.addEventListener('contextmenu', function(e) {
	e.preventDefault();
});

// output supporters
function supporters() {
	let url = 'https://raw.githubusercontent.com/SyntLang/funds/main/supporters.csv';

	fetch(url).then(response => response.text()).then(csv_raw => {
		let csv = csv_raw.split('\n');
		csv.pop();
		let supporters = {
			a: [],
			b: [],
			c: []
		};
		for (let supporter of csv) {
			let [name, desc, img, tier, bgc, tc, style] = supporter.split(',');
			let data = {
				name: name,
				img: img,
				bgc: bgc,
				tc: tc,
				style: style
			};

			tier = tier.toLowerCase();

			if (tier == 'a') {
				supporters.a.push(data);
			} else if (tier == 'b') {
				supporters.b.push(data);
			} else if (tier == 'c') {
				supporters.c.push(data);
			}
		}

		let supporters_html = '';
		let a_supporters_html = '';
		let b_supporters_html = '';
		let c_supporters_html = '';

		for (let supporter of supporters.a) {
			a_supporters_html += `
				<div class="supporter" style="background-color: ${supporter.bgc}; ${supporter.style}">
					<div class="sup-img">
						<img src="${supporter.img}" alt="${supporter.name}">
					</div>
					<div class="sup-name" style="color: ${supporter.tc};">${supporter.name}</div>
				</div>
			`;
		}
		for (let supporter of supporters.b) {
			b_supporters_html += `
				<div class="supporter" style="background-color: ${supporter.bgc}; ${supporter.style}">
					<div class="sup-img">
						<img src="${supporter.img}" alt="${supporter.name}">
					</div>
					<div class="sup-name" style="color: ${supporter.tc};">${supporter.name}</div>
				</div>
			`;
		}
		for (let supporter of supporters.c) {
			c_supporters_html += `
				<div class="supporter" style="background-color: ${supporter.bgc}; ${supporter.style}">
					<div class="sup-img">
						<img src="${supporter.img}" alt="${supporter.name}">
					</div>
					<div class="sup-name" style="color: ${supporter.tc};">${supporter.name}</div>
				</div>
			`;
		}

		supporters_html += `
			<h2>Organisations and Companies that support us!</h2>
			<div class="supporters-list">${a_supporters_html}</div>
			<h2>People and groups that support us!</h2>
			<div class="supporters-list">${b_supporters_html}</div>
			<h2>Synt Contributors!</h2>
			<div class="supporters-list">${c_supporters_html}</div>
		`;

		document.getElementById('supporters').innerHTML = supporters_html;
	});
}

supporters();

