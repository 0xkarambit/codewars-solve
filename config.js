// some reserved $keywords are to be kept like URL | url. $test $description
// OK SO I OBSERVED THAT NON OF THE KEYS IN THE KATA OBJECT WERE IN UPPERCASE
// SO WE CAN DEFINE ANY DATA HERE USING UPPERCASE KEYS !!
// todo: update all the config key references

module.exports = {
	"USERNAME":"HarshitJoshi9152",
	"BRANCH":"main",
	"DATE": () => {
		return new Intl.DateTimeFormat("en-GB", {
			dateStyle: "full",
			timeStyle: "long"
		}).format(new Date());
	},
	"TEMPLATEFILEPATH":"./template.txt",
	"LANGUAGE": {
		"NAME":"javascript",
		"EXT": "js"
	}
}