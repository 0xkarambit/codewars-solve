const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exit(msg) {
	process.stderr.write(msg);
	process.exit(1);
}

function getInput(msg) {
	return new Promise((resolve) => {
		rl.question(msg, function(ans) {
			rl.close();
			resolve(ans);
		});
	});
}

module.exports = {
	exit,
	getInput
}