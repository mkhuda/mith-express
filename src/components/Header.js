module.exports = {
  view() {
    return (
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='/' oncreate={m.route.link}>Home</a>
        </nav>
      </div>
    );
  },
};
