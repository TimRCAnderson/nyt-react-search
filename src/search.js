import React from "react";
import $ from "jquery";
import Results from "./minors/results.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    // set initial state to have empty form values.
    this.state = {
      searchTerms: "",
      beginDate: "",
      endDate: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  render() {
    return (
      <div className="col s12" id="search">
        <h2>Article Search</h2>
        <form onSubmit={this.formSubmit}>
          <label htmlFor="searchTerms">Search Terms</label>
          <input type="text" name="searchTerms" value={this.state.searchTerms} onChange={this.handleChange}></input>
          <div className="col s6">
            <label htmlFor="beginDate">Start Date (YYYYMMDD)</label>
            <input type="text" pattern="[0-9]{8}" name="beginDate" value={this.state.beginDate} onChange={this.handleChange}></input>
          </div>
          <div className="col s6">
            <label htmlFor="endDate">End Date (YYYYMMDD)</label>
            <input type="text" pattern="[0-9]{8}" name="endDate" value={this.state.endDate} onChange={this.handleChange}></input>
          </div>
          <button className="waves-effect waves-light btn" type="submit"><i className="material-icons left">search</i>Search</button>
        </form>
        <Results results={this.props.results} getSaved={this.props.getSaved}/>
      </div>
    );
  }



  //Function to return form data from this object specifically.
  //This is to avoid problems with "this".
  getFormInputs() {
    return this.state;
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    $.post(
      "/api/search/",
      {
        beginDate: this.state.beginDate,
        endDate: this.state.endDate,
        searchTerm: this.state.searchTerms
      },
      this.props.searchReturn
    );
  }

  handleChange(event) {
    console.log(event.target);
    let _property = {};
    _property[event.target.name] = event.target.value;
    this.setState(_property);
  }
}

export default Search;
