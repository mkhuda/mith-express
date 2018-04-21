const Welcome = require('./views/Welcome');
const UserList = require('./views/UserList');
const UserModel = require('./models/User');

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
