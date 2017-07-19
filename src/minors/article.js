import React from "react";
import axios from "axios";

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.saveThis = this.saveThis.bind(this);
  }

  render() {
    return (
      <div className="row" key={this.props.doc.key}>
        <div className="col s12">
          <a href={this.props.doc.url}>
            <h4>{this.props.doc.title}</h4>
          </a>
        </div>
        <div className="col s6 left-align">{this.props.doc.date}</div>
        <div className="col s6 right-align"><button className="waves-effect waves-light btn" onClick={this.saveThis}>Save</button></div>
      </div>
    );
  }

  saveThis(event) {
    axios.post(
      "/api/saved",
      this.props.doc
    ).then(
      this.props.doc.getSaved
    ).catch(

    );
  }
}

export default Article;
