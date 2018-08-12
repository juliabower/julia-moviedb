
import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const Index = () => {
  return (
    <main className="container">
      <h1>Search for a movie</h1>
      <div className="row">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-default btn-go" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
ReactDOM.render(<Index />, document.getElementById("index"));