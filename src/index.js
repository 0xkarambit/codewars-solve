#!/usr/bin/env node
const https = require("https");
// const { yellow, cyan } = require('kleur');
// const {chalk} = require('chalk');

// when starting script use `-r esm`
// import { exit } from "./helper_functions";
import "./helper_functions"

const log = console.log;
const { argv } = process;

let url = argv[2];

// check if argument provided is a url;
try { url = new URL(url) }
catch(e)
{
	if (e.message.includes("Invalid URL")){
		exit("invalid URL");
	}
	log(e); // || exit(e)
}

// check if url is from codewars website only;
if (url.hostname !== "www.codewars.com") {
	exit("not a codewars url");
}

const id = url.pathname.split('/')[2];
const query = `https://www.codewars.com/api/v1/code-challenges/${id}`
let title = "" // get title from https://www.codewars.com/api/v1/code-challenges/:id_or_slug

log(query);

https.get(query, (res) => {
	let data = '';

	// A chunk of data has been recieved.
	res.on('data', (chunk) => {
	  data += chunk;
	});

	// The whole response has been received. Print out the result.
	res.on('end', () => {
	  console.log(JSON.parse(data));
    title = JSON.parse(data).slug;
    log(red(title))
    let d = new Date();
    log({time: d.toLocaleTimeString(), date: d.toLocaleDateString(), day: d.getDay()});
    log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(d))
    // provide a way to set the script format and a user.js to pass options to generate the script/program
	});
})

.on("error", (err) => {
  console.log("Error: " + err.message);
});

log(red(title))

// now only creating the file and writing some prerequisite content is left

// function exit(statment) {
// 	console.log(statment);
// 	process.exit();
// }

function makeFile(title, ext = 'js') {
  // add date, name, challengeName, // should i get name, etc from a config file ?
  let d = new Date();
  let textView =
  `${url}
  ${name} ${date} ${startTime}`;
}

function red(str) {
  return '\x1b[91m' + str + '\x1b[0m';
}




/* code for Sum string as numbers
 * also try read the solutions submitted somebody implemented BigInt !! https://www.codewars.com/kata/reviews/5324945e2ece5e1f32000373/groups/572a59c2a3af38951f000858
function sumStrings(a,b) { 
  console.log(a,b);
  const toloop = (a.length > b.length) ? a : b;
  let toPadd = (a.length > b.length) ? b : a;
  toPadd = toPadd.padStart(toloop.length, "0");
  console.log(toloop,'\n', toPadd);
  let totalSum = "";
  let carry = 0;
  for (let i = toloop.length - 1; i >= 0; i--) {
    const [dig1, dig2] = [Number(toloop[i]), Number(toPadd[i])];
    let sum = String(dig1 + dig2 + carry);
    carry = (sum.length > 1) ? Number(sum[0]) : 0;
    console.log(dig1, dig2, 'sum =', sum, 'carry=', carry);
    if (carry) {
      sum = sum[1]
    }
    totalSum = sum + totalSum;
    console.log(totalSum)
  }
  if (carry) {
    totalSum = String(carry) + totalSum;
  }
  while(totalSum[0] == '0') {
    totalSum = totalSum.slice(1)
  }
  console.log('\n\n',totalSum)
  return totalSum;
}
*/

/* TODO other than that read the https://dev.codewars.com/#api-reference
 * and maybe try to download/get your code for this challengr
 * ps :- i like vim so much.
*/


/*
 * hmmm what type of code wars tools should i make ?
 * to bookmark good answers ?
 * to get title desciption and submit code without using browser ? [automation]
 * to observer and backup all my code from the website an upload to github ?
 *
 * lol i will just make them all.
 * oooh i forgot about the instagram bot idea.
 * also TODO
 * make a nodejs object formatter colored output included for curl response viewing.
*/