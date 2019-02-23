let fs = require("fs");
let exec = require("child_process").exec;

// Parse arguments
let args = process.argv.slice(2);
if (!Array.isArray(args) || args.length != 3) {
	throw "usage: resize [input path] [output path] [max size (kb)]";
}

let inputPath = args[0];
let outputPath = args[1];
let maxSize = args[2];

fs.readdirSync(inputPath).forEach(file => {
	exec(`convert '${file}' -define jpeg:extent=${maxSize}kb '${outputPath}/${file}'`, (error, stdout, stderr) => {
		if (error) {
			console.error(error);
		}
		if (stderr) {
			console.error(stderr);
		}
		if (stdout) {
			console.log(stdout);
		}
	})
});