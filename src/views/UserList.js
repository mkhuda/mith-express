const m = require('mithril');
const Layout = require('./Layout');
const Footer = require('../components/Footer');
const { getUsers } = require('../actions/user');

module.exports = {
  oninit(vnode) {
    vnode.state.pageTitle = 'User List';
    getUsers()
      .then((data) => {
        Object.assign(vnode.state, { data });
      });
  },
  view(vnode) {
    return [
      m(Layout, vnode.state, m('.container', m('.columns', [
        m('.column col-6 col-mx-auto', [
          m('br'), m('br'), m('br'), m('br'), m('br'),
          m('.text-center', m('h2', 'And this is the other page')),
          m('br'),
          m('.text-center', [
            m('a[class=btn][href=/]', { oncreate: m.route.link }, 'Back to home page'),
            m('br'),
            m('.column', JSON.stringify(vnode.state.data)),
          ]),
          m(Footer),
        ]),
      ]))),
    ];
  },
};
