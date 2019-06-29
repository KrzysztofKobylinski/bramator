import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Main from './components/Main'
import Ask from './components/Ask'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Scrollchor from 'react-scrollchor'
import PageProgress from 'react-page-progress'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="siteContent">
            <PageProgress color={'skyblue'} height={5} />
            <div className="navigation">
              <Scrollchor to="#top">
                <div className="navLink">Top</div>
              </Scrollchor>
              <Scrollchor to="#middle">
                <div className="navLink">Middle</div>
              </Scrollchor>
              <Scrollchor to="#bottom">
                <div className="navLink">Bottom</div>
              </Scrollchor>
              <NavLink className="navButton" activeClassName="selected" exact to="/">
                <div className="navLink">Strona Główna</div>
              </NavLink>
              <NavLink className="navButton" activeClassName="selected" to="/ask/">
                <div className="navLink">Zapytanie ofertowe</div>
              </NavLink>
              <NavLink className="navButton" activeClassName="selected" to="/about/">
                <div className="navLink">O nas</div>
              </NavLink>
              <NavLink className="navButton" activeClassName="selected" to="/service/">
                <div className="navLink">Service</div>
              </NavLink>
              <NavLink className="navButton" activeClassName="selected" to="/contact/">
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
    )
  }
}

export default App
