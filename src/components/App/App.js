import React from "react";
import "./App.css";
import SearchBar from "../Searchbar/SearchBar";
import DrinkList from "../DrinkList/DrinksList";
import CocktailApi from "../../util/CocktailApi";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };

    this.searchDrink = this.searchDrink.bind(this);
    this.searchRandom = this.searchRandom.bind(this);
  }

  searchDrink(term) {
    CocktailApi.search(term).then((drinks) => {
      this.setState({ drinks: drinks });
    });
  }

  searchRandom() {
    CocktailApi.searchRandom().then((drink) => {
      this.setState({ drinks: drink });
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchDrink={this.searchDrink}
          searchRandom={this.searchRandom}
        />
        <DrinkList drinks={this.state.drinks} />
      </div>
    );
  }
}

export default App;
