import React, { Component } from "react";
import { searchMovie } from "../api/movieDB-api";
class SearchBar extends Component {
  componentDidMount() {
    this.state = {
      search: '',
    };
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  search = () => {
    this.setState({ error: false });
    searchMovie(this.state.search).then(response => {
      debugger;
      this.setState({ results: response.results });
    }).catch(error => this.setState({ error: true })
    );
  }

  render() {
    return (
      <div className="row" >
        <div className="col-lg-12">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="e.g. Harry Potter" onChange={this.updateSearch} />
            <span className="input-group-btn">
              <button className="btn btn-default btn-go" type="button" onClick={this.search}>Go</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;