var ui = require("https://raw.githubusercontent.com/Library-of-Kaeon/Library-of-Kaeon/master/Library%20of%20Kaeon/3%20-%20Collection/1%20-%20Original/1%20-%20Computation/1%20-%20APIs/4%20-%20Utilities/3%20-%20UI/1%20-%20Visual/1%20-%20General/1%20-%20UI/1%20-%20JavaScript/1%20-%20Source/ui.js");

function createStartScreen(element, text, callback) {

	let button = ui.create(
		{
			tag: "button",
			style: {
				position: "absolute",
				left: "40%",
				top: "45%",
				width: "20%",
				height: "10%",
				background: "white",
				color: "black",
				"border-radius": "25px",
				font: "bold 100% arial"
			},
			content: [
				text
			]
		}
	);

	button.onclick = function() {

		element.innerHTML = "";

		callback(element);
	}
	
	ui.extend(
		element,
		ui.create(
			{
				tag: "div",
				style: {
					position: "absolute",
					left: "0%",
					top: "0%",
					width: "100%",
					height: "100%",
					background: "black"
				},
				content: [
					button
				]
			}
		)
	);
}

function getTextbox(options) {

	options = options != null ? options : { };

	let data = { tag: "textarea", attributes: { }, style: { } };

	if(!options.spellCheck)
		data.attributes["spellcheck"] = "false";

	if(!options.resize)
		data.style["resize"] = "none";

	if(!options.wrap)
		data.style["white-space"] = "pre";

	let text = ui.create(data);

	if(options.readOnly)
		text.readOnly = true;

	else {

		text.addEventListener(
			"keydown",
			function(event) {
	
				let scrollY = text.scrollTop;
					
				let start = this.selectionStart;
				let end = this.selectionEnd;
	
				if(event.keyCode == 9 || event.which == 9) {
	
					event.preventDefault();
	
					if(start != end) {
	
						let value = text.value.substring(start, end).indexOf("\n");
	
						if(value == -1) {
	
							document.execCommand("insertText", false, "\t");
	
							return;
						}
	
						let startValue = start;
	
						while(start > 0) {
							
							if(text.value.charAt(start) == "\n")
								break;
	
							start--;
						}
	
						this.selectionStart = start;
	
						let insert = text.value.substring(start, end);
	
						if(start == 0) {
	
							if(!event.shiftKey)
								insert = "\t" + insert;
							
							else if(
								insert.charAt(0) == "\t" ||
								insert.charAt(0) == "\n") {
	
								insert = insert.substring(1);
							}
						}
	
						if(event.shiftKey)
							insert = insert.split("\n\t").join("\n");
	
						else
							insert = insert.split("\n").join("\n\t");
	
						let shifted =
							insert !=
							text.value.substring(
								this.selectionStart, this.selectionEnd);
	
						document.execCommand("insertText", false, insert);
	
						this.selectionStart =
							startValue +
							(shifted ?
								(event.shiftKey ? -1 : 1) : 0);
	
						this.selectionEnd = start + insert.length;
					}
					
					else
						document.execCommand("insertText", false, "\t");
				}
	
				if(start != end)
					text.scrollTop = scrollY;
			},
			false
		);
	}

	return text;
}

function addTab(tabs, name, content) {

	let tab = ui.create({ content: name, style: { display: "inline" } });
	let pane = ui.create({ content: content, style: { display: "none" } });
	
	pane.tab_id = name;

	tab.onclick = () => {
		setTab(tabs, name);
	}
	
	ui.extend(tabs.children[0], tab);
	ui.extend(tabs.children[1], pane);
}

function setTab(tabs, id) {
	
	Array.from(tabs.children[1].children).forEach((child) => {
		
		if(child.tab_id == id)
			ui.set(child, { style: { display: "block" } });
		
		else
			ui.set(child, { style: { display: "none" } });
	});
}

function getTabs(content, config) {

	content = content != null ? content : [];
	config = config != null ? config : { };

	let menuTabs = ui.create({ style: { position: "absolute", left: "0%", top: "0%", "overflow-x": "auto" } });
	let menu = ui.create({ content: menuTabs, style: { position: "absolute", left: "0%", top: "0%", height: "5%", width: "100%" } });

	let pane = ui.create({ style: { position: "absolute", left: "0%", top: "5%", height: "95%", width: "100%" } });

	let tabs = ui.create({
		content: [menu, pane]
	});

	content.forEach((item) => { addTab(tabs, item.name, item.content); });

	if(content.length > 0)
		setTab(tabs, content[0].name);

	return tabs;
}

module.exports = {
	createStartScreen,
	getTextbox,
	addTab,
	setTab,
	getTabs
};