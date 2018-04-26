const m = require('mithril');

const port = process.env.PORT || 5000;
const localHost = `127.0.0.1:${port}`;
const localUrl = `${window.location.protocol}//${(process.browser ? window.location.host : localHost)}`;

const User = {
  list: [],
  loadList() {
    return m.request({
      method: 'GET',
      url: `${localUrl}/api/users`,
    })
      .then((result) => {
        User.list = result;
      });
  },
};

module.exports = User;
