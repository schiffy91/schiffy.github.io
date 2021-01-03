exports.main = function(currentPath) {
	const fs = require("fs");
	const path = require("path");
	const basePath = "img/photography";
	const fullPath = path.resolve(currentPath + "../" + basePath);

	var html = [];
	html.push("<div class=\"grid\" display: none>");
	fs.readdirSync(`${fullPath}/low-res/`).forEach(file => {
		let src = `${basePath}/thumbnail/${file.toString()}`;
		let lazy = `${basePath}/low-res/${file.toString()}`;
		let lightbox = `${basePath}/medium-res/${file.toString()}`;
		let img = `\t\t<img class="lazy thumbnail" src="${src}" lazy-src="${lazy}" lightbox-src="${lightbox}"/>`;
		html.push(img);
	})
	html.push("\t</div>")
	return html.join('\n');
}