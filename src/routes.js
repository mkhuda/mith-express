const Layout = require('./views/Layout');
const Welcome = require('./views/Welcome');
const UserList = require('./views/UserList');
const UserModel = require('./models/User');

module.exports = {
  '/': {
    view() {
      return m(Layout, m(Welcome));
    },
  },
  '/user': {
    view() {
      return m(Layout, m(UserList, { data: UserModel }));
    },
  },
};
