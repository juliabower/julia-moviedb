import React from "react";

const SearchBar = () => {
  return (
    <div className="row">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" className="form-control" placeholder="e.g. Harry Potter" />
            <span className="input-group-btn">
              <button className="btn btn-default btn-go" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
  );
}

export default SearchBar;