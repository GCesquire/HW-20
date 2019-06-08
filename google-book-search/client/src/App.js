import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route exact path="/saved/:id" component={SavedBooks} />
          <Route component={Error} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
