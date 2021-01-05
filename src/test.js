const { getInput } = require('./helper_functions');

(async () => {
	let output = ''
	while (output == '') {
		output = await getInput("hows your day today ?");
		console.log(output)
		// doesnt work after 2 logs and printing data 1 time
		// oh it stops becasue we are calling rl.close() !!
	}
	console.log("some thing in betewwwen");
	console.log(output)
})()


// console.log(out);