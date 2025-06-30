import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigate from "./components/Navigation";
import Loyout from "./components/Loyout";
import { useSelector } from "react-redux";
import Home from "./page/Home";
import ProductDetails from "./page/ProductDetails";
import PlanGuard from "./components/PlanGuard";
import Navigation from "./components/Navigation";

function App() {
  const [count, setCount] = useState(0);
  const name = useSelector((state) => state.user.user);
  const toyname = useSelector((state) => state.user.slug);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loyout />}>
            <Route
              path="/toy"
              element={
                <Navigation>
                  <Home />
                </Navigation>
              }
            />
          </Route>
          <Route path={`/toy/${toyname}`} element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
