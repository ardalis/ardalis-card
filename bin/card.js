#!/usr/bin/env node
"use strict";
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const gs = require("gradient-string");

// define custom colors
const pink = "#ff1675";
const orange = "#ff7b01";
const inkyBlue = "#130f25";
const yellow = "#ffc942";
const blue = "#00A3FF";
const green = "#02e088";
const lightBlue = "#99DAFF";

// set up chalk and gradients
const yellowChalk = chalk.hex(yellow);
const lbChalk = chalk.hex(lightBlue);
const blueChalk = chalk.hex(blue);
const greenChalk = chalk.hex(green);
const orangeChalk = chalk.hex(orange);
// const pinkChalk = chalk.hex( pink );
const np = gs(pink, orange);

// Some sweet ascii art
const avatar = require("../art/avatar");
const banner = require("../art/banner");

const newline = "\n";

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
	borderColor: pink,
	backgroundColor: inkyBlue
};

// Text + chalk definitions
const data = {
	name: yellowChalk.bold("                   STEVE SMITH"),
	handle: yellowChalk("ardalis"),
	work: np("Founder"),
	workUrl: np("https://nimblepros.com"),
	twitter: yellowChalk("https://twitter.com/ardalis"),
	mastodon: yellowChalk("fosstodon.org/@ardalis"),
	bluesky: yellowChalk("@ardalis.com"),
	//threads: yellowChalk( "@reverentgeek"),
	github: yellowChalk("https://github.com/ardalis"),
	linkedin: yellowChalk("https://www.linkedin.com/in/stevenandrewsmith/"),
	web: yellowChalk("https://ardalis.com"),
	email: yellowChalk("steve@nimblepros.com"),
	npx: orangeChalk("npx ardalis"),
	labelWork: blueChalk("      Work:"),
	labelWorkUrl: blueChalk("           "),
	labelTwitter: blueChalk("   Twitter:"),
	labelMastodon: blueChalk("  Mastodon:"),
	labelBluesky: blueChalk("   BlueSky:"),
	labelThreads: blueChalk("   Threads:"),
	labelGitHub: blueChalk("    GitHub:"),
	labelLinkedIn: blueChalk("  LinkedIn:"),
	labelWeb: blueChalk("       Web:"),
	labelCard: blueChalk("      Card:"),
	labelEmail: blueChalk("     Email:"),
	bio: lbChalk(`I help software teams deliver better software, 
faster. I am a software architect, trainer, consultant, and
international speaker. I'm a Microsoft MVP, open sourcerer,
and developer community organizer. I mentor individual developers
via devBetter.com and corporate teams via nimblepros.com.
I am ardalis everywhere.`),
	msg: greenChalk(`Let\'s talk! Obviously I\'m easy to find. :)`)
};

// Actual strings we're going to output
const hr = np("----------~~~~~~~~~==========~~~~~~~~~-----------");
const heading = data.name;
const working = `\n${data.labelWork}  ${data.work}`;
const workingUrl = `${data.labelWorkUrl}  ${data.workUrl}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const tooting = `${data.labelMastodon}  ${data.mastodon}`;
const skeeting = `${data.labelBluesky}  ${data.bluesky}`;
//const threading = `${data.labelThreads}  ${data.threads}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const emailing = `${data.labelEmail}  ${data.email}`;
const carding = `\n${data.labelCard}  ${data.npx}`;
const bio = `\n${data.bio}`;
const msg = `\n${data.msg}`;

// const card = [
// 	ps.multiline( avatar ), ps.multiline( banner ),
// 	hr, heading, hr, working, workingUrl,
// 	twittering, tooting, skeeting, threading,
// 	githubing, linkedining,
// 	webing, emailing, carding, bio, msginkyBlue
// ];

const card = [
	np.multiline(avatar), np.multiline(banner),
	hr, heading, hr,
	twittering, tooting, skeeting, //threading,
	githubing, linkedining,
	webing, emailing, carding, bio, msg
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join(newline);

console.log(boxen(output, options)); // eslint-disable-line no-console
