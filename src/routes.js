const Welcome = require('./views/Welcome');
const UserList = require('./views/UserList');

module.exports = {
  '/': {
    view() {
      return m(Welcome);
    },
  },
  '/user': {
    view() {
      return m(UserList);
    },
  },
};
