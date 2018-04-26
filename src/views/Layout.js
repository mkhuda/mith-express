const m = require('mithril');

function getTitle(title) {
  return `${title} | Mithril Express`;
}

const layoutClient = {
  oncreate(vnode) {
    document.title = getTitle(vnode.attrs.pageTitle);
  },
  view(vnode) {
    return vnode.children;
  },
};

const layoutServer = {
  oninit(vnode) {
    vnode.state.pageTitle = vnode.attrs.pageTitle;
  },
  view(vnode) {
    return [
      m('!DOCTYPE[html]'),
      m('html', [
        m('head', [
          m('meta', { charset: 'utf-8' }),
          m('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }),
          m('meta', { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }),
          m('title', getTitle(vnode.state.pageTitle)),
          m('link', { rel: 'stylesheet', href: 'application.css' }),
        ]),
        m('body.server', [
          vnode.children,
          m('script', `window.__preloadedState = ${JSON.stringify(JSON.parse(JSON.stringify(vnode.attrs)))}`),
          m('script', { src: 'bundle.min.js' }),
        ]),
      ]),
    ];
  },
};

module.exports = process.browser ? layoutClient : layoutServer;
