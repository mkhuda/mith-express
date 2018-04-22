const m = require('mithril');

module.exports = {
  onmatch(params, route) {
    return {
      view() {
        return [
          m('div', 'route: ', route, JSON.stringify(params)),
          m('a', {
            href: '/',
            oncreate: m.route.link,
          }, 'Back to home page'),
        ];
      },
    };
  },
};
