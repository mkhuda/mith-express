const User = require('../models/User');
const Header = require('../components/Header');

module.exports = {
  oninit() {
    this.user = User.list;
  },
  view() {
    return (
      <div className="container">
        {m(Header)}
        <div className="container">
          {
            this.user.map(user => <div className="alert alert-primary" role="alert">{user}</div>)
          }
        </div>
      </div>
    );
  },
};
