const m = require('mithril');

const layoutClient = {
  view(vnode) {
    return vnode.children;
  },
};

const layoutServer = {
  view(vnode) {
    return [
      m(
        '!doctype[html]',
        m('html', [
          m('head', [
            m('meta', { charset: 'utf-8' }),
            m('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }),
            m('meta', { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }),
            m('title', ''),
          ]),
          m('body.server', [
            vnode.children,
            m('script', { src: './bundle.js' }),
          ]),
        ]),
      ),
    ];
  },
};

module.exports = process.browser ? layoutClient : layoutServer;
