const m = require('mithril');

module.exports = {
  view() {
    return [
      m('br'),
      m('br'),
      m(".divider text-center[DATA-CONTENT='info']"),
      m('br'),
      m(
        '.text-center',
        m('kbd', `Mithril ${m.version}`),
      ),
    ];
  },
};
