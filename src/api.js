const util = require("util")

// ok i think we dont need this

export default class API{
	constructor(kata, config){
		this.kata = kata;
		this.config = config;
		// only for now lol;
		this.data = Object.fromEntries([...Object.entries(config), ...Object.entries(kata)]);
	}

	make() {
		this.newObj = {};
		let tofix = [];
		for (const i in this.kata) {
			if (Object.hasOwnProperty.call(this.kata, i)) {
				const val = this.kata[i];
				if (typeof val === "string") {
					this.newObj[i] = val;
				} else {
					tofix.push(i);
				}
			}
		}
		return tofix;
	}

	get(key) {
		return this.data[key]
	}
}