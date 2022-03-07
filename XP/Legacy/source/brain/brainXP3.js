var ui = require("https://raw.githubusercontent.com/Library-of-Kaeon/Library-of-Kaeon/master/Library%20of%20Kaeon/3%20-%20Collection/1%20-%20Computation/1%20-%20APIs/4%20-%20Utilities/10%20-%20UI/1%20-%20JavaScript/1%20-%20Source/ui.js");

ui.load("//unpkg.com/brain.js");

var maxChar = Math.pow(2, 32);

function stringToVector(string) {

	let value = "" + string;

	let vector = [];

	for(let i = 0; i < value.length; i++)
		vector.push(value.charCodeAt(i) / maxChar);

	return vector;
}

function vectorToString(vector) {

	let string = "";

	for(let i = 0; i < vector.length; i++)
		string += String.fromCharCode(Math.floor(vector[i] * maxChar));

	return string;
}
  
const lstm = new brain.recurrent.LSTM();

lstm.train(
	[
		'Jane saw Doug.'
	],
	{
		iterations: 1500,
		log: details => console.log(details),
		errorThresh: 0.011
	}
);

lstm.train(
	[
		'Doug saw Jane.'
	],
	{
		iterations: 1500,
		log: details => console.log(details),
		errorThresh: 0.011
	}
);

lstm.train(
	[
		'Spot saw Doug and Jane looking at each other.'
	],
	{
		iterations: 1500,
		log: details => console.log(details),
		errorThresh: 0.011
	}
);

lstm.train(
	[
		'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
	],
	{
		iterations: 1500,
		log: details => console.log(details),
		errorThresh: 0.011
	}
);

const run1 = lstm.run('Jane');
const run2 = lstm.run('Doug');
const run3 = lstm.run('Spot');
const run4 = lstm.run('It');

console.log('run 1: Jane' + run1);
console.log('run 2: Doug' + run2);
console.log('run 3: Spot' + run3);
console.log('run 4: It' + run4);