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
	// i think i should accept a validating function or regexp
	return new Promise((resolve) => {
		rl.question(msg, function(ans) {
			rl.close();
			resolve(ans);
			// should i really accept enter as an answerr
		});
	});
}

module.exports = {
	exit,
	getInput
}