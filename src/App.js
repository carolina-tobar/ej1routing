import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/aboutUs">About Us</Link>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
