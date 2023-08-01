import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartState, setCartState] = useState(false);

  const openCartHandler = () => {
    setCartState(true);
  };

  const closeCartHandler = () => {
    setCartState(false);
  };
  return (
    <Fragment>
      {cartState && <Cart onCloseCart={closeCartHandler} />}
      <Header onCartOpen={openCartHandler} />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
