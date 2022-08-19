import React, { Component } from "react";
import Navigation from "../components/Navigation";
import ShopContext from "../context/ShopContext";
import "./CartPage.css";

class CartPage extends Component {
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
            <main className="main2">
              <ul>
                {context.cart.map((cartItem) => (
                  <li key={cartItem.id}>
                    <div>
                      <img src={cartItem.img} alt={cartItem.title}></img>
                      <h4>Manufacturer: {cartItem.company}</h4>
                      <strong>Model: {cartItem.title}</strong>
                      <p>
                        <strong>Info:</strong>
                        {cartItem.info}
                      </p>
                      <i>
                        <strong>Price:</strong> {cartItem.price}$
                      </i>
                      <p>
                        <strong>Quantity:</strong> {cartItem.quantity}
                      </p>
                    </div>
                    <button onClick={() => context.increase(cartItem.id)}>
                      +
                    </button>
                    <button onClick={() => context.decrease(cartItem.id)}>
                      -
                    </button>
                    <button onClick={() => context.delete(cartItem.id)}>
                      Delete!
                    </button>
                  </li>
                ))}
              </ul>
              <div className="total">
                Total:
                {context.cart.reduce((count, curItem) => {
                  return count + curItem.price;
                }, 0)}
                $
              </div>
            </main>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default CartPage;
