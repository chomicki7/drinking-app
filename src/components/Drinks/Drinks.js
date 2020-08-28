import React from "react";
import "./Drinks.css";

class Drinks extends React.Component {
  render() {
    return (
      <div className="drink">
        <h3>{this.props.drink.name}</h3>
        <div className="img-container">
          <a
            href={this.props.drink.img}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={this.props.drink.img} alt={"drink"} />
          </a>
        </div>
      </div>
    );
  }
}

export default Drinks;
