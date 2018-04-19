var m = require("mithril")
var Routes = require('./routes')
// import bootstrap and jquery
var $ = require('jquery')
window.$ = $;
require("bootstrap")
require('bootstrap/dist/css/bootstrap.min.css')

m.route(document.body, "/", Routes)
