import React, { Component } from "react";
import { storedCars } from "../data";

import ShopContext from "./ShopContext";

class GlobalState extends Component {
  state = storedCars;

  filterByModel = (element) => {
    let value = element.value.toString().toLowerCase().trim();
    let cars = storedCars.cars;
    let newArrayOfCars = cars.filter(
      (car) => car.title.toLowerCase().indexOf(value) !== -1
    );
    this.setState({ cars: newArrayOfCars });
  };

  addToCart = (car) => {
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex((item) => car.id === item.id);
    if (index < 0) {
      updateCart.push({ ...car, quantity: 1 });
    } else {
      const updateItem = {
        ...updateCart[index],
      };

      updateItem.quantity++;

      const collectionOfCars = [...this.state.cars];
      const found = collectionOfCars.find((element) => element.id === car.id);
      const currentPrice = found.price;

      let sum = 0;
      sum = sum + currentPrice + updateItem.price;
      updateItem.price = sum;

      updateCart[index] = updateItem;
    }
    this.setState({ cart: updateCart });
  };

  increase = (id) => {
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex((item) => item.id === id);
    const updateItem = {
      ...updateCart[index],
    };

    updateItem.quantity++;

    const collectionOfCars = [...this.state.cars];
    const found = collectionOfCars.find((element) => element.id === id);
    const currentPrice = found.price;

    let sum = 0;
    sum = sum + currentPrice + updateItem.price;
    updateItem.price = sum;

    updateCart[index] = updateItem;
    this.setState({ cart: updateCart });
  };

  decrease = (id) => {
    const updateCart = [...this.state.cart];
    const index = updateCart.findIndex((item) => id === item.id);
    const updateItem = {
      ...updateCart[index],
    };

    if (updateItem.quantity > 1) {
      updateItem.quantity--;

      const collectionOfCars = [...this.state.cars];
      const found = collectionOfCars.find((element) => element.id === id);
      const currentPrice = found.price;

      updateItem.price = updateItem.price - currentPrice;

      updateCart[index] = updateItem;
      this.setState({ cart: updateCart });
    }
  };

  delete = (id) => {
    const carsInCart = [...this.state.cart];
    const newCart = carsInCart.filter((car) => car.id !== id);
    this.setState({ cart: newCart });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          cars: this.state.cars,
          cart: this.state.cart,
          addToCart: this.addToCart,
          increase: this.increase,
          decrease: this.decrease,
          delete: this.delete,
          filterByModel: this.filterByModel,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default GlobalState;
