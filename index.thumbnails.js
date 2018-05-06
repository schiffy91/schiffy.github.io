exports.main = function() {
	let fs = require('fs');

	var html = [];
	html.push("<div class=\"gallery\">");
	fs.readdirSync("img/low-res/").forEach(file => {
		let src = `img/thumbnail/${file.toString()}`;
		let lazy = `img/low-res/${file.toString()}`;
		let frame = `img/medium-res/${file.toString()}`;
		let img = `\t\t<img class="lazy thumbnail" src="${src}" lazy-src="${lazy}" frame-src="${frame}"/>`;
		html.push(img);
	})
	html.push("\t</div>")
	return html.join('\n');
}