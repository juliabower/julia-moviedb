import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

class SearchResult extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { title, overview, release_date } = this.props.result;
    return (
      <div className={`panel panel-default${title.includes('Harry Potter') ? ' harry-potter' : ''}`}>
        <h4>{title}, {moment(release_date).year()}</h4>
        <div>{overview}</div>
      </div>
    );
  }
}

export default SearchResult;