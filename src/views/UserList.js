const m = require('mithril');
const Layout = require('./Layout');

module.exports = {
  oncreate() {
    document.title = 'The other page | Mithrill';
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
              m('h1', 'And this is the other page'),
              m('br'),
              m(
                'button[class=btn btn-primary][href=/]',
                { oncreate: m.route.link },
                m('i.icon icon-arrow-left'),
                'Back to home page',
              ),
            ),
          ),
        ),
      ),
    ];
  },
};
