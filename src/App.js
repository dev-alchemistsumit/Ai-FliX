import React from "react";
import "./App.scss";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";

function App() {

  return (
    //clean Architecture

      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
                <Home  />
                <Footer className=" z-[-100]" />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
