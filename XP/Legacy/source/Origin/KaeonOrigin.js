var httpUtils = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/HTTP%20Utils/httpUtils.js");
var ui = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/UI/UI.js");
var virtualSystem = require("https://raw.githubusercontent.com/Kaeon-ACE/kaeon-ace.github.io/master/Staging/source/Origin/virtualSystem.js");
var widgets = require("https://raw.githubusercontent.com/Kaeon-ACE/kaeon-ace.github.io/master/Staging/source/Origin/widgets.js");

virtualSystem.initiateVirtualSystemDefault(httpUtils.getURLArguments(window.location.href).startup);

ui.extend(widgets.getTabs({

}));