import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvide";

function App() {
  const [cartState, setCartState] = useState(false);

  const openCartHandler = () => {
    setCartState(true);
  };

  const closeCartHandler = () => {
    setCartState(false);
  };
  return (
    <CartProvider>
      {cartState && <Cart onCloseCart={closeCartHandler} />}
      <Header onCartOpen={openCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
