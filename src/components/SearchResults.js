import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult";

class SearchResults extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
  };

  getResults = () => {
    return this.props.results && this.props.results.map((result, i) => (
      <React.Fragment key={`result_${i}`}>
        <SearchResult result={result} />
      </React.Fragment>));
  }

  render() {
    return this.props.results.length > 0 &&
      (<div>
        <h2>Results</h2>
        {this.getResults()}
      </div>
    );
  }
}

export default SearchResults;