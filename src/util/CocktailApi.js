import key from "../nodde";

const CocktailApi = {
  searchRandom() {
    return fetch(`https://the-cocktail-db.p.rapidapi.com/random.php`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": key.api,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.drinks) {
          return jsonResponse.drinks.map((cocktails) => {
            return {
              id: cocktails.idDrink,
              name: cocktails.strDrink,
              img: cocktails.strDrinkThumb,
            };
          });
        }
      });
  },

  search(term) {
    return fetch(
      `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${term}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": key.api,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.drinks) {
          return jsonResponse.drinks.map((cocktails) => {
            return {
              id: cocktails.idDrink,
              name: cocktails.strDrink,
              img: cocktails.strDrinkThumb,
            };
          });
        }
      })
      .catch((err) => console.log("Error: ", err));
  },
};

export default CocktailApi;
