
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { searchMovie } from "./api/movieDB-api";
import "./styles.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isSearching: false,
      hasSearched: false,
    };
  }

  search = (query, page) => {
    this.setState({ query: query, isSearching: true });
    searchMovie(query, page).then(response => {
      this.setState({ results: response.results, totalPages: response.total_pages, isSearching: false, hasSearched: true });
    }).catch(error => {debugger;this.setState({ error: true });});
  }

  getPage = (page) => {
    this.search(this.state.query, page);
  }

  render() {
    return (
      <main className="container">
        <div className="page-header">
          <h1>Search for a movie</h1></div>
        <SearchBar search={this.search} />
        {
          this.state.results
          && <SearchResults
            results={this.state.results}
            totalPages={this.state.totalPages}
            getPage={this.getPage} />
        }
        {
          this.state.hasSearched && this.state.results.length === 0
          && <div className="alert alert-warning">No results, please try again</div>
        }
        <div className="logo-wrapper">
          <img width="200" src="https://www.themoviedb.org/assets/1/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg" />
        </div>
      </main >
    );
  }
};
ReactDOM.render(<Index />, document.getElementById("index"));