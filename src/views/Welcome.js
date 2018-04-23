const m = require('mithril');
const Layout = require('./Layout');

module.exports = {
  oncreate() {
    document.title = 'Welcome Page | Mithril';
  },
  view() {
    return [
      m(
        Layout,
        m(
          '.container',
          m(
            '.columns',
            m(
              '.column col-6 col-mx-auto',
              m('br'), m('br'), m('br'), m('br'), m('br'),
              m('h1', 'Welcome to Mithrill App'),
              m('br'),
              m('a[class=btn btn-primary][href=/user]', { oncreate: m.route.link }, 'See other page'),
            ),
          ),
        ),
      ),
    ];
  },
};

