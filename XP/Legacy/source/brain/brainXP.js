// LOAD BRAIN

var ui = require("https://raw.githubusercontent.com/Library-of-Kaeon/Library-of-Kaeon/master/Library%20of%20Kaeon/3%20-%20Collection/1%20-%20Computation/1%20-%20APIs/4%20-%20Utilities/10%20-%20UI/1%20-%20JavaScript/1%20-%20Source/ui.js");

ui.load("//unpkg.com/brain.js");

// - EXAMPLE 1 -

console.log("- EXAMPLE 1 -");

// provide optional config object (or undefined). Defaults shown.

const config = {
	binaryThresh: 0.5, // ¯\_(ツ)_/¯
	hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
	activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};

// create a simple feed forward neural network with backpropagation

const net1 = new brain.NeuralNetwork(config);

net1.train(
	[
		{
			input: [0, 0],
			output: [0]
		},
		{
			input: [0, 1],
			output: [1]
		},
		{
			input: [1, 0],
			output: [1]
		},
		{
			input: [1, 1],
			output: [0]
		}
	]
);

console.log(net1.run([1, 0])); // [0]

// - EXAMPLE 2 -

console.log("- EXAMPLE 2 -");

const a = character(
	'.#####.' +
	'#.....#' +
	'#.....#' +
	'#######' +
	'#.....#' +
	'#.....#' +
	'#.....#'
);

const b = character(
	'######.' +
	'#.....#' +
	'#.....#' +
	'######.' +
	'#.....#' +
	'#.....#' +
	'######.'
);

const c = character(
	'#######' +
	'#......' +
	'#......' +
	'#......' +
	'#......' +
	'#......' +
	'#######'
);

/**
 * Learn the letters A through C.
 */

const net2 = new brain.NeuralNetwork();

net2.train(
	[
		{
			input: a,
			output: {
				a: 1
			}
		},
		{
			input: b,
			output: {
				b: 1
			}
		},
		{
			input: c,
			output: {
				c: 1
			}
		}
	],
	{
		log: detail => console.log(detail)
	}
);

/**
 * Predict the letter A, even with a pixel off.
 */

const result1 = brain.likely(
	character(
		'.#####.' +
		'#.....#' +
		'#.....#' +
		'###.###' +
		'#.....#' +
		'#.....#' +
		'#.....#'
	),
	net2
);

console.log(result1); // 'a'

/**
 * Turn the # into 1s and . into 0s. for whole string
 * @param string
 * @returns {Array}
 */

function character(string) {
	
	return string
		.trim()
		.split('')
		.map(integer);
}

/**
 * Return 0 or 1 for '#'
 * @param character
 * @returns {number}
 */

function integer(character) {

	if ('#' === character)
		return 1;

	return 0;
}

// - EXAMPLE 3 -

console.log("- EXAMPLE 3 -")

const trainingData = [
	'Jane saw Doug.',
	'Doug saw Jane.',
	'Spot saw Doug and Jane looking at each other.',
	'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
];
  
const lstm = new brain.recurrent.LSTM();

const result2 = lstm.train(
	trainingData, {
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

// - EXAMPLE 4 -

console.log("- EXAMPLE 4 -");

var net3 = new brain.NeuralNetwork();

net3.train(
	[
		{
			input: {
				r: 0.03,
				g: 0.7,
				b: 0.5
			},
			output: {
				black: 1
			}
		},
		{
			input: {
				r: 0.16,
				g: 0.09,
				b: 0.2
			},
			output: {
				white: 1
			}
		},
		{
			input: {
				r: 0.5,
				g: 0.5,
				b: 1.0
			},
			output: {
				white: 1
			}
		}
	]
);

var output = net3.run(
	{
		r: 1,
		g: 0.4,
		b: 0
	}
); // { white: 0.99, black: 0.002 }

console.log(output)