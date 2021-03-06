var io = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/IO/ioBrowser.js");
var search = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/UI/search.js");
var ui = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/UI/UI.js");

var data = JSON.parse(io.open("https://app.ticketmaster.com/discovery/v2/events.json?apikey=WdcIAHMLGFYKoTzauUlxicb7Nm6YxjxL"));

function getItems() {

	return data["_embedded"]["events"].map((event) => {
		return { item: event.name, action: { type: "link", url: event.url } }
	});
}

ui.extend(document.documentElement, search.createSearch(
	(text) => {
		return search.selectItems(getItems(), text, 7);
	},
	(text) => {
		search.executeItem(getItems(), text);
	}
));