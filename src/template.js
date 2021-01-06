const fs = require('fs');
const { delimiter } = require('path');
const log = console.log;
const path = require('path');
const { exit } = require('./helper_functions');

function test() {
	log("template engien working !")
}


// or should i just add it as a string in config.js...... hmm lets keep them seaprate for now
function getTemplate(filePath) {
	// because __dirname points to the ./src directory, but template is in base dir by default;
	let p = path.join(__dirname, "./../", filePath);
	let content = '';
	try {
		content = fs.readFileSync(p, 'utf8');
	} catch (e) {
		exit(e.message + e.code);
	}
	return content;
}

function processTemplate(template, dataObj) {
	with (dataObj) {
		let delimiter = ' ';
		let words = template.split(delimiter);
		return words;
		let temp = ''; 
		// for (let i in template) {
		// 	if ();
		// }


		for (let i in words) {
			let word = words[i];
			if (word[0] == '$') {
				if (dataObj[word]) {
					// replace it with the val
				} else {
					// call out error for not escaping with \.
				}
				continue;
			}
			temp += word + delimiter;
		}
	}
	// a = a.filter(Boolean)
}

function render(temp, data) {
	let txt = '';
	// thanks discord! Programming#javascript
	let lines = temp.split(/(\r\n|\n)/);
	for (let line of lines) {
		let words = line.split(' ');
		for (let word of words) {
			if (word[0] == '$') {
				if (typeof data[word.slice(1)] == "function") {
					txt += data[word.slice(1)]() + ' ';
					continue;
				}
				txt += data[word.slice(1)] + ' ';
				continue;
			}
			if (words.indexOf(word) == words.length - 1) {
				// if this is last word dont add space/delimiter;
				txt += word;
				continue;
			}
			txt += word + ' ';
		}
	}
	return txt;
}

module.exports = {
	test,
	getTemplate,
	processTemplate,
	render
}
