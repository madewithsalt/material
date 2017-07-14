import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import Forms from './containers/Forms';
import Tables from './containers/Tables';
import Icons from './containers/Icons';
import Typography from './containers/Typography';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-wrapper">
          <div className="primary-container home-container flex-wrapper row with-sidenav">
            <div className="flex-column nav-column">
              <div className="side-nav fixed">
                <ul>
                  <li>
                    Components
                    <ul>
                      <li><a href="#icons">Icons</a></li>
                      <li><a href="#forms">Forms</a></li>
                      <li><a href="#tables">Tables</a></li>
                    </ul>
                  </li>
                  <li><a href="#"></a></li>
                </ul>
              </div>
            </div>
            <div className="flex-column main-content-container">
              <Route exact path="/" component={Home} />
              <Route exact path="/forms" component={Forms} />
              <Route exact path="/tables" component={Tables} />
              <Route exact path="/icons" component={Icons} />
              <Route exact path="/typography" component={Typography} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
