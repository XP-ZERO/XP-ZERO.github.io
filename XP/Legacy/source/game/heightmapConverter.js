var ui = require("kaeon-united").modules.ui();

ui.extend(`<input type="file" id="myFile" name="filename">`);
ui.extend(`<button id="submit">Submit</button>`)
ui.extend(`<br/>`)

ui.extend(`<canvas id="myCanvas" width="1" height="1"/>`)

ui.get("#submit")[0].onclick = () => {

	var file = document.querySelector('input[type=file]').files[0];
	
	var reader = new FileReader();
	
	reader.onloadend = () => {

		ui.extend(`<img id="myImg" src="` + reader.result + `"/>`)

		setTimeout(() => {

			ui.extend(getImage(ui.get("#myImg")[0], 2, 1, "py"));
			ui.extend(getImage(ui.get("#myImg")[0], 1, 2, "nx"));
			ui.extend(getImage(ui.get("#myImg")[0], 2, 2, "pz"));
			ui.extend(getImage(ui.get("#myImg")[0], 3, 2, "px"));
			ui.extend(getImage(ui.get("#myImg")[0], 4, 2, "nz"));
			ui.extend(getImage(ui.get("#myImg")[0], 2, 3, "ny"));

			ui.remove("#myImg")
		})
	}
	
	if(file)
		reader.readAsDataURL(file);

	else
		preview.src = "";
}

function getImage(image, x, y, name) {

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	let xUnit = image.width / 4;
	let yUnit = image.height / 3;

	canvas.width = xUnit;
	canvas.height = yUnit;
	
	context.drawImage(image, (x - 1) * xUnit, (y - 1) * yUnit, xUnit, yUnit, 0, 0, xUnit, yUnit);

	let newImage = document.createElement("img");

	newImage.src = canvas.toDataURL("image/png");
	newImage.download = "skybox_" + name + ".png" 

	return ui.create(`<a href="` + newImage.src + `" download="skybox_` + name + `.png">DOWNLOAD </a>`);
}