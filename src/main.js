import React from "react";
import Search from "./search.js";
import Saved from "./saved.js";
import $ from "jquery";

class Main extends React.Component {
  constructor() {
    super();
    //set state in the constructor.
    this.state = {
      searchResults: {},
      savedSet: []
    }

    //bind search submission to main context
    this.searchReturn = this.searchReturn.bind(this);
    this.getSaved = this.getSaved.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>NYT React Search</h1>
          </div>
        </div>
        <div className="row">
          <Search searchReturn={this.searchReturn} results={this.state.searchResults} getSaved={this.getSaved}/>
        </div>
        <div className="row">
          <Saved savedArticles={this.state.savedSet} getSaved={this.getSaved}/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.getSaved();
  }

  searchReturn(_searchResults) {
    console.log(_searchResults);
    let docArray = _searchResults.response.docs.map((doc) => {
      return {
        title: doc.headline.main,
        date: doc.pub_date,
        url: doc.web_url,
        key: doc._id
      }
    })

    this.setState({searchResults: docArray});
    console.log(this.state.searchResults);
  }

  getSaved() {
    $.get("/api/saved", (res) => {
      if(res) {
        this.setState({savedSet: res});
      }
    });
  }
}

export default Main;
