import React, {Component} from 'react';
import Input from '../components/Forms/Input';

require('whatwg-fetch');

class Components extends Component {
  componentDidMount() {
    const contentDiv = this.content;

    /*
    * ATTENTION:
    * All content actually lives in /assets/components.html.
    */
    fetch('/components.html')
      .then((response) => {
        return response.text()
      }).then((body) => {
        contentDiv.innerHTML = body
      })

  }

  render() {
    return (
      <div className="primary-container components-container flex-wrapper row with-sidenav">
        <div className="flex-column nav-column">
          <div className="side-nav fixed">
            <ul>
            </ul>
          </div>
        </div>
        <div className="flex-column main-content-container">
          <div id="component-content" ref={(div) => { this.content = div }}></div>
        </div>
      </div>
    )
  }
}

export default Components;
