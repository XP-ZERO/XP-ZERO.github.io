let src = `

Component: Cursor: None
Component: Camera Control

Component: Skybox

	Source: 'https://raw.githubusercontent.com/Kaeon-ACE/kaeon-ace.github.io/master/Staging/resource/skybox/1/skybox'

Component: Audio

	Source: 'https://raw.githubusercontent.com/Kaeon-ACE/kaeon-ace.github.io/master/Staging/resource/music/Moonlight.mp3'

Entity { Component: ID: Item 1 }

	Component: Model

		Source: 'https://raw.githubusercontent.com/BabylonJS/Assets/master/meshes/fish.glb'

	Component: Model

		Source: 'https://raw.githubusercontent.com/BabylonJS/Assets/master/meshes/shark.glb'

	Component: Script: Code
	
		-
			core.call("move: Item 1: 0, 0, .05");
		-

`;

var one = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/Kaeon-FUSION/master/Kaeon%20FUSION/APIs/ONE/JavaScript/ONE.js");
var onePlus = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/United%20Bootstrap/ONEPlus.js");

require("https://raw.githubusercontent.com/Kaeon-ACE/kaeon-ace.github.io/master/Staging/source/game/KaeonACE.js").run(
	onePlus.readONEPlus(src),
	require("https://raw.githubusercontent.com/Kaeon-ACE/kaeon-ace.github.io/master/Staging/source/game/KaeonACEModules.js")
);