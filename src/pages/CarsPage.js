import React, { Component } from "react";
import Navigation from "../components/Navigation";
import "./CarsPage.css";
import ShopContext from "../context/ShopContext";

class CarsPage extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <Navigation
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            ></Navigation>
            <div className="filter">
              Filter by model:
              <input
                ref={(e) => (this.inputElement = e)}
                onKeyUp={() => {
                  context.filterByModel(this.inputElement);
                }}
              ></input>
            </div>
            <main className="main1">
              <ul>
                {context.cars.map((car) => (
                  <li key={car.id}>
                    <div>
                      <img src={car.img} alt={car.title}></img>
                      <h4>Manufacturer: {car.company}</h4>
                      <strong>Model: {car.title}</strong>
                      <p>
                        <strong>Info:</strong>
                        {car.info}
                      </p>
                      <i>
                        <strong>Price:</strong> {car.price}$
                      </i>
                    </div>
                    <button onClick={() => context.addToCart(car)}>
                      Add to cart!
                    </button>
                  </li>
                ))}
              </ul>
            </main>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default CarsPage;
