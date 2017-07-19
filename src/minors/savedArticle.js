import React from "react";
import axios from "axios";

class SavedArticle extends React.Component {
  constructor(props) {
    super(props);

    this.deleteThis = this.deleteThis.bind(this);
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
        <div className="col s6 right-align"><button className="waves-effect waves-light btn" onClick={this.deleteThis}>Delete</button></div>
      </div>
    );
  }

  deleteThis(event) {
    axios.delete(
      "/api/saved",
      {key: this.props.doc.key}
    ).then(
      this.props.doc.getSaved
    ).catch(

    );
  }
}

export default SavedArticle;
