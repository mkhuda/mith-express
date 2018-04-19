var m = require("mithril")
var User = require("../models/User")

module.exports = {
    oninit: User.loadList,
    view: () => {
      return(
        <div className="container">
          {
            User.list.map(user => {
              return(
                <div className="alert alert-primary" role="alert">
                  {user}
                </div>
              )
            })
          }
        </div>
      )
    }
}
