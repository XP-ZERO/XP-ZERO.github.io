var ui = require("https://raw.githubusercontent.com/Library-of-Kaeon/Library-of-Kaeon/master/Library%20of%20Kaeon/3%20-%20Collection/1%20-%20Computation/1%20-%20APIs/4%20-%20Utilities/10%20-%20UI/1%20-%20JavaScript/1%20-%20Source/ui.js");

ui.load("//unpkg.com/brain.js");

let net = new brain.NeuralNetwork();

net.train(
	[
		{
			input: [0, 0],
			output: [0]
		}
	]
);

net.train(
	[
		{
			input: [0, 1],
			output: [1]
		}
	]
);

net.train(
	[
		{
			input: [1, 0],
			output: [1]
		}
	]
);

net.train(
	[
		{
			input: [1, 1],
			output: [0]
		}
	]
);

console.log(net.run([0, 0]));
console.log(net.run([0, 1]));
console.log(net.run([1, 0]));
console.log(net.run([1, 1]));

net = new brain.NeuralNetwork();

net.train(
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

console.log(net.run([0, 0]));
console.log(net.run([0, 1]));
console.log(net.run([1, 0]));
console.log(net.run([1, 1]));