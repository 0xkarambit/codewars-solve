// some reserved $keywords are to be kept like URL | url. $test $description

module.exports = {
	"name":"HarshitJoshi9152",
	"branch":"main",
	"date": () => {
		return new Intl.DateTimeFormat("en-GB", {
			dateStyle: "full",
			timeStyle: "long"
		}).format(new Date());
	},
	// perhaps i dont need to mark "dynamic content" as "dynamic content"
	"dynamicInfo":[
		{
			"date": () => {
				return new Intl.DateTimeFormat("en-GB", {
					dateStyle: "full",
					timeStyle: "long"
				}).format(new Date());
			}
		}
	],
	"templateFilePath":"./template.txt"
}