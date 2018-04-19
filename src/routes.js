var m = require("mithril")
var Layout = require("./views/Layout")
var Welcome = require("./views/Welcome")
var UserList = require("./views/UserList")

module.exports = {
  "/": {
    view: () => {
      return m(Layout, m(Welcome))
    }
  },
  "/user": {
    view: () => {
      return m(Layout, m(UserList))
    }
  },
}
