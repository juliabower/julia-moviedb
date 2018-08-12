import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchResult extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { title, overview } = this.props.result;
    return (
      <div className="panel panel-default">
        <h3>{title}</h3>
        <div>{overview}</div>
      </div>
    );
  }
}

export default SearchResult;