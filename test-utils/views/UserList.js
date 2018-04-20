"use strict";

var m = require('mithril')
var User = require('../models/User');

module.exports = {
  oninit: User.loadList,
  view: function view() {
    return m(
      "div",
      { className: "container" },
      User.list.map(function (user) {
        return m(
          "div",
          { className: "alert alert-primary", role: "alert" },
          user
        );
      })
    );
  }
};
