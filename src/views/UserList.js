const m = require('mithril');
const Layout = require('./Layout');

module.exports = {
  view() {
    return [
      m(Layout, m('.user-list', 'User List', m('br'), m('a[href=/]', { oncreate: m.route.link }, 'Go back'))),
    ];
  },
};
