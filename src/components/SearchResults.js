import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult";

class SearchResults extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
    getPage: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  getResults = () => {
    return this.props.results && this.props.results.map((result, i) => (
      <React.Fragment key={`result_${i}`}>
        <SearchResult result={result} />
      </React.Fragment>));
  }

  goToPage = (page) => {
    page <= this.props.totalPages && page > 0 && this.setState({ currentPage: page },
      () => { this.props.getPage(page) });
  }

  getPageNav = () => {
    return (
    <nav aria-label="Page navigation">
          <ul className="pagination">
            <li>
              <a href="#" aria-label="Previous"
                disabled={this.state.currentPage > 1}
                onClick={() => this.goToPage(this.state.currentPage - 1)}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {this.getPageNumbers()}
            <li>
              <a href="#" aria-label="Next"
                onClick={() => this.goToPage(this.state.currentPage + 1)}
                disabled={this.state.currentPage < this.props.totalPages}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>);
  }

  getPageNumbers = () => {
    let min;
    let max;
    if (this.state.currentPage === 1) {
      min = this.state.currentPage;
      max = this.state.currentPage + 2;
    } else if (this.state.currentPage === this.props.totalPages){
      min = this.props.totalPages - 2;
      max = this.props.totalPages;
    } else {
      min = this.state.currentPage - 1;
      max = this.state.currentPage + 1;
    }
    let result = [...Array(3).keys()].map(i => i + min);
    result = result.filter(item => item > 0 && item <= this.props.totalPages);
    return result.map((i) => (
      <li
      key={i}
      className={`${this.state.currentPage === i && 'active'}`}
      disabled={i === this.state.currentPage}
      ><a href="#" onClick={() => this.goToPage(i)}>{i}</a></li>
    ));
  }

  render() {
    return this.props.results.length > 0 &&
      (<div>
        <h2>Results</h2>
        {this.getPageNav()}
        {this.getResults()}
        {this.getPageNav()}
      </div>
      );
  }
}

export default SearchResults;