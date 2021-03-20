import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Checkout } from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [cartItems, updateCartItems] = useState([]);

  function onAdd(products) {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist) {
      updateCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, amount: exist.amount + 1 } : x
        )
      );
    } else {
      updateCartItems([...cartItems, { ...products, amount: 1 }]);
    }
  }
  function onRemove(products) {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist.amount === 1) {
      updateCartItems(cartItems.filter((x) => x.id !== products.id));
    } else {
      updateCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, amount: exist.amount - 1 } : x
        )
      );
    }
  }
  function removeAll(products) {
    updateCartItems(cartItems.filter((x) => x.id !== products.id));
  }
  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Products
                onAdd={onAdd}
                cartItems={cartItems}
                updateCartItems={updateCartItems}
              />
            )}
          />
          <Route
            path="/checkout"
            exact
            render={(props) => (
              <Checkout
                removeAll={removeAll}
                onAdd={onAdd}
                onRemove={onRemove}
                cartItems={cartItems}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
