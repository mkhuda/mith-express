const m = require('mithril');
const Layout = require('./Layout');
const Footer = require('../components/Footer');

module.exports = {
  onmatch(params, url) {
    return {
      oninit() {
        this.state = { pageTitle: 'User List' };
      },
      view() {
        return [
          m(Layout, this.state, m('.container', m('.columns', [
            m('.column col-6 col-mx-auto', [
              m('br'), m('br'), m('br'), m('br'), m('br'),
              m('.text-center', m('h2', 'And this is the other page')),
              m('br'),
              m('.text-center', m(
                'a[class=btn][href=/]',
                { oncreate: m.route.link },
                m('i.icon icon-arrow-left'),
                'Back to home page',
              )),
              m(Footer),
            ]),
          ]))),
        ];
      },
    };
  },
};
