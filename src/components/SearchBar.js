import React, { Component } from "react";
import PropTypes from "prop-types";
class SearchBar extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  search = () => {
    this.props.search(this.state.search);
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