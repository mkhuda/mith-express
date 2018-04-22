const m = require('mithril');

const layoutClient = {
  view(vnode) {
    return vnode.children;
  },
};

const layoutServer = {
  view(vnode) {
    return [
      m('body.server', [
        vnode.children,
        m('script', { src: '/bundle.js' }),
      ]),
    ];
  },
};

module.exports = process.browser ? layoutClient : layoutServer;
