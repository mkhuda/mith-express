'use strict';

var m = require('mithril')
module.exports = {
  view: function view() {
    return m(
      'div',
      { className: 'container' },
      m(
        'nav',
        { className: 'navbar navbar-expand-lg navbar-light bg-light' },
        m(
          'a',
          { className: 'navbar-brand', href: '/', oncreate: m.route.link },
          'Home'
        )
      )
    );
  }
};
