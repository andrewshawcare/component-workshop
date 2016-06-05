var JsDom = require("jsdom");
global.window = JsDom.jsdom().defaultView;
global.document = window.document;

var RequireJs = require("requirejs");
global.define = RequireJs.define;
RequireJs.config({
  paths: {"node_modules": "./node_modules"},
  nodeRequire: require
});

var Jasmine = require("jasmine");
var jasmine = new Jasmine();
RequireJs(["./spec.js"], function () {
  jasmine.execute();
});
