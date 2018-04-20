module.exports = {
  oninit(vnode) {
    this.user = vnode.attrs.data.list;
  },
  view() {
    return (
      <div className="container">
        {
          this.user.map(user => <div className="alert alert-primary" role="alert">{user}</div>)
        }
      </div>
    );
  },
};
