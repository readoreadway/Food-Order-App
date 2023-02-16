import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./stores/CartProvider";

function App() {
  const [isCartShowing, setIsCartShowing] = useState(false);

  const showCartHandler = () => {
    setIsCartShowing(true);
  };

  const hideCartHandler = () => {
    setIsCartShowing(false);
  };

  return (
    <CartProvider>
      {isCartShowing && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
