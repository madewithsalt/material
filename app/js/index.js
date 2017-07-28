import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import Forms from './containers/Forms';
import Tables from './containers/Tables';
import DataTables from './containers/DataTables';
import Icons from './containers/Icons';
import Typography from './containers/Typography';
import Collapsibles from './containers/Collapsible';
import Modals from './containers/Modals';
import Buttons from './containers/Buttons';

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
                      <li>
                        <a href="#tables">Tables</a>
                        <ul>
                          <li>
                            <a href="#datatables">Data Tables</a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#collapsible">Collapsible</a></li>
                    </ul>
                  </li>
                  <li><a href="#modals">Modals</a></li>
                  <li><a href="#buttons">Buttons</a></li>
                </ul>
              </div>
            </div>
            <div className="flex-column main-content-container">
              <Route exact path="/" component={Home} />
              <Route exact path="/forms" component={Forms} />
              <Route exact path="/tables" component={Tables} />
              <Route exact path="/datatables" component={DataTables} />
              <Route exact path="/icons" component={Icons} />
              <Route exact path="/typography" component={Typography} />
              <Route exact path="/collapsible" component={Collapsibles} />
              <Route exact path="/modals" component={Modals} />
              <Route exact path="/buttons" component={Buttons} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
