const m = require('mithril');

const localUrl = window.location.protocol + '//' + (process.browser ? window.location.host : 'localhost:5000');
// const localUrl = `${window.location.protocol}//${(process.browser ? window.location.host : 'localhost:5000')}`;

function getUsers() {
  return m.request({
    method: 'GET',
    url: `${localUrl}/api/users`,
  })
}

module.exports = { getUsers };
