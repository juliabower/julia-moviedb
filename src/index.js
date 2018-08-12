
import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import "./styles.scss";

const Index = () => {
  return (
    <main className="container">
      <h1>Search for a movie</h1>
      <SearchBar />
    </main>
  );
};
ReactDOM.render(<Index />, document.getElementById("index"));