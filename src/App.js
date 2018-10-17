import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Music from './Music';
import Photography from './Photography';
import About from './About';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// class component
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/Music" activeClassName="active">Music</NavLink>
          <NavLink to="/Photography" activeClassName="active">Photography</NavLink>
          <NavLink to="/Culture" activeClassName="active">Culture</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </div>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/Photography" component={Photography} />
                <Route path="/Music" component={Music} />
                <Route path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
