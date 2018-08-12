import React, { Component } from "react";
import PropTypes from "prop-types";
class SearchResults extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
  };

getResults = () => {
  return this.props.results && this.props.results.map((result, i) => (
    <div key={`result_${i}`}>
      <div>{result.title}</div>
      <div>{result.overview}</div>
    </div>));
}

  render() {
    return (
      <div className="panel" >
        {this.getResults()}
      </div>
    );
  }
}

export default SearchResults;