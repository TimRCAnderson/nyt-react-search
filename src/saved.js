import React from "react";
import SavedArticle from "./minors/SavedArticle.js"

class Saved extends React.Component {
  render() {
    let {savedArticles} = this.props;
    let functionedSaved = [];
    if(Array.isArray(this.props.savedArticles))
    {
      functionedSaved = savedArticles.map((doc) => {
        doc.getSaved = this.props.getSaved;
        return doc;
      })
    }
    if(this.props.savedArticles) {
      return (
        <div className="col s12" id="saved">
          <h2>Saved Articles</h2>
          {Array.isArray(functionedSaved) ? functionedSaved.map(this.article) : ""}
        </div>
      );
    }
    else {
      return (
        <div className="col s12" id="saved">
          <h2>Saved Articles</h2>

        </div>
      )
    }
  }

  article(doc) {
    return (
      <SavedArticle doc={doc}/>
    );
  }
}

export default Saved;
