'use strict';

var Header = require('../components/Header');

module.exports = {
  view: function view(vnode) {
    return m(
      'div',
      { className: 'container' },
      m(Header),
      vnode.children
    );
  }
};