var m = require("mithril")

// import bootstrap and jquery
var $ = require('jquery')
window.$ = $;
require("bootstrap")
require('bootstrap/dist/css/bootstrap.min.css')

// import components here
var MyComponent = require("./components/MyComponent")

// render by mithril
m.render(document.body, <MyComponent />)
