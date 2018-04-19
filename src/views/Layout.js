var m = require("mithril")
var Header = require("../components/Header")

module.exports = {
  view: (vnode) => {
    return(
      <div className="container">
        <Header />
        {vnode.children}
      </div>
    )
  }
}