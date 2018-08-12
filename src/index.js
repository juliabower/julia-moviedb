
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
      error: false,
      results: [],
    };
  }

  search = (query) => {
    this.setState({ error: false });
    searchMovie(query).then(response => {
      this.setState({ results: response.results });
    }).catch(error => this.setState({ error: true }));
  }

  render() {
    return (
      <main className="container">
        <h1>Search for a movie</h1>
        <SearchBar search={this.search} />
        {this.state.results && <SearchResults results={this.state.results} />}
      </main>
    );
  }
};
ReactDOM.render(<Index />, document.getElementById("index"));