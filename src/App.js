import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Main from './components/Main'
import Ask from './components/Ask'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="siteContent">
            <div className="logo">
              <img src="http://bramator.pl/wp-content/uploads/2017/08/logo3.png" />
            </div>
            <div className="navigation">
              <NavLink
                className="navButton"
                activeClassName="selected"
                exact
                to="/"
              >
                <div className="navLink">Strona Główna</div>
              </NavLink>
              <NavLink
                className="navButton"
                activeClassName="selected"
                to="/ask/"
              >
                <div className="navLink">Zapytanie ofertowe</div>
              </NavLink>
              <NavLink
                className="navButton"
                activeClassName="selected"
                to="/about/"
              >
                <div className="navLink">O nas</div>
              </NavLink>
              <NavLink
                className="navButton"
                activeClassName="selected"
                to="/service/"
              >
                <div className="navLink">Service</div>
              </NavLink>
              <NavLink
                className="navButton"
                activeClassName="selected"
                to="/contact/"
              >
                <div className="navLink">Kontakt</div>
              </NavLink>
            </div>

            <div>
              <Route path="/" exact component={Main} />
              <Route path="/ask/" component={Ask} />
              <Route path="/about/" component={About} />
              <Route path="/service/" component={Service} />
              <Route path="/contact/" component={Contact} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
