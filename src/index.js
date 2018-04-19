var m = require("mithril")
var $ = require('jquery');
window.$ = $;
require("bootstrap")
require('bootstrap/dist/css/bootstrap.min.css')
var MyComponent = require("./components/MyComponent")

m.render(document.body, <MyComponent />)
