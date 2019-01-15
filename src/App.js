import React, { Component } from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import './App.scss';
import './Nav.scss';
import './Footer.scss'

import Home from './Home';
import Work from './Work';
import LumaTax from './portfolio/LumaTax';
import Photography from './Photo';
import Culture from './Culture';
import Music from './Radio';
import About from './About';
import Nav from './Nav';
import Terms from './Terms';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';



// class component
class App extends Component {

  render() {

    return (
      <div className="app">
        <Nav/>
        <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={1800}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/photo" component={Photography} />
                    <Route path="/work" component={Work} />
                    <Route path="/lumatax" component={LumaTax} />
                    <Route path="/culture" component={Culture} />
                    <Route path="/radio" component={Music} />
                    <Route path="/about" component={About}/>
                    <Route path="/terms-and-conditions" component={Terms} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
      </div>
    );
  }
}

export default App;
