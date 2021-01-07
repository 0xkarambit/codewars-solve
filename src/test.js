const { getInput } = require('./helper_functions');
const https = require('https');

(async () => {
	let output = ''
	https.get('https://example.com', async (res) => {
		// ok so await cannot be used inside here oh i got it i need to make the callback an async function
		// yes it works now yes !!!
		output = await getInput('how was your day ?')
		console.log("some thing in betewwwen");
		console.log(output)
	})
})()


// console.log(out);