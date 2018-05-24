exports.main = function() {
	let fs = require('fs');

	var html = [];
	html.push("<div class=\"grid\">");
	fs.readdirSync("img/low-res/").forEach(file => {
		let src = `img/thumbnail/${file.toString()}`;
		let lazy = `img/low-res/${file.toString()}`;
		let lightbox = `img/medium-res/${file.toString()}`;
		let img = `\t\t<img class="lazy thumbnail" src="${src}" lazy-src="${lazy}" lightbox-src="${lightbox}"/>`;
		html.push(img);
	})
	html.push("\t</div>")
	return html.join('\n');
}