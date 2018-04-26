const m = require('mithril');
const Layout = require('./Layout');
const Footer = require('../components/Footer');
const User = require('../actions/User');

module.exports = {
  oninit() {
    this.state = { pageTitle: 'User List' };
    User.loadList();
  },
  view() {
    return [
      m(Layout, this.state, m('.container', m('.columns', [
        m('.column col-6 col-mx-auto', [
          m('br'), m('br'), m('br'), m('br'), m('br'),
          m('.text-center', m('h2', 'And this is the other page')),
          m('br'),
          m('.text-center', [
            m('br'),
            m('.columns', m('.column col-12 col-mx-auto', [
              User.list.map(user => m('span.chip', user)),
            ])),
            m('br'),
            m('br'),
            m('a[class=btn btn-sm][href=/]', { oncreate: m.route.link }, m('i.icon icon-arrow-left'), 'Back to home page'),
          ]),
          m(Footer),
        ]),
      ]))),
    ];
  },
};
