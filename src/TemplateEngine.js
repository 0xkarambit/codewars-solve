const fs = require('fs');
const path = require('path');
const log = console.log;
const { exit } = require('./helper_functions');

export default class TemplateEngine{
	constructor(templatePath, dataObj) {
		this.templatePath = templatePath;
		this.dataObj = dataObj;
		this.template = "";
	}

	getVal(props) {
		return eval(`this.dataObj.${props}`) // probably not safe i guess idk though
		// but now i dont have to write that template api file
	}

	loadTemplate() {
		// because __dirname points to the ./src directory, but template is in base dir by default;
		let p = path.join(__dirname, "./../", this.templatePath);
		let content = '';
		try {
			content = fs.readFileSync(p, 'utf8');
		} catch (e) {
			exit(e.message + e.code);
		}
		this.template = content;
	}

	render() {
		let txt = '';
		// thanks discord! Programming#javascript
		let lines = this.template.split(/(\r\n|\n)/);
		for (let line of lines) {
			let words = line.split(' ');
			for (let word of words) {
				// its a sub
				if (word[0] == '$') {
					let sub = this.getVal(word.slice(1));
					if (typeof sub == "function") {
						txt += sub() + ' ';
						continue;
					}
					txt += sub + ' ';
					continue;
				}
				// its not a sub;
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
}

