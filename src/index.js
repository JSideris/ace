const dot = require("dothtml");
const ace = require("../lib/ace/ace");

dot("body")
.h1("Object Factory")
.div("Hello, World!").id("editor")
;

var editor = ace.edit("editor");