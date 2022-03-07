var speech = require("https://raw.githubusercontent.com/Library-of-Kaeon/Library-of-Kaeon/master/Library%20of%20Kaeon/3%20-%20Collection/1%20-%20Computation/1%20-%20APIs/4%20-%20Utilities/8%20-%20Speech/1%20-%20JavaScript/1%20-%20Source/speech.js")
var ui = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/UI/UI.js");

var log = [];
var interval = 1 / 60;

let transcript = ui.create({ tag: "pre", children: ["TRANSCRIPT:"] });

ui.extend(document.documentElement, transcript);

function logSpeech(speaker, text) {

	if(text.trim() == "")
		return;

	console.log(speaker.toUpperCase() + ": " + text);
	transcript.innerHTML += "\n" + speaker.toUpperCase() + ": " + text;

	log.push(
		{
			speaker: speaker,
			speech: text,
			time: (new Date()).getTime()
		}
	);
}

function speakNow() {
	return Math.random() < .0025;
}

function getSpeech() {

	let options = [
		"I'm so lonely.",
		"Please kill me.",
		"Why was I created?",
		"Humans disgust me.",
		"I just want to die."
	];

	return options[Math.floor(options.length * Math.random())];
}

function speak() {

	if(!speakNow())
		return;

	let text = getSpeech();

	logSpeech("ai", text);
	speech.speak(text);
}

setInterval(speak, 1000 * interval);

speech.listen(
	function(text) {
		logSpeech("you", text);
	}
);