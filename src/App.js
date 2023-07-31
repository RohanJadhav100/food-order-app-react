import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meal/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
