const m = require('mithril');

module.exports = {
  view: function view() {
    return m(
      'div',
      { className: 'container' },
      m(
        'div',
        { className: 'jumbotron' },
        m(
          'h1',
          { className: 'display-4' },
          'Hello, Guys',
        ),
        m(
          'p',
          { className: 'lead' },
          'This is a simple Mithril base app',
        ),
        m('hr', { className: 'my-4' }),
        m(
          'p',
          null,
          'It uses utility ExpressJS and Bootsrap for styling.',
        ),
        m(
          'p',
          { className: 'lead' },
          m(
            'a',
            {
              className: 'btn btn-primary btn-lg',
              href: '/user',
              oncreate: m.route.link,
              role: 'button',
            },
            'What\'s Next',
          ),
        ),
      ),
    );
  },
};
