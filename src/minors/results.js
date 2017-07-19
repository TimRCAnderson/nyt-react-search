import React from "react";
import Article from "./article.js";

class Results extends React.Component {
  render() {
    let {results} = this.props;
    let functionedResults = [];
    if(Array.isArray(this.props.results))
    {
      functionedResults = results.map((doc) => {
        doc.getSaved = this.props.getSaved;
        return doc;
      })
    }
    if(functionedResults) {
      return (
        <div>
          <div><h3>Results</h3></div>
          {Array.isArray(functionedResults) ? functionedResults.map(this.article) : ""}
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  article(doc) {
    return (
      <Article doc={doc}/>
    );
  }
}



export default Results;
