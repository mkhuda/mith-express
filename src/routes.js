const Welcome = require('./views/Welcome');
const UserList = require('./views/UserList');

module.exports = {
  '/': Welcome,
  '/user': UserList,
};
