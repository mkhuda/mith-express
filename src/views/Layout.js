const Header = require('../components/Header');

module.exports = {
  view(vnode) {
    return (
      <div className='container'>
        {m(Header)}
        {vnode.children}
      </div>
    );
  },
};
