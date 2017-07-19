import React from "react";
import Saved from "./saved.js";
import Search from "./Search.js";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div classname="col s12">
            <Search />
          </div>
        </div>
        <div className="row">
          <div classname="col s12">
            <Saved />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Main;
