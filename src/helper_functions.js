function exit(msg) {
	process.stderr.write(msg);
	process.exit();
}

module.exports = {
	exit
}