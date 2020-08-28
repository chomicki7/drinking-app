import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleInput(e) {
    this.setState({ term: e.target.value });
  }

  handleSearch(e) {
    this.props.searchDrink(this.state.term);
    e.preventDefault();
  }

  handleRandom(e) {
    this.props.searchRandom();
    e.preventDefault();
  }

  handleEnter(e) {
    if (e.key === "Enter") {
      this.handleSearch(e);
    }
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>DrinkipediA</h1>
          <div className="underline"></div>
        </div>
        <section className="input-container">
          <form>
            <input
              type="text"
              placeholder="Search by drink or ingredients"
              onChange={this.handleInput}
              onKeyPress={this.handleEnter}
            />
          </form>
        </section>
        <div className="button-container">
          <button onClick={this.handleSearch}>Search</button>
          <button onClick={this.handleRandom}>Random!</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
