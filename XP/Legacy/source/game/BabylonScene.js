var httpUtils = require("kaeon-united").httpUtils();
var io = require("kaeon-united").io();
var ui = require("kaeon-united").ui();

ui.load("https://preview.babylonjs.com/babylon.js");
ui.load("https://preview.babylonjs.com/loaders/babylonjs.loaders.min.js");
ui.load("https://code.jquery.com/pep/0.4.3/pep.js");

ui.extend(
	ui.set(
		document.documentElement,
		{
			style: {
				overflow: "hidden",
				margin: 0,
				padding: 0
			}
		}
	),
	ui.create(
		{
			tag: "canvas",
			attributes: {
				id: "renderCanvas",
				"touch-action": "none"
			},
			style: {
				position: "absolute",
				left: "0%",
				top: "0%",
				width: "100%",
				height: "100%",
				"touch-action": "none"
			}
		}
	)
);

var canvas = document.getElementById("renderCanvas"); // Get the canvas element
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

eval(io.open(httpUtils.getURLArguments(window.location.href)["scene"]));

var scene = await createScene(); // Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
	scene.render();
});

// Watch for browser / canvas resize events
window.addEventListener("resize", function () {
	engine.resize();
});