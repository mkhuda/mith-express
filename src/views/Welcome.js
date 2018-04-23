const m = require('mithril');
const Layout = require('./Layout');
const Footer = require('../components/Footer');

module.exports = {
  oninit() {
    this.state = { pageTitle: 'Welcome' };
  },
  view() {
    return [
      m(Layout, this.state, m('.container', m('.columns', [
        m('.column col-6 col-mx-auto', [
          m('br'), m('br'), m('br'), m('br'), m('br'),
          m('.text-center', m('h1', 'Welcome to Mithrill App')),
          m('br'),
          m('.text-center', [
            m('a[class=btn btn-primary][href=/user]', { oncreate: m.route.link }, 'See other page'),
          ]),
          m(Footer),
        ]),
      ]))),
    ];
  },
};

