const m = require('mithril');
const Layout = require('./Layout');

module.exports = {
  view() {
    return [
      m(Layout, m('.welcome', 'Welcome to Homepage', m('br'), m('a[href=/user]', { oncreate: m.route.link }, 'User list'))),
    ];
  },
};

