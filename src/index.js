
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import { searchMovie } from "./api/movieDB-api";
import "./styles.scss";

class Index extends Component {
  componentDidMount() {
    this.state = {
      results: null,
      error: false,
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
        </main>
    );
  }
};
ReactDOM.render(<Index />, document.getElementById("index"));