#!/usr/bin/env node
// when starting script use `-r esm`
const https = require("https");
const fs = require("fs");
import { resolve } from "path";
const path = require("path")
// import "./helper_functions" // cant use F12 to do def lookup with this syntax
import { exit } from "./helper_functions";

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
	exit(e); // || exit(e)
}

// check if url is from codewars website only;
if (url.hostname !== "www.codewars.com") {
	exit("not a codewars url");
}

// output/ coding file writing ? well normally this info should be in a config file...
if (argv.includes("--file") || argv.includes("-f")) {
  // ERROR: ok so when using npm start --file is not a part of argv but when running node ./script.js it is.
  // so i will just use node -r esm src/index.js ...args to run for now;

  // verify if the file path is provided
  let i = argv.indexOf("--file") || argv.includes("-f");
  if (!argv[i + 1]) exit("no file provided");
  // ok so with `resolve` if a user enters --file /index.js the file will be created at /index.js
  //     (i am using git scm so for me / is essentially "C:\Program Files\Git");
  // but if we use `join` if a user enters --file /index.js the file will be created at process.cwd()/index.js
  // should be i guess (funny thing for me it does this (again i am using git scm thats why)
  // "C:\backup\Documents\html\javaScript\projects\codewars-solve\C:\Program Files\Git\index.js" )
  // simple name.js works with both, lets just use resolve for now. (seems better to me btw);
  let filePath = resolve(process.cwd(), argv[i + 1]);
  log(red(filePath));
  log((fs.existsSync(filePath)) ? "file exists":"file does not exist");
  if (fs.existsSync(filePath)) {
    // should i ask to overwrite the file?
    // i think i should see if it is has some data ya.
    let shouldWrite = true;
    if (fs.lstatSync(filePath).size == 0) {
      // file is empty ...

      // can the stats still be disturbed if we write to it ? hmmmm
      // lets write for now...
    } else {
      // ask the user if he wants to overwrite the file..
      shouldWrite = getUserInput(`${path.basename(filePath)} already exists. do you wish to overwrite its contents ?`);
      // we are yet to take care of getUserInput();
      function getUserInput(msg) {
        log(msg);
      }
    }
    if (shouldWrite) {
      // write
      log("writing!")
      fs.writeFileSync(filePath, "some data .. haha\n");
    }
  }
  // https://nodejs.org/api/fs.html#fs_file_system_flags
  exit("good work !");
}

// main code
const id = url.pathname.split('/')[2];
const query = `https://www.codewars.com/api/v1/code-challenges/${id}`
let title = "" // get title from https://www.codewars.com/api/v1/code-challenges/:id_or_slug

log(red(query));

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