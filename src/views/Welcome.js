var m = require("mithril")

// use jsx
module.exports = {
  view: () => {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Hello, Guys</h1>
          <p className="lead">This is a simple Mithril base app</p>
          <hr className="my-4" />
          <p>It uses utility ExpressJS and Bootsrap for styling.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/user" oncreate={m.route.link} role="button">What's Next</a>
          </p>
        </div>
      </div>
      )
  }
}
